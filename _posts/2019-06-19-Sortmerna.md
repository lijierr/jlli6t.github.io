---
layout: posts
title: SortMeRNA-Burst trie结合查找表，Levenshtein自动机搜索快速鉴定rRNA
author: Jie Li
categories: [bioinformatics, metatranscriptomic]
tags: [tutorials, RNA, mapping]
math: false
---

![]({{ 'assets/picbed/post/sortmerna_title.png' | relative_url}})
## 1. Introduction
SortMeRNA是一款设计用于去除宏转录组数据中的核糖体RNA的工具，由Dr. Evguenia Kopylova小姐姐一作开发，发表于Bioinformatics，她目前依然活跃在这款软件的维护社区。目前已更新到4.2.0版本。引用次数920，github星标83，Fork38， Watch14。

## 2. 算法基本原理
底层算法与seed策略类似，主要是寻找rRNA数据库和read之间的一定数量的相似短区域。对rRNA序列建立索引的时候，与HMM一样，利用同源序列之间的冗余，建立所有rRNA序列的压缩模型。
然后设定一个窗口，对read进行窗口滑动扫描，基于设定的阈值，单个read中超过阈值数量的窗口比对到数据库则该read被鉴定为rRNA。其中窗口比对数据库时容错为1（例如碱基替换，插入或缺失）。
基础算法很容易理解，主要是提高算法效率，大比例缩短比对时间。
作者的策略如下图所示：

![]({{ 'assets/picbed/post/sortmerna_algorithm.png' | relative_url }})

### 2.1 具体算法过程
1. 使用`Burst trie (BT)`结合查找表策略存储数据库。假设窗口为`w`，窗口序列长度为`s（14~20）`。
1a，首先存储了数据库中每一个`s/2-mer`序列的出现频次（#occ）
1b，BT的结构，这个跟搜索树结构很像了，类比即可
2. 处理输入read。同样窗口为w, 窗口长度为s，向右滑动。
2a, 滑动窗口示意图
2b, 将窗口分为窗口前段从`w[1..s/2 +1]`，和窗口后段`w[s..s/2 + 1]`
3. 判断窗口序列在BT中是否存在。通过通用Levenshtein自动机和BT循环遍历，及确保错误不大于1。
遍历完所有的窗口后，判断接受的窗口数量是否高于阈值，高于阈值则认为该输入read判定为rRNA。

### 2.2 算法小结
总结思路：输入read，生成第一个窗口序列，先查找前半段窗口序列在数据库中的频次，达到要求则定位这半段序列在BT中的位置，然后开始在BT搜索（burst）后半段窗口的序列，沿着BT把整个窗口遍历完，最后如果遍历的时候发现的错误>1，则把这个窗口记录为非比对；接着滑动到下一个窗口从头开始判定，直到所有的窗口判定完成后，如果判定为比对的窗口的数量>给定的阈值，则判定read为rRNA。

## 3.关于作者使用的Levenshtein自动机
作者用自动机实现字符串之间的模糊匹配（文中是read和db）。假设字符串p和错误数k，经典的非确定性Levenshtein自动机可识别的最大编辑距离为k到p的字符集，文中k=1。
![]({{ 'assets/picbed/post/sortmerna_levenshtein.png' | relative_url }})

## 4. 与其他工具的对比：
Meta-RNA，SSU-ALIGN，rRNASelector使用了常见的概率模型，其中Meta-RNA和rRNASelector使用了HMM模型，然后利用HMMER3比对短read到数据库，SSU-ALIGN使用协方差模型来支持二级结构的信息。除了概率模型之外，riboPicker使用的是修改版的BWA算法。BLASTN也使用非常多，特别是大家各自用的workflow。

## 总结：
文章是12年发表，除了文章中提到的工具，后来大家各自用的`workflow`也有很多用`bwa`，`bowtie`，`bowtie2`等工具进行比对的。其次就是这个算法策略对错误的容忍低（为1）。再有就是作者使用的`universal Levenshtein`自动机，越看越像马尔科夫链，可能是我对自动机的理解还不够深？
其次是对于作者，EK小姐姐至今仍然在一线社区活跃。
