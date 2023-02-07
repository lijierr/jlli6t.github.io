---
layout: posts
title: "git操作本地仓库"
subtitle: ""
author: Jie Li
toc: true
toc_label: "git操作本地仓库"
toc_icon: "heart"
excerpt_separator: "<!--more-->"
categories: 
    - linux
    - git
tags:
    - tutorial
    - git
---

### git 工具
查看服务器上是否已经安装好`git`。服务器上有自带的`git`，直接使用即可，不需要另外安装了。
{% highlight bash %}
which git
/opt/rocks/bin/git
{% endhighlight %}

<!--more-->

### 初始化仓库
进入到对应的目录，执行`git init`命令。
{% highlight bash %}
git init
{% endhighlight %}

### 查看工作状态
查看工作目录`+stage+HEAD`的状态，发现工作目录有一个`rdetfq.py`文件，但是没有被`stage`，也没有`commit`到`HEAD`过。

{% highlight bash %}
git status
On branch master

Initial commit

Untracked files:
    (use "git add <file>..." to include in what will be committed)

        rdetfq.py

nothing added to commit but untracked files present (use "git add" to track)
{% endhighlight %}

### 对目录下的文件进行stage
所以需要先`stage rdetrfq.py`。没有任何信息输出，Linux的核心，没有消息就是好消息之一。
{% highlight bash %}
git add rdetrfq.fy
{% endhighlight %}

### 再次查看工作状态
再次查看`status`，提示`rdetrfq.py`已经被`stage`，在等待被`commit`到`HEAD`。
{% highlight bash %}
git status
On branch master

Initial commit

Changes to be committed:
    (use "git rm --cached <file>..." to unstage)

        new file:     rdetfq.py
{% endhighlight %}

### commit stage的内容到HEAD
将`stage`中的所有内容`commit`到`HEAD`区， `-m`是注释信息，注明本次`commit`所做的改变。
{% highlight bash %}
git commit -m "add code of randomly extracting fq"
{% endhighlight %}

### 再次查看工作状态
再次查看工作区的状态，显示`working tree clean`, 工作区的东西在`HEAD`区中都有，版本一致。
{% highlight bash %}
git status
On branch master
nothing to commit, working tree clean
{% endhighlight %}

### 其他操作
#### tip 0
如果已经`commit`多个不同的版本到`HEAD`，想回到以前`commit`的版本，例如回退一个版本：
{% highlight bash %}
git reset --hard HEAD~1
HEAD is now at e7b3364 add read_pars function
{% endhighlight %}

#### tip 1
如果你想撤销`add`到`stage`区的文件，使用`git reset HEAD +文件`，这里的单独的`HEAD`指的是当前版本
例如撤销`stage`区的`test`文件：(相当于撤销一次对`stage`区的操作):
{% highlight bash %}
git reset HEAD test
Unstaged changes after reset:
M       test
{% endhighlight %}

#### tip 2
如果在工作区中对`test`文件进行了修改，但是并不想保留修改，则使用`git checkout`撤销在工作区中对文件`test`进行的修改，相当于从`HEAD`中把当前版本的`test` `copy`出来，`--` 是指定在当前`branch`。如果不加`--`，在多`branch`的情况下会切换到其他的`branch`进行操作，而不是对`test`这个文件进行操作。
{% highlight bash %}
git checkout -- test
{% endhighlight %}

#### tip 3
如果你想从`HEAD`中删除某个文件: 则使用`git rm file`来对`file`进行删除， 然后需要`git commit`此次操作到`HEAD`
{% highlight bash %}
git rm rdetrfq.py
rm 'rdetrfq.py'
{% endhighlight %}

#### tip 4
但是如果还没有进行`commit`到`HEAD`, 又想恢复文件的话，则需要先撤销一次对`stage`的操作。`git reset HEAD file`，这是把指针指回当前`HEAD`， 相当于忽略`git rm file`这一步操作。
{% highlight bash %}
git reset HEAD rdetrfq.py
Unstaged changes after reset:
D       rdetrfq.py
{% endhighlight %}

#### tip 5
通过`tip 4`指针指回当前`HEAD`之后，再`checkout`从`HEAD`区`copy`来对应的文件，可以看到紫粉色文件已经恢复到工作区。
![]({{ 'assets/picbed/post/git_checkout_recall_file1.png' | relative_url }})

#### tip 6 
如果只是`linux`命令`rm`误删了某个工作区的文件：则直接使用`git checkout`可从`HEAD`里召回当前版本的该文件。
![]({{ 'assets/picbed/post/git_checkout_recall_file2.png' | relative_url }})

### ref
https://git-scm.com/book/zh/v2/%E6%9C%8D%E5%8A%A1%E5%99%A8%E4%B8%8A%E7%9A%84-Git-%E7%94%9F%E6%88%90-SSH-%E5%85%AC%E9%92%A5
