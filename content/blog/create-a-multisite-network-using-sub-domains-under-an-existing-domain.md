---
title: Create a Multisite Network Using Sub-domains Under an Existing Domain
date: '2016-02-07T20:45:07'
draft: false
categories:
- Wordpress
tags:
- dns
- multisite
- subdomains
author: George Spake
slug: create-a-multisite-network-using-sub-domains-under-an-existing-domain
---

### Here's the dilemma

You want to set up a Multisite network with subdomains but the domain you want
to use for your urls is not a WordPress site and will not be part of the
network.

<!--more--> 

This doesn't seem like an unusual case; imagine you already have our non-
WordPress primary website at mainsite.com and you want your multisite blogs to
live at `blog1.mainsite.com` and `blog2.mainsite.com` etc…

Typically Multisite expects there to be a blog at the domain - `mainsite.com`
in this case - and will base new site subdomains on and the Network admin
links, like `http://mainsite.com/wp-admin/network/`, on that url. If you
create a set up your network using multisite.mainsite.com, then any new site
you add will be based on that domain, so if you create site called site1 it
will be given the subdomain `blog1.multisite.mainsite.com`, which is not what
you want.

If you try to change the current site to mainsite.com in wp-config, all of
your network admin links will 404 because they will point to
`http://mainsite.com/wp-admin/network/` which doesn't exist, so you wont be
able to create a new site at all.

### The solution

The solution to this problem is actually really simple: You can change the
domains of your sites after they have been set up. (d'oh! It took me a long
time to realize this)

So, go ahead and set your network up using multisite.mainsite.com (this should
be the current site defined in your network settings in wp-config.php). When
you add a new site, it will be given a url like
`site1.multisite.mainsite.com`; that's fine. Once the site has been created,
go to the Sites page in Network admin, where you can see the a list of all of
the sites on the network; at this point you should see
`multisite.mainsite.com` and `site1.multisite.mainsite.com`. Click on 'edit'
below site1.multisite.mainsite.com and you will see a field where you can
change the url. Change the domain to `site1.uthsc.edu` and save.

That's it. Now, assuming your dns is configured properly, if you go to
site1.mainsite.com,  you will see your new WordPress site; If you go to
`mainsite.com`, you'll still see your primary non-WordPress site; and if you
go to Network admin, you'll see that it uses the url of the current site set
in your wp-config file.

Side note: we won't be using a wild-card for subdomains, which is probably
going to be the case often in this scenario, so we'll need to add a dns entry
for each new site. In this example, `multisite.mainsite.com`,
site1.mainsite.com, and any additional sites we add will need a dns entry to
point to the IP where the network is running. If you _are_ using a wildcard,
then this doesn't apply and all you need to do is create a new site from
Network admin.
