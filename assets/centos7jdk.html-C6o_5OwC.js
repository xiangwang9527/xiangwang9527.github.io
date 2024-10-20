import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,d as e}from"./app-CiwSPZKD.js";const t={},n=e(`<h2 id="下载并解压" tabindex="-1"><a class="header-anchor" href="#下载并解压"><span>下载并解压</span></a></h2><p>推荐手动安装，因为这样可以灵活地随时切换不同版本的JDK。</p><ul><li><p><a href="https://jdk.java.net/archive/" target="_blank" rel="noopener noreferrer">OpenJDK下载地址</a></p></li><li><p><a href="https://www.oracle.com/java/technologies/downloads/archive/" target="_blank" rel="noopener noreferrer">Oracle JDK下载地址</a></p></li></ul><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 新建安装目录</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; mkdir /usr/local/java</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; cd /usr/local/java</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 下载后解压</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; wget </span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">\${</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">jdk下载地址</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; tar -zxvf jdk-</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">\${</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">版本号</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-linux-x64.tar.gz</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="配置环境变量" tabindex="-1"><a class="header-anchor" href="#配置环境变量"><span>配置环境变量</span></a></h2><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; vi /etc/profile</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 添加以下配置</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> JAVA_HOME</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">usr</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">local</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">java</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">jdk-</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">\${</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">版本号</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">}</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">-linux</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">x64</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> CLASSPATH</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.:</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$JAVA_HOME</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">jre</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">lib</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">rt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">jar</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$JAVA_HOME</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">lib</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">jar</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$JAVA_HOME</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">lib</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">tools</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">jar</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> PATH</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$PATH</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$JAVA_HOME</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">bin</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>保存并刷新配置。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; source /etc/profile</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,9),l=[n];function h(k,p){return a(),s("div",null,l)}const o=i(t,[["render",h],["__file","centos7jdk.html.vue"]]),c=JSON.parse('{"path":"/technology/linux/centos7jdk.html","title":"CentOS7.x最小化安装GNOME","lang":"zh-CN","frontmatter":{"title":"CentOS7.x最小化安装GNOME","icon":"terminal","category":["Linux"],"tag":["Linux","CentOS","JDK"],"date":"2022-12-02T00:00:00.000Z","isOriginal":true,"star":true,"description":"下载并解压 推荐手动安装，因为这样可以灵活地随时切换不同版本的JDK。 OpenJDK下载地址 Oracle JDK下载地址 配置环境变量 保存并刷新配置。","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/technology/linux/centos7jdk.html"}],["meta",{"property":"og:site_name","content":"添码座"}],["meta",{"property":"og:title","content":"CentOS7.x最小化安装GNOME"}],["meta",{"property":"og:description","content":"下载并解压 推荐手动安装，因为这样可以灵活地随时切换不同版本的JDK。 OpenJDK下载地址 Oracle JDK下载地址 配置环境变量 保存并刷新配置。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"添码座"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:tag","content":"CentOS"}],["meta",{"property":"article:tag","content":"JDK"}],["meta",{"property":"article:published_time","content":"2022-12-02T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CentOS7.x最小化安装GNOME\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-12-02T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"添码座\\",\\"url\\":\\"https://www.tianmazuo.com/about/\\"}]}"]]},"headers":[{"level":2,"title":"下载并解压","slug":"下载并解压","link":"#下载并解压","children":[]},{"level":2,"title":"配置环境变量","slug":"配置环境变量","link":"#配置环境变量","children":[]}],"git":{},"readingTime":{"minutes":0.48,"words":143},"filePathRelative":"technology/linux/centos7jdk.md","localizedDate":"2022年12月2日","excerpt":"<h2>下载并解压</h2>\\n<p>推荐手动安装，因为这样可以灵活地随时切换不同版本的JDK。</p>\\n<ul>\\n<li>\\n<p><a href=\\"https://jdk.java.net/archive/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">OpenJDK下载地址</a></p>\\n</li>\\n<li>\\n<p><a href=\\"https://www.oracle.com/java/technologies/downloads/archive/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Oracle JDK下载地址</a></p>\\n</li>\\n</ul>","autoDesc":true}');export{o as comp,c as data};