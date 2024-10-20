import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,o as c,d as t}from"./app-CiwSPZKD.js";const r={},a=t('<h2 id="消息发送机制" tabindex="-1"><a class="header-anchor" href="#消息发送机制"><span>消息发送机制</span></a></h2><p>在<a href="https://rocketmq.apache.org/" target="_blank" rel="noopener noreferrer">RocketMQ</a>中，每个<code>Topic</code>的数据都是以分布式的方式存储在多个<code>Broker</code>中的。</p><figure><img src="https://tianmazuo.com/technology/middleware/rocketmq/rocketmq-14.png" alt="分布式存储Topic" tabindex="0" loading="lazy"><figcaption>分布式存储Topic</figcaption></figure><p>而决定数据存放策略的，就是<a href="https://rocketmq.apache.org/" target="_blank" rel="noopener noreferrer">RocketMQ</a>中的<code>MessageQueue</code>机制，而这个<code>MessageQueue</code>是需要在创建<code>Topic</code>时就设置好的。</p><p>例如，假设<code>TopicA</code>中有4000条数据，而现在有4个<code>MessageQueue</code>，那么可以根据某种策略来决定每个<code>MessageQueue</code>中存放多少条数据。可以在每个<code>MessageQueue</code>中存放1000条，也可以把这4000条数据全部存在一个<code>MessageQueue</code>中，或者以其他的方式。</p><p>如果把这4个<code>MessageQueue</code>放在2个不同的<code>Broker</code>中，那么可能会是这样的形式。</p><figure><img src="https://tianmazuo.com/technology/middleware/rocketmq/rocketmq-15.png" alt="MessageQueue作为一种分片机制" tabindex="0" loading="lazy"><figcaption>MessageQueue作为一种分片机制</figcaption></figure><p>所以，<code>MessageQueue</code>在<a href="https://rocketmq.apache.org/" target="_blank" rel="noopener noreferrer">RocketMQ</a>中所起作用其实就是一个<code>数据分片</code>机制：通过<code>MessageQueue</code>对<code>Topic</code>进行拆分，然后又将这些<code>MessageQueue</code>分别放在不同的<code>Broker</code>里面，从而实现分布式地调度与管理。</p><p>那消息生产者<code>Producer</code>在发送消息时是如何决定数据从哪个<code>MessageQueue</code>中发出去的呢？它在总体上遵循着这样一个过程。</p><ul><li>在消息发送之前，消息生产者<code>Producer</code>会从<code>NameServer</code>中获取<code>Topic</code>相关的路由数据，从而获得<code>Topic</code>的<code>MessageQueue</code>和<code>Broker</code>信息。</li></ul><figure><img src="https://tianmazuo.com/technology/middleware/rocketmq/rocketmq-16.png" alt="消息生产者获取Topic路由数据" tabindex="0" loading="lazy"><figcaption>消息生产者获取Topic路由数据</figcaption></figure><ul><li><p>假设是均匀写入数据的策略，那么当要发送20条数据时，<a href="https://rocketmq.apache.org/" target="_blank" rel="noopener noreferrer">RocketMQ</a>就会往4个<code>MessageQueue</code>中分别各写5条数据，这种分摊的做法可以有效减轻每个<code>Broker</code>的压力，从而实现高并发。</p></li><li><p>如果在运行过程中，某个<code>Broker</code>突然挂掉，而在<code>Slaver Broker</code>（假如有的话）切换为<code>Master Broker</code>的过程中，该<code>Broker</code>节点会存在短暂的不可用状态。所以，此时需要开启<a href="https://rocketmq.apache.org/" target="_blank" rel="noopener noreferrer">RocketMQ</a>中的一个开关：<code>sendLatencyFaultEnable</code>。</p></li></ul><figure><img src="https://tianmazuo.com/technology/middleware/rocketmq/rocketmq-17.png" alt="开启sendLatencyFaultEnable选项" tabindex="0" loading="lazy"><figcaption>开启sendLatencyFaultEnable选项</figcaption></figure><p>这是一种容错机制，它会让<a href="https://rocketmq.apache.org/" target="_blank" rel="noopener noreferrer">RocketMQ</a>自动避开有故障的<code>Broker</code>一段时间，直到它恢复正常之后再继续访问。</p><br><h2 id="消息存储机制" tabindex="-1"><a class="header-anchor" href="#消息存储机制"><span>消息存储机制</span></a></h2><p><code>Broker</code>发送完成之后并不是直接就把数据丢弃了，而是将它保存起来，因为此时消费者还没有消费数据。</p><p>而且，万一后续需要进行消息重发，或者执行数据回滚，都需要用到这些之前保存过的消息数据。</p><p>其实，<code>Broker</code>的数据存储是比较关键的一个环节，因为它的性能好坏直接决定了整个<a href="https://rocketmq.apache.org/" target="_blank" rel="noopener noreferrer">RocketMQ</a>的吞吐量，也就是消息写入和读取的速率。</p><p><code>Broker</code>消息数据存储的机制大概是这样的。</p><ul><li>当<code>Broker</code>收到一条消息数据时，会按照顺序追加的方式把它直接写到磁盘上一个叫做<code>CommitLog</code>的日志文件中（每个<code>CommitLog</code>文件大小限定1GB，写满后重新创建新的<code>CommitLog</code>文件继续写入）。</li></ul><figure><img src="https://tianmazuo.com/technology/middleware/rocketmq/rocketmq-18.png" alt="向CommitLog写入消息数据" tabindex="0" loading="lazy"><figcaption>向CommitLog写入消息数据</figcaption></figure><ul><li>在<code>Broker</code>中的每一个<code>MessageQueue</code>，都会有一个与之对应的<code>ConsumeQueue</code>，它的格式就像这样：<code>~/store/consumequeue/${topicId}/${messageQueueId}/${fileName}</code>，其中<code>${fileName}</code>里面保存的是某条消息在<code>CommitLog</code>中的偏移量、长度等信息，可以说它们是描述消息内容的元数据——很多个这样的<code>${fileName}</code>保存的就是<code>MessageQueue</code>中所有消息的元信息。</li></ul><p>例如，在<code>Broker</code>中存放了<code>TopicA</code>的两个<code>MessageQueue</code>，分别叫<code>m0</code>和<code>m1</code>，它们有自己对应的<code>ConsumeQueue</code>，分别叫<code>c0</code>和<code>c1</code>，那么<code>m0</code>和<code>m1</code>中的消息数据的元数据就存放在下面的文件中。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">~/store/consumequeue/TopicA/m0/c0</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">~/store/consumequeue/TopicA/m1/c1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>所以，可这样说：<code>CommitLog</code>保存的是消息内容，而<code>c0</code>和<code>c1</code>保存的是这些消息数据在<code>CommitLog</code>中的描述信息，相当于是<code>引用地址</code>。</p><p>也就是说：一个<code>CommitLog</code>可能对应着很多个<code>ConsumeQueue</code>的<code>${fileName}</code>。</p><figure><img src="https://tianmazuo.com/technology/middleware/rocketmq/rocketmq-19.png" alt="ConsumeQueue保存着CommitLog消息数据的元数据" tabindex="0" loading="lazy"><figcaption>ConsumeQueue保存着CommitLog消息数据的元数据</figcaption></figure><ul><li><p>每次<code>Broker</code>将消息数据写入到<code>CommitLog</code>时，都不会经过内存，而是直接写入磁盘，这一步对<a href="https://rocketmq.apache.org/" target="_blank" rel="noopener noreferrer">RocketMQ</a>的性能影响很大：<code>Broker</code>的写磁盘功能是借助操作系统的<a href="https://baike.baidu.com/item/Page%20Cache" target="_blank" rel="noopener noreferrer">Page Cache</a>和<code>顺序写</code>这两个机制完成的，这是一种<code>操作系统缓存 + 异步刷盘</code>来实现高性能磁盘写入的方式。</p></li><li><p>如果在刷盘时操作系统崩溃宕机，那么<code>Broker</code>可能会丢失数据。所以为了保证数据能够100%不丢失，就有了另一种<code>同步刷盘</code>策略，也就是当生产者<code>Producer</code>发送消息时会立即执行保存（刷盘）操作，只有刷盘成功才认为是消息发送成功，否则<code>Producer</code>会不停地重试，直到成功为止。但这种确保数据100%不丢失的策略是以损失性能为代价的。</p></li><li><p><code>异步刷盘</code>可以满足超高的写入吞吐量，但有丢失数据的风险，所以非常适用于秒杀场景；而<code>同步刷盘</code>可以100%保证数据不丢失，但写入性能大打折扣，所以适用于支付、退款、对账等涉及交易的场景。</p></li><li><p>除了<code>CommitLog</code>，<code>ConsumeQueue</code>也是通过同样的<a href="https://baike.baidu.com/item/Page%20Cache" target="_blank" rel="noopener noreferrer">Page Cache</a>和<code>顺序写</code>技术实现刷盘的，而且它和<code>CommitLog</code>不同的是，它几乎都是存放在操作系统的<code>Cache</code>中的，所以<a href="https://rocketmq.apache.org/" target="_blank" rel="noopener noreferrer">RocketMQ</a>才可能有那么高的读写性能及高吞吐量。</p></li></ul>',29),d=[a];function i(n,p){return c(),o("div",null,d)}const m=e(r,[["render",i],["__file","sendsave.html.vue"]]),g=JSON.parse('{"path":"/technology/middleware/rocketmq/sendsave.html","title":"发送与存储消息","lang":"zh-CN","frontmatter":{"title":"发送与存储消息","icon":"envelope-circle-check","category":["中间件","RocketMQ"],"tag":["中间件","RocketMQ"],"date":"2023-02-22T00:00:00.000Z","isOriginal":true,"star":true,"description":"消息发送机制 在RocketMQ中，每个Topic的数据都是以分布式的方式存储在多个Broker中的。 分布式存储Topic分布式存储Topic 而决定数据存放策略的，就是RocketMQ中的MessageQueue机制，而这个MessageQueue是需要在创建Topic时就设置好的。 例如，假设TopicA中有4000条数据，而现在有4个Messa...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/technology/middleware/rocketmq/sendsave.html"}],["meta",{"property":"og:site_name","content":"添码座"}],["meta",{"property":"og:title","content":"发送与存储消息"}],["meta",{"property":"og:description","content":"消息发送机制 在RocketMQ中，每个Topic的数据都是以分布式的方式存储在多个Broker中的。 分布式存储Topic分布式存储Topic 而决定数据存放策略的，就是RocketMQ中的MessageQueue机制，而这个MessageQueue是需要在创建Topic时就设置好的。 例如，假设TopicA中有4000条数据，而现在有4个Messa..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://tianmazuo.com/technology/middleware/rocketmq/rocketmq-14.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"添码座"}],["meta",{"property":"article:tag","content":"中间件"}],["meta",{"property":"article:tag","content":"RocketMQ"}],["meta",{"property":"article:published_time","content":"2023-02-22T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"发送与存储消息\\",\\"image\\":[\\"https://tianmazuo.com/technology/middleware/rocketmq/rocketmq-14.png\\",\\"https://tianmazuo.com/technology/middleware/rocketmq/rocketmq-15.png\\",\\"https://tianmazuo.com/technology/middleware/rocketmq/rocketmq-16.png\\",\\"https://tianmazuo.com/technology/middleware/rocketmq/rocketmq-17.png\\",\\"https://tianmazuo.com/technology/middleware/rocketmq/rocketmq-18.png\\",\\"https://tianmazuo.com/technology/middleware/rocketmq/rocketmq-19.png\\"],\\"datePublished\\":\\"2023-02-22T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"添码座\\",\\"url\\":\\"https://www.tianmazuo.com/about/\\"}]}"]]},"headers":[{"level":2,"title":"消息发送机制","slug":"消息发送机制","link":"#消息发送机制","children":[]},{"level":2,"title":"消息存储机制","slug":"消息存储机制","link":"#消息存储机制","children":[]}],"git":{},"readingTime":{"minutes":4.74,"words":1423},"filePathRelative":"technology/middleware/rocketmq/sendsave.md","localizedDate":"2023年2月22日","excerpt":"<h2>消息发送机制</h2>\\n<p>在<a href=\\"https://rocketmq.apache.org/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">RocketMQ</a>中，每个<code>Topic</code>的数据都是以分布式的方式存储在多个<code>Broker</code>中的。</p>\\n<figure><img src=\\"https://tianmazuo.com/technology/middleware/rocketmq/rocketmq-14.png\\" alt=\\"分布式存储Topic\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>分布式存储Topic</figcaption></figure>","autoDesc":true}');export{m as comp,g as data};
