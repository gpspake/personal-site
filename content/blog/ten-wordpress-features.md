---
title: Ten Things Every WordPress Pro Should Know About
date: '2013-05-20T13:07:08'
draft: false
categories:
- Web Development
- Wordpress
tags: []
author: George Spake
slug: ten-wordpress-features
---

When I started using WordPress it was not nearly as powerful as it is now.
Over time, the internet's favorite open source Content management system has
picked up a lot of really cool features that make it easier to work with and
more capable of powering more dynamic and robust websites. When I really
started to delve in to WordPress development, I had no idea how many tools
were available right out of the box. Little by little, they all started to
make sense and I started to utilize them effectively. Now that I am a little
bit more comfortable, I think it might be helpful to share some of the things
that I find most important as a web developer using WordPress.  

### 1\. Using the WordPress API and built-in Functions

The WordPress Application Programming Interface (API) is actually comprised of
a [collection of APIs](http://codex.wordpress.org/WordPress_APIs) for
different components in WordPress. The API includes various functions that can
be used in plugins or added to a theme's
[functions.php](http://codex.wordpress.org/Functions_File_Explained) file to
do all sorts of things correctly, that would otherwise involve a lot of
legwork. Several of the items in this list, interacting with the database and
creating custom post types and taxonomies are made very simple with the use of
functions like
[register_post_type()](http://codex.wordpress.org/Function_Reference/register_post_type)
and [get_option()](http://codex.wordpress.org/Function_Reference/get_option).
You can get detailed information about using functions on the [Function
Reference](http://codex.wordpress.org/Function_Reference) Pages of the
WordPress Codex.

### 2\. Interacting the WordPress Database

WordPress uses a [mySQL
database](http://codex.wordpress.org/Database_Description) with tables that
store data about everything from post-content to plugin-settings . Most
interaction with the WordPress database is handled by the WordPress API so
there typically isn't much of a need to access the database directly but it's
still something that WordPress users should be familiar with. How you access
the database depends on both personal preference and how WordPress is set up.
Some hosting companies provide online software with a graphical user interface
that allows you to access and manipulate your database in a browser. Other
times you may need to access the database directly from a console or an ssh
client. You can also use a plugin like [Portable
phpMyAdmin](http://wordpress.org/extend/plugins/portable-phpmyadmin/) to
access the database through your WordPress dashboard. Be careful though, if
you break something it could be really hard to fix. Even if you are sure that
you will never be messing around with your database, it's good to know what's
in there there and how the API interfaces with it to make WordPress work.
Sometimes, [familiarity with the WordPress database can be useful in solving
very unusual problems](http://praveenlobo.com/techblog/how-to-remove-the-blog-
slug-from-the-permalinksurl-in-wordpress-multisite-installation-without-a-
plugin/).

### 3\. Creating Child Themes

If you want to modify a WordPress theme it's usually not a good idea to modify
the themes core files. If you modify anything in the original theme, all of
your changes will be overwritten if the theme is updated. To solve this
problem, WordPress allows you to create [child
themes](http://codex.wordpress.org/Child_Themes) that automatically point to a
parent theme and usually only contains files that are different from the
original. Creating and activating a child theme is easy and, best of all, you
can update the original theme without losing any of your changes. It's also
useful to have all of your changes to the theme in one place so they aren't
mixed in with the original files.

### 4\. Writing Plugins

Writing plugins is not nearly as hard as you might think and plugins do not
have to be large or complex. In fact, it's perfectly fine to write really
simple plugins. I made a plugin to displays recent blog posts on my homepage
with a [shortcode](http://codex.wordpress.org/Shortcode_API) and I only had to
write about 10 lines of code. Of course, when you do want to write more
complex plugins, the wordpress API provides tools that make it easy. In fact
just about anytime you are dealing with code in wordpress that is not directly
related to your theme, it's a good idea to write it in a plugin rather than
your theme's functions.php file. If you want to learn how to write a plugin,
there are ton of [online walkthoughs and tutorials](http://wpmu.org/how-to-
write-a-wordpress-plugin-12-essential-guides-and-resources/) that can be used
to supplement the [documentation in the WordPress
Codex](https://codex.wordpress.org/Writing_a_Plugin).

### 5\. Using WordPress Hooks

WordPress uses [Filter and Action
Hooks](http://codex.wordpress.org/Plugin_API/Hooks) that allow you to plug in
code just about anywhere. There are so many hooks they're almost hard to keep
up with but the [WP Hooks Database hosted on
adambrown.info](http://adambrown.info/p/wp_hooks) lists of all of them along
with useful information like where they are located in the source files and
what they do. In addition to utilizing the hooks already in WordPress, you can
create your own. Understanding and using hooks takes some time to get used to
but it is really important because they are used so heavily in WordPress.

### 6\. Creating Custom Post Types

Behind the scenes, pages are really just a post-type. You can extend WordPress
by creating your own [post-types](http://codex.wordpress.org/Post_Types) that
will show up, just like posts and pages in the menus in wordpress and can be
displayed on your site however you want. For instance, I might create a custom
post-type called "Products" because I want my products to be separated from my
posts. I will now be able to add Products-just as I would add Posts or Page-
that can be edited from my wordpress menu and displayed on my site.

### 7\. Creating Custom Taxonomies

Categories and Tags are [taxonomies or "ways of grouping
things"](http://codex.wordpress.org/Taxonomies). Categories are hierarchical
but tags are not. You can create your own custom taxonomies and specify if
they are hierarchical or not. To extend my "Products" example, I could create
my own hierarchical taxonomy called "Product Types" which could include
'furniture', electronics etc… as well as sub categories like 'tables' and
'stereos'. They probably aren't utilized as often as they should be but There
are a lot of different examples in which custom post types and taxonomies can
be very useful.  
Tables stored in

### 8\. Using Custom Fields

Custom fields are just metadata that can be associated with posts. To extend
my products example even further, I might want to create a custom field called
"Product number" that can be displayed as a field, just like the title and
body for every Product.

### 9\. Setting up a WordPress MultiSite Network

[WordPress Multisite](http://codex.wordpress.org/Create_A_Network) is a
shining example of the benefits of open source software development. WordPress
Multisite began as an open source project called [WordPress Multi User or
MU](http://codex.wordpress.org/WordPress_MU), which allowed multiple wordpress
sites to be managed from a single installation; it was later integrated in to
WordPress as a standard feature. When MultiSite is activated, the database is
extended and new sites can be added as an extension of the primary one and
plugins, themes, roles, capabilities etc.. can all be managed across the
network from a single admin panel. This is very useful if you are running
several separate but related sites or blogs but you don't want to manage them
all separately. If you have 10 sites that all use the same plugins, you will
only need to update them once. WordPress MultiSite is popular among
universities and large organizations and some have even created [multi-
network](http://wordpress.org/extend/plugins/wp-multi-network/)
implementations. This is a pretty cool topic to follow in the WordPress world
right now.

### 10\. Roles and Capabilities

For WordPress sites that are accessed by multiple users, [roles and
capabilities](http://codex.wordpress.org/Roles_and_Capabilities) allow
individual permissions to be managed for one user or a group of users.
WordPress comes with a number of roles and capabilities by default but new
ones can be added. This is something that I would definitely recommend using a
plugin; The [User Role Editor](http://wordpress.org/extend/plugins/user-role-
editor/) plugin handles this so well that I find it impractical to manage on
my own.

### But Wait, There's More…

This list is not meant to be exhaustive; there are obviously a ton of cool
features that I haven't even mentioned; These are just some I've come across.
If you don't want to get your hands dirty with the actual code, there are a
bunch of plugins that allow you handle just about everything on the list from
the WordPress Admin Panel; Some might even argue that they are so well handled
by existing plugins that there is no need to write any of it yourself but
that's for you to decide. Either way, it's important to know about what
WordPress has to offer so you can be better prepared for whatever you might
need to do. In addition to the extensive support provided by the WordPress
Codex, there are a ton of excellent blog posts and tutorials online that cover
everything in more detail.
