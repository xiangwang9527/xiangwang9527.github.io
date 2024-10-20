import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as e,d as a}from"./app-CiwSPZKD.js";const t={},n=a(`<p><a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">Docker</a>官方给出的多台机器之间共享数据的结构图如下。</p><figure><img src="https://tianmazuo.com/technology/cicd/docker/docker-03.png" alt="多台机器之间共享数据" tabindex="0" loading="lazy"><figcaption>多台机器之间共享数据</figcaption></figure><p>其实<a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">Docker</a>的<code>volume</code>是支持多种<code>driver</code>的，但如果不指定，那么创建<code>volume</code>时，它的<code>driver</code>默认都是<code>local</code>，也就是本地存储。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        &quot;CreatedAt&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;202X-0X-XXT21:33:15+08:00&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        &quot;Driver&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;local&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        &quot;Labels&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: null,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        &quot;Mountpoint&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;/var/lib/docker/volumes/mysql-data/_data&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        &quot;Name&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;mysql-data&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        &quot;Options&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: null,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        &quot;Scope&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;local&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>准备三台<a href="https://www.linux.org" target="_blank" rel="noopener noreferrer">Linux</a>机器，之间通过<code>SSH</code>通信。</p><table><thead><tr><th style="text-align:center;">hostname</th><th style="text-align:center;">ip</th><th style="text-align:center;">ssh username</th><th style="text-align:center;">ssh password</th></tr></thead><tbody><tr><td style="text-align:center;">docker-host1</td><td style="text-align:center;">172.16.200.10</td><td style="text-align:center;">work</td><td style="text-align:center;">123456</td></tr><tr><td style="text-align:center;">docker-host2</td><td style="text-align:center;">172.16.200.11</td><td style="text-align:center;">work</td><td style="text-align:center;">123456</td></tr><tr><td style="text-align:center;">docker-host3</td><td style="text-align:center;">172.16.200.12</td><td style="text-align:center;">work</td><td style="text-align:center;">123456</td></tr></tbody></table><p>在<code>docker-host1</code>和<code>docker-host2</code>机器上安装一个插件：<code>vieux/sshfs</code>。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[work@docker-host1 ~]&gt; docker plugin install --grant-all-permissions vieux/sshfs</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[work@docker-host2 ~]&gt; docker plugin install --grant-all-permissions vieux/sshfs</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code>docker-host1</code>上创建数据卷。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[work@docker-host1 ~]&gt; docker volume create --driver vieux/sshfs </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">							-o</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> sshcmd=work@172.16.200.12:/home/work</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">							-o</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> password=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">123456</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">							sshvolume</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code>docker-host1</code>上查看数据卷。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[work@docker-host1 ~]&gt; docker volume ls</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">DRIVER</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">								VOLUME</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> NAME</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">vieux/sshfs:latest</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		sshvolume</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看数据卷详情。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[work@docker-host1 ~]&gt; docker volume inspect sshvolume</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        &quot;CreatedAt&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;0001-01-01T00:00:00Z&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        &quot;Driver&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;vieux/sshfs:latest&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        &quot;Labels&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {},</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        &quot;Mountpoint&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;/mnt/volumes/f59e848643f73d73a21b881486d55b33&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        &quot;Name&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;sshvolume&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        &quot;Options&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            &quot;password&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;123456&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            &quot;sshcmd&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;work@192.168.200.12:/home/work&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        },</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        &quot;Scope&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;local&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code>docker-host1</code>上创建容器，挂载<code>sshvolume</code>到<code>/app</code>目录，然后进入容器的<code>shell</code>，在<code>/app</code>目录创建一个<code>test.txt</code>文件，并在其中输入一些内容。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[work@docker-host1 ~]&gt; docker run -it -v sshvolume:/app busybox sh</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ls</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">app</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">   bin</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">   dev</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">   etc</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">   home</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  proc</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  root</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  sys</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">   tmp</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">   usr</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">   var</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /app</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">/app</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ls</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">/app</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;this is ssh volume&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">test.txt</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">/app</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ls</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">test</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">.txt</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">/app</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">more</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> test.txt</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">this</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> is</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ssh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> volume</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">/app</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">/app</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">exit</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就可以在<code>docker-host3</code>上看到数据了。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[work@docker-host3 ~]&gt; pwd</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">/home/work</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[work@docker-host3 ~]&gt; ls</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">test</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">.txt</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[work@docker-host3 ~]&gt; more test.txt</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">this</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> is</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ssh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> volume</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),l=[n];function h(k,r){return e(),i("div",null,l)}const o=s(t,[["render",h],["__file","docker-share.html.vue"]]),c=JSON.parse('{"path":"/technology/cicd/docker/docker-share.html","title":"docker数据共享","lang":"zh-CN","frontmatter":{"title":"docker数据共享","icon":"inbox","category":["CI&CD","Docker"],"tag":["CI&CD","Docker"],"date":"2022-10-16T00:00:00.000Z","isOriginal":true,"star":true,"description":"Docker官方给出的多台机器之间共享数据的结构图如下。 多台机器之间共享数据多台机器之间共享数据 其实Docker的volume是支持多种driver的，但如果不指定，那么创建volume时，它的driver默认都是local，也就是本地存储。 准备三台Linux机器，之间通过SSH通信。 在docker-host1和docker-host2机器上安...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/technology/cicd/docker/docker-share.html"}],["meta",{"property":"og:site_name","content":"添码座"}],["meta",{"property":"og:title","content":"docker数据共享"}],["meta",{"property":"og:description","content":"Docker官方给出的多台机器之间共享数据的结构图如下。 多台机器之间共享数据多台机器之间共享数据 其实Docker的volume是支持多种driver的，但如果不指定，那么创建volume时，它的driver默认都是local，也就是本地存储。 准备三台Linux机器，之间通过SSH通信。 在docker-host1和docker-host2机器上安..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://tianmazuo.com/technology/cicd/docker/docker-03.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"添码座"}],["meta",{"property":"article:tag","content":"CI&CD"}],["meta",{"property":"article:tag","content":"Docker"}],["meta",{"property":"article:published_time","content":"2022-10-16T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"docker数据共享\\",\\"image\\":[\\"https://tianmazuo.com/technology/cicd/docker/docker-03.png\\"],\\"datePublished\\":\\"2022-10-16T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"添码座\\",\\"url\\":\\"https://www.tianmazuo.com/about/\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":1.34,"words":403},"filePathRelative":"technology/cicd/docker/docker-share.md","localizedDate":"2022年10月16日","excerpt":"<p><a href=\\"https://www.docker.com/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Docker</a>官方给出的多台机器之间共享数据的结构图如下。</p>\\n<figure><img src=\\"https://tianmazuo.com/technology/cicd/docker/docker-03.png\\" alt=\\"多台机器之间共享数据\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>多台机器之间共享数据</figcaption></figure>\\n<p>其实<a href=\\"https://www.docker.com/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Docker</a>的<code>volume</code>是支持多种<code>driver</code>的，但如果不指定，那么创建<code>volume</code>时，它的<code>driver</code>默认都是<code>local</code>，也就是本地存储。</p>","autoDesc":true}');export{o as comp,c as data};
