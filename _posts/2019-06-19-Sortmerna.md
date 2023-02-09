---
title: "SortMeRNA-Burst trie结合查找表，Levenshtein自动机搜索快速鉴定rRNA"
toc_label: "SortMeRNA"
categories:
    - bioinformatics
    - metatranscriptomic
tags:
    - tutorials
    - RNA
    - mapping
---

![]({{ 'assets/picbed/tools/sortmerna/sortmerna_title.png' | relative_url}})
## 1. Introduction
`SortMeRNA`是一款设计用于去除宏转录组数据中的核糖体`RNA`的工具，由`Dr. Evguenia Kopylova`一作开发，发表于`Bioinformatics`。她目前依然活跃在这款软件的维护社区。目前已更新到`4.2.0`版本。引用次数`920`，`github`星标`83`，`Fork38`， `Watch14`。
<!--more-->

## 2. 算法基本原理
底层算法与`seed`策略类似，主要是寻找`rRNA`数据库和`read`之间的一定数量的相似短区域。对`rRNA`序列建立索引的时候，与`HMM`一样，利用同源序列之间的冗余，建立所有`rRNA`序列的压缩模型。
然后设定一个窗口，对`read`进行窗口滑动扫描，基于设定的阈值，单个`read`中超过阈值数量的窗口比对到数据库则该`read`被鉴定为`rRNA`。其中窗口比对数据库时容错为`1`（例如碱基替换，插入或缺失）。
基础算法很容易理解，主要是提高算法效率，大比例缩短比对时间。
作者的策略如下图所示：
![]({{ 'assets/picbed/tools/sortmerna/sortmerna_algorithm.png' | relative_url }})

### 2.1 具体算法过程
1. 使用`Burst trie (BT)`结合查找表策略存储数据库。假设窗口为`w`，窗口序列长度为`s（14~20）`。
1.1 首先存储了数据库中每一个`s/2-mer`序列的出现频次`(#occ)`
1.2 `BT`的结构，这个跟搜索树结构很像了，类比即可
2. 处理输入`read`。同样窗口为`w`, 窗口长度为`s`，向右滑动。
2.1 滑动窗口示意图
2.2 将窗口分为窗口前段从`w[1..s/2 +1]`，和窗口后段`w[s..s/2 + 1]`
3. 判断窗口序列在BT中是否存在。通过通用Levenshtein自动机和BT循环遍历，及确保错误不大于1。
遍历完所有的窗口后，判断接受的窗口数量是否高于阈值，高于阈值则认为该输入`read`判定为`rRNA`。

### 2.2 算法小结
总结思路：输入`read`，生成第一个窗口序列，先查找前半段窗口序列在数据库中的频次，达到要求则定位这半段序列在`BT`中的位置，然后开始在`BT`搜索`（burst）`后半段窗口的序列，沿着`BT`把整个窗口遍历完，最后如果遍历的时候发现的错误`>1`，则把这个窗口记录为非比对；接着滑动到下一个窗口从头开始判定，直到所有的窗口判定完成后，如果判定为比对的窗口的数量>给定的阈值，则判定`read`为`rRNA`。

## 3.关于作者使用的Levenshtein自动机
作者用自动机实现字符串之间的模糊匹配（文中是`read`和`db`）。假设字符串`p`和错误数`k`，经典的非确定性`Levenshtein`自动机可识别的最大编辑距离为`k`到`p`的字符集，文中`k=1`。
![]({{ 'assets/picbed/tools/sortmerna/sortmerna_levenshtein.png' | relative_url }})

## 4. 与其他工具的对比：
`Meta-RNA`，`SSU-ALIGN`，`rRNASelector`使用了常见的概率模型，其中`Meta-RNA`和`rRNASelector`使用了`HMM`模型，然后利用`HMMER3`比对短`read`到数据库，`SSU-ALIGN`使用协方差模型来支持二级结构的信息。除了概率模型之外，`riboPicker`使用的是修改版的`BWA`算法。`BLASTN`也使用非常多，特别是大家各自用的`workflow`。

## 总结：
文章是12年发表，除了文章中提到的工具，后来大家各自用的`workflow`也有很多用`bwa`，`bowtie`，`bowtie2`等工具进行比对的。其次就是这个算法策略对错误的容忍低（为1）。再有就是作者使用的`universal Levenshtein`自动机，越看越像马尔科夫链，可能是我对自动机的理解还不够深？
其次是对于作者，EK小姐姐至今仍然在一线社区活跃。