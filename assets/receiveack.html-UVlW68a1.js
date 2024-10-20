import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,o as c,d as t}from"./app-CiwSPZKD.js";const d={},r=t('<p>在知道了<code>发送者</code>的发送和存储机制之后，就可以来看看<code>消费者</code>的接收和消费机制了。</p><br><h2 id="消费者组" tabindex="-1"><a class="header-anchor" href="#消费者组"><span>消费者组</span></a></h2><p><code>组（Group）</code>是对<code>Topic</code>概念的进一步划分，类似于在大主题中再区分出不同的子主题。</p><figure><img src="https://tianmazuo.com/technology/middleware/rocketmq/rocketmq-20.png" alt="消费者组" tabindex="0" loading="lazy"><figcaption>消费者组</figcaption></figure><p>当消息从<code>Producer生产者</code>经过<code>Broker</code>发出后，在正常情况下，关注同一个<code>TopicA</code>的两个消费者组<code>stock_consume_group</code>和<code>markting_consume_group</code>都可以接收到这条消息，且在正常情况下，只有其中一台机器能够接收到消息。</p><p>也就是说，不管有多少个子系统，每个系统都能够接收到相同<code>Topic</code>发出的消息。但每个子系统不管有多少台机器，始终只有一台机器能够接收到消息。</p><p>但如果希望子系统中的<code>每台机器</code>都能够接收到这条消息，那么就需要知道<code>集群模式</code>和<code>广播模式</code>的区别了。</p><ul><li><p><code>集群模式</code>，这是<a href="https://rocketmq.apache.org/" target="_blank" rel="noopener noreferrer">RocketMQ</a>默认消息消费模式，它会把收到的消息只转交给组内的某一台机器处理。</p></li><li><p><code>广播模式</code>则刚好相反，它会让组内的所有机器都来处理同一条消息。</p></li></ul><p><a href="https://rocketmq.apache.org/" target="_blank" rel="noopener noreferrer">RocketMQ</a>将一个<code>Topic</code>的多个<code>MessageQueue</code>分布在多个<code>Broker</code>上，出于同样的减压策略，它也将同一个<code>MessageQueue</code>均匀地分给消费者组的多台机器来消费。</p><figure><img src="https://tianmazuo.com/technology/middleware/rocketmq/rocketmq-21.png" alt="理想情况下均匀地消费数据" tabindex="0" loading="lazy"><figcaption>理想情况下均匀地消费数据</figcaption></figure><p>正如上图显示的一样，理想情况下，应该是以这样<code>理想</code>的方式来消费消息的：每个<code>MessageQueue</code>都有各自的归属。</p><p>之前说过两种不同的消息消费模式：<code>Push模式</code>和<code>Pull模式</code>，其实它们本质上都是基于消费者主动发送拉取数据的请求来实现的，只不过在<code>Push模式</code>下，<code>Broker</code>发送消息的时效性更好。</p><p>在<code>Push模式</code>下还有<code>消费请求挂起</code>和<code>长轮询</code>的机制。</p><ul><li><p><code>消费请求挂起</code>是指当请求发送到<code>Broker</code>后却没有新的消息可供处理时，<a href="https://rocketmq.apache.org/" target="_blank" rel="noopener noreferrer">RocketMQ</a>就会将请求线程挂起（默认15秒）。</p></li><li><p>当请求被挂起后，就会有一个后台<code>长轮询</code>线程定期去检查是否有新消息到来，如果有就唤醒挂起的线程，然后把消息返回回来。</p></li></ul><br><h2 id="消息读取" tabindex="-1"><a class="header-anchor" href="#消息读取"><span>消息读取</span></a></h2><ul><li><p><code>Broker</code>在收到拉取消息的请求之后，确切地说是某个具体的<code>MessageQueue</code>（例如<code>m0</code>）收到拉取消息的请求之后，它就会找到自己对应的<code>ConsumeQueue</code>（例如<code>c0</code>），然后<code>Broker</code>将根据<code>ConsumeQueue</code>中保存的元信息到<code>CommitLog</code>中去寻找对应的消息数据，并返回给<code>Consumer消费者</code>。</p></li><li><p>当<code>Consumer消费者</code>消费完拉取到的数据后，会向<code>Broker</code>提交一个<code>消息消费进度</code>，其实就是一个称为<code>ConsumeOffset</code>的元数据。这个提交<code>消息消费进度</code>的过程就称之为<code>ACK</code>。这样，当下次<code>Consumer消费者</code>再执行拉取请求时，<code>Broker</code>就知道从哪个<code>MessageQueue</code>对应的<code>ConsumeQueue</code>的哪个位置去找数据了。</p></li></ul><figure><img src="https://tianmazuo.com/technology/middleware/rocketmq/rocketmq-22.png" alt="Consumer消费者提交消费进度" tabindex="0" loading="lazy"><figcaption>Consumer消费者提交消费进度</figcaption></figure><ul><li><p>当消费者<code>启动</code>、<code>宕机</code>或者<code>扩容</code>的时候，<a href="https://rocketmq.apache.org/" target="_blank" rel="noopener noreferrer">RocketMQ</a>都会让各个消费者所在的机器执行一次称为<code>Rebalance</code>的过程，它会为消费者重新分配可以处理的<code>MessageQueue</code>。例如，如果上图中的<code>机器4</code>宕机了，那么它之前负责处理的<code>MessageQueue</code>就会被重新分配给<code>机器3</code>；而如果<code>机器4</code>恢复过来，那么之前的<code>MessageQueue</code>可能又会被重新分配给它。虽然在不同的版本中这个<code>Rebalance</code>的执行方式会稍有不同，但负载均衡的思想是一致的。</p></li><li><p>消费者在拉取数据的时候，<code>Broker</code>会同时从<code>磁盘</code>和<code>Cache</code>中读取数据，具体过程是这样的。</p><ul><li><p>先从<code>Cache</code>中读取<code>ConsumeQueue</code>的元信息。</p></li><li><p>然后根据元信息再到<code>Cache</code>中读取<code>CommitLog</code>。</p></li><li><p>最后再从<code>磁盘</code>中读取完整的<code>CommitLog</code>。</p></li></ul></li><li><p>如果消费者能够紧跟生产者的步调，那么每次大概率都会从<code>Cache</code>中拿到的数据；反之，如果<code>Broker</code>负载很高，或者消费者处理速率很低，那么拉取到的数据也大概率会是磁盘中的数据。</p></li></ul>',20),a=[r];function i(p,n){return c(),o("div",null,a)}const s=e(d,[["render",i],["__file","receiveack.html.vue"]]),u=JSON.parse('{"path":"/technology/middleware/rocketmq/receiveack.html","title":"接收消息与ACK机制","lang":"zh-CN","frontmatter":{"title":"接收消息与ACK机制","icon":"envelope-circle-check","category":["中间件","RocketMQ"],"tag":["中间件","RocketMQ"],"date":"2023-02-23T00:00:00.000Z","isOriginal":true,"star":true,"description":"在知道了发送者的发送和存储机制之后，就可以来看看消费者的接收和消费机制了。 消费者组 组（Group）是对Topic概念的进一步划分，类似于在大主题中再区分出不同的子主题。 消费者组消费者组 当消息从Producer生产者经过Broker发出后，在正常情况下，关注同一个TopicA的两个消费者组stock_consume_group和markting_...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/technology/middleware/rocketmq/receiveack.html"}],["meta",{"property":"og:site_name","content":"添码座"}],["meta",{"property":"og:title","content":"接收消息与ACK机制"}],["meta",{"property":"og:description","content":"在知道了发送者的发送和存储机制之后，就可以来看看消费者的接收和消费机制了。 消费者组 组（Group）是对Topic概念的进一步划分，类似于在大主题中再区分出不同的子主题。 消费者组消费者组 当消息从Producer生产者经过Broker发出后，在正常情况下，关注同一个TopicA的两个消费者组stock_consume_group和markting_..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://tianmazuo.com/technology/middleware/rocketmq/rocketmq-20.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"添码座"}],["meta",{"property":"article:tag","content":"中间件"}],["meta",{"property":"article:tag","content":"RocketMQ"}],["meta",{"property":"article:published_time","content":"2023-02-23T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"接收消息与ACK机制\\",\\"image\\":[\\"https://tianmazuo.com/technology/middleware/rocketmq/rocketmq-20.png\\",\\"https://tianmazuo.com/technology/middleware/rocketmq/rocketmq-21.png\\",\\"https://tianmazuo.com/technology/middleware/rocketmq/rocketmq-22.png\\"],\\"datePublished\\":\\"2023-02-23T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"添码座\\",\\"url\\":\\"https://www.tianmazuo.com/about/\\"}]}"]]},"headers":[{"level":2,"title":"消费者组","slug":"消费者组","link":"#消费者组","children":[]},{"level":2,"title":"消息读取","slug":"消息读取","link":"#消息读取","children":[]}],"git":{},"readingTime":{"minutes":3.8,"words":1141},"filePathRelative":"technology/middleware/rocketmq/receiveack.md","localizedDate":"2023年2月23日","excerpt":"<p>在知道了<code>发送者</code>的发送和存储机制之后，就可以来看看<code>消费者</code>的接收和消费机制了。</p>\\n<br>\\n<h2>消费者组</h2>\\n<p><code>组（Group）</code>是对<code>Topic</code>概念的进一步划分，类似于在大主题中再区分出不同的子主题。</p>\\n<figure><img src=\\"https://tianmazuo.com/technology/middleware/rocketmq/rocketmq-20.png\\" alt=\\"消费者组\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>消费者组</figcaption></figure>","autoDesc":true}');export{s as comp,u as data};