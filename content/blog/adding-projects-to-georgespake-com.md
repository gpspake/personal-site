---
title: Adding Projects to GeorgeSpake.com
date: '2020-04-05T12:30:00'
draft: false
categories:
- Code
- Design
- Projects
- Web Development
- Wordpress
tags:
- codepen
- redesign
author: George Spake
slug: adding-projects-to-georgespake-com
---

## What is a custom post type?

WordPress makes publishing web pages and blog posts easy but sometimes you
want to publish content that's specific to your website.

I wanted to post projects I've been working on, similar to how I post blog
posts like this one, but I don't want that content to be mixed in with my
blog. I want an entirely different archive of my projects at a separate URL.

To accomplish this, I'll register a custom post type called "Project"

_Read about custom post types on the WordPress Developer Resources website._

> [Post Types](https://developer.wordpress.org/themes/basics/post-types/)

I also want the projects to be sortable by my role in the project like
"volunteer" so I'll add a custom taxonomy called "Role" and associate it with
projects.

You might be familiar with categories and tags, the default taxonomies
associated with posts. Just like you're not limited to the default post types,
you're also free to add your own taxonomies.

_Read about taxonomies on WordPress.org_

https://wordpress.org/support/article/taxonomies/

## Registering custom content types

In the past, I've written code to register post types and taxonomies in a
custom plugin but now I use Custom Post Type UI.

Custom Post Type UI is an essential plugin that makes managing custom content
types easy.

> [Custom Post Type UI](https://wordpress.org/plugins/custom-post-type-ui/)

In just a few clicks, I added a Project post type and a Role taxonomy, changed
a few options and I was set.

Now I can add projects from wp admin and set roles on them. I can also visit
the projects archive at `/projects` and sort by role at `/projects/role/{role-
name}/`

## Adding Custom Fields

Before I move on to templates, I want to add a couple of custom fields for
projects.

Custom fields are a great way to add options to your custom content types that
might be different for each one. I'll use them to specify a color and the
alignment for each project.

_Read about custom fields on WordPress.org_

https://wordpress.org/support/article/custom-fields/

ACF is another essential plugin. It makes it easy to register all sorts of
custom fields and associate them with content types.

> [Advanced Custom Fields (ACF®)](https://wordpress.org/plugins/advanced-
> custom-fields/)

## Designing the projects page

I built the project components on CodePen so I could make changes easily
before migrating them in to WordPress.

_Read more about[redesigning my
site](https://georgespake.com/blog/georgespake-com-redesign/)_

## Creating custom WordPress theme templates to display projects and roles

To finish everything up, I added templates to my child theme that would
display projects correctly on the [project and role archive
pages](https://georgespake.com/projects/), [single
project](https://georgespake.com/projects/devmemphis/) pages, and [search
results](https://georgespake.com/?s=devmemphis). Then, I copied my components
from CodePen in to the templates. Now, anywhere a project is displayed on the
site, it will be formatted correctly on a blue background.

_Read more about the WordPress theme API and template hierarchy on the
WordPress Developer Resources site._

> [Template Hierarchy](https://developer.wordpress.org/themes/basics/template-
> hierarchy/)

> [Redesigning GeorgeSpake.com](https://georgespake.com/blog/georgespake-com-
> redesign/)
