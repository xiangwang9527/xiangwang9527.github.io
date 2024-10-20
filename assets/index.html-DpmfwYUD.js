import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as e,d as a}from"./app-B5m7CcSj.js";const n={},l=a(`<h2 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念"><span>基本概念</span></a></h2><h3 id="行式存储与列式存储" tabindex="-1"><a class="header-anchor" href="#行式存储与列式存储"><span>行式存储与列式存储</span></a></h3><p><a href="https://hive.apache.org/" target="_blank" rel="noopener noreferrer">Hive</a>作为一个数据仓库，它侧重的是离线的数据分析，也就它本质上是一个<a href="https://en.wikipedia.org/wiki/Online_analytical_processing" target="_blank" rel="noopener noreferrer">OLAP</a>系统。</p><p>但咋大数据处理的过程中，不仅仅需要<a href="https://en.wikipedia.org/wiki/Online_analytical_processing" target="_blank" rel="noopener noreferrer">OLAP</a>，有时候也需要执行实时的<a href="https://en.wikipedia.org/wiki/Online_transaction_processing" target="_blank" rel="noopener noreferrer">OLTP</a>任务。</p><p>而<a href="https://hive.apache.org/" target="_blank" rel="noopener noreferrer">Hive</a>并不支持事务，且<a href="https://www.mysql.com" target="_blank" rel="noopener noreferrer">MySQL</a>或者<a href="https://www.oracle.com/" target="_blank" rel="noopener noreferrer">Oracle</a>这种传统的<a href="https://en.wikipedia.org/wiki/Online_transaction_processing" target="_blank" rel="noopener noreferrer">OLTP</a>数据库系统又无法处理上亿级别的数据量，所以就有了<a href="https://hbase.apache.org/" target="_blank" rel="noopener noreferrer">HBase</a>。</p><p><a href="https://hbase.apache.org/" target="_blank" rel="noopener noreferrer">HBase</a>和<a href="https://hive.apache.org/" target="_blank" rel="noopener noreferrer">Hive</a>的共同点是，它们都基于<a href="https://hadoop.apache.org" target="_blank" rel="noopener noreferrer">Hadoop</a>，都是分布式系统。但<a href="https://hbase.apache.org/" target="_blank" rel="noopener noreferrer">HBase</a>有一个很重要的特点，它是基于<code>列</code>的存储。</p><p>大多数传统的<a href="https://en.m.wikipedia.org/w/index.php?title=Relational_database" target="_blank" rel="noopener noreferrer">RDBMS</a>系统都是按照一行一行的方式来存储数据的，就像这样。</p><figure><img src="https://tianmazuo.com/technology/bigdata/hbase/hbase-01.png" alt="前台登记表" tabindex="0" loading="lazy"><figcaption>前台登记表</figcaption></figure><p>这种方式可以一次性查询出所有与指定条件相关的列，但如果只需要少量的列或者只需要查询某一列的内容时，它也需要进行全表扫描，然后再过滤出所需的列数据。</p><p>在数据量比较小的情况下，这种弊端还不明显。但在海量数据的查询中，就极其拖累整体性能了，这就是基于行存储逻辑的数据库系统最大的问题。</p><p>而在基于列存储的数据库系统中，数据是按照列的方式存储的，某一列的数据在存储介质中就是一组连续的地址。</p><figure><img src="https://tianmazuo.com/technology/bigdata/hbase/hbase-02.png" alt="行式存储与列式存储的对比" tabindex="0" loading="lazy"><figcaption>行式存储与列式存储的对比</figcaption></figure><ul><li><p><code>行式存储</code>中每一行的数据作为一个基础逻辑存储单元进行存储。</p></li><li><p><code>列式存储</code>中每一列的数据作为一个基础逻辑存储单元进行存储。</p></li></ul><h3 id="适用场景" tabindex="-1"><a class="header-anchor" href="#适用场景"><span>适用场景</span></a></h3><p><code>列式存储</code>非常适用于下面的应用场景。</p><ul><li><p>在<a href="https://baike.baidu.com/item/%E5%8D%8A%E7%BB%93%E6%9E%84%E5%8C%96%E6%95%B0%E6%8D%AE" target="_blank" rel="noopener noreferrer">半结构化数据</a>和<a href="https://baike.baidu.com/item/%E9%9D%9E%E7%BB%93%E6%9E%84%E5%8C%96%E6%95%B0%E6%8D%AE" target="_blank" rel="noopener noreferrer">非结构化数据</a>中，其数据字段无法完全确定或杂乱无章，很难按一个概念去进行抽取时，就非常适合使用<code>列式存储</code>来保存它们。例如，用户或商品的标签（tags）信息都是不断动态变化的，有多有的少，而且几乎都不同。</p></li><li><p>在数据非常<code>稀疏</code>时。这里的<code>稀疏</code>不是指的<code>稀少</code>，而是指设计了多个字段，却最终只使用了其中比较少的几个字段，那么那些值为<code>NULL</code>的字段会浪费大量的连续存储空间。</p></li><li><p>需要记录多个不同版本的数据时。<a href="https://www.mysql.com" target="_blank" rel="noopener noreferrer">MySQL</a>中每一条记录的值如果被更新的话，都会覆盖之前的数据，如果想保存历史数值，就只能通过插入多条记录的方式来实现。但这样一来，除了某一列的数据不同之外，其余列的数据都是完全一样的，这也造成存储空间的浪费和性能的损耗。而<a href="https://hbase.apache.org/" target="_blank" rel="noopener noreferrer">HBase</a>却能对某一个记录保存任意数量的不同版本的值，也不会有多条记录存在。</p></li><li><p>需要存储和查询海量数据时。过去的<a href="https://en.m.wikipedia.org/w/index.php?title=Relational_database" target="_blank" rel="noopener noreferrer">RDBMS</a>数据库都是通过主从分离或分库分表的方式来实现对大数据量的操作的。但<a href="https://hbase.apache.org/" target="_blank" rel="noopener noreferrer">HBase</a>依托于<a href="https://hadoop.apache.org" target="_blank" rel="noopener noreferrer">Hadoop</a>，就使得这一过程非常简单，只需要简单增加处理业务的机器就行了。</p></li></ul><h3 id="hbase逻辑存储模型" tabindex="-1"><a class="header-anchor" href="#hbase逻辑存储模型"><span>HBase逻辑存储模型</span></a></h3><figure><img src="https://tianmazuo.com/technology/bigdata/hbase/hbase-03.png" alt="HBase逻辑存储模型和MySQL的对比" tabindex="0" loading="lazy"><figcaption>HBase逻辑存储模型和MySQL的对比</figcaption></figure><p>所谓<code>逻辑存储模型</code>就是操作<a href="https://hbase.apache.org/" target="_blank" rel="noopener noreferrer">HBase</a>时所用到的组件及其概念。</p><p>例如，有下面的<a href="https://hbase.apache.org/" target="_blank" rel="noopener noreferrer">HBase</a>数据。</p><figure><img src="https://tianmazuo.com/technology/bigdata/hbase/hbase-04.png" alt="HBase逻辑存储模型" tabindex="0" loading="lazy"><figcaption>HBase逻辑存储模型</figcaption></figure><ul><li><p>表中只有一条数据，它的<code>RowKey</code>是<code>李星云</code>。</p></li><li><p>表中有两个列族（<code>ColumnFamily</code>）<code>c1</code>和<code>c2</code>。</p></li><li><p><code>c1</code>只有1列，而<code>c2</code>有两列，每个列都自带<code>Timestamp</code>。</p></li><li><p><code>c1</code>中的<code>age</code>列有4个历史版本，而<code>c2</code>的<code>gf</code>列也有4个历史版本，但<code>house</code>列只有1个历史版本。</p></li><li><p>数据中时间戳（从<code>T1</code>到<code>T9</code>）的顺序，就是数据插入的顺序。</p></li><li><p>定位表中某一列的过程是：<code>Namespace</code> --&gt; <code>Table</code> --&gt; <code>RowKey</code> --&gt; <code>ColumnFamily</code> --&gt; <code>Column</code> --&gt; <code>Timestamp</code>。</p></li></ul><p>所以从逻辑模型可以看出，<a href="https://hbase.apache.org/" target="_blank" rel="noopener noreferrer">HBase</a>是<code>三维有序</code>存储的，所谓<code>三维</code>指的是<code>RowKey</code>、<code>Column Key（ColumnFamily + Column）</code>和<code>Timestamp</code>，这三个维度也都依照<code>ASCII</code>码表排序。</p><ul><li><p>查询出来的会数据先按照<code>RowKey</code>的升序排序。</p></li><li><p>如果<code>RowKey</code>相同，再按照<code>Column Key</code>升序排序。</p></li><li><p>如果<code>RowKey</code>和<code>Column Key</code>都相同，则按照<code>Timestamp</code>降序排序。</p></li></ul><br><h2 id="本机部署" tabindex="-1"><a class="header-anchor" href="#本机部署"><span>本机部署</span></a></h2><p>官方已经给出了<a href="https://hbase.apache.org/book.html#quickstart" target="_blank" rel="noopener noreferrer">部署HBase单节点的方法</a>，但文档并不完整。</p><p>根据<a href="https://hbase.apache.org/book.html#hadoop" target="_blank" rel="noopener noreferrer">官方给出的版本搭配关系</a>，<a href="https://hadoop.apache.org" target="_blank" rel="noopener noreferrer">Hadoop</a> <code>3.2.x</code>搭配<a href="https://hbase.apache.org/" target="_blank" rel="noopener noreferrer">HBase</a> <code>2.3.x</code>或者<code>2.4.x</code>版本是比较合适的。</p><p>下载并解压<a href="https://dlcdn.apache.org/hbase/2.4.18/hbase-2.4.18-bin.tar.gz" target="_blank" rel="noopener noreferrer">HBase安装包</a>。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; cd /home/work</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; wget https://dlcdn.apache.org/hbase/2.4.18/hbase-2.4.18-bin.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; tar xzvf hbase-2.4.18-bin.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; cd hbase-2.4.18</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改配置文件<code>hbase-env.sh</code>，在文件结尾处添加以下内容。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; cd vi conf/hbase-env.sh</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> JAVA_HOME</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">usr</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">local</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">java</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">jdk1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">8</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">0_401</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再修改<code>hbase-site.xml</code>文件，修改下面的内容。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; cd vi conf/hbase-site.xml</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;property&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">hbase.cluster.distributed</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/name&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">value</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/value&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/property&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;property&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">hbase.tmp.dir</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/name&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">value</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/home/work/volumes/hbase</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/value&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/property&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;property&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">hbase.master.info.port</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/name&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">value</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">16010</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/value&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/property&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;property&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">hbase.rootdir</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/name&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">value</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">hdfs://172.16.185.176:9000/hbase</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/value&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/property&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;property&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">hbase.zookeeper.quorum</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/name&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">value</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">hadoop</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/value&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/property&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;property&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">zookeeper.znode.parent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/name&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">value</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/hbase</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/value&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/property&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;property&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">hbase.zookeeper.property.clientPort</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/name&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">value</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">2181</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/value&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/property&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改完之后就可以启动<a href="https://hbase.apache.org/" target="_blank" rel="noopener noreferrer">HBase</a>了。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; ./bin/start-hbase.sh</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; jps</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">65092</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> HMaster</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">65966</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Jps</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果看到出现<code>HMaster</code>进程就算启动成功了，之后就可以在浏览器中访问<a href="http://172.16.185.176:16010/" target="_blank" rel="noopener noreferrer">http://172.16.185.176:16010/</a>，或者通过命令行进行测试。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; ./bin/hbase shell</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">HBase</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Shell</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Use</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;help&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> to</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> list</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> of</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> supported</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> commands.</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Use</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;exit&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> to</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> quit</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> this</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> interactive</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> shell.</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">For</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Reference,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> please</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> visit:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> http://hbase.apache.org/2.0/book.html#shell</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Version</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 2.4.18,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ra1767f4d76859c0068720a6c1e5cb78282ebfe1e</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Took</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0.0017</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> seconds</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">hbase:001:0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果启动或使用时不想看到日志冲突警告信息，可以这样做。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; cd /home/work/hbase-2.4.18/lib/client-facing-thirdparty</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; mv slf4j-reload4j-1.7.33.jar slf4j-reload4j-1.7.33.bak</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,40),t=[l];function h(r,p){return e(),i("div",null,t)}const o=s(n,[["render",h],["__file","index.html.vue"]]),c=JSON.parse('{"path":"/technology/bigdata/hbase/","title":"HBase列式存储","lang":"zh-CN","frontmatter":{"title":"HBase列式存储","icon":"barcode","category":["大数据","HBase"],"tag":["大数据","HBase","列式存储"],"date":"2023-03-31T00:00:00.000Z","isOriginal":true,"star":true,"description":"基本概念 行式存储与列式存储 Hive作为一个数据仓库，它侧重的是离线的数据分析，也就它本质上是一个OLAP系统。 但咋大数据处理的过程中，不仅仅需要OLAP，有时候也需要执行实时的OLTP任务。 而Hive并不支持事务，且MySQL或者Oracle这种传统的OLTP数据库系统又无法处理上亿级别的数据量，所以就有了HBase。 HBase和Hive的共...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/technology/bigdata/hbase/"}],["meta",{"property":"og:site_name","content":"添码座"}],["meta",{"property":"og:title","content":"HBase列式存储"}],["meta",{"property":"og:description","content":"基本概念 行式存储与列式存储 Hive作为一个数据仓库，它侧重的是离线的数据分析，也就它本质上是一个OLAP系统。 但咋大数据处理的过程中，不仅仅需要OLAP，有时候也需要执行实时的OLTP任务。 而Hive并不支持事务，且MySQL或者Oracle这种传统的OLTP数据库系统又无法处理上亿级别的数据量，所以就有了HBase。 HBase和Hive的共..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://tianmazuo.com/technology/bigdata/hbase/hbase-01.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"添码座"}],["meta",{"property":"article:tag","content":"大数据"}],["meta",{"property":"article:tag","content":"HBase"}],["meta",{"property":"article:tag","content":"列式存储"}],["meta",{"property":"article:published_time","content":"2023-03-31T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"HBase列式存储\\",\\"image\\":[\\"https://tianmazuo.com/technology/bigdata/hbase/hbase-01.png\\",\\"https://tianmazuo.com/technology/bigdata/hbase/hbase-02.png\\",\\"https://tianmazuo.com/technology/bigdata/hbase/hbase-03.png\\",\\"https://tianmazuo.com/technology/bigdata/hbase/hbase-04.png\\"],\\"datePublished\\":\\"2023-03-31T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"添码座\\",\\"url\\":\\"https://www.tianmazuo.com/about/\\"}]}"]]},"headers":[{"level":2,"title":"基本概念","slug":"基本概念","link":"#基本概念","children":[{"level":3,"title":"行式存储与列式存储","slug":"行式存储与列式存储","link":"#行式存储与列式存储","children":[]},{"level":3,"title":"适用场景","slug":"适用场景","link":"#适用场景","children":[]},{"level":3,"title":"HBase逻辑存储模型","slug":"hbase逻辑存储模型","link":"#hbase逻辑存储模型","children":[]}]},{"level":2,"title":"本机部署","slug":"本机部署","link":"#本机部署","children":[]}],"git":{},"readingTime":{"minutes":5.21,"words":1564},"filePathRelative":"technology/bigdata/hbase/README.md","localizedDate":"2023年3月31日","excerpt":"<h2>基本概念</h2>\\n<h3>行式存储与列式存储</h3>\\n<p><a href=\\"https://hive.apache.org/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Hive</a>作为一个数据仓库，它侧重的是离线的数据分析，也就它本质上是一个<a href=\\"https://en.wikipedia.org/wiki/Online_analytical_processing\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">OLAP</a>系统。</p>\\n<p>但咋大数据处理的过程中，不仅仅需要<a href=\\"https://en.wikipedia.org/wiki/Online_analytical_processing\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">OLAP</a>，有时候也需要执行实时的<a href=\\"https://en.wikipedia.org/wiki/Online_transaction_processing\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">OLTP</a>任务。</p>","autoDesc":true}');export{o as comp,c as data};