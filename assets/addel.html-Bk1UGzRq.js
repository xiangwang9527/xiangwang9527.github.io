import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,d as e}from"./app-CiwSPZKD.js";const n={},t=e(`<h2 id="增加和删除节点" tabindex="-1"><a class="header-anchor" href="#增加和删除节点"><span>增加和删除节点</span></a></h2><p>在<a href="https://neo4j.com/" target="_blank" rel="noopener noreferrer">Neo4j</a>中添加数据可以通过如下命令进行。</p><ul><li><p><code>create</code>：创建新的<code>节点</code>或<code>关系</code>。</p></li><li><p><code>merge</code>：每次创建新的<code>节点</code>或<code>关系</code>前都会先判断目标是否已存在，如果存在则不创建。</p></li></ul><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># m1表示1号男星（m表示性别为male）实例，Actor表示他的类型/标签为男演员，姓名为n1（也就是拼音“男1”）</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; create (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">m1:Actor</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {name:&quot;n1&quot;}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>然后到<a href="http://172.16.185.176:7474/browser/" target="_blank" rel="noopener noreferrer">http://172.16.185.176:7474/browser/</a>中执行。</p><figure><img src="https://tianmazuo.com/technology/middleware/neo4j/neo4j-04.png" alt="执行结果" tabindex="0" loading="lazy"><figcaption>执行结果</figcaption></figure><p>命令都按此方式执行。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 为了确保不增加重复的节点，可以用merge执行</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; merge (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">m2:Actor</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {name:&quot;n2&quot;}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; merge (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">m3:Actor</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {name:&quot;n3&quot;}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; merge (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">m4:Actor</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {name:&quot;n4&quot;}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; merge (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">m5:Actor</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {name:&quot;n5&quot;}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; merge (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">m6:Actor</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {name:&quot;n6&quot;}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; merge (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">m7:Actor</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {name:&quot;n7&quot;}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; merge (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">m8:Actor</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {name:&quot;n8&quot;}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://tianmazuo.com/technology/middleware/neo4j/neo4j-05.png" alt="多次执行merge命令后" tabindex="0" loading="lazy"><figcaption>多次执行merge命令后</figcaption></figure><p>以上命令执行完成后，可以点击旁边的数据库图标看图形化结果。</p><figure><img src="https://tianmazuo.com/technology/middleware/neo4j/neo4j-06.png" alt="添加完所有节点后的效果" tabindex="0" loading="lazy"><figcaption>添加完所有节点后的效果</figcaption></figure><p>再执行下面的命令把这些<code>节点</code>都删除掉。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 删除所有节点（如果节点之间有关系，这个会执行失败）</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; match (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">n</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) delete n</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 或者一次性删除所有节点及其关系（这个无视节点之间的关系约束，它会一并删除掉）</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; match (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">n</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) detach delete n</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>删除所有节点后，左边已经看不到任何节点信息了。</p><figure><img src="https://tianmazuo.com/technology/middleware/neo4j/neo4j-07.png" alt="删除所有节点后的结果" tabindex="0" loading="lazy"><figcaption>删除所有节点后的结果</figcaption></figure><blockquote><p>上面的命令最好在下一步添加<code>关系</code>之前就执行，否则存在<code>关系约束</code>（也就是删除<code>节点</code>之前必须先删除它们之间的<code>关系</code>）之后，再执行起来就会比较麻烦。</p></blockquote><p>下面再来操作这些<code>节点</code>之间的关系。</p><br><h2 id="增加和删除关系" tabindex="-1"><a class="header-anchor" href="#增加和删除关系"><span>增加和删除关系</span></a></h2><div class="hint-container important"><p class="hint-container-title">特别注意</p><p><code>节点</code>要和关系一起添加，如果它们不在一起执行，就会出现意想不到的情况。</p><p>例如，一条条地执行下面的命令。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 增加节点</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; merge (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">m2:Actor</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {name:&quot;n2&quot;}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; merge (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">m5:Actor</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {name:&quot;n5&quot;}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 给节点增加关系</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; merge (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">m2:Actor</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {name:&quot;n2&quot;}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) -[:cousin]-&gt; (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">m5:Actor</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {name:&quot;n5&quot;}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果就会像下面这样。</p><figure><img src="https://tianmazuo.com/technology/middleware/neo4j/neo4j-08.png" alt="出现了意想不到情况" tabindex="0" loading="lazy"><figcaption>出现了意想不到情况</figcaption></figure><p>这是因为<a href="https://neo4j.com/" target="_blank" rel="noopener noreferrer">Neo4j</a>是以<code>事务的方式</code>执行命令的，也就是它会将同一批语句看作一个<code>事务</code>，其中语句之间是有<code>上下文</code>关系的。</p><p>当执行完<code>merge (m2:Actor {name:&quot;n2&quot;})</code>和<code>merge (m5:Actor {name:&quot;n5&quot;})</code>，再重新执行<code>merge (m2:Actor {name:&quot;n2&quot;}) -[:cousin]-&gt; (m5:Actor {name:&quot;n5&quot;})</code>时，它会认为这两个节点是和前面没有关系的新节点，并重新创建它们。</p><p>虽然变量名和属性一样，但这些节点在<a href="https://neo4j.com/" target="_blank" rel="noopener noreferrer">Neo4j</a>内部的<code>id</code>是不一样的（感兴趣的可以自己单击节点看看）。</p></div><p>知道原因之后，再来验证这个想法是否正确。</p><p>先清除错误的数据。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 先删除两个节点之间的某个关系（这里的f可以用其他的合法符号替换）</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; match (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">m2:Actor</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {name:&quot;n2&quot;}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) -[f:cousin]-&gt; (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">m5:Actor</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {name:&quot;n5&quot;}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) delete f</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 再逐个删除节点</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; match (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">m2:Actor</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">{name:</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">&quot;n2&quot;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) delete m2</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; match (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">m5:Actor</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">{name:</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">&quot;n5&quot;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) delete m5</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 也可以使用下面的语句删除某个节点及其所有的关系</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; match (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">m1:Actor</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {name:&quot;男星1&quot;}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) detach delete m1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 或者一次性删除所有节点及其关系</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; match (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">n</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) detach delete n</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后把下面所有的语句一次全部执行完。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 拷贝下面的语句并一次性全部执行</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 这里用 merge (m2:Actor {name:&quot;n2&quot;}) -[:cousin]-&gt; (m5:Actor {name:&quot;n5&quot;}) 会报错</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; merge (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">m2:Actor</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {name:&quot;n2&quot;}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) merge (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">m5:Actor</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {name:&quot;n5&quot;}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) merge (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">m2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) -[:cousin]-&gt; (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">m5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的语句之所以可以正确执行，是因为它们在同一个<code>事务</code>内，最后一条语句<code>merge (m2) -[:cousin]-&gt; (m5)</code>中的<code>m2</code>和<code>m5</code>是依赖于前面语句中已经定义的<code>变量</code>的，会话只在当前执行期间有效。</p><p>再次清除测试数据。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; match (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">n</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) detach delete n</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>最后，按照<code>异兽志</code>图谱，一次性添加所有的男星及其之间的关系（好像女星之间没啥关系），而且把它们都换成中文显示。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; merge (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">m1:Actor</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {name:&quot;男星1&quot;}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) merge (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">m2:Actor</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {name:&quot;男星2&quot;}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) merge (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">m3:Actor</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {name:&quot;男星3&quot;}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) merge (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">m4:Actor</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {name:&quot;男星4&quot;}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) merge (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">m5:Actor</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {name:&quot;男星5&quot;}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) merge (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">m6:Actor</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {name:&quot;男星6&quot;}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) merge (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">m7:Actor</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {name:&quot;男星7&quot;}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) merge (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">m8:Actor</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {name:&quot;男星8&quot;}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) merge (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">m2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) -[:堂兄弟]-&gt; (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">m5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) merge (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">m4</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) -[:好友]-&gt; (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">m3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) merge (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">m5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) -[:仇家]-&gt; (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">m4</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) merge (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">m5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) -[:拜把兄弟]-&gt; (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">m7</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) merge (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">m8</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) -[:经纪人]-&gt; (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">m6</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 注意：除了最后一条命令外，其他每一条命令后面都有空格，不然全部拷贝到Neo4j中执行会出错</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; merge (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">m1:Actor</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {name:&quot;男星1&quot;}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">merge</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (m2:Actor </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">{name:&quot;男星2&quot;}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">merge</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (m3:Actor </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">{name:&quot;男星3&quot;}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">merge</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (m4:Actor </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">{name:&quot;男星4&quot;}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">merge</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (m5:Actor </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">{name:&quot;男星5&quot;}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">merge</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (m6:Actor </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">{name:&quot;男星6&quot;}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">merge</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (m7:Actor </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">{name:&quot;男星7&quot;}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">merge</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (m8:Actor </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">{name:&quot;男星8&quot;}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">merge</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (f1:Actor </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">{name:&quot;女星1&quot;}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">merge</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (f2:Actor </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">{name:&quot;女星2&quot;}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">merge</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (f3:Actor </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">{name:&quot;女星3&quot;}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">merge</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (f4:Actor </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">{name:&quot;女星4&quot;}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">merge</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (f5:Actor </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">{name:&quot;女星5&quot;}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">merge</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (m2) -[:堂兄弟]-&gt; (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">m5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">merge</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (m4) -[:好友]-&gt; (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">m3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">merge</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (m5) -[:仇家]-&gt; (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">m4</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">merge</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (m5) -[:拜把兄弟]-&gt; (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">m7</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">merge</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (m8) -[:经纪人]-&gt; (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">m6</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">merge</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (f1) -[:夫妻]-&gt; (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">m1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">merge</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (m1) -[:旧爱]-&gt; (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">f4</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">merge</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (m2) -[:离异]-&gt; (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">f1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">merge</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (m2) -[:兄妹]-&gt; (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">f5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">merge</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (m4) -[:旧爱]-&gt; (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">f2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">merge</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (f2) -[:离异]-&gt; (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">m3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">merge</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (m3) -[:绯闻]-&gt; (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">f3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">merge</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (m5) -[:旧爱]-&gt; (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">f3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">merge</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (m7) -[:旧爱]-&gt; (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">f3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">merge</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (m1) -[:旧爱]-&gt; (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">f3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">merge</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (m6) -[:旧爱]-&gt; (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">f3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">merge</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (f4) -[:旧爱]-&gt; (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">m8</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">merge</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (f5) -[:离异]-&gt; (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">m8</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行之后，结果显示如下。</p><figure><img src="https://tianmazuo.com/technology/middleware/neo4j/neo4j-09.png" alt="对关系的完美还原" tabindex="0" loading="lazy"><figcaption>对<code>贵圈</code>关系的完美还原</figcaption></figure><p>可以看到，<a href="https://neo4j.com/" target="_blank" rel="noopener noreferrer">Neo4j</a>已经完美地还原出了<a href="https://baike.baidu.com/item/%E5%BC%82%E5%85%BD%E5%BF%97" target="_blank" rel="noopener noreferrer">《山海经·异兽志》</a>的复杂关系——<a href="https://zh.wikipedia.org/wiki/%E6%89%80%E8%A7%81%E5%8D%B3%E6%89%80%E5%BE%97" target="_blank" rel="noopener noreferrer">WYSIWYG</a>。</p><p>如果这些都用<a href="https://www.mysql.com" target="_blank" rel="noopener noreferrer">MySQL</a>来搞，恐怕很难看见全貌。</p><p>另外，除了<code>单向关系</code>，<a href="https://neo4j.com/" target="_blank" rel="noopener noreferrer">Neo4j</a>也能管理好<code>双向关系</code>。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 先清除数据，排除干扰</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; match (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">n</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) detach delete n</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 然后增加一个双向关系</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; merge (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">a:Actor</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {name:&quot;女星1&quot;}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) merge (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">b:Actor</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {name:&quot;男星1&quot;}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) merge (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) -[:一般朋友]-&gt; (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">b</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) merge (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">b</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) -[:暗恋]-&gt; (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://tianmazuo.com/technology/middleware/neo4j/neo4j-10.png" alt="双向关系" tabindex="0" loading="lazy"><figcaption>双向关系</figcaption></figure>`,38),l=[t];function h(k,p){return a(),s("div",null,l)}const g=i(n,[["render",h],["__file","addel.html.vue"]]),o=JSON.parse('{"path":"/technology/middleware/neo4j/addel.html","title":"增删节点和关系","lang":"zh-CN","frontmatter":{"title":"增删节点和关系","icon":"users-line","category":["中间件","Neo4j"],"tag":["中间件","Neo4j","节点","关系"],"date":"2023-02-10T00:00:00.000Z","isOriginal":true,"star":true,"description":"增加和删除节点 在Neo4j中添加数据可以通过如下命令进行。 create：创建新的节点或关系。 merge：每次创建新的节点或关系前都会先判断目标是否已存在，如果存在则不创建。 然后到http://172.16.185.176:7474/browser/中执行。 执行结果执行结果 命令都按此方式执行。 多次执行merge命令后多次执行merge命令后...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/technology/middleware/neo4j/addel.html"}],["meta",{"property":"og:site_name","content":"添码座"}],["meta",{"property":"og:title","content":"增删节点和关系"}],["meta",{"property":"og:description","content":"增加和删除节点 在Neo4j中添加数据可以通过如下命令进行。 create：创建新的节点或关系。 merge：每次创建新的节点或关系前都会先判断目标是否已存在，如果存在则不创建。 然后到http://172.16.185.176:7474/browser/中执行。 执行结果执行结果 命令都按此方式执行。 多次执行merge命令后多次执行merge命令后..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://tianmazuo.com/technology/middleware/neo4j/neo4j-04.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"添码座"}],["meta",{"property":"article:tag","content":"中间件"}],["meta",{"property":"article:tag","content":"Neo4j"}],["meta",{"property":"article:tag","content":"节点"}],["meta",{"property":"article:tag","content":"关系"}],["meta",{"property":"article:published_time","content":"2023-02-10T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"增删节点和关系\\",\\"image\\":[\\"https://tianmazuo.com/technology/middleware/neo4j/neo4j-04.png\\",\\"https://tianmazuo.com/technology/middleware/neo4j/neo4j-05.png\\",\\"https://tianmazuo.com/technology/middleware/neo4j/neo4j-06.png\\",\\"https://tianmazuo.com/technology/middleware/neo4j/neo4j-07.png\\",\\"https://tianmazuo.com/technology/middleware/neo4j/neo4j-08.png\\",\\"https://tianmazuo.com/technology/middleware/neo4j/neo4j-09.png\\",\\"https://tianmazuo.com/technology/middleware/neo4j/neo4j-10.png\\"],\\"datePublished\\":\\"2023-02-10T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"添码座\\",\\"url\\":\\"https://www.tianmazuo.com/about/\\"}]}"]]},"headers":[{"level":2,"title":"增加和删除节点","slug":"增加和删除节点","link":"#增加和删除节点","children":[]},{"level":2,"title":"增加和删除关系","slug":"增加和删除关系","link":"#增加和删除关系","children":[]}],"git":{},"readingTime":{"minutes":5.15,"words":1545},"filePathRelative":"technology/middleware/neo4j/addel.md","localizedDate":"2023年2月10日","excerpt":"<h2>增加和删除节点</h2>\\n<p>在<a href=\\"https://neo4j.com/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Neo4j</a>中添加数据可以通过如下命令进行。</p>\\n<ul>\\n<li>\\n<p><code>create</code>：创建新的<code>节点</code>或<code>关系</code>。</p>\\n</li>\\n<li>\\n<p><code>merge</code>：每次创建新的<code>节点</code>或<code>关系</code>前都会先判断目标是否已存在，如果存在则不创建。</p>\\n</li>\\n</ul>","autoDesc":true}');export{g as comp,o as data};