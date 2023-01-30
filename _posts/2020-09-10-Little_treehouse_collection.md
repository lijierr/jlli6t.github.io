---
layout: posts
title: little treehouse collection - estimation
author: Jie Li
toc: true
toc_label: "little treehouse collection - estimation"
toc_icon: "heart"
excerpt_separator: "<!--more-->"
categories: [statistics, estimation]
tags: [estimation]
math: false
---

### 1. Introduction
Recently, Coles launched a membership campaign. One credit will be issued for every $30 spent at Coles. Where one credit can be redeemed for one LITTLE TREEHOUSE book. The whole book set consists of 24 tiny books (number 1-24, It looks like something in the picture below). 

<!--more-->

However, every redeemed book is **wrapped with cover**, thus, you won't be able to know which number you get until you uncover it.
![photo]( {{'assets/picbed/post/little_treehouse.png' | relative_url }})

I am curious about roughly how much you gonna spend at Coles to collect a full set of LITTLE TREEHOUSE book (a single transaction of $30 or more but less than $60 is calculated as $30).

### Preparation
Hypothesis: Same quantity of each book was packed and evenly mixed. Books redeemed for every $30 are independent from each other.

Randomly generated 1,000,000 numbers between 0 and 9 as an array. For example:
{% highlight bash %}
1, 3, 1, 4, 0, 0, 5, 3, 0, 6, 7, 8, 4, 6, 3, 2, 6, 6, 4, 1, 0, 2, 5, 5, 6, 2, 2, 7, 9, 1, 6, 3, 5, 9, 6, 4, 4, 9, 7, 1, 3, 1, 3, 3, 4, 9, 5, 7, 8, 7, 4, 9, 6, 8, 6, 2, 8, 8, 5, 2, 8, 9, 5, 4, 6, 0, 8, 4, 1, 1, 0, 4, 7, 5, 6, 7, 8, 7, 2, 1, 7, 2, 0, 4, 5, 1, 6, 0, 7, 3, 6, 9, 9, 0, 7, 8, 8, 3, 4, 9, 9, 0, 0, 3, 5, 0, 6, 8, 0, 8, 4, 3, 1, 2, 5, 1, 4, 6, 7, 1, 7, 0, 8, 3, 3, 3, 1, 4, 8, 8, 5, 7, 3, 4, 5, 6, 2, 2, 6, 1, 9, 9, 0, 9, 4, 4, 4, 7, 1, 8, 8, 4, 9, 7, 5, 5, 6, 7, 1, 0, 2, 3, 4, 0, 6, 4, 4, 7, 8, 9, 7, 6, 7, 5, 5, 4, 6, 0, 0, 4, 0, 4, 9, 1, 7, 4, 4, 1, 8, 3, 7, 1, 2, 3, 8, 4, 6, 1, 5, 5, 5, 1, 9, 2, 5, 6, 1, 6, 0, 9, 5, 3, 7, 7, 4, 5, 4, 9, 0, 7, 9, 1, 0, 4, 7, 1, 1, 5, 8, 8, 9, 2, 8, 2, 9, 0, 8, 3, 0, 4, 0, 3, 2, 3, 4, 7, 9, 5, 0, 8, 0, 0, 0, 4, 0, 1, 5, 5, 9, 7, 9, 2, 3, 4, 1, 3, 0, 4, 0, 4, 3, 7, 7, 6, 6, 5, 7, 1, 1, 3, 9, 0, 7, 3, 1, 5, 7, 3, 3, 8, 8, 3, 0, 0, 4, 1, 0, 8, 9, 3, 3, 3, 9, 6, 0, 5, 0, 8, 7, 1, 5, 1, 3, 3, 7, 7, 0, 7, 6, 4, 6, 8, 5, 2, 5, 0, 1, 1, 7, 0, 1, 3, 4, 5, 4, 3, 1, 0, 9, 8, 8, 4, 2, 1, 7, 9, 5, 9, 9, 6, 4, 9, 5, 6, 8, 6, 3, 8, 8, 7, 8, 6, 7, 3, 2, 0, 2, 0, 5, 8, 3, 7, 8, 1, 4, 2, 9, 6, 5, 6, 9, 5, 9, 1, 5, 5, 1, 2, 7, 5, 1, 1, 6, 6, 9, 7, 0, 6, 3, 2, 3, 3, 4, 0, 3, 2, 0, 0, 8, 3, 7, 6, 7, 7, 9, 2, 3, 2, 4, 6, 5, 9, 4, 7, 9, 4, 0, 2, 6, 4, 9, 5, 0, 0, 4, 3, 3, 9, 8, 4, 7, 4, 8, 3, 3, 6, 2, 9, 6, 3, 0, 0, 7, 8, 1, 0, 9, 3, 3, 6, 3, 6, 2, 6, 6, 7, 6, 3, 8, 9, 2, 5, 0, 2, 4, 0, 2, 7, 3, 9, 2, 7, 1, 7, 8, 8, 0, 7, 8, 3, 0, 3, 2, 6, 2, 2, 9, 5, 1, 7, 4, 2, 0, 0, 5, 3, 1, 9, 0, 3, 3, 5, 4, 4, 2, 1, 9, 4, 0, 9, 0, 1, 2, 0, 8, 3, 6, 6, 0, 5, 2, 1, 2, 6, 8, 2, 9, 3, 8, 4, 9, 1, 5, 2, 1, 1, 2, 2, 3, 5, 4, 0, 2, 9, 5, 2, 8, 7, 8, 5, 9, 4, 2, 2, 3, 1, 5, 6, 3, 4, 0, 5, 0, 5, 0, 3, 3, 9, 8, 6, 9, 1, 6, 1, 8, 4, 9, 9, 6, 4, 1, 8, 2, 4, 0, 0, 4, 5, 8, 7, 2, 8, 5, 1, 1, 5, 0, 2, 8, 9, 7, 3, 1, 2, 1, 0, 5, 2, 3, 7, 3, 6, 0, 3, 5, 8, 7, 7, 4, 9, 9, 4, 3, 1, 8, 4, 6, 2, 3, 9, 3, 5, 2, 1, 9, 1, 2, 1, 4, 8, 9, 3, 8, 1, 5, 2, 7, 1, 7, 8, 2, 9, 6, 8, 8, 7, 2, 3, 9, 0, 5, 7, 0, 6, 1, 8, 2, 1, 5, 0, 3, 1, 9, 4, 8, 6, 9, 1, 6, 7, 0, 4, 6, 8, 4, 6, 8, 7, 9, 4, 1, 9, 4, 9, 6, 9, 5, 2, 9, 9, 2, 2, 3, 8, 2, 8, 6, 7, 6, 2, 9, 6, 3, 0, 8, 4, 2, 6, 5, 5, 4, 1, 4, 4, 3, 9, 8, 9, 9, 2, 4, 7, 3, 4, 0, 2, 0, 4, 7, 2, 7, 9, 1, 5, 3, 5, 5, 4, 7, 4, 1, 9, 9, 5, 1, 6, 7, 3, 5, 4, 6, 0, 9, 3, 4, 4, 2, 9, 0, 9, 6, 5, 5, 7, 1, 5, 4, 9, 1, 0, 7, 0, 8, 6, 9, 4, 5, 7, 1, 0, 7, 3, 9, 1, 4, 0, 3, 6, 1, 9, 9, 6, 7, 1, 1, 3, 7, 1, 8, 5, 7, 9, 2, 2, 6, 8, 3, 9, 1, 0, 1, 4, 9, 1, 1, 6, 0, 6, 3, 0, 4, 4, 6, 1, 6, 5, 5, 5, 2, 0, 2, 8, 6, 5, 9, 8, 6, 0, 4, 9, 5, 7, 2, 5, 7, 1, 6, 6, 6, 5, 5, 9, 5, 4, 0, 8, 1, 7, 1, 2, 9, 4, 9, 3, 6, 8, 7, 0, 0, 4, 1, 5, 9, 8, 8, 7, 5, 3, 3, 4, 8, 3, 9, 2, 1, 3, 1, 2, 4, 4
{% endhighlight %}

### Experiment
Sampling from left to right from this array, take two numbers at a time as a combination. Skip combinations of `00` or larger than `24`. Repeating the process until `24` different numbers are collected.

{% highlight bash %}
mean: 88.9
{% endhighlight %}

### Conclusion
`$30 * 89 = $2670`, theoretically, I may need spend $2670 to collect the full set of LITTLE TREEHOUSE book.

After 1,000 independent trials, this value converges to a number close to $2670.

Thus, I decided to give up collecting those books...
