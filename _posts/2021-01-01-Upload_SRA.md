---
layout: posts
title: 上传数据到SRA
author: Jie Li
toc: true
toc_label: "上传数据库到SRA"
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
数据分析结束之后，通常需要将原始数据上传到公共数据库进行分享。例如测序数据通常上传至NCBI的SRA库。当样本数目比较小的时候，通过网页上传是非常方便的。但是当样本数量庞大的时候，通过网页上传数据就非常麻烦了，因为需要手动依次上传每一个样本。所以最直接的方法是从服务器往NCBI传，例如是用`aspera`：

<!--more-->

`aspera`的下载链接`https://www.ibm.com/products/aspera/downloads`
其安装操作手册可参考`https://cloud.tencent.com/developer/article/1749467`

## 上传的命令为：
{% highlight bash %}
ascp -i /home/.aspera/connect/aspera.openssh -QT -l100m -k1 -d DATA_PATH subasp@upload.ncbi.nlm.nih.gov:uploads/ACCOUNT_CODE
{% endhighlight %}

## 其他
这个命令应该是默认传到了root目录。此目录是一个暂存目录，时间为30天。30天过后自动移除文件。因此，整个数据submission的操作需要在30天之内完成。
