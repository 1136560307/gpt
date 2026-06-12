import React from 'react';
import { createRoot } from 'react-dom/client';
import { Award, Bot, CheckCircle2, ChevronRight, ClipboardCheck, FileBadge2, FlaskConical, HeartHandshake, Menu, MessageCircle, Phone, ShieldCheck, Sparkles, Store, Users, X } from 'lucide-react';
import './styles.css';

const nav = [
  ['首页','#home'], ['品牌实力','#proof'], ['院线产品','#products'], ['门店模型','#store'], ['护理体系','#care'], ['合作支持','#join'], ['联系合作','#contact']
];

const heroBadges = ['东方草本智慧', '现代头皮科技', '头皮状态评估', '院线护理体验', '居家巩固管理'];

const strengths = [
  ['专项定位', '专注白发、脱发、头油头屑、发丝脆弱等头皮毛发护理需求，建立清晰的品牌服务方向。', ShieldCheck],
  ['产品矩阵', '围绕院线套盒、居家精华、洗护与发丝修护产品，形成到店体验与居家巩固相衔接的产品体系。', FlaskConical],
  ['门店模型', '从门头识别、咨询评估、护理服务到产品陈列，呈现可参观、可体验、可持续服务的门店模型。', Store],
  ['品牌支持', '以品牌形象、运营物料、内容传播、开业筹备与持续复盘为核心，支持合作门店长期经营。', HeartHandshake]
];

const stats = [
  ['10年+', '美业连锁沉淀'], ['500+', '过往体系门店经验'], ['3项', '品牌荣誉与文化背书'], ['8项', '品牌支持体系']
];

const products = [
  {
    name: '虫草臻养精华液套盒',
    spec: '10ml × 15瓶',
    tag: '头皮臻养 · 水油平衡 · 清爽护理',
    desc: '围绕头皮舒适度、清爽感和日常水油平衡进行护理表达，适合头油、扁塌、不清爽等常见头皮护理场景。',
    points: ['头皮臻养护理', '清爽控油场景', '院线护理体验']
  },
  {
    name: '珍草健发防断发精华液套盒',
    spec: '10ml × 30瓶',
    tag: '防断强韧 · 发丝脆弱 · 干枯毛躁',
    desc: '围绕发丝韧性、发根状态和头皮环境进行综合护理表达，适合断发、发丝脆弱、干枯毛躁等护理场景。',
    points: ['防断强韧护理', '发丝状态管理', '周期护理组合']
  },
  {
    name: '植萃人参虫草首乌精华液套盒',
    spec: '10ml × 30瓶',
    tag: '白发养护 · 发根滋养 · 头皮屏障',
    desc: '以人参、虫草、首乌等草本方向建立产品记忆，适合白发养护、发根滋养和头皮屏障护理场景。',
    points: ['白发养护场景', '发根滋养护理', '居家巩固建议']
  }
];

const storeSections = [
  ['门头识别', '以高识别度品牌橙与“白发脱发中心”定位，建立清晰的街区品牌记忆。'],
  ['前台接待', '通过标准接待、资料展示和初步沟通，让顾客快速理解品牌与服务方向。'],
  ['咨询评估', '从头皮状态、发丝表现和日常习惯入手，形成更清晰的护理建议。'],
  ['护理服务', '以舒适动线、专业空间和统一流程，呈现更安心的院线护理体验。'],
  ['产品陈列', '通过院线套盒与居家巩固产品展示，让护理方案更直观、更可理解。']
];

const careSteps = [
  ['01', '头皮状态评估', '关注头油、头屑、敏感、掉发、白发、发丝脆弱等常见表现，建立基础护理认知。'],
  ['02', '定制护理建议', '结合顾客头皮与发丝状态，匹配院线护理、居家巩固与日常洗护建议。'],
  ['03', '院线护理体验', '通过标准化护理流程、专业服务空间和清晰产品组合，提升到店护理体验。'],
  ['04', '居家巩固管理', '搭配精华、洗护和日常护理建议，将到店体验延伸到长期养护场景。']
];

const supports = [
  ['品牌形象支持', '统一门头、空间氛围、物料标准与陈列建议，帮助门店建立专业识别。'],
  ['产品体系支持', '围绕院线套盒、居家精华、洗护产品与发丝修护产品，建立清晰产品组合。'],
  ['开业筹备支持', '提供开业物料、产品陈列、服务流程和活动规划等基础筹备建议。'],
  ['内容传播支持', '围绕品牌定位、产品特点、门店场景与节日活动，输出官方内容方向。']
];

const faqs = [
  ['俏博士主要做什么？', '俏博士 DR.JOO 是专注白发脱发研究与服务的头皮毛发护理品牌，建立从头皮状态评估、院线护理体验到居家巩固管理的系统化养护路径。'],
  ['俏博士是单纯卖产品吗？', '不是。俏博士提供的是围绕头皮毛发护理场景建立的品牌服务体系，包括产品矩阵、门店形象、护理流程、陈列资料、品牌内容和合作支持。'],
  ['适合哪些门店合作？', '适合美容院、养发馆、头皮管理门店、皮肤管理门店、祛痘门店，以及希望进入头皮毛发护理赛道的新创业者。']
];

function Logo() {
  return <div className="logo"><span>DR.JOO</span><b>俏博士</b><small>专注白发脱发研究与服务</small></div>;
}

function Header() {
  const [open,setOpen] = React.useState(false);
  return <header className="header">
    <Logo />
    <button className="menu" onClick={()=>setOpen(!open)} aria-label="切换导航">{open ? <X/> : <Menu/>}</button>
    <nav className={open ? 'open' : ''}>
      {nav.map(([n,h]) => <a key={n} href={h} onClick={()=>setOpen(false)}>{n}</a>)}
      <a className="topCta" href="#contact">获取品牌资料</a>
    </nav>
  </header>;
}

function SectionTitle({eyebrow, title, desc, center=false}) {
  return <div className={center ? 'sectionTitle center' : 'sectionTitle'}>
    <span>{eyebrow}</span>
    <h2 dangerouslySetInnerHTML={{__html:title}} />
    <p>{desc}</p>
  </div>;
}

function ProductCard({item, index}) {
  return <article className="productCard">
    <div className="productImageWrap"><ProductScene tone={index===0?'gold':index===1?'green':'red'} label={item.name.replace('套盒','')} /></div>
    <div className="productBody">
      <span className="productNo">0{index+1}</span>
      <h3>{item.name}</h3>
      <b>{item.spec}</b>
      <em>{item.tag}</em>
      <p>{item.desc}</p>
      <div className="miniTags">{item.points.map(p=><small key={p}>{p}</small>)}</div>
    </div>
  </article>;
}

function ProductScene({tone='gold', label='院线套盒'}) {
  return <div className={`productScene ${tone}`}>
    <div className="box"><b>{label}</b><span>DR.JOO 俏博士</span><em>院线护理套盒</em></div>
    <div className="tray">{Array.from({length:15}).map((_,i)=><i key={i}></i>)}</div>
  </div>;
}

function HeroVisual() {
  return <div className="heroVisual">
    <div className="heroProduct heroMain"><ProductScene tone="gold" label="虫草臻养精华液" /></div>
    <div className="heroProduct heroSub"><ProductScene tone="red" label="植萃人参虫草首乌" /></div>
    <div className="glassCard"><b>院线护理产品矩阵</b><span>到店体验 · 居家巩固 · 长期养护</span></div>
  </div>;
}

function App() {
  return <>
    <Header />
    <main>
      <section id="home" className="hero">
        <div className="heroText">
          <div className="pill"><ShieldCheck/> DR.JOO 俏博士｜白发脱发中心</div>
          <h1>科学白发养护专家<br/><span>专注白发脱发研究与服务</span></h1>
          <p>俏博士以东方草本智慧与现代头皮科技为基础，聚焦白发、脱发、头油头屑、发丝脆弱等头皮毛发护理需求，构建从头皮状态评估、院线护理体验到居家巩固管理的系统化养护路径。</p>
          <div className="heroBadges">{heroBadges.map(b=><small key={b}>{b}</small>)}</div>
          <div className="heroBtns"><a href="#products">查看院线产品</a><a href="#contact">咨询合作模式 <ChevronRight size={16}/></a></div>
        </div>
        <HeroVisual />
      </section>

      <section className="stats">{stats.map(([n,t])=><div key={t}><b>{n}</b><span>{t}</span></div>)}</section>

      <section className="section brandIntro">
        <div className="introText">
          <SectionTitle eyebrow="ABOUT DR.JOO" title={'从头皮环境出发，<span>重新理解白发脱发护理</span>'} desc="白发脱发不只是头发表面的变化，也与头皮环境、发根状态、清洁方式、生活习惯和长期护理方式有关。俏博士从专业护理场景出发，让白发脱发护理从单次体验升级为更清晰、更长期的服务路径。" />
        </div>
        <div className="strengthGrid">{strengths.map(([t,d,I])=><article key={t}><I/><h3>{t}</h3><p>{d}</p></article>)}</div>
      </section>

      <section id="products" className="section productSection">
        <SectionTitle center eyebrow="PRODUCT SYSTEM" title={'院线护理与居家巩固<span>产品矩阵</span>'} desc="围绕白发养护、防断强韧、头皮臻养、控油蓬松与发丝润泽等护理场景，俏博士构建到店体验与居家巩固相衔接的院线产品体系。" />
        <div className="productGrid">{products.map((item,i)=><ProductCard key={item.name} item={item} index={i} />)}</div>
      </section>

      <section id="store" className="section storeModel">
        <div>
          <SectionTitle eyebrow="STORE MODEL" title={'构建可呈现的<span>白发脱发护理门店模型</span>'} desc="从门头识别、前台接待、咨询评估到护理服务和产品陈列，俏博士将白发脱发护理呈现为可参观、可体验、可持续服务的门店模型。" />
          <div className="storeFlow">{storeSections.map(([t,d],i)=><article key={t}><b>{String(i+1).padStart(2,'0')}</b><h3>{t}</h3><p>{d}</p></article>)}</div>
        </div>
        <div className="storeMock">
          <div className="storeSign">DR.JOO 俏博士｜白发脱发中心</div>
          <div className="storeRooms"><i></i><i></i><i></i></div>
          <div className="storeLabel">可参观 · 可体验 · 可持续服务</div>
        </div>
      </section>

      <section id="care" className="section careSection">
        <SectionTitle center eyebrow="SCALP CARE SYSTEM" title={'从头皮状态评估，到<span>长期养护管理</span>'} desc="俏博士强调温和、持续、可理解的护理方式，将头皮状态评估、定制护理建议、院线护理体验和居家巩固管理连接成一套完整路径。" />
        <div className="careSteps">{careSteps.map(([n,t,d])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div>
      </section>

      <section id="proof" className="section proofSection">
        <SectionTitle center eyebrow="BRAND PROOF" title={'看得见的<span>品牌实力</span>'} desc="品牌荣誉、门店实景、产品资料与服务体系，共同构成俏博士可展示、可理解、可传播的品牌信任基础。" />
        <div className="proofGrid">
          {['非物质文化传承与发展先进人物','非物质文化传承与发展匠心品牌','非物质文化传承与发展示范单位'].map(t=><article key={t}><FileBadge2/><small>品牌荣誉</small><h3>{t}</h3><p>体现俏博士在东方草本文化、传统养护理念与现代服务场景结合方面的持续探索。</p></article>)}
        </div>
      </section>

      <section id="join" className="section supportSection">
        <SectionTitle center eyebrow="SUPPORT POLICY" title={'面向合作伙伴的<span>全周期品牌支持体系</span>'} desc="俏博士以品牌形象、产品体系、空间规划、运营物料、内容传播与持续服务为核心，为合作伙伴提供更完整、更稳定的品牌合作支持。" />
        <div className="supportGrid">{supports.map(([t,d])=><article key={t}><CheckCircle2/><h3>{t}</h3><p>{d}</p></article>)}</div>
      </section>

      <section className="section digitalSection">
        <SectionTitle center eyebrow="DIGITAL ENABLEMENT" title={'数字化能力，让<span>品牌服务更高效触达</span>'} desc="俏博士持续建设品牌内容、产品资料、服务知识与数字化工具体系，让总部能力更高效、更标准地支持每一家合作门店。" />
        <div className="digitalGrid">
          <article><Bot/><h3>品牌内容中台</h3><p>沉淀品牌资料、产品卖点、活动素材、门店案例和护理知识，让官方内容更便捷调用。</p></article>
          <article><Sparkles/><h3>智能素材生成</h3><p>提升海报、封面、朋友圈与活动视觉物料的生产效率，保持品牌视觉统一。</p></article>
          <article><MessageCircle/><h3>服务知识体系</h3><p>围绕常见咨询、产品说明与护理路径，形成更清晰、更统一的服务表达。</p></article>
        </div>
      </section>

      <section className="section faqSection">
        <SectionTitle eyebrow="FAQ" title={'常见问题'} desc="用更清晰的方式了解俏博士品牌、产品体系和合作方向。" />
        <div className="faqList">{faqs.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>
      </section>

      <section id="contact" className="section contactSection">
        <div>
          <SectionTitle eyebrow="CONTACT" title={'获取俏博士品牌资料'} desc="提交姓名、手机号、城市和咨询需求，品牌顾问将为你提供品牌介绍、产品资料、门店合作模式与城市合作政策说明。" />
          <div className="contactInfo"><p><Phone/>400-966-9675</p><p><HeartHandshake/>全国招商合作服务中心</p></div>
        </div>
        <form onSubmit={e=>{e.preventDefault();alert('已收到咨询信息，品牌顾问会尽快联系你。')}}>
          <input required placeholder="姓名" />
          <input required pattern="^1[3-9]\d{9}$" placeholder="手机" />
          <input placeholder="城市，如：长沙" />
          <textarea placeholder="请输入你想了解的加盟、产品或门店项目需求"></textarea>
          <button>提交咨询</button>
          <small>提交信息仅用于俏博士品牌咨询与合作对接，我们将妥善保护你的个人信息。</small>
        </form>
      </section>
    </main>
    <footer><Logo/><p>© 2026 长沙俏博士养发有限公司 版权所有 · 备案号待补充</p></footer>
  </>;
}

createRoot(document.getElementById('root')).render(<App />);
