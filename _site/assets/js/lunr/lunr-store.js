var store = [{
        "title": "Landed brisbane",
        "excerpt":" Mark a mark. The first day in Brisbane.  ","categories": [],
        "tags": [],
        "url": "/Landed-Brisbane/",
        "teaser": null
      },{
        "title": "scp demo",
        "excerpt":"1.Copy local files to remote server   $scp local_file remore_username@remote_ip:remote_folder  2. Copy file from remote server to local   $scp remote_username@remote_ip:remote_folder local_folder  ref  ref_link  ","categories": ["coding","bash"],
        "tags": ["bash","linux"],
        "url": "/coding/bash/scp_demo/",
        "teaser": null
      },{
        "title": "Introduction to UniprotKB",
        "excerpt":"Introduction UniProt Knowledgebase (UniProtKB)数据库中收集的是蛋白序列的信息以及准确的，连续的，丰富的注释信息。除此之外还收集一些比较重要的信息例如氨基酸序列，蛋白名称/描述，tax分类信息以及引用信息。这些囊括的信息涵盖了被广泛认可的生物学知识，classifications 以及cross-references, 以及明确的该蛋白可信度的层级分类。 UniProtKB收集的序列超过95%都来自于公共核酸序列数据库中的CDS序列的翻译氨基酸序列，公共数据库指EMBL-Bank/GenBank/DDBJ等 authors们提交的序列会自动整合到TrEMBL中； UniProtKB数据库包含两个sections, UniProtKB/Swiss-Prot 和UniProtKB/TrEMBL 数据库去冗余的过程是怎么样的？见文档。 UniProtKB/Swiss-Prot UniProtKB/Swiss-Prot是UniProt Knowledgebase(UniProtKB)的手动注释和reviewed 的section，其手工收集的信息来自于文献例如文献中的实验结果，非常严格的计算机分析结果（automatic annotation）， 序列注释可信度非常高的，非冗余的一个蛋白序列数据库，从2002年开始，由UniProt consortium 维护, 而通过了automatic annotation 但未经人工review的蛋白序列则归入到UniProtKB/TrEMBL数据库中 UniProtKB/TrEMBL UniProtKB的TrEMBL部分是1996年建立，那时数据增长较快，因手工校正和review的速度比较慢，所以采取了 比较严格的 automatic annotation，将high quality computaionally analyzed records 都纳入TrEMBL, 与Swiss-Prot分开，这种既不会影响Swiss-Prot的准确性，又可以及时的公开数据让所有的研究者访问。 a1: 定义一个cds序列为 真正的蛋白 的标准是怎么样的？ 大多数的蛋白序列都是从预测的CoDing Sequence(CDS)翻译过来的。一个CDS序列是DNA或者RNA中可以翻译为氨基酸序列的一个region。 它和Open Reading Frame(ORF)的定义不同，ORF通常是一系列的密码子而不包含终止密码子（可以理解为不完整的CDS）。CDS一定是ORFs, 但ORFs不一定是CDS。 a2: UniProtKB 定义一个CDS 不是真正的蛋白 的标准是怎么样的？ 基因预测的performance...","categories": ["annotation","database"],
        "tags": ["protein","annotation","protein","gene"],
        "url": "/annotation/database/Introduction_to_UniProtKB/",
        "teaser": null
      },{
        "title": "Notes of PICRUST",
        "excerpt":"Introduction picrust 只能基于greengenes database进行预测，并且只有 13_5和 12_8两个版本。 picrust是基于已经计算好的数据库进行预测，数据库下载地址。 下载的数据库需要放到Python-2.7.12/lib/python2.7/site-packages/PICRUSt-1.1.3-py2.7.egg/picrust/data/目录下；因为picrust软件默认是访问这个目录来找数据库 Installation 安装picrust, 这个中间没有遇到麻烦；注意picrsut是基于python2.7版本(用的2.7.12)， 其他版本的python会报错例如python3.5.2 Usage tips 因为picrust是读入biom文件 所以先要生成biom 格式的文件，其中biom需要包含的信息有每个样品注释上的物种信息及对应的丰度，生成biom的格式方法有两种： way 1 通过利用qiime1的命令先挑选otu比对的ref, 这里相当于重新比对分类一次，默认方法是uclust(其他还有usearch_ref， sortmerna), 所以挑出来的otu 比OTU_final.fasta里的序列要少, 整体预测的通路的矩阵里的值会小一些，通路数量上可能也小一些. 这里好像不支持rdp的结果，因为rdp基于贝叶斯的概率方法，最后没有给出具体比对的哪个id, 而是只给出一个分类taxonomy信息。 step 1 首先用qiime1里的pick_closed_reference_otus.py 命令挑选ref：(可以使用97，也可以使用90，99或者其他的) echo \"pick_otus:enable_rev_strand_match True\"&gt;&gt;otu_picking_params_97.txt echo \"pick_otus:similarity 0.97\"&gt;&gt;otu_picking_params_97.txt pick_closed_reference_otus.py -i OTU_final.fasta -o $PWD/ucrC972/ -p $PWD/otu_picking_params_97.txt -r ./gg_13_5_otus/rep_set/97_otus.fasta -t ./gg_13_5_otus/taxonomy/97_otu_taxonomy.txt -a -O...","categories": ["bioinformatics","annotation"],
        "tags": ["annotation","prokaryotic","amplicon","pathway"],
        "url": "/bioinformatics/annotation/PICRUST/",
        "teaser": null
      },{
        "title": "Configure Python3 with TCL-TK",
        "excerpt":"Introduction More and more projects are migrating from Python2 to Python3. On the one hand, Python3 has more features available, and secondly, the more important reason should be that with the development of Python3 and its community, Python2 will gradually no longer be maintained. Due to the needs of the...","categories": ["coding","python"],
        "tags": ["TCK-TK","environment","linux"],
        "url": "/coding/python/Configure_Python3_with_TCL-TK/",
        "teaser": null
      },{
        "title": "Introduction to SortMeRNA",
        "excerpt":"  1. Introduction  SortMeRNA是一款设计用于去除宏转录组数据中的核糖体RNA的工具，由Dr. Evguenia Kopylova小姐姐一作开发，发表于Bioinformatics，她目前依然活跃在这款软件的维护社区。目前已更新到4.2.0版本。引用次数920，github星标83，Fork38， Watch14。   2. 算法基本原理  底层算法与seed策略类似，主要是寻找rRNA数据库和read之间的一定数量的相似短区域。对rRNA序列建立索引的时候，与HMM一样，利用同源序列之间的冗余，建立所有rRNA序列的压缩模型。 然后设定一个窗口，对read进行窗口滑动扫描，基于设定的阈值，单个read中超过阈值数量的窗口比对到数据库则该read被鉴定为rRNA。其中窗口比对数据库时容错为1（例如碱基替换，插入或缺失）。 基础算法很容易理解，主要是提高算法效率，大比例缩短比对时间。 作者的策略如下图所示：      2.1 具体算法过程     使用Burst trie (BT)结合查找表策略存储数据库。假设窗口为w，窗口序列长度为s（14~20）。 1a，首先存储了数据库中每一个s/2-mer序列的出现频次（#occ） 1b，BT的结构，这个跟搜索树结构很像了，类比即可   处理输入read。同样窗口为w, 窗口长度为s，向右滑动。 2a, 滑动窗口示意图 2b, 将窗口分为窗口前段从w[1..s/2 +1]，和窗口后段w[s..s/2 + 1]   判断窗口序列在BT中是否存在。通过通用Levenshtein自动机和BT循环遍历，及确保错误不大于1。 遍历完所有的窗口后，判断接受的窗口数量是否高于阈值，高于阈值则认为该输入read判定为rRNA。   2.2 算法小结  总结思路：输入read，生成第一个窗口序列，先查找前半段窗口序列在数据库中的频次，达到要求则定位这半段序列在BT中的位置，然后开始在BT搜索（burst）后半段窗口的序列，沿着BT把整个窗口遍历完，最后如果遍历的时候发现的错误&gt;1，则把这个窗口记录为非比对；接着滑动到下一个窗口从头开始判定，直到所有的窗口判定完成后，如果判定为比对的窗口的数量&gt;给定的阈值，则判定read为rRNA。   3.关于作者使用的Levenshtein自动机  作者用自动机实现字符串之间的模糊匹配（文中是read和db）。假设字符串p和错误数k，经典的非确定性Levenshtein自动机可识别的最大编辑距离为k到p的字符集，文中k=1。    4. 与其他工具的对比：  Meta-RNA，SSU-ALIGN，rRNASelector使用了常见的概率模型，其中Meta-RNA和rRNASelector使用了HMM模型，然后利用HMMER3比对短read到数据库，SSU-ALIGN使用协方差模型来支持二级结构的信息。除了概率模型之外，riboPicker使用的是修改版的BWA算法。BLASTN也使用非常多，特别是大家各自用的workflow。   总结：  文章是12年发表，除了文章中提到的工具，后来大家各自用的workflow也有很多用bwa，bowtie，bowtie2等工具进行比对的。其次就是这个算法策略对错误的容忍低（为1）。再有就是作者使用的universal Levenshtein自动机，越看越像马尔科夫链，可能是我对自动机的理解还不够深？ 其次是对于作者，EK小姐姐至今仍然在一线社区活跃。  ","categories": ["metatranscriptomic","bioinformatics"],
        "tags": ["tutorials","RNA","mapping"],
        "url": "/metatranscriptomic/bioinformatics/Introduction_of_sortmerna/",
        "teaser": null
      },{
        "title": "Comparison of Seqs iterator",
        "excerpt":"Introduction 做生物数据的分析，处理序列就像日常操作。而更快速的序列迭代，就像打游戏时开了外挂。 需要对fastq文件序列进行频繁的抽调，数据量大的时候，时间成本成指数增长。翻了翻文档，Biopython除了提供Bio.seqIO.parse函数解析文件之外，其实还提供了一种更底层的写法，可以成N倍的提高读文件的速度，我没有具体去计算会快多少倍（因为等不及了，kill掉了进程），目测的话，快几十倍是不成问题的。 Bio.SeqIO.QualityIO.FastqGeneralIterator同Bio.SeqIO.parse一样也是一个迭代器，只不过不生成对象record，而是生成序列id、序列、以及质量值本身，遍历的时候调用语法为 For title, seq, qual in FastqGeneralIterator(fh): Do something FastqGeneralIterator速度很快了，但我偶然又看到大神Heng Li 12年写的一个小代码readfq，相信不少同学有看过源码（我看到不少项目都嵌了这段代码），也是一个序列遍历器，且居然还在活跃，还有人在提issue和pr。 测试文件为一个36,518,870条序列的fastq.gz文件，这个序列数量已经是人肠道微生物基因集的几倍了，大多数情况下都不会需要频繁迭代这么多的序列量。我测试迭代然后统计序列数，碱基数，及质量字符数。 考虑到服务器上其他用户的状态可能也会影响测试效果，所以做了多次测试，Bio版本为1.76，测试平台为x86_64 GNU/Linux： 通过5次单独的测试，总的来说readfq速度上比Bio慢一点点，不会超过20%，其中第四次测试readfq的速度超过了Bio，可能测试环境也有一定的影响。 强推大神代码的原因： 1. 代码非常简洁，仅仅31行！相比于Bio来说，非常轻量。 2. 大神的代码同时兼容fasta和fastq！而FastqGeneralIterator只能处理fastq文件，如果要处理fasta格式的文件的话，需要调用Bio.SeqIO.FastaIO.SimpleFastaParser 3. 本着代码的简洁性以及减少对library的依赖，readfq胜任。 4. 最后就是虽然在测试过程中，Bio略胜一筹，但是现实中大部分的情况我们不需要频繁遍历太大的数据，所以速度上可以认为readfq与Bio的FastqGeneralIterator不相上下。 测试代码： print('start readfq', datetime.now()) n, slen, qlen = 0, 0, 0 for name, seq, qual in readfq(f): n+= 1 slen += len(seq)...","categories": ["coding","python"],
        "tags": ["fastq","fasta","sequence"],
        "url": "/coding/python/Comparison_of_Seqs_iterator/",
        "teaser": null
      },{
        "title": "Silva updates to 138",
        "excerpt":"Introduction SILVA里使用率最高的，即是它的SSU数据库。当然它在线的比对工具，以及ARB进化相关套装也很受欢迎，不过小编使用最多的是SSU数据库，以及LSU数据库。所以介绍的重点也会偏向于这两个库。 数据集的快速增长极大的增加了硬件需求，数据库越大，则越需要更多的资源例如内存来加载数据库。目前有两种策略解决此问题：1）升级硬件满足需求。2）减小数据库中的序列数。出于多种原因，只要结果数据集仍然具有代表性（这是环境微生物学中的一个非常重要的参数），第二种方法会更具性价比。SILVA项目选择了99% identity作为标准对SSU Ref进行去冗余构建了SSU Ref NR数据集。 这次138版本目前只更新了SSU库，LSU库还在进行中。taxonomy信息加入了GTDB的分类信息，138以前的版本中还有greengenes数据库的信息。GTDB项目的负责人是昆士兰大学的Prof. Phil Hugenholtz，他同时也参与了greengenes数据库的构建。 简介： silva是一个全面的比对的核糖体RNA序列数据的在线资源，由德国Microbial Genomics and Bioinformatics Research Group开发及维护。SILVA提供了三个域（细菌，古菌，真核生物）的对齐的小亚基（16S/18S，SSU）和大亚基（23S/28S，LSU）rRNA序列的全面、质量检查过并定期更新的数据集。且SILVA是软件包ARB的官方数据库。 SSU：核糖体小亚基库，包含了细菌和古菌的16S序列，以及真核生物的18S序列。 LSU：核糖体大亚基库，包含了细菌和古菌的23S序列，以及真核生物的28S序列 文件描述： _tax_silva.fasta.gz SSU和LSU数据库的FASTA序列文件，序列ID中包含了细菌，古菌和真核的taxonomy分类信息。 标注：这些文件里包含的是原始的存储在公共数据库（ENA/GenBank/DDBJ）中的序列，没有对序列进行修剪。 _tax_silva_full_align_trunc.fasta.gz SSU和LSU数据库的FASTA序列文件，序列ID中包含了细菌，古菌和真核的taxonomy分类信息，同时还包含了比对信息。 标注：这些文件里的序列是修剪过的，数据库中没有被比对的序列皆被去除了。 _tax_silva_trunc.fasta.gz SSU和LSU数据库的FASTA序列文件，序列ID中包含了细菌，古菌和真核的taxonomy分类信息。 标注：这些文件里的序列是修剪过的，数据库中没有被比对的序列皆被去除了。 库构建方法： SSU Parc库： 包含所有比对identity&gt;=50，比对质量值&gt;=40，碱基对分数或序列质量值&gt;30的序列。Pintail值&lt;50或比对质量值&lt;75的所有序列在ARB中指定为红色。而ALL-&gt;Living Tree Project 或 StrainInfo中的typestrans在ARB中指定为浅蓝色。 SSU Ref库： 细菌和真核生物序列&lt;1200bp，古菌序列&lt;900bp，比对identity&lt;70，或比对质量值&lt;50的序列被去除。而ALL-&gt;Living Tree Project 或 StrainInfo中的typestrans在ARB中指定为浅蓝色。 SSU Ref NR库： 基于最后发行的Ref NR 99版本的数据库里自定义的序列顺序结合序列长度（加权两倍）和质量，以99%的identity标准，来去除高度相似相同的序列。而对于排序，序列的质量由ambiguties（50%），总体比对质量（45%）以及均聚物（5%）进行定义。序列的总体比对质量是根据其比对得分，比对identity，以及比对的百分比（相等的权重）计算得来。已可培养物种的序列在所有的情况下都进行保留。...","categories": ["database","amplicon"],
        "tags": ["tutorial","rRNA","amplicon"],
        "url": "/database/amplicon/Silva_update_138/",
        "teaser": null
      },{
        "title": "little treehouse collection - estimation",
        "excerpt":"1. Introduction Recently, Coles launched a membership campaign. One credit will be issued for every $30 spent at Coles. Where one credit can be redeemed for one LITTLE TREEHOUSE book. The whole book set consists of 24 tiny books (number 1-24, It looks like something in the picture below). However,...","categories": ["statistics","estimation"],
        "tags": ["estimation"],
        "url": "/statistics/estimation/Little_treehouse_collection/",
        "teaser": null
      },{
        "title": "markdown tutorial",
        "excerpt":"Howdy! This is an example blog post that shows several types of HTML content supported in this theme. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur...","categories": ["tutorials"],
        "tags": ["markdown","tutorials"],
        "url": "/tutorials/markdown-tutorial-important/",
        "teaser": null
      }]
