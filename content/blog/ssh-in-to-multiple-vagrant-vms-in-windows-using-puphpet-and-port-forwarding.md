---
title: SSH in to multiple Vagrant VM’s in Windows using PuPHPet and Port Forwarding
date: '2014-03-08T22:16:37'
draft: false
categories:
- Web Development
tags:
- Port Forwarding
- PuPHPet
- PuTTY
- Vagrant
- Virtual Box
author: George Spake
slug: ssh-in-to-multiple-vagrant-vms-in-windows-using-puphpet-and-port-forwarding
---

_**Update March 10th, 2014:** After spending an extra five minutes this
morning trying to ssh in with my the virtual machine IP, instead of using my
local IP with the forwarded port, I was able to get it work. I don't know why
this hasn't worked for me in the past unless I've just been typing the wrong
IP or something. In retrospect, assuming the VM IP was  192.168.56.101, I may
have just inadvertently been using 192.168.1.101. So, from now on, I'll be
using the VM IP for ssh but I won't go as far as to say that it's wrong to use
your local IP and forwarded ports. If you want to ssh in to multiple vagrant
boxes on the same IP, local or otherwise, port forwarding makes that possible
and PuPHPet makes it really easy to set up._

_Regarding the 'vagrant ssh' command in Windows, I'm not sure if it will work.
By default, if you run vagrant ssh from your vagrant dir in the Windows shell
you get this:_

C:Usersgpspa_000DevelopmentUTHSCMultisiteVagrant>vagrant ssh `ssh` executable
not found in any directories in the %PATH% variable. Is an SSH client
installed? Try installing Cygwin, MinGW or Git, all of which contain an SSH
client. Or use the PuTTY SSH client with the following authentication
information shown below:

_Host: 127.0.0.1 Port: 2222 Username: vagrant Private key:
C:/Users/gpspa_000/.vagrant.d/insecure_private_key_

_I may come back and try installing one of those suggested ssh clients and
setting up my keys later to see if it works. Even if it does, I 'm not sure
I'd be able to use 'vagrant ssh' for multiple boxes since it's connecting to
the local IP on 2222.  I'm in no big hurry here since I prefer to use PuTTY._

_**Update April 9th, 2014:** Since I wrote this, I've been able to use vagrant
ssh in Windows using the Bash shell that comes with Git. If you're having
trouble with anything, try a different shell. Boo the default Windows CMD line
shell._

* * *

I’m partly writing this so that someone will come along and tell me that my
workflow sucks and I’m doing everything wrong; that is the some of the best
advice after all. There’s also the possibility that this is extra basic and
I’m just too much of a noob to realize it. If, by some chance, this helps
someone, awesome.

First [PuPHPet](https://puphpet.com/) is the best thing ever so if you aren’t
familiar with it check it out. I’ll assume you know what it is and jump right
in here. I use Windows (Locally). Don’t hate; it is what it is.

PuPHPet makes SSHing in to your VM with PuTTY really easy. Once you’ve run
‘vagrant up’ All you need to do is connect to 127.0.0.1 on port 2222 and login
with ‘vagrant’ as the username and password. The problem is that if you want
to SSH in to multiple Vagrant VM’s running simultaneously for whatever reason,
you’re going to have a bad time since you only have one local IP. Or so I
thought.

PuPHPet actually generates a random host port in the ‘Local VM Forwarded
Ports’ section that you can use as the port in PuTTY. If you need to check the
port, you can go to your network settings in VirtualBox and click on Port
Forwarding.

If I’m working on two separate projects and I want to keep simultaneous
sessions open for both of them, all I need to do is change the port in PuTTY
to the forwarded port in VirtualBox and viola. If you’ve only got one box up
you can use 2222 but you might as well use the forwarded in case you need to
add one later on.

Note: I’ve gotten in to the habit of dropping my yaml file from an existing
box in to PuPHPet and just changing the Apache stuff to make new boxes.
There’s nothing wrong with this; my configuration is pretty much the same from
project to project so there’s no point in filling the whole thing out again.  
However, that forwarded port is randomly generated so make sure to change it
if your configurating a new box from an old yaml file or you’ll run in to a
conflict. I just make sure to copy it before I drop the yaml file.

**Screen Dump:**

[![puPHPet Screenshot](https://georgespake.com/wp-
content/uploads/2014/03/puPHPet-1024x276.jpg)](https://georgespake.com/wp-
content/uploads/2014/03/puPHPet.jpg)PuPHPet Config [![VirtualBox
Screenshot](https://georgespake.com/wp-
content/uploads/2014/03/virtualbox.jpg)](https://georgespake.com/wp-
content/uploads/2014/03/virtualbox.jpg) VirtualBox Config (Yes, Port
forwarding does rule)  [![PuTTY Screenshot](https://georgespake.com/wp-
content/uploads/2014/03/PuTTY.jpg)](https://georgespake.com/wp-
content/uploads/2014/03/PuTTY.jpg) PuTTY Config
