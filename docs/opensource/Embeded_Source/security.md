---
id: security
title: 安全相关
date: 2025-03-04
authors: 玉麒麟
tags: [software, security]
---

<!-- truncate -->

 

### 新唐 与 Google 合作的第一个开源加密芯片投入生产
在过去的六年里，Google 一直在与开源社区合作构建 OpenTitan，这是第一个开源芯片Root of Trust (RoT)
https://opensource.googleblog.com/2025/02/fabrication-begins-for-production-opentitan-silicon.html


### 面向安全的RTOS全家桶解决方案SecureSMX
SecureSMX允许将应用程序划分为完全隔离的分区。如果获得对一个分区的访问权限，他们无法访问其他分区。此外，对分区施加了强大的限制，以防止通过无限循环或占用系统资源等手段导致系统崩溃。通过将关键资源置于pmode屏障之下，并将易受攻击的资源保持在屏障之上，进一步加强了安全性
https://www.smxrtos.com/securesmx/

### FreeRTOS的安全版本SafeRTOS分享的19篇RTOS相关技术文档

https://www.highintegritysystems ... rtos/rtos-tutorials

无需注册，直接点击就可以下载。
FreeRTOS，SafeRTOS相关的内容基本都涉及到了。