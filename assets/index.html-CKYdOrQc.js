import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as a,d as e}from"./app-B5m7CcSj.js";const n={},l=e(`<h2 id="什么是kafka" tabindex="-1"><a class="header-anchor" href="#什么是kafka"><span>什么是Kafka</span></a></h2><p><a href="https://kafka.apache.org/" target="_blank" rel="noopener noreferrer">Kafka</a>和<a href="https://rocketmq.apache.org/" target="_blank" rel="noopener noreferrer">RocketMQ</a>一样，也是一个分布式的消息队列系统，但它和<a href="https://rocketmq.apache.org/" target="_blank" rel="noopener noreferrer">RocketMQ</a>的一个显著区别在于其<code>超高吞吐量</code>，这也是它最大的特色。</p><p>之所以如此，主要是因为它利用了<code>磁盘顺序读写速度 &gt; 内存随机读写速度</code>这一计算机系统的特性，以致于<a href="https://kafka.apache.org/" target="_blank" rel="noopener noreferrer">Kafka</a>可以达到每秒百万级别的消息生产和消费速度。</p><p><a href="https://kafka.apache.org/" target="_blank" rel="noopener noreferrer">Kafka</a>主要应用在一些需要超高并发但<code>无需事务性保证</code>的业务场景中，例如<code>秒杀</code>、大数据<a href="https://en.wikipedia.org/wiki/Extract,_transform,_load" target="_blank" rel="noopener noreferrer">ETL</a>，这一点也和<a href="https://rocketmq.apache.org/" target="_blank" rel="noopener noreferrer">RocketMQ</a>显著不同。</p><p><a href="https://rocketmq.apache.org/" target="_blank" rel="noopener noreferrer">RocketMQ</a>的很多设计灵感都来自于<a href="https://kafka.apache.org/" target="_blank" rel="noopener noreferrer">Kafka</a>，早期也借鉴了<a href="https://kafka.apache.org/" target="_blank" rel="noopener noreferrer">Kafka</a>的许多优秀设计。因此，<a href="https://kafka.apache.org/" target="_blank" rel="noopener noreferrer">Kafka</a>中自然也有<code>Producer</code>、<code>Consumer</code>、<code>Broker</code>、<code>Group</code>和<code>Topic</code>这些组件，它们先于<a href="https://rocketmq.apache.org/" target="_blank" rel="noopener noreferrer">RocketMQ</a>中的同类组件而存在。</p><figure><img src="https://tianmazuo.com/technology/middleware/kafka/kafka-01.png" alt="Kafka组件架构" tabindex="0" loading="lazy"><figcaption>Kafka组件架构</figcaption></figure><ul><li><p><code>Broker</code>：消息的代理，它就是<a href="https://kafka.apache.org/" target="_blank" rel="noopener noreferrer">Kafka</a>集群中的一个节点，每个<code>Broker</code>中存在一个或多个<code>Topic</code>。</p></li><li><p><code>Topic</code>：消息主题，<a href="https://kafka.apache.org/" target="_blank" rel="noopener noreferrer">Kafka</a>处理不同消息的分类，是一个逻辑上的概念。</p></li><li><p><code>Partition</code>：它是<code>Topic</code>物理上的分组，每个<code>Topic</code>都由至少1个或多个<code>Partition</code>组成。</p></li><li><p><code>Message</code>：消息通信的基本单位，每个<code>Message</code>都属于某个<code>Partition</code>。</p></li><li><p><code>Producer</code>：消息生产者，负责向<code>Topic</code>中发送数据。</p></li><li><p><code>Consumer</code>：消息消费者，消费<code>Topic</code>中的数据。</p></li></ul><br><h2 id="docker部署" tabindex="-1"><a class="header-anchor" href="#docker部署"><span>Docker部署</span></a></h2><p>采用<code>docker-compose</code>统一管理<a href="https://zookeeper.apache.org/" target="_blank" rel="noopener noreferrer">ZooKeeper</a>和<a href="https://kafka.apache.org/" target="_blank" rel="noopener noreferrer">Kafka</a>的启停。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">version:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;3&#39;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">services:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  zookeeper:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    image:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> wurstmeister/zookeeper</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    container_name:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> zookeeper</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    environment:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">      TZ:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Asia/Shanghai</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    ulimits:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">      nofile:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        soft:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 65535</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        hard:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 65535</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">      nproc:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 65535</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    ports:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">      -</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;2181:2181&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  kafka:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    image:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> wurstmeister/kafka</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    container_name:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> kafka</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    depends_on:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">      -</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> zookeeper</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    ports:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">      -</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;9092:9092&quot;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    environment:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">      TZ:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Asia/Shanghai</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">      KAFKA_BROKER_ID:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">      KAFKA_ZOOKEEPER_CONNECT:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> zookeeper:2181</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">      KAFKA_ADVERTISED_HOST_NAME:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> kafka</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">      KAFKA_ADVERTISED_LISTENERS:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> PLAINTEXT://kafka:9092</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">      KAFKA_LISTENERS:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> PLAINTEXT://kafka:9092</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打开两个命令行终端，均进入<a href="https://kafka.apache.org/" target="_blank" rel="noopener noreferrer">Kafka</a>容器。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; docker exec -it &lt;容器ID&gt; bash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /opt/kafka_2.13-2.8.1/bin</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 可以使用如下命令控制Kafka</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 创建主题</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">sh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> kafka-topics.sh</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --create</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --zookeeper</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> zookeeper:2181</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --replication-factor</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --partitions</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --topic</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> test</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 查看主题</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">sh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> kafka-topics.sh</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --list</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --zookeeper</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> zookeeper:2181</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">sh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> kafka-topics.sh</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --describe</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --zookeeper</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> zookeeper:2181</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --topic</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> test</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 修改主题（注意：Partition的数量只能增加不能减少，也不支持topic重命名）</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">./bin/kafka-topics.sh</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --alter</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --zookeeper</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> localhost:2181</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --partitions</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 3</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --topic</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> test</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 删除主题</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">sh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> kafka-topics.sh</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --delete</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --zookeeper</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> zookeeper:2181</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --topic</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> test</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 生产消息</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">sh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> kafka-console-producer.sh</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --broker-list</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> localhost:9092</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --topic</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> test</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --producer-property</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;group.id=testGroup&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 消费消息</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">sh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> kafka-console-consumer.sh</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --bootstrap-server</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> localhost:9092</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --topic</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> test</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --group</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> testGroup</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 或者</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">sh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> kafka-console-consumer.sh</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --bootstrap-server</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> localhost:9092</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --from-beginning</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --topic</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> test</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="本机部署" tabindex="-1"><a class="header-anchor" href="#本机部署"><span>本机部署</span></a></h2><p>先分别下载并解压<a href="https://zookeeper.apache.org/" target="_blank" rel="noopener noreferrer">ZooKeeper</a>和<a href="https://kafka.apache.org/" target="_blank" rel="noopener noreferrer">Kafka</a>。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; cd /home/work</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 下载并解压zookeeper</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; wget https://dlcdn.apache.org/zookeeper/zookeeper-3.7.2/apache-zookeeper-3.7.2-bin.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; tar zxvf apache-zookeeper-3.7.2-bin.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; mv apache-zookeeper-3.7.2-bin zookeeper-3.7.2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 下载并解压kafka</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; wget https://downloads.apache.org/kafka/3.7.1/kafka_2.12-3.7.1.tgz</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; tar zxvf kafka_2.12-3.7.1.tgz</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后再分别修改<a href="https://zookeeper.apache.org/" target="_blank" rel="noopener noreferrer">ZooKeeper</a>和<a href="https://kafka.apache.org/" target="_blank" rel="noopener noreferrer">Kafka</a>的配置文件（它们默认就在<code>单机模式</code>下运行）。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 修改zookeeper的配置文件</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; cd /home/work/zookeeper-3.7.2/conf</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; cp zoo_sample.cfg zoo.cfg</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; vi zoo.cfg</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dataDir</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/home/work/volumes/zookeeper/data</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dataLogDir</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/home/work/volumes/zookeeper/logs</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 修改kafka的配置文件</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; cd /home/work/kafka_2.12-3.7.1/config</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; vi server.properties</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">listeners</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">PLAINTEXT://</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">本机IP</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">:9092</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># kafka存储核心数据的目录，并非日志</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">log.dirs</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">=/home/work/volumes/kafka/logs</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 如果zookeeper和kafka在同一台机器上就不用改其中的&quot;localhost&quot;（可选）</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">zookeeper.connect</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">=localhost:2181</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接着分别启动<a href="https://zookeeper.apache.org/" target="_blank" rel="noopener noreferrer">ZooKeeper</a>和<a href="https://kafka.apache.org/" target="_blank" rel="noopener noreferrer">Kafka</a>。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 启动zookeeper</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; cd /home/work/zookeeper-3.7.2/</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; ./bin/zkServer.sh start</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 启动kafka</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; cd /home/work/kafka_2.12-3.7.1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; ./bin/kafka-server-start.sh config/server.properties</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 或者以守护进程方式启动</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; ./bin/kafka-server-start.sh -daemon config/server.properties</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后通过<code>jps</code>或者相关命令查看进程是否启动成功。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; jps</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># zookeeper进程</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">400478</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> QuorumPeerMain</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># kafka进程</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">401114</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Kafka</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; cd /home/work/zookeeper-3.7.2/</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; ./bin/zkServer.sh status</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ZooKeeper</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> JMX</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> enabled</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> by</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> default</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Using</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /home/work/zookeeper-3.7.2/bin/../conf/zoo.cfg</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Client</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> port</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> found:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 2181.</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Client</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> address:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> localhost.</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Client</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> SSL:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> false</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">.</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Mode:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> standalone</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后可以通过和之前<a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">Docker</a>部署同样的方式控制<a href="https://kafka.apache.org/" target="_blank" rel="noopener noreferrer">Kafka</a>来创建<code>Topic</code>、发送消息和消费消息了，只不过有两个地方需要注意一下。</p><ul><li><p>是否需要修改<a href="https://zookeeper.apache.org/" target="_blank" rel="noopener noreferrer">ZooKeeper</a>的调用地址，默认是<code>localhost</code></p></li><li><p>注意<a href="https://kafka.apache.org/" target="_blank" rel="noopener noreferrer">Kafka</a>新老版本之间的命令的差异，否则会报<code>zookeeper is not a recognized option</code>错误。</p><ul><li>老版本命令参数：<code>...... --zookeeper localhost:2181 ......</code>。这里的<code>localhost</code>就是刚才修改<a href="https://kafka.apache.org/" target="_blank" rel="noopener noreferrer">Kafka</a>配置文件时指定的<code>zookeeper.connect</code>地址。 0</li><li>新版本命令参数：<code>...... --bootstrap-server 172.16.185.176:9092 ......</code>。这里的<code>172.16.185.176</code>就是刚才修改<a href="https://kafka.apache.org/" target="_blank" rel="noopener noreferrer">Kafka</a>配置文件时指定的本机<code>IP</code>。</li></ul></li></ul><p>如果是<a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">Docker</a>部署的话就不存在这些问题。</p>`,26),t=[l];function k(h,r){return a(),i("div",null,t)}const o=s(n,[["render",k],["__file","index.html.vue"]]),c=JSON.parse('{"path":"/technology/middleware/kafka/","title":"什么是Kafka？","lang":"zh-CN","frontmatter":{"title":"什么是Kafka？","icon":"message","category":["中间件","Kafka"],"tag":["中间件","Kafka"],"date":"2023-03-08T00:00:00.000Z","isOriginal":true,"star":true,"description":"什么是Kafka Kafka和RocketMQ一样，也是一个分布式的消息队列系统，但它和RocketMQ的一个显著区别在于其超高吞吐量，这也是它最大的特色。 之所以如此，主要是因为它利用了磁盘顺序读写速度 > 内存随机读写速度这一计算机系统的特性，以致于Kafka可以达到每秒百万级别的消息生产和消费速度。 Kafka主要应用在一些需要超高并发但无需事务...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/technology/middleware/kafka/"}],["meta",{"property":"og:site_name","content":"添码座"}],["meta",{"property":"og:title","content":"什么是Kafka？"}],["meta",{"property":"og:description","content":"什么是Kafka Kafka和RocketMQ一样，也是一个分布式的消息队列系统，但它和RocketMQ的一个显著区别在于其超高吞吐量，这也是它最大的特色。 之所以如此，主要是因为它利用了磁盘顺序读写速度 > 内存随机读写速度这一计算机系统的特性，以致于Kafka可以达到每秒百万级别的消息生产和消费速度。 Kafka主要应用在一些需要超高并发但无需事务..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://tianmazuo.com/technology/middleware/kafka/kafka-01.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"添码座"}],["meta",{"property":"article:tag","content":"中间件"}],["meta",{"property":"article:tag","content":"Kafka"}],["meta",{"property":"article:published_time","content":"2023-03-08T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"什么是Kafka？\\",\\"image\\":[\\"https://tianmazuo.com/technology/middleware/kafka/kafka-01.png\\"],\\"datePublished\\":\\"2023-03-08T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"添码座\\",\\"url\\":\\"https://www.tianmazuo.com/about/\\"}]}"]]},"headers":[{"level":2,"title":"什么是Kafka","slug":"什么是kafka","link":"#什么是kafka","children":[]},{"level":2,"title":"Docker部署","slug":"docker部署","link":"#docker部署","children":[]},{"level":2,"title":"本机部署","slug":"本机部署","link":"#本机部署","children":[]}],"git":{},"readingTime":{"minutes":3.8,"words":1140},"filePathRelative":"technology/middleware/kafka/README.md","localizedDate":"2023年3月8日","excerpt":"<h2>什么是Kafka</h2>\\n<p><a href=\\"https://kafka.apache.org/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Kafka</a>和<a href=\\"https://rocketmq.apache.org/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">RocketMQ</a>一样，也是一个分布式的消息队列系统，但它和<a href=\\"https://rocketmq.apache.org/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">RocketMQ</a>的一个显著区别在于其<code>超高吞吐量</code>，这也是它最大的特色。</p>","autoDesc":true}');export{o as comp,c as data};