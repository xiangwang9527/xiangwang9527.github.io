import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as a,d as n}from"./app-B5m7CcSj.js";const s={},t=n(`<p>在理解了<a href="https://en.wikipedia.org/wiki/Domain-driven_design" target="_blank" rel="noopener noreferrer">DDD</a><code>战术设计</code>中的那些概念以后，就可以试着整合代码了。</p><p>对于架构师或者<code>PM</code>来说，最核心的部分是<code>战略设计</code>。但对于工程师们来说，最核心的部分其实是<code>战术设计</code>以及它之后的<code>代码落地</code>，因为<code>Talk is cheap, Show me the code</code>。</p><p>在这一步，就可以充分考虑如何将那些<a href="https://en.wikipedia.org/wiki/Domain-driven_design" target="_blank" rel="noopener noreferrer">DDD</a>的概念变成可执行的代码了。</p><p>虽然在<a href="https://en.wikipedia.org/wiki/Domain-driven_design" target="_blank" rel="noopener noreferrer">DDD</a>的代码落地方案中，有<a href="https://en.wikipedia.org/wiki/Hexagonal_architecture_(software)" target="_blank" rel="noopener noreferrer">六边形架构</a>、<a href="https://medium.com/expedia-group-tech/onion-architecture-deed8a554423" target="_blank" rel="noopener noreferrer">洋葱架构</a>、<a href="https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html" target="_blank" rel="noopener noreferrer">整洁架构</a>、<a href="https://en.wikipedia.org/wiki/Command_Query_Responsibility_Segregation" target="_blank" rel="noopener noreferrer">CQRS架构</a>和基于<code>分层</code>的<a href="https://github.com/alibaba/COLA" target="_blank" rel="noopener noreferrer">COLA架构</a>这几种不同的选择，但个人认为相对比较友好且容易上手的架构当属<a href="https://github.com/alibaba/COLA" target="_blank" rel="noopener noreferrer">COLA</a>。</p><br><h2 id="分层架构" tabindex="-1"><a class="header-anchor" href="#分层架构"><span>分层架构</span></a></h2><p><code>分层架构</code>将<code>战术设计</code>中涉及到的<a href="https://en.wikipedia.org/wiki/Domain-driven_design" target="_blank" rel="noopener noreferrer">DDD</a>概念全部划分到了四个不同的层次中。</p><figure><img src="https://tianmazuo.com/technology/engineering/domain/ddd-30.png" alt="DDD分层架构" tabindex="0" loading="lazy"><figcaption>DDD分层架构</figcaption></figure><ul><li><p><code>基础设施层（infrastructure）</code>：包括负责实现数据层持久化的<code>资源库（repository）</code>和用来组装各种领域模型的<code>工厂（factory）</code>。</p></li><li><p><code>接口层（interface）</code>：它直接与外界进行交互，由<code>控制器（controller）</code>、<code>服务间调用（rpc，例如，dubbo或openfeign）</code>和<code>监听器（listener）</code>组成，它会把收到的请求或监听到的事件传递给其他层来执行。</p></li><li><p><code>应用层（application）</code>：通过<code>业务流程编排（service）</code>，将各种业务类、对象和方法按照业务语义组织起来，拼装成完整的可执行业务流程。</p></li><li><p><code>领域层（domain）</code>：用<code>聚合（aggregate）</code>、<code>实体（entity）</code>、<code>值对象（value object）</code>、<code>领域事件（domain event）</code>、<code>领域服务（domain service）</code>、<code>命令（command）</code>、<code>查询（query）</code>、<code>业务组件（component）</code>这些东西，把<code>业务模型</code>、<code>业务流程</code>和<code>业务语义</code>以代码的方式还原出来，让技术尽量与业务贴合。</p></li></ul><p>这四层自顶向下，逐级依赖。</p><br><h2 id="cola架构" tabindex="-1"><a class="header-anchor" href="#cola架构"><span>COLA架构</span></a></h2><p><a href="https://github.com/alibaba/COLA" target="_blank" rel="noopener noreferrer">COLA架构</a>在<code>分层架构</code>的基础上加入了一些通用组件。</p><figure><img src="https://tianmazuo.com/technology/engineering/domain/ddd-31.png" alt="COLA中的组件" tabindex="0" loading="lazy"><figcaption>COLA中的组件</figcaption></figure><figure><img src="https://tianmazuo.com/technology/engineering/domain/ddd-32.png" alt="COLA中的组件" tabindex="0" loading="lazy"><figcaption>COLA中的组件</figcaption></figure><p><a href="https://github.com/alibaba/COLA" target="_blank" rel="noopener noreferrer">COLA</a>的作者也发了一些关于<a href="https://blog.csdn.net/significantfrank/article/details/110934799" target="_blank" rel="noopener noreferrer">COLA架构的实践</a>，可以读一读。</p><br><h2 id="架构整合" tabindex="-1"><a class="header-anchor" href="#架构整合"><span>架构整合</span></a></h2><p>现在，再回过头来看一看怎么把<a href="https://github.com/alibaba/COLA" target="_blank" rel="noopener noreferrer">COLA</a>用到自己的项目中。</p><p>可以根据<a href="https://github.com/alibaba/COLA" target="_blank" rel="noopener noreferrer">COLA</a>的设计思想重新调整一下<code>分层架构</code>中的组件。</p><ul><li><p><code>基础设施层（infrastructure）</code>：除了<code>资源库（repository）</code>和<code>工厂（factory）</code>，还增加了用来调用外部接口的<code>api</code>和其他自定义的业务组件，例如，<code>converot（转换器）</code>。</p></li><li><p><code>接口层（interface）</code>：无变化。</p></li><li><p><code>接口层（interface）</code>：将原本属于<code>领域层</code>的<code>命令（command）</code>、<code>查询（query）</code>转移到这里面来，执行对其他服务的<code>rpc</code>调用。</p></li><li><p><code>应用层（application）</code>：将原本属于<code>领域层</code>的<code>命令（command）</code>、<code>查询（query）</code>转移到这里面来，配合<code>业务流程编排（service）</code>实现对业务的拼装。</p></li><li><p><code>领域层（domain）</code>：除了没有了<code>命令（command）</code>、<code>查询（query）</code>，其他没变化。</p></li></ul><figure><img src="https://tianmazuo.com/technology/engineering/domain/ddd-33.png" alt="根据COLA的设计思想改进的分层架构" tabindex="0" loading="lazy"><figcaption>根据COLA的设计思想改进的分层架构</figcaption></figure><p>可以直接执行官方给出的脚本。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; cd /home/work</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; mvn archetype:generate </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    -DgroupId</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">com.alibaba.demo</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">    -DartifactId=demo-web</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">    -Dversion=1.0.0-SNAPSHOT</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">    -Dpackage=com.alibaba.demo</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">    -DarchetypeArtifactId=cola-framework-archetype-web</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">    -DarchetypeGroupId=com.alibaba.cola</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">    -DarchetypeVersion=4.3.1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者也可以先下载源码然后再创建应用。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 下载源码到本地</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; cd /home/work</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; git clone https://github.com/alibaba/COLA.git</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 安装 cola-archetype</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; cd /home/work/cola/cola-archetypes</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; mvn install</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 安装 cola-components</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; cd /home/work/cola/cola-components</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; mvn install</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 创建应用</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; cd /home/work</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; mvn archetype:generate </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    -DgroupId</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">com.alibaba.demo</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">    -DartifactId=demo-web</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">    -Dversion=1.0.0-SNAPSHOT</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">    -Dpackage=com.alibaba.demo</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">    -DarchetypeArtifactId=cola-framework-archetype-web</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">    -DarchetypeGroupId=com.alibaba.cola</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">    -DarchetypeVersion=4.3.1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装完成后可以直接运行项目。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 运行应用</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; cd /home/work/demo-web</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; mvn install -DskipTests</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; mvn spring-boot:run</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者将项目导入到<a href="https://www.jetbrains.com/idea/" target="_blank" rel="noopener noreferrer">IDEA</a>中，这样就可以看到完整的样例代码。</p><p>根据整合后的结果，最终得到<a href="https://en.wikipedia.org/wiki/Domain-driven_design" target="_blank" rel="noopener noreferrer">DDD</a>的代码落地方案。</p><figure><img src="https://tianmazuo.com/technology/engineering/domain/ddd-34.png" alt="DDD分层架构的代码实现" tabindex="0" loading="lazy"><figcaption>DDD分层架构的代码实现</figcaption></figure><figure><img src="https://tianmazuo.com/technology/engineering/domain/ddd-35.png" alt="DDD分层架构的代码实现" tabindex="0" loading="lazy"><figcaption>DDD分层架构的代码实现</figcaption></figure><p><a href="https://en.wikipedia.org/wiki/Domain-driven_design" target="_blank" rel="noopener noreferrer">DDD</a>也好，<a href="https://github.com/alibaba/COLA" target="_blank" rel="noopener noreferrer">COLA</a>也好，都只是思想和工具，该怎么做才能更有利于业务开发和运营，决定权在每个工程师自己手上。</p>`,33),l=[t];function o(r,d){return a(),i("div",null,l)}const h=e(s,[["render",o],["__file","code.html.vue"]]),g=JSON.parse('{"path":"/technology/engineering/domain/code.html","title":"代码落地","lang":"zh-CN","frontmatter":{"title":"代码落地","icon":"vihara","category":["开发过程","领域模型"],"tag":["开发过程","领域模型","代码落地"],"date":"2022-11-20T00:00:00.000Z","isOriginal":true,"star":true,"description":"在理解了DDD战术设计中的那些概念以后，就可以试着整合代码了。 对于架构师或者PM来说，最核心的部分是战略设计。但对于工程师们来说，最核心的部分其实是战术设计以及它之后的代码落地，因为Talk is cheap, Show me the code。 在这一步，就可以充分考虑如何将那些DDD的概念变成可执行的代码了。 虽然在DDD的代码落地方案中，有六边...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/technology/engineering/domain/code.html"}],["meta",{"property":"og:site_name","content":"添码座"}],["meta",{"property":"og:title","content":"代码落地"}],["meta",{"property":"og:description","content":"在理解了DDD战术设计中的那些概念以后，就可以试着整合代码了。 对于架构师或者PM来说，最核心的部分是战略设计。但对于工程师们来说，最核心的部分其实是战术设计以及它之后的代码落地，因为Talk is cheap, Show me the code。 在这一步，就可以充分考虑如何将那些DDD的概念变成可执行的代码了。 虽然在DDD的代码落地方案中，有六边..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://tianmazuo.com/technology/engineering/domain/ddd-30.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"添码座"}],["meta",{"property":"article:tag","content":"开发过程"}],["meta",{"property":"article:tag","content":"领域模型"}],["meta",{"property":"article:tag","content":"代码落地"}],["meta",{"property":"article:published_time","content":"2022-11-20T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"代码落地\\",\\"image\\":[\\"https://tianmazuo.com/technology/engineering/domain/ddd-30.png\\",\\"https://tianmazuo.com/technology/engineering/domain/ddd-31.png\\",\\"https://tianmazuo.com/technology/engineering/domain/ddd-32.png\\",\\"https://tianmazuo.com/technology/engineering/domain/ddd-33.png\\",\\"https://tianmazuo.com/technology/engineering/domain/ddd-34.png\\",\\"https://tianmazuo.com/technology/engineering/domain/ddd-35.png\\"],\\"datePublished\\":\\"2022-11-20T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"添码座\\",\\"url\\":\\"https://www.tianmazuo.com/about/\\"}]}"]]},"headers":[{"level":2,"title":"分层架构","slug":"分层架构","link":"#分层架构","children":[]},{"level":2,"title":"COLA架构","slug":"cola架构","link":"#cola架构","children":[]},{"level":2,"title":"架构整合","slug":"架构整合","link":"#架构整合","children":[]}],"git":{},"readingTime":{"minutes":3.65,"words":1096},"filePathRelative":"technology/engineering/domain/code.md","localizedDate":"2022年11月20日","excerpt":"<p>在理解了<a href=\\"https://en.wikipedia.org/wiki/Domain-driven_design\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">DDD</a><code>战术设计</code>中的那些概念以后，就可以试着整合代码了。</p>\\n<p>对于架构师或者<code>PM</code>来说，最核心的部分是<code>战略设计</code>。但对于工程师们来说，最核心的部分其实是<code>战术设计</code>以及它之后的<code>代码落地</code>，因为<code>Talk is cheap, Show me the code</code>。</p>","autoDesc":true}');export{h as comp,g as data};
