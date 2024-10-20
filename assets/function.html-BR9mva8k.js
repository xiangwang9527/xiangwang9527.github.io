import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as a,d as n}from"./app-B5m7CcSj.js";const l={},h=n(`<h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数"><span>函数</span></a></h2><p>函数是<a href="https://code.google.com/archive/p/aviator/" target="_blank" rel="noopener noreferrer">Aviator</a>中的一等公民，可以通过<code>fn</code>来定义函数。</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">fn </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">add</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(x</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> y) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">  ## 这里也可以写成x </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> y，不加分号</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">，这种方式也可以返回值</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  return</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> x </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> y</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">res </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> add</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">println</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(res)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">res </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> add</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;hello&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot; aviator&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">println</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(res)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">## 函数也可以通过参数个数进行重写</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">fn </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">add</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(x</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> y</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> z) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    x </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> y </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> z</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">println</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">add</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 3</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">))</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://code.google.com/archive/p/aviator/" target="_blank" rel="noopener noreferrer">Aviator</a>也支持函数的变长参数。</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">## 通过</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&amp;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">定义变长参数，但是第一参数不能省略，而且不能用</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&amp;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">fn </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">add</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(param</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> &amp;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">args) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    let res </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    for</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> arg in args {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        res </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> res </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> param </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> arg</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  return</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> res</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">println</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">add</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;a&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;b&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">))</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">println</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">add</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;a&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;b&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;c&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;d&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">))</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://code.google.com/archive/p/aviator/" target="_blank" rel="noopener noreferrer">Aviator</a>中的参数解包和<a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">Python</a>类似。</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">## 定义一个参数解包函数</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">fn </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">unpack</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> b</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> c</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> d) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    a </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">*</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> b </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> c </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">*</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> d</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">a </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> tuple</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">list </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> seq</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">list</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">4</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">## 如果没有参数解包功能，就必须这样传参：</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">unpack</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(a[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> a[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> list[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> list[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">])</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">## 通过参数解包，可以这样传参：</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">unpack</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">*</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> *</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">list)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">println</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">unpack</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">*</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> *</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">list))</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="闭包" tabindex="-1"><a class="header-anchor" href="#闭包"><span>闭包</span></a></h2><p><a href="https://code.google.com/archive/p/aviator/" target="_blank" rel="noopener noreferrer">Aviator</a>中的所谓<code>闭包</code>（<code>Closure</code>），就是一段被封装的<code>lambda表达式</code>代码。</p><div class="language-avaitor line-numbers-mode" data-highlighter="shiki" data-ext="avaitor" data-title="avaitor" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>## 如果没有外层lambda()，c2执行时就会受c1的结果干扰</span></span>
<span class="line"><span>## 如果没有内层lambda()，就做不了累加计算</span></span>
<span class="line"><span>## 两个lambda()表达式共同组成了闭包</span></span>
<span class="line"><span>let counter = lambda() -&gt;</span></span>
<span class="line"><span>    let c = 0;</span></span>
<span class="line"><span>    lambda() -&gt;</span></span>
<span class="line"><span>        let result = c;</span></span>
<span class="line"><span>        c = c + 1;</span></span>
<span class="line"><span>        return result;</span></span>
<span class="line"><span>    end</span></span>
<span class="line"><span>end;</span></span>
<span class="line"><span>c1 = counter();</span></span>
<span class="line"><span>c2 = counter();</span></span>
<span class="line"><span>println(&quot;test c1...&quot;);</span></span>
<span class="line"><span>for i in range(0, 10) {</span></span>
<span class="line"><span>    print(c1() + &quot;\\t&quot;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>println();</span></span>
<span class="line"><span>println(&quot;test c2...&quot;);</span></span>
<span class="line"><span>for i in range(0, 10) {</span></span>
<span class="line"><span>    print(c2() + &quot;\\t&quot;);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),t=[h];function e(k,p){return a(),i("div",null,t)}const g=s(l,[["render",e],["__file","function.html.vue"]]),A=JSON.parse('{"path":"/technology/programming/aviator/function.html","title":"函数和闭包","lang":"zh-CN","frontmatter":{"title":"函数和闭包","icon":"paper-plane","category":["编程语言","Aviator"],"tag":["编程语言","Aviator"],"date":"2023-01-17T00:00:00.000Z","isOriginal":true,"star":true,"description":"函数 函数是Aviator中的一等公民，可以通过fn来定义函数。 Aviator也支持函数的变长参数。 Aviator中的参数解包和Python类似。 闭包 Aviator中的所谓闭包（Closure），就是一段被封装的lambda表达式代码。","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/technology/programming/aviator/function.html"}],["meta",{"property":"og:site_name","content":"添码座"}],["meta",{"property":"og:title","content":"函数和闭包"}],["meta",{"property":"og:description","content":"函数 函数是Aviator中的一等公民，可以通过fn来定义函数。 Aviator也支持函数的变长参数。 Aviator中的参数解包和Python类似。 闭包 Aviator中的所谓闭包（Closure），就是一段被封装的lambda表达式代码。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"添码座"}],["meta",{"property":"article:tag","content":"编程语言"}],["meta",{"property":"article:tag","content":"Aviator"}],["meta",{"property":"article:published_time","content":"2023-01-17T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"函数和闭包\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-17T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"添码座\\",\\"url\\":\\"https://www.tianmazuo.com/about/\\"}]}"]]},"headers":[{"level":2,"title":"函数","slug":"函数","link":"#函数","children":[]},{"level":2,"title":"闭包","slug":"闭包","link":"#闭包","children":[]}],"git":{},"readingTime":{"minutes":1.33,"words":398},"filePathRelative":"technology/programming/aviator/function.md","localizedDate":"2023年1月17日","excerpt":"<h2>函数</h2>\\n<p>函数是<a href=\\"https://code.google.com/archive/p/aviator/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Aviator</a>中的一等公民，可以通过<code>fn</code>来定义函数。</p>\\n<div class=\\"language-java line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"java\\" data-title=\\"java\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">fn </span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">add</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">(x</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">,</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\"> y) {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">  ## 这里也可以写成x </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">+</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\"> y，不加分号</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">;</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">，这种方式也可以返回值</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">  return</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\"> x </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">+</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\"> y</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">}</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">res </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\"> add</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">(</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">1</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">,</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> 2</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">)</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">println</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">(res)</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">res </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\"> add</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">(</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">\\"hello\\"</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">,</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> \\" aviator\\"</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">)</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">println</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">(res)</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">## 函数也可以通过参数个数进行重写</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">fn </span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">add</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">(x</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">,</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\"> y</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">,</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\"> z) {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">    x </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">+</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\"> y </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">+</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\"> z</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">}</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">println</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">(</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">add</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">(</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">1</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">,</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> 2</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">,</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> 3</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">))</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">;</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{g as comp,A as data};