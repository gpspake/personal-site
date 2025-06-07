---
title: Compass Sticky Footer Mixin
date: '2014-09-04T16:11:04'
draft: false
categories:
- Code
- Design
- Web Development
tags:
- bootstrap
- compass
- css
- foundation
author: George Spake
slug: compass-sticky-footer-mixin
---

When you're dealing with browsers and markup, content tends to float to the
top of the window by default. In most cases there is enough content on the
page to keep the footer at the bottom of the window but, if a page doesn't
occupy the full height of the window, the footer is going to float right up to
the bottom of the content creating an unattractive empty space below.

There plenty of [blog posts and forum
discussions](http://lmgtfy.com/?q=sticky+footer) about how to handle this with
js or pure css. This is one of those things, though, that can get janky pretty
quickly and you can run in to some odd behavior - especially with the js
solutions. A while back I stumbled across a nice [Sticky Footer example for
Bootstrap](http://getbootstrap.com/2.3.2/examples/sticky-footer.html) which is
one of the more elegant solutions I've found. If you aren't using Bootstrap
though, there is a [Compass sticky footer module ](http://compass-
style.org/reference/compass/layout/sticky_footer/)that provides the same
functionality. I've used it on this site, which was built with
[Foundation](http://foundation.zurb.com/), and it was as easy as adding a
little bit of markup and dropping a single line in to my stylesheet:

    
    
    @include sticky-footer(54px, "#my-root", "#my-root-footer", "#my-footer");

You can see it in action on the [homepage;](https://georgespake.com/) notice
that if you zoom out the footer stays put.
