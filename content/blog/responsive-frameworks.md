---
title: Thoughts on Responsive Frameworks
date: '2013-05-07T18:27:18'
draft: false
categories:
- Web Development
- Wordpress
tags:
- frameworks
- mobile first
- responsive web design
- twitter bootstrap
- zurb foundation
author: George Spake
slug: responsive-frameworks
---

### Working with responsive frameworks can make responsive web design cleaner
and easier and considerably reduce development time.

The fact that responsive frameworks combine responsive and mobile-first web
design, CSS pre-processing languages, and other cutting edge trends makes them
one of my favorite topics to follow in web development.

The revolution in mobile technology has spurred some dramatic changes in web
design and development. Because increasing numbers of people access the web
via smartphones and tablets, a major part of a developer's job is to ensure
that sites are accessible and good-looking anytime, anywhere, and on any
device. This has all happened so fast that there really hasn't been much time
to catch up; a range of ideas about a lot of new issues, like [how to handle
serving up images](http://alistapart.com/article/mo-pixels-mo-problems) and
[how font sizes are determined on different
devices](http://alistapart.com/column/font-hinting-and-the-future-of-
responsive-typography), are still being discussed and seem to change daily.

One idea that has become accepted as a viable starting point for a long term
solutions is 'Responsive Web Design'. The term 'Responsive Web Design' was
[introduced in 2010 in a List Apart article by Ethan
Marcotte](http://alistapart.com/article/responsive-web-design) who later
authored a book by the same title. The ultimate concept behind responsive web
design is to build sites that 'respond' fluidly and flexibly to different
devices based on screen width. This approach allows a site to be designed in
such a way that ensures it will look good on any device without a bunch of
device specific media queries or a separate mobile version of the site. To get
an idea of what this means, you can view this site in a desktop browser and
watch how it 'responds' as you re-size the window.

To harness the power of responsive design, and implement some agreed upon best
practices, a few responsive frameworks emerged, most notably [Twitter
Bootstrap](http://twitter.github.io/bootstrap/) and [Zurb's
Foundation](http://foundation.zurb.com/). These frameworks are essentially
just templates consisting of HTML, CSS, and JavaScript files that can be used
as a blank slate for development of responsive sites. They both include
[responsive grids](http://foundation.zurb.com/grid.php), a core component of
responsive design, and a number of other responsive components that can be
tweaked and modified at will. Foundation and Bootstrap are currently developed
as open source projects on github and currently represent two of the [most
popular Github repositories](https://github.com/popular/starred).

[![Responsive Web Design and Mobile First Bundle](https://georgespake.com/wp-
content/uploads/2013/05/responsive-web-design-mobile-first-
bundle.jpg)](https://georgespake.com/wp-content/uploads/2013/05/responsive-
web-design-mobile-first-bundle.jpg)

Luke Wroblewski extended the popular Responsive Web Design philosophy by
formally introducing the concept of mobile-first web design. Although [he used
the term as early as 2009](http://www.lukew.com/ff/entry.asp?933) it caught on
when his book [_Mobile First_](http://www.abookapart.com/products/mobile-
first) was released in 2011. Wroblewski proposed that instead of designing
sites for desktop screens that work on phones, sites should be designed for
phones that work on desktops. Sounds odd but it makes sense: instead of
simplifying the site and subtracting elements as screen sizes get smaller
(Graceful Degradation), the site should become more robust and content should
be added as screen sizes get larger (Progressive Enhancement). I just finished
reading _Mobile First_ and _Responsive Web Design_ is at the top of my book
list. You can get a deal if you [buy them both
together](http://www.abookapart.com/products/responsive-web-design-mobile-
first-bundle).

The web community has embraced the mobile-first idea as can clearly be seen by
the decision by [Bootstrap](http://thenextweb.com/dd/2013/03/10/heres-an-
early-look-at-bootstrap-3-rewritten-to-be-mobile-friendly-from-the-start/),
[Foundation](http://zurb.com/article/1152/coding-smarter-the-why-of-
foundation-4),
[Google](http://www.brighthand.com/default.asp?newsID=16235&news=Google+Android+OS+CEO+Eric+Schmidt+Mobile+First)
and [WordPress](http://theme.wordpress.com/themes/twentytwelve/) to adopt a
mobile-first design approach. Foundation has already completed the transition
with the release of version 4 in January 2013 but The Bootstrap 3 release
candidate is still in development with no official release date. [Bootstrap 3
will not be backwards
compatible](https://github.com/twitter/bootstrap/pull/6342) with older
versions so it seems somewhat impractical to start any new projects with it
until the new version arrives. That being said, Bootstrap is the most popular
of the two frameworks and, having used it, I can confirm that it was very
pleasant to work with and ended up being a wonderful tool. I'm definitely
excited for the release of version 3 and I'll continue to consider it for
future projects.

![wordpress-logo-blue](https://georgespake.com/wp-
content/uploads/2013/05/wordpress-logo-blue.png)

Sidenote for WordPress people (and others): The [WordPress
codex](http://codex.wordpress.org/Theme_Frameworks) states that "The term
'Theme Framework' currently has two meanings 1. A "drop-in" code library that
is used to facilitate development of a Theme, and 2. A stand-alone
base/starter Theme that is intended either to be forked into another Theme, or
else to be used as a Parent Theme template." Personally, I think the use of
the word by WordPress creates ambiguity and it annoys me that it encourages
use of the term 'frameworks' as a fancy way to refer to what are essentially
parent themes. For example, Genesis by
[Studiopress](http://www.studiopress.com/) is heavily marketed as a framework
when it is essentially a WordPress parent theme with some built in
functionality. You have to pay for it and you are encouraged to buy their
child themes but, in my experience with Genesis, it doesn't really offer any
exceptional features that aren't already supported by the WordPress API or the
numerous dedicated plugins that are available for free. I'm also a little
annoyed by the misleading, out of context and possibly misquoted [testimonial
from WordPress founder, Matt Mullenweg, on the Genesis
homepage](http://my.studiopress.com/themes/genesis/) but that's another rant.
In a separate funny example, one [informative wpmu.org
post](http://wpmu.org/free-wordpress-framework/) lists Bones as one of "7
Free, Modern Starter Frameworks for WordPress Designers" while the [Bones
website](http://themble.com/bones/) prominently states that "Bones is not a
Framework." It's actually a "per-project template" that might be worth
checking out if you are considering developing a theme. The point I want to
make here is to be aware that the term framework has different meanings in
different contexts. I use framework to refer to a collection of core files for
designing a website that can be used to build a site from scratch, used in php
files-or in this case incorporated in to a WordPress theme (ie Bootstrap and
Foundation).

Foundation and Bootstrap have both been integrated into a number of WordPress
themes, many of which are also hosted as open source projects on Github. These
themes, for the most part, are intended to be used as parent themes and simply
pull in the frameworks' core files with minimal modification. Several that I
have used include [wp-bootstrap](http://320press.com/wpbs/) and [wp-
foundation](http://320press.com/wp-foundation/)—both by
[320press](http://320press.com/),
[Required+](http://themes.required.ch/)—built on Foundation 3 and
[Reverie](http://themefortress.com/reverie/)—the only one of these currently
built on foundation 4. I designed my site live in the browser using the core
bootstrap files and later merged it into a Reverie child theme. I really like
Reverie and I highly recommend it. I wasn't too impressed with required+ but
if I recall correctly it does have a cool off canvas layout template that may
be useful to some people. Both of the 320press themes are nice and I used wp-
foundation on the bootstrap project I mentioned previously. I'll be watching
all of them for updates. For more on using Foundation with WordPress, check
out this article from [WPMU.org](http://wpmu.org/zurb-foundation/)

I expect Bootstrap, Foundation, and perhaps some other frameworks that haven't
hit the scene yet, to continue to gain popularity. I've spoken to several
people involved in web development indirectly and directly who were entirely
unfamiliar with either of them. While they are fairly new, they are some
excellent tools and certainly something that should be have on on every web
developer’s radar.
