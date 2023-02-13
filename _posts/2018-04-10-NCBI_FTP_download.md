---
title: "NCBI FTP下载"
toc_label: "NCBI FTP下载"
categories:
    - database
    - genome
tags:
    - genome
    - NCBI
last_modified_at: 2020-04-02
---

`NCBI`的这个`genome reports`的`FTP site`下，
`ftp://ftp.ncbi.nlm.nih.gov/genomes/GENOME_REPORTS/`
有真核：
`ftp://ftp.ncbi.nlm.nih.gov/genomes/GENOME_REPORTS/eukaryotes.txt`
原核：
`ftp://ftp.ncbi.nlm.nih.gov/genomes/GENOME_REPORTS/prokaryotes.txt`
病毒：
`ftp://ftp.ncbi.nlm.nih.gov/genomes/GENOME_REPORTS/viruses.txt`
质粒：
`ftp://ftp.ncbi.nlm.nih.gov/genomes/GENOME_REPORTS/plasmids.txt`
等数据库，
更新得挺频繁的。

如果想要下载基因组，可直接下载对应的文件，然后提供相应的关键字，即可批量下载。

## 1. 链接NCBI FTP基本操作
1. 启动`lftp`, 这个是`loading ftp`的意思
2. `cd ftp://ftp.ncbi.nih.gov`。 这个是`NCBI`的`ftp`目录
3. cd genomes/refseq
4. mirror bacteria/
5. mirror archaea/

## 2. 测试
### 2.1 测试1 TargetedLoci目录
`cd`进入`ftp://ftp.ncbi.nih.gov`目录后
进入`refseq`目录，
`mget`了`README`文件
接着`mirror`了`TargetedLoci`目录，这个目录里根据说明信息是`Archae`, `Bacteria`, `Fungi`的`16s`, `18s`, `23s`等数据。

### 2.2 测试2 Bacteria目录
接下来`mirror`了`release/plasmid`目录
{% highlight bash %}
mget RELEASE_NUMBER
mirror archaea
lftp ftp.ncbi.nih.gov:/refseq/release mirror bacteria
{% endhighlight %}
下载文件用`mget`命令，例如`mget bacteria.16SrRNA.fna.gz`
下载目录用`mirror`。

### 3 其他方法
[ftp://ftp.ncbi.nlm.nih.gov/genomes/ASSEMBLY_REPORTS](ftp://ftp.ncbi.nlm.nih.gov/genomes/ASSEMBLY_REPORTS)
这个目录下有相应的文件，包含每个序列的版本信息以及`ftp`地址等等，可以根据这里边的文件进行下载。

找到了一个更简洁的方法来下载`genomes`,
[https://www.ncbi.nlm.nih.gov/assembly](https://www.ncbi.nlm.nih.gov/assembly)
从这里边可以筛选你想要下载的东西，限制各种条件啊什么的。

[https://ncbiinsights.ncbi.nlm.nih.gov/2018/11/16/refseq-release-91/](https://ncbiinsights.ncbi.nlm.nih.gov/2018/11/16/refseq-release-91/)
`RefSeq91`发布了，`ftp`地址：
[https://ftp.ncbi.nlm.nih.gov/refseq/release/](https://ftp.ncbi.nlm.nih.gov/refseq/release/)