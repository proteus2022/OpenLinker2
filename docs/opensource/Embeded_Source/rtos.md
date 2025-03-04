---
id: rtos
title: 实时操作系统
date: 2025-03-04
authors: 玉麒麟
tags: [rtos, software]
---

<!-- truncate -->

### RTX5中间件

https://github.com/ARM-software/MDK-Middleware

### 手把手1000行C代码实现完整小型系统
涵盖上下文切换、用户模式、shell、磁盘设备驱动程序和文件读写操作

https://operating-system-in-1000-lines.vercel.app/en/


### PX5 RTOS发布动态APP管理组件PX5 MODULES
https://px5rtos.com/px5-modules/


### Google开源Pebble 智能手表所有代码
https://opensource.googleblog.com/2025/01/see-code-that-powered-pebble-smartwatches.html
https://github.com/google/pebble

这个代码库包含了整个操作系统，它提供了所有标准的智能手表功能——通知、媒体控制、健身追踪、以及对自定义应用和表盘的支持——并且可以在小型ARM Cortex-M微控制器上运行。该操作系统基于FreeRTOS构建，包含了多个内存管理、图形和时间管理模块，并且提供了一个广泛的框架，可以加载和运行用C语言编写的自定义应用，也可以通过Jerryscript Javascript引擎运行用Javascript编写的应用。Pebble的架构使得该系统非常轻量化，同时提供了丰富的用户体验和非常长的电池寿命。
需要注意的是，部分专有代码已经从代码库中删除，尤其是与芯片支持和蓝牙协议栈相关的代码。这意味着发布的代码包含了所有的构建系统文件（使用waf构建系统），但在发布时无法直接编译或链接。

### RTOSX
https://rtosx.com/

1、微软收购ThreadX原公司Express Logic
2、微软将ThreadX移交给Eclipse基金会
3、ThreadX原团队离开微软，开发第5代RTOS系统PX5 RTOS正式上线
4、ThreadX原团又成立子公司RTOSX，团队主要由 ThreadX 的原作者组成
RTOSX KERNEL 作为 Eclipse ThreadX 的强大替代品，源于最新的 ThreadX 版本，但经过了全面的重构，并结合了 PX5 RTOS 的专有技术。指针/数据验证（PDV）和集中错误处理等创新使其与众不同，同时该内核完全兼容标准 ThreadX 的 API 和功能

