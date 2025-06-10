---
title: 'Talk: Intro to WP-CLI'
date: '2016-10-06T22:06:08'
draft: false
categories:
- Wordpress
tags: []
author: George Spake
slug: talk-intro-wp-cli
---

These notes are for a talk at the [WordPress Memphis User Group on October 6,
2016](https://www.meetup.com/WordPress-Memphis/events/233387109/).

WP-CLI is a command line utility for WordPress that I regularly use to manage
WordPress sites. WP-CLI works great for small sites and huge multisite
installations and without it, some of the work I do - even as simple as
updating multiple WordPress sites - would be magnitudes more tedious. This is
something that everyone developing or maintaining WordPress sites should be
familiar with.
<!--more-->
I'll be covering some of the basic functionality it provides as well as how to
install and update it.

## Installing

[WP-CLI Documentation: Installing WP-CLI](http://wp-cli.org/#installing)

Note that you'll need to make sure the location of the WP-CLI executable file
is in your $PATH; so, you can either download it to a location that's already
in your path or add the location to $PATH; I'll be doing the latter. The line
I added I used for this talk is `PATH=$PATH:~/bin` (since I'm putting wp-
cli.phar in ~/bin)

You'll also want to change the name from `wp-cli.phar` to `wp` so you can run
wp from the command line.

Finally, you need to make sure your permissions on the file are set correctly
to allow it to be executed; I usually set them to 755 `chmod 755 wp`

## Configuration

[WP-CLI Documentation: WP-CLI Configuration](http://wp-cli.org/config/)

I want to highlight configuration because it will make your life a lot easier
if you set up some basic configuration so you don't have to set flags all the
time. You can always override your config with flags

## Commands

[WP-CLI Documentation: WP-CLI Commands](http://wp-cli.org/commands/)

Finally we get to the commands. I'm going to focus on installing and updating
WordPress with the `wp core` commands and installing and activating plugins
with the `wp plugin` commands

## Other notes

I used Homestead/Vagrant for this demo(Yep, homestead works great for
WordPress) and I highly recommend Joe Ferguson's "[How I use Laravel Homestead
everyday](https://www.joeferguson.me/how-i-use-laravel-homestead-everyday/)"
post which I refer to almost every time I'm setting up a homestead project.
