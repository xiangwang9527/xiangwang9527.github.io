import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as a,d as n}from"./app-CiwSPZKD.js";const e={},l=n(`<h2 id="安装配置maven" tabindex="-1"><a class="header-anchor" href="#安装配置maven"><span>安装配置Maven</span></a></h2><p>下载并解压。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; cd /home/work</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; wget https://mirror.bit.edu.cn/apache/maven/maven-3/3.6.3/binaries/apache-maven-3.6.3-bin.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; tar -zxvf apache-maven-3.6.3-bin.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; mv apache-maven-3.6.3 maven-3.6.3</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 编辑配置文件</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; vi /etc/profile</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">MAVEN_HOME</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/home/work/maven-3.6.3</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> PATH</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">\${</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">MAVEN_HOME</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">bin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">\${</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">PATH</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 让配置生效</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; source /etc/profile</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; mvn –v</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="编译安装rocketmq" tabindex="-1"><a class="header-anchor" href="#编译安装rocketmq"><span>编译安装RocketMQ</span></a></h2><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 下载并解压</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; wget https://mirrors.tuna.tsinghua.edu.cn/apache/rocketmq/4.7.0/rocketmq-all-4.7.0-source-release.zip</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; unzip rocketmq-all-4.7.0-source-release.zip</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; mv rocketmq-all-4.7.0 rocketmq-4.7.0-source</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; cd rocketmq-4.7.0-source</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; mvn -Prelease-all -DskipTests clean install -U</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 如果出现错误</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Source</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> option</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 6</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> is</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> no</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> longer</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> supported.</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Use</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 7</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> or</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> later</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">rocketmq-logging</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 4.7.0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> .............................</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> FAILURE</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 可以这样修改</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; cd /home/work/rocketmq-4.7.0-source/logging</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; vi pom.xml</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 修改下面的内容，将1.6修改为1.8</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;properties&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">   &lt;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">maven.compiler.source</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">1.6</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/maven.compiler.source&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">   &lt;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">maven.compiler.target</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">1.6</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/maven.compiler.target&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/properties&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;properties&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">   &lt;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">maven.compiler.source</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">1.8</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/maven.compiler.source&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">   &lt;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">maven.compiler.target</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">1.8</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/maven.compiler.target&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/properties&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>逐一修改<code>client</code>、<code>common</code>、<code>remoting</code>，直至全部编译成功。</p><p>然后启动<a href="https://rocketmq.apache.org" target="_blank" rel="noopener noreferrer">RocketMQ</a>。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; cd /home/work/rocketmq-4.7.0-source/distribution/target/rocketmq-4.7.0/rocketmq-4.7.0</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; nohup sh bin/mqnamesrv &amp;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cat</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nohup.out</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果使用的是<code>jdk-12.0.2</code>，<code>java 9</code>之后只支持<code>G1 GC</code>，因此会有很多jvm的编译错误。</p><p>将这些废弃的<code>jvm</code>参数逐一去掉，再次启动<code>namesrv</code>。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">nohup</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> sh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> bin/mqnamesrv</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &amp;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,12),t=[l];function h(p,k){return a(),i("div",null,t)}const c=s(e,[["render",h],["__file","centos7rocketmq.html.vue"]]),o=JSON.parse('{"path":"/technology/linux/centos7rocketmq.html","title":"CentOS7.x安装RocketMQ4.7.0","lang":"zh-CN","frontmatter":{"title":"CentOS7.x安装RocketMQ4.7.0","icon":"terminal","category":["Linux"],"tag":["Linux","CentOS","RocketMQ"],"date":"2023-03-05T00:00:00.000Z","isOriginal":true,"star":true,"description":"安装配置Maven 下载并解压。 编译安装RocketMQ 逐一修改client、common、remoting，直至全部编译成功。 然后启动RocketMQ。 如果使用的是jdk-12.0.2，java 9之后只支持G1 GC，因此会有很多jvm的编译错误。 将这些废弃的jvm参数逐一去掉，再次启动namesrv。","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/technology/linux/centos7rocketmq.html"}],["meta",{"property":"og:site_name","content":"添码座"}],["meta",{"property":"og:title","content":"CentOS7.x安装RocketMQ4.7.0"}],["meta",{"property":"og:description","content":"安装配置Maven 下载并解压。 编译安装RocketMQ 逐一修改client、common、remoting，直至全部编译成功。 然后启动RocketMQ。 如果使用的是jdk-12.0.2，java 9之后只支持G1 GC，因此会有很多jvm的编译错误。 将这些废弃的jvm参数逐一去掉，再次启动namesrv。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"添码座"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:tag","content":"CentOS"}],["meta",{"property":"article:tag","content":"RocketMQ"}],["meta",{"property":"article:published_time","content":"2023-03-05T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CentOS7.x安装RocketMQ4.7.0\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-05T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"添码座\\",\\"url\\":\\"https://www.tianmazuo.com/about/\\"}]}"]]},"headers":[{"level":2,"title":"安装配置Maven","slug":"安装配置maven","link":"#安装配置maven","children":[]},{"level":2,"title":"编译安装RocketMQ","slug":"编译安装rocketmq","link":"#编译安装rocketmq","children":[]}],"git":{},"readingTime":{"minutes":0.9,"words":269},"filePathRelative":"technology/linux/centos7rocketmq.md","localizedDate":"2023年3月5日","excerpt":"<h2>安装配置Maven</h2>\\n<p>下载并解压。</p>\\n<div class=\\"language-shell line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"shell\\" data-title=\\"shell\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">&gt; cd /home/work</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">&gt; wget https://mirror.bit.edu.cn/apache/maven/maven-3/3.6.3/binaries/apache-maven-3.6.3-bin.tar.gz</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">&gt; tar -zxvf apache-maven-3.6.3-bin.tar.gz</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">&gt; mv apache-maven-3.6.3 maven-3.6.3</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic\\"># 编辑配置文件</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">&gt; vi /etc/profile</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">MAVEN_HOME</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">/home/work/maven-3.6.3</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">export</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\"> PATH</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#ABB2BF\\">${</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">MAVEN_HOME</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#ABB2BF\\">}</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">/</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">bin</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">:</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#ABB2BF\\">${</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">PATH</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#ABB2BF\\">}</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic\\"># 让配置生效</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">&gt; source /etc/profile</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">&gt; mvn –v</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{c as comp,o as data};
