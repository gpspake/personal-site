---
title: Configuring a Home Media Server with Ubuntu and Samba
date: '2013-04-29T19:48:44'
draft: false
categories:
- Software
- Technology
tags:
- centos
- linux
- networking
- raspberry pi
- samba
- server configuration
- ubuntu
- virtualization
- xbmc
author: George Spake
slug: aventures-in-home-networking
---

## I decided to setup a media server at home to host and share media with
anyone on my network. Here's how I did it.

Original diagram of home network components and proposed configuration, some
of the parts shown have not been completed yet.

### Objective

There were a number of reasons I took on this project. I have a ton of music
and movies so I'd like for my roommates and anyone else on my network to be
able to access my media without any hassle. I also wanted a chance to play
around with a [Raspberry Pi](http://www.raspberrypi.org/) - a small computer
with an arm based processor that's available online for about $30 - It can be
used for all sorts of things but perhaps the most popular use for it at the
moment is as a media player for home entertainment. As long as I was doing
this, I figured I would take the opportunity to get some practical hands-on
experience with Linux server configuration and virtualization software. I used
[VMware vSphere ESXi](http://www.vmware.com/products/vsphere-
hypervisor/overview.html), a free virtualization application recommended by
some of my coworkers and Ubuntu. At one point, I intended to use Centos, a
popular Linux Distribution based on [Red Hat](http://www.redhat.com/), but
configuring Samba on it turned out to be even more of a nightmare than usual
so I finally gave up and decided to use Ubuntu and I would certainly recommend
it for a project like this if you want to use Linux and you aren't already
more familiar with another distro.

### The Hardware

Dell Slimline PC  
3 TB Hard drive  
Raspberry Pi  
Desktop PC  
Personal Laptop

### The Software

ESXi  
Centos  
SAMBA  
Rasbian  
Windows 7

### The Setup

The first step was to configure my server. I purchased a Slimline Dell X940 on
ebay for about $70, installed a 3 TB drive, and installed Esxi. Esxi is system
level virtualization software meaning it doesn't run on top of any other OS
so, once it's installed, the box is pretty much useless until you install the
remote management software on another machine. I set up the Vsphere
application on my Windows 7 machine and was able to provision a virtual server
and allocate space to it. Using the virtual shell in Vsphere I was ready to
install an OS.

I should mention here that when I attempted to install a 64 bit OS I got an
[error message](http://communities.vmware.com/thread/342081) because my cpu
didn't support 64 bit virtualization. I found some info that suggested it was
a BIOS issue and I realized that I did not have the latest bios so I had to
figure out how to update it without an OS I ended up booting in to DOS from a
flash drive with the latest bios stored on it and [installing it from
DOS](http://forum.notebookreview.com/sager-clevo/246530-how-flash-your-bios-
dos-using-usb-stick.html). After getting the BIOS updated, I was still getting
the same error message and I discovered that my CPU, a Core 2 Duo, did not
include [VT support](http://ark.intel.com/Products/VirtualizationTechnology).
I actually ended up ordering a used one with VT support on eBay for about $30
that allowed me to install a 64 bit OS. The whole ordeal was probably
unnecessary; I'm not really doing anything that would require a 64 bit OS but
it was satisfying nonetheless.

As I mentioned before, I wanted to set all of this up using CentOS but, even
though I am more familiar with it, switching to Ubuntu made this whole project
much easier-mostly due to my lack of knowledge but also because I had better
luck finding information online for Ubuntu configuration. I installed [Ubuntu
Server](http://www.ubuntu.com/download/server) , configured the server for ssh
access so that I could access it using
[putty](http://www.chiark.greenend.org.uk/~sgtatham/putty/), and set up
[authentication
keys](http://the.earth.li/~sgtatham/putty/0.58/htmldoc/Chapter8.html#pubkey)
so I could [use Pageant for
authentication](http://the.earth.li/~sgtatham/putty/0.58/htmldoc/Chapter9.html).

SAMBA is an application for Linux that allows Linux machines to talk to
Windows using the SMB protocol. This is what I would be using to allow the
Raspberry Pi and machines running Windows to access the media on the server.
It turned out to be a nightmare to configure, which I'm not even going to get
in to, but after fighting with it for a whole weekend, I got pretty
comfortable with it. Since all of this is only accessible on my network, I'm
wasn't too concerned about security; I'm pretty confident in my router to
handle that at the network level. I set up 2 users: one for me with full read
write access to all of the shares and and a second with read only access for
everyone else. This way, people could access and download content from the
server but could not add or delete anything. I also set up a public directory
in case anyone ever needs to upload anything to the server. I tested it out
and everything worked; anyone on my home network using Windows is able to log
in to the shared directory and access all of it's contents.

Great! I could finally play with the Raspberry. The Raspberry PI ships as a
board so I ordered a clear laser-cut case online to protect it. I already had
an SD card for the software, a micro USB cable for power and an HDMI cable for
the display. There are a number of Linux distributions for raspberry dedicated
to running XBMC, a modified version of X-box media center that is available
for multiple platforms. I used Rasbian, a Debian based distribution that
launches right in to XBMC. Once I was in XBMC and connected to my network, I
was able to connect to my SMB share using the XBMC interface and pull in all
of the movies I had added. XBMC has an excellent theme-able interface and it
automatically scrapes the web to pull in posters, descriptions, dvd covers
etc. for movies and shows based on file names and displays information such as
file format. The official XBMC app for Android allows me to browse content and
remotely control XBMC from my phone. I recently upgraded to a Galaxy S4 so my
old Galaxy S is now a dedicated remote for the Raspberry.

### Still Learning

In the end, everything worked and that's the most important thing, right? I've
obviously omitted a lot of details about my configuration specs but Google is
much more suitable source for finding such information from more qualified
individuals. I'm still certainly not an expert and I've probably even used
some of the terminology in this post incorrectly. I've documented all of this
mostly so that I can look back at it in the future and analyze my mistakes.
Overall, it was a great learning experience, and as I continue to learn, I'm
sure I'll realize that there are probably better ways to do all of this.
"Dude, just go buy a Roku."
