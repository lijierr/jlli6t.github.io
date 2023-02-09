---
title: "Configure Python3 with TCL-TK"
toc_label: "Configure Python3 with TCL-TK"
categories:
    - coding
    - python
tags:
    - TCK-TK
    - environment
    - linux
---
### Introduction
More and more projects are migrating from Python2 to Python3. On the one hand, Python3 has more features available, and secondly, the more important reason should be that with the development of Python3 and its community, Python2 will gradually no longer be maintained.
Due to the needs of the work, my working python have to be configured with tk and tcl. The details are as follows:
<!--more-->

很多项目在陆陆续续的往Python3迁移，一方面是Python3有更多的feature可用，其次更重要的原因应该是，随着Python3和社区的发展，Python2慢慢会不再维护了。
因工作内容需要，Python需要配置tk及tcl，细节如下：

{% highlight bash %}
tk=~/tk8.6.6/unix # path to configured tk
tcl=~/tcl8.6.6/unix # path to configured tcl
export LDFLAGS=" -L$tk/lib -L $tcl/lib $LDFLAGS "
export CPPFLAGS=" -I$tk/include -I$tk/include $CPPFLAGS "
export PATH=$tk/bin:$tcl/bin:$PATH
export LD_LIBRARY_PATH=$tk/lib:$tcl/lib:$LD_LIBRARY_PATH

./configure --prefix=~/Python-3.6.0 --disable-ipv6 --with-tcltk-libs="-L$tk/lib/ -L$tcl/lib" --with-tcltk-includes="-I$tk/include -I$tcl/include" && echo configure done &&
make -j 4 && echo make done &&
make install -j 5 && echo make install done
{% endhighlight %}

### Summary (结语)
No big difference of syntax between python3 and python2, I adapted well, I hope you are too.

Python3，Python2个人感觉语法差异没有很大，小编适应得不错，希望你们也是呀~~

### Reference (参考)
[stackoverflow thread](https://stackoverflow.com/questions/16026348/preparing-tkinter-and-sqlite3-for-python-installation-no-admin-rights)
