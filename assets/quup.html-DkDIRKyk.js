import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as e,d as a}from"./app-CiwSPZKD.js";const n={},t=a(`<div class="hint-container important"><p class="hint-container-title">注意</p><p>为了演示方便，所以才在之前/后的<code>节点</code>和<code>关系</code>中使用了中文，在生产环境下还是建议用英文或拼音。</p></div><h2 id="二度关系" tabindex="-1"><a class="header-anchor" href="#二度关系"><span>二度关系</span></a></h2><p>在之前的操作中已经用过<code>match</code>来删除数据，但其实它真正的作用是查询已有的<code>节点</code>或<code>关系</code>，类似于<a href="https://www.mysql.com" target="_blank" rel="noopener noreferrer">MySQL</a>中的<code>SELECT</code>。</p><p>先还原之前的<code>贵圈</code>关系数据。</p><p>查询<code>女星1</code>这个<code>节点</code>。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; match (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">a:Actor</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {name:&quot;女星1&quot;}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) return a</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>查询<code>女星3</code>的<code>旧爱</code>信息。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 可以这样写（有没有 f3 都不影响结果）</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; match (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">f3:Actor</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {name:&quot;女星3&quot;}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) &lt;-[:旧爱]- (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">n:Actor</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) return n</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; match (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">:Actor</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {name:&quot;女星3&quot;}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) &lt;-[:旧爱]- (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">n:Actor</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) return n</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 或者这样写</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; match (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">n:Actor</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) -[:旧爱]-&gt; (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">f3:Actor</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {name:&quot;女星3&quot;}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) return n</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; match (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">n:Actor</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) -[:旧爱]-&gt; (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">:Actor</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {name:&quot;女星3&quot;}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) return n</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 只返回name值</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; match (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">n:Actor</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) -[:旧爱]-&gt; (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">:Actor</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {name:&quot;女星3&quot;}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) return n.name</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于<code>女星3</code>的所有<code>旧爱</code>们来说，它们之间就是<code>二度关系</code>（虽然它们彼此之间可能不知道对方的存在）。</p><p>比较直观的解释是下面这样的。</p><ul><li><p><code>X -[关注]-&gt; 主播 &lt;-[关注]- Y</code>。</p></li><li><p><code>X</code>和<code>Y</code>就是<code>二度关系</code>。</p></li></ul><div class="language-txt line-numbers-mode" data-highlighter="shiki" data-ext="txt" data-title="txt" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>┌-------- 二度关系 --------┐</span></span>
<span class="line"><span>|                         |</span></span>
<span class="line"><span>X -[关注]-&gt; 主播 &lt;-[关注]- Y</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="三度关系" tabindex="-1"><a class="header-anchor" href="#三度关系"><span>三度关系</span></a></h2><p><code>三度关系</code>是<code>二度关系</code>的升级版，它是这样的。</p><ul><li><p><code>X -[关注]-&gt; 主播A &lt;-[关注]- Y -[关注]-&gt; 主播B</code>。</p></li><li><p><code>X</code>和<code>主播B</code>就是<code>三度关系</code>。</p></li></ul><div class="language-txt line-numbers-mode" data-highlighter="shiki" data-ext="txt" data-title="txt" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>┌--------------- 三度关系 --------------┐</span></span>
<span class="line"><span>|                                      |</span></span>
<span class="line"><span>X -[关注]-&gt; 主播A &lt;-[关注]- Y -[关注]-&gt; 主播B</span></span>
<span class="line"><span>|                         |</span></span>
<span class="line"><span>└-------- 二度关系 --------┘</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以这样来理解<code>贵圈</code>的<code>三度关系</code>：<code>X -[旧爱]-&gt; 女星A &lt;-[旧爱]- Y -[旧爱]-&gt; 女星B</code>，就是找到<code>X</code>和<code>女星B</code>。</p><p>查询<code>贵圈</code>的<code>三度关系</code>。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; match (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">a:Actor</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {name:&quot;女星3&quot;}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) &lt;-[:旧爱]- (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">b:Actor</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) -[:旧爱]-&gt; (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">c:Actor</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) return a, b, c</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 或者只显示名字</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; match (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">a:Actor</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {name:&quot;女星3&quot;}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) &lt;-[:旧爱]- (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">b:Actor</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) -[:旧爱]-&gt; (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">c:Actor</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) return a.name, b.name, c.name</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>三度关系</code>的查询结果如下。</p><figure><img src="https://tianmazuo.com/technology/middleware/neo4j/neo4j-11.png" alt="三度关系的查询结果" tabindex="0" loading="lazy"><figcaption>三度关系的查询结果</figcaption></figure><p>结果说明，对于同为<code>女星3</code>的<code>旧爱</code>的<code>男星5/6/7</code>，它们的<code>三度关系</code>就是<code>女星4</code>。</p><p>但是这样结果还是不够直观，删除所有数据，重新初始化<a href="https://neo4j.com/" target="_blank" rel="noopener noreferrer">Neo4j</a>。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 清除所有数据</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; match (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">n</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) detach delete n</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 再输入新的数据</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; merge(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">a:User</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {name:&quot;A&quot;}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">merge(b:User</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {name:&quot;B&quot;}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">merge(c:User</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {name:&quot;C&quot;}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">merge(d:User</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {name:&quot;D&quot;}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">merge(e:User</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {name:&quot;E&quot;}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">merge(f:User</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {name:&quot;F&quot;}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">merge(a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) -[:follow]-&gt; (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">b</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">merge(c</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) -[:follow]-&gt; (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">b</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">merge(a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) -[:follow]-&gt; (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">d</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">merge(a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) -[:follow]-&gt; (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">e</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">merge(c</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) -[:follow]-&gt; (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">e</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">merge(c</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) -[:follow]-&gt; (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">f</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在用的是正经的社交<code>follow</code>数据。</p><figure><img src="https://tianmazuo.com/technology/middleware/neo4j/neo4j-12.png" alt="新的社交数据" tabindex="0" loading="lazy"><figcaption>新的社交数据</figcaption></figure><p>重新查询社交<code>三度关系</code>。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; match (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">a:User</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {name:&quot;B&quot;}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) &lt;-[:follow]- (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">b:User</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) -[:follow]-&gt; (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">c:User</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) return a.name as 主播B, b.name as 主播B的粉丝, c.name as 粉丝关注的新主播</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>查询结果显示，关注<code>主播B</code>的粉丝，有两个都关注了<code>主播E</code>——这正是<code>三度关系</code>对于社交应用的意义之所在——当有新的粉丝关注了<code>主播B</code>后，<code>主播E</code>被平台推荐的可能性会很大。</p><figure><img src="https://tianmazuo.com/technology/middleware/neo4j/neo4j-13.png" alt="新的社交数据" tabindex="0" loading="lazy"><figcaption>新的社交数据</figcaption></figure><p><a href="https://neo4j.com/" target="_blank" rel="noopener noreferrer">Neo4j</a>在查询数据时，也可以实现简单的过滤、排序等命令。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 统计关注主播E的人数，并按倒序排序，再取前3条</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; match (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">a:User</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {name:&quot;B&quot;}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) &lt;-[:follow]- (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">b:User</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) -[:follow]-&gt; (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">c:User</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) return a.name as 主播B, c.name as 粉丝关注的新主播, count(*) as sum order by sum desc limit 3</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>同样，也可以给查询添加<code>where</code>条件。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; match (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">a:User</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {name:&quot;B&quot;}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) &lt;-[:follow]- (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">b:User</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) -[:follow]-&gt; (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">c:User</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) where c.name &lt;&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;D&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> return a.name as 主播B, b.name as 主播B的粉丝, c.name as 粉丝关注的新主播</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><br><h2 id="更新数据" tabindex="-1"><a class="header-anchor" href="#更新数据"><span>更新数据</span></a></h2><p>更新数据包括更新<code>节点</code>和更新<code>关系</code>。</p><ul><li><p>更新<code>节点</code>数据使用<code>match + set</code>的组合。</p></li><li><p>更新<code>关系</code>数据使用<code>match + delete</code>的组合（它也可以用来删除<code>节点</code>）。</p></li></ul><p>修改<code>节点</code>中的<code>属性</code>。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 无则增加，有则更新</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; match (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">a:User</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {name:&quot;A&quot;}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) set a.age = 20</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>其实之前已经操作过关系的<code>删除</code>，再来操作一遍。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; match (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">:User</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {name:&quot;A&quot;}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) -[n:follow]-&gt; (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">:User</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {name:&quot;B&quot;}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) delete n</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,43),l=[t];function h(d,p){return e(),s("div",null,l)}const o=i(n,[["render",h],["__file","quup.html.vue"]]),c=JSON.parse('{"path":"/technology/middleware/neo4j/quup.html","title":"数据查询与更新","lang":"zh-CN","frontmatter":{"title":"数据查询与更新","icon":"users-line","category":["中间件","Neo4j"],"tag":["中间件","Neo4j","节点","关系"],"date":"2023-02-11T00:00:00.000Z","isOriginal":true,"star":true,"description":"注意 为了演示方便，所以才在之前/后的节点和关系中使用了中文，在生产环境下还是建议用英文或拼音。 二度关系 在之前的操作中已经用过match来删除数据，但其实它真正的作用是查询已有的节点或关系，类似于MySQL中的SELECT。 先还原之前的贵圈关系数据。 查询女星1这个节点。 查询女星3的旧爱信息。 对于女星3的所有旧爱们来说，它们之间就是二度关系（...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/technology/middleware/neo4j/quup.html"}],["meta",{"property":"og:site_name","content":"添码座"}],["meta",{"property":"og:title","content":"数据查询与更新"}],["meta",{"property":"og:description","content":"注意 为了演示方便，所以才在之前/后的节点和关系中使用了中文，在生产环境下还是建议用英文或拼音。 二度关系 在之前的操作中已经用过match来删除数据，但其实它真正的作用是查询已有的节点或关系，类似于MySQL中的SELECT。 先还原之前的贵圈关系数据。 查询女星1这个节点。 查询女星3的旧爱信息。 对于女星3的所有旧爱们来说，它们之间就是二度关系（..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://tianmazuo.com/technology/middleware/neo4j/neo4j-11.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"添码座"}],["meta",{"property":"article:tag","content":"中间件"}],["meta",{"property":"article:tag","content":"Neo4j"}],["meta",{"property":"article:tag","content":"节点"}],["meta",{"property":"article:tag","content":"关系"}],["meta",{"property":"article:published_time","content":"2023-02-11T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"数据查询与更新\\",\\"image\\":[\\"https://tianmazuo.com/technology/middleware/neo4j/neo4j-11.png\\",\\"https://tianmazuo.com/technology/middleware/neo4j/neo4j-12.png\\",\\"https://tianmazuo.com/technology/middleware/neo4j/neo4j-13.png\\"],\\"datePublished\\":\\"2023-02-11T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"添码座\\",\\"url\\":\\"https://www.tianmazuo.com/about/\\"}]}"]]},"headers":[{"level":2,"title":"二度关系","slug":"二度关系","link":"#二度关系","children":[]},{"level":2,"title":"三度关系","slug":"三度关系","link":"#三度关系","children":[]},{"level":2,"title":"更新数据","slug":"更新数据","link":"#更新数据","children":[]}],"git":{},"readingTime":{"minutes":3.5,"words":1051},"filePathRelative":"technology/middleware/neo4j/quup.md","localizedDate":"2023年2月11日","excerpt":"<div class=\\"hint-container important\\">\\n<p class=\\"hint-container-title\\">注意</p>\\n<p>为了演示方便，所以才在之前/后的<code>节点</code>和<code>关系</code>中使用了中文，在生产环境下还是建议用英文或拼音。</p>\\n</div>\\n<h2>二度关系</h2>\\n<p>在之前的操作中已经用过<code>match</code>来删除数据，但其实它真正的作用是查询已有的<code>节点</code>或<code>关系</code>，类似于<a href=\\"https://www.mysql.com\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">MySQL</a>中的<code>SELECT</code>。</p>","autoDesc":true}');export{o as comp,c as data};
