---
title: Dealing with the Dreaded &#8216;wpautop&#8217;
date: '2013-05-30T20:46:00'
draft: false
categories:
- Code
- Wordpress
tags:
- tinymce
- toggle wpautop
- wordpress plugins
- wpautop
author: George Spake
slug: dealing-with-the-dreaded-wpautop
---

## What is "wpautop"?

Well, to put it simply, wpautop is short for 'WordPress Auto P'\- with p being
in reference to an html p tag. wpautop is a wordpress function that "Changes
double line-breaks in the text into HTML paragraphs (<p>…</p>)." You can read
more about it in the WordPress codex.

Most of the content on WordPress sites is added and updated through the
backend interface with TinyMCE, a robust wysywig text editor. Because
WordPress is designed to be used by anyone, and not just web developers,
Tinymce handles the automatic insertion HTML markup to ensure that the content
displays properly on the site.

TinyMCE includes two tabs at the top of the editor that allow users to switch
between 'visual' and 'text' editing. Most people opt to use the visual editor
because it allows users to see what their posts will look like from the
interface; it's almost like editing a document in MS Office. The text editor
only shows plain text and allows users to enter html and have a little bit
more control over their markup.

If you type some text and add a picture to a post using the visual editor, you
will notice, once the post is published, that WordPress has added some html
markup to the page source that was invisible in the editor. If you return to
the'Edit Post' screen and switch to the 'text' editor; you will see that some
of that markup has been added behind the scenes. You might also notice that
there are some extra p tags that appear in the page source that don't show up
in the text editor; that's wpautop doing its job.

## So why does anyone have a problem with it?

The problem with wpautop is that it adds html markup even when you don't want
it to. HTML savvy WordPress users who try to include their own markup in a
WordPress page or post might be surprised to find that once their post has
been saved, the frontend result is full of a bunch of seemingly random p tags
all over the place that they didn't put there, which can totally ruin their
intended outcome. I actually prefer to edit my

The best solution: toggle autop
