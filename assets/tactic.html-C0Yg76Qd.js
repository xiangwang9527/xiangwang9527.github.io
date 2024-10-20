import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as d,c as h,a as s,e as i,b as n,w as l,d as e,o as r}from"./app-CiwSPZKD.js";const p={},k=e(`<p><code>战略分析</code>完成之后，就到了<code>战术分析</code>阶段。</p><p>相对于<code>战略设计</code>的抽象，<code>战术设计</code>就比较具体了，它更多的是将业务需求映射到技术代码的层次结构上，设计<code>上下文</code>里都包含哪些类，这些类之间又该如何配合等。</p><figure><img src="https://tianmazuo.com/technology/engineering/domain/ddd-28.png" alt="DDD的战术设计路线图" tabindex="0" loading="lazy"><figcaption>DDD的战术设计路线图</figcaption></figure><p><code>战术设计</code>基本上由<code>实体</code>、<code>值对象</code>、<code>聚合</code>、<code>领域事件和命令</code>、<code>领域服务</code>、<code>工厂和资源库</code>、<code>充血模型</code>这几个主要部分组成。</p><p>在<code>战术设计</code>阶段，最好对照着<code>PM</code>给出的纯粹的不含任何技术的业务流程来进行，这个时候千万不要去考虑什么<code>表设计</code>、<code>ORM</code>、<code>微服务框架</code>、<code>缓存</code>、<code>MQ</code>之类的技术内容。</p><br><h2 id="实体和值对象" tabindex="-1"><a class="header-anchor" href="#实体和值对象"><span>实体和值对象</span></a></h2><p>在<a href="https://en.wikipedia.org/wiki/Domain-driven_design" target="_blank" rel="noopener noreferrer">DDD</a>中，<code>实体（Entity）</code>和<code>值对象（Value Object）</code>是两个比较核心的概念。</p><p><code>实体（Entity）</code>其实就是<a href="https://en.wikipedia.org/wiki/MVC" target="_blank" rel="noopener noreferrer">MVC</a>中的<code>实体类</code>，它有<code>唯一标识</code>，而且这个<code>唯一标识</code>在整个系统的上下文中都是唯一的。</p><p>例如，<code>Order（订单）</code>就是一个<code>实体</code>，它有<code>唯一标识</code>——<code>Id</code>，所有与之相关的业务，都是围绕这这个<code>Id</code>进行的。</p><p>除了这个<code>Id</code>，其他的属性都是可以变化的，例如，<code>状态</code>、<code>收件地址</code>或者<code>快照</code>。</p><p>在系统的上下文环境里，每一个<code>子域</code>或者<code>限界上下文</code>中都有若干个这种<code>实体</code>，它们撑起了整个项目的业务骨架。</p><p>所谓<code>值对象（Value Object）</code>，它既可以是<code>实体</code>，也可以是某个单纯的数值，但它和<code>实体</code>有两点不同。</p><ul><li><p><code>值对象</code>没有<code>唯一标识</code>，这意味着要判断两个<code>值对象</code>是否等同，就要判断它们所有的属性值是否都相同，这里的<code>唯一标识</code>指的并不是数据库中的<code>Id</code>，而是一种业务语义上的<code>Id</code>。</p></li><li><p><code>值对象</code>基本上是依附于某个<code>实体</code>而存在的，它不会单独出现在某个业务上下文中。例如，不同的<code>Order</code>可以使用相同或者不同的<code>DeliveryAddress（收货地址）</code>，或者<code>SKU（库存单元，也叫型号规格）</code> ，而<code>DeliveryAddress</code>或<code>SKU</code>脱离了<code>Order</code>，在业务上是没有单独存在的意义的。</p></li></ul><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">/**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> * Order实体类</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> *</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> */</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Order</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    // 唯一标识</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    private</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Long</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    // 下面都是值对象（也可以都是实体）</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    private</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> DeliveryAddress</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> deliveryAddress</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    private</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> PayType</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> payType</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    private</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> PaymentDetail</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> paymentDetail</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    private</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Snapshot</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> orderSnapshot</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    private</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Status</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> orderStatus</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>很多网络上的资料都说<code>值对象</code>跟着<code>实体</code>一起被创建，又一起被销毁。这种说法也是基于业务语义层面，而不是数据库层面的。</p><br><h2 id="聚合与聚合根" tabindex="-1"><a class="header-anchor" href="#聚合与聚合根"><span>聚合与聚合根</span></a></h2><p>所谓的<code>聚合（Aggregate）</code>，指的就是数据库中<code>主表</code>与<code>子表</code>的关系，例如，<code>Order（订单）</code>与<code>OrderItem（子订单）</code>。</p><p>这种关系和<code>实体-值对象</code>之间的关系稍稍有些不同：<code>OrderItem（子订单）</code>也是一个<code>实体（Entity）</code>，也有自己的<code>唯一标识</code>，它是有业务语义的，甚至是可以独立存在的。另一个例子就是风控中的<code>风控规则</code>和与之对应的若干条<code>风控规则详情</code>。</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">/**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> * 风控规则实体</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> *</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> */</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> RiskRule</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    // 唯一标识</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    private</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> String</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    // 每个规则详情也是一个实体，也有自己的唯一标识，通过组合不同的规则详情，可以组合出不同的规则</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    private</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> List</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">RuleDetails</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> ruleDetails</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果说<code>聚合</code>指的是一个整体，那么这个整体中起主导作用就被称为<code>聚合根（Aggregate Root）</code>。</p><p>在上面的例子中，<code>Order</code>和<code>RiskRule</code>都是<code>聚合根</code>。</p><p>如果<code>主-子</code>之间的从属关系是<code>聚合</code>，那么当<code>值对象</code>是一个<code>实体</code>的时候，<code>实体-值对象</code>之间也算是<code>聚合</code>关系。</p><p>说通俗点就是，一个<code>聚合</code>代表了多个<code>类</code>绑定在一起，而在这些聚合在一起的<code>类</code>中，放在最外面的，就是<code>聚合根</code>。</p><p>另外，很多资料都说<code>聚合</code>有<code>生命周期</code>：必须在创建的时候一起创建，更新的时候一起更新，删除的时候一起删除。</p><p>但我不这么认为，因为有几个明显的反例（这里的操作都是基于业务语义层面而非数据库层面）。</p><ul><li><p><code>订单</code>创建了，<code>订单项</code>和<code>订单快照</code>也会被一同创建，但<code>订单</code>更新和删除的时候却未必是这样。</p></li><li><p><code>风控策略</code>创建了，不一定要马上就创建<code>风控规则</code>，对于更新和删除也是这样（实际上，应该是先有<code>风控规则</code>，然后再来组装<code>风控策略</code>）。</p></li></ul><p>只是说，如果它们在生命周期上保持一致，对于业务的实现来说就会<code>显得更完整</code>而已，但实际上，处理方式是根据业务需要而定的，并不是完全照搬理论。</p><p>显然，一个<code>聚合</code>里可以包含<code>实体</code>，也可以再包含其他<code>聚合</code>——它可以是多个层次的。</p><p>另外，<code>实体-值对象</code>和<code>实体-实体</code>这种关系其实并没有本质上的区别，在实际开发中如何划分，基本上是取决于<a href="https://en.wikipedia.org/wiki/Domain-driven_design" target="_blank" rel="noopener noreferrer">DDD</a>和业务语义对设计者的双重影响的结果。</p><p>例如，既可以将<code>DeliveryAddress</code>、<code>PayType</code>、<code>Snapshot</code>等指定为<code>值对象</code>，也可以将它们指定为<code>实体</code>，是哪一种都无所谓，只要这种划分能准确地匹配业务语义并且团队一致认可就好了。</p><br><h2 id="领域事件和命令" tabindex="-1"><a class="header-anchor" href="#领域事件和命令"><span>领域事件和命令</span></a></h2><p><a href="https://en.wikipedia.org/wiki/Domain-driven_design" target="_blank" rel="noopener noreferrer">DDD</a>认为，业务系统中的动作和行为，应该是由用户主动触发的，例如，用户括点击网页、小程序或APP中的按钮和链接。</p><p>这些由用户触发的系统行为，<a href="https://en.wikipedia.org/wiki/Domain-driven_design" target="_blank" rel="noopener noreferrer">DDD</a>称之为<code>命令（Command）</code>。</p><p>一般来说，这些<code>命令</code>对应的都是<code>创建</code>、<code>更新</code>或者<code>删除</code>数据的动作，而<code>查询</code>的动作，则称为<code>Query</code>——这也是<a href="https://en.wikipedia.org/wiki/Command_Query_Responsibility_Segregation" target="_blank" rel="noopener noreferrer">CQRS</a>为什么会叫<code>CQ</code>的原因（<code>C</code>代表<code>Command</code>，而<code>Q</code>则代表<code>Query</code>）。</p><p>相对于<code>命令（Command）</code>，<code>领域事件（Domain Event）</code>则是由系统触发的，包括某些定时的任务调度，例如，30分钟后删除未支付的失效订单、处理秒杀时队列中的请求、每日自动执行的异构数据同步等动作。</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">/**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> * 订单相关的命令和领域事件</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> *</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> */</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> OrderServiceEvent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    /**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">     * 创建订单</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">     * 在这里执行需要完成的订单创建流程</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">     * 这套流程的逻辑必须符合业务语义和流程的定义</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">     *</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">     */</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> createOrder</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">CreateOrderCommand</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> command</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    /**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">     * 其中某个业务动作，就是要删除那些超时未支付的订单</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">     *</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">     */</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    @</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">Scheduled</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">initialDelay</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1000</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> fixedDelay</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">5000</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Order</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> removeUnpaidOrder</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">RemoveOrderEvent</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> removeOrderEvent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        // 删除30分钟超时未支付的订单</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> removeOrderEvent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">createtime</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> &gt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">currentTimeMillis</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1800000</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">            // TODO 执行删除逻辑</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种<code>领域事件</code>更多的是属于业务流程的一部分，它让流程执行更完整，更符合业务的需要。</p><br><h2 id="业务组件" tabindex="-1"><a class="header-anchor" href="#业务组件"><span>业务组件</span></a></h2><p>在开发中有时候需要用到一些类或对象，但这些类或对象可能并不属于当前的限界上下文，或者也不需要保存它们，只是需要用到它们中的业务行为。</p><p>例如，在<code>订单限界上下文</code>中可能需要用到<code>User</code>类，但这个<code>User</code>并不属于<code>订单限界上下文</code>，那么此时这个<code>User</code>就是一个<code>业务组件</code>而非<code>实体</code>。</p><p>当然，也可把<code>User</code>类作为<code>实体</code>来对待，但一是没必要，二是还可能会造成数据的不一致。</p><p>或者，需要调用一些外部接口，如果单独把它们划分到某个<code>限界上下文</code>的话太麻烦，那么可以将它们封装为当前<code>限界上下文</code>的<code>业务组件</code>，方便统一调用。</p><br><h2 id="领域服务" tabindex="-1"><a class="header-anchor" href="#领域服务"><span>领域服务</span></a></h2><p>有时候，某些业务行为，既没有办法让用户来触发，也没办法把它放到业务流程中去的。也就是说，它既不是<code>命令（Command）</code>，也不是<code>领域事件（Domain Event）</code>。</p><p>例如，当用户一次性支付多笔订单时，很可能会需要临时（例如，<code>大促</code>期间）对这笔交易进行一个统一的计算，看看优惠后用户的实付金额应该是多少。又或者，某个商家发起了某个运营活动，参与活动的用户都可以获得一定的支付金额减免，活动完结后订单的支付金额恢复正常——这其实就是电商网站经常搞的<code>满减</code>、<code>满赠</code>和<code>凑单</code>等活动。</p><p>此时，上面的这些业务逻辑就不能放在<code>Order</code>里面去执行了。</p><p>所以，<a href="https://en.wikipedia.org/wiki/Domain-driven_design" target="_blank" rel="noopener noreferrer">DDD</a>为此又搞出了一个新的东西，叫<code>领域服务（Domain Service）</code>。</p><p>所谓<code>领域服务（Domain Service）</code>就是一些公共服务，用来集中处理多个<code>聚合</code>或<code>实体</code>的共同的业务需求。</p><p><code>领域服务</code>有的地方也被称为<code>业务组件</code>。</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">/**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> * 订单领域服务</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> *</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> */</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> OrderDomainService</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    /**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">     * 计算多个订单时应该享受的折扣</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">     *</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">     */</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> calculateDiscount</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">List</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Order</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">orders</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        // 订单优惠计算</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">orders</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">size</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> &amp;&amp;</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> orders</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">size</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">            // TODO 优惠计算</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            return</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 10</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">else</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">orders</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">size</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 3</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> &amp;&amp;</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> orders</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">size</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">            // TODO 优惠计算</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            return</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 20</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">else</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">orders</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">size</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">            // TODO 优惠计算</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            return</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 30</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 10</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>包含一些贴合业务语义的业务组件，在业务场景里，此时可能有一个概念，订单状态机，他不属于聚合、领域服务，他其实是一个业务组件</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> OrderStateMachine</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> // 贴合业务语义的业务组件</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>基本上，把<code>实体（Entity）</code>、<code>值对象（Value Object）</code>、<code>聚合（Aggregate）</code>、<code>聚合根（Aggregate Root）</code>、<code>命令（Command）</code>、<code>领域事件（Domain Event）</code>和<code>领域服务（Domain Service）</code>这些东西都搞出来以后，整个基于<a href="https://en.wikipedia.org/wiki/Domain-driven_design" target="_blank" rel="noopener noreferrer">DDD</a>的<code>战术设计</code>就算是完成了。</p><p>但要验证它们做的对不对，是否贴合业务，还得通过实际运行的结果来检验。例如，可以找不懂代码的客户或者<code>PM（产品经理）</code>来通过程序里的英文单词来走读代码。</p><p>如果他们通过走读就能理解代码确实符合业务语义，并且运行过程中也确实是符合业务流程和业务需求的话，才能说<a href="https://en.wikipedia.org/wiki/Domain-driven_design" target="_blank" rel="noopener noreferrer">DDD</a>的设计是成功的（这与是不是符合<a href="https://en.wikipedia.org/wiki/Domain-driven_design" target="_blank" rel="noopener noreferrer">DDD</a>的理论没有半毛钱的关系）。</p><br><h2 id="工厂和资源库" tabindex="-1"><a class="header-anchor" href="#工厂和资源库"><span>工厂和资源库</span></a></h2>`,62),o=s("a",{href:"https://en.wikipedia.org/wiki/Domain-driven_design",target:"_blank",rel:"noopener noreferrer"},"DDD",-1),c=s("a",{href:"https://en.wikipedia.org/wiki/MVC",target:"_blank",rel:"noopener noreferrer"},"MVC",-1),g=s("code",null,"工厂（Factory）",-1),A=s("a",{href:"https://spring.io/",target:"_blank",rel:"noopener noreferrer"},"Spring",-1),y=s("code",null,"BeanFactory",-1),v=s("code",null,"工厂类",-1),B=e('<li><p><code>资源库（Repository）</code>：很多地方都叫它<code>仓储</code>，不管叫什么，它只做一件事，就是承担<a href="https://en.wikipedia.org/wiki/MVC" target="_blank" rel="noopener noreferrer">MVC</a>中<code>DAO</code>那一层的职责，将<code>实体</code>和<code>值对象</code>等内容持久化到指定的存储介质中，或者从指定的存储介质中读取。这里的存储介质包括但不限于<a href="https://www.mysql.com" target="_blank" rel="noopener noreferrer">MySQL</a>、<a href="https://redis.io/" target="_blank" rel="noopener noreferrer">Redis</a>、<a href="https://www.elastic.co/" target="_blank" rel="noopener noreferrer">Elasticsearch</a>、<a href="https://neo4j.com/" target="_blank" rel="noopener noreferrer">Neo4J</a>、<a href="https://flume.apache.org/" target="_blank" rel="noopener noreferrer">Flume</a>，甚至是<a href="https://hadoop.apache.org" target="_blank" rel="noopener noreferrer">Hadoop</a>、<a href="https://spark.apache.org/" target="_blank" rel="noopener noreferrer">Spark</a>、<a href="https://flink.apache.org/" target="_blank" rel="noopener noreferrer">Flink</a>和<a href="https://www.clickhouse.com/" target="_blank" rel="noopener noreferrer">Clickhouse</a>等。</p></li>',1),m=e('<p>所以，如果看到某个类的命名是这样的<code>OrderFactory</code>或者<code>OrderRepository</code>，就应该知道它们是干嘛的了。</p><br><h2 id="充血模型" tabindex="-1"><a class="header-anchor" href="#充血模型"><span>充血模型</span></a></h2><p>在<a href="https://en.wikipedia.org/wiki/MVC" target="_blank" rel="noopener noreferrer">MVC</a>中，所有的<code>Bean（DTO）</code>基本上都是和数据库中的表一一对应的，而且也都只有<code>getter</code>和<code>setter</code>方法，这其实正是<a href="https://en.wikipedia.org/wiki/MVC" target="_blank" rel="noopener noreferrer">MVC</a>被诟病为<code>面向数据库编程</code>的根本问题所在。</p><p><a href="https://en.wikipedia.org/wiki/Domain-driven_design" target="_blank" rel="noopener noreferrer">DDD</a>把这种方式称为<code>贫血模型</code>。</p><p>所以针对这种<code>贫血</code>问题，<a href="https://en.wikipedia.org/wiki/Domain-driven_design" target="_blank" rel="noopener noreferrer">DDD</a>提出的解决方案是<code>充血模型</code>。</p><p>所谓<code>充血模型</code>说的是如果一个<code>实体</code>，既有自己的业务属性（<code>值对象</code>、<code>聚合</code>、<code>聚合根</code>），还有业务行为（<code>命令</code>、<code>领域事件</code>、<code>领域服务</code>），那它就具备了完整的业务语义。</p><p>其实就是把以前在<a href="https://en.wikipedia.org/wiki/MVC" target="_blank" rel="noopener noreferrer">MVC</a>中的各种<code>Service</code>层服务都整合进了<code>实体</code>之中，并且以更加<code>自然（业务化）</code>的方式来命名，例如，<code>命令</code>、<code>领域事件</code>和<code>领域服务</code>。</p><p>然后再将<code>DAO</code>层的东西封装成<code>资源库（Repository）</code>，加上分离出来的<code>工厂（Factory）</code>，让模型不但<code>充血</code>，还有<code>骨肉</code>。</p><p>只不过这种<code>充血</code>并不是胡乱<code>充</code>的，它需要充分了解业务，而且一定要符合流程和语义。</p><p>这也是<a href="https://en.wikipedia.org/wiki/Domain-driven_design" target="_blank" rel="noopener noreferrer">DDD</a>和<a href="https://en.wikipedia.org/wiki/MVC" target="_blank" rel="noopener noreferrer">MVC</a>主要的不同点。</p><br><h2 id="业务流程建模" tabindex="-1"><a class="header-anchor" href="#业务流程建模"><span>业务流程建模</span></a></h2><p>在搞清楚了<code>战术设计</code>中涉及到的那些诸多概念之后，就可以从业务的角度出发，来将它们整合到一起，形成一个完整的业务闭环了。</p><p>下图只展示了部分的<code>认养限界上下文</code>和<code>认养交付限界上下文</code>。</p><figure><img src="https://tianmazuo.com/technology/engineering/domain/ddd-29.png" alt="认养管理战术设计的业务流程建模" tabindex="0" loading="lazy"><figcaption>认养管理战术设计的业务流程建模</figcaption></figure>',16);function u(f,b){const a=d("RouteLink");return r(),h("div",null,[k,s("p",null,[i("上面东西都具有明显的业务属性，但为了符合"),n(a,{to:"/technology/engineering/patterns/#%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E6%89%80%E9%81%B5%E5%BE%AA%E7%9A%84%E5%8E%9F%E5%88%99"},{default:l(()=>[i("软件设计原则")]),_:1}),i("，"),o,i("又从"),c,i("里面搬了两样东西过来。")]),s("ul",null,[s("li",null,[s("p",null,[g,i("：参照"),A,i("中的"),y,i("方式，将复杂对象的创建过程单独封装到一个"),v,i("中，这样既符合"),n(a,{to:"/technology/engineering/principle/"},{default:l(()=>[i("单一职责原则")]),_:1}),i("，也不会造成某些类的职责过多，代码冗长。")])]),B]),m])}const E=t(p,[["render",u],["__file","tactic.html.vue"]]),C=JSON.parse('{"path":"/technology/engineering/domain/tactic.html","title":"战术设计","lang":"zh-CN","frontmatter":{"title":"战术设计","icon":"vihara","category":["开发过程","领域模型"],"tag":["开发过程","领域模型","战术设计"],"date":"2022-11-17T00:00:00.000Z","isOriginal":true,"star":true,"description":"战略分析完成之后，就到了战术分析阶段。 相对于战略设计的抽象，战术设计就比较具体了，它更多的是将业务需求映射到技术代码的层次结构上，设计上下文里都包含哪些类，这些类之间又该如何配合等。 DDD的战术设计路线图DDD的战术设计路线图 战术设计基本上由实体、值对象、聚合、领域事件和命令、领域服务、工厂和资源库、充血模型这几个主要部分组成。 在战术设计阶段，...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/technology/engineering/domain/tactic.html"}],["meta",{"property":"og:site_name","content":"添码座"}],["meta",{"property":"og:title","content":"战术设计"}],["meta",{"property":"og:description","content":"战略分析完成之后，就到了战术分析阶段。 相对于战略设计的抽象，战术设计就比较具体了，它更多的是将业务需求映射到技术代码的层次结构上，设计上下文里都包含哪些类，这些类之间又该如何配合等。 DDD的战术设计路线图DDD的战术设计路线图 战术设计基本上由实体、值对象、聚合、领域事件和命令、领域服务、工厂和资源库、充血模型这几个主要部分组成。 在战术设计阶段，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://tianmazuo.com/technology/engineering/domain/ddd-28.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"添码座"}],["meta",{"property":"article:tag","content":"开发过程"}],["meta",{"property":"article:tag","content":"领域模型"}],["meta",{"property":"article:tag","content":"战术设计"}],["meta",{"property":"article:published_time","content":"2022-11-17T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"战术设计\\",\\"image\\":[\\"https://tianmazuo.com/technology/engineering/domain/ddd-28.png\\",\\"https://tianmazuo.com/technology/engineering/domain/ddd-29.png\\"],\\"datePublished\\":\\"2022-11-17T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"添码座\\",\\"url\\":\\"https://www.tianmazuo.com/about/\\"}]}"]]},"headers":[{"level":2,"title":"实体和值对象","slug":"实体和值对象","link":"#实体和值对象","children":[]},{"level":2,"title":"聚合与聚合根","slug":"聚合与聚合根","link":"#聚合与聚合根","children":[]},{"level":2,"title":"领域事件和命令","slug":"领域事件和命令","link":"#领域事件和命令","children":[]},{"level":2,"title":"业务组件","slug":"业务组件","link":"#业务组件","children":[]},{"level":2,"title":"领域服务","slug":"领域服务","link":"#领域服务","children":[]},{"level":2,"title":"工厂和资源库","slug":"工厂和资源库","link":"#工厂和资源库","children":[]},{"level":2,"title":"充血模型","slug":"充血模型","link":"#充血模型","children":[]},{"level":2,"title":"业务流程建模","slug":"业务流程建模","link":"#业务流程建模","children":[]}],"git":{},"readingTime":{"minutes":11.36,"words":3408},"filePathRelative":"technology/engineering/domain/tactic.md","localizedDate":"2022年11月17日","excerpt":"<p><code>战略分析</code>完成之后，就到了<code>战术分析</code>阶段。</p>\\n<p>相对于<code>战略设计</code>的抽象，<code>战术设计</code>就比较具体了，它更多的是将业务需求映射到技术代码的层次结构上，设计<code>上下文</code>里都包含哪些类，这些类之间又该如何配合等。</p>\\n<figure><img src=\\"https://tianmazuo.com/technology/engineering/domain/ddd-28.png\\" alt=\\"DDD的战术设计路线图\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>DDD的战术设计路线图</figcaption></figure>","autoDesc":true}');export{E as comp,C as data};