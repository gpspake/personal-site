---
title: Grunterie &#8211; Another Foundation Theme for WordPress
date: '2014-04-09T06:02:55'
draft: false
categories:
- Code
- Software
- Web Development
- Wordpress
tags:
- compass
- foundation
- grunt
- grunterie
- reverie
author: George Spake
slug: grunterie-another-foundation-theme-wordpress
---

[![Grunterie Screenshot](https://georgespake.com/wp-
content/uploads/2014/04/screenshot.png)](https://github.com/gpspake/grunterie)

[Foundation](http://foundation.zurb.com/)’s hot right now and I swear by it.
Having used both Bootstrap and Foundation, I quickly decided that Foundation
was the framework for me and I use it for everything. It’s really clean, easy
to work with and I don’t have to fight with it to get what I want.

I do a lot of work with WordPress so I spent a good bit of time trying out all
of the high profile WordPress themes built on Foundation. They all had their
pros and cons - that’s a post I’m not going to write - but
[Reverie](http://themefortress.com/reverie/) stood out to me as the clear
leader. It’s well written, clean and simple but not too simple; It’s actually
OK as a good looking out-of-the-box theme but it’s not bogged down with a
bunch of dumb options. It’s also well maintained and kept pretty close to the
current version of Foundation. I’ve used Reverie on this site and the [Little
Bahalia Publishing site](http://littlebahalia.com/).

Reverie is set up to use [Compass](http://compass-style.org/), which is great;
Compass is really powerful and it does a lot of neat stuff if you’re using
SASS. I’m all about Compass but lately I’ve been leaning more towards
[Grunt](http://gruntjs.com/). I've been hearing about Grunt for a while but I
was only formally introduced to it recently by Nathanael Smith who did a talk
on it at a couple of memtech user groups. If you aren't familiar with Grunt,
Check out the [getting started page](http://gruntjs.com/getting-started) to
learn more.

Turns out Grunt’s pretty awesome and the [official Foundation install
docs](http://foundation.zurb.com/docs/sass.html) recommend it. So, long story
short, I Gruntified Reverie. I started out with a new Foundation project that
I created with the Foundation gem, added the reverie theme files, tweaked some
stuff to make it work nice and called it Grunterie. It’s got all the cool
templates and features from Reverie with all of the advantages of Grunt. And
since it was built with the foundation gem, you can update foundation with
`$foundation update` and stay on the cutting edge. No more waiting around for
the latest version.

I still vote for Reverie as the best Foundation WordPress theme if you want to
use Compass but, if you want to use Grunt, check out
[Grunterie](https://github.com/gpspake/grunterie).
