import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as a,d as n}from"./app-B5m7CcSj.js";const l={},h=n(`<p><a href="https://www.lua.org/" target="_blank" rel="noopener noreferrer">Lua</a>中其实没有类和对象的概念，但它用<code>table</code> + <code>function</code>模拟出了某些面向对象的特性。</p><div class="language-lua line-numbers-mode" data-highlighter="shiki" data-ext="lua" data-title="lua" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">-- 元类</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Person</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = {</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;lixingyun&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">age</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">19</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">gender</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;male&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">-- 定义类的结构</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Person</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">new</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">person</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">age</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">gender</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    person</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">person</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> or {}</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    setmetatable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">person</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">self</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">    self</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.__index = </span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">self</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">    self</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.name = </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> or </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;lixingyun&quot;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">    self</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.age = </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">age</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> or </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">    self</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.gender = </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">gender</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> or </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;male&quot;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> person</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">end</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">-- 定义类的方法</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Person</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">getName</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;该用户为：&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">self</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.name)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">end</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">-- 创建对象</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Person</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">new</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">person</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;wanglin&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">20</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;male&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">-- 访问对象的属性</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.name)</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.age)</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.gender)</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">-- 调用对象的方法</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">getName</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">-- User继承了Person</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">User</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Person</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">new</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> User</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">new</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">user</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">address</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    user</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">user</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> or </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Person</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">new</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">user</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">address</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    setmetatable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">user</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">self</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">    self</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.__index = </span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">self</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">    self</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.address = </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">address</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> or </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;娆疆&quot;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> user</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">end</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">-- 派生类方法getArea</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> User</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">getArea</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ()</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;该用户目前在：&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">self</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.address)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">end</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">-- 创建对象</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">u</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">User</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">new</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">user</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;大唐&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">u</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">getArea</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不过在<a href="https://www.lua.org/" target="_blank" rel="noopener noreferrer">Lua</a>脚本中，基本上看不到这种创建类和使用类的代码，因为它只是一个脚本而已，无需给自己加那么多戏。</p><p>况且<a href="https://www.lua.org/" target="_blank" rel="noopener noreferrer">Lua</a>基本上都是通过调用<a href="https://www.nginx.org/" target="_blank" rel="noopener noreferrer">Nginx</a>的<code>API</code>或其他模块的功能来完成任务的。</p>`,4),k=[h];function t(e,p){return a(),i("div",null,k)}const B=s(l,[["render",t],["__file","object.html.vue"]]),A=JSON.parse('{"path":"/technology/programming/lua/object.html","title":"面向对象","lang":"zh-CN","frontmatter":{"title":"面向对象","icon":"scroll","category":["编程语言","LUA"],"tag":["编程语言","LUA"],"date":"2023-02-22T00:00:00.000Z","isOriginal":true,"star":true,"description":"Lua中其实没有类和对象的概念，但它用table + function模拟出了某些面向对象的特性。 不过在Lua脚本中，基本上看不到这种创建类和使用类的代码，因为它只是一个脚本而已，无需给自己加那么多戏。 况且Lua基本上都是通过调用Nginx的API或其他模块的功能来完成任务的。","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/technology/programming/lua/object.html"}],["meta",{"property":"og:site_name","content":"添码座"}],["meta",{"property":"og:title","content":"面向对象"}],["meta",{"property":"og:description","content":"Lua中其实没有类和对象的概念，但它用table + function模拟出了某些面向对象的特性。 不过在Lua脚本中，基本上看不到这种创建类和使用类的代码，因为它只是一个脚本而已，无需给自己加那么多戏。 况且Lua基本上都是通过调用Nginx的API或其他模块的功能来完成任务的。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"添码座"}],["meta",{"property":"article:tag","content":"编程语言"}],["meta",{"property":"article:tag","content":"LUA"}],["meta",{"property":"article:published_time","content":"2023-02-22T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"面向对象\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-02-22T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"添码座\\",\\"url\\":\\"https://www.tianmazuo.com/about/\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":1,"words":299},"filePathRelative":"technology/programming/lua/object.md","localizedDate":"2023年2月22日","excerpt":"<p><a href=\\"https://www.lua.org/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Lua</a>中其实没有类和对象的概念，但它用<code>table</code> + <code>function</code>模拟出了某些面向对象的特性。</p>\\n<div class=\\"language-lua line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"lua\\" data-title=\\"lua\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic\\">-- 元类</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">Person</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> = {</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">name</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> = </span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">\\"lixingyun\\"</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">age</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> = </span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">19</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">gender</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> = </span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">\\"male\\"</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">}</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic\\">-- 定义类的结构</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">function</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\"> Person</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">:</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">new</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic\\">person</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic\\">name</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic\\">age</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic\\">gender</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">)</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">    person</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> = </span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">person</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> or {}</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\">    setmetatable</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">person</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\">self</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">)</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\">    self</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.__index = </span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\">self</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\">    self</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.name = </span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">name</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> or </span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">\\"lixingyun\\"</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\">    self</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.age = </span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">age</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> or </span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">0</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\">    self</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.gender = </span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">gender</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> or </span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">\\"male\\"</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">    return</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\"> person</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">end</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic\\">-- 定义类的方法</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">function</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\"> Person</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">:</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">getName</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">()</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\">    print</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">\\"该用户为：\\"</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\">self</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.name)</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">end</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic\\">-- 创建对象</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">p</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> = </span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">Person</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">:</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">new</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> (</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">person</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">\\"wanglin\\"</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">20</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">\\"male\\"</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">)</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic\\">-- 访问对象的属性</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\">print</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">p</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.name)</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\">print</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">p</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.age)</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\">print</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">p</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.gender)</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic\\">-- 调用对象的方法</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">p</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">:</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">getName</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">()</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic\\">-- User继承了Person</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">User</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> = </span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">Person</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">:</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">new</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">()</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">function</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\"> User</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">:</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">new</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> (</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic\\">user</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic\\">address</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">)</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">    user</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> = </span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">user</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> or </span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">Person</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">:</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">new</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">user</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">address</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">)</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\">    setmetatable</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">user</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\">self</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">)</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\">    self</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.__index = </span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\">self</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\">    self</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.address = </span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">address</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> or </span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">\\"娆疆\\"</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">    return</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\"> user</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">end</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic\\">-- 派生类方法getArea</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">function</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\"> User</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">:</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">getArea</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> ()</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\">    print</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">\\"该用户目前在：\\"</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\">self</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.address)</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">end</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic\\">-- 创建对象</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">u</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> = </span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">User</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">:</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">new</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">user</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">\\"大唐\\"</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">)</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">u</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">:</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">getArea</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">()</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{B as comp,A as data};