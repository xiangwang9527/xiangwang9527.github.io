import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as a,d as e}from"./app-CiwSPZKD.js";const n={},l=e(`<p><a href="https://flume.apache.org/" target="_blank" rel="noopener noreferrer">Flume</a>的<a href="https://hub.docker.com/r/apache/flume" target="_blank" rel="noopener noreferrer">官方镜像</a>在执行<code>docker pull apache/flume</code>命令时出现下面的错误。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Using</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> default</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> tag:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> latest</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Error</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> response</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> daemon:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> manifest</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> for</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> apache/flume:latest</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> not</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> found:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> manifest</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> unknown:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> manifest</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> unknown</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>官方也没有任何<code>tags</code>可用，而且它本身也只是一个数据采集工具而已，所以使用本机部署的方式安装可能更适合<a href="https://flume.apache.org/" target="_blank" rel="noopener noreferrer">Flume</a>。</p><p>提前准备虚拟机，安装好<a href="https://www.oracle.com/java/technologies/downloads/archive/" target="_blank" rel="noopener noreferrer">Java</a>环境。</p><p>先下载并解压<a href="https://flume.apache.org/" target="_blank" rel="noopener noreferrer">Flume</a>安装包。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; cd /home/work</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; wget https://dlcdn.apache.org/flume/1.11.0/apache-flume-1.11.0-bin.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; tar xvf apache-flume-1.11.0-bin.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; mv apache-flume-1.11.0-bin flume-1.11.0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改<code>flume-1.11.0/conf/flume-env.sh.template</code>配置文件。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; cd /home/work/flume-1.11.0/conf/</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; cp flume-env.sh.template flume-env.sh</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; vi flume-env.sh</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 取消注释，并且修改JAVA_HOME为正确的路径</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> JAVA_HOME</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">usr</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">local</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">java</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">jdk1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">8</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">0_401</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置一个<code>Agent</code>。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; cd /home/work/flume-1.11.0/conf/</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; cp flume-conf.properties.template flume.conf</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; vi flume.conf</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 指定source和sink到channel</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">a1.sources</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> r1</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">a1.channels</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> c1</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">a1.sinks</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> k1</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 配置source</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">a1.sources.r1.type</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> netcat</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">a1.sources.r1.bind</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0.0.0.0</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">a1.sources.r1.port</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 13790</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 配置channel</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">a1.channels.c1.type</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> memory</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">a1.channels.c1.capacity</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1000</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">a1.channels.c1.transactionCapacity</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 100</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 配置sink</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">a1.sinks.k1.type</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> logger</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 绑定source和sink到channel</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">a1.sources.r1.channels</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> c1</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">a1.sinks.k1.channel</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> c1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://flume.apache.org/" target="_blank" rel="noopener noreferrer">Flume</a>官方文档中提供了关于<a href="https://flume.apache.org/releases/content/1.11.0/FlumeUserGuide.html#flume-sources" target="_blank" rel="noopener noreferrer">Source</a>、<a href="https://flume.apache.org/releases/content/1.11.0/FlumeUserGuide.html#flume-channels" target="_blank" rel="noopener noreferrer">Channel</a>和<a href="https://flume.apache.org/releases/content/1.11.0/FlumeUserGuide.html#flume-sinks" target="_blank" rel="noopener noreferrer">Sink</a>的详细说明和相应实例。</p><p>启动<a href="https://flume.apache.org/" target="_blank" rel="noopener noreferrer">Flume</a>并执行下面的命令。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; cd /home/work/flume-1.11.0/</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; nohup ./bin/flume-ng agent -n a1 -c conf -f conf/flume.conf -Dflume.root.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">logger</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">INFO,console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/dev/null</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 2&gt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/home/work/logs/flume-error.log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &amp;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 或者</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; nohup ./bin/flume-ng agent --name a1 --conf conf --conf-file conf/flume.conf -Dflume.root.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">logger</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">INFO,console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/dev/null</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 2&gt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/home/work/logs/flume-error.log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &amp;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动后，执行<code>jps -m</code>命令可以看到多出了一个<code>Application</code>进程。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">151155</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Application</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> a1</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -f</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> conf/flume.conf</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">62437</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> SecondaryNameNode</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">62854</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> NodeManager</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">62039</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> NameNode</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">62218</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> DataNode</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">62699</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ResourceManager</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后按照官方的示例，通过<code>telnet</code>命令连接调试。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; telnet 172.16.185.176 13790</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Trying</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 172.16.185.176...</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Connected</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> to</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 172.16.185.176.</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Escape</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> character</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> is</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;^]&#39;.</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Hello</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Flume!</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">OK</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果不设置的话，日志文件默认存放在<code>\${FLUME_HOME}</code>目录下，文件名为<code>flume.log</code>。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; cd /home/work/flume-1.11.0/</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; tail -f flume.log</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">INFO</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  [main] (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">org.apache.flume.node.Application.startAllComponents:207</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)  - Starting new configuration:{ </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sourceRunners:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">{r1=EventDrivenSourceRunner:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> source:org.apache.flume.source.NetcatSource{name:r1,state:IDLE}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> }}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> sinkRunners:{k1=SinkRunner:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> policy:org.apache.flume.sink.DefaultSinkProcessor@3514a4c0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> counterGroup:{</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> name:null</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> counters:{}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> }</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> }}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> channels:{c1=org.apache.flume.channel.MemoryChannel{name:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> c1}}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> }</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">INFO</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  [main] (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">org.apache.flume.node.Application.startAllComponents:214</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)  - Starting Channel c1</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">INFO</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  [main] (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">org.apache.flume.node.Application.startAllComponents:229</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)  - Waiting </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> channel: c1 to start. Sleeping for </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">500</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ms</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">INFO</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  [lifecycleSupervisor-1-0] (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">org.apache.flume.instrumentation.MonitoredCounterGroup.register:119</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)  - Monitored counter group </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> type: CHANNEL, name: c1: Successfully registered new MBean.</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">INFO</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  [lifecycleSupervisor-1-0] (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">org.apache.flume.instrumentation.MonitoredCounterGroup.start:95</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)  - Component type: CHANNEL, name: c1 started</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">INFO</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  [main] (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">org.apache.flume.node.Application.startAllComponents:241</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)  - Starting Sink k1</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">INFO</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  [main] (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">org.apache.flume.node.Application.startAllComponents:252</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)  - Starting Source r1</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">INFO</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  [lifecycleSupervisor-1-1] (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">org.apache.flume.source.NetcatSource.start:155</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)  - Source starting</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">INFO</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  [lifecycleSupervisor-1-1] (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">org.apache.flume.source.NetcatSource.start:166</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)  - Created serverSocket:sun.nio.ch.ServerSocketChannelImpl[/0:0:0:0:0:0:0:0:13790]</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">INFO</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  [SinkRunner-PollingRunner-DefaultSinkProcessor] (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">org.apache.flume.sink.LoggerSink.process:95</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)  - Event: { </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">headers:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">{}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> body:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 48</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 65</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 6C</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 6C</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 6F</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 20</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 46</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 6C</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 75</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 6D</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 65</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 21</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 0D</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          Hello</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Flume!.</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),h=[l];function t(k,p){return a(),i("div",null,h)}const c=s(n,[["render",t],["__file","deploy.html.vue"]]),g=JSON.parse('{"path":"/technology/middleware/flume/deploy.html","title":"安装部署","lang":"zh-CN","frontmatter":{"title":"安装部署","icon":"stethoscope","category":["中间件","Flume"],"tag":["中间件","Flume"],"date":"2023-03-03T00:00:00.000Z","isOriginal":true,"star":true,"description":"Flume的官方镜像在执行docker pull apache/flume命令时出现下面的错误。 官方也没有任何tags可用，而且它本身也只是一个数据采集工具而已，所以使用本机部署的方式安装可能更适合Flume。 提前准备虚拟机，安装好Java环境。 先下载并解压Flume安装包。 修改flume-1.11.0/conf/flume-env.sh.te...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/technology/middleware/flume/deploy.html"}],["meta",{"property":"og:site_name","content":"添码座"}],["meta",{"property":"og:title","content":"安装部署"}],["meta",{"property":"og:description","content":"Flume的官方镜像在执行docker pull apache/flume命令时出现下面的错误。 官方也没有任何tags可用，而且它本身也只是一个数据采集工具而已，所以使用本机部署的方式安装可能更适合Flume。 提前准备虚拟机，安装好Java环境。 先下载并解压Flume安装包。 修改flume-1.11.0/conf/flume-env.sh.te..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"添码座"}],["meta",{"property":"article:tag","content":"中间件"}],["meta",{"property":"article:tag","content":"Flume"}],["meta",{"property":"article:published_time","content":"2023-03-03T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"安装部署\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-03T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"添码座\\",\\"url\\":\\"https://www.tianmazuo.com/about/\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":2.04,"words":612},"filePathRelative":"technology/middleware/flume/deploy.md","localizedDate":"2023年3月3日","excerpt":"<p><a href=\\"https://flume.apache.org/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Flume</a>的<a href=\\"https://hub.docker.com/r/apache/flume\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">官方镜像</a>在执行<code>docker pull apache/flume</code>命令时出现下面的错误。</p>\\n<div class=\\"language-shell line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"shell\\" data-title=\\"shell\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">Using</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> default</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> tag:</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> latest</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">Error</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> response</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> from</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> daemon:</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> manifest</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> for</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> apache/flume:latest</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> not</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> found:</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> manifest</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> unknown:</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> manifest</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> unknown</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{c as comp,g as data};
