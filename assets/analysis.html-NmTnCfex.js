import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,o,d as a}from"./app-B5m7CcSj.js";const t={},n=a('<p>整体的数据计算指标需求如下。</p><figure><img src="https://tianmazuo.com/application/case/recommend/recommend-06.png" alt="相关计算指标" tabindex="0" loading="lazy"><figcaption>相关计算指标</figcaption></figure><ul><li><p>任务1：将数据库中的粉丝历史关注数据<code>follow_00</code> ~ <code>follow_09</code>批量导入到<a href="https://neo4j.com/" target="_blank" rel="noopener noreferrer">Neo4j</a>中，这个任务在初始化的时候只需要执行一次。</p></li><li><p>任务2：通过<a href="https://spark.apache.org/" target="_blank" rel="noopener noreferrer">Spark</a>实时维护粉丝的关注与取消关注数据，它的数据源自于<a href="https://kafka.apache.org/" target="_blank" rel="noopener noreferrer">Kafka</a>中的<code>user_follow</code>这个<code>Topic</code>，它的计算结果也保存到<a href="https://neo4j.com/" target="_blank" rel="noopener noreferrer">Neo4j</a>。</p></li><li><p>任务3：通过<a href="https://spark.apache.org/" target="_blank" rel="noopener noreferrer">Spark</a>每天计算并更新用户的活跃时间，如果当天活跃过，就更新最近活跃时间为当前日期，这是针对主播和粉丝都会进行的计算任务，它的数据源自于<a href="https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html" target="_blank" rel="noopener noreferrer">HDFS</a>中的<code>user_active</code>，计算结果保存到<a href="https://neo4j.com/" target="_blank" rel="noopener noreferrer">Neo4j</a>。</p></li><li><p>任务4：通过<a href="https://spark.apache.org/" target="_blank" rel="noopener noreferrer">Spark</a>每天计算并更新主播等级数据，这项计算任务仅针对主播，它的数据源自于<a href="https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html" target="_blank" rel="noopener noreferrer">HDFS</a>中的<code>user_level</code>，计算结果保存到<a href="https://neo4j.com/" target="_blank" rel="noopener noreferrer">Neo4j</a>。</p></li><li><p>任务5：通过<a href="https://spark.apache.org/" target="_blank" rel="noopener noreferrer">Spark</a>每周计算主播最近30天的内容评级，它的数据源自于<a href="https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html" target="_blank" rel="noopener noreferrer">HDFS</a>中的<code>live_info</code>，计算结果保存到<a href="https://neo4j.com/" target="_blank" rel="noopener noreferrer">Neo4j</a>。</p></li><li><p>任务6：通过<a href="https://spark.apache.org/" target="_blank" rel="noopener noreferrer">Spark</a>每周计算主播近一个周的三度关系列表，参与计算的主播需要满足下面几个前提条件。</p><ul><li><p>主播近一周内处于活跃状态。</p></li><li><p>主播等级 &gt; 10。</p></li><li><p>主播近30天至少3条内容评价满足A+。</p></li><li><p>主播粉丝列表关注重合度 &gt; 2。</p></li></ul></li><li><p>任务7：每周将计算结果导出到<a href="https://www.mysql.com" target="_blank" rel="noopener noreferrer">MySQL</a>。</p></li></ul>',3),p=[n];function l(c,i){return o(),r("div",null,p)}const d=e(t,[["render",l],["__file","analysis.html.vue"]]),f=JSON.parse('{"path":"/application/case/recommend/analysis.html","title":"数据计算指标分析","lang":"zh-CN","frontmatter":{"title":"数据计算指标分析","icon":"user-plus","category":["案例","社交平台","关系推荐"],"tag":["案例","社交平台","关系推荐"],"date":"2024-06-15T00:00:00.000Z","isOriginal":true,"star":true,"description":"整体的数据计算指标需求如下。 相关计算指标相关计算指标 任务1：将数据库中的粉丝历史关注数据follow_00 ~ follow_09批量导入到Neo4j中，这个任务在初始化的时候只需要执行一次。 任务2：通过Spark实时维护粉丝的关注与取消关注数据，它的数据源自于Kafka中的user_follow这个Topic，它的计算结果也保存到Neo4j。 ...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/application/case/recommend/analysis.html"}],["meta",{"property":"og:site_name","content":"添码座"}],["meta",{"property":"og:title","content":"数据计算指标分析"}],["meta",{"property":"og:description","content":"整体的数据计算指标需求如下。 相关计算指标相关计算指标 任务1：将数据库中的粉丝历史关注数据follow_00 ~ follow_09批量导入到Neo4j中，这个任务在初始化的时候只需要执行一次。 任务2：通过Spark实时维护粉丝的关注与取消关注数据，它的数据源自于Kafka中的user_follow这个Topic，它的计算结果也保存到Neo4j。 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://tianmazuo.com/application/case/recommend/recommend-06.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"添码座"}],["meta",{"property":"article:tag","content":"案例"}],["meta",{"property":"article:tag","content":"社交平台"}],["meta",{"property":"article:tag","content":"关系推荐"}],["meta",{"property":"article:published_time","content":"2024-06-15T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"数据计算指标分析\\",\\"image\\":[\\"https://tianmazuo.com/application/case/recommend/recommend-06.png\\"],\\"datePublished\\":\\"2024-06-15T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"添码座\\",\\"url\\":\\"https://www.tianmazuo.com/about/\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":1.54,"words":462},"filePathRelative":"application/case/recommend/analysis.md","localizedDate":"2024年6月15日","excerpt":"<p>整体的数据计算指标需求如下。</p>\\n<figure><img src=\\"https://tianmazuo.com/application/case/recommend/recommend-06.png\\" alt=\\"相关计算指标\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>相关计算指标</figcaption></figure>\\n<ul>\\n<li>\\n<p>任务1：将数据库中的粉丝历史关注数据<code>follow_00</code> ~ <code>follow_09</code>批量导入到<a href=\\"https://neo4j.com/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Neo4j</a>中，这个任务在初始化的时候只需要执行一次。</p>\\n</li>\\n<li>\\n<p>任务2：通过<a href=\\"https://spark.apache.org/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Spark</a>实时维护粉丝的关注与取消关注数据，它的数据源自于<a href=\\"https://kafka.apache.org/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Kafka</a>中的<code>user_follow</code>这个<code>Topic</code>，它的计算结果也保存到<a href=\\"https://neo4j.com/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Neo4j</a>。</p>\\n</li>\\n<li>\\n<p>任务3：通过<a href=\\"https://spark.apache.org/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Spark</a>每天计算并更新用户的活跃时间，如果当天活跃过，就更新最近活跃时间为当前日期，这是针对主播和粉丝都会进行的计算任务，它的数据源自于<a href=\\"https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">HDFS</a>中的<code>user_active</code>，计算结果保存到<a href=\\"https://neo4j.com/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Neo4j</a>。</p>\\n</li>\\n<li>\\n<p>任务4：通过<a href=\\"https://spark.apache.org/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Spark</a>每天计算并更新主播等级数据，这项计算任务仅针对主播，它的数据源自于<a href=\\"https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">HDFS</a>中的<code>user_level</code>，计算结果保存到<a href=\\"https://neo4j.com/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Neo4j</a>。</p>\\n</li>\\n<li>\\n<p>任务5：通过<a href=\\"https://spark.apache.org/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Spark</a>每周计算主播最近30天的内容评级，它的数据源自于<a href=\\"https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">HDFS</a>中的<code>live_info</code>，计算结果保存到<a href=\\"https://neo4j.com/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Neo4j</a>。</p>\\n</li>\\n<li>\\n<p>任务6：通过<a href=\\"https://spark.apache.org/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Spark</a>每周计算主播近一个周的三度关系列表，参与计算的主播需要满足下面几个前提条件。</p>\\n<ul>\\n<li>\\n<p>主播近一周内处于活跃状态。</p>\\n</li>\\n<li>\\n<p>主播等级 &gt; 10。</p>\\n</li>\\n<li>\\n<p>主播近30天至少3条内容评价满足A+。</p>\\n</li>\\n<li>\\n<p>主播粉丝列表关注重合度 &gt; 2。</p>\\n</li>\\n</ul>\\n</li>\\n<li>\\n<p>任务7：每周将计算结果导出到<a href=\\"https://www.mysql.com\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">MySQL</a>。</p>\\n</li>\\n</ul>","autoDesc":true}');export{d as comp,f as data};