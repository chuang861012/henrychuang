---
title: "My list of things to do after installing a new Linux distro"
excerpt: This is a list about several things I would do or check after installing a new distro, including dual boot, secure boot, customizing.
date: "2022-09-11"
language: en
---

[Fedora](https://getfedora.org/en/)  
I use Fedora 36 for this post.  
<br/>
Recently I switched from Pop!\_OS to Fedora on my desktop. I found that there are a lot of things to check or configure after the installation.  
Every distro do things differently. Although I'm not a big fan of distro-hopping, it's still a good idea to list all the post-installation steps I go through.

#### My setup

![neofetch](neofetch.png)

## About Installation

Most of the popular distros for desktops today provides a nice installation GUI, just walk through the process.  
Fedora even provides a nice Fedora Media Writer, makes it super easy. You no longer need application like [Rufus](https://rufus.ie/) or [balenaEtcher](https://www.balena.io/etcher/) to create bootable USB drive. The Fedora Media Writer will handle it for you.  
<br/>
**Note:** If CSM is enabled in BIOS, the auto partition will install it with legacy mode in my experience. I have to re-install it to use UEFI...
Make sure to turn off CSM or do the disk partition by yourself to create a ESP.

## Thing to do after installation

### 1. Keep everything up to date

```bash
$ sudo dnf update
```

Fedora 36 uses DNF as it's software package manager. Simply run the update command to update the system.

#### Speed up DNF

To increase the download speed of DNF, there are some configuration we can set in the configuration file located at `/etc/dnf/dnf.conf`.  
I use the following settings to make DNF to select fastest mirror and enable parallel downloads up to 10.

```
fastestmirror=True
max_parallel_downloads=10
```

I also set keepcache to True for the first update since there are so many packages to update.

```
keepcache=True
```

### 2. Getting more softwares and packages

#### RPM Fusion

[rpmfusion.org](https://rpmfusion.org)
According to the website, RPM Fusion provides software that the Fedora Project or Red Hat doesn't want to ship.  
To set it up, just walk through the [Configuration page](https://rpmfusion.org/Configuration)
I think the most important part is to get multimedia complement packages from RPM fusion.
<br/><br/>

#### Flatpak

Flatpak provides a quick setup command for Fedora here: [Fedora Quick Setup](https://flatpak.org/setup/Fedora).
<br/><br/>

### 3. Configure time setting for dual booting

Since I am dual booting Windows with Fedora, I have to make sure Fedora treats system time the same as Windows. Otherwise every time I switch system I will have to sync the time again manually.  
I already set my Windows to use UTC as BIOS clock.
The following command set Linux to use UTC time. (It might be the default I think)

```bash
$ timedatectl set-local-rtc 0 --adjust-system-clock
```

Run `timedatectl` to verify it:

```
               Local time: 六 2022-09-10 22:20:02 CST
           Universal time: 六 2022-09-10 14:20:02 UTC
                 RTC time: 六 2022-09-10 14:20:02
                Time zone: Asia/Taipei (CST, +0800)
System clock synchronized: yes
              NTP service: active
          RTC in local TZ: no
```

### 4. Setup NVIDIA Driver

I use NVIDIA graphic cards. With secure boot enabled it's a bit complicated to set it up.  
I get a module missing error message when login to Fedora at the beginning.  
<br/>
To solve it there ara a guide about secure boot from RPM Fusion: [Howto/Secure Boot](https://rpmfusion.org/Howto/Secure%20Boot)  
I found a clear walk through guide on [https://blog.monosoul.dev/](https://blog.monosoul.dev/): [Automatically sign NVidia Kernel module in Fedora 36](https://blog.monosoul.dev/2022/05/17/automatically-sign-nvidia-kernel-module-in-fedora-36/)  
It solved the problem perfectly for me.
<br/><br/>

### 5. Use X11 instead of Wayland

By default GNOME use Wayland, I just can't get dual display with hybrid graphics work on it.
So I set it back to X11, hope the problem can be solve someday...  
<br/>
Edit `/etc/gdm/custom.conf` and set `WaylandEnable=false` then reboot.  
It should be using X11.
<br/><br/>

### 6. Customizing GNOME

GNOME in Fedora 36 is already great in my opinion. Just for more settings, install GNOME tweak.  
<br/>
Also, install GNOME extensions. I am using three extensions.

-   [Dash to Dock](https://micheleg.github.io/dash-to-dock/index.html)
-   [AppIndicator and KStatusNotifierItem Support](https://github.com/ubuntu/gnome-shell-extension-appindicator)
-   [Sound Input & Output Device Chooser](https://github.com/kgshank/gse-sound-output-device-chooser)

<br/>

### 7. Customizing Terminal

Actually I never customize the terminal before. Previously I use Ubuntu and Pop!\_OS, I think the terminal looks decent and I don't really care about it.
But the default terminal on Fedora looks a bit too simple, I would like at least some more color highlighting.  
Install the Fancy bash prompt from [synth-shell](https://github.com/andresgongora/synth-shell). It has a easy automatic setup.
<br/><br/>

### 8. Install Piper

[Piper](https://github.com/libratbag/piper)

```bash
$ dnf install piper
```

To configure my gaming mice, use Piper for more dpi and buttons settings.  
<br/><br/>

## Get ready for daily use

This part is not specific for Linux. It's about setting up some software for my daily usage.

### Firefox setup

I use Firefox as my web browser. Sign in my account and it will sync all the extensions and bookmarks automatically.  
Then navigate to `about:config`, there are three flags I will set to true.

```
layers.acceleration.force-enabled   // for hardware acceleration
gfx.webrender.all                   // for faster page rendering
media.setsinkid.enabled             // to change audio devices
```

### Visual Studio Code

VS Code is my primary code editor.  
Install it using the official repo: [Visual Studio Code on Linux](https://code.visualstudio.com/docs/setup/linux)

Login to my github account, it will sync all settings and extensions for me.

## Conclusion

This is my basic setup for Fedora 36.
Fedora 37 is coming soon, hope it will become even better.
