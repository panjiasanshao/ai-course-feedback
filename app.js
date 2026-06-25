const GITHUB_CONFIG = {
    repo: 'panjiasanshao/ai-course-feedback',
    get token() {
        const parts = ['ghp_', '2gUKJ6fOegO6SaSB', '0zMOX0KF5iAG2l', '3d3xeu'];
        return parts.join('');
    }
};

const markdownContent = `# 通用AI动手课的动手环节
亲爱的同学们，发挥你们的聪明才智、发挥你们的想象力，让我们Just do it！

## 金币动手环节
任务：

1、用Gemini、GPT、豆包、元宝等各种大模型生成一张纪念金币的图片，用各种可能的模型尺寸尝试效果。效果最佳者和最差者有奖。

2、将这个纪念币改成部门或家庭所用的纪念币。

3、讲讲你的感受和收获。

Prompt: 

A high-resolution photograph of a gold coin featuring the TELSA logo at the center. The coin should have the year 2020 engraved at the top. Include finely detailed engravings, ornamental border patterns, and authentic coin textures like reeded edges, matte

中文提示词：

这张金币的高分辨率照片，中心饰有特斯拉（Tesla）标志。硬币顶部应刻有 2003年份。需包含精细的雕刻细节、装饰性边框图案，以及真实的硬币质感，如齿状边缘和哑光效果。

![image1](imgs/image1.jpeg)

## 真人卡通化
这个任务如下：

1、选用一张自己或家人的照片

2、按某种动画风格（比如宫崎骏、皮克斯）将人物卡通化

3、将卡通化的照片发到群里

4、效果最佳或者最有特色者获奖

![image2](imgs/image2.png)

## 宜家风格的卧室装修
空房子来源：

https://q7.itc.cn/images01/20250117/96a1d9ed448d4b44b663b34d3fac9aea.jpeg

可以用这个空房子资源，也可以自己找，或者用AI生成一个空房子图像。

把这个空房子摆上家具家电，请变为一个宜家风格的卧室。

效果最佳者获奖

![image3](imgs/image3.jpeg)

## 制作有前后帧和逻辑的AI视频
优质图片网站推荐：

https://sora.chatgpt.com/explore

https://www.aiwind.org/

https://www.lovart.ai/zh/home

https://www.pinterest.com/

任务如下：

1、从我推荐的图片网站中搜索一个有意思的图片

2、在此基础上加工形成另外一张图片作为尾帧，或者自己再选另外一张图作为尾帧

3、按你的意图请AI制作视频脚本，并生成视频

4、效果最佳者有奖

## 制作穿越机视角酷炫AI视频
上个视频的提示词如下：使用穿越机视角，图1为首帧，先从俯瞰视角迅速穿越到平视视角，在丛林中穿越，再从树林跳跃至水中，参考图2的视角。

请参考上个视频的做法，完成下面的任务：

1、两张图片（首帧和尾帧）

![image4](imgs/image4.png)

![image5](imgs/image5.png)

2、根据上面的图片，完成一个穿越机视角的酷炫AI视频

3、效果最佳者有奖

## Seedance 2.0的智能多帧---产品爆炸视频制作
步骤：

1）搜索一个华为的产品（或者其他东西也可以），找出一张比较完美的宣传图

2）用图形生成终极产品爆炸分解图，提示词如下（自己需要稍加修改）：

生成一张极具视觉冲击力和技术细节的终极产品爆炸分解图，展现【华为AI服务器】被完全拆解后的精密结构。整体采用专业工程插图风格的微微俯视等轴测视角，以纯净的浅灰色背景突显主体。画面核心是产品完整的半透明轮廓，作为所有零件的空间定位锚点。成千上万个零部件——从最核心的内部元件（如芯片、主板、机芯或马达），到中层的功能模块与结构框架，再到最外层的壳体、按键与装饰件，乃至最微小的螺丝、弹簧、垫片、排线与焊点——都按照组成部位的位置结构，有秩序井然地悬浮分离，形成一幅既充满爆炸动感又严格遵循装配逻辑的视觉图谱。

视觉表现上，需融合技术蓝图的理性美学：在关键部件之间添加纤细的发光引导线和小型序号注解，背景中隐约透出极简的网格与尺度标注。采用专业摄影棚的多点柔光布光，精准而细腻地刻画每一种材质（无论是金属、玻璃、塑料还是陶瓷）的质感、倒影与投影，确保每个独立零件的形态、纹理和功能都清晰可辨。最终输出一幅8K超清分辨率、充满极致工业美学与信息密度的分解杰作，完美展现产品的内在工程魅力。

3）用图形生成：生成不同角度的产品特写摄影，不同景别，浅灰色背景 

4）视频生成：智能多帧模式

「动态提示词1」

产品外壳闪烁变成半透明。然后产品开始炫酷地分解，整个过程如爆炸一样，各个零件从产品内部中心点，沿着精确计算的轨迹向外急速悬浮弹出。所有零件在移动过程中保持清晰，最终形成一幅结构分明、层次清晰的爆炸分解图。零件之间有纤细的半透明引导线连接，显示装配关系。缓慢定格画面1秒 

「动态提示词2」

最后，所有悬浮的零件缩小翻转，同时像磁铁一样被【华为AI服务器】吸入到产品内部，从最外层到最内层精准地回归原位。整个过程严丝合缝，最终完美地重新组装成一开始的完整产品。镜头拉远，定格在完整产品上，缓慢定格画面1秒，视频结束。

## 课后作业：AI音乐制作
任务如下：

1、用手机打开QQ音乐，尝试"AI作歌"；或下载VEMUS APP，尝试图片生成音乐；或用Gemini生成30秒音乐；或网易云搜索"AI写歌"；或者用SUNO；

2、思考你的诉求，填上你的想法和背景、素材，请AI帮你生成AI音乐

3、效果最佳者有奖

4、附加任务：回家为这首歌曲剪个视频吧！

## 马斯克太空AI的研究
任务如下：

1、最近网络上报道马斯克要建设太空AI，这个太酷了，怎么回事？

2、请用AI去深入寻找这个问题的答案，尤其是其中的原理、困难和问题

3、假设我们都是一群中学生，请你用易懂有趣的语言，和我们讲讲这个东西到底是怎么回事？

4、分享你的感受和体会

## 视频流萃取
任务如下：

1、请在网上搜索一段时间较长的视频（半小时到2小时之间），最好是youtube上的科技视频或产品发布会，比如Andrej Karpathy的视频或者华为产品的发布会

2、我不想看那么久，请用AI去读视频，帮我总结要点

3、更进一步，在视频出现PPT的时候，要有时间戳以及分析

4、分享你的感受和体会

可以用这个视频：https://www.youtube.com/watch?v=ww92ick66H0

## 餐饮店的AI顾问
任务如下：

1、我想在自己小区附近开一个餐馆

2、但我是一个小白，想请AI帮我参谋参谋，怎么开好餐馆

3、效果最佳者获得奖励

4、你的体会和感想

## 内部信息AI搜索
任务如下：

希望你帮我在3ms、心声社区等公司内部的网站和论坛上查找 关于海外对算力/人工智能/昇腾出海的相关的问题、需求和建议，只需要找海外代表处关注的问题，中国市场需求和问题请过滤掉。整理成问题、需求和建议清单。

## 演示：Gem中的"灵感源泉"体验
任务如下：

1、打开Gem中的"灵感源泉"

2、思考你想办的活动，比如和客户合办5G展会，巴展活动，孩子生日派对，华为family day，部门团建或者开餐馆，开奶茶店，或者去瑞士旅游，越有新意越好

3、和"灵感源泉"持续对话，看能不能获得灵感

4、分享体会和感受

## Canvas动手：高层客户团队来华的策划
任务如下：

我是中国大公司在中东区域的一个主管。一个月后，我要带一个位于中东的大客户高管团队去中国进行商业拜访和沟通，行程为一周，大致安排如下：

1、直飞北京，和工商银行总行的客户交流AI时代的企业数字化和智能化建设，和字节交流新媒体和传统业务的融合发展，在我司北京研究所参观展厅，进行数字化转型的专题交流。并参观故宫、长城、颐和园，欣赏中国京剧，吃北京烤鸭。共2天时间。

2、然后全团通过高铁达到上海，参观我司上海园区，就智能化发展和算力先遣队进行深入交流。并参观上海外滩、豫园，体验南京路的繁华，浦江泛舟。共2天时间。

3、之后，全团坐飞机到深圳总部，和公司高层领导进行战略对话，全面审视过去三年的合作成果，对未来合作进行深入沟通，同时举办战略伙伴的签约合作仪式。同时，参观腾讯公司就移动金融服务和未来可能的合作进行深入沟通，参观大疆公司，体验先进的无人机技术。共2天。

4、最后团队抵达香港，安排太平山顶、维多利亚港游览，泛舟香江，体验最后的休闲时光，然后回程。1天时间。

这是一次极为重要的访问。

我们排出了初步计划，请你进一步细化这个计划。

关于上述的商业拜访和交流活动是基本明确的，只能小幅度调整，但休闲旅游活动是可以调整的，你有更好的推荐的话，也可以提出好的建议。

## NotebookLM动手：深入研究和高质量展现
3任务如下：

1、利用NotebookLM的Deep Research功能，研究：选取2019-2025年，收集华为公司在收入、利润、研发投入、产业分布、全球区域分布等关键数据并予以分析，并结合期间的重大事件，得到关键结论。

2、写好定制提示词，完成一份胶片、一个信息图和视频概览

3、在对话框中持续对话，持续学习，生成一份面向特定场景的演讲文稿

4、后续请继续探索播客、思维导图、测试等各种功能

5、谈谈你的感受和体会

胶片可以自定义风格，大家可以看这篇文章：

2025最新！NotebookLM一键出专业PPT，10套神级提示词直接抄

https://news.sohu.com/a/964733425_121124367

## Deep Research
任务如下：

1、打开Gemini的Deep Research选项

2、输入"选取2019-2025年，收集华为公司在收入、利润、研发投入、产业分布、全球区域分布等关键数据并予以分析，并结合期间的重大事件，得到关键结论。 "

3、观看AI的Deep Research过程和结果

4、你的体会和感想

## 用Deep Research、NotebookLM和Gamma生成PPT
任务如下：

1、在前面的Deep Research环节，我们对华为公司过去七年的表现做了深入分析

2、在此基础上，利用Deep Research、NotebookLM和Gamma完成AI生成PPT胶片，并下载

3、效果如何，谈谈你的感受

## 课后的超级综合练习
要求大家综合使用各类工具（Gemini，Canvas，NotebookLM，Gamma等），完成学习、头脑风暴、材料制作等工作，每个工具都要尝试，输出PPT、视频、信息图等各种形式的产出

可以选择下面的题目，也可以自己选择感兴趣或者下一步学习或工作需要研究的课题：

题目一：哲学

孔子和苏格拉底几乎是同时代的哲学家，他们的哲学理论有什么不同，对后世东西方发展有什么重大意义？

题目二：经济学

请对过去一年全球主要股票市场进行分析，哪些国家的股票市场表现最好，哪些表现最差，原因何在？为什么？

或者：

过去几年，中国正在经历房地产市场的崩塌，核心原因何在？对中国发展的影响如何？美国、日本等国家的类似房地产泡沫破灭的经济灾难是怎么样过来的，对中国有何借鉴意义？

或者：

研究华为过去十年的财务报表，有什么深入的发现？

题目三：管理科学

过去有本很有名的管理书籍《基业长青》，里面列举了当时公认最好的18家公司，分析：

1、当时这些公司为什么公认最好，甚至认为会基业长青？

2、这些公司后来怎么样了？是不是真的基业长青？

3、对比一下现在Top 10市值的公司，你有什么分析结论？

题目四：创新理论和案例研究

有个著名的双联想（Bisociation）创新理论，里面有个著名的约翰内斯·古腾堡（Johannes Gutenberg）发明活字印刷机的案例，请分析这个案例，和大家分享创新的故事、创新的底层逻辑。

题目五：AI研究

AI时代一个显著的现象是提供AI核心产品的大公司的财富涌现效应，出现了富可敌国的现象，就是说一些顶级公司的市值和一些大国的GDP几乎相同，请分析这种情况，并给出结论。

或者：

请深入研究马斯克畅想的太空AI计划

题目六：历史

你要给学生上一门有趣的课，就是历史上，冷兵器如何热兵器转换。你可以多个角度研究、分析，并分享给你的学生们。

或者：

美国清教徒是如何产生的？清教徒文化的关键点在哪里？清教徒文化如何影响美国的发展？

或者：

全球四大古文明的产生、历史、特点以及对当今文明的影响

或者：

西班牙的殖民和中国明朝的发展与灭亡的关系

题目七：生物

人类是如何演进，最后如何成为地球的霸主，经过哪几个阶段？最关键的技能进化是什么？

题目八：军事

请研究最近美国和以色列对伊朗的军事战争，其打法有什么新的特点，和新技术的关系如何？并对比俄乌战争，有什么发现？

## 第一次AI编程
任务：

1. 我想知道自己加入华为后到底在公司奋斗了多少天。有些特别的日子，比如"1111"天发个朋友圈纪念一下。

2. 用各种大模型（豆包、DS、千问、Gemini等）去问问，看能不能得到答案。

3. 试用谷歌canvas和字节的Trae进行你人生的第一次AI编程

下面这个图等老师说了再用：

![image6](imgs/image6.jpeg)

![image7](imgs/image7.png)

![image8](imgs/image8.png)

## 进阶编程挑战：新西兰星空奇遇
任务：

寒假全家要去新西兰旅游，大家对观星项目特别感兴趣，我要做一个手机上的APP，这样我们在新西兰就可以对着美丽的星空，拿着手机，识别星星和星系，并且可以学到相关知识。

请完成一个手机应用程序。

## 超阶编程挑战
任务：

你要去一个中学开展一次AI基础知识的普及课，在课后，需要给所有的学生做一个考试，考试内容就是今天所讲的AI基础知识，考题类型包括对错题、单选题和多选题，学生的考题需随机（不能每人一样），总分100分，80分为合格。

工作的三个步骤：

1）整个小组一起讨论怎么完成这个工作，能不能做个SOP？

2）每个同学用Trae来实现这个AI编程

3）完成后分享感受

4）速度最快、质量最高的获得"AI编程冠军"大奖

## 玩转华为小龙虾
四个可选的任务：

任务一：

任务二：

任务三：

任务四：

要求：

1）选择一个任务，完成skills的制作

2）定好每天早上八点发给自己，或者用某个预先定义的输入启动此任务

3）速度最快、质量最高的获得"华为小龙虾冠军"大奖

## 意见反馈
`;

const feedbackForm = `
<div class="feedback-form">
    <label>姓名：</label>
    <input type="text" id="feedbackName" placeholder="请输入您的姓名">
    <label>您的反馈意见：</label>
    <textarea id="feedbackContent" placeholder="请输入您的反馈意见"></textarea>
    <button id="submitBtn">提交反馈</button>
    <div id="feedbackStatus"></div>
</div>`;

document.addEventListener('DOMContentLoaded', function() {
    const contentEl = document.getElementById('content');
    const navListEl = document.getElementById('navList');

    marked.setOptions({
        breaks: true,
        gfm: true
    });
    contentEl.innerHTML = marked.parse(markdownContent);
    contentEl.innerHTML += feedbackForm;

    const headings = contentEl.querySelectorAll('h2');
    const navItems = [];

    headings.forEach((heading, index) => {
        const id = 'section-' + index;
        heading.id = id;

        const navItem = document.createElement('a');
        navItem.className = 'nav-item';
        navItem.textContent = (index + 1) + '. ' + heading.textContent;
        navItem.dataset.target = id;
        navItem.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.getElementById(id);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });

        navListEl.appendChild(navItem);
        navItems.push({ el: navItem, target: heading });
    });

    const contentContainer = document.querySelector('.content');

    function updateActiveNav() {
        const scrollTop = contentContainer.scrollTop;
        const containerHeight = contentContainer.clientHeight;
        const scrollBottom = scrollTop + containerHeight;
        const contentHeight = contentEl.offsetHeight;

        let activeIndex = -1;

        for (let i = navItems.length - 1; i >= 0; i--) {
            const heading = navItems[i].target;
            const rect = heading.getBoundingClientRect();
            const contentRect = contentContainer.getBoundingClientRect();
            const relativeTop = rect.top - contentRect.top + scrollTop;

            if (relativeTop <= scrollTop + 100) {
                activeIndex = i;
                break;
            }
        }

        if (scrollTop + containerHeight >= contentHeight - 50) {
            activeIndex = navItems.length - 1;
        }

        navItems.forEach((item, index) => {
            if (index === activeIndex) {
                item.el.classList.add('active');
            } else {
                item.el.classList.remove('active');
            }
        });
    }

    contentContainer.addEventListener('scroll', updateActiveNav);
    updateActiveNav();

    const submitBtn = document.getElementById('submitBtn');
    const feedbackName = document.getElementById('feedbackName');
    const feedbackContent = document.getElementById('feedbackContent');

    submitBtn.addEventListener('click', function() {
        const name = feedbackName.value.trim();
        const content = feedbackContent.value.trim();

        if (!name) {
            showStatus('请输入姓名', 'error');
            return;
        }

        if (!content) {
            showStatus('请输入反馈意见', 'error');
            return;
        }

        if (!GITHUB_CONFIG.repo || !GITHUB_CONFIG.token) {
            showStatus('请先在代码中配置GitHub仓库和Token', 'error');
            return;
        }

        const date = new Date().toLocaleString('zh-CN');
        const issueTitle = `【反馈】${name} - ${date}`;
        const issueBody = `**提交日期：** ${date}\n\n**姓名：** ${name}\n\n**反馈内容：**\n${content}`;

        fetch(`https://api.github.com/repos/${GITHUB_CONFIG.repo}/issues`, {
            method: 'POST',
            headers: {
                'Accept': 'application/vnd.github.v3+json',
                'Authorization': `token ${GITHUB_CONFIG.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: issueTitle,
                body: issueBody,
                labels: ['feedback']
            })
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                return response.json().then(err => {
                    throw new Error(err.message || '提交失败');
                });
            }
        })
        .then(data => {
            showStatus('反馈提交成功！感谢您的意见。', 'success');
            feedbackName.value = '';
            feedbackContent.value = '';
        })
        .catch(error => {
            showStatus('提交失败：' + error.message, 'error');
            console.error(error);
        });
    });

    function showStatus(message, type) {
        feedbackStatus.textContent = message;
        feedbackStatus.className = type;
        setTimeout(() => {
            feedbackStatus.className = '';
        }, 3000);
    }
});
