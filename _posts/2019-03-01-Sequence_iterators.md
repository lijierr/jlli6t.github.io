---
title: "序列迭代器"
toc_label: "序列迭代器"
categories:
    - coding
    - python
tags:
    - fastq
    - fasta
    - sequence
---

## Introduction
做生物数据的分析，处理序列就像日常操作。而更快速的序列迭代，就像打游戏时开了外挂。
需要对fastq文件序列进行频繁的抽调，数据量大的时候，时间成本成指数增长。翻了翻文档，`Biopython`除了提供`Bio.seqIO.parse`函数解析文件之外，其实还提供了一种更底层的写法，可以成N倍的提高读文件的速度，我没有具体去计算会快多少倍（因为等不及了，kill掉了进程），目测的话，快几十倍是不成问题的。
<!--more-->

`Bio.SeqIO.QualityIO.FastqGeneralIterator`同`Bio.SeqIO.parse`一样也是一个迭代器，只不过不生成对象`record`，而是生成序列id、序列、以及质量值本身，遍历的时候调用语法为
{% highlight python %}
For title, seq, qual in FastqGeneralIterator(fh):
	Do something
{% endhighlight %}

`FastqGeneralIterator`速度很快了，但我偶然又看到大神Heng Li 12年写的一个小代码`readfq`，相信不少同学有看过源码（我看到不少项目都嵌了这段代码），也是一个序列遍历器，且居然还在活跃，还有人在提issue和pr。

测试文件为一个`36,518,870`条序列的`fastq.gz`文件，这个序列数量已经是人肠道微生物基因集的几倍了，大多数情况下都不会需要频繁迭代这么多的序列量。我测试迭代然后统计序列数，碱基数，及质量字符数。
考虑到服务器上其他用户的状态可能也会影响测试效果，所以做了多次测试，`Bio`版本为`1.76`，测试平台为`x86_64 GNU/Linux`：

通过5次单独的测试，总的来说`readfq`速度上比`Bio`慢一点点，不会超过`20%`，其中第四次测试`readfq`的速度超过了`Bio`，可能测试环境也有一定的影响。
强推大神代码的原因：
- 代码非常简洁，仅仅31行！相比于Bio来说，非常轻量。
- 大神的代码同时兼容`fasta`和`fastq`！而`FastqGeneralIterator`只能处理`fastq`文件，如果要处理`fasta`格式的文件的话，需要调用`Bio.SeqIO.FastaIO.SimpleFastaParser`
- 本着代码的简洁性以及减少对`library`的依赖，`readfq`胜任。
- 最后就是虽然在测试过程中，`Bio`略胜一筹，但是现实中大部分的情况我们不需要频繁遍历太大的数据，所以速度上可以认为`readfq`与`Bio`的`FastqGeneralIterator`不相上下。

测试代码：
{% highlight python %}
print('start readfq', datetime.now())
n, slen, qlen = 0, 0, 0
for name, seq, qual in readfq(f):
	n+= 1
	slen += len(seq)
	qlen += qual
	print(n, '\t', slen, '\t', qlen)
print('end readfq', datetime.now())

print('start Bio', datetime.now())
n, slen, qlen = 0, 0, 0
for name, seq, qual in FastqGeneralIterator(fh):
	n+=1
	slen += len(seq)
	qlen += qual
print(n, '\t', slen, '\t', qlen)
print('end Bio', datetime.now())
{% endhighlight %}

## 附上测试结果供参考：
**第一次测试**: `readfq`比`Bio`: **118.88%**
{% highlight python %}
start readfq 2020-06-23 10:47:13.063023
end readfq 2020-06-23 10:51:32.138950
readfq用时：259.075927s
start Bio 2020-06-23 10:51:35.854583
end Bio 2020-06-23 10:55:13.789172
Bio用时：217.934589s
{% endhighlight %}

**第二次测试**: `readfq`比`Bio`: **118.62%**
{% highlight python %}
start readfq 2020-06-23 10:55:58.999203
end readfq 2020-06-23 11:00:06.315406
readfq用时：247.316203s
start Bio 2020-06-23 11:00:08.641087
end Bio 2020-06-23 11:03:37.140562
Bio用时：208.499475s
{% endhighlight %}

**第三次测试**: `readfq`比`Bio`: **15.51%**
{% highlight python %}
start readfq 2020-06-23 11:05:28.903198
end readfq 2020-06-23 11:09:53.790852
readfq用时：264.887654s
start Bio 2020-06-23 11:09:53.912627
end Bio 2020-06-23 11:13:43.230618
Bio用时：229.317991s
{% endhighlight %}

**第四次测试**: `readfq`比`Bio`: **96.91%**
{% highlight python %}
start readfq 2020-06-23 11:13:52.750406
end readfq 2020-06-23 11:18:23.449189
readfq用时：270.698783s
start Bio 2020-06-23 11:18:23.554306
end Bio 2020-06-23 11:23:02.897335
Bio用时：279.343029s
{% endhighlight %}

**第五次测试**: `readfq`比`Bio`: **116.17%**
{% highlight python %}
start readfq 2020-06-23 11:24:57.625076
end readfq 2020-06-23 11:28:58.973375
readfq用时：241.348299s
start Bio 2020-06-23 11:28:59.101057
end Bio 2020-06-23 11:32:26.855097
Bio用时：207.754040s
{% endhighlight %}

## 附大神代码地址
[地址](https://github.com/lh3/readfq/blob/master/readfq.py)