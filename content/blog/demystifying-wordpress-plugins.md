---
title: 'Talk: Demystifying WordPress Plugins'
date: '2016-02-28T06:47:09'
draft: false
categories:
- Talks
- Wordpress
tags:
- wordpress plugins
author: George Spake
slug: demystifying-wordpress-plugins
---

This post was written to accompany a talk about WordPress plugins at the
[WordPress Memphis User Group](http://www.meetup.com/WordPress-
Memphis/events/228629209/), which meets on the first Thursday of every month.
<!--more-->
## What are plugins

Chances are, if you've been using WordPress, you're aready familiar with
plugins but, if you aren't entirely sure what they are, how they work, or even
if you've never ever heard of them, don't worry. The [WordPress Codex
describes plugins](https://codex.wordpress.org/Plugins) as "_ways to extend
and add to the functionality that already exists in WordPress_." Two plugins
are included with every new installation of by default – akismet and hello
dolly – but there are around 43 thousand plugins for WordPress that can do
just about anything you can think of. We'll learn how to find quality plugins,
install and activate them, and finally, get a little advanced and learn what's
going on behind the scenes and how plugins work.

## Finding plugins

Most plugins, with the exception of some premium plugins that have to be
downloaded from a website and manually installed, are included in the
[WordPress Plugins Directory](https://wordpress.org/plugins/) at
wordpress.org. This is the best place to go to discover plugins and get some
important details that will help you make good decisions about which plugins
to use. Before you install a plugin, you should refer to the plugin directory
to find out who the author is, how often it is updated, how many sites are
actively using it, and how it is rated by the community. In most cases, you
should void plugins that haven't been updated in a long time or that have a
low number of active installs.

[pic ratings section of plugin]

## Installing and Activating Plugins

[![plugins-admin](https://georgespake.com/wp-content/uploads/2016/02/plugins-
admin.png)](https://georgespake.com/wp-content/uploads/2016/02/plugins-
admin.png)Install and manage plugins from the Plugins page in the wordpress
admin

There are two ways to install plugins from the plugins page in the wordpress
admin section. The easiest way to install a new plugin is to click 'Add New'
at the top of the plugins page, select a plugin , and click install. For
plugins that are not available in the plugin directory, you may need to
install them manually from a file on your computer. To install a plugin
manually, click the 'Upload Plugin' button on the 'Add Plugin' page and choose
the file from your computer - the plugin will need to be a zip file.

Once you have installed a plugin, it will need to be activated before you can
use it. To activate a plugin, simply click activate. You can also de-activate
and remove plugins from the plugins screen in the wp-admin section

## Configuring plugins

[![Plugin settings page for Akismet](https://georgespake.com/wp-
content/uploads/2016/02/akismet-
settings-300x148.png)](https://georgespake.com/wp-
content/uploads/2016/02/akismet-settings.png)Plugin settings page for Akismet

Most plugins come with settings that can be changed from the wp admin section
and will add a link to the menu. Sometimes, you might not see the new item in
the admin menu so you can click on settings under the plugin description on
the plugins admin page. Some plugins are very simple and have few or no
options. Others have multiple settings pages with lots of complex options.

## What happens behind the scenes

What _really_ happens when you install a plugin? WordPress consists of a bunch
of files on a server and a database. When you install a plugin, a folder
containing the plugin files is placed in the wp-content/plugins  directory on
your server.

You can access your plugins directory with an ftp client like
[filezilla](https://filezilla-project.org/) which you can download for free.
If you haven't done this before, your hosting provider (godaddy or dreamhost)
should provide instructions for accessing your files with filezilla and may
even allow you to access the files right from your browser via your hosting
control panel.

Once you've connected to your server via ftp you can navigate to /wp-
content/plugins and see where your plugins have been installed. You can even
drag and drop a plugin directory you downloaded from the repository here (make
sure to unzip it first)

## What's in a plugin

Now that you've seen that a plugin is nothing more than a folder with a bunch
of files in it, let's see what's really in there.

Every plugin will have a php file in the main directory, usually with the same
name as the plugin, with some commented out details at the top. This is the
only file required by the plugin and those comments are the [file
header](https://codex.wordpress.org/File_Header) that includes the name of the
plugin, the description, the author name and some other info.

Even if the file header is the only content in the file and that is the only
file in the plugin, as long as the comment block is complete, we should be
able to activate the plugin.

## So, What Now

Once you know simple it is to write a plugin, you can start extending
WordPress's functionality and adding your own features. If you have ever added
something to your theme's functions.php file that you would like to work even
if you change themes, guess what? Now you know where to put it. Plugins don't
have to be complicated; they can just include a few lines. By putting your
code in plugins, you keep it contained and separate from your theme so it
won't be lost if you switch. Finally, in the spirit of WordPress, you can
share your code with millions of other people who might want to use it by
[publishing your plugin to the WordPress plugin
directory](https://codex.wordpress.org/Plugin_Submission_and_Promotion).

## Further Reading

If you want to jump right in to plugin development, I recommend [Getting
Started with WordPress Plugin Development: The Ultimate
Guide](https://premium.wpmudev.org/blog/wordpress-plugin-development-guide/)
from WPMUdev

## Plugin Recommendations

Most WordPress users will have at least one or two plugin recommendations.
These are a few plugins that I install on almost every WordPress site I work
on. You can read more about them in the plugin directory.

  * [JetPack](https://wordpress.org/plugins/jetpack/)
  * [Admin Menu Editor](https://wordpress.org/plugins/admin-menu-editor/)
  * [User Role Editor](https://wordpress.org/plugins/user-role-editor/)
  * [Advanced Custom Fields](http://www.advancedcustomfields.com/)
  * [Gravity Forms](http://www.gravityforms.com/)
  * [Custom Sidebars](https://wordpress.org/plugins/custom-sidebars/)
  * [WordPress SEO](https://wordpress.org/plugins/wordpress-seo/)
  * [WP super cache](https://wordpress.org/plugins/wp-super-cache/)
  * [Disquss](https://wordpress.org/plugins/disqus-comment-system/)
