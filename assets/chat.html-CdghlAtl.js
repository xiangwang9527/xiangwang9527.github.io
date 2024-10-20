import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as s,d as a}from"./app-B5m7CcSj.js";const t={},n=a(`<p>先创建一个名为<code>qq</code>的<code>Topic</code>。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; ./bin/kafka-topics.sh --create --bootstrap-server 172.16.185.176:9092 --replication-factor 1 --partitions 2 --topic qq</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Created</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> topic</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> qq.</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>然后再启动两个生产者<code>Producer</code>和两个消费者<code>Consumer</code>。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 先启动两个Producer</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; ./bin/kafka-console-producer.sh --broker-list 172.16.185.176:9092 --topic qq</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; ./bin/kafka-console-producer.sh --broker-list 172.16.185.176:9092 --topic qq</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 再启动两个Consumer</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; ./bin/kafka-console-consumer.sh --bootstrap-server 172.16.185.176:9092 --from-beginning --topic qq</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; ./bin/kafka-console-consumer.sh --bootstrap-server 172.16.185.176:9092 --from-beginning --topic qq</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://tianmazuo.com/technology/middleware/kafka/kafka-02.png" alt="用Kakfa创建的QQ群" tabindex="0" loading="lazy"><figcaption>用Kakfa创建的QQ群</figcaption></figure><p>启动之后，生产者<code>Producer</code>就可以自由地给消费者<code>Consumer</code>发送消息了。</p><p>这里的生产者<code>Producer</code>就相当于群主和副群主，而消费者<code>Consumer</code>则相当于群里面的成员。</p><p>唯一美中不足的是，群成员都被<code>禁言</code>了，只有群主（也就是生产者<code>Producer</code>）才能发消息。</p>`,8),l=[n];function r(o,c){return s(),i("div",null,l)}const h=e(t,[["render",r],["__file","chat.html.vue"]]),k=JSON.parse('{"path":"/technology/middleware/kafka/chat.html","title":"一个简单的聊天群","lang":"zh-CN","frontmatter":{"title":"一个简单的聊天群","icon":"message","category":["中间件","Kafka"],"tag":["中间件","Kafka"],"date":"2023-03-10T00:00:00.000Z","isOriginal":true,"star":true,"description":"先创建一个名为qq的Topic。 然后再启动两个生产者Producer和两个消费者Consumer。 用Kakfa创建的QQ群用Kakfa创建的QQ群 启动之后，生产者Producer就可以自由地给消费者Consumer发送消息了。 这里的生产者Producer就相当于群主和副群主，而消费者Consumer则相当于群里面的成员。 唯一美中不足的是，群成...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/technology/middleware/kafka/chat.html"}],["meta",{"property":"og:site_name","content":"添码座"}],["meta",{"property":"og:title","content":"一个简单的聊天群"}],["meta",{"property":"og:description","content":"先创建一个名为qq的Topic。 然后再启动两个生产者Producer和两个消费者Consumer。 用Kakfa创建的QQ群用Kakfa创建的QQ群 启动之后，生产者Producer就可以自由地给消费者Consumer发送消息了。 这里的生产者Producer就相当于群主和副群主，而消费者Consumer则相当于群里面的成员。 唯一美中不足的是，群成..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://tianmazuo.com/technology/middleware/kafka/kafka-02.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"添码座"}],["meta",{"property":"article:tag","content":"中间件"}],["meta",{"property":"article:tag","content":"Kafka"}],["meta",{"property":"article:published_time","content":"2023-03-10T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"一个简单的聊天群\\",\\"image\\":[\\"https://tianmazuo.com/technology/middleware/kafka/kafka-02.png\\"],\\"datePublished\\":\\"2023-03-10T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"添码座\\",\\"url\\":\\"https://www.tianmazuo.com/about/\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":0.75,"words":226},"filePathRelative":"technology/middleware/kafka/chat.md","localizedDate":"2023年3月10日","excerpt":"<p>先创建一个名为<code>qq</code>的<code>Topic</code>。</p>\\n<div class=\\"language-shell line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"shell\\" data-title=\\"shell\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">&gt; ./bin/kafka-topics.sh --create --bootstrap-server 172.16.185.176:9092 --replication-factor 1 --partitions 2 --topic qq</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">Created</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> topic</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> qq.</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{h as comp,k as data};