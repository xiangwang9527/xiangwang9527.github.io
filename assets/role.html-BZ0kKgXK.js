import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,d as e}from"./app-CiwSPZKD.js";const n={},t=e(`<h2 id="角色继承" tabindex="-1"><a class="header-anchor" href="#角色继承"><span>角色继承</span></a></h2><p>有时候角色与用户并不是完全一一对应的，在刚开始的时候，<code>admin</code>用户可能只有<code>ROLE_ADMIN</code>角色，<code>manager</code>用户也只有<code>ROLE_MANAGER</code>角色。</p><p>但如果希望给<code>admin</code>用户授予<code>manager</code>的角色，该怎么办呢？</p><p>这就需要用到<a href="https://spring.io/projects/spring-security" target="_blank" rel="noopener noreferrer">Spring Security</a>的角色<code>继承</code>功能了。</p><p>在用户表中增加<code>employee</code>用户。</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">INSERT INTO</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> sys_user </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">VALUES</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;employee&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;123456&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>给<code>employee</code>用户赋予ROLE_EMPLOYEE角色。</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">INSERT INTO</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> sys_role </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">VALUES</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;ROLE_EMPLOYEE&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>然后配置角色权限。</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">INSERT INTO</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> sys_permission </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">VALUES</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;/employee&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;read&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">INSERT INTO</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> sys_permission </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">VALUES</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">6</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;/employee&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;remove&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>修改<code>LoginController</code>登录类。</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">......</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">GetMapping</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;/employee&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">PreAuthorize</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;hasRole(&#39;ROLE_EMPLOYEE&#39;)&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> String</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> employee</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">() {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">	return</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;employee有ROLE_EMPLOYEE角色&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">......</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后修改<code>WebSecurityConfiguration</code>，引入<code>RoleHierarchy</code>角色继承类。</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">......</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// 角色继承</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">Bean</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> RoleHierarchy</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> roleHierarchy</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">() {</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">	RoleHierarchyImpl</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> roleHierarchy </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> RoleHierarchyImpl</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">	// 多个角色用【&gt;】表示，【&gt;】左边角色的权限要大于右边角色的权限</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">	String</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> hierarchy </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;ROLE_ADMIN &gt; ROLE_MANAGER &quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">lineSeparator</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot; ROLE_MANAGER &gt; ROLE_EMPLOYEE&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">	// 也可以写成  &quot;ROLE_ADMIN &gt; ROLE_MANAGER &gt; ROLE_EMPLOYEE&quot;;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">	roleHierarchy</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">setHierarchy</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(hierarchy);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">	return</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> roleHierarchy</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">......</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行<a href="https://www.postman.com/" target="_blank" rel="noopener noreferrer">Postman</a>，测试用户各自的所拥有的角色是否能访问成功。</p><ul><li><p><code>admin</code>：拥有<code>{ ROLE_ADMIN, ROLE_MANAGER, ROLE_EMPLOYEE }</code>。</p></li><li><p><code>manager</code>：拥有<code>{ ROLE_MANAGER, ROLE_EMPLOYEE }</code>。</p></li><li><p><code>employee</code>：拥有<code>{ ROLE_EMPLOYEE }</code>。</p></li></ul><p>结合之前的权限细化，可以看到<a href="https://spring.io/projects/spring-security" target="_blank" rel="noopener noreferrer">Spring Security</a>有以下几个特点。</p><ul><li><p>角色可以被继承，但权限并不能<code>跟随</code>角色一起被继承。</p></li><li><p><code>admin</code>只能访问<code>/admin/create</code>和<code>/admin/read</code>这两个接口。</p></li><li><p><code>manager</code>只能访问<code>/manager/create</code>和<code>/manager/remove</code>这两个接口。</p></li><li><p><code>admin</code>虽然继承了角色<code>ROLE_MANAGER</code>，但并没有获得<code>ROLE_MANAGER</code>对应的权限。</p></li></ul><p>这说明加入权限后，<a href="https://spring.io/projects/spring-security" target="_blank" rel="noopener noreferrer">Spring Security</a>的角色继承就会失效。</p><br><h2 id="权限完善" tabindex="-1"><a class="header-anchor" href="#权限完善"><span>权限完善</span></a></h2><p>因为权限无法跟随角色被继承，所以需要手动去完善它。</p><p>为了让<code>admin</code>也能访问<code>manager</code>的接口，就要赋予角色更多的权限。</p><p>现在把<code>manager</code>和<code>employee</code>的权限都赋予<code>admin</code>。</p><p>在权限表中增加如下记录。</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">INSERT INTO</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> sys_permission </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">VALUES</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">7</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;/manager&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;create&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">INSERT INTO</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> sys_permission </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">VALUES</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">8</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;/manager&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;remove&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">INSERT INTO</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> sys_permission </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">VALUES</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">9</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;/employee&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;read&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">INSERT INTO</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> sys_permission </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">VALUES</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">10</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;/employee&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;remove&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code>LoginController</code>登录类中给<code>employee</code>增加权限。</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">......</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">GetMapping</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;/employee/read&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">PreAuthorize</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;hasPermission(&#39;/employee&#39;, &#39;read&#39;)&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> String</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> employeeRead</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">() {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">	return</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;employee有ROLE_EMPLOYEE角色的read权限&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">GetMapping</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;/employee/remove&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">PreAuthorize</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;hasPermission(&#39;/employee&#39;, &#39;remove&#39;)&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> String</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> employeeRemove</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">() {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">	return</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;employee有ROLE_EMPLOYEE角色的remove权限&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再用<a href="https://www.postman.com/" target="_blank" rel="noopener noreferrer">Postman</a>访问接口，通过<code>admin</code>用户登录，分别做以下测试。</p><table><thead><tr><th style="text-align:center;">接口</th><th style="text-align:center;">访问结果</th></tr></thead><tbody><tr><td style="text-align:center;">/admin/create</td><td style="text-align:center;">成功</td></tr><tr><td style="text-align:center;">/admin/read</td><td style="text-align:center;">成功</td></tr><tr><td style="text-align:center;">/manager/create</td><td style="text-align:center;">成功</td></tr><tr><td style="text-align:center;">/manager/remove</td><td style="text-align:center;">成功</td></tr><tr><td style="text-align:center;">/employee/read</td><td style="text-align:center;">成功</td></tr><tr><td style="text-align:center;">/employee/remove</td><td style="text-align:center;">成功</td></tr></tbody></table><p>可以看到，<code>admin</code>已经具备了<code>manager</code>和<code>employee</code>权限。</p><p><a href="https://spring.io/projects/spring-security" target="_blank" rel="noopener noreferrer">Spring Security</a>比较简单，也很方便，多适用于一些比较小型的应用系统，角色简单，权限不多。</p><p>如果要实现一些比较复杂的权限功能，<a href="https://spring.io/projects/spring-security" target="_blank" rel="noopener noreferrer">Spring Security</a>就会有点力不从心了，而且会出现诸如自定义<code>filter</code>被执行多次的问题。</p><p>所以，一般在大型或企业级应用中，不会完全依赖<a href="https://spring.io/projects/spring-security" target="_blank" rel="noopener noreferrer">Spring Security</a>，而是依据实际业务需求，实现自定义的<a href="https://zh.wikipedia.org/wiki/%E4%BB%A5%E8%A7%92%E8%89%B2%E7%82%BA%E5%9F%BA%E7%A4%8E%E7%9A%84%E5%AD%98%E5%8F%96%E6%8E%A7%E5%88%B6" target="_blank" rel="noopener noreferrer">RBAC</a>权限系统。</p>`,34),l=[t];function h(p,r){return a(),s("div",null,l)}const o=i(n,[["render",h],["__file","role.html.vue"]]),A=JSON.parse('{"path":"/technology/sundry/security/role.html","title":"角色继承与权限完善","lang":"zh-CN","frontmatter":{"title":"角色继承与权限完善","icon":"user-secret","category":["杂项","Spring Security"],"tag":["杂项","Spring Security"],"date":"2021-12-29T00:00:00.000Z","isOriginal":true,"star":true,"description":"角色继承 有时候角色与用户并不是完全一一对应的，在刚开始的时候，admin用户可能只有ROLE_ADMIN角色，manager用户也只有ROLE_MANAGER角色。 但如果希望给admin用户授予manager的角色，该怎么办呢？ 这就需要用到Spring Security的角色继承功能了。 在用户表中增加employee用户。 给employee用...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/technology/sundry/security/role.html"}],["meta",{"property":"og:site_name","content":"添码座"}],["meta",{"property":"og:title","content":"角色继承与权限完善"}],["meta",{"property":"og:description","content":"角色继承 有时候角色与用户并不是完全一一对应的，在刚开始的时候，admin用户可能只有ROLE_ADMIN角色，manager用户也只有ROLE_MANAGER角色。 但如果希望给admin用户授予manager的角色，该怎么办呢？ 这就需要用到Spring Security的角色继承功能了。 在用户表中增加employee用户。 给employee用..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"添码座"}],["meta",{"property":"article:tag","content":"杂项"}],["meta",{"property":"article:tag","content":"Spring Security"}],["meta",{"property":"article:published_time","content":"2021-12-29T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"角色继承与权限完善\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-12-29T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"添码座\\",\\"url\\":\\"https://www.tianmazuo.com/about/\\"}]}"]]},"headers":[{"level":2,"title":"角色继承","slug":"角色继承","link":"#角色继承","children":[]},{"level":2,"title":"权限完善","slug":"权限完善","link":"#权限完善","children":[]}],"git":{},"readingTime":{"minutes":2.71,"words":812},"filePathRelative":"technology/sundry/security/role.md","localizedDate":"2021年12月29日","excerpt":"<h2>角色继承</h2>\\n<p>有时候角色与用户并不是完全一一对应的，在刚开始的时候，<code>admin</code>用户可能只有<code>ROLE_ADMIN</code>角色，<code>manager</code>用户也只有<code>ROLE_MANAGER</code>角色。</p>\\n<p>但如果希望给<code>admin</code>用户授予<code>manager</code>的角色，该怎么办呢？</p>\\n<p>这就需要用到<a href=\\"https://spring.io/projects/spring-security\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Spring Security</a>的角色<code>继承</code>功能了。</p>","autoDesc":true}');export{o as comp,A as data};
