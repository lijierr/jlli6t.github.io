---
title: "Deep and shallow copy in Python"
toc_label: "Deep and shallow copy in Python"
categories:
    - coding
    - python
tags:
    - syntax
---

## 总结
shallow copy 就是直接 new = old[:], new的地址仍然指向old的地址，故old的内容发生变化的时候new的内容也会发生变化。
<!--more-->

## Shallow copy
浅层的copy a list, 只是生成了一个新变量，指向的依然是原来变量的地址，如果原来变量发生改变，则新变量（copy）也随之发生改变，例如： that's so called shallow copies, shallow copy： aliasing, 取了个别名，而不是真的copy了一个变量，其地址没有变。 having two lists unintentionally connected to each other

就是说使用`a=[:]` 这种操作来`copy` 一个`list`的时候，copy的只是最顶层的`list`.内层如果也有List的时候，并没有被copy.
![]({{ 'assets/picbed/coding/python/deep_shallow_copy.png' | relative_url}})

## Deep copy
实际就是给新copy的变量指定了一个新的地址，而非直接指向原来的地址，所以在original里增加元素之后，并不会影响copy的变量
![]({{ 'assets/picbed/coding/python/deep_shallow_copy2.png' | relative_url}})

当copy的对象结构很复杂的时候，例如是list 套list, 但又不是全部都是list, 做deep copy有更优雅的方法，例如copy 模块中的deepcopy函数，感觉这个deepcopy是无限循环copy一个对象
![]({{ 'assets/picbed/coding/python/deep_shallow_copy3.png' | relative_url}})