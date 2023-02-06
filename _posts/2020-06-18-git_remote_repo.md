---
layout: posts
title: git操作远端仓库
subtitle: ""
author: Jie Li
toc: true
toc_label: "git操作远端仓库"
toc_icon: "heart"
excerpt_separator: "<!--more-->"
categories:
    - linux
    - git
tags:
    - tutorial
    - git
---

## Introduction
### 确认SSH key
第一步，首先确实自己的目录下是否已经有`SSH key`。这个一般在`~/.ssh`目录下，可查看目录是否有
{% highlight bash %}
ls ~/.ssh/
a  b  id_rsa  id_rsa.pub  known_hosts
{% endhighlight %}

<!--more-->

需要的文件是一对以`id_rsa`或`id_dsa`命名的文件。例如上边我的目录中是`id_rsa`文件和`id_rsa.pub`文件，其中一个文件以`id_rsa.pub`文件是公钥，`id_rsa`是私钥。
如果没有这样的文件，或者甚至都没有.ssh目录的话，那么需要自己生成`SSH`公钥：

{% highlight bash %}
ssh-keygen -o
{% endhighlight %}

然后将生成的`id_rsa.pub`里的内容复制粘贴给`github`自己的账号中的`SSH key`。`SSH keys`的目的是为了保证推送的提交是你本人推送的，而不是别人冒充的。`git`支持`SSH`协议，并允许你添加多个`KEY`, 这样即使你有N台电脑并都会进行提交的时候，只需要把每一台电脑的`SSH key`都添加进去，`github`就允许每一台key被添加的都电脑都推送过来啦!
![]({{ 'assets/picbed/post/ssh_key.png' | relative_url }})

### 绑定用户名和邮箱
{% highlight bash %}
git config --global user.name 用户名
git config --global user.email 邮箱
{% endhighlight %}

测试查看自己的用户名和email
{% highlight bash %}
git config user.name
git config user.email
{% endhighlight %}

### 创建远端仓库
如果该项目在远端仓库还没有对应的项目仓库，那么需要先在远端建立一个新仓库，例如github的网页操作。例如创建仓库名称为test的公开项目仓库。
![]({{ 'assets/picbed/post/create_remote_repo.png' | relative_url }})

### 关联仓库
项目仓库创建好之后，进入到本地的仓库，将项目仓库与本地仓库进行关联。
{% highlight bash %}
git remote add test https://github.com/username/test.git
{% endhighlight %}

### 推送本地仓库
关联好之后，就可以开始推送啦, 因为是第一次推送这个仓库，所以加入-u参数，把当前分支master所有内容推送到远程，并且会将本地的master分支和远程的master分支关联起来，这样以后推送或者拉取时就可以简化命令
首次推送：
{% highlight bash %}
git push -u test master
{% endhighlight %}
其他推送：
{% highlight bash %}
git push test master
{% endhighlight %}

### 其他命令
查看本地已关联的远端仓库：
git remote -v
删除某个远端仓库的关联：
git remote rm NAME
如果推送远端被拒，有可能是`ssh keys`的问题，可以尝试在`command line`输入`unset SSH_ASKPASS`，问题可解决。

当远端仓库里有1个或多个文件是本地仓库里没有的的时候，需要先将远端仓库`pull`到本地:
{% highlight bash %}
git pull 远端仓库
{% endhighlight %}

### ref
https://git-scm.com/book/zh/v2/%E6%9C%8D%E5%8A%A1%E5%99%A8%E4%B8%8A%E7%9A%84-Git-%E7%94%9F%E6%88%90-SSH-%E5%85%AC%E9%92%A5
