import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,c as r,a,e,b as p,w as l,d as t,o as c}from"./app-B5m7CcSj.js";const g={},f=t('<p>虽然有一些图像生成应用很早就出现了，例如2015年谷歌发布<a href="https://deepdreamgenerator.com/" target="_blank" rel="noopener noreferrer">DeepDream</a>，同年出现的<a href="https://en.wikipedia.org/wiki/Neural_style_transfer" target="_blank" rel="noopener noreferrer">Neural Style Transfer</a>，2016年出现的<a href="https://pytorch.org/tutorials/beginner/dcgan_faces_tutorial.html?highlight=dcgan" target="_blank" rel="noopener noreferrer">DCGAN</a>，以及加州大学伯克利分校在2017年发布的<a href="https://github.com/phillipi/pix2pix" target="_blank" rel="noopener noreferrer">Pix2Pix</a>和<a href="https://junyanz.github.io/CycleGAN/" target="_blank" rel="noopener noreferrer">CycleGAN</a>等。</p><p>但目前影响力最大的却并不是这些先行者，而后起之秀<a href="https://www.midjourney.com/" target="_blank" rel="noopener noreferrer">Midjourney</a>、<a href="https://stability.ai/" target="_blank" rel="noopener noreferrer">Stable Diffusion</a>和<a href="https://openai.com/index/dall-e-3" target="_blank" rel="noopener noreferrer">DALL·E</a>。</p><p>实话说，有了<a href="https://www.midjourney.com/" target="_blank" rel="noopener noreferrer">Midjourney</a>、<a href="https://stability.ai/" target="_blank" rel="noopener noreferrer">Stable Diffusion</a>，其实<a href="https://openai.com/index/dall-e-3" target="_blank" rel="noopener noreferrer">DALL·E</a>可以无视了。</p><figure><img src="https://tianmazuo.com/application/ai/textimage-01.png" alt="目前AI图文领域的主要应用模式" tabindex="0" loading="lazy"><figcaption>目前AI图文领域的主要应用模式</figcaption></figure><br><h2 id="诸多的应用" tabindex="-1"><a class="header-anchor" href="#诸多的应用"><span>诸多的应用</span></a></h2><p>文生图类的AI应用也像前面的文生文那样，有一大堆的<code>产品</code>。</p><figure><img src="https://tianmazuo.com/application/ai/textimage-02.png" alt="常用文生图应用" tabindex="0" loading="lazy"><figcaption>常用文生图应用</figcaption></figure><p>这些应用有的可以做插画，有的可以移除背景、抠图，有的可以做无损放大、优化修复，而有的则专门用于电商的商品图生成。</p><ul><li>插画类。</li></ul><figure><img src="https://tianmazuo.com/application/ai/textimage-03.png" alt="插画类文生图应用" tabindex="0" loading="lazy"><figcaption>插画类文生图应用</figcaption></figure><ul><li>移除背景、抠图类。</li></ul><figure><img src="https://tianmazuo.com/application/ai/textimage-04.png" alt="移除背景、抠图类文生图应用" tabindex="0" loading="lazy"><figcaption>移除背景、抠图类文生图应用</figcaption></figure><ul><li>无损放大、优化修复类。</li></ul><figure><img src="https://tianmazuo.com/application/ai/textimage-05.png" alt="无损放大、优化修复类文生图应用" tabindex="0" loading="lazy"><figcaption>无损放大、优化修复类文生图应用</figcaption></figure><ul><li>商品图生成类。</li></ul><figure><img src="https://tianmazuo.com/application/ai/textimage-06.png" alt="商品图生成类文生图应用" tabindex="0" loading="lazy"><figcaption>商品图生成类文生图应用</figcaption></figure><p>作为老牌文生图应用，虽然<a href="https://www.midjourney.com/" target="_blank" rel="noopener noreferrer">Midjourney</a>不像<a href="https://chatgpt.com/" target="_blank" rel="noopener noreferrer">ChatGPT</a>那样发布了众多的预训练模型，但从<code>5.2</code>开始，它也能做预训练了，只是效果未经验证。</p><p>这里是<a href="https://docs.midjourney.com/docs/style-tuner" target="_blank" rel="noopener noreferrer">官方文档</a>。</p>',19),s=a("a",{href:"https://www.midjourney.com/",target:"_blank",rel:"noopener noreferrer"},"Midjourney",-1),m=t('<br><h2 id="stable-diffusion" tabindex="-1"><a class="header-anchor" href="#stable-diffusion"><span>Stable Diffusion</span></a></h2><p>而<a href="https://stability.ai/" target="_blank" rel="noopener noreferrer">Stable Diffusion</a>则是借助<code>Checkpoint</code>、<code>Lora</code>、<code>embedding</code>、<code>VAE</code>等手段，可以自由地训练出自己想要的图像风格。</p><p>我本地安装的<a href="https://stability.ai/" target="_blank" rel="noopener noreferrer">Stable Diffusion</a>，文生图界面。</p><figure><img src="https://tianmazuo.com/application/ai/stable-diffusion-text2image-01.png" alt="Stable Diffusion文生图过程" tabindex="0" loading="lazy"><figcaption>Stable Diffusion文生图过程</figcaption></figure><p>我本地安装的<code>CheckPoint</code>（为什么都是女生模型？因为现在能下载到的，且处理的比较好的基本上都是女生模型😢）。</p><figure><img src="https://tianmazuo.com/application/ai/stable-diffusion-text2image-02.png" alt="选择不同的CheckPoint" tabindex="0" loading="lazy"><figcaption>选择不同的CheckPoint</figcaption></figure><p>我本地下载的<code>Lora</code>。</p><figure><img src="https://tianmazuo.com/application/ai/stable-diffusion-text2image-03.png" alt="选择不同的Lora" tabindex="0" loading="lazy"><figcaption>选择不同的Lora</figcaption></figure><p>各种<a href="https://stability.ai/" target="_blank" rel="noopener noreferrer">Stable Diffusion</a>资源。</p><figure><img src="https://tianmazuo.com/application/ai/stable-diffusion-checkpoint.png" alt="CheckPoint" tabindex="0" loading="lazy"><figcaption>CheckPoint</figcaption></figure><figure><img src="https://tianmazuo.com/application/ai/stable-diffusion-lora.png" alt="Lora" tabindex="0" loading="lazy"><figcaption>Lora</figcaption></figure><figure><img src="https://tianmazuo.com/application/ai/stable-diffusion-embedding.png" alt="embedding" tabindex="0" loading="lazy"><figcaption>embedding</figcaption></figure><figure><img src="https://tianmazuo.com/application/ai/stable-diffusion-vae.png" alt="VAE" tabindex="0" loading="lazy"><figcaption>VAE</figcaption></figure><p>要使用<a href="https://openai.com/index/dall-e-3" target="_blank" rel="noopener noreferrer">DALL·E</a>，就必须付费——暂时没那个需求😢，<a href="https://stability.ai/" target="_blank" rel="noopener noreferrer">Stable Diffusion</a>已经很好了😄。</p><br><h2 id="comfyui" tabindex="-1"><a class="header-anchor" href="#comfyui"><span>ComfyUI</span></a></h2><p>最近<a href="https://github.com/comfyanonymous/ComfyUI" target="_blank" rel="noopener noreferrer">ComfyUI</a>也比较火，通俗地说，<a href="https://github.com/comfyanonymous/ComfyUI" target="_blank" rel="noopener noreferrer">ComfyUI</a>是一个流程化的<a href="https://stability.ai/" target="_blank" rel="noopener noreferrer">Stable Diffusion</a>，因此，一切<a href="https://stability.ai/" target="_blank" rel="noopener noreferrer">Stable Diffusion</a>可以用的资源，它也都可以用，包括CheckPoint、Lora等。</p><p>这两个站点可以在线体验<a href="https://github.com/comfyanonymous/ComfyUI" target="_blank" rel="noopener noreferrer">ComfyUI</a>。</p><ul><li><a href="https://comfyuiweb.com/#ai-image-generator" target="_blank" rel="noopener noreferrer">ComfyUI Web</a></li></ul><figure><img src="https://tianmazuo.com/application/ai/comfyui-text2image-01.png" alt="ComfyUI Web的界面" tabindex="0" loading="lazy"><figcaption>ComfyUI Web的界面</figcaption></figure><ul><li><a href="https://workflow.esheep.com/" target="_blank" rel="noopener noreferrer">eSheep ComfyUI</a></li></ul><figure><img src="https://tianmazuo.com/application/ai/comfyui-text2image-02.png" alt="eSheep ComfyUI" tabindex="0" loading="lazy"><figcaption>eSheep ComfyUI</figcaption></figure><p>当然，也可以通过下面两种方式搭建自己的<a href="https://github.com/comfyanonymous/ComfyUI" target="_blank" rel="noopener noreferrer">ComfyUI</a>服务。</p><ul><li><p>下载<a href="https://github.com/comfyanonymous/ComfyUI" target="_blank" rel="noopener noreferrer">ComfyUI</a>源代码，然后在本地搭建，安装过程源代码中有详细说明；</p></li><li><p>如果机器性能满足不了要求，也可以租用<a href="https://www.autodl.com/" target="_blank" rel="noopener noreferrer">AutoDL</a>或<a href="https://onethingai.com/" target="_blank" rel="noopener noreferrer">OneThingAI</a>这类<a href="https://en.wikipedia.org/wiki/Artificial_intelligence" target="_blank" rel="noopener noreferrer">AI</a>服务器，在线搭建<a href="https://github.com/comfyanonymous/ComfyUI" target="_blank" rel="noopener noreferrer">ComfyUI</a>服务。</p></li></ul><p>如果<a href="https://stability.ai/" target="_blank" rel="noopener noreferrer">Stable Diffusion</a>用得比较熟练的话，上手<a href="https://github.com/comfyanonymous/ComfyUI" target="_blank" rel="noopener noreferrer">ComfyUI</a>也不难，感兴趣的可以自己玩玩。</p><p>下面的几个站点可以下载更多的<a href="https://github.com/comfyanonymous/ComfyUI" target="_blank" rel="noopener noreferrer">ComfyUI</a>工作流。</p><ul><li><p><a href="https://comfyworkflows.com/" target="_blank" rel="noopener noreferrer">Comfy Workflows</a></p></li><li><p><a href="https://openart.ai/workflows/home" target="_blank" rel="noopener noreferrer">OpenArt.ai</a></p></li><li><p><a href="https://flowt.ai/" target="_blank" rel="noopener noreferrer">Flowt.ai</a></p></li><li><p><a href="https://youml.com/" target="_blank" rel="noopener noreferrer">Youml</a></p></li><li><p><a href="https://ltdrdata.github.io/" target="_blank" rel="noopener noreferrer">ComfyUI Nodes Info</a></p></li><li><p><a href="https://www.esheep.com/app" target="_blank" rel="noopener noreferrer">eSheep</a></p></li></ul><p>这里有非常详细的在线入门教程。</p><ul><li><p><a href="https://openart.ai/workflows/academy/" target="_blank" rel="noopener noreferrer">ComfyUI Academy</a></p></li><li><p><a href="https://github.com/Suzie1/ComfyUI_Guide_To_Making_Custom_Nodes/wiki" target="_blank" rel="noopener noreferrer">ComfyUI Guide To Making Custom Nodes</a></p></li></ul><br><h2 id="图生文" tabindex="-1"><a class="header-anchor" href="#图生文"><span>图生文</span></a></h2><p>在图生文领域，目前可用的应用还寥寥无几，使用最多的应该还是<a href="https://www.midjourney.com/" target="_blank" rel="noopener noreferrer">Midjourney</a>。</p><div style="text-align:center;"><p><img src="https://tianmazuo.com/application/ai/midjourney-describe-01.png" alt="" width="500" height="500" loading="lazy"> <img src="https://tianmazuo.com/application/ai/midjourney-describe-02.png" alt="" width="500" height="500" loading="lazy"></p></div><p>上面右边图中红色方框中的内容，就是通过向<a href="https://www.midjourney.com/" target="_blank" rel="noopener noreferrer">Midjourney</a>发送 <strong><mark>/describe</mark></strong> 命令后得到的。</p><p>另一款值得推荐的应用就是<a href="https://scenex.jina.ai/" target="_blank" rel="noopener noreferrer">SceneXplain</a>，它不仅可以实现图生文，而且也能实现视频生文。</p><p>它是一款国外应用，却可以通过微信登录。</p><div style="text-align:center;"><p><img src="https://tianmazuo.com/application/ai/textimage-scenexplain-01.png" alt="" width="400" height="600" loading="lazy"> <img src="https://tianmazuo.com/application/ai/textimage-scenexplain-02.png" alt="" width="400" height="600" loading="lazy"> <img src="https://tianmazuo.com/application/ai/textimage-scenexplain-03.png" alt="" width="400" height="600" loading="lazy"></p></div><div style="text-align:center;"><p><img src="https://tianmazuo.com/application/ai/textimage-scenexplain-04.png" alt="" width="500" height="400" loading="lazy"> <img src="https://tianmazuo.com/application/ai/textimage-scenexplain-05.png" alt="" width="500" height="400" loading="lazy"></p></div><p>上面就是上传图片到<a href="https://scenex.jina.ai/" target="_blank" rel="noopener noreferrer">SceneXplain</a>然后被解析成文本的过程。</p><p>生成图像的时候也可以选择不同的生成算法。将<code>任务</code>切换为<code>算法</code>即可选择。</p><figure><img src="https://tianmazuo.com/application/ai/textimage-scenexplain-06.png" alt="选择不同的图生文算法" tabindex="0" loading="lazy"><figcaption>选择不同的图生文算法</figcaption></figure><p><a href="https://scenex.jina.ai/" target="_blank" rel="noopener noreferrer">SceneXplain</a>提供了几种不同的算法选择。<code>Jelly</code>、<code>Bolt</code>、<code>Inception</code>、<code>Hearth</code>和<code>GPT4V</code>。</p><br><h2 id="图生图" tabindex="-1"><a class="header-anchor" href="#图生图"><span>图生图</span></a></h2><p>图生图的方法目前不外乎<a href="https://www.midjourney.com/" target="_blank" rel="noopener noreferrer">Midjourney</a>和<a href="https://stability.ai/" target="_blank" rel="noopener noreferrer">Stable Diffusion</a>。</p><p><a href="https://www.midjourney.com/" target="_blank" rel="noopener noreferrer">Midjourney</a>提供了专门的图片融合指令 <strong><mark>/blend</mark></strong></p><figure><img src="https://tianmazuo.com/application/ai/midjourney-blend-01.png" alt="Midjourney的图生图指令" tabindex="0" loading="lazy"><figcaption>Midjourney的图生图指令</figcaption></figure><p>下面是我本地安装的<a href="https://stability.ai/" target="_blank" rel="noopener noreferrer">Stable Diffusion</a>，切换到图生图界面。</p><figure><img src="https://tianmazuo.com/application/ai/stable-diffusion-image2image.png" alt="Stable Diffusion的图生图界面" tabindex="0" loading="lazy"><figcaption>Stable Diffusion的图生图界面</figcaption></figure><ul><li><p><a href="https://www.midjourney.com/" target="_blank" rel="noopener noreferrer">Midjourney</a>目前可以通过<code>多张图 + 提示词</code>的方式实现图生图。</p></li><li><p><a href="https://stability.ai/" target="_blank" rel="noopener noreferrer">Stable Diffusion</a>目前只能用<code>单张图 + 提示词</code>的方式生成新的图片，但可以实现局部重绘。</p></li></ul><p>未来，文图互生的<a href="https://en.wikipedia.org/wiki/Artificial_intelligence" target="_blank" rel="noopener noreferrer">AI</a>应用必将越来越多，也必将越来越精细，因为<a href="https://www.midjourney.com/" target="_blank" rel="noopener noreferrer">Midjourney</a>和<a href="https://stability.ai/" target="_blank" rel="noopener noreferrer">Stable Diffusion</a>兄弟俩开了个好头！</p>',52);function h(u,d){const i=o("RouteLink");return c(),r("div",null,[f,a("p",null,[e("关于"),s,e("的使用，在"),p(i,{to:"/application/ai/"},{default:l(()=>[e("《AI提示词极简指北》")]),_:1}),e("部分已经有了说明。")]),m])}const x=n(g,[["render",h],["__file","textimage.html.vue"]]),k=JSON.parse('{"path":"/application/ai/textimage.html","title":"文图互生","lang":"zh-CN","frontmatter":{"title":"文图互生","icon":"file-image","category":["应用","U-AIGC"],"tag":["应用","U-AIGC","AI应答","AI图像"],"date":"2024-01-03T00:00:00.000Z","isOriginal":true,"star":true,"description":"虽然有一些图像生成应用很早就出现了，例如2015年谷歌发布DeepDream，同年出现的Neural Style Transfer，2016年出现的DCGAN，以及加州大学伯克利分校在2017年发布的Pix2Pix和CycleGAN等。 但目前影响力最大的却并不是这些先行者，而后起之秀Midjourney、Stable Diffusion和DALL·E...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/application/ai/textimage.html"}],["meta",{"property":"og:site_name","content":"添码座"}],["meta",{"property":"og:title","content":"文图互生"}],["meta",{"property":"og:description","content":"虽然有一些图像生成应用很早就出现了，例如2015年谷歌发布DeepDream，同年出现的Neural Style Transfer，2016年出现的DCGAN，以及加州大学伯克利分校在2017年发布的Pix2Pix和CycleGAN等。 但目前影响力最大的却并不是这些先行者，而后起之秀Midjourney、Stable Diffusion和DALL·E..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://tianmazuo.com/application/ai/textimage-01.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"添码座"}],["meta",{"property":"article:tag","content":"应用"}],["meta",{"property":"article:tag","content":"U-AIGC"}],["meta",{"property":"article:tag","content":"AI应答"}],["meta",{"property":"article:tag","content":"AI图像"}],["meta",{"property":"article:published_time","content":"2024-01-03T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"文图互生\\",\\"image\\":[\\"https://tianmazuo.com/application/ai/textimage-01.png\\",\\"https://tianmazuo.com/application/ai/textimage-02.png\\",\\"https://tianmazuo.com/application/ai/textimage-03.png\\",\\"https://tianmazuo.com/application/ai/textimage-04.png\\",\\"https://tianmazuo.com/application/ai/textimage-05.png\\",\\"https://tianmazuo.com/application/ai/textimage-06.png\\",\\"https://tianmazuo.com/application/ai/stable-diffusion-text2image-01.png\\",\\"https://tianmazuo.com/application/ai/stable-diffusion-text2image-02.png\\",\\"https://tianmazuo.com/application/ai/stable-diffusion-text2image-03.png\\",\\"https://tianmazuo.com/application/ai/stable-diffusion-checkpoint.png\\",\\"https://tianmazuo.com/application/ai/stable-diffusion-lora.png\\",\\"https://tianmazuo.com/application/ai/stable-diffusion-embedding.png\\",\\"https://tianmazuo.com/application/ai/stable-diffusion-vae.png\\",\\"https://tianmazuo.com/application/ai/comfyui-text2image-01.png\\",\\"https://tianmazuo.com/application/ai/comfyui-text2image-02.png\\",\\"https://tianmazuo.com/application/ai/midjourney-describe-01.png =500x500\\",\\"https://tianmazuo.com/application/ai/midjourney-describe-02.png =500x500\\",\\"https://tianmazuo.com/application/ai/textimage-scenexplain-01.png =400x600\\",\\"https://tianmazuo.com/application/ai/textimage-scenexplain-02.png =400x600\\",\\"https://tianmazuo.com/application/ai/textimage-scenexplain-03.png =400x600\\",\\"https://tianmazuo.com/application/ai/textimage-scenexplain-04.png =500x400\\",\\"https://tianmazuo.com/application/ai/textimage-scenexplain-05.png =500x400\\",\\"https://tianmazuo.com/application/ai/textimage-scenexplain-06.png\\",\\"https://tianmazuo.com/application/ai/midjourney-blend-01.png\\",\\"https://tianmazuo.com/application/ai/stable-diffusion-image2image.png\\"],\\"datePublished\\":\\"2024-01-03T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"添码座\\",\\"url\\":\\"https://www.tianmazuo.com/about/\\"}]}"]]},"headers":[{"level":2,"title":"诸多的应用","slug":"诸多的应用","link":"#诸多的应用","children":[]},{"level":2,"title":"Stable Diffusion","slug":"stable-diffusion","link":"#stable-diffusion","children":[]},{"level":2,"title":"ComfyUI","slug":"comfyui","link":"#comfyui","children":[]},{"level":2,"title":"图生文","slug":"图生文","link":"#图生文","children":[]},{"level":2,"title":"图生图","slug":"图生图","link":"#图生图","children":[]}],"git":{},"readingTime":{"minutes":4.51,"words":1353},"filePathRelative":"application/ai/textimage.md","localizedDate":"2024年1月3日","excerpt":"<p>虽然有一些图像生成应用很早就出现了，例如2015年谷歌发布<a href=\\"https://deepdreamgenerator.com/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">DeepDream</a>，同年出现的<a href=\\"https://en.wikipedia.org/wiki/Neural_style_transfer\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Neural Style Transfer</a>，2016年出现的<a href=\\"https://pytorch.org/tutorials/beginner/dcgan_faces_tutorial.html?highlight=dcgan\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">DCGAN</a>，以及加州大学伯克利分校在2017年发布的<a href=\\"https://github.com/phillipi/pix2pix\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Pix2Pix</a>和<a href=\\"https://junyanz.github.io/CycleGAN/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">CycleGAN</a>等。</p>","autoDesc":true}');export{x as comp,k as data};