import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as a,d as n}from"./app-CiwSPZKD.js";const e={},l=n(`<div class="hint-container info"><p class="hint-container-title">准备环境</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">version:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;3.8&quot;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">services:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  box1:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    image:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> busybox</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    command</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  /bin/sh</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -c</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;while true; do sleep 3600; done&quot;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  box2:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    image:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> busybox</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    command</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  /bin/sh</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -c</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;while true; do sleep 3600; done&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><p>启动容器。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; docker-compose up -d</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[+] Running 3/3</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> ⠿</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Network</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> root_default</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">   Created</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> ⠿</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Container</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> root-box1-1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  Started</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> ⠿</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Container</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> root-box2-1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  Started</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>水平扩展就是增加<code>service</code>的数量，例如，增加<code>box1</code>的数量可以这么办。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; docker-compose up -d --scale </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">box1</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">3</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[+] Running 3/4</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[+] Running 3/4ot-box2-1  Running</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> ⠿</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Container</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> root-box2-1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  Running</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> ⠸</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Container</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> root-box1-1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  Recreate</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> ⠿</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Container</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> root-box1-3</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  Created</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> ⠿</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Container</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> root-box1-2</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  Created</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>显示出：<code>box1</code>创建了3个<code>service</code>，并且原来的<code>root-box1-1</code>被重新创建过了。</p><p>如果现在不再需要那么多的容器，可以再次执行。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; docker-compose up -d</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[+] Running 1/2</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> ⠿</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Container</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> root-box2-1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  Running</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> ⠦</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Container</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> root-box1-1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  Recreate</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到服务被水平缩减，且<code>root-box1-1</code>又被重新创建了。</p><p>查看网络详情。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; docker network inspect root_default</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">......</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">&quot;Containers&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">	&quot;2bdd9eb2da2af4c48f836a445d48cdcbbe5d447b4aaa3d16635d5052bdd50cef&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">		&quot;Name&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;root-box1-1&quot;,</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">		&quot;EndpointID&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;5505e78db96b23b3f3b15ccc4c3d7adb3e7a17d6e5f0a156e1a946db1bcc3057&quot;,</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">		&quot;MacAddress&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;02:42:c0:a8:00:02&quot;,</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">		&quot;IPv4Address&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;192.168.0.2/20&quot;,</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">		&quot;IPv6Address&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">	},</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">	&quot;54d32a7b4c92bf35d33bebf4a84ed27c36ee4fd308f7edc22332dbc5e31a4fa2&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">		&quot;Name&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;root-box1-2&quot;,</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">		&quot;EndpointID&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;d27944cced91a16acece80b25aadf4ea17cd0a1a996a9ecb33f5c2469e32fe4c&quot;,</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">		&quot;MacAddress&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;02:42:c0:a8:00:04&quot;,</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">		&quot;IPv4Address&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;192.168.0.4/20&quot;,</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">		&quot;IPv6Address&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">	},</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">	&quot;5e8bb74ef56e46efbd256ac63a8e72680a40717e421a2c2c5a6851bdc02ed0d1&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">		&quot;Name&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;root-box1-3&quot;,</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">		&quot;EndpointID&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;752c40f208a46607dbf9b08f2e3127d8052480d60476fb799660dd896f356623&quot;,</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">		&quot;MacAddress&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;02:42:c0:a8:00:05&quot;,</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">		&quot;IPv4Address&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;192.168.0.5/20&quot;,</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">		&quot;IPv6Address&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">	},</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">	&quot;c5be586485d79df4871bf53398f3f6f17e572b5564b5017caaca790cc1255768&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">		&quot;Name&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;root-box2-1&quot;,</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">		&quot;EndpointID&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;fe044046c439b10a3b795d087005712ba44b1f08d7adf35c41551b9ab755a6c6&quot;,</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">		&quot;MacAddress&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;02:42:c0:a8:00:03&quot;,</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">		&quot;IPv4Address&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;192.168.0.3/20&quot;,</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">		&quot;IPv6Address&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">	}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">......</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>它的网络都是<code>192.168.</code>网段的。</p><p>进入到其中任一一个容器。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; docker exec -it root-box1-1 sh</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ping</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> box1</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ping</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> root-box1-1</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> # 效果同ping box1</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ping</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> root-box1-2</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ping</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> root-box1-3</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ping</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> root-box2-1</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ping</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> box2</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>会发现，除了<code>root-box1-1</code>自己，其余的容器都无法<code>ping</code>通，这说明如下事实。</p><ul><li><p>要么<code>docker-compose 2.15.1</code>版本并未实现负载均衡效果。</p></li><li><p>要么<code>yml</code>中的<code>3.8</code>版本并未实现复杂均衡效果。</p></li></ul><p>但是如果在<code>docker-compose.yml</code>文件中使用<code>deploy.replicas</code>参数。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">version:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;3.8&quot;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">services:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  box1:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    image:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> busybox</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    command</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  /bin/sh</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -c</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;while true; do sleep 3600; done&quot;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    deploy:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">      replicas:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 3</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  box2:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    image:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> busybox</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    command</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  /bin/sh</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -c</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;while true; do sleep 3600; done&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再次执行命令。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; docker-compose up -d</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[+] Running 5/5</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> ⠿</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Network</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> root_default</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">   Created</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> ⠿</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Container</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> root-box2-1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  Started</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> ⠿</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Container</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> root-box1-1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  Started</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> ⠿</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Container</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> root-box1-3</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  Started</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> ⠿</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Container</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> root-box1-2</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  Started</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>会直接创建3个<code>box</code>，而且这次可以<code>ping</code>通每一个box的服务。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; docker exec -it root-box1-1 sh</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ping</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> box1</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ping</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> root-box1-1</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ping</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> root-box1-2</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ping</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> root-box1-3</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ping</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> root-box2-1</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ping</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> box2</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的每一个都能<code>ping</code>通，但无法实现负载均衡。</p>`,23),t=[l];function h(k,p){return a(),i("div",null,t)}const o=s(e,[["render",h],["__file","docker-compose-extend.html.vue"]]),c=JSON.parse('{"path":"/technology/cicd/docker/docker-compose-extend.html","title":"docker compose水平扩展和负载均衡","lang":"zh-CN","frontmatter":{"title":"docker compose水平扩展和负载均衡","icon":"inbox","category":["CI&CD","Docker"],"tag":["CI&CD","Docker","Docker Compose"],"date":"2022-10-25T00:00:00.000Z","isOriginal":true,"star":true,"description":"准备环境 启动容器。 水平扩展就是增加service的数量，例如，增加box1的数量可以这么办。 显示出：box1创建了3个service，并且原来的root-box1-1被重新创建过了。 如果现在不再需要那么多的容器，可以再次执行。 可以看到服务被水平缩减，且root-box1-1又被重新创建了。 查看网络详情。 它的网络都是192.168.网段的。...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/technology/cicd/docker/docker-compose-extend.html"}],["meta",{"property":"og:site_name","content":"添码座"}],["meta",{"property":"og:title","content":"docker compose水平扩展和负载均衡"}],["meta",{"property":"og:description","content":"准备环境 启动容器。 水平扩展就是增加service的数量，例如，增加box1的数量可以这么办。 显示出：box1创建了3个service，并且原来的root-box1-1被重新创建过了。 如果现在不再需要那么多的容器，可以再次执行。 可以看到服务被水平缩减，且root-box1-1又被重新创建了。 查看网络详情。 它的网络都是192.168.网段的。..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"添码座"}],["meta",{"property":"article:tag","content":"CI&CD"}],["meta",{"property":"article:tag","content":"Docker"}],["meta",{"property":"article:tag","content":"Docker Compose"}],["meta",{"property":"article:published_time","content":"2022-10-25T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"docker compose水平扩展和负载均衡\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-10-25T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"添码座\\",\\"url\\":\\"https://www.tianmazuo.com/about/\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":1.98,"words":595},"filePathRelative":"technology/cicd/docker/docker-compose-extend.md","localizedDate":"2022年10月25日","excerpt":"<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">准备环境</p>\\n<div class=\\"language-shell line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"shell\\" data-title=\\"shell\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">version:</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> \\"3.8\\"</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">services:</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> </span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">  box1:</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> </span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">    image:</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> busybox</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\">    command</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">:</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">  /bin/sh</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> -c</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> \\"while true; do sleep 3600; done\\"</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">  box2:</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> </span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">    image:</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> busybox</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\">    command</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">:</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">  /bin/sh</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> -c</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> \\"while true; do sleep 3600; done\\"</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></div>","autoDesc":true}');export{o as comp,c as data};