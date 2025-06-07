---
title: 'Talk: Beyond Custom Post Types &#8211; Building an Organizational News Site
  with WordPress'
date: '2017-04-23T03:09:27'
draft: false
categories:
- Talks
- Web Development
- Wordpress
tags: []
author: George Spake
slug: wordcamp-2017
---

Slides and speaker notes prepared for a talk at WordCamp Raleigh 2017.

## Old News - Before WordPress

Campus News  
In 2013, UTHSC’s online news was limited to a Press Releases page on the
Marketing and Communications department’s site.

There was lots of boilerplate press release stuff that was the same on all of
the news but no rich content, no text, no images and little emphasis on SEO or
social media.

Posting news involved converting word documents to html and manually uploading
as htm files which meant web team had to be involved and it was a pretty
terrible process.

Marketing and Communications was producing beautiful layouts and great news
content for print but the web was not being utilized or prioritized as a
platform to push news out - largely because the staff didn’t have the tools to
do so.

The importance of getting our news up on the web and Marketing was obvious.

Communication's need for a way to publish rich content on a modern dedicated
news site.

Among other things, the content needed to be searchable, filterable,
accessible, and optimized for search engines and social media.

While we were figuring all of this out, we realized that we might be able to
improve a couple of other systems along the way.

### News Notes

News Notes was a section on the site that included records of press coverage
of UTHSC by outside publishers. They were all contained in inconsistently
formatted PDFs and many of the references didn’t included links or dates so it
was difficult to normalize.

This was really good content, though, and we wanted to provide a way to easily
maintain and view these records long term.

### Campus Announcements

At the time, campus announcements were delivered daily via a long unattractive
text based email digest.

The entire moderation and submission process was email based. Email was the
source of truth for campus announcements and there was no way to view them
online.

The same digest email was delivered to faculty, staff, and students regardless
of the relevance of the announcements to the recipient’s affiliation.

The goal was to provide a web based announcement system that would allow users
to view announcements online and via targeted html emails with announcements
relative to recipient’s affiliation. Users needed the ability to submit and
manage announcements via a web UI and Communications and marketing needed to
be able moderate the announcements easily.

WordPress was an easy choice – It’s free, open source, powers a significant
percentage of the web, and has an excellent community and plugin ecosystem. We
were also confident that it could handle everything we wanted to do out of the
box.

## Great Migration - Moving to WordPress

Fast forward to 2017 and we’ve been live for almost four years now. Let’s look
at where we are today and how we got here.

### News

#### WordPress Out of The Box

WordPress is configured out of the box as a blogging platform and since news
sites are essentially blogs, we were able to use the default post type and
taxonomies as the news portion of the site is essentially a blog.

#### Importing Existing Content

Importing the existing news published to the communications and marketing
department site was a little painful because of inconsistency and bad html but
fortunately there wasn’t really much metadata so I wrote a script to parse
those files and build a standard WordPress xml file like the one you would get
if you exported your posts. If you were importing more complex content, a more
elegant solution might be warranted but this worked fine for our case; all of
the press releases were imported with communications and marketing as the
author and Press Releases as a category.

#### Results

We imported about 800 Press releases from between 2003 and 2013; flash forward
to today and around 450 posts have been published since we went live about
three and a half years ago and nearly all of them include rich content,
taxonomy, links, and images.

The old site hardly got any traffic while the new site regularly gets
thousands of visits a day. The most popular story on the site got fifteen
thousand views on the day it was published and it’s gotten ten thousand more
in the year or so since it’s been released. This demonstrates that the
platform enables a level of engagement that wasn’t possible before. Compare
that to the most popular press release on the old site about Steve Jobs
receiving a liver transplant by UTHSC doctors which only got 800 views.

Back in 2013, we were still in the early stages of completely rebuilding the
frontend codebase for the first time in 10 years with Foundation. But because
we were starting from scratch, with WordPress, we were able to build a theme
with Foundation (Shout out to Reverie) and the news site ended up being the
first responsive site on campus.

This represents a lot of the value that came from developing this site. But,
as cool as the results were, this is just plain old WordPress. We haven’t
really ventured in to custom content at all yet.

On that note, I want to change the topic back to the News Notes section I
mentioned but first I want to talk about when it’s appropriate to use custom
post types.

I use custom post types on a lot of the sites I work on so they aren’t just
for edge cases and it’s one of the main wordpress topics I find myself talking
to people about all the time.

Custom post types are useful when you want to include an archive of content,
that isn’t a blog on your site.

Often, you’ll want to organize and format that content differently than the
content on your blog and you don’t want it cluttering up your blog with a
completely different type of content.

Custom content types are one of the reasons that I have a hard time thinking
of WordPress as just a blogging platform.

The introduction of custom post types opens the door to building robust
applications with WordPress; a blog just happens to be the default example you
get and we were able to utilize all of those default features for the news
portion of this site.

Let’s take a look at an example with News Notes.

### In the Media

We renamed “News Notes” to “UTHSC In the Media” which has its own archive on
the site, separate from the blog. Instead of linking to the single posts
though, the headlines link to the source article and, instead of displaying a
post author, we display the publisher, and instead of displaying a featured
image, we display a publisher logo.

To make this work, we created an “in-the-media” custom post type along with
its associated “in-the-media-publisher” and “in-the-media-tags” taxonomies
that could be used to organize the content without overlapping with the
default categories and tags on the blog.

An “in-the-media-url” custom field was created for the url to the source
article and is used as the headline like to link directly to the article
instead of the default single view of the post.

A “publisher-logo” and “publisher-url” custom fields were created and are
associated with the publisher taxonomy so that additional metadata can be
associated with each publisher and used in the template to display their logos
and link to their site.

Finally, we tied it all together with a custom archive-in-the-media.php
template that is loaded by default for that post type based on the naming
convention described by the template hierarchy.

### Announcements

Migrating the announcements system in to WordPress was probably the most
exciting part of this whole project.

We created an “announcements” custom post type and a custom “listserv-digest”
taxonomy which would be used to target the digest emails and filter
announcements based on affiliation.

We actually used a couple of plugins here:

**WP User frontend** :

Provides a way to create posts via a custom frontend web form with a dashboard
for users. This allowed us to completely restrict backend access for users and
provide a seamless experience. Anyone with UTHSC credentials could log in and
submit an announcement. They could also delete announcements at any time and
edit unpublished announcements prior to moderation via a dashboard provided by
wpuf.

We used **Edit flow** to provide some moderation capabilities requested by the
Marketing and Communications department that allowed moderation to be handled
through wp-admin.

For the first time, users could view and submit announcements online. A script
builds and sends a digest of the latest announcements based on affiliation
(faculty, staff, student) at noon every day. The email includes a table of
contents and limited-length excerpts with links to full announcements online
to cut down on text as much as possible.

So far there are close to four thousand announcements.

### Search

Post content for each of the custom post types was included in separate
templates for re-use which is pretty common practice allows us to display
content types in search results

## Developer Notes

So that’s the quick overview of our project. Now I just want to ramble off
some anecdotal things I’ve learned that I think are worth knowing about.

### Registering Custom Content

You can use a plugin like custom post type ui for this but I strongly
recommend creating a plugin for each custom post type and its associated
taxonomies.

You can put them in your theme’s functions.php file but this is bad practice
as all of your custom content will disappear completely if you deactivate the
theme. It’s too easy to move that code to a plugin to justify leaving anything
in that file that’s not explicitly associated with your theme.

I use wp generate almost every time I register a post type or a taxonomy but
it doesn’t give you everything. You might want to go in and add a dashicon,
which I highly recommend, or create custom capabilities associated with the
post type.

### Advanced Custom Fields

I find that while I typically register one or two post types and taxonomies, I
might register 40 or 50 custom fields. Use ACF; the UI, API, and documentation
are all excellent. I have yet to run in to something it can’t handle. The
publisher logo field mentioned before is a good example. I recently used it to
allow users to select a location on a map which returns a longitude and
latitude which we used in a native app.

### Know the Template hierarchy

Custom content types are one of the best parts of WordPress but you can’t
really begin to unleash their potential until you understand the template
hierarchy and understand how to display that content. Once you’re familiar
with the naming convention, you’ll always know what template you’re looking at
or which one you need to create.

### The loop

The loop is where all the magic happens. It’s where WordPress queries some
posts, loops through them, and spits them out. you need to know what’s going
on here and how to pass arguments to custom queries to do cool stuff.

### Learn the grammar, not the function names

I’ve learned that if you know the WordPress vocab, there’s little need to
memorize the whole API as function names are usually intuitive enough to look
up in the codex. If I want to get a list of taxonomies, I know there’s
probably a get_taxonomies() function (there is), If I want to get a list of
terms for a particular taxonomy, there’s probably a get_terms() function – but
there’s also a get_the_terms() function, what’s the difference? One’s for the
taxonomies associated with the current post but I’ll defer to the codex to
keep track of that, I’ll just keep up with the grammar.

### Customizing admin interfaces

Content creators and editors usually only need a fraction of the stuff in the
admin menu so get it out of the way.

Use admin menu editor and user role editor to customize menus and capabilities

I do this on most sites I work on. If users still need access to that stuff,
use a dedicated account with a higher-level role.

### Custom Sidebars

Often when you’re using custom post types, you’re going to want to use
different widgets based

### Jetpack

We use jetpack for social sharing stuff and analytics – we also use google
analytics but jetpack’s UI is a lot more accessible to non-technical folks.

### Rest API

WP has a rest API built in now, we use it to dispay content on our homepage
and elsewhere. I was at a hackathon recently and one of our team members built
an app around the API while we worked on the site content.
