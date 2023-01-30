---
layout: posts
title: Perl包安装
author: Jie Li
toc: true
toc_label: "Perl包安装"
toc_icon: "heart"
excerpt_separator: "<!--more-->"
categories: [coding, perl]
tags: [annotation, perl, linux]
math: false
---

## Notes

`CPAN`自动安装`Perl`包，这个最常用：
{% highlight bash %}
/path/to/cpan # 启动
>>> install PackageName
{% endhighlight %}

<!--more-->

## 当你没有root权限

假如你没有`root`权限，则你需要将包安装到你有写入权限的目录：
首先安装`local::lib`
https://metacpan.org/pod/local::lib
使用的命令如下：
{% highlight bash %}
wget https://cpan.metacpan.org/authors/id/H/HA/HAARG/local-lib-2.000024.tar.gz
tar -xvf local-lib-2.000024.tar.gz
cd local-lib-2.000024
perl Makefile.PL --bootstrap=YOURPATH
make test
make install
{% endhighlight %}

## 当安装的时候报错，需要解决依赖包的问题

例如，需要安装`Moose`，`CPAN`安装的时候报错退出。提示此包的依赖包括:
`Package::DeprecationManager,Package::Stash::XS,Test::CleanNamespaces,Sub::Exporter,Params::Util,Devel::OverloadInfo,Class::Load::XS,Package::Stash,Class::Load,Sub::Name,Data::OptList,Sub::Identify`
那么，需要依次安装这些包：
{% highlight bash %}
perl -MCPAN -Mlocal::lib -e 'CPAN::install(包名)'
{% endhighlight %}
把所有的依赖都准备好之后，安装Moose就成功了。

接下来安装`IPC:Run`包
{% highlight bash %}
echo 'eval $(perl -I$HOME/perl5/lib/perl5 -Mlocal::lib)' >>~/.bashrc
source ~/.bashrc
{% endhighlight %}

最后需要解决pfam_scan检索目录的问题。需要把安装好的包所在的目录加入到pfam_scan的检索目录中就可以成功导入需要的依赖包并运行了。