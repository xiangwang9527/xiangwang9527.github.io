import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,o as a,d as r}from"./app-CiwSPZKD.js";const t={},p=r('<p><a href="https://hadoop.apache.org" target="_blank" rel="noopener noreferrer">Hadoop</a>通过<a href="https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html" target="_blank" rel="noopener noreferrer">HDFS</a>实现了分布式存储，通过<a href="https://hadoop.apache.org/docs/current/hadoop-mapreduce-client/hadoop-mapreduce-client-core/MapReduceTutorial.html" target="_blank" rel="noopener noreferrer">MapReduce</a>实现了分布式计算，而计算任务的执行是通过<a href="https://hadoop.apache.org/docs/current/hadoop-yarn/hadoop-yarn-site/YARN.html" target="_blank" rel="noopener noreferrer">YARN</a>来完成的。</p><figure><img src="https://tianmazuo.com/technology/bigdata/hadoop/hadoop-09.png" alt="官方给出的Yarn架构图" tabindex="0" loading="lazy"><figcaption>官方给出的Yarn架构图</figcaption></figure><p>上面是<a href="https://hadoop.apache.org" target="_blank" rel="noopener noreferrer">Hadoop</a>官方给出的<a href="https://hadoop.apache.org/docs/current/hadoop-yarn/hadoop-yarn-site/YARN.html" target="_blank" rel="noopener noreferrer">YARN</a>架构图，但省略了很多关键的信息和步骤。</p><p>总体来说，<a href="https://hadoop.apache.org/docs/current/hadoop-yarn/hadoop-yarn-site/YARN.html" target="_blank" rel="noopener noreferrer">YARN</a>中只有两个角色。</p><ul><li><p><code>ResourceManager</code>：<a href="https://hadoop.apache.org/docs/current/hadoop-yarn/hadoop-yarn-site/YARN.html" target="_blank" rel="noopener noreferrer">YARN</a>集群主控节点，负责集群中所有应用程序的资源分配、协调和管理，其主要职责就是<code>调度</code>，它并不关心每个应用程序的状态。</p></li><li><p><code>NodeManager</code>：负责<a href="https://hadoop.apache.org/docs/current/hadoop-yarn/hadoop-yarn-site/YARN.html" target="_blank" rel="noopener noreferrer">YARN</a>集群节点上容器（Container）的监控和管理，追踪节点健康状况，管理日志等，与<code>ResourceManager</code>保持通信，向<code>ResourceManager</code>报告节点上资源的使用情况。</p></li></ul><p>以一个完整的<a href="https://hadoop.apache.org/docs/current/hadoop-mapreduce-client/hadoop-mapreduce-client-core/MapReduceTutorial.html" target="_blank" rel="noopener noreferrer">MapReduce</a>计算任务为例，其整个运行过程如下图所示的那样。</p><figure><img src="https://tianmazuo.com/technology/bigdata/hadoop/hadoop-10.png" alt="Yarn调度资源完成MapReduce的过程" tabindex="0" loading="lazy"><figcaption>Yarn调度资源完成MapReduce的过程</figcaption></figure><p>看明白了这幅图，也就明白了<a href="https://hadoop.apache.org/docs/current/hadoop-yarn/hadoop-yarn-site/YARN.html" target="_blank" rel="noopener noreferrer">YARN</a>的作用。</p><p>所以，整个<a href="https://hadoop.apache.org" target="_blank" rel="noopener noreferrer">Hadoop</a>其实就是三驾马车各司其职。</p><ul><li><p><a href="https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html" target="_blank" rel="noopener noreferrer">HDFS</a>：分布式存储。</p></li><li><p><a href="https://hadoop.apache.org/docs/current/hadoop-mapreduce-client/hadoop-mapreduce-client-core/MapReduceTutorial.html" target="_blank" rel="noopener noreferrer">MapReduce</a>：分布式计算。</p></li><li><p><a href="https://hadoop.apache.org/docs/current/hadoop-yarn/hadoop-yarn-site/YARN.html" target="_blank" rel="noopener noreferrer">YARN</a>：分布式调度。</p></li></ul>',10),n=[p];function h(c,d){return a(),o("div",null,n)}const s=e(t,[["render",h],["__file","yarn.html.vue"]]),g=JSON.parse('{"path":"/technology/bigdata/hadoop/yarn.html","title":"YARN框架","lang":"zh-CN","frontmatter":{"title":"YARN框架","icon":"file-zipper","category":["大数据","Hadoop"],"tag":["大数据","Hadoop","Yarn"],"date":"2023-03-22T00:00:00.000Z","isOriginal":true,"star":true,"description":"Hadoop通过HDFS实现了分布式存储，通过MapReduce实现了分布式计算，而计算任务的执行是通过YARN来完成的。 官方给出的Yarn架构图官方给出的Yarn架构图 上面是Hadoop官方给出的YARN架构图，但省略了很多关键的信息和步骤。 总体来说，YARN中只有两个角色。 ResourceManager：YARN集群主控节点，负责集群中所有...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/technology/bigdata/hadoop/yarn.html"}],["meta",{"property":"og:site_name","content":"添码座"}],["meta",{"property":"og:title","content":"YARN框架"}],["meta",{"property":"og:description","content":"Hadoop通过HDFS实现了分布式存储，通过MapReduce实现了分布式计算，而计算任务的执行是通过YARN来完成的。 官方给出的Yarn架构图官方给出的Yarn架构图 上面是Hadoop官方给出的YARN架构图，但省略了很多关键的信息和步骤。 总体来说，YARN中只有两个角色。 ResourceManager：YARN集群主控节点，负责集群中所有..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://tianmazuo.com/technology/bigdata/hadoop/hadoop-09.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"添码座"}],["meta",{"property":"article:tag","content":"大数据"}],["meta",{"property":"article:tag","content":"Hadoop"}],["meta",{"property":"article:tag","content":"Yarn"}],["meta",{"property":"article:published_time","content":"2023-03-22T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"YARN框架\\",\\"image\\":[\\"https://tianmazuo.com/technology/bigdata/hadoop/hadoop-09.png\\",\\"https://tianmazuo.com/technology/bigdata/hadoop/hadoop-10.png\\"],\\"datePublished\\":\\"2023-03-22T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"添码座\\",\\"url\\":\\"https://www.tianmazuo.com/about/\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":1.28,"words":384},"filePathRelative":"technology/bigdata/hadoop/yarn.md","localizedDate":"2023年3月22日","excerpt":"<p><a href=\\"https://hadoop.apache.org\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Hadoop</a>通过<a href=\\"https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">HDFS</a>实现了分布式存储，通过<a href=\\"https://hadoop.apache.org/docs/current/hadoop-mapreduce-client/hadoop-mapreduce-client-core/MapReduceTutorial.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">MapReduce</a>实现了分布式计算，而计算任务的执行是通过<a href=\\"https://hadoop.apache.org/docs/current/hadoop-yarn/hadoop-yarn-site/YARN.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">YARN</a>来完成的。</p>","autoDesc":true}');export{s as comp,g as data};
