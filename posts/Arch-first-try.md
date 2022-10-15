---
title: 使用 Arch Linux 的第一天
excerpt: 從來不打算嘗試 Arch 的我，今天是我第一天使用 Arch。
date: "2022-10-15"
language: zh
---

![archlinux neofetch](neofetch.png)
從來不打算嘗試 Arch 的我，今天是我第一天使用 Arch。

## 前言

作為一個 Linux 用戶，我在主要工作電腦上跑的是 Windows + Fedora 的雙系統，在跳到 Fedora 之前我用的都是 Ubuntu 或是基於 Ubuntu 的發行版，現在我對 Fedora 的日常使用表現還算滿意，雖然真的還是很多坑。

主要的問題是筆電系統，好幾年前的文書筆電，原先一直跑的是 Pop!\_OS，整體使用還算穩定，雖然前陣子發生過一次整台磚掉只好整個重灌過。

這陣子決定換個系統，順便改用 XFCE，一開始選上了 Manjaro，雖然是 Arch based 但 Manjaro 和 Arch 還是有不小的差距，用慣 Fedora (GNOME) 的我一進去覺得好亂，雖然 XFCE 在這台爛筆電上跑得確實比 GNOME 順暢，用了兩天後還是對 Manjaro 的體驗不太滿意，於是就決定來嘗試真正的 Arch Linux 了。

<br/>

## 實戰 Arch Linux

#### 安裝

在 2022 安裝 Arch 其實並不如想像中複雜，甚至有許多自動化腳本可以使用，不過既然我是第一次那當然跟著 ArchWiki 的 [Installation guide (正體中文) - ArchWiki](<https://wiki.archlinux.org/title/Installation_guide_(%E6%AD%A3%E9%AB%94%E4%B8%AD%E6%96%87)>) 跑過一次囉。

Boot Loader 使用 GRUB，ArchWiki 也有詳盡說明 [GRUB - ArchWiki](https://wiki.archlinux.org/title/GRUB)，遇到一個問題是跑 `grub-install` 時如果沒有加 `--removable` 我的筆電會找不到他。

<br/>

#### 安裝後

安裝後的 post-install tasks 我沒有記錄我到底做了哪些，只能憑印象了。

可以看 [General recommendations - ArchWiki](https://wiki.archlinux.org/title/general_recommendations) 的建議完成自己的系統設置，

我最主要的應該就是裝好 GUI，我選擇 Xorg 搭配 XFCE 桌面環境。
再來就是設置音訊驅動、顯卡驅動、中文介面與字體、防火牆、SSD Trim、中文輸入法、AUR(yay)、ffmpegthumbnailer、file-roller，然後調整 XFCE 的主題與外觀。
接著就是有需求再安裝設定相應的東西了。

<br/>

## 結論

Arch Linux 從開始安裝到整個系統設置到我的日常使用環境比我想像中的容易許多，沒有遇到什麼問題非常順暢，應該比 Fedora 還順，第一次裝 Fedora 的時候我真的遇到一堆坑。

乾淨的系統真的很得我心，第一天我對 Arch 非常滿意，在筆電上試用一段時間如果沒什麼問題我大概要認真考慮在桌機上裝 Arch with KDE Plasma 了。
