import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as n,c as o,b as i,d as e,o as p}from"./app-B5m7CcSj.js";const c={},r=e('<p>在<a href="https://en.wikipedia.org/wiki/Artificial_intelligence" target="_blank" rel="noopener noreferrer">AI</a>应用领域，如果说除了<a href="https://chat.openai.com/" target="_blank" rel="noopener noreferrer">ChatGPT</a>和<a href="https://www.midjourney.com/" target="_blank" rel="noopener noreferrer">Midjourney</a>应用之外，还有什么应用可以用<code>极为火爆</code>来形容的话，那么非<code>换脸</code>莫属！</p><p>比如下面这个。</p><figure><img src="https://tianmazuo.com/application/ai/changeface-midjourney-01.png" alt="给帅哥换一张马斯克的脸" tabindex="0" loading="lazy"><figcaption>给帅哥换一张马斯克的脸</figcaption></figure><p>又比如下面这个。</p>',4),l=e('<p>下面来看看它们是怎么实现的。</p><br><h2 id="图片换脸" tabindex="-1"><a class="header-anchor" href="#图片换脸"><span>图片换脸</span></a></h2><h3 id="midjourney换脸" tabindex="-1"><a class="header-anchor" href="#midjourney换脸"><span>Midjourney换脸</span></a></h3><p><a href="https://www.midjourney.com/" target="_blank" rel="noopener noreferrer">Midjourney</a>换脸需要用到<a href="https://github.com/deepinsight/insightface" target="_blank" rel="noopener noreferrer">InsightFace</a>插件。</p><p>具体来说有两种方法。</p><ul><li><p><code>/saveid</code>和<code>INSwapper</code>功能的组合。</p></li><li><p><code>/saveid</code>和<code>/swapid</code>指令的组合。</p></li></ul><p>因为<code>/saveid</code>和<code>/swapid</code>都是<a href="https://github.com/deepinsight/insightface" target="_blank" rel="noopener noreferrer">InsightFace</a>的指令，所以必须添加它。</p><p>我这里已经添加好了。</p><figure><img src="https://tianmazuo.com/application/ai/changeface-midjourney-02.png" alt="上传钢铁侠的图片" tabindex="0" loading="lazy"><figcaption>上传钢铁侠的图片</figcaption></figure><p>添加<code>Midjourney Bot</code>机器人的一般步骤就略过了。</p><p>因为在<a href="https://www.midjourney.com/" target="_blank" rel="noopener noreferrer">Midjourney</a>中是搜索不到<a href="https://github.com/deepinsight/insightface" target="_blank" rel="noopener noreferrer">InsightFace</a>插件的，它需要打开授权链接单独授权：<a href="https://discord.com/oauth2/authorize?client_id=1090660574196674713&amp;permissions=274877945856&amp;scope=bot" target="_blank" rel="noopener noreferrer">InsightFace授权链接</a></p><div style="text-align:center;"><p><img src="https://tianmazuo.com/application/ai/changeface-midjourney-03.png" alt="给InsightFace授权登录" loading="lazy"> <img src="https://tianmazuo.com/application/ai/changeface-midjourney-04.png" alt="给InsightFace授权登录" loading="lazy"></p></div><p>添加成功后<a href="https://github.com/deepinsight/insightface" target="_blank" rel="noopener noreferrer">InsightFace</a>就出现了。</p><div style="text-align:center;"><p><img src="https://tianmazuo.com/application/ai/changeface-midjourney-05.png" alt="添加成功后InsightFace出现了" loading="lazy"> <img src="https://tianmazuo.com/application/ai/changeface-midjourney-06.png" alt="InsightFace信息" loading="lazy"></p></div><p>当把这两个机器人加入到服务器以后，就可以上传图片注册人脸的身份，这意味着生成一个<code>ID</code>，这个<code>ID</code>就是之后换脸要用到的身份。</p><p>在与机器人的对话框中输入<code>/saveid</code>命令，就会出现需要上传图片的界面，然后上传一张需要的<code>脸面</code>。</p><figure><img src="https://tianmazuo.com/application/ai/changeface-midjourney-07.png" alt="上传“钢铁侠”的图片" tabindex="0" loading="lazy"><figcaption>上传“钢铁侠”的图片</figcaption></figure><p>有了<code>ID</code>之后，再来一张需要替换脸面的图片，例如，可以用<code>/imagine</code>指令生成。在生成的图片中选一张喜欢的。</p><figure><img src="https://tianmazuo.com/application/ai/changeface-midjourney-08.png" alt="用“imagine”指令生成的图片" tabindex="0" loading="lazy"><figcaption>用“imagine”指令生成的图片</figcaption></figure><p>在图片上用鼠标右键单击图片，然后选择<code>Apps -&gt; INSwapper</code>，换脸成功，合成的图片就像这样。</p><figure><img src="https://tianmazuo.com/application/ai/changeface-midjourney-09.png" alt="换脸后的图片" tabindex="0" loading="lazy"><figcaption>换脸后的图片</figcaption></figure><p>也可以使用<code>/swapid</code>指令代替<code>Apps -&gt; INSwapper</code>。在与机器人的对话框中输入<code>/swapid</code>，会自己出现上传图片的虚线框，上传图片后的界面是这样的。</p><figure><img src="https://tianmazuo.com/application/ai/changeface-midjourney-10.png" alt="用指令" tabindex="0" loading="lazy"><figcaption>用<code>/swapid</code>指令</figcaption></figure><p>执行<code>/swapid</code>指令后的结果。</p><figure><img src="https://tianmazuo.com/application/ai/changeface-midjourney-11.png" alt="执行 “/swapid” 指令后的结果" tabindex="0" loading="lazy"><figcaption>执行 “/swapid” 指令后的结果</figcaption></figure><h3 id="stable-diffusion换脸" tabindex="-1"><a class="header-anchor" href="#stable-diffusion换脸"><span>Stable Diffusion换脸</span></a></h3><p>既然<a href="https://www.midjourney.com/" target="_blank" rel="noopener noreferrer">Midjourney</a>能够换脸，<a href="https://stability.ai/" target="_blank" rel="noopener noreferrer">Stable Diffusion</a>又岂能落后？在这方面，<a href="https://stability.ai/" target="_blank" rel="noopener noreferrer">Stable Diffusion</a>有两大专属插件：<a href="https://github.com/Gourieff/sd-webui-reactor" target="_blank" rel="noopener noreferrer">reactor</a>和<a href="https://github.com/glucauze/sd-webui-faceswaplab" target="_blank" rel="noopener noreferrer">faceswaplab</a>。</p><p>这两个只要会用一个，另一个也自然就会了。</p><p>以<a href="https://github.com/Gourieff/sd-webui-reactor" target="_blank" rel="noopener noreferrer">reactor</a>为例，它的名气比<a href="https://github.com/glucauze/sd-webui-faceswaplab" target="_blank" rel="noopener noreferrer">faceswaplab</a>更高，而且能够同时换多张脸，能检测性别，能够进行人脸复原，速度更快，只是需要安装<a href="https://visualstudio.microsoft.com/downloads/" target="_blank" rel="noopener noreferrer">Visual Studio 2022</a>。</p><p>先用<a href="https://stability.ai/" target="_blank" rel="noopener noreferrer">Stable Diffusion</a>文生图生成一张图片，不带任何<code>Lora</code>、采样及优化，一切选项都保持默认，生成的图片如下。</p><div style="text-align:center;"><p><img src="https://tianmazuo.com/application/ai/changeface-stable-diffusion-reactor-01.png" alt="" width="500" height="400" loading="lazy"> <img src="https://tianmazuo.com/application/ai/changeface-stable-diffusion-reactor-02.png" alt="" width="500" height="400" loading="lazy"></p></div><p>就是这么简单。</p><h3 id="swapface换脸" tabindex="-1"><a class="header-anchor" href="#swapface换脸"><span>Swapface换脸</span></a></h3><p>因为这个对硬件的要求较低，所以即使用虚拟机也能演示——所以呢，安装好之后选择<code>Image Faceswap</code>，看下面的图就能操作了。</p><p>仅需两步，就将<code>钢铁侠</code>变成了<code>不良帅</code>......</p><div style="text-align:center;"><p><img src="https://tianmazuo.com/application/ai/changeface-swapface-image2face-01.png" alt="" width="500" height="300" loading="lazy"> <img src="https://tianmazuo.com/application/ai/changeface-swapface-image2face-02.png" alt="" width="500" height="300" loading="lazy"></p></div><br><h2 id="视频换脸" tabindex="-1"><a class="header-anchor" href="#视频换脸"><span>视频换脸</span></a></h2><h3 id="swapface换脸-1" tabindex="-1"><a class="header-anchor" href="#swapface换脸-1"><span>Swapface换脸</span></a></h3><p><a href="https://www.swapface.org/#/home" target="_blank" rel="noopener noreferrer">Swapface</a>的操作非常傻瓜化，和图片换脸一样，视频换脸也是仅需两步就可以完成。</p><div style="text-align:center;"><p><img src="https://tianmazuo.com/application/ai/changeface-swapface-video2face-01.png" alt="" width="500" height="300" loading="lazy"> <img src="https://tianmazuo.com/application/ai/changeface-swapface-video2face-02.png" alt="" width="500" height="300" loading="lazy"></p></div><p>生成的结果可以在下面的地址中。</p>',43),g=e('<h3 id="deepfacelive换脸" tabindex="-1"><a class="header-anchor" href="#deepfacelive换脸"><span>DeepFaceLive换脸</span></a></h3><p>从名字当中有<code>Live</code>就可以知道，这款换脸软件主要是为直播服务的。它的使用同样简单，下载<code>Windows</code>版本后，根据显卡型号直接打开。</p><p>一般情况下，如果是集成显卡用<code>DirectX12</code>，如果有<code>NVIDIA</code>独立显卡，就用<code>NVIDIA</code>的。</p><p><a href="https://github.com/iperov/DeepFaceLive" target="_blank" rel="noopener noreferrer">DeepFaceLive</a>分为五大功能区域，分别如下。</p><ul><li><p>输入设置。</p></li><li><p>人脸识别。</p></li><li><p>换脸模式。</p></li><li><p>输出设置。</p></li><li><p>预览区域。</p></li></ul><figure><img src="https://tianmazuo.com/application/ai/changeface-deepfacelive-01.png" alt="功能区域" tabindex="0" loading="lazy"><figcaption>功能区域</figcaption></figure><p><img src="https://tianmazuo.com/application/ai/changeface-deepfacelive-02.png" alt="" loading="lazy">和<img src="https://tianmazuo.com/application/ai/changeface-deepfacelive-03.png" alt="" loading="lazy">按钮的作用是打开或关闭某个独立功能。</p><p>例如，<code>换脸模式</code>功能有三种实现方式。</p><ul><li><p>人脸照片驱动器：对应图片换脸。</p></li><li><p>Face swap：也对应图片换脸。</p></li><li><p>人脸交换器：对应模型换脸。</p></li></ul><p>但只能选择一种方式执行换脸功能。</p><p>一般情况下，所有的设置用默认的就行了，不需要调整。</p><p>人脸交换器中用到的模型就是它在官网列出来的这些。</p><figure><img src="https://tianmazuo.com/application/ai/changeface-deepfacelive-04.png" alt="和人脸交换器对应的DFM模型" tabindex="0" loading="lazy"><figcaption>和人脸交换器对应的DFM模型</figcaption></figure><p>我这里用的是人脸照片驱动器，而且连照片<a href="https://github.com/iperov/DeepFaceLive" target="_blank" rel="noopener noreferrer">DeepFaceLive</a>都贴心地准备好了（点选择框旁边那个像眼睛一样的按钮就可以看到😄）。</p><figure><img src="https://tianmazuo.com/application/ai/changeface-deepfacelive-05.png" alt="给尸祖侯卿换上钢铁侠的脸" tabindex="0" loading="lazy"><figcaption>给尸祖侯卿换上钢铁侠的脸</figcaption></figure><p>因为换脸结果无法保存，所以需要用录屏软件给录制下来，我就不弄这么麻烦了。</p><figure><img src="https://tianmazuo.com/application/ai/changeface-deepfacelive-06.png" alt="换脸结果预览" tabindex="0" loading="lazy"><figcaption>换脸结果预览</figcaption></figure><p>一般来说，模型换脸无论是贴合度、光照效果还是其他方面，都是最好的，这也是为么<a href="https://github.com/iperov/DeepFaceLive" target="_blank" rel="noopener noreferrer">DeepFaceLive</a>会那么受直播的欢迎的原因。</p><br><h2 id="直播换脸" tabindex="-1"><a class="header-anchor" href="#直播换脸"><span>直播换脸</span></a></h2><p>直播换脸用的最多的就是<a href="https://github.com/iperov/DeepFaceLive" target="_blank" rel="noopener noreferrer">DeepFaceLive</a>，在输入设置功能区域中打开<code>摄像机源</code>就行了，它可以直接对接本机摄像头，然后将算法生成的<code>脸</code>通过<a href="https://obsproject.com/" target="_blank" rel="noopener noreferrer">OBS</a>推流软件进行直播。</p><br><h2 id="一些资源地址" tabindex="-1"><a class="header-anchor" href="#一些资源地址"><span>一些资源地址</span></a></h2><p><a href="https://github.com/s0md3v/roop" target="_blank" rel="noopener noreferrer">Roop换脸源码</a></p><p><a href="https://github.com/TMElyralab/MuseV" target="_blank" rel="noopener noreferrer">Muse虚拟数字人源码</a></p><p><a href="https://github.com/iperov/DeepFaceLive" target="_blank" rel="noopener noreferrer">DeepFaceLive源码</a></p><p><a href="https://github.com/facefusion/facefusion" target="_blank" rel="noopener noreferrer">Facefusion源码</a>（<a href="https://github.com/facefusion/facefusion-docker" target="_blank" rel="noopener noreferrer">Facefusion Docker环境</a>）</p><p><a href="https://www.swapface.org/#/home" target="_blank" rel="noopener noreferrer">Swapface官网</a></p><p><a href="https://faceswap.dev/" target="_blank" rel="noopener noreferrer">Faceswap官网</a></p>',29);function h(s,d){const a=n("BiliBili");return p(),o("div",null,[r,i(a,{bvid:"BV1cW4y197aQ"}),l,i(a,{bvid:"BV1kb42187fa"}),g])}const u=t(c,[["render",h],["__file","changeface.html.vue"]]),b=JSON.parse('{"path":"/application/ai/changeface.html","title":"换脸","lang":"zh-CN","frontmatter":{"title":"换脸","icon":"masks-theater","category":["应用","U-AIGC"],"tag":["应用","U-AIGC","AI图像","换脸"],"date":"2024-01-06T00:00:00.000Z","isOriginal":true,"star":true,"description":"在AI应用领域，如果说除了ChatGPT和Midjourney应用之外，还有什么应用可以用极为火爆来形容的话，那么非换脸莫属！ 比如下面这个。 给帅哥换一张马斯克的脸给帅哥换一张马斯克的脸 又比如下面这个。","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/application/ai/changeface.html"}],["meta",{"property":"og:site_name","content":"添码座"}],["meta",{"property":"og:title","content":"换脸"}],["meta",{"property":"og:description","content":"在AI应用领域，如果说除了ChatGPT和Midjourney应用之外，还有什么应用可以用极为火爆来形容的话，那么非换脸莫属！ 比如下面这个。 给帅哥换一张马斯克的脸给帅哥换一张马斯克的脸 又比如下面这个。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://tianmazuo.com/application/ai/changeface-midjourney-01.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"添码座"}],["meta",{"property":"article:tag","content":"应用"}],["meta",{"property":"article:tag","content":"U-AIGC"}],["meta",{"property":"article:tag","content":"AI图像"}],["meta",{"property":"article:tag","content":"换脸"}],["meta",{"property":"article:published_time","content":"2024-01-06T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"换脸\\",\\"image\\":[\\"https://tianmazuo.com/application/ai/changeface-midjourney-01.png\\",\\"https://tianmazuo.com/application/ai/changeface-midjourney-02.png\\",\\"https://tianmazuo.com/application/ai/changeface-midjourney-03.png\\",\\"https://tianmazuo.com/application/ai/changeface-midjourney-04.png\\",\\"https://tianmazuo.com/application/ai/changeface-midjourney-05.png\\",\\"https://tianmazuo.com/application/ai/changeface-midjourney-06.png\\",\\"https://tianmazuo.com/application/ai/changeface-midjourney-07.png\\",\\"https://tianmazuo.com/application/ai/changeface-midjourney-08.png\\",\\"https://tianmazuo.com/application/ai/changeface-midjourney-09.png\\",\\"https://tianmazuo.com/application/ai/changeface-midjourney-10.png\\",\\"https://tianmazuo.com/application/ai/changeface-midjourney-11.png\\",\\"https://tianmazuo.com/application/ai/changeface-stable-diffusion-reactor-01.png =500x400\\",\\"https://tianmazuo.com/application/ai/changeface-stable-diffusion-reactor-02.png =500x400\\",\\"https://tianmazuo.com/application/ai/changeface-swapface-image2face-01.png =500x300\\",\\"https://tianmazuo.com/application/ai/changeface-swapface-image2face-02.png =500x300\\",\\"https://tianmazuo.com/application/ai/changeface-swapface-video2face-01.png =500x300\\",\\"https://tianmazuo.com/application/ai/changeface-swapface-video2face-02.png =500x300\\",\\"https://tianmazuo.com/application/ai/changeface-deepfacelive-01.png\\",\\"https://tianmazuo.com/application/ai/changeface-deepfacelive-02.png\\",\\"https://tianmazuo.com/application/ai/changeface-deepfacelive-03.png\\",\\"https://tianmazuo.com/application/ai/changeface-deepfacelive-04.png\\",\\"https://tianmazuo.com/application/ai/changeface-deepfacelive-05.png\\",\\"https://tianmazuo.com/application/ai/changeface-deepfacelive-06.png\\"],\\"datePublished\\":\\"2024-01-06T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"添码座\\",\\"url\\":\\"https://www.tianmazuo.com/about/\\"}]}"]]},"headers":[{"level":2,"title":"图片换脸","slug":"图片换脸","link":"#图片换脸","children":[{"level":3,"title":"Midjourney换脸","slug":"midjourney换脸","link":"#midjourney换脸","children":[]},{"level":3,"title":"Stable Diffusion换脸","slug":"stable-diffusion换脸","link":"#stable-diffusion换脸","children":[]},{"level":3,"title":"Swapface换脸","slug":"swapface换脸","link":"#swapface换脸","children":[]}]},{"level":2,"title":"视频换脸","slug":"视频换脸","link":"#视频换脸","children":[{"level":3,"title":"Swapface换脸","slug":"swapface换脸-1","link":"#swapface换脸-1","children":[]},{"level":3,"title":"DeepFaceLive换脸","slug":"deepfacelive换脸","link":"#deepfacelive换脸","children":[]}]},{"level":2,"title":"直播换脸","slug":"直播换脸","link":"#直播换脸","children":[]},{"level":2,"title":"一些资源地址","slug":"一些资源地址","link":"#一些资源地址","children":[]}],"git":{},"readingTime":{"minutes":5,"words":1499},"filePathRelative":"application/ai/changeface.md","localizedDate":"2024年1月6日","excerpt":"<p>在<a href=\\"https://en.wikipedia.org/wiki/Artificial_intelligence\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">AI</a>应用领域，如果说除了<a href=\\"https://chat.openai.com/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">ChatGPT</a>和<a href=\\"https://www.midjourney.com/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Midjourney</a>应用之外，还有什么应用可以用<code>极为火爆</code>来形容的话，那么非<code>换脸</code>莫属！</p>","autoDesc":true}');export{u as comp,b as data};
