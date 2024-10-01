---
layout: post
title: PICRUSt的笔记
description:
author: Jie Li
date: 2018-03-20
categories: [amplicon]
tags: [amplicon, microbial metabolic]
lang: en
last_modified_at: 2023-07-30
---

## 1. 简介
`Picrust`是一款基于`16S rRNA gene`数据库对扩增子测序的群落进行功能预测的工具(只能基于`greengenes`数据库)。~~目前`16S rRNA gene`有并且只有`13_5`和`12_8`两个版本。~~ 目前`greengenes`数据库的最新版本为[`greengenes2`](http://ftp.microbio.me/greengenes_release/)。  
`picrust`是基于已经计算好的数据库进行预测，数据库[下载地址](http://picrust.github.io/picrust/picrust_precalculated_files.html)。  
下载的数据库需要放到`Python-2.7.12/lib/python2.7/site-packages/PICRUSt-1.1.3-py2.7.egg/picrust/data/`目录下；因为`picrust`软件默认是访问这个目录来找数据库

## 2. 安装
安装`picrust`, 这个中间没有遇到麻烦；注意`picrsut`是基于`python2.7`版本(用的`2.7.12`)， 其他版本的`python`会报错例如`python3.5.2`。

## 3. 使用
因为`picrust`是读入`biom`文件所以先要生成`biom`格式的文件，其中`biom`需要包含的信息有每个样品注释上的物种信息及对应的丰度，生成`biom`的格式方法有两种：

### 3.1 way 1
通过利用`qiime1`的命令先挑选`otu`比对的`ref`, 这里相当于重新比对分类一次，默认方法是`uclust`(其他还有`usearch_ref`， `sortmerna`), 所以挑出来的`otu`比`OTU_final.fasta`里的序列要少, 整体预测的通路的矩阵里的值会小一些，通路数量上可能也小一些。这里好像不支持`rdp`的结果，因为`rdp`基于贝叶斯的概率方法，最后没有给出具体比对的哪个`id`, 而是只给出一个分类`taxonomy`信息。

#### 3.1.1 step 1
首先用`qiime1`里的`pick_closed_reference_otus.py`命令挑选`ref`：(可以使用`97`，也可以使用`90`，`99`或者其他的)
```bash
echo "pick_otus:enable_rev_strand_match True">>otu_picking_params_97.txt
echo "pick_otus:similarity 0.97">>otu_picking_params_97.txt
pick_closed_reference_otus.py -i OTU_final.fasta -o $PWD/ucrC972/ -p $PWD/otu_picking_params_97.txt -r ./gg_13_5_otus/rep_set/97_otus.fasta -t ./gg_13_5_otus/taxonomy/97_otu_taxonomy.txt -a -O 8
```

#### 3.1.2 step 2
将`biom`文件转换为`tsv`文件。
```bash
biom convert -i ucrC972/otu_table.biom -o ucrC972/otu_table.biom.tsv --to-tsv
```

`tsv`文件如下图：主要是得到每个`otu`比对上的`ref`, 然后形成一个`0 1`矩阵
![]({{ 'assets/picbed/tools/picrust/picrust_biom2matrix.png' | relative_url}})

## 4. 测试PICRUST 1.1.3
### 4.1 介绍
根据`16S`的测序数据，对样本的现在通路进行预测。`picrust`只能基于`greengenes database`进行预测，~~并且只有`13_5`和`12_8`两个版本。~~ `picrust`是基于已经计算好的数据库进行预测，数据库[下载地址](http://ftp.microbio.me/greengenes_release/)

下载的数据库需要放到`Python-2.7.12/lib/python2.7/site-packages/PICRUSt-1.1.3-py2.7.egg/picrust/data/`目录下；因为`picrust`软件默认是访问这个目录来找数据库。

### 4.2 测试过程
#### 4.2.1 生成biom文件
因为`picrust`是读入`biom`文件，所以先要生成`biom`格式的文件。其中`biom`需要包含的信息有每个样品注释上的物种信息及对应的丰度，生成`biom`的格式方法有两种：

##### 4.2.1.1 方式1
通过利用`qiime1`的命令先挑选otu比对的`ref`, 这里相当于重新比对分类一次，默认方法是`uclust`(其他还有`usearch_ref`， `sortmerna`)。所以挑出来的`otu`比`OTU_final.fasta`里的序列要少, 整体预测的通路的矩阵里的值会小一些，通路数量上可能也小一些。这里好像不支持`rdp`的结果，因为`rdp`基于贝叶斯的概率方法，最后没有给出具体比对的哪个`id`, 而是只给出一个分类`taxonomy`信息。

1. 首先用`qiime1`里的`pick_closed_reference_otus.py`命令挑选`ref`：(可以使用`97`，也可以使用`90`，`99`或者其他的)
```bash
echo "pick_otus:enable_rev_strand_match True">>otu_picking_params_97.txt
echo "pick_otus:similarity 0.97">>otu_picking_params_97.txt
pick_closed_reference_otus.py -i OTU_final.fasta -o $PWD/ucrC972/ -p $PWD/otu_picking_params_97.txt -r ./gg_13_5_otus/rep_set/97_otus.fasta -t ./gg_13_5_otus/taxonomy/97_otu_taxonomy.txt -a -O 8
```

2. 将`biom`文件转换为`tsv`文件:
```bash
biom convert -i ucrC972/otu_table.biom -o ucrC972/otu_table.biom.tsv --to-tsv
```
`tsv`文件如下图：主要是得到每个`otu`比对上的`ref`, 然后形成一个`0 1`矩阵:
![]({{ 'assets/picbed/tools/picrust/picrust_biom2matrix.png' | relative_url}})

3. 结合`OTU_shared_final.xls`的每个样品的每个`otu`的绝对丰度文件:
```perl
perl -e 'open(IN,"ucrC972/otu_table.biom.tsv");$t=<IN>;print"$t";%hash;$t=<IN>;chop($t);@t=split/\t/,$t;while(<IN>){chomp;@a=split;for($i=1;$i<@a;$i++){if($a[$i]==1){$hash{$t[$i]}=$a[0];}}}close IN;$t=<>;chomp($t);print"#OTU ID$t\ttaxonomy\n";@t=split/\s+/,$t;%out;while(<>){chomp;@a=split;next if(not exists $hash{$a[0]});for($i=1;$i<@a;$i++){$out{$hash{$a[0]}}{$t[$i]}+=$a[$i];}}foreach $k(sort keys %out){print"$k";for($i=1;$i<@t;$i++){print"\t$out{$k}{$t[$i]}";}print"\n";}' ../../OTU_shared_final.xls >otu_table.biom.txt
```
生成的`otu_table.biom.txt`文件如下格式：
![]({{ 'assets/picbed/tools/picrust/picrust_otu_table.png' | relative_url}})

4. 将文件`convert`为`biom`格式:
```bash
biom convert -i otu_table.biom.txt -o otu_table.biom --to-hdf5
```

##### 4.2.1.2 方式2
利用`mothur`软件的`make.biom`命令生成`biom`文件，直接将注释的结果转换成如上格式，需要用到`otu`的丰度值以及具体的`greengenes`数据库的注释信息。需要利用到注释的中间其他文件例如将`otu id`与`ref id`对应的文件。因为没有`pick`的过程，所以`otu`有多少，就有多少注释结果，通路上可能比第一种方法要多。

而且这种方法要求必须有`greengenes`的注释结果。通常我们不会用`greengenes`进行注释，所以如果肯定不会使用`greengenes`的数据库注释结果，可以采用第一种方法生成`biom`文件；
#### 4.2.2 对物种注释信息标准化
利用预先计算好好的`16s`拷贝数数据库，对`otu`的物种注释信息进行`16s`拷贝数的标准化。
```bash
normalize_by_copy_number.py -i otu_table.biom -o normalized_otus.biom
predict_metagenomes.py -t ko -i normalized_otus.biom -o metagenome_predictions.biom -a KEGG_predict_traits.tab
```

#### 4.2.3 功能预测
利用`predict_metagenomes.py`命令对标准化后的`otu`丰度进行功能预测。这里包括`kegg`, `cog`, 和`pfam`3个数据库进行预测，`-t cog` 或者 `-t rfam`
```bash
predict_metagenomes.py -t ko -i normalized_otus.biom -o metagenome_predictions.biom -a KEGG_predict_traits.tab
```
其次，加入`-f`参数， `predict_metagenomes.py -f -t ko -i normalized_otus.biom -o metagenome_predictions.txt -a KEGG_predict_traits.tab`生成`tab`键隔开的文件
得到的是每个样品中`KO`酶的丰度
![]({{ 'assets/picbed/tools/picrust/picrust_ko_table.png' | relative_url}})

#### 4.2.4 对预测的功能进行map划分
将预测到的值进行`map`的划分，则`KO`的信息也是很重要，因为很多`KO`是不存在在`map`中的；
```bash
categorize_by_function.py -f -i metagenome_predictions.biom -c KEGG_Pathways -l 3 -o KEGG_Pathways.L3.txt
```

#### 4.2.5 是否可以用每一个通路/基因在各个样品之间的值来做标准化。
即例如`K01361`在样品`MFC.1`中，标准化之后为`20/(20+24+21+24)`。测试如下：
在挑选了`ref`序列之后，在生成`biom`文件前身的时候，由输入`OTU_shared_final.xls`文件改为输入其相对丰度文件，在`predict_metagenome.py`的过程中，会出现报错：
```
predict_metagenomes.py:371: RuntimeWarning: invalid value encountered in true_divide

    result=total/n
```

预测的结果文件能正常生成，但是和之前的结果不一致。推测，可能在前边输入OTU的相对丰度的时候导致在16S拷贝数的标准化等等过程中有四舍五入的过程，因为虽然不一致，但是最后预测的结果是整数, 并且很多原来用绝对值去预测的时候能得到很小的值，但是换成相对丰度之后就变为了0， 有四舍五入的可能性更大了。
![]({{ 'assets/picbed/tools/picrust/picrust_ko_table2.png' | relative_url}})
且最后预测到的值，每个样品的总和是不一致的。有三种可能性，第一种是标准化之后的输入文件，在分析过程中有四舍五入的嫌疑; 第二种是虽然做了标准化，但是不是每个样品的`OTU`都能全部被挑到，这里去掉了一些`OTU`, 导致了丰度的不一致，这个是肯定的; 第三种是`1，2`两种情况同时存在。暂时我的理解是如果输入绝对丰度文件，对最后的输出结果做标准化，就相当于将所有的`unclassified`去掉之后对能注释上的物种做了一次标准化, 但因为不确定中间是否有四舍五入或者其他简略过程，需要更多的测试

#### 4.2.6 待测试
1. 可以将`pick`到`ref`的`otu`的丰度再做一次标准化，然后作为输入进行预测，计算每个样品的总和
2. `Module`没有预测出来，待解决。原文中有提到`Module`的信息，最好能预测到`module`的信息
