#!/usr/bin/env python
# coding: utf-8

# In[73]:


# this is for Q3e, calculating confidence interval:
import math
print(2.346/math.pow(0.95, 1/8), 2.346/math.pow(0.05, 1/8))


# In[9]:


# this if for Q4a, calculating significance level alpha:
from scipy.stats import binom
print(binom.cdf(14, 50, 0.4) + 1 - binom.cdf(25, 50, 0.4))


# In[51]:


# this if for Q4b, calculating and graphing power:
import numpy as np
from scipy.stats import binom
import matplotlib.pyplot as plt
p = np.arange(0.01, 1, 0.01)
power = 1-(binom.cdf(25, 50, p)-binom.cdf(14, 50, p))
#print(power)
plt.plot(power, 'r-')
plt.xlabel('true propotion of broken blocks')
plt.ylabel('power')


# In[11]:


# for Q4e, find a cutoff value of c
from scipy.stats import binom
binom.ppf(0.99, 50, 0.4)


# In[32]:


# for Q4f, cal power
from scipy.stats import binom
1-binom.cdf(28, 50, 0.5)


# In[47]:


# for Q4g, cal sample size to reach power 90%
from scipy.stats import binom
for i in range(1,1000,1):
    power = 1-binom.cdf(binom.ppf(0.9, i, 0.4), i, 0.5)
    if power >= 0.9:
        print(i)
        break
print('finished')


# In[ ]:




