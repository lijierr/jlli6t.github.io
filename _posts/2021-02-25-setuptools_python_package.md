---
title: "python项目打包demo"
toc_label: "python项目打包demo"
categories:
    - coding
    - python
tags:
    - python
---
## 1. 基本配置：
### 1.1 setup.py文件：
{% highlight bash %}
# -*- coding:utf-8 -*-

from setuptools import setup, find_packages
from os import path

setup(
name = 'testpypi11', # 包名称
version = '3.0.3', #版本号
description = 'this is test for packing a pypi package.', # 包的描述
url='***', # optional，项目地址

author = '**', # optional 项目作者
author_email = '**@**', # optional 项目作者邮箱
maintainer='**', # 目前维护人员。如果和作者不一致，那setuptools会在PKG-INFO中把这个名字当做作者
maintainer_email='**', # 维护人员的邮箱
classifiers = [
'License :: OSI Approved :: MIT License',
'Programming Language :: Python :: 3 :: Only', # indicate language you support, *not* checked by 'pip install'
'Operating System :: Unix',
],

keywords = 'test python3 pypi', 
include_package_data=True, # 这个表明除了code之外，还有别的文件/目录需要一起打包。具体哪些内容，则是指定在MANIFEST.in文件中
packages = find_packages(), #这个功能非常好用，不用自己单独指定，特别如果是目录结构较复杂的项目
python_requires = '>=3',

install_requires = ['numpy>=1.17.4'],
entry_points={
'console_scripts':[
'testpypi=testpypi.info1:Info1',
],
},
#scripts=['bin/testpypi'] # 这个和entry_points 二选一即可。表示项目已经自带控制台，不用自动生成新的控制台。setuptools会把这个文件cp到bin下
)
{% endhighlight %}

### 1.2 MANIFAST.in文件
语法挺简单的，见文档：https://packaging.python.org/guides/using-manifest-in/

## 2. 配置账号（可选）：
文件编写好之后，配置作者识别文件.pypirc，配置了这个文件可以省去很多输入账号密码的操作，不配置也可配置好放在home目录下：

{% highlight bash %}
[distutils]
index-servers=pypi

[pypi]
username=username
password=password
{% endhighlight %}

## 3. 上传项目：
### 3.1 上传命令：
{% highlight bash %}
python setup.py sdist upload
{% endhighlight %}

### 3.2 upload的时候一直报错：
翻了一通官方的issue，原来是包的名字重了。
{% highlight bash %}
Upload failed (403): The user isn't allowed to upload to project 'testpypi'. See [https://pypi.org/help/#project-name](https://pypi.org/help/#project-name) for more information.
error: Upload failed (403): The user isn't allowed to upload to project 'testpypi'. See [https://pypi.org/help/#project-name](https://pypi.org/help/#project-name) for more information.
{% endhighlight %}

## 4. 利用setuptools打包发布Pypi的官方帮助文档：
[https://setuptools.readthedocs.io/en/latest/setuptools.html](https://setuptools.readthedocs.io/en/latest/setuptools.html)

## 5. 官方给的setup.py的例子
[https://github.com/pypa/sampleproject/blob/master/setup.py](https://github.com/pypa/sampleproject/blob/master/setup.py)

## 6. 参考博客：
[https://blog.csdn.net/mouday/article/details/80736312](https://blog.csdn.net/mouday/article/details/80736312)
[https://zhuanlan.zhihu.com/p/37987613](https://zhuanlan.zhihu.com/p/37987613)
[https://www.chenshaowen.com/blog/how-to-pack-a-python-package-and-upload-it-to-pypi.html](https://www.chenshaowen.com/blog/how-to-pack-a-python-package-and-upload-it-to-pypi.html)