---
title: Redesigning GeorgeSpake.com
date: '2020-04-05T12:00:00'
draft: false
categories:
- Code
- Design
- Projects
- Web Development
- Wordpress
tags:
- codepen
- css grid
- gutenberg
- svg
author: George Spake
slug: georgespake-com-redesign
---

This site is long overdue for a redesign. It's been nearly five years but I've
finally given it some much needed attention.

I've updated the homepage design and added a showcase for
[projects](https://georgespake.com/projects) I've been involved with. I also
migrated all of my content to the [Gutenberg
editor](https://wordpress.org/gutenberg/) and the default WordPress Twenty
Twenty theme.

## Choosing a theme

> [Twenty Twenty](https://wordpress.org/themes/twentytwenty/)

Selecting a theme is an important decision that will have a big impact on your
overall experience with WordPress. Paid themes like [Divi
](https://www.elegantthemes.com/gallery/divi/)come with great support and
powerful site builders that can be used to customize your site without writing
any code but, because of their complexity, it can be more difficult to
customize the templates. More bare-bones themes have limited options but can
be easy to customize using the out of the familiar WordPress theme API and
template hierarchy.

I typically reach for Divi for new WordPress sites and redesigns because users
will be more capable of making changes without my help. However, since I'll be
making changes to this site myself, I want to go the customizable route. I
settled on the default WordPress [Twenty
Twenty](https://wordpress.org/themes/twentytwenty/) theme. There's some
satisfaction that comes with using the default theme; I know it takes
advantage of WordPress's out of the box features; I found it pleasant to work
with and easy to customize.

_A new default WordPress theme is released each year, named after the year, as
part of the WordPress open source project. Last year it was[Twenty
Nineteen](https://wordpress.org/themes/twentynineteen/). This year it just
happens to be Twenty Twenty. Themes continue to be maintained so don't
hesitate to use a default theme from a previous year if you like something
about it._

## Designing the Site

The content and page structure of my site did not change much. My main focus
was on the homepage and the new [projects](https://georgespake.com/projects)
page I would be adding. everything else, including the blog, would use the
theme's default templates.

I designed a logo years ago that I still like and I want to keep using. In the
past I've just displayed my logo on the home page; I wanted to introduce some
new design elements with links to featured content like my blog and projects
I've worked on. The logo is hexagonal and I wanted to incorporate that in to
the theme; As always, step one is paper and pencil so I started sketching out
some ideas in a dot-grid notebook.

![](https://georgespake.com/wp-content/uploads/2020/04/gs-components-
draft-1024x662.jpg)Initial paper and pencil sketch of home page components

## Building Components in CodePen

Once I had a good idea of what I wanted my homepage components to look like, I
started building them in CodePen. Working in CodePen is nice because I can
access my Pens anywhere and it makes the things you're working on easy to
share if you need help with something.

_In one case, I was having an issue with an SVG and I just sent a link to a
friend who gave me some great advice about how to fix it and sent me back a
working copy._

I built the components using [CSS Grid](https://developer.mozilla.org/en-
US/docs/Web/CSS/grid), [FlexBox ](https://developer.mozilla.org/en-
US/docs/Learn/CSS/CSS_layout/Flexbox)and SVG. I learned a lot in the process;
CSS Grid is a game changer and, combined with SVG, we can accomplish some
really cool stuff that would have been hacky or impossible in the past.

### Finalized Pens

## Migrating components in to a WordPress child theme

When my components were finished, I created a [Twenty Twenty child
theme](https://developer.wordpress.org/themes/advanced-topics/child-themes/)
and copied index.php from Twenty Twenty in to my theme and renamed it to
front-page.php. The template that gets loaded at any given route on a
WordPress site is determined by a naming convention described in the
[WordPress Theme Template
Hierarchy](https://developer.wordpress.org/themes/basics/template-hierarchy/).
If there is a custom front-page.php template in my child theme, that's what
will be loaded. Once I confirmed it was loading properly, I migrated the
markup from CodePen in to my custom templates, creating additional [template
parts](https://developer.wordpress.org/reference/functions/get_template_part/)
as needed.

Next I needed to migrate my CSS from CodePen, so I created a css file for my
homepage and en-queued it in my child theme's functions.php file.

    
    
    <?php
    
    add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles' );
    function my_theme_enqueue_styles() {
        $parent_style = 'parent-style';
    
        wp_enqueue_style( $parent_style, get_template_directory_uri() . '/style.css' );
        wp_enqueue_style( 'child-style',
            get_stylesheet_directory_uri() . '/style.css',
            array( $parent_style ),
        1
        );
    }
    
    add_action( 'wp_enqueue_scripts', 'gs_style' );
    function gs_style() {
        wp_enqueue_style( "gs-homepage-styles", get_stylesheet_directory_uri() . '/gs-homepage.css');
        wp_enqueue_style( "gs-projects-cards-styles", get_stylesheet_directory_uri() . '/gs-project-cards.css');
    }

Since I'm working with SCSS in CodePen, I can't copy it as-is in to my CSS
file; I'll need to select "view compiled CSS" in codepen and copy the
resulting CSS.

![](https://georgespake.com/wp-content/uploads/2020/04/image-1024x404.png)View
compiled CSS option in CodePen

Note: This is not how I'd handle any sort of "real life" deployment. However,
this was a personal project and I was prioritizing the ability to share my
code in CodePen. So, it worked pretty well for my use case.

_Read about[how I added custom templates for my
projects](https://georgespake.com/blog/adding-projects-to-georgespake-com/)_

## Migrating content to the Gutenberg editor

[Gutenberg ](https://wordpress.org/gutenberg/)is the new modern block editor
included with WordPress. Instead the traditional WYSIWYG editor, Gutenberg
allows you to manage your content in blocks. If you think you know WordPress
and you haven't used Gutenberg editor, I encourage you to check it out.
Gutenberg is built with [React](https://reactjs.org/) and it brings a modern
snappy experience to editing content in WordPress.

_Trivia: During the development of Gutenberg,[WordPress creator Matt Mullenweg
wrote an open letter denouncing some of Facebooks licensing
decisions](https://ma.tt/2017/09/on-react-and-wordpress/). H_e _suggested that
the Gutenberg project could not move forward with React given certain changes.
The letter received such a powerful response that Facebook reversed their
decision. The Gutenberg project proceeded with React and the React community
as a whole benefited from the decision. This illustrates how critical and
influential open source projects like WordPress can be to the software
development community._

Because my [previous theme](https://georgespake.com/projects/grunterie/) was
built with [Zurb Foundation](https://get.foundation/) and I had customized a
lot of my content with Foundation markup, the most challenging part of moving
to the Gutenberg editor was moving my content out of custom Foundation code
and in to blocks. I manually migrated every single post on my site (around 50)
in to the new editor including galleries, code blocks, and embedded content.
Still, the process only took a couple of hours and improved the state of my
content greatly. I feel much better knowing that my theme no longer has a
dependency on an outdated version of Foundation.

## That's all

Visit my [home page](https://georgespake.com/) and [projects
page](https://georgespake.com/projects) to see the final product

Read more on my [blog](https://georgespake.com/blog/)

> [Adding Projects to GeorgeSpake.com](https://georgespake.com/blog/adding-
> projects-to-georgespake-com/)
