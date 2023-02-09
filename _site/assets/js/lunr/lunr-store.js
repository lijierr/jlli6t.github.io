var store = [{
        "title": "Landed brisbane",
        "excerpt":" Mark a mark. The first day in Brisbane.  ","categories": [],
        "tags": [],
        "url": "/Landed-Brisbane/",
        "teaser": null
      },{
        "title": "scp demo",
        "excerpt":"1.Copy local files to remote server   $scp local_file remore_username@remote_ip:remote_folder    2. Copy file from remote server to local   $scp remote_username@remote_ip:remote_folder local_folder  ref  ref_link  ","categories": ["coding","bash"],
        "tags": ["bash","linux"],
        "url": "/coding/bash/scp/",
        "teaser": null
      },{
        "title": "Introduction to UniprotKB",
        "excerpt":"Introduction  UniProt Knowledgebase (UniProtKB)数据库中收集的是蛋白序列的信息以及准确的，连续的，丰富的注释信息。除此之外还收集一些比较重要的信息例如氨基酸序列，蛋白名称/描述，tax分类信息以及引用信息。这些囊括的信息涵盖了被广泛认可的生物学知识，classifications 以及cross-references, 以及明确的该蛋白可信度的层级分类。    UniProtKB收集的序列超过95%都来自于公共核酸序列数据库中的CDS序列的翻译氨基酸序列，公共数据库指EMBL-Bank/GenBank/DDBJ等 authors们提交的序列会自动整合到TrEMBL中；   UniProtKB数据库包含两个sections, UniProtKB/Swiss-Prot 和UniProtKB/TrEMBL   数据库去冗余的过程是怎么样的？见文档。   UniProtKB/Swiss-Prot  UniProtKB/Swiss-Prot是UniProt Knowledgebase(UniProtKB)的手动注释和reviewed 的section，其手工收集的信息来自于文献例如文献中的实验结果，非常严格的计算机分析结果（automatic annotation）， 序列注释可信度非常高的，非冗余的一个蛋白序列数据库，从2002年开始，由UniProt consortium 维护, 而通过了automatic annotation 但未经人工review的蛋白序列则归入到UniProtKB/TrEMBL数据库中   UniProtKB/TrEMBL  UniProtKB的TrEMBL部分是1996年建立，那时数据增长较快，因手工校正和review的速度比较慢，所以采取了 比较严格的 automatic annotation，将high quality computaionally analyzed records 都纳入TrEMBL, 与Swiss-Prot分开，这种既不会影响Swiss-Prot的准确性，又可以及时的公开数据让所有的研究者访问。   a1: 定义一个cds序列为 真正的蛋白 的标准是怎么样的？ 大多数的蛋白序列都是从预测的CoDing Sequence(CDS)翻译过来的。一个CDS序列是DNA或者RNA中可以翻译为氨基酸序列的一个region。 它和Open Reading Frame(ORF)的定义不同，ORF通常是一系列的密码子而不包含终止密码子（可以理解为不完整的CDS）。CDS一定是ORFs, 但ORFs不一定是CDS。   a2: UniProtKB 定义一个CDS 不是真正的蛋白 的标准是怎么样的？  基因预测的performance 极大程度上依赖于现有的生物学知识和背景。 我们使用生物信息学的工具将可能的CDS序列比对到最大的核酸序列数据库（genomic and RNA/ESTs）（可以理解为nt/nr库？），将一个CDS定义为 非真正蛋白序列的条件包括：1 更长/更短的RNAs的出现（融合/剪切所预测的基因）2. 缺乏对应的RNA序列，及/或 错误的内含子/外显子的边界（真核生物中） 3. 文献中报道为假基因的。当证据足够充分，就会将该条CDS从UniProtKB中移除。  ","categories": ["database","protein"],
        "tags": ["protein","annotation","protein","gene"],
        "url": "/database/protein/UniProtKB/",
        "teaser": null
      },{
        "title": "NCBI genomes下载",
        "excerpt":"NCBI的这个genome reports的FTP site下， ftp://ftp.ncbi.nlm.nih.gov/genomes/GENOME_REPORTS/ 有真核： ftp://ftp.ncbi.nlm.nih.gov/genomes/GENOME_REPORTS/eukaryotes.txt 原核： ftp://ftp.ncbi.nlm.nih.gov/genomes/GENOME_REPORTS/prokaryotes.txt 病毒： ftp://ftp.ncbi.nlm.nih.gov/genomes/GENOME_REPORTS/viruses.txt 质粒： ftp://ftp.ncbi.nlm.nih.gov/genomes/GENOME_REPORTS/plasmids.txt 等数据库， 更新得挺频繁的。   如果想要下载基因组，可直接下载对应的文件，然后提供相应的关键字，即可批量下载。  ","categories": ["database","genome"],
        "tags": ["genome"],
        "url": "/database/genome/NCBI_genomes_download/",
        "teaser": null
      },{
        "title": "Notes of PICRUST",
        "excerpt":"1. Introduction  Picrust是一款基于16S rRNA gene数据库对amplicon测序的群落进行功能预测的工具。目前16S rRNA gene有并且只有13_5和12_8两个版本。  picrust是基于已经计算好的数据库进行预测，数据库下载地址。  下载的数据库需要放到Python-2.7.12/lib/python2.7/site-packages/PICRUSt-1.1.3-py2.7.egg/picrust/data/目录下；因为picrust软件默认是访问这个目录来找数据库    2. Installation  安装picrust, 这个中间没有遇到麻烦；注意picrsut是基于python2.7版本(用的2.7.12)， 其他版本的python会报错例如python3.5.2。   3. Usage tips  因为picrust是读入biom文件所以先要生成biom格式的文件，其中biom需要包含的信息有每个样品注释上的物种信息及对应的丰度，生成biom的格式方法有两种：   3.1 way 1  通过利用qiime1的命令先挑选otu比对的ref, 这里相当于重新比对分类一次，默认方法是uclust(其他还有usearch_ref， sortmerna), 所以挑出来的otu比OTU_final.fasta里的序列要少, 整体预测的通路的矩阵里的值会小一些，通路数量上可能也小一些。这里好像不支持rdp的结果，因为rdp基于贝叶斯的概率方法，最后没有给出具体比对的哪个id, 而是只给出一个分类taxonomy信息。   3.1.1 step 1  首先用qiime1里的pick_closed_reference_otus.py命令挑选ref：(可以使用97，也可以使用90，99或者其他的)   echo \"pick_otus:enable_rev_strand_match True\"&gt;&gt;otu_picking_params_97.txt echo \"pick_otus:similarity 0.97\"&gt;&gt;otu_picking_params_97.txt pick_closed_reference_otus.py -i OTU_final.fasta -o $PWD/ucrC972/ -p $PWD/otu_picking_params_97.txt -r ./gg_13_5_otus/rep_set/97_otus.fasta -t ./gg_13_5_otus/taxonomy/97_otu_taxonomy.txt -a -O 8  3.1.2 step 2  使用命令biom convert -i ucrC972/otu_table.biom -o ucrC972/otu_table.biom.tsv --to-tsv tsv文件如下图：主要是得到每个otu比对上的ref, 然后形成一个0 1矩阵    4. 测试PICRUST 1.1.3  4.1 介绍  根据16S的测序数据，对样本的现在通路进行预测。picrust只能基于greengenes database进行预测，并且只有13_5和12_8两个版本。picrust是基于已经计算好的数据库进行预测，数据库下载地址   下载的数据库需要放到Python-2.7.12/lib/python2.7/site-packages/PICRUSt-1.1.3-py2.7.egg/picrust/data/目录下；因为picrust软件默认是访问这个目录来找数据库   4.2 测试过程  4.2.1 生成biom文件  因为picrust是读入biom文件，所以先要生成biom格式的文件。其中biom需要包含的信息有每个样品注释上的物种信息及对应的丰度，生成biom的格式方法有两种：   4.2.1.1 方式1  通过利用qiime1的命令先挑选otu比对的ref, 这里相当于重新比对分类一次，默认方法是uclust(其他还有usearch_ref， sortmerna)。所以挑出来的otu比OTU_final.fasta里的序列要少, 整体预测的通路的矩阵里的值会小一些，通路数量上可能也小一些。这里好像不支持rdp的结果，因为rdp基于贝叶斯的概率方法，最后没有给出具体比对的哪个id, 而是只给出一个分类taxonomy信息。     1. 首先用qiime1里的pick_closed_reference_otus.py命令挑选ref：(可以使用97，也可以使用90，99或者其他的)   echo \"pick_otus:enable_rev_strand_match True\"&gt;&gt;otu_picking_params_97.txt echo \"pick_otus:similarity 0.97\"&gt;&gt;otu_picking_params_97.txt pick_closed_reference_otus.py -i OTU_final.fasta -o $PWD/ucrC972/ -p $PWD/otu_picking_params_97.txt -r ./gg_13_5_otus/rep_set/97_otus.fasta -t ./gg_13_5_otus/taxonomy/97_otu_taxonomy.txt -a -O 8  2. 将`biom`文件转换为`tsv`文件:    biom convert -i ucrC972/otu_table.biom -o ucrC972/otu_table.biom.tsv --to-tsv  `tsv`文件如下图：主要是得到每个`otu`比对上的`ref`, 然后形成一个`0 1`矩阵: ![](/assets/picbed/tools/picrust/picrust_biom2matrix.png) 3. 结合`OTU_shared_final.xls`的每个样品的每个`otu`的绝对丰度文件:   perl -e 'open(IN,\"ucrC972/otu_table.biom.tsv\");$t=&lt;IN&gt;;print\"$t\";%hash;$t=&lt;IN&gt;;chop($t);@t=split/\\t/,$t;while(&lt;IN&gt;){chomp;@a=split;for($i=1;$i&lt;@a;$i++){if($a[$i]==1){$hash{$t[$i]}=$a[0];}}}close IN;$t=&lt;&gt;;chomp($t);print\"#OTU ID$t\\ttaxonomy\\n\";@t=split/\\s+/,$t;%out;while(&lt;&gt;){chomp;@a=split;next if(not exists $hash{$a[0]});for($i=1;$i&lt;@a;$i++){$out{$hash{$a[0]}}{$t[$i]}+=$a[$i];}}foreach $k(sort keys %out){print\"$k\";for($i=1;$i&lt;@t;$i++){print\"\\t$out{$k}{$t[$i]}\";}print\"\\n\";}' ../../OTU_shared_final.xls &gt;otu_table.biom.txt  生成的otu_table.biom.txt文件如下格式：      4. 将文件convert为biom格式:   biom convert -i otu_table.biom.txt -o otu_table.biom --to-hdf5  4.2.1.2 方式2  利用mothur软件的make.biom命令生成biom文件，直接将注释的结果转换成如上格式，需要用到otu的丰度值以及具体的greengenes数据库的注释信息。需要利用到注释的中间其他文件例如将otu id与ref id对应的文件。因为没有pick的过程，所以otu有多少，就有多少注释结果，通路上可能比第一种方法要多。   而且这种方法要求必须有greengenes的注释结果。通常我们不会用greengenes进行注释，所以如果肯定不会使用greengenes的数据库注释结果，可以采用第一种方法生成biom文件；  4.2.2 对物种注释信息标准化  利用预先计算好好的16s拷贝数数据库，对otu的物种注释信息进行16s拷贝数的标准化。   normalize_by_copy_number.py -i otu_table.biom -o normalized_otus.biom predict_metagenomes.py -t ko -i normalized_otus.biom -o metagenome_predictions.biom -a KEGG_predict_traits.tab  4.2.3 功能预测  利用predict_metagenomes.py命令对标准化后的otu丰度进行功能预测。这里包括kegg, cog, 和pfam3个数据库进行预测，-t cog 或者 -t rfam   predict_metagenomes.py -t ko -i normalized_otus.biom -o metagenome_predictions.biom -a KEGG_predict_traits.tab  其次，加入-f参数， predict_metagenomes.py -f -t ko -i normalized_otus.biom -o metagenome_predictions.txt -a KEGG_predict_traits.tab生成tab键隔开的文件 得到的是每个样品中KO酶的丰度    4.2.4 对预测的功能进行map划分  将预测到的值进行map的划分，则KO的信息也是很重要，因为很多KO是不存在在map中的；   categorize_by_function.py -f -i metagenome_predictions.biom -c KEGG_Pathways -l 3 -o KEGG_Pathways.L3.txt  4.2.5 是否可以用每一个通路/基因在各个样品之间的值来做标准化。  即例如K01361在样品MFC.1中，标准化之后为20/(20+24+21+24)。测试如下： 在挑选了ref序列之后，在生成biom文件前身的时候，由输入OTU_shared_final.xls文件改为输入其相对丰度文件，在predict_metagenome.py的过程中，会出现报错：   predict_metagenomes.py:371: RuntimeWarning: invalid value encountered in true_divide      result=total/n  预测的结果文件能正常生成，但是和之前的结果不一致。推测，可能在前边输入OTU的相对丰度的时候导致在16S拷贝数的标准化等等过程中有四舍五入的过程，因为虽然不一致，但是最后预测的结果是整数, 并且很多原来用绝对值去预测的时候能得到很小的值，但是换成相对丰度之后就变为了0， 有四舍五入的可能性更大了。  且最后预测到的值，每个样品的总和是不一致的。有三种可能性，第一种是标准化之后的输入文件，在分析过程中有四舍五入的嫌疑; 第二种是虽然做了标准化，但是不是每个样品的OTU都能全部被挑到，这里去掉了一些OTU, 导致了丰度的不一致，这个是肯定的; 第三种是1，2两种情况同时存在。暂时我的理解是如果输入绝对丰度文件，对最后的输出结果做标准化，就相当于将所有的unclassified去掉之后对能注释上的物种做了一次标准化, 但因为不确定中间是否有四舍五入或者其他简略过程，需要更多的测试   4.2.6 待测试  1. 可以将`pick`到`ref`的`otu`的丰度再做一次标准化，然后作为输入进行预测，计算每个样品的总和 2. `Module`没有预测出来，待解决。原文中有提到`Module`的信息，最好能预测到`module`的信息  ","categories": ["bioinformatics","amplicon"],
        "tags": ["annotation","prokaryotic","amplicon","pathway"],
        "url": "/bioinformatics/amplicon/PICRUST/",
        "teaser": null
      },{
        "title": "Tax4Fun",
        "excerpt":"1. Tax4Fun的安装  Tax4Fun的安装使用本地包： install.packages(\"Tax4Fun_0.3.1.tar\", repos=NULL, type=\"source\")。 必须加入repos=NULL, type=\"source\"参数，才能识别到是一个本地文件包；否则会误认为是一个在线包的名称，而报错not available for R-3-***。    2. 安装依赖包  加入repos=NULL,type=\"source\"两个参数后，能正常安装，发现依赖qiimer和biom两个包。 其中biom包因为已经从cran下线，需要手动下载安装: （ biom包有个依赖包RJSONIO可在线安装）: install.packages(\"biom_0.3.12.tar.gz\", repos=NULL, type=\"source\")。 安装完依赖后，再按照1中方法安装Tax4Fun包即可。  ","categories": ["bioinformatics","amplicon"],
        "tags": ["annotation","amplicon","pathway","prokaryotic"],
        "url": "/bioinformatics/amplicon/Tax4Fun/",
        "teaser": null
      },{
        "title": "FastQC质控测序数据",
        "excerpt":"FastQC是一款用于对测序read进行QC的工具。工具可以查看碱基质量，含N，dup，碱基质量分布，GC含量，ATCGN碱基分布，以及adapter的比对情况。Adapter的序列目前可以使用例如trimmmomatic等工具提供的adapters库。也可以使用illumina官网提供的adapters。最好的已知测序时使用的adapters序列，直接提供该序列，则adapter比对更准确，运行的时间更短。    目前测序绝大部分是双端测序，测试对read1进行分析，得到的summary结果如下：    这个地方第一列的PASS/FAIL不建议直接作为结果，而是需要结合实际的样本情况。例如RNA测序的数据，dup就会高很多；16S amplicon测序的数据，ATCGN的含量就会不均匀。  ","categories": ["bioinformatics","quality control"],
        "tags": ["sequencing data","quality control"],
        "url": "/bioinformatics/quality%20control/FastQC/",
        "teaser": null
      },{
        "title": "Configure Python3 with TCL-TK",
        "excerpt":"Introduction  More and more projects are migrating from Python2 to Python3. On the one hand, Python3 has more features available, and secondly, the more important reason should be that with the development of Python3 and its community, Python2 will gradually no longer be maintained. Due to the needs of the work, my working python have to be configured with tk and tcl. The details are as follows:    很多项目在陆陆续续的往Python3迁移，一方面是Python3有更多的feature可用，其次更重要的原因应该是，随着Python3和社区的发展，Python2慢慢会不再维护了。 因工作内容需要，Python需要配置tk及tcl，细节如下：   tk=~/tk8.6.6/unix # path to configured tk tcl=~/tcl8.6.6/unix # path to configured tcl export LDFLAGS=\" -L$tk/lib -L $tcl/lib $LDFLAGS \" export CPPFLAGS=\" -I$tk/include -I$tk/include $CPPFLAGS \" export PATH=$tk/bin:$tcl/bin:$PATH export LD_LIBRARY_PATH=$tk/lib:$tcl/lib:$LD_LIBRARY_PATH  ./configure --prefix=~/Python-3.6.0 --disable-ipv6 --with-tcltk-libs=\"-L$tk/lib/ -L$tcl/lib\" --with-tcltk-includes=\"-I$tk/include -I$tcl/include\" &amp;&amp; echo configure done &amp;&amp; make -j 4 &amp;&amp; echo make done &amp;&amp; make install -j 5 &amp;&amp; echo make install done  Summary (结语)  No big difference of syntax between python3 and python2, I adapted well, I hope you are too.   Python3，Python2个人感觉语法差异没有很大，小编适应得不错，希望你们也是呀~~   Reference (参考)  stackoverflow thread  ","categories": ["coding","python"],
        "tags": ["TCK-TK","environment","linux"],
        "url": "/coding/python/Configure_Python3_with_TCL-TK/",
        "teaser": null
      },{
        "title": "序列迭代器",
        "excerpt":"Introduction  做生物数据的分析，处理序列就像日常操作。而更快速的序列迭代，就像打游戏时开了外挂。 需要对fastq文件序列进行频繁的抽调，数据量大的时候，时间成本成指数增长。翻了翻文档，Biopython除了提供Bio.seqIO.parse函数解析文件之外，其实还提供了一种更底层的写法，可以成N倍的提高读文件的速度，我没有具体去计算会快多少倍（因为等不及了，kill掉了进程），目测的话，快几十倍是不成问题的。    Bio.SeqIO.QualityIO.FastqGeneralIterator同Bio.SeqIO.parse一样也是一个迭代器，只不过不生成对象record，而是生成序列id、序列、以及质量值本身，遍历的时候调用语法为   For title, seq, qual in FastqGeneralIterator(fh): \tDo something  FastqGeneralIterator速度很快了，但我偶然又看到大神Heng Li 12年写的一个小代码readfq，相信不少同学有看过源码（我看到不少项目都嵌了这段代码），也是一个序列遍历器，且居然还在活跃，还有人在提issue和pr。   测试文件为一个36,518,870条序列的fastq.gz文件，这个序列数量已经是人肠道微生物基因集的几倍了，大多数情况下都不会需要频繁迭代这么多的序列量。我测试迭代然后统计序列数，碱基数，及质量字符数。 考虑到服务器上其他用户的状态可能也会影响测试效果，所以做了多次测试，Bio版本为1.76，测试平台为x86_64 GNU/Linux：   通过5次单独的测试，总的来说readfq速度上比Bio慢一点点，不会超过20%，其中第四次测试readfq的速度超过了Bio，可能测试环境也有一定的影响。 强推大神代码的原因：     代码非常简洁，仅仅31行！相比于Bio来说，非常轻量。   大神的代码同时兼容fasta和fastq！而FastqGeneralIterator只能处理fastq文件，如果要处理fasta格式的文件的话，需要调用Bio.SeqIO.FastaIO.SimpleFastaParser   本着代码的简洁性以及减少对library的依赖，readfq胜任。   最后就是虽然在测试过程中，Bio略胜一筹，但是现实中大部分的情况我们不需要频繁遍历太大的数据，所以速度上可以认为readfq与Bio的FastqGeneralIterator不相上下。   测试代码：   print('start readfq', datetime.now()) n, slen, qlen = 0, 0, 0 for name, seq, qual in readfq(f): \tn+= 1 \tslen += len(seq) \tqlen += qual \tprint(n, '\\t', slen, '\\t', qlen) print('end readfq', datetime.now())  print('start Bio', datetime.now()) n, slen, qlen = 0, 0, 0 for name, seq, qual in FastqGeneralIterator(fh): \tn+=1 \tslen += len(seq) \tqlen += qual print(n, '\\t', slen, '\\t', qlen) print('end Bio', datetime.now())  附上测试结果供参考：  第一次测试: readfq比Bio: 118.88%   start readfq 2020-06-23 10:47:13.063023 end readfq 2020-06-23 10:51:32.138950 readfq用时：259.075927s start Bio 2020-06-23 10:51:35.854583 end Bio 2020-06-23 10:55:13.789172 Bio用时：217.934589s  第二次测试: readfq比Bio: 118.62%   start readfq 2020-06-23 10:55:58.999203 end readfq 2020-06-23 11:00:06.315406 readfq用时：247.316203s start Bio 2020-06-23 11:00:08.641087 end Bio 2020-06-23 11:03:37.140562 Bio用时：208.499475s  第三次测试: readfq比Bio: 15.51%   start readfq 2020-06-23 11:05:28.903198 end readfq 2020-06-23 11:09:53.790852 readfq用时：264.887654s start Bio 2020-06-23 11:09:53.912627 end Bio 2020-06-23 11:13:43.230618 Bio用时：229.317991s  第四次测试: readfq比Bio: 96.91%   start readfq 2020-06-23 11:13:52.750406 end readfq 2020-06-23 11:18:23.449189 readfq用时：270.698783s start Bio 2020-06-23 11:18:23.554306 end Bio 2020-06-23 11:23:02.897335 Bio用时：279.343029s  第五次测试: readfq比Bio: 116.17%   start readfq 2020-06-23 11:24:57.625076 end readfq 2020-06-23 11:28:58.973375 readfq用时：241.348299s start Bio 2020-06-23 11:28:59.101057 end Bio 2020-06-23 11:32:26.855097 Bio用时：207.754040s  附大神代码地址  地址  ","categories": ["coding","python"],
        "tags": ["fastq","fasta","sequence"],
        "url": "/coding/python/Sequence_iterators/",
        "teaser": null
      },{
        "title": "Deep and shallow copy in Python",
        "excerpt":"总结  shallow copy 就是直接 new = old[:], new的地址仍然指向old的地址，故old的内容发生变化的时候new的内容也会发生变化。    Shallow copy  浅层的copy a list, 只是生成了一个新变量，指向的依然是原来变量的地址，如果原来变量发生改变，则新变量（copy）也随之发生改变，例如： that’s so called shallow copies, shallow copy： aliasing, 取了个别名，而不是真的copy了一个变量，其地址没有变。 having two lists unintentionally connected to each other   就是说使用a=[:] 这种操作来copy 一个list的时候，copy的只是最顶层的list.内层如果也有List的时候，并没有被copy.    Deep copy  实际就是给新copy的变量指定了一个新的地址，而非直接指向原来的地址，所以在original里增加元素之后，并不会影响copy的变量    当copy的对象结构很复杂的时候，例如是list 套list, 但又不是全部都是list, 做deep copy有更优雅的方法，例如copy 模块中的deepcopy函数，感觉这个deepcopy是无限循环copy一个对象   ","categories": ["coding","python"],
        "tags": ["syntax"],
        "url": "/coding/python/Deep_shallow_copy/",
        "teaser": null
      },{
        "title": "SortMeRNA-Burst trie结合查找表，Levenshtein自动机搜索快速鉴定rRNA",
        "excerpt":"  1. Introduction  SortMeRNA是一款设计用于去除宏转录组数据中的核糖体RNA的工具，由Dr. Evguenia Kopylova一作开发，发表于Bioinformatics。她目前依然活跃在这款软件的维护社区。目前已更新到4.2.0版本。引用次数920，github星标83，Fork38， Watch14。    2. 算法基本原理  底层算法与seed策略类似，主要是寻找rRNA数据库和read之间的一定数量的相似短区域。对rRNA序列建立索引的时候，与HMM一样，利用同源序列之间的冗余，建立所有rRNA序列的压缩模型。 然后设定一个窗口，对read进行窗口滑动扫描，基于设定的阈值，单个read中超过阈值数量的窗口比对到数据库则该read被鉴定为rRNA。其中窗口比对数据库时容错为1（例如碱基替换，插入或缺失）。 基础算法很容易理解，主要是提高算法效率，大比例缩短比对时间。 作者的策略如下图所示：    2.1 具体算法过程     使用Burst trie (BT)结合查找表策略存储数据库。假设窗口为w，窗口序列长度为s（14~20）。 1.1 首先存储了数据库中每一个s/2-mer序列的出现频次(#occ) 1.2 BT的结构，这个跟搜索树结构很像了，类比即可   处理输入read。同样窗口为w, 窗口长度为s，向右滑动。 2.1 滑动窗口示意图 2.2 将窗口分为窗口前段从w[1..s/2 +1]，和窗口后段w[s..s/2 + 1]   判断窗口序列在BT中是否存在。通过通用Levenshtein自动机和BT循环遍历，及确保错误不大于1。 遍历完所有的窗口后，判断接受的窗口数量是否高于阈值，高于阈值则认为该输入read判定为rRNA。   2.2 算法小结  总结思路：输入read，生成第一个窗口序列，先查找前半段窗口序列在数据库中的频次，达到要求则定位这半段序列在BT中的位置，然后开始在BT搜索（burst）后半段窗口的序列，沿着BT把整个窗口遍历完，最后如果遍历的时候发现的错误&gt;1，则把这个窗口记录为非比对；接着滑动到下一个窗口从头开始判定，直到所有的窗口判定完成后，如果判定为比对的窗口的数量&gt;给定的阈值，则判定read为rRNA。   3.关于作者使用的Levenshtein自动机  作者用自动机实现字符串之间的模糊匹配（文中是read和db）。假设字符串p和错误数k，经典的非确定性Levenshtein自动机可识别的最大编辑距离为k到p的字符集，文中k=1。    4. 与其他工具的对比：  Meta-RNA，SSU-ALIGN，rRNASelector使用了常见的概率模型，其中Meta-RNA和rRNASelector使用了HMM模型，然后利用HMMER3比对短read到数据库，SSU-ALIGN使用协方差模型来支持二级结构的信息。除了概率模型之外，riboPicker使用的是修改版的BWA算法。BLASTN也使用非常多，特别是大家各自用的workflow。   总结：  文章是12年发表，除了文章中提到的工具，后来大家各自用的workflow也有很多用bwa，bowtie，bowtie2等工具进行比对的。其次就是这个算法策略对错误的容忍低（为1）。再有就是作者使用的universal Levenshtein自动机，越看越像马尔科夫链，可能是我对自动机的理解还不够深？ 其次是对于作者，EK小姐姐至今仍然在一线社区活跃。  ","categories": ["bioinformatics","metatranscriptomic"],
        "tags": ["tutorials","RNA","mapping"],
        "url": "/bioinformatics/metatranscriptomic/Sortmerna/",
        "teaser": null
      },{
        "title": "Pfam数据库",
        "excerpt":"ebi.ac.uk 蛋白序列通常会包含一个至多个domains。不同domains的组合会得到不同的功能，导致了自然界中proteins的多样性。于是鉴定蛋白序列中的domains可以合理推测该蛋白潜在的功能。Pfam就是 这些保守的进化单元的集合。    我们生产数据的能力已经远远超过了我们实验上能确定序列功能的能力，因此急需计算方法来辅助鉴定序列之间regions的相似性。 将序列match到Pfam数据库可以帮助我们鉴定未知功能的序列的功能作用，Pfam可以提供全面的注释信息   Pfam数据库收集了protein domain families, 以多序列比对以及HMM模型的形式存在。  ","categories": ["database","protein"],
        "tags": ["protein","annotation"],
        "url": "/database/protein/Pfam/",
        "teaser": null
      },{
        "title": "pfam_scan注释Pfam",
        "excerpt":"说明   Pfam有个配套的perl写的工具叫PfamScan。 但是在使用的过程中一直报错    Can't locate Moose.pm in @INC (@INC contains: /usr/local/lib64/perl5 /usr/local/share/perl5 /usr/lib64/perl5/vendor_perl /usr/share/perl5/vendor_perl /usr/lib64/perl5 /usr/share/perl5 .) at Bio/Pfam/HMM/HMMResultsIO.pm line 50. BEGIN failed--compilation aborted at Bio/Pfam/HMM/HMMResultsIO.pm line 50. Compilation failed in require at Bio/Pfam/Scan/PfamScan.pm line 33. BEGIN failed--compilation aborted at Bio/Pfam/Scan/PfamScan.pm line 33. Compilation failed in require at pfam_scan.pl line 9. BEGIN failed--compilation aborted at pfam_scan.pl line 9.  需要将PfamScan里需要的安装好的依赖包所在的路径加入到@INC的搜索路径中：BEGIN{push(@INC,\"/path/to/PfamScan/\")};，这样上边的报错就解决了。   Perl包的安装见另外一篇博客。   ","categories": ["bioinformatics","annotation"],
        "tags": ["protein","annotation"],
        "url": "/bioinformatics/annotation/pfam_scan/",
        "teaser": null
      },{
        "title": "Diamond比对",
        "excerpt":"makedb建立数据库索引  除了常用的--in和--db参数之外，--taxonmap，--taxonnodes，和--taxonnames这三个参数也可以在makedb的时候提供。这样在比对的时候可以选择性的对比特定的reference。例如只比对属于Bacteria的reference。如需实现此功能，则在makedb的时候，必须至少加上--taxonmap和--taxonnodes两个参数。    注意：diamond blast的reference必须由同一个版本的makedb建立的索引才能使用。 命令行：   diamond makedb --in $ot/uniprot_sprot.fasta -d $ot/uniprot_sprot.fasta --taxonmap $ot/prot.accession2taxid.gz --taxonnodes $ot/taxdmp.zip --taxonnames $ot/taxdmp -p 10  关键参数   --taxonlist 参数可以提供taxid list。例如细菌的taxid为2, archaea的taxid为2157。若想比对多个tax, 将多个tax id用’,’隔开即可。   测试的结果上看， 我用SM1A02的MAG做测试，分别将–taxonlist参数设置为2 (bacteria), 203682(phylum Planctomycetota), 666505 (class Phycisphaerae), 666506 (order Phycisphaerales)，到class那一级时就已经注释不到蛋白了，可能的因素有1.数据库信息量有限，我使用的只是swiss-prot的序列, 这个物种可能并没有很多已知的蛋白。   --threads/-p #int:  需要使用的CPU线程数量。默认时使用所有可以获取的资源，所以针对需要投递上计算几点的任务的话，投递任务时指定了几个线程就会使用几个。 --db/-d &lt;file&gt;: 数据库文件，不需要后缀.dmnd字符 --query/-q &lt;file&gt;: fasta/fastq文件，可以为gz压缩文件，不提供参数的时候就读取stdin. --taxonlist &lt;list&gt;: 逗号分隔的NCBI taxonomic IDs, 任何一个level的id都可以，例如bateria为2.   blastx 输入及比对有关的参数   --query-gencode #: blastX 时使用的translation genetic code, 默认为标准code(1)。 如果要输出DAA格式，则部分的genetic code不支持。ps: bacterial, archaeal and plant plastid code 为 11. --strand {both, plus, minus}: 设置需要搜索的strand for translated searches. 默认both strand都会搜索 --min-orf/-l #: 忽略翻译的ORF段于这个参数的序列。若设置为1，不执行此功能。默认是如果ORF短于30则不进行比对。 --frameshift/-F #: 在DNA-vs-proteins比对的时候，frameshifts的罚分。参数设置15左右是比较reasonbable的。enabling这个参数意味着在比对的时候，diamond允许比对时DNA序列的缺失，所以更推荐在长度长及易高错误率时使用例如MinION reads. 在pairwise的输出模式中（我理解的是pairwise的详细比对细节模式），用\\和/代表正链/负链上的frameshift --range-culling: 允许query的重叠。这个参数是为长query设计的，这样query可以跨过多个基因。  In these cases, the default of reporting the 25 best overall hits could cause hits to a lower scoring gene to be overshadowed. But just increasing the number of alignments reported will bloat the output size and reduce performance. Using this feature along with -k 25 (default), a hit will only be deleted if at least 50% of its query range is spanned by at least 25 higher or equal scoring hits. Using this feature along with –top 10, a hit will only be deleted if its score is more than 10% lower than that of a higher scoring hit over at least 50% of its query range. The percentage is configurable using –range-cover. Note that this feature is currently only available in frameshift alignment mode.   比对本身的参数   --sensitive: sensitive模式下，比对结果会比fast（默认）模式provides a lot higher sensitivity --more-sensitive：这个模式比sensitive模式会更sensitive一点 --gapopen #: gap open 的罚分 --gapextend #: gap extension 的罚分 --matrix &lt;matrix name&gt;: 得分矩阵，默认为BLOSUM62，可支持的矩阵包括: Matrix\tSupported values for (gap open)/(gap extend)\tDefault gap penalties BLOSUM45\t(10-13)/3; (12-16)/2; (16-19)/1\t14/2 BLOSUM50\t(9-13)/3; (12-16)/2; (15-19)/1\t13/2 BLOSUM62\t(6-11)/2; (9-13)/1\t11/1 BLOSUM80\t(6-9)/2; 13/2; 25/2; (9-11)/1\t10/1 BLOSUM90\t(6-9)/2; (9-11)/1\t10/1 PAM250\t(11-15)/3; (13-17)/2; (17-21)/1\t14/2 PAM70\t(6-8)/2; (9-11)/1\t10/1 PAM30\t(5-7)/2; (8-10)/1\t9/1 --comp-based-stats (0, 1): 比对得分校正（compositional bias correction）。0代表不校正得分，1代表按照文章中的方法进行校正（Maria Hauser, Martin Steinegger, Johannes Söding; MMseqs software suite for fast and deep clustering and searching of large protein sequence sets, Bioinformatics, Volume 32, Issue 9, 1 May 2016, Pages 1323–1330）。Compositionally biased sequences 会导致false positive matches, 这样的情况会被这个算法过滤掉，有点像blast的模式。   --algo (0, 1): seed search的算法，0代表double-indexed, 1代表query-indexed。Double-indexed算法是这个program的主要算法，但是当query很小的时候，效率其实是不高的，这个时候应该使用query-indexed算法。 默认时，会基于query和db的size自动选择一个算法。 需要注意，虽然两种算法在各个模式下都提供了大致相同的sentisivity, 但是结果不会完全一致。   输出相关的参数  --out/-o &lt;file&gt; 输出文件。不提供参数的时候就是stdout。 --outfmt/-f #: 有很多种输出模式，6是输出tab-delimited格式 --salltitles: 在DAA模式中，输出全长的id title, 默认只输出短的id（到第一个空格） --sallseqid: 把所有的db中的seq id 都包含到DAA文件中。比–salltitles更节省空间。说实话没看懂这一句解释 --compress(0, 1): 压缩输出结果与否。0代表不压缩，1代表gzip 压缩 --max-target-seqs/-k #:  最大符合阈值的比对数量，默认为25，0代表report所有的合理比对。 --top #: 输出比对最高分数的给定百分比内的alignments. (overrides –max-target-seqs/-k option). 例如设置为10，则输出所有得分低于最高得分的10%以内的alignments --evalue/-e #: Maximum expected value to report an alignment (default=0.001) --min-score #: 最小的bit score, 设置这个参数会override –evalue参数 --id #: 最小identity阈值 --query-cover #: 最小percentage of query cover --subject-cover #: 最小percentage of subject cover --max-hsps #: 针对每一个query, 输出单个subject的最大hsp。General 来说，在一个query/subject比对的时候完全有可能出现多个HSP. 程序默认输出所有的HSP（没有被其他的HSP覆盖的时候）。设置为1的时候，program只输出一个HSP for every qury/subject pair. --unal (0, 1): 输出unaligned queries, 0 代表不输出，1代表输出。默认时 BLAST pairwise, BLAST XML, 以及SAM格式的时候为1， 其他时候为0 --no-self-hits： 不输出identical self-hits between sequences   --freq-sd #: 在seed search过程中，忽略频率非常高的seed。这个参数这是的多少个单位的标准差为频率过高，fast mode 默认为50， sensitive mode 默认为10, more-sensitive mode 为200. --band #: 这个参数设置的在动态规划的过程中，seed延伸的band，两个方向都会scan. --xml-blord-format: Use gnlBL_ORD_ID style format for hit IDs in XML output. --range-cover #:  The minimum percentage of a hit’s query range that needs to be spanned by higher scoring hits for a hit to be deleted in range culling mode (default=50.0). --culling-overlap #: The minimum percentage of a hit’s query or target range that needs to be spanned by a higher scoring hit against the same target for a hit to be deleted. (default=50.0)   ","categories": ["bioinformatics","alignment"],
        "tags": ["protein sequence alignment","alignment","annotation"],
        "url": "/bioinformatics/alignment/Diamond/",
        "teaser": null
      },{
        "title": "Perl包安装",
        "excerpt":"Notes   CPAN自动安装Perl包，这个最常用：   /path/to/cpan # 启动 &gt;&gt;&gt; install PackageName    当你没有root权限   假如你没有root权限，则你需要将包安装到你有写入权限的目录： 首先安装local::lib https://metacpan.org/pod/local::lib 使用的命令如下：   wget https://cpan.metacpan.org/authors/id/H/HA/HAARG/local-lib-2.000024.tar.gz tar -xvf local-lib-2.000024.tar.gz cd local-lib-2.000024 perl Makefile.PL --bootstrap=YOURPATH make test make install  当安装的时候报错，需要解决依赖包的问题   例如，需要安装Moose，CPAN安装的时候报错退出。提示此包的依赖包括: Package::DeprecationManager,Package::Stash::XS,Test::CleanNamespaces,Sub::Exporter,Params::Util,Devel::OverloadInfo,Class::Load::XS,Package::Stash,Class::Load,Sub::Name,Data::OptList,Sub::Identify 那么，需要依次安装这些包：   perl -MCPAN -Mlocal::lib -e 'CPAN::install(包名)'  把所有的依赖都准备好之后，安装Moose就成功了。   接下来安装IPC:Run包   echo 'eval $(perl -I$HOME/perl5/lib/perl5 -Mlocal::lib)' &gt;&gt;~/.bashrc source ~/.bashrc  最后需要解决pfam_scan检索目录的问题。需要把安装好的包所在的目录加入到pfam_scan的检索目录中就可以成功导入需要的依赖包并运行了。  ","categories": ["coding","perl"],
        "tags": ["annotation","perl","linux"],
        "url": "/coding/perl/Perl_package_installation/",
        "teaser": null
      },{
        "title": "hmm vertibe 过程",
        "excerpt":"         ","categories": ["statistics","probability"],
        "tags": ["probability"],
        "url": "/statistics/probability/hmm_vertibe/",
        "teaser": null
      },{
        "title": "GTDB数据库",
        "excerpt":"GTDB数据库介绍  GTDB的下载地址    关于GTDB taxonomy信息与NCBI的不一致问题  因为GTDB的taxonomy是最新提出的，与传统已有的taxonomy的信息是有差异的。但是我们在处理数据的时候，经常会结合例如Silva等的数据结果，那么就会出现多个结果之间taxonomy不一致的情况。我们可以将GTDB的taxonomy的结果转换成NCBI的taxonomy的结果。具体可以参考整理的issues：   关于phylum命名规则的问题   关于gtdb_to_ncbi_majority_vote.py的使用   整个taxonomy的问题 关于Desulfovibrionia等四个具体的菌的classification的信息   关于如何transfer GTDB的taxonomy信息到NCBI的taxonomy信息，作者介绍了部分内容，且网友提供了一个工具   关于GTDB的taxa与NCBI的taxa信息不是1:1的问题  他们的数据库里有两个文件：文件包含了每一个NCBI的taxa在GTDB中被分到的taxa所占的比例： Bacteria Archaea   例如Cyanobacteria， 这个是GTDB给的新的分类，但是在对应回到NCBI的信息时候，会发现有p__Candidatus Melainabacteria的，p__Proteobacteria的，p__Firmicutes，p__Actinobacteria，p__Spirochaetes等的，   或者还有关于每一个GTDB序列对应的NCBI序列的metadata文件: Bacteria Archaea   但是有一个问题就是在GTDBtk进行分类的时候，并不是每一条genome都能匹配上一个reference。匹配不到reference的时候，它会采用pplacer placement在topology上决定genome上的分类，或者计算RED value的方法来novelly决定genome的分类。   GTDB的配套工具GTDBTk  使用建议  作者推荐，这个工具用于contamination &lt; 10%，completeness &gt; 50%的genomes: https://github.com/Ecogenomics/GTDBTk/issues/184   关于使用GTDBTk鉴定新物种  这里关注到GTDB有issues提到了类似的问题，想说有参考价值，如下:   关于gtdbtk的result能否说明是一个new species 关于ANI的大小如何infer a new species  ","categories": ["database","genome"],
        "tags": ["genome","taxonomy"],
        "url": "/database/genome/GTDB/",
        "teaser": null
      },{
        "title": "git操作本地仓库",
        "excerpt":"git 工具  查看服务器上是否已经安装好git。服务器上有自带的git，直接使用即可，不需要另外安装了。   which git /opt/rocks/bin/git    初始化仓库  进入到对应的目录，执行git init命令。   git init  查看工作状态  查看工作目录+stage+HEAD的状态，发现工作目录有一个rdetfq.py文件，但是没有被stage，也没有commit到HEAD过。   git status On branch master  Initial commit  Untracked files:     (use \"git add &lt;file&gt;...\" to include in what will be committed)          rdetfq.py  nothing added to commit but untracked files present (use \"git add\" to track)  对目录下的文件进行stage  所以需要先stage rdetrfq.py。没有任何信息输出，Linux的核心，没有消息就是好消息之一。   git add rdetrfq.fy  再次查看工作状态  再次查看status，提示rdetrfq.py已经被stage，在等待被commit到HEAD。   git status On branch master  Initial commit  Changes to be committed:     (use \"git rm --cached &lt;file&gt;...\" to unstage)          new file:     rdetfq.py  commit stage的内容到HEAD  将stage中的所有内容commit到HEAD区， -m是注释信息，注明本次commit所做的改变。   git commit -m \"add code of randomly extracting fq\"  再次查看工作状态  再次查看工作区的状态，显示working tree clean, 工作区的东西在HEAD区中都有，版本一致。   git status On branch master nothing to commit, working tree clean  其他操作  tip 0  如果已经commit多个不同的版本到HEAD，想回到以前commit的版本，例如回退一个版本：   git reset --hard HEAD~1 HEAD is now at e7b3364 add read_pars function  tip 1  如果你想撤销add到stage区的文件，使用git reset HEAD +文件，这里的单独的HEAD指的是当前版本 例如撤销stage区的test文件：(相当于撤销一次对stage区的操作):   git reset HEAD test Unstaged changes after reset: M       test  tip 2  如果在工作区中对test文件进行了修改，但是并不想保留修改，则使用git checkout撤销在工作区中对文件test进行的修改，相当于从HEAD中把当前版本的test copy出来，-- 是指定在当前branch。如果不加--，在多branch的情况下会切换到其他的branch进行操作，而不是对test这个文件进行操作。   git checkout -- test  tip 3  如果你想从HEAD中删除某个文件: 则使用git rm file来对file进行删除， 然后需要git commit此次操作到HEAD   git rm rdetrfq.py rm 'rdetrfq.py'  tip 4  但是如果还没有进行commit到HEAD, 又想恢复文件的话，则需要先撤销一次对stage的操作。git reset HEAD file，这是把指针指回当前HEAD， 相当于忽略git rm file这一步操作。   git reset HEAD rdetrfq.py Unstaged changes after reset: D       rdetrfq.py  tip 5  通过tip 4指针指回当前HEAD之后，再checkout从HEAD区copy来对应的文件，可以看到紫粉色文件已经恢复到工作区。    tip 6  如果只是linux命令rm误删了某个工作区的文件：则直接使用git checkout可从HEAD里召回当前版本的该文件。    ref  https://git-scm.com/book/zh/v2/%E6%9C%8D%E5%8A%A1%E5%99%A8%E4%B8%8A%E7%9A%84-Git-%E7%94%9F%E6%88%90-SSH-%E5%85%AC%E9%92%A5  ","categories": ["linux","git"],
        "tags": ["tutorial","git"],
        "url": "/linux/git/git_local_repo/",
        "teaser": null
      },{
        "title": "Silva updates to 138",
        "excerpt":"Introduction  SILVA里使用率最高的，即是它的SSU数据库。当然它在线的比对工具，以及ARB进化相关套装也很受欢迎，不过小编使用最多的是SSU数据库，以及LSU数据库。所以介绍的重点也会偏向于这两个库。    数据集的快速增长极大的增加了硬件需求，数据库越大，则越需要更多的资源例如内存来加载数据库。目前有两种策略解决此问题：1）升级硬件满足需求。2）减小数据库中的序列数。出于多种原因，只要结果数据集仍然具有代表性（这是环境微生物学中的一个非常重要的参数），第二种方法会更具性价比。SILVA项目选择了99% identity作为标准对SSU Ref进行去冗余构建了SSU Ref NR数据集。   这次138版本目前只更新了SSU库，LSU库还在进行中。taxonomy信息加入了GTDB的分类信息，138以前的版本中还有greengenes数据库的信息。GTDB项目的负责人是昆士兰大学的Prof. Phil Hugenholtz，他同时也参与了greengenes数据库的构建。   简介：  silva是一个全面的比对的核糖体RNA序列数据的在线资源，由德国Microbial Genomics and Bioinformatics Research Group开发及维护。SILVA提供了三个域（细菌，古菌，真核生物）的对齐的小亚基（16S/18S，SSU）和大亚基（23S/28S，LSU）rRNA序列的全面、质量检查过并定期更新的数据集。且SILVA是软件包ARB的官方数据库。  SSU：核糖体小亚基库，包含了细菌和古菌的16S序列，以及真核生物的18S序列。  LSU：核糖体大亚基库，包含了细菌和古菌的23S序列，以及真核生物的28S序列   文件描述：  _tax_silva.fasta.gz SSU和LSU数据库的FASTA序列文件，序列ID中包含了细菌，古菌和真核的taxonomy分类信息。 标注：这些文件里包含的是原始的存储在公共数据库（ENA/GenBank/DDBJ）中的序列，没有对序列进行修剪。  _tax_silva_full_align_trunc.fasta.gz SSU和LSU数据库的FASTA序列文件，序列ID中包含了细菌，古菌和真核的taxonomy分类信息，同时还包含了比对信息。 标注：这些文件里的序列是修剪过的，数据库中没有被比对的序列皆被去除了。  _tax_silva_trunc.fasta.gz SSU和LSU数据库的FASTA序列文件，序列ID中包含了细菌，古菌和真核的taxonomy分类信息。 标注：这些文件里的序列是修剪过的，数据库中没有被比对的序列皆被去除了。   库构建方法：  SSU Parc库：  包含所有比对identity&gt;=50，比对质量值&gt;=40，碱基对分数或序列质量值&gt;30的序列。Pintail值&lt;50或比对质量值&lt;75的所有序列在ARB中指定为红色。而ALL-&gt;Living Tree Project 或 StrainInfo中的typestrans在ARB中指定为浅蓝色。   SSU Ref库：  细菌和真核生物序列&lt;1200bp，古菌序列&lt;900bp，比对identity&lt;70，或比对质量值&lt;50的序列被去除。而ALL-&gt;Living Tree Project 或 StrainInfo中的typestrans在ARB中指定为浅蓝色。   SSU Ref NR库：  基于最后发行的Ref NR 99版本的数据库里自定义的序列顺序结合序列长度（加权两倍）和质量，以99%的identity标准，来去除高度相似相同的序列。而对于排序，序列的质量由ambiguties（50%），总体比对质量（45%）以及均聚物（5%）进行定义。序列的总体比对质量是根据其比对得分，比对identity，以及比对的百分比（相等的权重）计算得来。已可培养物种的序列在所有的情况下都进行保留。   标注：138版本的SSU Ref NR 99比之前的版本包含更少的序列。因为团队把序列比对的工具从USEARCH中整合的UCLUST (1.0.50) 换到VSEARCH (2.13)，提升了聚类的性能，且有望使团队可以在将来提供更稳定的Ref NR库。   Ref NR库减小是由于这两个工具使用不同的序列/比对identity的定义差异导致。团队还使用了第三方工具CD-HIT（v4.8）交叉检查了比对的结果。在使用同样的identity阈值条件下，VSEARCH和CD-HIT返回了相似的聚类簇，而UCLUST返回了显著更大数目的聚类簇。  ","categories": ["database","rRNA"],
        "tags": ["tutorial","rRNA","amplicon"],
        "url": "/database/rrna/Silva_138/",
        "teaser": null
      },{
        "title": "git操作远端仓库",
        "excerpt":"确认SSH key  第一步，首先确实自己的目录下是否已经有SSH key。这个一般在~/.ssh目录下，可查看目录是否有   ls ~/.ssh/ a  b  id_rsa  id_rsa.pub  known_hosts    需要的文件是一对以id_rsa或id_dsa命名的文件。例如上边我的目录中是id_rsa文件和id_rsa.pub文件，其中一个文件以id_rsa.pub文件是公钥，id_rsa是私钥。 如果没有这样的文件，或者甚至都没有.ssh目录的话，那么需要自己生成SSH公钥：   ssh-keygen -o  然后将生成的id_rsa.pub里的内容复制粘贴给github自己的账号中的SSH key。SSH keys的目的是为了保证推送的提交是你本人推送的，而不是别人冒充的。git支持SSH协议，并允许你添加多个KEY, 这样即使你有N台电脑并都会进行提交的时候，只需要把每一台电脑的SSH key都添加进去，github就允许每一台key被添加的都电脑都推送过来啦!    绑定用户名和邮箱   git config --global user.name 用户名 git config --global user.email 邮箱  测试查看自己的用户名和email   git config user.name git config user.email  创建远端仓库  如果该项目在远端仓库还没有对应的项目仓库，那么需要先在远端建立一个新仓库，例如github的网页操作。例如创建仓库名称为test的公开项目仓库。    关联仓库  项目仓库创建好之后，进入到本地的仓库，将项目仓库与本地仓库进行关联。   git remote add test https://github.com/username/test.git  推送本地仓库  关联好之后，就可以开始推送啦, 因为是第一次推送这个仓库，所以加入-u参数，把当前分支master所有内容推送到远程，并且会将本地的master分支和远程的master分支关联起来，这样以后推送或者拉取时就可以简化命令 首次推送：   git push -u test master  其他推送：   git push test master  其他命令  查看本地已关联的远端仓库： git remote -v 删除某个远端仓库的关联： git remote rm NAME 如果推送远端被拒，有可能是ssh keys的问题，可以尝试在command line输入unset SSH_ASKPASS，问题可解决。   当远端仓库里有1个或多个文件是本地仓库里没有的的时候，需要先将远端仓库pull到本地:   git pull 远端仓库  ref  https://git-scm.com/book/zh/v2/%E6%9C%8D%E5%8A%A1%E5%99%A8%E4%B8%8A%E7%9A%84-Git-%E7%94%9F%E6%88%90-SSH-%E5%85%AC%E9%92%A5  ","categories": ["linux","git"],
        "tags": ["tutorial","git"],
        "url": "/linux/git/git_remote_repo/",
        "teaser": null
      },{
        "title": "5S rRNA 数据库",
        "excerpt":"Introduction  除了从NCBI，Rfam等这样的大库中分离5S rRNA序列之外，发现有人在收集相应的序列：http://www.combio.pl/rrna/。    数据库已经在线13年。目前收录了11419条序列，包括7174个不同的物种，版本号17。   Taxon分类包括Archaea， Bacteria， Eukaryota，Plastids，和Mitochondria。  ","categories": ["database","rRNA"],
        "tags": ["rRNA","amplicon"],
        "url": "/database/rrna/5S_rRNA/",
        "teaser": null
      },{
        "title": "little treehouse collection - estimation",
        "excerpt":"1. Introduction  Recently, Coles launched a membership campaign. One credit will be issued for every $30 spent at Coles. Where one credit can be redeemed for one LITTLE TREEHOUSE book. The whole book set consists of 24 tiny books (number 1-24, It looks like something in the picture below).     However, every redeemed book is wrapped with cover, thus, you won’t be able to know which number you get until you uncover it.    I am curious about roughly how much you gonna spend at Coles to collect a full set of LITTLE TREEHOUSE book (a single transaction of $30 or more but less than $60 is calculated as $30).   Preparation  Hypothesis: Same quantity of each book was packed and evenly mixed. Books redeemed for every $30 are independent from each other.   Randomly generated 1,000,000 numbers between 0 and 9 as an array. For example:   1, 3, 1, 4, 0, 0, 5, 3, 0, 6, 7, 8, 4, 6, 3, 2, 6, 6, 4, 1, 0, 2, 5, 5, 6, 2, 2, 7, 9, 1, 6, 3, 5, 9, 6, 4, 4, 9, 7, 1, 3, 1, 3, 3, 4, 9, 5, 7, 8, 7, 4, 9, 6, 8, 6, 2, 8, 8, 5, 2, 8, 9, 5, 4, 6, 0, 8, 4, 1, 1, 0, 4, 7, 5, 6, 7, 8, 7, 2, 1, 7, 2, 0, 4, 5, 1, 6, 0, 7, 3, 6, 9, 9, 0, 7, 8, 8, 3, 4, 9, 9, 0, 0, 3, 5, 0, 6, 8, 0, 8, 4, 3, 1, 2, 5, 1, 4, 6, 7, 1, 7, 0, 8, 3, 3, 3, 1, 4, 8, 8, 5, 7, 3, 4, 5, 6, 2, 2, 6, 1, 9, 9, 0, 9, 4, 4, 4, 7, 1, 8, 8, 4, 9, 7, 5, 5, 6, 7, 1, 0, 2, 3, 4, 0, 6, 4, 4, 7, 8, 9, 7, 6, 7, 5, 5, 4, 6, 0, 0, 4, 0, 4, 9, 1, 7, 4, 4, 1, 8, 3, 7, 1, 2, 3, 8, 4, 6, 1, 5, 5, 5, 1, 9, 2, 5, 6, 1, 6, 0, 9, 5, 3, 7, 7, 4, 5, 4, 9, 0, 7, 9, 1, 0, 4, 7, 1, 1, 5, 8, 8, 9, 2, 8, 2, 9, 0, 8, 3, 0, 4, 0, 3, 2, 3, 4, 7, 9, 5, 0, 8, 0, 0, 0, 4, 0, 1, 5, 5, 9, 7, 9, 2, 3, 4, 1, 3, 0, 4, 0, 4, 3, 7, 7, 6, 6, 5, 7, 1, 1, 3, 9, 0, 7, 3, 1, 5, 7, 3, 3, 8, 8, 3, 0, 0, 4, 1, 0, 8, 9, 3, 3, 3, 9, 6, 0, 5, 0, 8, 7, 1, 5, 1, 3, 3, 7, 7, 0, 7, 6, 4, 6, 8, 5, 2, 5, 0, 1, 1, 7, 0, 1, 3, 4, 5, 4, 3, 1, 0, 9, 8, 8, 4, 2, 1, 7, 9, 5, 9, 9, 6, 4, 9, 5, 6, 8, 6, 3, 8, 8, 7, 8, 6, 7, 3, 2, 0, 2, 0, 5, 8, 3, 7, 8, 1, 4, 2, 9, 6, 5, 6, 9, 5, 9, 1, 5, 5, 1, 2, 7, 5, 1, 1, 6, 6, 9, 7, 0, 6, 3, 2, 3, 3, 4, 0, 3, 2, 0, 0, 8, 3, 7, 6, 7, 7, 9, 2, 3, 2, 4, 6, 5, 9, 4, 7, 9, 4, 0, 2, 6, 4, 9, 5, 0, 0, 4, 3, 3, 9, 8, 4, 7, 4, 8, 3, 3, 6, 2, 9, 6, 3, 0, 0, 7, 8, 1, 0, 9, 3, 3, 6, 3, 6, 2, 6, 6, 7, 6, 3, 8, 9, 2, 5, 0, 2, 4, 0, 2, 7, 3, 9, 2, 7, 1, 7, 8, 8, 0, 7, 8, 3, 0, 3, 2, 6, 2, 2, 9, 5, 1, 7, 4, 2, 0, 0, 5, 3, 1, 9, 0, 3, 3, 5, 4, 4, 2, 1, 9, 4, 0, 9, 0, 1, 2, 0, 8, 3, 6, 6, 0, 5, 2, 1, 2, 6, 8, 2, 9, 3, 8, 4, 9, 1, 5, 2, 1, 1, 2, 2, 3, 5, 4, 0, 2, 9, 5, 2, 8, 7, 8, 5, 9, 4, 2, 2, 3, 1, 5, 6, 3, 4, 0, 5, 0, 5, 0, 3, 3, 9, 8, 6, 9, 1, 6, 1, 8, 4, 9, 9, 6, 4, 1, 8, 2, 4, 0, 0, 4, 5, 8, 7, 2, 8, 5, 1, 1, 5, 0, 2, 8, 9, 7, 3, 1, 2, 1, 0, 5, 2, 3, 7, 3, 6, 0, 3, 5, 8, 7, 7, 4, 9, 9, 4, 3, 1, 8, 4, 6, 2, 3, 9, 3, 5, 2, 1, 9, 1, 2, 1, 4, 8, 9, 3, 8, 1, 5, 2, 7, 1, 7, 8, 2, 9, 6, 8, 8, 7, 2, 3, 9, 0, 5, 7, 0, 6, 1, 8, 2, 1, 5, 0, 3, 1, 9, 4, 8, 6, 9, 1, 6, 7, 0, 4, 6, 8, 4, 6, 8, 7, 9, 4, 1, 9, 4, 9, 6, 9, 5, 2, 9, 9, 2, 2, 3, 8, 2, 8, 6, 7, 6, 2, 9, 6, 3, 0, 8, 4, 2, 6, 5, 5, 4, 1, 4, 4, 3, 9, 8, 9, 9, 2, 4, 7, 3, 4, 0, 2, 0, 4, 7, 2, 7, 9, 1, 5, 3, 5, 5, 4, 7, 4, 1, 9, 9, 5, 1, 6, 7, 3, 5, 4, 6, 0, 9, 3, 4, 4, 2, 9, 0, 9, 6, 5, 5, 7, 1, 5, 4, 9, 1, 0, 7, 0, 8, 6, 9, 4, 5, 7, 1, 0, 7, 3, 9, 1, 4, 0, 3, 6, 1, 9, 9, 6, 7, 1, 1, 3, 7, 1, 8, 5, 7, 9, 2, 2, 6, 8, 3, 9, 1, 0, 1, 4, 9, 1, 1, 6, 0, 6, 3, 0, 4, 4, 6, 1, 6, 5, 5, 5, 2, 0, 2, 8, 6, 5, 9, 8, 6, 0, 4, 9, 5, 7, 2, 5, 7, 1, 6, 6, 6, 5, 5, 9, 5, 4, 0, 8, 1, 7, 1, 2, 9, 4, 9, 3, 6, 8, 7, 0, 0, 4, 1, 5, 9, 8, 8, 7, 5, 3, 3, 4, 8, 3, 9, 2, 1, 3, 1, 2, 4, 4  Experiment  Sampling from left to right from this array, take two numbers at a time as a combination. Skip combinations of 00 or larger than 24. Repeating the process until 24 different numbers are collected.   mean: 88.9  Conclusion  $30 * 89 = $2670, theoretically, I may need spend $2670 to collect the full set of LITTLE TREEHOUSE book.   After 1,000 independent trials, this value converges to a number close to $2670.   Thus, I decided to give up collecting those books…  ","categories": ["statistics","estimation"],
        "tags": ["estimation"],
        "url": "/statistics/estimation/Little_treehouse_collection/",
        "teaser": null
      },{
        "title": "上传数据到SRA",
        "excerpt":"说明  数据分析结束之后，通常需要将原始数据上传到公共数据库进行分享。例如测序数据通常上传至NCBI的SRA库。当样本数目比较小的时候，通过网页上传是非常方便的。但是当样本数量庞大的时候，通过网页上传数据就非常麻烦了，因为需要手动依次上传每一个样本。所以最直接的方法是从服务器往NCBI传，例如是用aspera：    aspera的下载链接https://www.ibm.com/products/aspera/downloads 其安装操作手册可参考https://cloud.tencent.com/developer/article/1749467   上传的命令为：   ascp -i /home/.aspera/connect/aspera.openssh -QT -l100m -k1 -d DATA_PATH subasp@upload.ncbi.nlm.nih.gov:uploads/ACCOUNT_CODE  其他  这个命令应该是默认传到了root目录。此目录是一个暂存目录，时间为30天。30天过后自动移除文件。因此，整个数据submission的操作需要在30天之内完成。  ","categories": ["database","SRA"],
        "tags": ["bash","linux","database","rawdate","SRA"],
        "url": "/database/sra/Upload_SRA/",
        "teaser": null
      },{
        "title": "python项目打包demo",
        "excerpt":"1. 基本配置：  1.1 setup.py文件：   # -*- coding:utf-8 -*-  from setuptools import setup, find_packages from os import path  setup( name = 'testpypi11', # 包名称 version = '3.0.3', #版本号 description = 'this is test for packing a pypi package.', # 包的描述 url='***', # optional，项目地址  author = '**', # optional 项目作者 author_email = '**@**', # optional 项目作者邮箱 maintainer='**', # 目前维护人员。如果和作者不一致，那setuptools会在PKG-INFO中把这个名字当做作者 maintainer_email='**', # 维护人员的邮箱 classifiers = [ 'License :: OSI Approved :: MIT License', 'Programming Language :: Python :: 3 :: Only', # indicate language you support, *not* checked by 'pip install' 'Operating System :: Unix', ],  keywords = 'test python3 pypi',  include_package_data=True, # 这个表明除了code之外，还有别的文件/目录需要一起打包。具体哪些内容，则是指定在MANIFEST.in文件中 packages = find_packages(), #这个功能非常好用，不用自己单独指定，特别如果是目录结构较复杂的项目 python_requires = '&gt;=3',  install_requires = ['numpy&gt;=1.17.4'], entry_points={ 'console_scripts':[ 'testpypi=testpypi.info1:Info1', ], }, #scripts=['bin/testpypi'] # 这个和entry_points 二选一即可。表示项目已经自带控制台，不用自动生成新的控制台。setuptools会把这个文件cp到bin下 )  1.2 MANIFAST.in文件  语法挺简单的，见文档：https://packaging.python.org/guides/using-manifest-in/   2. 配置账号（可选）：  文件编写好之后，配置作者识别文件.pypirc，配置了这个文件可以省去很多输入账号密码的操作，不配置也可配置好放在home目录下：   [distutils] index-servers=pypi  [pypi] username=username password=password  3. 上传项目：  3.1 上传命令：   python setup.py sdist upload  3.2 upload的时候一直报错：  翻了一通官方的issue，原来是包的名字重了。   Upload failed (403): The user isn't allowed to upload to project 'testpypi'. See [https://pypi.org/help/#project-name](https://pypi.org/help/#project-name) for more information. error: Upload failed (403): The user isn't allowed to upload to project 'testpypi'. See [https://pypi.org/help/#project-name](https://pypi.org/help/#project-name) for more information.  4. 利用setuptools打包发布Pypi的官方帮助文档：  https://setuptools.readthedocs.io/en/latest/setuptools.html   5. 官方给的setup.py的例子  https://github.com/pypa/sampleproject/blob/master/setup.py   6. 参考博客：  https://blog.csdn.net/mouday/article/details/80736312 https://zhuanlan.zhihu.com/p/37987613 https://www.chenshaowen.com/blog/how-to-pack-a-python-package-and-upload-it-to-pypi.html  ","categories": ["coding","python"],
        "tags": ["python"],
        "url": "/coding/python/setuptools_python_package/",
        "teaser": null
      },{
        "title": "sratoolkit下载测序数据",
        "excerpt":"说明  sratoolkit默认配置的下载数据目录是在HOME，这显然是不友好的，因为一般的集群给每个account的HOME目录下的存储是非常有限的，例如50Gb，所以最好把cache的目录设置到拥有大量存储可供写入的目录。    具体操作方式：更改文件 .ncbi/user-settings.mkfg里的/repository/user/main/public/root的目录为你想要存放的目录即可。   ","categories": ["linux","bash"],
        "tags": ["bash","linux"],
        "url": "/linux/bash/sratoolkit/",
        "teaser": null
      },{
        "title": "pmoA基因序列数据库",
        "excerpt":"Introduction  想找pmoA的序列构建数据库，找到了这个网站. \t里边包括核酸序列，以及序列对应的tax的信息。   ","categories": ["database","gene"],
        "tags": ["protein","gene"],
        "url": "/database/gene/pmoA_database/",
        "teaser": null
      },{
        "title": "Needleman Wunsch alignment DP",
        "excerpt":"The score matrix       The optimal path    ","categories": ["statistics","alignment"],
        "tags": ["alignment"],
        "url": "/statistics/alignment/Needleman_Wunsch_alignment/",
        "teaser": null
      },{
        "title": "Smith Waterman alignment DP",
        "excerpt":"The score matrix       The optimal path    ","categories": ["statistics","alignment"],
        "tags": ["alignment"],
        "url": "/statistics/alignment/Smith-Waterman_algorithm/",
        "teaser": null
      },,{
    "title": null,
    "excerpt":"     404     Page not found :(    The requested page could not be found.   ","url": "http://localhost:3080/404.html"
  },{
    "title": "",
    "excerpt":"Jie did her PhD with Professor Jianhua Guo and Professor Gene Tyson with focus on microbial ecology and bioinformatics.   With passion on microbial ecology, Jie has contributed to publications. The passion extends to coding as well. Jie has led the development of pipelines.   Jie has worked in a wide range of different environments from molecular biology science to bioinformatics. The wet lab experience of molecular biology aids in data analysis a lots. It’s exciting to work with different people and to learn from different professionals. These experiences largely diversified her skillset and enabled a solid foundation for her as an independent researcher.     ","url": "http://localhost:3080/about/"
  },{
    "title": null,
    "excerpt":"","url": "http://localhost:3080/"
  },{
    "title": null,
    "excerpt":"var idx = lunr(function () {   this.field('title')   this.field('excerpt')   this.field('categories')   this.field('tags')   this.ref('id')    this.pipeline.remove(lunr.trimmer)    for (var item in store) {     this.add({       title: store[item].title,       excerpt: store[item].excerpt,       categories: store[item].categories,       tags: store[item].tags,       id: item     })   } });  $(document).ready(function() {   $('input#search').on('keyup', function () {     var resultdiv = $('#results');     var query = $(this).val().toLowerCase();     var result =       idx.query(function (q) {         query.split(lunr.tokenizer.separator).forEach(function (term) {           q.term(term, { boost: 100 })           if(query.lastIndexOf(\" \") != query.length-1){             q.term(term, {  usePipeline: false, wildcard: lunr.Query.wildcard.TRAILING, boost: 10 })           }           if (term != \"\"){             q.term(term, {  usePipeline: false, editDistance: 1, boost: 1 })           }         })       });     resultdiv.empty();     resultdiv.prepend(''+result.length+' Result(s) found ');     for (var item in result) {       var ref = result[item].ref;       if(store[ref].teaser){         var searchitem =           ''+             ''+               ''+                 ''+store[ref].title+''+               ' '+               ''+                 ''+               ''+               ''+store[ref].excerpt.split(\" \").splice(0,20).join(\" \")+'... '+             ''+           '';       }       else{     \t  var searchitem =           ''+             ''+               ''+                 ''+store[ref].title+''+               ' '+               ''+store[ref].excerpt.split(\" \").splice(0,20).join(\" \")+'... '+             ''+           '';       }       resultdiv.append(searchitem);     }   }); }); ","url": "http://localhost:3080/assets/js/lunr/lunr-en.js"
  },{
    "title": null,
    "excerpt":"step1list = new Array(); step1list[\"ΦΑΓΙΑ\"] = \"ΦΑ\"; step1list[\"ΦΑΓΙΟΥ\"] = \"ΦΑ\"; step1list[\"ΦΑΓΙΩΝ\"] = \"ΦΑ\"; step1list[\"ΣΚΑΓΙΑ\"] = \"ΣΚΑ\"; step1list[\"ΣΚΑΓΙΟΥ\"] = \"ΣΚΑ\"; step1list[\"ΣΚΑΓΙΩΝ\"] = \"ΣΚΑ\"; step1list[\"ΟΛΟΓΙΟΥ\"] = \"ΟΛΟ\"; step1list[\"ΟΛΟΓΙΑ\"] = \"ΟΛΟ\"; step1list[\"ΟΛΟΓΙΩΝ\"] = \"ΟΛΟ\"; step1list[\"ΣΟΓΙΟΥ\"] = \"ΣΟ\"; step1list[\"ΣΟΓΙΑ\"] = \"ΣΟ\"; step1list[\"ΣΟΓΙΩΝ\"] = \"ΣΟ\"; step1list[\"ΤΑΤΟΓΙΑ\"] = \"ΤΑΤΟ\"; step1list[\"ΤΑΤΟΓΙΟΥ\"] = \"ΤΑΤΟ\"; step1list[\"ΤΑΤΟΓΙΩΝ\"] = \"ΤΑΤΟ\"; step1list[\"ΚΡΕΑΣ\"] = \"ΚΡΕ\"; step1list[\"ΚΡΕΑΤΟΣ\"] = \"ΚΡΕ\"; step1list[\"ΚΡΕΑΤΑ\"] = \"ΚΡΕ\"; step1list[\"ΚΡΕΑΤΩΝ\"] = \"ΚΡΕ\"; step1list[\"ΠΕΡΑΣ\"] = \"ΠΕΡ\"; step1list[\"ΠΕΡΑΤΟΣ\"] = \"ΠΕΡ\"; step1list[\"ΠΕΡΑΤΑ\"] = \"ΠΕΡ\"; step1list[\"ΠΕΡΑΤΩΝ\"] = \"ΠΕΡ\"; step1list[\"ΤΕΡΑΣ\"] = \"ΤΕΡ\"; step1list[\"ΤΕΡΑΤΟΣ\"] = \"ΤΕΡ\"; step1list[\"ΤΕΡΑΤΑ\"] = \"ΤΕΡ\"; step1list[\"ΤΕΡΑΤΩΝ\"] = \"ΤΕΡ\"; step1list[\"ΦΩΣ\"] = \"ΦΩ\"; step1list[\"ΦΩΤΟΣ\"] = \"ΦΩ\"; step1list[\"ΦΩΤΑ\"] = \"ΦΩ\"; step1list[\"ΦΩΤΩΝ\"] = \"ΦΩ\"; step1list[\"ΚΑΘΕΣΤΩΣ\"] = \"ΚΑΘΕΣΤ\"; step1list[\"ΚΑΘΕΣΤΩΤΟΣ\"] = \"ΚΑΘΕΣΤ\"; step1list[\"ΚΑΘΕΣΤΩΤΑ\"] = \"ΚΑΘΕΣΤ\"; step1list[\"ΚΑΘΕΣΤΩΤΩΝ\"] = \"ΚΑΘΕΣΤ\"; step1list[\"ΓΕΓΟΝΟΣ\"] = \"ΓΕΓΟΝ\"; step1list[\"ΓΕΓΟΝΟΤΟΣ\"] = \"ΓΕΓΟΝ\"; step1list[\"ΓΕΓΟΝΟΤΑ\"] = \"ΓΕΓΟΝ\"; step1list[\"ΓΕΓΟΝΟΤΩΝ\"] = \"ΓΕΓΟΝ\";  v = \"[ΑΕΗΙΟΥΩ]\"; v2 = \"[ΑΕΗΙΟΩ]\"  function stemWord(w) {   var stem;   var suffix;   var firstch;   var origword = w;   test1 = new Boolean(true);    if(w.length '+result.length+' Result(s) found ');     for (var item in result) {       var ref = result[item].ref;       if(store[ref].teaser){         var searchitem =           ''+             ''+               ''+                 ''+store[ref].title+''+               ' '+               ''+                 ''+               ''+               ''+store[ref].excerpt.split(\" \").splice(0,20).join(\" \")+'... '+             ''+           '';       }       else{     \t  var searchitem =           ''+             ''+               ''+                 ''+store[ref].title+''+               ' '+               ''+store[ref].excerpt.split(\" \").splice(0,20).join(\" \")+'... '+             ''+           '';       }       resultdiv.append(searchitem);     }   }); }); ","url": "http://localhost:3080/assets/js/lunr/lunr-gr.js"
  },{
    "title": null,
    "excerpt":"var store = [   {%- for c in site.collections -%}     {%- if forloop.last -%}       {%- assign l = true -%}     {%- endif -%}     {%- assign docs = c.docs | where_exp:'doc','doc.search != false' -%}     {%- for doc in docs -%}       {%- if doc.header.teaser -%}         {%- capture teaser -%}{{ doc.header.teaser }}{%- endcapture -%}       {%- else -%}         {%- assign teaser = site.teaser -%}       {%- endif -%}       {         \"title\": {{ doc.title | jsonify }},         \"excerpt\":           {%- if site.search_full_content == true -%}             {{ doc.content | newline_to_br |               replace:\" \", \" \" |               replace:\" \", \" \" |               replace:\" \", \" \" |               replace:\" \", \" \" |               replace:\" \", \" \" |               replace:\" \", \" \" |               replace:\" \", \" \" |               replace:\" \", \" \"|             strip_html | strip_newlines | jsonify }},           {%- else -%}             {{ doc.content | newline_to_br |               replace:\" \", \" \" |               replace:\" \", \" \" |               replace:\" \", \" \" |               replace:\" \", \" \" |               replace:\" \", \" \" |               replace:\" \", \" \" |               replace:\" \", \" \" |               replace:\" \", \" \"|             strip_html | strip_newlines | truncatewords: 50 | jsonify }},           {%- endif -%}         \"categories\": {{ doc.categories | jsonify }},         \"tags\": {{ doc.tags | jsonify }},         \"url\": {{ doc.url | relative_url | jsonify }},         \"teaser\": {{ teaser | relative_url | jsonify }}       }{%- unless forloop.last and l -%},{%- endunless -%}     {%- endfor -%}   {%- endfor -%}{%- if site.lunr.search_within_pages -%},   {%- assign pages = site.pages | where_exp:'doc','doc.search != false' -%}   {%- for doc in pages -%}     {%- if forloop.last -%}       {%- assign l = true -%}     {%- endif -%}   {     \"title\": {{ doc.title | jsonify }},     \"excerpt\":         {%- if site.search_full_content == true -%}           {{ doc.content | newline_to_br |             replace:\" \", \" \" |             replace:\" \", \" \" |             replace:\" \", \" \" |             replace:\" \", \" \" |             replace:\" \", \" \" |             replace:\" \", \" \" |             replace:\" \", \" \" |             replace:\" \", \" \"|           strip_html | strip_newlines | jsonify }},         {%- else -%}           {{ doc.content | newline_to_br |             replace:\" \", \" \" |             replace:\" \", \" \" |             replace:\" \", \" \" |             replace:\" \", \" \" |             replace:\" \", \" \" |             replace:\" \", \" \" |             replace:\" \", \" \" |             replace:\" \", \" \"|           strip_html | strip_newlines | truncatewords: 50 | jsonify }},         {%- endif -%}       \"url\": {{ doc.url | absolute_url | jsonify }}   }{%- unless forloop.last and l -%},{%- endunless -%}   {%- endfor -%} {%- endif -%}] ","url": "http://localhost:3080/assets/js/lunr/lunr-store.js"
  },{
    "title": "",
    "excerpt":"### 文献解读-anammox - [DNRA微生物的繁殖降低anammox表现](https://mp.weixin.qq.com/s?__biz=MzU4MTc2NzMwOQ==&mid=2247487496&idx=1&sn=ab1ca9db976480a8aed1f7b14a8c5e22&chksm=fd43c9eaca3440fcc57a4ea7b887d4ad28dcd0b15aaba8787c2be73de9b026d3e6f55e049314&token=1051470455&lang=zh_CN#rd) - [ISME:昆士兰大学Gene Tyson组耦合AOM和Mn(IV)还原新古菌的富集和鉴定](https://mp.weixin.qq.com/s?__biz=MzU4MTc2NzMwOQ==&mid=2247487458&idx=1&sn=abcad5a7314023c597058f6ff5620043&chksm=fd43d600ca345f16df0a9efc46b5e1efcbc5206b6e514eb43157b9d324698725d245989034d6&token=1051470455&lang=zh_CN#rd) - [ISME:昆士兰大学袁志国组耦合AOM和Fe(III)还原古菌的富集和鉴定](https://mp.weixin.qq.com/s?__biz=MzU4MTc2NzMwOQ==&mid=2247487301&idx=1&sn=d426c1ca0a136060bfee2b8eb63e68ce&chksm=fd43d6a7ca345fb12ae9fe25732ef707006e62732575931fe4a8bb50df448d76c059a67739da&token=1051470455&lang=zh_CN#rd) - [WR: 日本北海道大学Satoshi Okabe组解析nitrite限制的反应器中anammox细菌之间的竞争](https://mp.weixin.qq.com/s?__biz=MzU4MTc2NzMwOQ==&mid=2247486441&idx=1&sn=d59ea3691c9da7e819f9a78b0f84a950&chksm=fd43d20bca345b1d704a7d2d9546ec9ff55fe3caa4b112bb2b1e643ae6e6b74543edd5c78a89&token=1051470455&lang=zh_CN#rd) - [NC: 威斯康星大学Daniel Noguera组代谢网络分析揭示anammox颗粒中微生物群落间互作](https://mp.weixin.qq.com/s?__biz=MzU4MTc2NzMwOQ==&mid=2247486293&idx=1&sn=df32d6a3448947b872f997d85ee4d059&chksm=fd43d2b7ca345ba10c79a5936d334973dc947648f3a68cac3716c68932284db845c9a86fb2e9&token=1051470455&lang=zh_CN#rd) - [NC: 荷兰内梅亨大学Mike Jetten组宏基因组技术解析anammox颗粒型full-scale污水处理系统中的微生态](https://mp.weixin.qq.com/s?__biz=MzU4MTc2NzMwOQ==&mid=2247486293&idx=2&sn=5f7a1332bc2e997389a2c4827cb644b1&chksm=fd43d2b7ca345ba15ac8e9c2a80127313b0ba80205c282977585e1f0d5929193e57b80cde113&token=1051470455&lang=zh_CN#rd) - [EM：清华王洪涛组看anammox和DAMO如何随季节动态共存](https://mp.weixin.qq.com/s?__biz=MzU4MTc2NzMwOQ==&mid=2247486202&idx=1&sn=e77a045d89f9b81bd31c990566e20454&chksm=fd43d318ca345a0eb5eed0708413cdc355524b884661948f2979524f2cff3ddff6082c638248&token=1051470455&lang=zh_CN#rd) - [NC: 代谢网络分析揭示anammox颗粒中微生物群落间互作](https://mp.weixin.qq.com/s?__biz=MzU4MTc2NzMwOQ==&mid=2247485392&idx=1&sn=0af9b786222f39b3db2dda3e4e19f6c6&chksm=fd43de32ca345724662ea2192cf7bec4927c4a821036fb5d13ce8efd6e6f211cb9200d850377&token=1051470455&lang=zh_CN#rd) - [AMB：北大刘思彤组多组学揭示Anammox细菌之间的竞争关系](https://mp.weixin.qq.com/s?__biz=MzU4MTc2NzMwOQ==&mid=2247486017&idx=1&sn=25f0495797ea1e651f31061704770a40&chksm=fd43d3a3ca345ab52a7025050d0a9eb012b2d247aae5907d66563143e397765311a7e37176b4&token=1051470455&lang=zh_CN#rd)  ### 工具介绍 - [SortMeRNA，Burst trie+查找表，Levenshtein自动机搜索快速精准鉴定rRNA](https://mp.weixin.qq.com/s?__biz=MzU4MTc2NzMwOQ==&mid=2247487476&idx=1&sn=03958545293b8b7c2b650a53212945f1&chksm=fd43d616ca345f00f9327b1d4cfe149a847c1b823be249e33bd27031a94fbad10e2c200429d5&token=1051470455&lang=zh_CN#rd) - [项目开源时如何选择License？](https://mp.weixin.qq.com/s?__biz=MzU4MTc2NzMwOQ==&mid=2247487067&idx=1&sn=d5481dd3feb46b36fd5d2b2ae7c16812&chksm=fd43d7b9ca345eafd6b5ac20e7d9cefe6f1f1d177518ede35047d15d593e4c42c5912e12f131&token=1051470455&lang=zh_CN#rd) - [git学习（二）之远端仓库操作](https://mp.weixin.qq.com/s?__biz=MzU4MTc2NzMwOQ==&mid=2247486732&idx=1&sn=955a6959c113a073559fad5e7c1acab7&chksm=fd43d4eeca345df86d0f4052ae093e28550ae2c3b3a0ee95a5cacc82d49c443ea2a01acfa8da&token=1051470455&lang=zh_CN#rd) - [git学习（一）之本地仓库操作](https://mp.weixin.qq.com/s?__biz=MzU4MTc2NzMwOQ==&mid=2247487067&idx=2&sn=f7fc1104c2dd01d2f917a0d3f6749e80&chksm=fd43d7b9ca345eaff24053729b242c8b8a4f4bef69d4bed52024767e94c34b1b1155a98c3358&token=1051470455&lang=zh_CN#rd) - [SRA数据处理工具-sratoolkit](https://mp.weixin.qq.com/s?__biz=MzU4MTc2NzMwOQ==&mid=2247485891&idx=3&sn=7c6282524aec80edb4777f4d33b9ed84&chksm=fd43d021ca3459371828bb10b083c5e18abf9bca011b4c483c4d4ed87fee9aac13c5bb104cb2&token=1051470455&lang=zh_CN#rd) - [macOS终端工具-iterm2](https://mp.weixin.qq.com/s?__biz=MzU4MTc2NzMwOQ==&mid=2247485392&idx=2&sn=5bfac48c5838f522d51bf1e54b44c20b&chksm=fd43de32ca345724921baaef6988d638ed0210fc3a336bb21065d970c10195571b4a27c172b6&token=1051470455&lang=zh_CN#rd)  ### Python - [序列迭代'Readfq' 和'FastqGeneralIterator'谁更快](https://mp.weixin.qq.com/s?__biz=MzU4MTc2NzMwOQ==&mid=2247487325&idx=1&sn=2045680a0572548bd5ba6c097d8ed318&chksm=fd43d6bfca345fa998ec0c5fbaa2f234f4820d82086bad38aed1dc7b69c8d0ead30b87abd2fb&token=1051470455&lang=zh_CN#rd) - [基于setuptools打包python项目的demo](https://mp.weixin.qq.com/s?__biz=MzU4MTc2NzMwOQ==&mid=2247487313&idx=1&sn=b0ab9227c36e2d6b1d4e686dd168b8fa&chksm=fd43d6b3ca345fa5cd3512ed163c005db86fe90e48ea86a9c4fcf35cca72a48b617ef977e365&token=1051470455&lang=zh_CN#rd) - [编译Python3时配置TCL-TK](https://mp.weixin.qq.com/s?__biz=MzU4MTc2NzMwOQ==&mid=2247487087&idx=1&sn=99c272089d6d4bc5d90fd58b08fe6d74&chksm=fd43d78dca345e9be915c0b5a93e1b859eb060566df582b0888056dec700e6ad2c73652ebec7&token=1051470455&lang=zh_CN#rd) ","url": "http://localhost:3080/media/"
  },{
    "title": "",
    "excerpt":"## [ReadTrim](ttps://github.com/jlli6t/ReadTrim) ![]({{ 'assets/picbed/cover/cover5.jpg' | relative_url}}) **[ReadTrim](https://github.com/jlli6t/ReadTrim)** is a workflow for Short read QC, includes modules for adapter, duplicates, poor quality ends trimming.  ## [BioSut](https://github.com/jlli6t/biosut) ![]({{ 'assets/picbed/cover/cover2.jpg' | relative_url}}) **[BioSut](https://github.com/jlli6t/biosut)** is a Python package that integrated few useful utils.  ## [gccov](https://github.com/jlli6t/gccov) ![]({{ 'assets/picbed/cover/cover4.jpg' | relative_url}}) **[gccov](https://github.com/jlli6t/gccov)**, a light tool used for visualization of GC and coverage of assemblies.  This light tool is useful when you want to look at the GC and coverage distribution of the contigs or scaffolds. ","url": "http://localhost:3080/projects/"
  },{
    "title": "",
    "excerpt":"## Book chapter [1]. Jianhua Guo, Yue Wang, Yunus Ahmed, Min Jin, **Jie Li**. [Control strategies to combat dissemination of antibiotic resistance in urban water systems. Antibiotic Resistance in the Environment: A Worldwide Overview](https://link.springer.com/chapter/10.1007/698_2020_474). The Handbook of Environmental Chemistry, Springer, 2020: 147-187.  ## Publications [11]. Mengxiong Wu#, **Jie Li#**, Andy O Leu, Dirk V Erler, Terra Stark, Gene W. Tyson, Zhiguo Yuan, Simon J. McIlroy*, Jianhua Guo\\* [Anaerobic oxidation of propane coupled to nitrate reduction by a novel lineage of the class Symbiobacteriia](https://www.nature.com/articles/s41467-022-33872-y). Nature Communications, 2022, 13(1): 6115. **(co-first author)**  [10]. Jing Zhao, Min Zheng*, Zicheng Su, Tao Liu, **Jie Li**, Jianhua Guo, Zhiguo Yuan, Shihu Hu. [Selective Enrichment of Comammox Nitrospira in a Moving Bed Biofilm Reactor with Sufficient Oxygen Supply](https://pubs.acs.org/doi/abs/10.1021/acs.est.2c03299). Environmental Science & Technology, 2022, 56(18): 13338-13346.  [9]. Jing Zhao, Gaofeng Ni, Maria Piculell, **Jie Li**, Zhetai Hu, Zhiyao Wang, Jianhua Guo, Zhiguo Yuan, Min Zheng*, Shihu Hu\\*. [Characterizing and comparing microbial community and biofilm structure in three nitrifying moving bed biofilm reactors](https://doi.org/10.1016/j.jenvman.2022.115883). Journal of Environmental Management, 2022, 320: 115883.  [8]. Yue Wang, Ji Lu, Shuai Zhang, **Jie Li**, Likai Mao, Zhiguo Yuan, Philip L. Bond, Jianhua Guo\\*. [Non-antibiotic pharmaceuticals promote the transmission of multidrug resistance plasmids through intra-and intergenera conjugation](https://www.nature.com/articles/s41396-021-00945-7). The ISME Journal, 2021, 15(9): 2493-2508.  [7]. Jiyun Li#, Zheng-Shuang Hua#, Tao Liu, Chengwen Wang\\*, **Jie Li**, Ge Bai, Sebastian Lucker, Mike SM Jetten, Min Zheng*, Jianhua Guo\\*. [Selective enrichment and metagenomic analysis of three novel comammox Nitrospira in a urine-fed membrane bioreactor](https://www.nature.com/articles/s43705-021-00005-3). ISME Communications, 2021, 1(1): 7.  [6]. Hui Chen, Tao Liu, **Jie Li**, Likai Mao, Jun Ye, Xiaoyu Han, Mike SM Jetten, Jianhua Guo\\*. [Larger anammox granules not only harbor higher species diversity but also support more functional diversity](https://pubs.acs.org/doi/full/10.1021/acs.est.0c02609). Environmental Science & Technology, 2020, 54(22): 14664-14673.  [5]. Tao Liu, **Jie Li**, Zhuan Khai Lim, Hui Chen, Shihu Hu, Zhiguo Yuan, Jianhua Guo\\*. [Simultaneous removal of dissolved methane and nitrogen from synthetic mainstream anaerobic effluent](https://pubs.acs.org/doi/full/10.1021/acs.est.0c00912). Environmental Science & Technology, 2020, 54(12): 7629-7638.  [4]. Yue Wang, Ji Lu, Likai Mao, **Jie Li**, Zhiguo Yuan, Philip L. Bond, Jianhua Guo\\*. [Antiepileptic drug carbamazepine promotes horizontal transfer of plasmid-borne multi-antibiotic resistance genes within and across bacterial genera](https://www.nature.com/articles/s41396-018-0275-x). The ISME Journal, 2019, 13(2): 509-522.  [3]. Ji Lu, Yue Wang, **Jie Li**, Likai Mao, Son Hoang Nguyen, Tania Duarte, Lachlan Coin, Philip L. Bond, Zhiguo Yuan, Jianhua Guo\\*. [Triclosan at environmentally relevant concentrations promotes horizontal transfer of multidrug resistance genes within and across bacterial genera](https://www.sciencedirect.com/science/article/pii/S0160412018317264). Environment international, 2018, 121: 1217-1226.  [2] Ji Lu, Min Jin, Son Hoang Nguyen, Likai Mao, **Jie Li**, Lachlan JM Coin, Zhiguo Yuan, Jianhua Guo\\*. [Non-antibiotic antimicrobial triclosan induces multiple antibiotic resistance through genetic mutation](https://www.sciencedirect.com/science/article/pii/S0160412018303672). Environment international, 2018, 118: 257-265.  [1] Jianhua Guo*, **Jie Li**, Hui Chen, Philip L. Bond, Zhiguo Yuan. [Metagenomic analysis reveals wastewater treatment plants as hotspots of antibiotic resistance genes and mobile genetic elements](https://www.sciencedirect.com/science/article/pii/S0043135417305651). Water research, 2017, 123: 468-478.  ## Categorize publications into research field ### Microbial ecology related publications [6]. Mengxiong Wu#, **Jie Li#**, Andy O Leu, Dirk V Erler, Terra Stark, Gene W. Tyson, Zhiguo Yuan, Simon J. McIlroy*, Jianhua Guo\\* [Anaerobic oxidation of propane coupled to nitrate reduction by a novel lineage of the class Symbiobacteriia](https://www.nature.com/articles/s41467-022-33872-y). Nature Communications, 2022, 13(1): 6115. **(co-first author)**  [5]. Jing Zhao, Min Zheng*, Zicheng Su, Tao Liu, **Jie Li**, Jianhua Guo, Zhiguo Yuan, Shihu Hu. [Selective Enrichment of Comammox Nitrospira in a Moving Bed Biofilm Reactor with Sufficient Oxygen Supply](https://pubs.acs.org/doi/abs/10.1021/acs.est.2c03299). Environmental Science & Technology, 2022, 56(18): 13338-13346.  [4]. Jing Zhao, Gaofeng Ni, Maria Piculell, **Jie Li**, Zhetai Hu, Zhiyao Wang, Jianhua Guo, Zhiguo Yuan, Min Zheng*, Shihu Hu\\*. [Characterizing and comparing microbial community and biofilm structure in three nitrifying moving bed biofilm reactors](https://doi.org/10.1016/j.jenvman.2022.115883). Journal of Environmental Management, 2022, 320: 115883.  [3]. Jiyun Li#, Zheng-Shuang Hua#, Tao Liu, Chengwen Wang\\*, **Jie Li**, Ge Bai, Sebastian Lucker, Mike SM Jetten, Min Zheng*, Jianhua Guo\\*. [Selective enrichment and metagenomic analysis of three novel comammox Nitrospira in a urine-fed membrane bioreactor](https://www.nature.com/articles/s43705-021-00005-3). ISME Communications, 2021, 1(1): 7.  [2]. Hui Chen, Tao Liu, **Jie Li**, Likai Mao, Jun Ye, Xiaoyu Han, Mike SM Jetten, Jianhua Guo\\*. [Larger anammox granules not only harbor higher species diversity but also support more functional diversity](https://pubs.acs.org/doi/full/10.1021/acs.est.0c02609). Environmental Science & Technology, 2020, 54(22): 14664-14673.  [1]. Tao Liu, **Jie Li**, Zhuan Khai Lim, Hui Chen, Shihu Hu, Zhiguo Yuan, Jianhua Guo\\*. [Simultaneous removal of dissolved methane and nitrogen from synthetic mainstream anaerobic effluent](https://pubs.acs.org/doi/full/10.1021/acs.est.0c00912). Environmental Science & Technology, 2020, 54(12): 7629-7638.  ### ARG related publications [5]. Yue Wang, Ji Lu, Shuai Zhang, **Jie Li**, Likai Mao, Zhiguo Yuan, Philip L. Bond, Jianhua Guo\\*. [Non-antibiotic pharmaceuticals promote the transmission of multidrug resistance plasmids through intra-and intergenera conjugation](https://www.nature.com/articles/s41396-021-00945-7). The ISME Journal, 2021, 15(9): 2493-2508.  [4]. Yue Wang, Ji Lu, Likai Mao, **Jie Li**, Zhiguo Yuan, Philip L. Bond, Jianhua Guo\\*. [Antiepileptic drug carbamazepine promotes horizontal transfer of plasmid-borne multi-antibiotic resistance genes within and across bacterial genera](https://www.nature.com/articles/s41396-018-0275-x). The ISME Journal, 2019, 13(2): 509-522.  [3]. Ji Lu, Yue Wang, **Jie Li**, Likai Mao, Son Hoang Nguyen, Tania Duarte, Lachlan Coin, Philip L. Bond, Zhiguo Yuan, Jianhua Guo\\*. [Triclosan at environmentally relevant concentrations promotes horizontal transfer of multidrug resistance genes within and across bacterial genera](https://www.sciencedirect.com/science/article/pii/S0160412018317264). Environment international, 2018, 121: 1217-1226.  [2] Ji Lu, Min Jin, Son Hoang Nguyen, Likai Mao, **Jie Li**, Lachlan JM Coin, Zhiguo Yuan, Jianhua Guo\\*. [Non-antibiotic antimicrobial triclosan induces multiple antibiotic resistance through genetic mutation](https://www.sciencedirect.com/science/article/pii/S0160412018303672). Environment international, 2018, 118: 257-265.  [1] Jianhua Guo*, **Jie Li**, Hui Chen, Philip L. Bond, Zhiguo Yuan. [Metagenomic analysis reveals wastewater treatment plants as hotspots of antibiotic resistance genes and mobile genetic elements](https://www.sciencedirect.com/science/article/pii/S0043135417305651). Water research, 2017, 123: 468-478.","url": "http://localhost:3080/publications/"
  },{
    "title": "bash",
    "excerpt":"","url": "http://localhost:3080/tags/bash/"
  },{
    "title": "linux",
    "excerpt":"","url": "http://localhost:3080/tags/linux/"
  },{
    "title": "protein",
    "excerpt":"","url": "http://localhost:3080/tags/protein/"
  },{
    "title": "annotation",
    "excerpt":"","url": "http://localhost:3080/tags/annotation/"
  },{
    "title": "gene",
    "excerpt":"","url": "http://localhost:3080/tags/gene/"
  },{
    "title": "genome",
    "excerpt":"","url": "http://localhost:3080/tags/genome/"
  },{
    "title": "prokaryotic",
    "excerpt":"","url": "http://localhost:3080/tags/prokaryotic/"
  },{
    "title": "amplicon",
    "excerpt":"","url": "http://localhost:3080/tags/amplicon/"
  },{
    "title": "pathway",
    "excerpt":"","url": "http://localhost:3080/tags/pathway/"
  },{
    "title": "sequencing data",
    "excerpt":"","url": "http://localhost:3080/tags/sequencing-data/"
  },{
    "title": "quality control",
    "excerpt":"","url": "http://localhost:3080/tags/quality-control/"
  },{
    "title": "TCK-TK",
    "excerpt":"","url": "http://localhost:3080/tags/tck-tk/"
  },{
    "title": "environment",
    "excerpt":"","url": "http://localhost:3080/tags/environment/"
  },{
    "title": "fastq",
    "excerpt":"","url": "http://localhost:3080/tags/fastq/"
  },{
    "title": "fasta",
    "excerpt":"","url": "http://localhost:3080/tags/fasta/"
  },{
    "title": "sequence",
    "excerpt":"","url": "http://localhost:3080/tags/sequence/"
  },{
    "title": "syntax",
    "excerpt":"","url": "http://localhost:3080/tags/syntax/"
  },{
    "title": "tutorials",
    "excerpt":"","url": "http://localhost:3080/tags/tutorials/"
  },{
    "title": "RNA",
    "excerpt":"","url": "http://localhost:3080/tags/rna/"
  },{
    "title": "mapping",
    "excerpt":"","url": "http://localhost:3080/tags/mapping/"
  },{
    "title": "protein sequence alignment",
    "excerpt":"","url": "http://localhost:3080/tags/protein-sequence-alignment/"
  },{
    "title": "alignment",
    "excerpt":"","url": "http://localhost:3080/tags/alignment/"
  },{
    "title": "perl",
    "excerpt":"","url": "http://localhost:3080/tags/perl/"
  },{
    "title": "probability",
    "excerpt":"","url": "http://localhost:3080/tags/probability/"
  },{
    "title": "taxonomy",
    "excerpt":"","url": "http://localhost:3080/tags/taxonomy/"
  },{
    "title": "tutorial",
    "excerpt":"","url": "http://localhost:3080/tags/tutorial/"
  },{
    "title": "git",
    "excerpt":"","url": "http://localhost:3080/tags/git/"
  },{
    "title": "rRNA",
    "excerpt":"","url": "http://localhost:3080/tags/rrna/"
  },{
    "title": "estimation",
    "excerpt":"","url": "http://localhost:3080/tags/estimation/"
  },{
    "title": "database",
    "excerpt":"","url": "http://localhost:3080/tags/database/"
  },{
    "title": "rawdate",
    "excerpt":"","url": "http://localhost:3080/tags/rawdate/"
  },{
    "title": "SRA",
    "excerpt":"","url": "http://localhost:3080/tags/sra/"
  },{
    "title": "python",
    "excerpt":"","url": "http://localhost:3080/tags/python/"
  },{
    "title": "coding",
    "excerpt":"","url": "http://localhost:3080/categories/coding/"
  },{
    "title": "bash",
    "excerpt":"","url": "http://localhost:3080/categories/bash/"
  },{
    "title": "database",
    "excerpt":"","url": "http://localhost:3080/categories/database/"
  },{
    "title": "protein",
    "excerpt":"","url": "http://localhost:3080/categories/protein/"
  },{
    "title": "genome",
    "excerpt":"","url": "http://localhost:3080/categories/genome/"
  },{
    "title": "bioinformatics",
    "excerpt":"","url": "http://localhost:3080/categories/bioinformatics/"
  },{
    "title": "amplicon",
    "excerpt":"","url": "http://localhost:3080/categories/amplicon/"
  },{
    "title": "quality control",
    "excerpt":"","url": "http://localhost:3080/categories/quality-control/"
  },{
    "title": "python",
    "excerpt":"","url": "http://localhost:3080/categories/python/"
  },{
    "title": "metatranscriptomic",
    "excerpt":"","url": "http://localhost:3080/categories/metatranscriptomic/"
  },{
    "title": "annotation",
    "excerpt":"","url": "http://localhost:3080/categories/annotation/"
  },{
    "title": "alignment",
    "excerpt":"","url": "http://localhost:3080/categories/alignment/"
  },{
    "title": "perl",
    "excerpt":"","url": "http://localhost:3080/categories/perl/"
  },{
    "title": "statistics",
    "excerpt":"","url": "http://localhost:3080/categories/statistics/"
  },{
    "title": "probability",
    "excerpt":"","url": "http://localhost:3080/categories/probability/"
  },{
    "title": "linux",
    "excerpt":"","url": "http://localhost:3080/categories/linux/"
  },{
    "title": "git",
    "excerpt":"","url": "http://localhost:3080/categories/git/"
  },{
    "title": "rRNA",
    "excerpt":"","url": "http://localhost:3080/categories/rrna/"
  },{
    "title": "estimation",
    "excerpt":"","url": "http://localhost:3080/categories/estimation/"
  },{
    "title": "SRA",
    "excerpt":"","url": "http://localhost:3080/categories/sra/"
  },{
    "title": "gene",
    "excerpt":"","url": "http://localhost:3080/categories/gene/"
  },{
    "title": null,
    "excerpt":"{% if page.xsl %}{% endif %}Jekyll{{ site.time | date_to_xmlschema }}{{ page.url | absolute_url | xml_escape }}{% assign title = site.title | default: site.name %}{% if page.collection != \"posts\" %}{% assign collection = page.collection | capitalize %}{% assign title = title | append: \" | \" | append: collection %}{% endif %}{% if page.category %}{% assign category = page.category | capitalize %}{% assign title = title | append: \" | \" | append: category %}{% endif %}{% if title %}{{ title | smartify | xml_escape }}{% endif %}{% if site.description %}{{ site.description | xml_escape }}{% endif %}{% if site.author %}{{ site.author.name | default: site.author | xml_escape }}{% if site.author.email %}{{ site.author.email | xml_escape }}{% endif %}{% if site.author.uri %}{{ site.author.uri | xml_escape }}{% endif %}{% endif %}{% if page.tags %}{% assign posts = site.tags[page.tags] %}{% else %}{% assign posts = site[page.collection] %}{% endif %}{% if page.category %}{% assign posts = posts | where: \"categories\", page.category %}{% endif %}{% unless site.show_drafts %}{% assign posts = posts | where_exp: \"post\", \"post.draft != true\" %}{% endunless %}{% assign posts = posts | sort: \"date\" | reverse %}{% assign posts_limit = site.feed.posts_limit | default: 10 %}{% for post in posts limit: posts_limit %}{% assign post_title = post.title | smartify | strip_html | normalize_whitespace | xml_escape %}{{ post_title }}{{ post.date | date_to_xmlschema }}{{ post.last_modified_at | default: post.date | date_to_xmlschema }}{{ post.id | absolute_url | xml_escape }}{% assign excerpt_only = post.feed.excerpt_only | default: site.feed.excerpt_only %}{% unless excerpt_only %}{% endunless %}{% assign post_author = post.author | default: post.authors[0] | default: site.author %}{% assign post_author = site.data.authors[post_author] | default: post_author %}{% assign post_author_email = post_author.email | default: nil %}{% assign post_author_uri = post_author.uri | default: nil %}{% assign post_author_name = post_author.name | default: post_author %}{{ post_author_name | default: \"\" | xml_escape }}{% if post_author_email %}{{ post_author_email | xml_escape }}{% endif %}{% if post_author_uri %}{{ post_author_uri | xml_escape }}{% endif %}{% if post.category %}{% elsif post.categories %}{% for category in post.categories %}{% endfor %}{% endif %}{% for tag in post.tags %}{% endfor %}{% assign post_summary = post.description | default: post.excerpt %}{% if post_summary and post_summary != empty %}{% endif %}{% assign post_image = post.image.path | default: post.image %}{% if post_image %}{% unless post_image contains \"://\" %}{% assign post_image = post_image | absolute_url %}{% endunless %}{% endif %}{% endfor %}","url": "http://localhost:3080/feed.xml"
  },{
    "title": null,
    "excerpt":" {% if page.xsl %} {% endif %} {% assign collections = site.collections | where_exp:'collection','collection.output != false' %}{% for collection in collections %}{% assign docs = collection.docs | where_exp:'doc','doc.sitemap != false' %}{% for doc in docs %} {{ doc.url | replace:'/index.html','/' | absolute_url | xml_escape }} {% if doc.last_modified_at or doc.date %}{{ doc.last_modified_at | default: doc.date | date_to_xmlschema }} {% endif %} {% endfor %}{% endfor %}{% assign pages = site.html_pages | where_exp:'doc','doc.sitemap != false' | where_exp:'doc','doc.url != \"/404.html\"' %}{% for page in pages %} {{ page.url | replace:'/index.html','/' | absolute_url | xml_escape }} {% if page.last_modified_at %}{{ page.last_modified_at | date_to_xmlschema }} {% endif %} {% endfor %}{% assign static_files = page.static_files | where_exp:'page','page.sitemap != false' | where_exp:'page','page.name != \"404.html\"' %}{% for file in static_files %} {{ file.path | replace:'/index.html','/' | absolute_url | xml_escape }} {{ file.modified_time | date_to_xmlschema }}  {% endfor %} ","url": "http://localhost:3080/sitemap.xml"
  },{
    "title": null,
    "excerpt":"Sitemap: {{ \"sitemap.xml\" | absolute_url }} ","url": "http://localhost:3080/robots.txt"
  },{
    "title": null,
    "excerpt":"","url": "http://localhost:3080/page2/"
  },{
    "title": null,
    "excerpt":"","url": "http://localhost:3080/page3/"
  },{
    "title": null,
    "excerpt":"","url": "http://localhost:3080/page4/"
  },{
    "title": null,
    "excerpt":"","url": "http://localhost:3080/page5/"
  },{
    "title": null,
    "excerpt":"","url": "http://localhost:3080/page6/"
  }]
