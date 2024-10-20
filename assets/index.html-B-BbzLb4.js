import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,o as t,d as c}from"./app-B5m7CcSj.js";const a={},i=c('<div class="hint-container tip"><p class="hint-container-title">相关文档</p><p><a href="https://clickhouse.com/docs/zh" target="_blank" rel="noopener noreferrer">Clickhouse官方中文文档</a></p><p><a href="https://help.aliyun.com/zh/clickhouse/" target="_blank" rel="noopener noreferrer">阿里云Clickhouse文档</a></p></div><h2 id="行式存储" tabindex="-1"><a class="header-anchor" href="#行式存储"><span>行式存储</span></a></h2><p>之前在<a href="https://hbase.apache.org/" target="_blank" rel="noopener noreferrer">HBase</a>中对于<code>行式存储</code>与<code>列式存储</code>的区别并没有讲的很清楚，这里把它们彻底搞清楚。</p><p>还是之前那张<code>前台登记表</code>。</p><figure><img src="https://tianmazuo.com/technology/bigdata/clickhouse/clickhouse-01.png" alt="前台登记表" tabindex="0" loading="lazy"><figcaption>前台登记表</figcaption></figure><p><code>来访登记表</code>的数据记录方式非常符合人的阅读和记忆习惯：从上到下，从左到右。</p><p>而且每一行数据的不同列之间，也是有明显的关联关系的：单位、联系方式都必定从属于某个来访者。</p><p>大多数的计算机数据库系统也是这么存储数据的，例如<a href="https://www.oracle.com/" target="_blank" rel="noopener noreferrer">Oracle</a>、<a href="https://www.microsoft.com/en-us/sql-server/sql-server-downloads/" target="_blank" rel="noopener noreferrer">SQL Server</a>和<a href="https://www.mysql.com" target="_blank" rel="noopener noreferrer">MySQL</a>，因此这类用“行”的方式来存储数据，且每一行的数据之间有关联关系的数据库系统，又叫<a href="https://cloud.google.com/learn/what-is-a-relational-database?hl=zh-cn" target="_blank" rel="noopener noreferrer">关系型数据库</a>（<code>Relational Database Management System</code>，<code>RDBMS</code>）系统。</p><p>在计算机技术发展的早期，这种方式运行的很好。但在网络时代，就暴露出了一个很严重的问题：不够灵活，且性能太拉胯了。</p><p>以存储商品数据的表格为例。</p><figure><img src="https://tianmazuo.com/technology/bigdata/clickhouse/clickhouse-02.png" alt="存储商品信息的数据表" tabindex="0" loading="lazy"><figcaption>存储商品信息的数据表</figcaption></figure><ul><li><p>每一列能够存储的数据量是固定的：假设编号数据会占用<code>10B</code>（<code>B</code>是<code>Byte</code>的缩写，表示字节，<code>10B</code>表示10个字节）、商品名称会占用<code>300B</code>，这样合计下来，一条完整的商品信息将占用2060B，也就是2KB多一点。</p></li><li><p>对于<code>行式存储</code>来说，任何一行数据都是不可分割的，也就是说，如果它需要读取一条商品信息，例如可口可乐，要么把它所有的属性列全部取出来，要么一个属性列都不取（有点像捆绑销售）。</p></li><li><p>这就产生了一个问题：哪怕仅仅只想看看价格，也不得不把其他不相干的数据列也拿出来。这是因为计算机没有<code>眼睛</code>，它无法像人一样<code>看</code>到并取出数据，它只能依靠<code>蛮力</code>查找——也就是纯粹的计算，而且它的内存分配方式也不允许它只拿部分。</p></li><li><p>所以，当要读取商品名称和价格时，为了这<code>600B</code>的数据，就不得不把剩下的<code>1460B</code>也拿出来。</p></li><li><p>这就好比某人去旅行时本来只用带衣服，却不得不把整个衣柜都打包带上一样，简直要命——这种效率可想而知——事实上，当前的互联网应用中的所有用于<a href="https://en.wikipedia.org/wiki/Online_analytical_processing" target="_blank" rel="noopener noreferrer">OLAP</a>的行式存储数据库都是这么干的。</p></li></ul><h2 id="列式存储" tabindex="-1"><a class="header-anchor" href="#列式存储"><span>列式存储</span></a></h2><p>既然<code>行</code>的方式不行，那换一种思路呢？于是，有人就提出了另外一种存储和读取数据的方式：把<code>行</code>转成<code>列</code>。</p><p>这样一来，按照计算机的读取方式，就不用再费力去打包很多无关的内容了。</p><p>现在仅仅只需要将商品名称和价格所在的<code>行</code>（也就是原来的<code>列</code>）拿出来就行了。</p><figure><img src="https://tianmazuo.com/technology/bigdata/clickhouse/clickhouse-03.png" alt="将商品数据按“列”进行存储" tabindex="0" loading="lazy"><figcaption>将商品数据按“列”进行存储</figcaption></figure><p>这种方式，人类看起来很不习惯，但是却非常适合计算机处理——再也不需要去读那些无关的数据了。</p><p>用更符合人类阅读的习惯来看，就是下面这样。</p><figure><img src="https://tianmazuo.com/technology/bigdata/clickhouse/clickhouse-04.png" alt="按“列”读取商品数据数据" tabindex="0" loading="lazy"><figcaption>按“列”读取商品数据数据</figcaption></figure><p>而且，当使用<code>列式存储</code>时，因为列中都是同一类数据，所以也可以更好地进行“压缩”。</p><p>例如，如果要压缩<code>产地</code>数据，那么在计算机内部，完全可以用<code>1</code>代表<code>中国</code>，用<code>2</code>代表<code>美国</code>——用数字来表示数据，可比用文字省空间多了，而且传输也更快。</p><figure><img src="https://tianmazuo.com/technology/bigdata/clickhouse/clickhouse-05.png" alt="对列中的数据进行压缩" tabindex="0" loading="lazy"><figcaption>对列中的数据进行压缩</figcaption></figure><p>这样一来，既少了很多包袱，且每样<code>用品</code>还能压缩——这就是为什么<code>列式存储</code>数据库的性能普遍都比较高的根本原因。</p><p>上面这些图只是用于表述和方便理解，计算机中真正的存储结构可不是这样的。</p><p><a href="https://www.clickhouse.com" target="_blank" rel="noopener noreferrer">Clickhouse</a>正是这样一款基于列式存储的大数据系统。</p><p>现在，通过<code>列式存储</code>，计算机再也不用每次查询时把数据的<code>全家</code>都搜罗出来了。</p><p>下面是<a href="https://www.clickhouse.com" target="_blank" rel="noopener noreferrer">Clickhouse</a>官方对<code>行式存储</code>和<code>列式存储</code>的比较。</p><figure><img src="https://tianmazuo.com/technology/bigdata/clickhouse/clickhouse-A.gif" alt="行式存储" tabindex="0" loading="lazy"><figcaption>行式存储</figcaption></figure><figure><img src="https://tianmazuo.com/technology/bigdata/clickhouse/clickhouse-B.gif" alt="列式存储" tabindex="0" loading="lazy"><figcaption>列式存储</figcaption></figure><h2 id="适用场景" tabindex="-1"><a class="header-anchor" href="#适用场景"><span>适用场景</span></a></h2><p><code>列式存储</code>尽管读取性能更好，但它并不是用来取代行式存储的，而是一种更好的补充，它们有各自适用的场景。</p><ul><li><p><code>行式存储</code>更适用于插入和更新，它适用于<a href="https://en.wikipedia.org/wiki/Online_transaction_processing" target="_blank" rel="noopener noreferrer">OLTP</a>（<code>On-Line Transaction Processing</code>，联机事务处理）型业务。</p></li><li><p><code>列式存储</code>更适用于读取和分析，它适用于<a href="https://en.wikipedia.org/wiki/Online_analytical_processing" target="_blank" rel="noopener noreferrer">OLAP</a>（<code>On-Line Analysis Processing</code>，联机分析处理）型业务。</p></li></ul><p>从名字就能看出来，它们一个适合做日常事务数据的管理操作，而另一个适合做海量数据分析操作。</p>',34),n=[i];function r(l,p){return t(),o("div",null,n)}const d=e(a,[["render",r],["__file","index.html.vue"]]),g=JSON.parse('{"path":"/technology/bigdata/clickhouse/","title":"数据存储：行式与列式","lang":"zh-CN","frontmatter":{"title":"数据存储：行式与列式","icon":"computer-mouse","category":["大数据","Clickhouse"],"tag":["大数据","Clickhouse","列式存储"],"date":"2023-06-01T00:00:00.000Z","isOriginal":true,"star":true,"description":"相关文档 Clickhouse官方中文文档 阿里云Clickhouse文档 行式存储 之前在HBase中对于行式存储与列式存储的区别并没有讲的很清楚，这里把它们彻底搞清楚。 还是之前那张前台登记表。 前台登记表前台登记表 来访登记表的数据记录方式非常符合人的阅读和记忆习惯：从上到下，从左到右。 而且每一行数据的不同列之间，也是有明显的关联关系的：单位、...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/technology/bigdata/clickhouse/"}],["meta",{"property":"og:site_name","content":"添码座"}],["meta",{"property":"og:title","content":"数据存储：行式与列式"}],["meta",{"property":"og:description","content":"相关文档 Clickhouse官方中文文档 阿里云Clickhouse文档 行式存储 之前在HBase中对于行式存储与列式存储的区别并没有讲的很清楚，这里把它们彻底搞清楚。 还是之前那张前台登记表。 前台登记表前台登记表 来访登记表的数据记录方式非常符合人的阅读和记忆习惯：从上到下，从左到右。 而且每一行数据的不同列之间，也是有明显的关联关系的：单位、..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://tianmazuo.com/technology/bigdata/clickhouse/clickhouse-01.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"添码座"}],["meta",{"property":"article:tag","content":"大数据"}],["meta",{"property":"article:tag","content":"Clickhouse"}],["meta",{"property":"article:tag","content":"列式存储"}],["meta",{"property":"article:published_time","content":"2023-06-01T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"数据存储：行式与列式\\",\\"image\\":[\\"https://tianmazuo.com/technology/bigdata/clickhouse/clickhouse-01.png\\",\\"https://tianmazuo.com/technology/bigdata/clickhouse/clickhouse-02.png\\",\\"https://tianmazuo.com/technology/bigdata/clickhouse/clickhouse-03.png\\",\\"https://tianmazuo.com/technology/bigdata/clickhouse/clickhouse-04.png\\",\\"https://tianmazuo.com/technology/bigdata/clickhouse/clickhouse-05.png\\",\\"https://tianmazuo.com/technology/bigdata/clickhouse/clickhouse-A.gif\\",\\"https://tianmazuo.com/technology/bigdata/clickhouse/clickhouse-B.gif\\"],\\"datePublished\\":\\"2023-06-01T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"添码座\\",\\"url\\":\\"https://www.tianmazuo.com/about/\\"}]}"]]},"headers":[{"level":2,"title":"行式存储","slug":"行式存储","link":"#行式存储","children":[]},{"level":2,"title":"列式存储","slug":"列式存储","link":"#列式存储","children":[]},{"level":2,"title":"适用场景","slug":"适用场景","link":"#适用场景","children":[]}],"git":{},"readingTime":{"minutes":4.51,"words":1352},"filePathRelative":"technology/bigdata/clickhouse/README.md","localizedDate":"2023年6月1日","excerpt":"<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">相关文档</p>\\n<p><a href=\\"https://clickhouse.com/docs/zh\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Clickhouse官方中文文档</a></p>\\n<p><a href=\\"https://help.aliyun.com/zh/clickhouse/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">阿里云Clickhouse文档</a></p>\\n</div>","autoDesc":true}');export{d as comp,g as data};
