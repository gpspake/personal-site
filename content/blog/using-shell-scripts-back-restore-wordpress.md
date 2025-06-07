---
title: Using Shell Scripts to Back Up and Restore WordPress
date: '2015-01-14T19:53:34'
draft: false
categories:
- Code
- Linux
- Web Development
- Wordpress
tags:
- bash
- shell
- wp-cli
author: George Spake
slug: using-shell-scripts-back-restore-wordpress
---

Over the past couple of years, becoming comfortable with Linux has been one of
the most valuable things I’ve done as a web developer and I’m always looking
for ways to learn more. Diving in to shell scripting has been on the to-do
list for a while now so here's a case where I had an opportunity to automate a
simple task with a couple of bash scripts.

I backup and restore WordPress installations pretty frequently. Sometimes it’s
because I’m going to make some change that could dramatically affect the
installation, like converting to a network install, and I want to make sure
it’s backed up in case I break something; other times I’m moving an
installation from one environment to another, Like if I wanted to move the
production installation to a development server to test updates; and of
course, sometimes you just need to create scheduled backups.

Backing up and restoring WordPress manually is a tedious process and if I find
myself needing to do it in the middle of working on something, it can really
throw my focus off so it seemed like the perfect task to automate.

So why not use an existing tool? There are a ton of WordPress backup solutions
out there but none of them do exactly what I want them to do. When it comes to
WordPress backups, nothing makes me as comfortable as a copy of the files and
a mysqldump file of the database (as opposed to an XML import or some other
option). For the sake of this shell scripting exercise that’s what I’ll be
doing.

I need two scripts: one to back up WordPress and one to restore it. The backup
files will go in a remote location, which in this case is an organizational
CIFS share, and the restore script will need to allow a search-replace to be
performed on the database as well as the wp-config file in case a back-up is
being restored across domains. For the search replace functionality, I’m going
to use [WP-CLI](http://wp-cli.org/), a command line interface for WordPress.

To move the backups off the server, we’ll use automount to mount the cifs
share to a directory any time we try to access that location. This way our
script won’t have to handle the mount, it can just place the files in a
directory that’s symlinked to the automount location.

For abstraction, I’ve added the following environment variables to ~/.bashrc:

    
    
    #Environment Variables for WordPress backup and restore
      
    #HOSTNAME should already be defined Ex:sitedevl
    export WORDPRESS_DATABASE_NAME=wordpressdbname
    export WORDPRESS_DATABASE_USER=wordpressdbuser
    export WORDPRESS_HOME_DIRECTORY=/var/www/wordpress/public
    export WORDPRESS_BACKUP_DIRECTORY=~/wpbackups
    export WORDPRESS_SQL_FILE_NAME=wordpress.sql

And I don’t want any passwords in my script so the mysql and mysqldump
credentials will go in ~/.my.cnf

    
    
    [mysqldump]
    user=wordpressdbuser
    password=wordpressdbpassword
    
    [mysql]
    user=wordpressdbuser
    password=wordpressdbpassword

For the restore script, I’ll also need to install [WP-CLI](http://wp-cli.org/)
by placing it in ~/bin, renaming it to wp and changing permissions to 755.

Once we have all of that set up, the scripts just need to be placed in ~/bin
and permissions need to be set to 755.

wpdump

    
    
    #!/bin/sh
    
    #Backs up WordPress
    
    #File structure
    # wpbackups
    #   |_year-month-day
    #     |_sql
    #       |_dumpfile.sql
    #     |_html
    #       |_wordpress files...
    
    #mysqldump vars stored in ~my.conf
    #permissions may be required to create directories
    
    #set -e
    
    #The following environment variables should be defined in ~./bashrc
    #export WORDPRESS_DATABASE_NAME=wordpressdbname
    #export WORDPRESS_DATABASE_USER=wordpressdbuser
    #export WORDPRESS_HOME_DIRECTORY=/var/www/wordpress/public
    #export WORDPRESS_BACKUP_DIRECTORY=~/wpbackups
    #export WORDPRESS_SQL_FILE_NAME=wordpress.sql
    
    WORDPRESS_TIMESTAMPED_BACKUP_DIRECTORY=${WORDPRESS_BACKUP_DIRECTORY}/${HOSTNAME}-`date +"%F-%H-%M"`
    WORDPRESS_SQL_DIRECTORY=${WORDPRESS_TIMESTAMPED_BACKUP_DIRECTORY}/sql/
    WORDPRESS_FILE_DIRECTORY=${WORDPRESS_TIMESTAMPED_BACKUP_DIRECTORY}/html/
    
    #testing
    SUCCESS="completed successfully"
    FAILURE="failed"
    red='\033[0;31m'
    green='\033[0;32m'
    nc='\033[0m'
    
    Test() {
    if [[ $? == 0 ]]; then
      echo -e "${green}$1 ${SUCCESS}${nc}"
      else
        echo -e "${red}$1 ${FAILURE} Exiting! ${nc}"
        exit
    fi
    }
    
    echo -e "${green}Backing Up WordPress!${nc}"
    
    #Create wpbackup directory if there isnt one
    mkdir -p ${WORDPRESS_BACKUP_DIRECTORY};
    
    #Check for existing directory
    if [[ -d "$WORDPRESS_TIMESTAMPED_BACKUP_DIRECTORY" ]]; then
      #Remove existing backup directory if there is one
      echo "remove existing backup directory"
      rm -Rf ${WORDPRESS_TIMESTAMPED_BACKUP_DIRECTORY};
      #Test Remove Backup Directory
      Test "remove exisiting backup directory"
    fi
    
    #Create Backup Directory
    echo "create backup directory"
    mkdir -p ${WORDPRESS_SQL_DIRECTORY};
    #Test Create Backup Directory
    Test "create backup directory:"
    
    #Dump Database
    echo "Dump Database"
    mysqldump -u${WORDPRESS_DATABASE_USER} ${WORDPRESS_DATABASE_NAME} &amp;amp;amp;amp;amp;amp;amp;amp;gt; ${WORDPRESS_SQL_DIRECTORY}${WORDPRESS_SQL_FILE_NAME};
    #Test Dump Database
    Test "Dump Database"
    #Show the results
    #echo "${WORDPRESS_SQL_FILE_NAME} was created:"
    #ls -l ${WORDPRESS_SQL_DIRECTORY}${WORDPRESS_SQL_FILE_NAME}
    
    #Copy Files
    echo "Copy Files"
    rsync -rv --exclude=*.log ${WORDPRESS_HOME_DIRECTORY} ${WORDPRESS_FILE_DIRECTORY};
    
    #Test Copy Files
    Test "Copy Files"
    
    echo -e "${green}All Done!${nc}"

wprestore

    
    
    #!/bin/sh
    
    #restores WordPress
    #-n skips backup before restoring
    USAGE="usage: wprestore -b=[backupdirectory] -s=[searchstring] -r=[replacestring] -n"
    
    #testing
    SUCCESS="completed successfully"
    FAILURE="failed"
    
    #colors
    red='\033[0;31m'
    green='\033[0;32m'
    nc='\033[0m'
    
    #Function to test commands
    Test() {
    if [[ $? == 0 ]]; then
      echo -e "${green}$1 ${SUCCESS}${nc}"
    else
      echo -e "${red}$1 ${FAILURE} Exiting! ${nc}"
      exit
    fi
    }
    
    # parse the options and define variables
    while getopts 's:r:b:n' opt ; do
      case $opt in
        s) SEARCH=$OPTARG ;;
        r) REPLACE=$OPTARG ;;
        b) BACKUP_DATE=$OPTARG ;;
        n) NO_BACKUP=1;;
      esac
    done
    
    #check backup directory
    if [ -z ${BACKUP_DATE} ]
      then
        echo -e "${red}No backup date specifiedn${USAGE}${nc}"
        exit;
      else
        BACKUP=${WORDPRESS_BACKUP_DIRECTORY}/${BACKUP_DATE}
        echo -e "${green}Restoring Backup: ${BACKUP}${nc}"
    fi
    
    #backup current state
    if [ -z ${NO_BACKUP} ]
      then
        wpdump
      else
        echo "Skipping backup"
    fi
    
    #Delete WP Directory Contents
    echo "Delete WP Directory Contents";
    rm -rf ${WORDPRESS_HOME_DIRECTORY}/*;
    Test "Delete WP Directory Contents";
    
    #Copy backed up files to main directory
    echo "Copy backed up files to main directory"
    echo "Copying ${BACKUP}/html to ${WORDPRESS_HOME_DIRECTORY}"
    cp -r ${BACKUP}/html/* ${WORDPRESS_HOME_DIRECTORY};
    Test "Copy backed up files to main directory"
    
    #Drop existing database
    echo "Drop existing database"
    mysql -u${WORDPRESS_DATABASE_USER} -e "DROP DATABASE IF EXISTS ${WORDPRESS_DATABASE_NAME}";
    Test "Drop existing database"
    
    #Create wordpress database
    echo "Create WordPress database"
    mysql -u${WORDPRESS_DATABASE_USER} -e "CREATE DATABASE IF NOT EXISTS ${WORDPRESS_DATABASE_NAME}";
    Test "Create WordPress database"
    
    #restore database
    echo "Restore WordPress database"
    mysql -u${WORDPRESS_DATABASE_USER} ${WORDPRESS_DATABASE_NAME} &amp;amp;amp;amp;amp;amp;amp;amp;amp;lt; ${BACKUP}/sql/wordpress.sql;
    Test "Restore WordPress Database"
    
    #Search and replace database with new names
    #check search and replace strings
    if [ -z ${SEARCH} ] || [ -z ${REPLACE} ]
      then
        echo "Search replace strings not defined"
      else
    
        #Search and Replace daatabase
        echo -e "Replacing ${SEARCH} with ${REPLACE} in the database";
        wp search-replace --network --url=${SEARCH} ${SEARCH} ${REPLACE} --precise;
        Test "search-replace database"
    
        #search and replace wpconfig file
        echo  "Search replace file"
        sed -i 's/${SEARCH}/${REPLACE}/g' ${WORDPRESS_HOME_DIRECTORY}/wp-config.php;
    fi
    
    echo 'All done!'

I’ve already gotten some flak from friends that this is overkill. There’s
always a better way to do everything, though, and this is a million times
better than how I was doing this before. What was a ten minute manual process,
now only takes a minute with a couple of commands.

This is actually the first time I’ve written a shell script that automates
something I _actually_ do often. It was also the first time I’ve been formally
introduced to defining environment variables, setting up symlinks, using mount
and automount, using sed to search and replace in a file from the command
line, using colors in the shell, and a bunch of other cool stuff. So
regardless of whether or not they’re perfect, I learned a ton.

I was fortunate enough to have a lot of people helping me out with this
including my coworker, whose name may or may not start with a J, and several
folks from the memtech community especially
[@speakingcode](https://twitter.com/speakingcode) and
[@edyesed](https://twitter.com/edyesed). Also thanks to
[@eterps](https://twitter.com/eterps) for introducing me to WP-CLI.
