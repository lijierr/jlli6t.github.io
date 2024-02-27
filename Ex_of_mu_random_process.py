#!/usr/bin/env python3

import random

n=1000000
#step = 2
experiment = 100

random.seed(4)
random_int = [random.randint(0,9) for i in range(n)]
#print(random_int_list)
random_int = [random_int[i:i+2] for i in range(0, len(random_int), 2)]
books, counts, num_of_experiment, c = [], [], 0, 0
for i in random_int:
    #print(i)
    if i[0] > 2:continue
    if i[0] == 2 and i[1] > 4:continue
    if i[0] == 0 and i[1] == 0:continue
    i = ''.join([str(j) for j in i])
    c += 1
    if i not in books:books.append(i)
    #print(i)
    #print(books)
    if len(books) == 24:
        counts.append(c)
        books, c = [], 0
        num_of_experiment += 1
    if num_of_experiment >= experiment:break
print(counts)
print(len(counts))
print(sum(counts)/float(len(counts)))
