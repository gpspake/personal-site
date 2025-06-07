---
title: Adventures in Laravel Deployment &#8211; Digital Ocean vs Heroku
date: '2016-12-31T21:58:49'
draft: false
categories:
- Linux
- Web Development
tags:
- PosterLog
author: George Spake
slug: adventures-laravel-deployment-digital-ocean-vs-heroku
---

I spent more than a few hours this weekend investigating laravel deployment
options. I have an existing personal app I've been working on but, until now,
I've been developing it in Homestead and haven't really put much thought in to
where I would deploy it.

The two options I was most interested in were [Digital
Ocean](https://www.digitalocean.com/) and
[Heroku](https://dashboard.heroku.com/), both of which I've tinkered around
with before. After spending a whole day configuring and troubleshooting a five
dollar Digital Ocean Droplet, I finally decided my sanity was worth shifting
gears and moving over to Heroku, which turned out to be a good choice.

Digital Ocean is great and it's worth noting that [Laravel
Forge](https://forge.laravel.com/) makes deploying to DO crazy easy (or so I
hear) but I was going for the cheapest option so I wasn't ready to pay for
Forge just yet. The primary source of my frustration with DO was that I was
trying to do things the old fashioned way by [configuring a LEMP droplet
manually](https://www.digitalocean.com/community/tutorials/how-to-install-
linux-nginx-mysql-php-lemp-stack-in-ubuntu-16-04). To be fair, the comparison
between DO and Heroku, in this context, isn't exactly apples to apples since a
droplet is just a bare box and Heroku is all about easy deployment; Heroku to
Forge would probably be a better comparison. There's a lot of value in
understanding Linux and being able to configure a production environment from
scratch, and I consider my familiarity with Linux to be among my most valuable
skills as a web developer, but here it's arguably a case of reinventing the
wheel. It's 2017 and there are countless options for deploying apps securely
and easily without the headache of troubleshooting errors and cluttering up
your browser with 72 Stack Overflow tabs. I've learned this lesson more than
once when inspired streaks of coding have been completely derailed by server
config hell.  
_Note to self: Do things the easy way (and if you 're gonna use DO, maybe
spend a few bucks on Forge next time)._

Anyway, I switched over to Heroku and had everything up and running in an hour
or so. Of course, Heroku wasn't entirely without frustration either but there
were less moving parts to deal with and I had less trouble tracking down my
mistakes and resolving errors. Like Digital Ocean, Heroku has some great docs
and I hardly had to look any further to get my app up and running. To get
started I walked through [Getting Started with Laravel on
Heroku](https://devcenter.heroku.com/articles/getting-started-with-laravel)
guide which walks you through getting a hello world app in the browser but
doesn't get in to setting up a database. Once I had my app up and running, I
read through the [Heroku
Postgres](https://devcenter.heroku.com/articles/heroku-postgresql) docs and
had my database add-on set up in a matter of minutes. (General pro-tip read
through the docs thoroughly before running off to ask for help. I asked a
question in slack without realizing the answer was in the next paragraph.)

Heroku makes setting up environment variables easy via the heroku-cli and
that's really the most important thing you need to focus on getting right,
since Heroku does most of the work for you. for my database config variables,
I got everything I needed by running `heroku pg:credentials` (_see update
below_). You'll also need your app key which you should be able to find in
your .env file. Once all of my environment variables were correct I was able
to push to heroku and run my database migration and the app was live.

_Update: After posting this, a friend - who happens to work at heroku -
informed me that my database might move around which would cause the host and
creds to change unexpectedly. So db env variables shouldn't be hard coded;
they should be parsed from the DATABASE_URL variable that gets set
automatically by heroku. I updated my database config by adding heroku as a
connection as described in [this
guide](http://devdocs.salvaorenick.com/deploying-laravel-5-application-to-
heroku/) so everything's still working and I don't have to worry about those
values changing._

## So where's it at though?

I'm working on it. As crazy as it sounds this whole thing started out as an
angular 2 project. I built this thing in laravel a while back and recently
decided to rewrite the frontend as a way to learn NG2. So I did. Then I
realized I'm gonna need real data so I intend to rip the frontend off of my
laravel app and just expose the data via an api. That way, I can consume it
with ng2, react, or whatever. I'll definitely be writing all about it.  
So, um… coming soon ¯\\_(ツ)_/¯
