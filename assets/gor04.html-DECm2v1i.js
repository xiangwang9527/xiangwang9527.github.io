import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as a,d as n}from"./app-CiwSPZKD.js";const e={},l=n(`<h2 id="实现思路" tabindex="-1"><a class="header-anchor" href="#实现思路"><span>实现思路</span></a></h2><p>其实每一层用户的行为都可以找到对应的表。</p><ul><li><p><code>活跃</code>：对应于表<code>dws_app_open_history</code>。</p></li><li><p><code>商品详情页</code>：对应于表<code>dwd_goods_item</code>。</p></li><li><p><code>下单</code>：对应于表<code>dwd_order</code>。</p></li><li><p><code>支付</code>：对应于表<code>dwd_order</code>。</p></li></ul><p>可以对每个表计算每一层的转化率，然后将结果保存到<code>APP层</code>的<code>app_conver_rate</code>表中。</p><br><h2 id="app层开发" tabindex="-1"><a class="header-anchor" href="#app层开发"><span>APP层开发</span></a></h2><p>初始化<code>APP层</code>的<code>app_conver_rate</code>表。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; cd /home/work/warehouse_goods_order</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; vi app_shopmall_requirement04_init.sh</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#!/bin/bash</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 需求四：漏斗分析</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># app层数据库和表初始化脚本，只需要执行一次即可</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">hive</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">create database if not exists app_shopmall;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">create external table if not exists app_shopmall.app_conver_rate (</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    active_num            int,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    item_num              int,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    order_num             int,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    pay_num               int,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    active_to_item_ratio  decimal(10, 2),</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    item_to_order_ratio   decimal(10, 2),</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    order_to_pay_ratio    decimal(10, 2)</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">) partitioned by(dt string) </span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  row format delimited  </span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  fields terminated by &#39;\\t&#39;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  location &#39;hdfs://server01:9000/data/app/conver_rate/&#39;;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再按照天来分区，并在每天的凌晨时执行一次。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; cd /home/work/warehouse_goods_order</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; vi app_shopmall_requirement04_add_partition.sh</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#!/bin/bash</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 需求四：漏斗分析</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 每天凌晨执行一次</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [ </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;d</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">$1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;d&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ]</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">then</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dt</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">\`</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">date</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> +%Y%m%d </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">--date=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;1 days ago&quot;\`</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">else</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dt</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">$1</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">hive</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">insert overwrite table app_shopmall.app_conver_rate partition(dt = &#39;</span><span style="--shiki-light:#E45649;--shiki-dark:#98C379;">\${</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dt</span><span style="--shiki-light:#E45649;--shiki-dark:#98C379;">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;) select </span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">daoh.active_num,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">dgi.item_num,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">do.order_num,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">do.pay_num,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">dgi.item_num / daoh.active_num as active_to_item_ratio,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">do.order_num / dgi.item_num as item_to_order_ratio,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">do.pay_num / do.order_num as order_to_pay_ratio</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">from</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">(</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    select </span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	count(*) as active_num</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	from dws_shopmall.dws_app_open_history</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	where dt = &#39;</span><span style="--shiki-light:#E45649;--shiki-dark:#98C379;">\${</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dt</span><span style="--shiki-light:#E45649;--shiki-dark:#98C379;">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">) as daoh</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">join</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">(</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    select </span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	count(distinct goodsid) as item_num</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	from dwd_shopmall.dwd_goods_item</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    where dt = &#39;</span><span style="--shiki-light:#E45649;--shiki-dark:#98C379;">\${</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dt</span><span style="--shiki-light:#E45649;--shiki-dark:#98C379;">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">) as dgi</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">on 1 = 1</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">join</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">(</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    select</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	count(*) as order_num,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	sum(case when status != 0 then 1 else 0 end) as pay_num</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	from dwd_shopmall.dwd_order</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	where dt = &#39;</span><span style="--shiki-light:#E45649;--shiki-dark:#98C379;">\${</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dt</span><span style="--shiki-light:#E45649;--shiki-dark:#98C379;">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">) as do</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">on 1 = 1;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以通过定时任务来执行它。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; crontab -e</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 每天凌晨0点1分执行</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">1</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> *</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> *</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> *</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /home/work/warehouse_goods_order/app_shopmall_requirement04_add_partition.sh</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),t=[l];function p(d,h){return a(),i("div",null,t)}const c=s(e,[["render",p],["__file","gor04.html.vue"]]),o=JSON.parse('{"path":"/application/case/warehouse/gor04.html","title":"需求四：漏斗转化分析","lang":"zh-CN","frontmatter":{"title":"需求四：漏斗转化分析","icon":"user-tag","category":["案例","数据仓库"],"tag":["案例","数据仓库","商品订单"],"date":"2024-06-07T00:00:00.000Z","isOriginal":true,"star":true,"description":"实现思路 其实每一层用户的行为都可以找到对应的表。 活跃：对应于表dws_app_open_history。 商品详情页：对应于表dwd_goods_item。 下单：对应于表dwd_order。 支付：对应于表dwd_order。 可以对每个表计算每一层的转化率，然后将结果保存到APP层的app_conver_rate表中。 APP层开发 初始化AP...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/application/case/warehouse/gor04.html"}],["meta",{"property":"og:site_name","content":"添码座"}],["meta",{"property":"og:title","content":"需求四：漏斗转化分析"}],["meta",{"property":"og:description","content":"实现思路 其实每一层用户的行为都可以找到对应的表。 活跃：对应于表dws_app_open_history。 商品详情页：对应于表dwd_goods_item。 下单：对应于表dwd_order。 支付：对应于表dwd_order。 可以对每个表计算每一层的转化率，然后将结果保存到APP层的app_conver_rate表中。 APP层开发 初始化AP..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"添码座"}],["meta",{"property":"article:tag","content":"案例"}],["meta",{"property":"article:tag","content":"数据仓库"}],["meta",{"property":"article:tag","content":"商品订单"}],["meta",{"property":"article:published_time","content":"2024-06-07T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"需求四：漏斗转化分析\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-06-07T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"添码座\\",\\"url\\":\\"https://www.tianmazuo.com/about/\\"}]}"]]},"headers":[{"level":2,"title":"实现思路","slug":"实现思路","link":"#实现思路","children":[]},{"level":2,"title":"APP层开发","slug":"app层开发","link":"#app层开发","children":[]}],"git":{},"readingTime":{"minutes":1.3,"words":390},"filePathRelative":"application/case/warehouse/gor04.md","localizedDate":"2024年6月7日","excerpt":"<h2>实现思路</h2>\\n<p>其实每一层用户的行为都可以找到对应的表。</p>\\n<ul>\\n<li>\\n<p><code>活跃</code>：对应于表<code>dws_app_open_history</code>。</p>\\n</li>\\n<li>\\n<p><code>商品详情页</code>：对应于表<code>dwd_goods_item</code>。</p>\\n</li>\\n<li>\\n<p><code>下单</code>：对应于表<code>dwd_order</code>。</p>\\n</li>\\n<li>\\n<p><code>支付</code>：对应于表<code>dwd_order</code>。</p>\\n</li>\\n</ul>","autoDesc":true}');export{c as comp,o as data};
