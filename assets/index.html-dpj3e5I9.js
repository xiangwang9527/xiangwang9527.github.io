import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,o as r,d as o}from"./app-B5m7CcSj.js";const t={},p=o('<h2 id="impala概述" tabindex="-1"><a class="header-anchor" href="#impala概述"><span>Impala概述</span></a></h2><p><a href="https://impala.apache.org/" target="_blank" rel="noopener noreferrer">Impala</a>是<a href="https://www.cloudera.com/" target="_blank" rel="noopener noreferrer">Cloudera</a>公司开发的一种高性能、低延迟的数据查询引擎，专门用于处理存储在<a href="https://hadoop.apache.org" target="_blank" rel="noopener noreferrer">Hadoop</a>中的大数据，它的显著特点就是基于<a href="https://hive.apache.org/" target="_blank" rel="noopener noreferrer">Hive</a>，能够以<code>SQL</code>方式查询<a href="https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html" target="_blank" rel="noopener noreferrer">HDFS</a>和<a href="https://hbase.apache.org/" target="_blank" rel="noopener noreferrer">HBase</a>中的数据。</p><p>相对于<a href="https://hadoop.apache.org/docs/current/hadoop-mapreduce-client/hadoop-mapreduce-client-core/MapReduceTutorial.html" target="_blank" rel="noopener noreferrer">MapReduce</a>和<a href="https://hive.apache.org/" target="_blank" rel="noopener noreferrer">Hive</a>，<a href="https://impala.apache.org/" target="_blank" rel="noopener noreferrer">Impala</a>的速度更快，能实现秒级的即席查询。</p><p><a href="https://impala.apache.org/" target="_blank" rel="noopener noreferrer">Impala</a>的优势在于以下几点。</p><ul><li><p>之所以速度快，是因为它基于内存计算，不保存中间结果，能节省大量的<code>I/O</code>开销。</p></li><li><p>底层计算引擎用<code>C++</code>开发，通过<a href="https://llvm.org/" target="_blank" rel="noopener noreferrer">LLVM</a>统一编译运行，效率更高。</p></li><li><p>兼容<a href="https://hive.apache.org/" target="_blank" rel="noopener noreferrer">Hive</a>的<code>SQL</code>语法，学习成本低，容易上手。</p></li><li><p>兼容<a href="https://hive.apache.org/" target="_blank" rel="noopener noreferrer">Hive</a>的<code>Metastore</code>，可以直接使用<a href="https://hive.apache.org/" target="_blank" rel="noopener noreferrer">Hive</a>中的表。</p></li><li><p>具有数据本地化（Data Locality）的特点，提高计算效率。</p></li><li><p>支持列式存储的数据格式，可以与<a href="https://hbase.apache.org/" target="_blank" rel="noopener noreferrer">HBase</a>整合。</p></li><li><p>支持几乎所有<a href="https://hadoop.apache.org" target="_blank" rel="noopener noreferrer">Hadoop</a>支持的文件格式，例如<code>TextFile</code>、<code>SquenceFile</code>、<code>RCFile</code>等。</p></li><li><p>支持基于<a href="https://en.wikipedia.org/wiki/Open_Database_Connectivity" target="_blank" rel="noopener noreferrer">ODBC</a>/<a href="https://en.wikipedia.org/wiki/Java_Database_Connectivity" target="_blank" rel="noopener noreferrer">JDBC</a>的远程访问，能够无缝对接<code>Web</code>项目。</p></li></ul><p>而<a href="https://impala.apache.org/" target="_blank" rel="noopener noreferrer">Impala</a>的不足也有下面几点。</p><ul><li><p>因为基于内存计算，如果宕机或者崩溃，可能会不得不重头再来。</p></li><li><p>用<code>C++</code>开发导致维护难度较大。</p></li><li><p>当分区数量超过10000，性能会严重下降，容易出现问题。</p></li><li><p>如果<a href="https://hive.apache.org/" target="_blank" rel="noopener noreferrer">Hive</a>的<code>Metastore</code>不可用，也将导致<a href="https://impala.apache.org/" target="_blank" rel="noopener noreferrer">Impala</a>不可用。</p></li></ul><figure><img src="https://tianmazuo.com/technology/bigdata/impala/impala-01.png" alt="Impala在Hadoop大数据生态中的位置" tabindex="0" loading="lazy"><figcaption>Impala在Hadoop大数据生态中的位置</figcaption></figure><h2 id="三大核心组件" tabindex="-1"><a class="header-anchor" href="#三大核心组件"><span>三大核心组件</span></a></h2><ul><li><p><code>Impala Daemon（impalad）</code>：这是<a href="https://impala.apache.org/" target="_blank" rel="noopener noreferrer">Impala</a>集群中的核心守护进程，一般和<code>DataNode</code>节点一起部署，与<code>StateStore</code>保持通信。它也负责接收客户端的查询请求，并向客户端返回查询结果。</p></li><li><p><code>StateStore Daemon（statestored）</code>：负责收集集群中各个<code>impalad</code>进程的资源信息、各节点健康状况，以及同步节点信息，还负责<code>Query</code>的协调和调度。</p></li><li><p><code>Catalog Daemon（catalogd）</code>：负责分发表的元数据信息到各个<code>impalad</code>，接收来自<code>StateStore</code>的所有请求。</p></li></ul><h2 id="整体运行架构" tabindex="-1"><a class="header-anchor" href="#整体运行架构"><span>整体运行架构</span></a></h2><figure><img src="https://tianmazuo.com/technology/bigdata/impala/impala-02.png" alt="Impala整体运行架构" tabindex="0" loading="lazy"><figcaption>Impala整体运行架构</figcaption></figure><ul><li><p><code>Hive Metastore</code>负责维护<a href="https://impala.apache.org/" target="_blank" rel="noopener noreferrer">Impala</a>元数据信息。</p></li><li><p><a href="https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html" target="_blank" rel="noopener noreferrer">HDFS</a>的<code>DataNode</code>和<a href="https://hbase.apache.org/" target="_blank" rel="noopener noreferrer">HBase</a>都作为<a href="https://impala.apache.org/" target="_blank" rel="noopener noreferrer">Impala</a>的底层数据存储组件。</p></li><li><p><a href="https://impala.apache.org/" target="_blank" rel="noopener noreferrer">Impala</a>的整个执行流程是这样的。</p><ul><li><p>第1步：客户端向某个<code>Impalad</code>发送一个<code>Query</code>（也就是<code>SQL</code>查询请求）。</p></li><li><p>第2步：<code>Impalad</code>将<code>Query</code>解析为具体的<code>Query Pannner</code>，然后交给当前节点的<code>Query Coordinator</code>去协调执行。</p></li><li><p>第3步：<code>Query Coordinator</code>根据<code>Query Pannner</code>通过节点的<code>Query Executor</code>执行，并转发给其他有数据的<code>Impalad</code>。</p></li><li><p>第4步：多个<code>Impalad</code>的<code>Query Executor</code>之间会进行通信，同步数据处理。</p></li><li><p>第5步：<code>Query Executor</code>将执行结果返回给<code>Query Coordinator</code>。</p></li><li><p>第6步：由<code>Query Coordinator</code>再将汇聚的执行结果返回给客户端。</p></li></ul></li></ul><h2 id="本机部署" tabindex="-1"><a class="header-anchor" href="#本机部署"><span>本机部署</span></a></h2><p><a href="https://impala.apache.org/" target="_blank" rel="noopener noreferrer">Impala</a>的安装部署比较特殊，最佳安装方式是通过<a href="https://docs.cloudera.com/documentation/enterprise/6/6.3/topics/cdh_intro.html" target="_blank" rel="noopener noreferrer">Cloudera（CDH）</a>平台安装。</p><p>但<a href="https://docs.cloudera.com/documentation/enterprise/6/6.3/topics/cdh_intro.html" target="_blank" rel="noopener noreferrer">Cloudera（CDH）</a>平台本身的安装就非常麻烦，而且需要的节点资源众多，所以就不装了。</p>',16),l=[p];function n(i,c){return r(),a("div",null,l)}const s=e(t,[["render",n],["__file","index.html.vue"]]),m=JSON.parse('{"path":"/technology/bigdata/impala/","title":"Impala高速查询引擎","lang":"zh-CN","frontmatter":{"title":"Impala高速查询引擎","icon":"vials","category":["大数据","Impala"],"tag":["大数据","Impala"],"date":"2023-04-06T00:00:00.000Z","isOriginal":true,"star":true,"description":"Impala概述 Impala是Cloudera公司开发的一种高性能、低延迟的数据查询引擎，专门用于处理存储在Hadoop中的大数据，它的显著特点就是基于Hive，能够以SQL方式查询HDFS和HBase中的数据。 相对于MapReduce和Hive，Impala的速度更快，能实现秒级的即席查询。 Impala的优势在于以下几点。 之所以速度快，是因为...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/technology/bigdata/impala/"}],["meta",{"property":"og:site_name","content":"添码座"}],["meta",{"property":"og:title","content":"Impala高速查询引擎"}],["meta",{"property":"og:description","content":"Impala概述 Impala是Cloudera公司开发的一种高性能、低延迟的数据查询引擎，专门用于处理存储在Hadoop中的大数据，它的显著特点就是基于Hive，能够以SQL方式查询HDFS和HBase中的数据。 相对于MapReduce和Hive，Impala的速度更快，能实现秒级的即席查询。 Impala的优势在于以下几点。 之所以速度快，是因为..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://tianmazuo.com/technology/bigdata/impala/impala-01.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"添码座"}],["meta",{"property":"article:tag","content":"大数据"}],["meta",{"property":"article:tag","content":"Impala"}],["meta",{"property":"article:published_time","content":"2023-04-06T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Impala高速查询引擎\\",\\"image\\":[\\"https://tianmazuo.com/technology/bigdata/impala/impala-01.png\\",\\"https://tianmazuo.com/technology/bigdata/impala/impala-02.png\\"],\\"datePublished\\":\\"2023-04-06T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"添码座\\",\\"url\\":\\"https://www.tianmazuo.com/about/\\"}]}"]]},"headers":[{"level":2,"title":"Impala概述","slug":"impala概述","link":"#impala概述","children":[]},{"level":2,"title":"三大核心组件","slug":"三大核心组件","link":"#三大核心组件","children":[]},{"level":2,"title":"整体运行架构","slug":"整体运行架构","link":"#整体运行架构","children":[]},{"level":2,"title":"本机部署","slug":"本机部署","link":"#本机部署","children":[]}],"git":{},"readingTime":{"minutes":2.85,"words":856},"filePathRelative":"technology/bigdata/impala/README.md","localizedDate":"2023年4月6日","excerpt":"<h2>Impala概述</h2>\\n<p><a href=\\"https://impala.apache.org/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Impala</a>是<a href=\\"https://www.cloudera.com/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Cloudera</a>公司开发的一种高性能、低延迟的数据查询引擎，专门用于处理存储在<a href=\\"https://hadoop.apache.org\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Hadoop</a>中的大数据，它的显著特点就是基于<a href=\\"https://hive.apache.org/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Hive</a>，能够以<code>SQL</code>方式查询<a href=\\"https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">HDFS</a>和<a href=\\"https://hbase.apache.org/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">HBase</a>中的数据。</p>","autoDesc":true}');export{s as comp,m as data};
