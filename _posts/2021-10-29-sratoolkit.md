---
layout: posts
title: sratoolkit下载测序数据
author: Jie Li
toc: true
toc_label: "sratoolkit下载测序数据"
toc_icon: "heart"
excerpt_separator: "<!--more-->"
categories:
    - linux
    - bash
tags:
    - bash
    - linux
math: false
---

## 说明
`sratoolkit`默认配置的下载数据目录是在`HOME`，这显然是不友好的，因为一般的集群给每个`account`的`HOME`目录下的存储是非常有限的，例如50Gb，所以最好把`cache`的目录设置到拥有大量存储可供写入的目录。

<!--more-->

具体操作方式：更改文件 `.ncbi/user-settings.mkfg`里的`/repository/user/main/public/root`的目录为你想要存放的目录即可。
![]({{ 'assets/picbed/post/sratoolkit_path_set.png' | relative_url}})