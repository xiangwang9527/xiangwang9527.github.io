import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,o as r,d as a}from"./app-B5m7CcSj.js";const n={},o=a('<h2 id="项目背景" tabindex="-1"><a class="header-anchor" href="#项目背景"><span>项目背景</span></a></h2><p><code>薅羊毛</code>在大多数情况下都只是一句玩笑话，但职业的<a href="https://baike.baidu.com/item/%E7%BE%8A%E6%AF%9B%E5%85%9A" target="_blank" rel="noopener noreferrer">羊毛党</a>，或由此而衍生出来的<a href="https://baike.baidu.com/item/%E9%BB%91%E7%81%B0%E4%BA%A7" target="_blank" rel="noopener noreferrer">黑灰产</a>们，是让许多互联网公司都非常头疼的存在。</p><p>哪里有利益，哪里就有<a href="https://baike.baidu.com/item/%E9%BB%91%E7%81%B0%E4%BA%A7" target="_blank" rel="noopener noreferrer">黑灰产</a>——一只<code>蚊子腿</code>虽然无肉，但千万只，甚至上亿只<code>蚊子腿</code>的性质可就不一样了。</p><p><a href="https://baike.baidu.com/item/%E7%BE%8A%E6%AF%9B%E5%85%9A" target="_blank" rel="noopener noreferrer">羊毛党</a>正是利用平台漏洞，然后通过机器的<code>批量</code> + <code>自动化</code>操作，达到攫取惊人利益的目的。</p><p>下面是典型的（无门槛）优惠券场景下<a href="https://baike.baidu.com/item/%E7%BE%8A%E6%AF%9B%E5%85%9A" target="_blank" rel="noopener noreferrer">羊毛党</a>的<code>作案</code>链路。</p><figure><img src="https://tianmazuo.com/application/case/risk/risk-01.png" alt="羊毛党们的作案链路" tabindex="0" loading="lazy"><figcaption>羊毛党们的作案链路</figcaption></figure><p>俗话说<code>防患于未然</code>，从图上可以看到，只要能够通过技术手段实禁止批量脚本的执行，就已经将大部分的低级<a href="https://baike.baidu.com/item/%E7%BE%8A%E6%AF%9B%E5%85%9A" target="_blank" rel="noopener noreferrer">羊毛党</a>们挡在了门外。</p><p>至于说如何识别出<code>恶意薅羊毛</code>的行为，这也不难——因为在<a href="https://en.wikipedia.org/wiki/Risk_control" target="_blank" rel="noopener noreferrer">风控系统</a>常年与<a href="https://baike.baidu.com/item/%E7%BE%8A%E6%AF%9B%E5%85%9A" target="_blank" rel="noopener noreferrer">羊毛党</a>们的较量中，已经对这一群体的特征有了非常清晰的判断依据。</p><ul><li><p>行为目的明确，他们的行为序列通常是<code>登录-领券-下单</code>。</p></li><li><p>只对客单价低的羊毛商品感兴趣，尤其是单价为<code>5~20元</code>的商品。</p></li><li><p>下单商品种类单一：订单商品种类超过一半为折扣商品。</p></li><li><p>年/月商品订单量少，因为他们只对羊毛商品感兴趣。</p></li><li><p>下单时间通常在深夜，比如凌晨1点至5点期间。</p></li><li><p>年/月登录次数少：羊毛党目的性强。</p></li><li><p>注册时间短，有的是当天注册当天就下单，根本不养号。</p></li><li><p>IP和设备更换频繁。</p></li><li><p>IP和设备出现重叠。</p></li></ul><p>基于以上这些明确的判断依据，就可以制定有针对性的业务规则指标。</p><table><thead><tr><th style="text-align:center;">风控指标</th><th style="text-align:left;">举例说明</th></tr></thead><tbody><tr><td style="text-align:center;">静态指标</td><td style="text-align:left;">1. 下单地址是否常用地址<br>2. 券使用的用户没有使用常用IP下单</td></tr><tr><td style="text-align:center;">统计指标</td><td style="text-align:left;">1. 账号近1分钟内登录次数 &gt;= 3次<br>2. 用户领券数量超过50张<br>3. 领券用户近10天未登录但促销时有登录</td></tr><tr><td style="text-align:center;">关联指标</td><td style="text-align:left;">修改账号绑定手机号后马上下单</td></tr><tr><td style="text-align:center;">行为指标</td><td style="text-align:left;">用户行为序列为<code>登录-领券-查看商品-添加购物车-下单</code></td></tr></tbody></table><p>上面这些风控指标或风控规则都是需要存储到<a href="https://www.mysql.com" target="_blank" rel="noopener noreferrer">MySQL</a>数据库中去的。</p><br><h2 id="技术选型" tabindex="-1"><a class="header-anchor" href="#技术选型"><span>技术选型</span></a></h2><p>一个功能相对完备的风控系统需要通常会包括<code>风控运营管理</code>、<code>风控业务控制</code>和<code>风控规则引擎</code>这三大部分。</p><p>当然，具体的功能结构和模块都是由不同的业务需求及其场景决定的。</p><ul><li><p><code>风控运营管理</code>：一套提供给运营人员使用的风控管理系统，包括设定<code>风控策略</code>、<code>黑白名单管理</code>、<code>权限设置</code>，以及展示风控事件的<code>数据大屏</code>等功能，这一块属于常规的业务系统开发，不管是<a href="https://www.oracle.com/java/technologies/downloads/archive/" target="_blank" rel="noopener noreferrer">Java</a>、<a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">Python</a>还是<a href="https://www.go.dev/" target="_blank" rel="noopener noreferrer">Go</a>，都可以轻松实现，使用<code>MVC三层架构</code>、<code>微服务</code>或者是<code>DDD</code>都可以。</p></li><li><p><code>风控业务控制</code>：用来控制整个风控事件的处理流程，例如，对于任何一个风控事件的处理，首先从<a href="https://www.mysql.com" target="_blank" rel="noopener noreferrer">MySQL</a>中加载<code>风控规则</code>，然后判断它具体的<code>场景行为</code>，然后进行简单的<code>黑白名单</code>判断，之后再进行<code>指标计算</code>，最后决定执行哪种<code>风控策略</code>。</p></li><li><p><code>风控规则引擎</code>：这是整个风控系统的核心部分。</p><ul><li><p><code>事件总线</code>：通常会使用<a href="https://kafka.apache.org/" target="_blank" rel="noopener noreferrer">Kafka</a>、<a href="https://flume.apache.org/" target="_blank" rel="noopener noreferrer">Flume</a>或<a href="https://sqoop.apache.org/" target="_blank" rel="noopener noreferrer">Sqoop</a>实现各类客户端埋点上报数据、服务端日志信息及业务行为事件的采集，或者将这些数据存储起来供后续使用，或者直接输送到规则引擎中进行实时计算。这里进行了简化，仅以<a href="https://kafka.apache.org/" target="_blank" rel="noopener noreferrer">Kafka</a> + <a href="https://flume.apache.org/" target="_blank" rel="noopener noreferrer">Flume</a>的组合实现对业务日志的采集。</p><p>下面是几种不同数据采集组件之间的简单比较。</p><table><thead><tr><th style="text-align:center;">对比项</th><th style="text-align:center;">Flume</th><th style="text-align:center;">Logstash</th><th style="text-align:center;">Sqoop</th><th style="text-align:center;">Filebeat</th></tr></thead><tbody><tr><td style="text-align:center;">运行方式</td><td style="text-align:center;">基于JVM</td><td style="text-align:center;">基于JRuby</td><td style="text-align:center;">基于JVM</td><td style="text-align:center;">基于Go</td></tr><tr><td style="text-align:center;">性能消耗</td><td style="text-align:center;">高</td><td style="text-align:center;">高</td><td style="text-align:center;">大数据量时受限</td><td style="text-align:center;">低</td></tr><tr><td style="text-align:center;">多数据源</td><td style="text-align:center;">支持</td><td style="text-align:center;">支持</td><td style="text-align:center;">有限</td><td style="text-align:center;">仅支持文件</td></tr><tr><td style="text-align:center;">多目的地</td><td style="text-align:center;">支持</td><td style="text-align:center;">支持</td><td style="text-align:center;">有限</td><td style="text-align:center;">支持</td></tr><tr><td style="text-align:center;">自定义功能</td><td style="text-align:center;">支持</td><td style="text-align:center;">支持</td><td style="text-align:center;">通过插件扩展</td><td style="text-align:center;">弱</td></tr><tr><td style="text-align:center;">维护成本</td><td style="text-align:center;">低</td><td style="text-align:center;">高</td><td style="text-align:center;">高</td><td style="text-align:center;">低</td></tr><tr><td style="text-align:center;">应用场景</td><td style="text-align:center;">业务日志采集</td><td style="text-align:center;">运维数据采集</td><td style="text-align:center;">业务数据采集</td><td style="text-align:center;">通用</td></tr></tbody></table></li><li><p><code>规则引擎</code>：计算各类风控事件数据是否符合风控指标的要求。常规组合是<a href="https://flink.apache.org/" target="_blank" rel="noopener noreferrer">Flink</a>，再加上辅助的规则引擎，例如，<a href="https://www.drools.org/" target="_blank" rel="noopener noreferrer">Drools</a>、<a href="https://groovy-lang.org/" target="_blank" rel="noopener noreferrer">Groovy</a>，或者是更轻量级的<a href="https://code.google.com/archive/p/aviator/" target="_blank" rel="noopener noreferrer">Aviator</a>。</p></li><li><p><code>数据持久化</code>：存储风控指标计算过程中需要用到的各种数据，这些数据有些是实时的，有些是离线的。一些中间结算结果会保存到<a href="https://www.redis.io/" target="_blank" rel="noopener noreferrer">Redis</a>，而一些离线数据，也往往会通过<a href="https://www.clickhouse.com/" target="_blank" rel="noopener noreferrer">Clickhouse</a>先执行一些预计算后再交由<a href="https://flink.apache.org/" target="_blank" rel="noopener noreferrer">Flink</a>处理，这样可以加快<code>规则引擎</code>的计算速度，提高整体性能。</p></li></ul></li></ul><br><h2 id="整体架构" tabindex="-1"><a class="header-anchor" href="#整体架构"><span>整体架构</span></a></h2><p>基于以上分析和设计，整个风控系统的架构如下。</p><figure><img src="https://tianmazuo.com/application/case/risk/risk-02.png" alt="风控系统架构" tabindex="0" loading="lazy"><figcaption>风控系统架构</figcaption></figure><p>而这里要展示的是风控系统核心的<code>指标计算</code>和<code>行为序列识别</code>的过程，因为它是整个风控系统最精华、技术含量最高的部分。</p><figure><img src="https://tianmazuo.com/application/case/risk/risk-03.png" alt="风控系统核心的指标计算过程" tabindex="0" loading="lazy"><figcaption>风控系统核心的指标计算过程</figcaption></figure>',23),l=[o];function i(c,d){return r(),t("div",null,l)}const g=e(n,[["render",i],["__file","index.html.vue"]]),h=JSON.parse('{"path":"/application/case/risk/","title":"风控项目说明","lang":"zh-CN","frontmatter":{"title":"风控项目说明","icon":"thumbtack","category":["案例","大数据风控"],"tag":["案例","大数据风控"],"date":"2024-03-01T00:00:00.000Z","isOriginal":true,"star":true,"description":"项目背景 薅羊毛在大多数情况下都只是一句玩笑话，但职业的羊毛党，或由此而衍生出来的黑灰产们，是让许多互联网公司都非常头疼的存在。 哪里有利益，哪里就有黑灰产——一只蚊子腿虽然无肉，但千万只，甚至上亿只蚊子腿的性质可就不一样了。 羊毛党正是利用平台漏洞，然后通过机器的批量 + 自动化操作，达到攫取惊人利益的目的。 下面是典型的（无门槛）优惠券场景下羊毛党...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/application/case/risk/"}],["meta",{"property":"og:site_name","content":"添码座"}],["meta",{"property":"og:title","content":"风控项目说明"}],["meta",{"property":"og:description","content":"项目背景 薅羊毛在大多数情况下都只是一句玩笑话，但职业的羊毛党，或由此而衍生出来的黑灰产们，是让许多互联网公司都非常头疼的存在。 哪里有利益，哪里就有黑灰产——一只蚊子腿虽然无肉，但千万只，甚至上亿只蚊子腿的性质可就不一样了。 羊毛党正是利用平台漏洞，然后通过机器的批量 + 自动化操作，达到攫取惊人利益的目的。 下面是典型的（无门槛）优惠券场景下羊毛党..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://tianmazuo.com/application/case/risk/risk-01.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"添码座"}],["meta",{"property":"article:tag","content":"案例"}],["meta",{"property":"article:tag","content":"大数据风控"}],["meta",{"property":"article:published_time","content":"2024-03-01T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"风控项目说明\\",\\"image\\":[\\"https://tianmazuo.com/application/case/risk/risk-01.png\\",\\"https://tianmazuo.com/application/case/risk/risk-02.png\\",\\"https://tianmazuo.com/application/case/risk/risk-03.png\\"],\\"datePublished\\":\\"2024-03-01T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"添码座\\",\\"url\\":\\"https://www.tianmazuo.com/about/\\"}]}"]]},"headers":[{"level":2,"title":"项目背景","slug":"项目背景","link":"#项目背景","children":[]},{"level":2,"title":"技术选型","slug":"技术选型","link":"#技术选型","children":[]},{"level":2,"title":"整体架构","slug":"整体架构","link":"#整体架构","children":[]}],"git":{},"readingTime":{"minutes":5.1,"words":1531},"filePathRelative":"application/case/risk/README.md","localizedDate":"2024年3月1日","excerpt":"<h2>项目背景</h2>\\n<p><code>薅羊毛</code>在大多数情况下都只是一句玩笑话，但职业的<a href=\\"https://baike.baidu.com/item/%E7%BE%8A%E6%AF%9B%E5%85%9A\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">羊毛党</a>，或由此而衍生出来的<a href=\\"https://baike.baidu.com/item/%E9%BB%91%E7%81%B0%E4%BA%A7\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">黑灰产</a>们，是让许多互联网公司都非常头疼的存在。</p>","autoDesc":true}');export{g as comp,h as data};
