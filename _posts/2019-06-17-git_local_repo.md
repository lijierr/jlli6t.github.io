---
layout: post
title: Learning git - local repo
author: Jie Li
categories: [coding, bash]
tags: [tutorials, git]
math: false
---

## Words from J：
Git is a tool for version control, and it is one of the bests, there are lots of blogs describing the logic of git.
使用git的好处不多说，网上有非常多的博客讲解了其逻辑结构。最最主要的功能版本控制，真的是所有代码爱好者的福音了（嘻嘻）。
建议不熟悉git逻辑的同学宝宝先了解一下git的逻辑再阅读本文，会更顺畅哦。

### git工具
查看服务器上是否已经安装好git， 服务器上有自带的git，直接使用即可，不需要自行安装了
{% highlight bash %}
$which git
/opt/rocks/bin/git
{% endhighlight %}


### 初始化仓库：
进入到对应的目录，然后执行`git init`命令即可
{% highlight bash %}
$git init
{% endhighlight %}

### 查看工作状态：
查看工作目录+stage+HEAD的状态，发现工作目录有一个rdetfq.py文件，但是没有被加入到stage，也没有commit到HEAD过。
{% highlight bash %}
$git status
On branch master

Initial commit

Untracked files:
  (use "git add <file>..." to include in what will be committed)

    rdetfq.py

nothing added to commit but untracked files present (use "git add" to track)
{% endhighlight %}

### 对目录下的文件进行stage：
于是add rdetrfq.py add 到stage, 没有任何信息输出，Linux的核心，没有消息就是好消息之一
{% highlight bash %}
$git add rdetrfq.fy
{% endhighlight %}

### 再次查看工作状态：
再次查看status, 发现提示rdetrfq.py已经被add到stage区，在等待被commit到HEAD
{% highlight bash %}
$git status
On branch master

Initial commit

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

      new file:   rdetrfq.py
{% endhighlight %}

### Commit stage的内容到HEAD区：
将stage中的所有内容commit 到HEAD区， -m是注释信息，注明本次commit所做的信息
{% highlight bash %}
$git commit -m "add code of randomly extracting fq"
[master (root-commit) e66bd9f] add code of randomly extracting fq
  1 file changed, 11 insertions(+)
  create mode 100644 rdetrfq.py
{% endhighlight %}

### 再次查看工作区状态：
再次查看工作区的状态，显示working tree clean, 工作区的东西在HEAD区中都有，版本一致
{% highlight bash %}
$git status
On branch master
nothing to commit, working tree clean
{% endhighlight %}

### Useful tips
本地仓库操作相关的TIPS
**TIPS0：**

如果已经commit 多个不同的版本到HEAD，想回到以前commit的版本，例如回退一个版本：
{% highlight bash %}
$git reset --hard HEAD~1
HEAD is now at e7b3364 add read_pars function
{% endhighlight %}

**TIPS1：**

如果你想撤销add到stage区的文件，使用git reset HEAD +文件，这里的单独的HEAD指的是当前版本
例如撤销stage区的test文件：(相当于撤销一次对stage区的操作)
{% highlight bash %}
$git reset HEAD test
Unstaged changes after reset:
M   test
{% endhighlight %}

**TIPS2：**

如果在工作区中对test文件进行了修改，但是并不想保留修改，则使用git checkout撤销在工作区中对test文件进行的修改，相当于从HEAD中把当前版本的test copy出来，-- 是指定在当前branch，如果不加--，在多branch的情况下会切换到其他的branch进行操作，而不是对test这个文件进行操作
{% highlight bash %}
$git checkout -- test
{% endhighlight %}

**TIPS3：**

如果你想从HEAD中删除某个文件: 则使用git rm file来对file进行删除， 然后需要git commit此次操作到HEAD
{% highlight bash %}
$git rm rdetrfq.py
rm 'rdetrfq.py'
{% endhighlight %}

**TIPS4：**

但是如果还没有进行commit到HEAD, 又想恢复文件的话，则需要先撤销一次对stage的操作， git reset HEAD file，这是把指针指回当前HEAD， 相当于忽略git rm file这一步操作
{% highlight bash %}
$git reset HEAD rdetrfq.py
Unstaged changes after reset:
D   rdetrfq.py
{% endhighlight %}

**TIPS5：**

通过TIPS4指针指回当前HEAD之后，再checkout 从HEAD区copy来对应的文件，可以看到对应的文件已经恢复到工作区
{% highlight bash %}
$git checkout -- rdetrfq.py
{% endhighlight %}

**TIPS6：**

如果只是linux 命令rm误删了某个工作区的文件：则直接使用git checkout可从HEAD里召回当前版本的该文件
{% highlight bash %}
$rm rdetrfq.py ## you accidentally removed file rdetrfq.py
$git checkout rdetrfq.py # you recalled this file from HEAD
{% endhighlight %}

### 参考：
[book-tutorial-for-git](https://git-scm.com/book/zh/v2/%E8%B5%B7%E6%AD%A5-%E5%85%B3%E4%BA%8E%E7%89%88%E6%9C%AC%E6%8E%A7%E5%88%B6)
