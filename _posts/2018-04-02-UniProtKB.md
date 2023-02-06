---
layout: posts
title: Introduction to UniprotKB
author: Jie Li
toc: true
toc_label: "Introduction to UniprotKB"
toc_icon: "heart"
excerpt_separator: "<!--more-->"
categories:
    - database
    - protein
tags:
    - protein
    - annotation
    - protein
    - gene
math: false
---

## Introduction
[UniProt Knowledgebase (UniProtKB)](https://www.uniprot.org/help/uniprotkb)数据库中收集的是蛋白序列的信息以及准确的，连续的，丰富的注释信息。除此之外还收集一些比较重要的信息例如氨基酸序列，蛋白名称/描述，tax分类信息以及引用信息。这些囊括的信息涵盖了被广泛认可的生物学知识，classifications 以及cross-references, 以及明确的该蛋白可信度的层级分类。

<!--more-->

UniProtKB收集的序列超过95%都来自于公共核酸序列数据库中的CDS序列的翻译氨基酸序列，公共数据库指EMBL-Bank/GenBank/DDBJ等 authors们提交的序列会自动整合到TrEMBL中；

UniProtKB数据库包含两个sections, UniProtKB/Swiss-Prot 和UniProtKB/TrEMBL

数据库去冗余的过程是怎么样的？见[文档](https://www.uniprot.org/docs/sop_manual_curation.pdf)。

## UniProtKB/Swiss-Prot
UniProtKB/Swiss-Prot是UniProt Knowledgebase(UniProtKB)的手动注释和reviewed 的section，其手工收集的信息来自于文献例如文献中的实验结果，非常严格的计算机分析结果（automatic annotation）， 序列注释可信度非常高的，非冗余的一个蛋白序列数据库，从2002年开始，由UniProt consortium 维护, 而通过了automatic annotation 但未经人工review的蛋白序列则归入到UniProtKB/TrEMBL数据库中

## UniProtKB/TrEMBL
UniProtKB的TrEMBL部分是1996年建立，那时数据增长较快，因手工校正和review的速度比较慢，所以采取了 比较严格的 automatic annotation，将high quality computaionally analyzed records 都纳入TrEMBL, 与Swiss-Prot分开，这种既不会影响Swiss-Prot的准确性，又可以及时的公开数据让所有的研究者访问。

**a1: 定义一个cds序列为 真正的蛋白 的标准是怎么样的？**
大多数的蛋白序列都是从预测的CoDing Sequence(CDS)翻译过来的。一个CDS序列是DNA或者RNA中可以翻译为氨基酸序列的一个region。 它和Open Reading Frame(ORF)的定义不同，ORF通常是一系列的密码子而不包含终止密码子（可以理解为不完整的CDS）。CDS一定是ORFs, 但ORFs不一定是CDS。

**a2: UniProtKB 定义一个CDS 不是真正的蛋白 的标准是怎么样的？**  
基因预测的performance 极大程度上依赖于现有的生物学知识和背景。 我们使用生物信息学的工具将可能的CDS序列比对到最大的核酸序列数据库（genomic and RNA/ESTs）（可以理解为nt/nr库？），将一个CDS定义为 非真正蛋白序列的条件包括：1 更长/更短的RNAs的出现（融合/剪切所预测的基因）2. 缺乏对应的RNA序列，及/或 错误的内含子/外显子的边界（真核生物中） 3. 文献中报道为假基因的。当证据足够充分，就会将该条CDS从UniProtKB中移除。
