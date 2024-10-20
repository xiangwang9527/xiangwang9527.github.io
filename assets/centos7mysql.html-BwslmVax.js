import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as a,d as n}from"./app-B5m7CcSj.js";const l={},e=n(`<h2 id="yum安装" tabindex="-1"><a class="header-anchor" href="#yum安装"><span>yum安装</span></a></h2><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; wget http://dev.mysql.com/get/mysql80-community-release-el7-3.noarch.rpm</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; yum install -y mysql80-community-release-el7-3.noarch.rpm</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; yum install -y mysql-community-server --nogpgcheck</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="启动" tabindex="-1"><a class="header-anchor" href="#启动"><span>启动</span></a></h2><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; systemctl start mysqld</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 获取启动时的临时密码（在第一次登录时就是用这个密码）</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; grep </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;temporary password&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> /var/log/mysqld.log</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 如果没有获取到临时密码，则删除原来安装过的mysql残留的数据</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; rm -rf /var/lib/mysql</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 再启动mysql</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; systemctl start mysqld</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 登录</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; mysql -uroot -p</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输入刚刚获取的临时密码。</p><br><h2 id="修改配置" tabindex="-1"><a class="header-anchor" href="#修改配置"><span>修改配置</span></a></h2><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 登录成功后修改密码</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mysql</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">SHOW</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> VARIABLES</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> LIKE</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;validate_password%&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 降低密码策略与复杂度</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mysql</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">SET</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> global</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> validate_password.policy=LOW</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mysql</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">SET</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> global</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> validate_password.length=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">6</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mysql</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ALTER</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> USER</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> USER</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">IDENTIFIED</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> BY</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;123456&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mysql</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">USE</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mysql</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mysql</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ALTER</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> USER</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;root&#39;@&#39;%&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> IDENTIFIED</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> WITH</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mysql_native_password</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> BY</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;123456&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mysql</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ALTER</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> USER</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;root&#39;@&#39;%&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> IDENTIFIED</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> BY</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;123456&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mysql</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">FLUSH</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> PRIVILEGES</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 开启远程控制</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mysql</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -u</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> root</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -p</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mysql</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">USE</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mysql</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mysql</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">UPDATE</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> user</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> SET</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> host=&#39;%&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> WHERE</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> user=&#39;root&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mysql</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">GRANT</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ALL</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> PRIVILEGES</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ON</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> *</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">*</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> TO</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;root&#39;@&#39;%&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mysql</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">FLUSH</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> PRIVILEGES</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 修改字符集</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; vi /etc/my.cnf</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[mysqld]</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">character_set_server</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">utf8mb4</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">init_connect</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;SET NAMES utf8mb4&#39;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">sql_mode</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 如果是在阿里云上配置MySQL，为了能够远程访问还需要在\`[mysqld]\`中添加</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">bind-address</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">0.0.0.0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),t=[e];function h(k,p){return a(),i("div",null,t)}const y=s(l,[["render",h],["__file","centos7mysql.html.vue"]]),c=JSON.parse('{"path":"/technology/linux/centos7mysql.html","title":"CentOS7.x安装配置MySQL8.0单节点","lang":"zh-CN","frontmatter":{"title":"CentOS7.x安装配置MySQL8.0单节点","icon":"terminal","category":["Linux"],"tag":["Linux","CentOS","MySQL"],"date":"2023-01-27T00:00:00.000Z","isOriginal":true,"star":true,"description":"yum安装 启动 输入刚刚获取的临时密码。 修改配置","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/technology/linux/centos7mysql.html"}],["meta",{"property":"og:site_name","content":"添码座"}],["meta",{"property":"og:title","content":"CentOS7.x安装配置MySQL8.0单节点"}],["meta",{"property":"og:description","content":"yum安装 启动 输入刚刚获取的临时密码。 修改配置"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"添码座"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:tag","content":"CentOS"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:published_time","content":"2023-01-27T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CentOS7.x安装配置MySQL8.0单节点\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-27T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"添码座\\",\\"url\\":\\"https://www.tianmazuo.com/about/\\"}]}"]]},"headers":[{"level":2,"title":"yum安装","slug":"yum安装","link":"#yum安装","children":[]},{"level":2,"title":"启动","slug":"启动","link":"#启动","children":[]},{"level":2,"title":"修改配置","slug":"修改配置","link":"#修改配置","children":[]}],"git":{},"readingTime":{"minutes":0.98,"words":293},"filePathRelative":"technology/linux/centos7mysql.md","localizedDate":"2023年1月27日","excerpt":"<h2>yum安装</h2>\\n<div class=\\"language-shell line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"shell\\" data-title=\\"shell\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">&gt; wget http://dev.mysql.com/get/mysql80-community-release-el7-3.noarch.rpm</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">&gt; yum install -y mysql80-community-release-el7-3.noarch.rpm</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">&gt; yum install -y mysql-community-server --nogpgcheck</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{y as comp,c as data};
