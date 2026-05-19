"use client";
import { useState, useEffect, useRef } from "react";

const SITE = {
  name: "Chase Linzey",
  tagline: "landscape architecture · GIS · urban design",
  heroLine: "Designing landscapes\nthat work for people\nand the land.",
  headshot: "/images/headshot.jpg",
  about: {
    bio: "I'm Chase Linzey — a landscape architect from Los Angeles, recently graduated with a BLA from the University of Arizona. My design principles center on being more intentional with every project and maximizing my clients' needs. I love history, anything sports, and building computers. I'm looking for opportunities where I can grow as a designer and contribute to meaningful public and private landscapes.",
    quote: "We always talk about luck at the beginning of a life of creativity. I think it's important to be ready for that luck, and that is hard work. There are no shortcuts.",
    quoteAuthor: "Mikyoung Kim",
  },
  contact: { email: "chaselinzey@gmail.com", phone: "(520) 256-3394", linkedin: "https://www.linkedin.com/in/chaseplinzey/" },
  experience: [
    { role: "Undergraduate Research Assistant II", org: "CAPLA, University of Arizona", period: "Feb 2026 – May 2026", bullets: ["Co-lead designer on a 6-person team developing a sustainable landscape design proposal for the Rio Rico Frontage Road revitalization project","Conducted site analysis, terrain evaluation, and planting strategy focused on native horticulture and ecosystem integration","Produced design documentation using AutoCAD, Adobe Creative Suite, and SketchUp","Collaborating on submission to ASLA National Awards (May 2026)","Supporting early-phase construction planning with anticipated build in late 2026"] },
    { role: "Landscape Architecture Intern", org: "Kimley-Horn, Tucson", period: "May 2025 – Aug 2025", bullets: ["Contributed to planning and design for 6+ projects across the Greater Tucson area totaling $10M+ in construction value","Developed concept plans and technical drawings using AutoCAD, Civil 3D, and SketchUp","Assisted with site analysis, park inventory, and roadway/irrigation design","Participated in city meetings with clients and stakeholders"] },
    { role: "Youth Conservation Intern", org: "National Park Service, American Southwest", period: "Jun 2021 – Aug 2021", bullets: ["Performed trail construction, maintenance, and habitat restoration across remote Southwest sites","Conducted fieldwork involving native and invasive plant identification","Supported conservation efforts through ecological education and environmental stewardship"] },
  ],
  education: { degree: "Bachelor of Landscape Architecture", school: "University of Arizona — CAPLA", gpa: "3.5 GPA", year: "May 2026", activities: "Tennis Club · ASLA Member · CAPLA Ambassador", awards: ["Dean's Honor Roll — 6 Semesters","2026 CAPLA ASLA Merit Nomination","Spring 2024 AZASLA Honor Award","Athletic Distinction in Club Tennis"] },
  skills: {
    software: ["Adobe Photoshop","Adobe Illustrator","Adobe InDesign","AutoCAD","Civil 3D","ArcGIS","SketchUp"],
    design: ["Graphic Design","Hand-Drawn Graphics","Technical Design","Model Making","Planting Design","Site Analysis","Construction Docs","GIS / Cartography"],
  },
  projects: [
    {
      id: "capstone", title: "Convivial Landscapes — Capstone", type: "CAPSTONE · LAR498 STUDIO", date: "Spring 2026", location: "Tucson, AZ", size: "6 Acres", color: "#6B8F5E", highlight: true,
      images: Array.from({length:16},(_,i)=>`/images/capstone-${i+1}.jpg`),
      description: "Empty, unused lots can be transformed into something meaningful for both people and the environment. The main idea behind this project is conviviality — creating a space where people, plants, and animals can all exist together in a way that feels natural and balanced. Instead of designing only for people or only for nature, the project creates zones across the site that shift in how they are used. Some areas are more human-focused — plazas, playgrounds, and spaces for food trucks or local vendors. Other areas prioritize habitat with limited human interaction. Transition zones allow both systems to overlap, creating a spectrum of experiences throughout the site. The project includes multiple plazas, walking paths, garden spaces, and protected habitat areas. Water harvesting systems such as basins and swales capture and reuse water in the Sonoran Desert. Native plants like mesquite, acacia, creosote, and saguaro were chosen for climate adaptation and ecosystem support. Layered vegetation supports different species — insects and ground species in low-disturbance zones, birds through open sightlines. This project hopes to create a framework for similar projects throughout the American Southwest, turning leftover land into communal nodes that bring life back into the city.",
    },
    { id: "rio-rico", title: "Rio Rico Frontage Road Revitalization", type: "URBAN · GROUP PROJECT (TEAM LEAD)", date: "Fall 2025 — Spring 2026", location: "Rio Rico, AZ", size: "3.8 Miles", color: "#D4A574", highlight: false, images: ["/images/rio-rico-1.jpg","/images/rio-rico-2.jpg","/images/rio-rico-3.jpg"], description: "A 3.8-mile frontage road revitalization addressing intense reflective heat, lack of shade, no pedestrian-road buffer, and flooding/erosion. The design introduces 112 native trees (Desert Willow, Ironwood, Sweet Acacia, Honey Mesquite), water-harvesting basins, and buffered pedestrian pathways. Expected ribbon cutting Spring 2026. Submitted to ASLA National Awards." },
    { id: "infinity-garden", title: "Infinity Garden @ Watermark Retirement", type: "GARDEN · GROUP PROJECT", date: "Fall 2025", location: "Tucson, AZ", size: "6,400 sqft", color: "#8DAA6F", highlight: false, images: ["/images/infinity-garden-1.jpg","/images/infinity-garden-2.jpg","/images/infinity-garden-3.jpg"], description: "A multi-zone courtyard garden for a retirement community featuring Garden, Recreation, Mystery, and Sensory zones. Designed an infinity path connecting community gardens, aroma gardens, and recreation spaces. Presented to Watermark Retirement's local board in December 2025." },
    { id: "sensory-garden", title: "Mediterranean Sunken Sensory Garden", type: "GARDEN · SOLO", date: "Fall 2025", location: "Tucson, AZ", size: "0.4 Acres", color: "#B8860B", highlight: false, images: ["/images/sensory-garden-1.jpg","/images/sensory-garden-2.jpg","/images/sensory-garden-3.jpg"], description: "A Mediterranean-style garden exploring how abstract geometric art shapes outdoor space. Influenced by Theorem of Forms and Mikyoung Kim's design principles. Features a lowered shade plaza surrounded by Cleveland sage and pomegranate trees, with elevated planters of textured plant layers creating enclosure and depth." },
    { id: "arid-garden", title: "Arid Sonoran Garden", type: "GARDEN · SOLO", date: "Fall 2025", location: "Tucson, AZ", size: "600 sqft", color: "#CC8844", highlight: false, images: ["/images/arid-garden-1.jpg","/images/arid-garden-2.jpg"], description: "A drought-resistant desert garden using Desert Willow, Honey Mesquite, Texas Sage, Ocotillo, Joshua Tree, Red Yucca, and Agave. All plants need under 10 inches of rainfall annually. Medium canopies kept under 20×20 feet to create intimate focal points rather than imposing spaces." },
    { id: "rivera", title: "Dinural Outdoor Design @ Rivera Elementary", type: "URBAN · SOLO", date: "Fall 2024", location: "Tucson, AZ", size: "2.3 Acres", color: "#7A9BAE", highlight: false, images: ["/images/rivera-1.jpg","/images/rivera-2.jpg","/images/rivera-3.jpg"], description: "A campus revitalization for Rivera Elementary School addressing disjointed lawn space and lack of nature connection. Created points of arrival with swings, four-square courts, shade structures, solar canopies, and a wooden arcade. Natural playground and garden spaces serve as outdoor classrooms throughout the day." },
    { id: "coatimundi", title: "Coatimundi Habitat Suitability Analysis", type: "GIS · SOLO", date: "2025", location: "Pima County, AZ", size: "County-wide", color: "#C4956A", highlight: false, images: ["/images/coatimundi-1.jpg","/images/coatimundi-2.jpg"], description: "A GIS suitability map using ArcGIS to determine optimal Coatimundi habitat zones in Southern Arizona. Weighted 95% on vegetation type and 5% on road distance. Identified key habitat in the O'odham Reservation, Coronado National Forest, and Rincon Mountain District." },
  ],
  processPhotos: Array.from({length:8},(_,i)=>`/images/process-${i+1}.jpg`),
};

const FONT_URL = "https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Jost:wght@300;400;500;600;700&display=swap";
const C = { bg:"#0D0F0D", surface:"#141714", surfaceHover:"#1A1E1A", border:"rgba(180,200,170,0.08)", borderHover:"rgba(180,200,170,0.18)", text:"#E8EBE4", textMuted:"rgba(232,235,228,0.5)", textDim:"rgba(232,235,228,0.3)", accent:"#A3B18A", accentWarm:"#D4A574", accentDim:"rgba(163,177,138,0.15)" };

// ── LIGHTBOX ────────────────────────────────────────────────────
function Lightbox({ images, startIdx, onClose }) {
  const [idx, setIdx] = useState(startIdx);
  const t = images.length;
  useEffect(() => {
    const k = (e) => { if(e.key==="Escape")onClose(); if(e.key==="ArrowRight")setIdx(i=>(i+1)%t); if(e.key==="ArrowLeft")setIdx(i=>(i-1+t)%t); };
    document.body.style.overflow="hidden"; window.addEventListener("keydown",k);
    return ()=>{ document.body.style.overflow=""; window.removeEventListener("keydown",k); };
  }, [t,onClose]);
  const btn = (side,arrow,go) => <button onClick={(e)=>{e.stopPropagation();go();}} style={{ position:"absolute",[side]:16,top:"50%",transform:"translateY(-50%)", width:48,height:48,borderRadius:"50%",background:"rgba(255,255,255,0.1)", border:"none",color:"#fff",fontSize:24,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center" }}>{arrow}</button>;
  return (
    <div onClick={onClose} style={{ position:"fixed",inset:0,zIndex:99999,background:"rgba(0,0,0,0.92)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"zoom-out" }}>
      <button onClick={onClose} style={{ position:"absolute",top:20,right:24,background:"none",border:"none",color:"#fff",fontSize:32,cursor:"pointer",zIndex:100000,padding:8 }}>✕</button>
      <div style={{ position:"absolute",top:24,left:"50%",transform:"translateX(-50%)",fontFamily:"'Jost',sans-serif",fontSize:13,color:"rgba(255,255,255,0.6)",letterSpacing:"0.1em" }}>{idx+1} / {t}</div>
      {t>1 && btn("left","‹",()=>setIdx((idx-1+t)%t))}
      <img src={images[idx]} alt={`Image ${idx+1}`} onClick={e=>e.stopPropagation()} style={{ maxWidth:"90vw",maxHeight:"85vh",objectFit:"contain",cursor:"default" }} />
      {t>1 && btn("right","›",()=>setIdx((idx+1)%t))}
    </div>
  );
}

// ── NAV ─────────────────────────────────────────────────────────
function Nav({ active, scrollTo }) {
  const [scrolled,setScrolled]=useState(false);
  const [open,setOpen]=useState(false);
  const links=["home","about","experience","projects","process","skills","contact"];
  useEffect(()=>{ const f=()=>setScrolled(window.scrollY>50); window.addEventListener("scroll",f); return()=>window.removeEventListener("scroll",f); },[]);
  return (
    <nav style={{ position:"fixed",top:0,left:0,right:0,zIndex:1000,padding:scrolled?"14px 0":"22px 0",background:scrolled?"rgba(13,15,13,0.92)":"transparent",backdropFilter:scrolled?"blur(16px)":"none",borderBottom:scrolled?`1px solid ${C.border}`:"none",transition:"all 0.5s cubic-bezier(0.16,1,0.3,1)" }}>
      <div style={{ maxWidth:1140,margin:"0 auto",padding:"0 32px",display:"flex",justifyContent:"space-between",alignItems:"center" }}>
        <button onClick={()=>scrollTo("home")} style={{ background:"none",border:"none",cursor:"pointer",fontFamily:"'DM Serif Display',serif",fontSize:20,color:C.text }}>CL<span style={{color:C.accent}}>.</span></button>
        <div className="desk-nav" style={{ display:"flex",gap:28 }}>
          {links.map(l=><button key={l} onClick={()=>scrollTo(l)} style={{ background:"none",border:"none",cursor:"pointer",padding:"4px 0",fontFamily:"'Jost',sans-serif",fontSize:13,fontWeight:400,letterSpacing:"0.14em",textTransform:"uppercase",color:active===l?C.accent:C.textMuted,transition:"color 0.3s" }}>{l}</button>)}
        </div>
        <button className="mob-btn" onClick={()=>setOpen(!open)} style={{ display:"none",background:"none",border:"none",color:C.text,fontSize:22,cursor:"pointer" }}>{open?"✕":"☰"}</button>
      </div>
      {open&&<div style={{ position:"fixed",top:0,left:0,right:0,bottom:0,background:C.bg,zIndex:9999,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:32 }}>
        <button onClick={()=>setOpen(false)} style={{ position:"absolute",top:24,right:32,background:"none",border:"none",color:C.text,fontSize:28,cursor:"pointer",zIndex:10000,padding:8 }}>✕</button>
        {links.map(l=><button key={l} onClick={()=>{scrollTo(l);setOpen(false);}} style={{ background:"none",border:"none",cursor:"pointer",fontFamily:"'DM Serif Display',serif",fontSize:24,color:active===l?C.accent:C.textMuted,letterSpacing:"0.06em",textTransform:"capitalize" }}>{l}</button>)}
      </div>}
    </nav>
  );
}

// ── HELPERS ──────────────────────────────────────────────────────
function Reveal({children,id,style={}}){const ref=useRef(null);const[vis,setVis]=useState(false);useEffect(()=>{const o=new IntersectionObserver(([e])=>{if(e.isIntersecting)setVis(true)},{threshold:0.08});if(ref.current)o.observe(ref.current);return()=>o.disconnect();},[]);return<section ref={ref} id={id} style={{opacity:vis?1:0,transform:vis?"none":"translateY(36px)",transition:"opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)",...style}}>{children}</section>;}
function Label({text}){return<div style={{fontFamily:"'Jost',sans-serif",fontSize:11,fontWeight:600,letterSpacing:"0.22em",textTransform:"uppercase",color:C.accent,marginBottom:10}}>— {text}</div>;}
function STitle({children}){return<h2 style={{fontFamily:"'DM Serif Display',serif",fontSize:"clamp(28px,4vw,44px)",fontWeight:400,color:C.text,lineHeight:1.2,marginBottom:20}}>{children}</h2>;}

// ── HERO ─────────────────────────────────────────────────────────
function Hero({scrollTo}){
  const[loaded,setLoaded]=useState(false);useEffect(()=>{setTimeout(()=>setLoaded(true),150);},[]);
  const fade=d=>({opacity:loaded?1:0,transform:loaded?"none":"translateY(24px)",transition:`all 0.9s cubic-bezier(0.16,1,0.3,1) ${d}s`});
  return(
    <section id="home" style={{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",inset:0,zIndex:0}}>
        <div className="orb-a" style={{position:"absolute",width:700,height:700,borderRadius:"50%",background:`radial-gradient(circle,${C.accent}0D 0%,transparent 65%)`,top:"-15%",right:"-10%",filter:"blur(80px)"}}/>
        <div className="orb-b" style={{position:"absolute",width:500,height:500,borderRadius:"50%",background:`radial-gradient(circle,${C.accentWarm}0A 0%,transparent 65%)`,bottom:"0%",left:"-5%",filter:"blur(100px)"}}/>
        <svg style={{position:"absolute",inset:0,width:"100%",height:"100%",opacity:0.025}}>{Array.from({length:20},(_,i)=><ellipse key={i} cx="55%" cy="50%" rx={120+i*50} ry={80+i*35} fill="none" stroke={C.text} strokeWidth="0.5"/>)}</svg>
      </div>
      <div style={{position:"relative",zIndex:1,textAlign:"center",maxWidth:780,padding:"0 32px"}}>
        <div style={fade(0.2)}><div style={{fontFamily:"'Jost',sans-serif",fontSize:12,fontWeight:500,letterSpacing:"0.3em",textTransform:"uppercase",color:C.accent,marginBottom:28}}>{SITE.tagline}</div></div>
        <div style={fade(0.4)}><h1 style={{fontFamily:"'DM Serif Display',serif",fontSize:"clamp(38px,7vw,76px)",fontWeight:400,color:C.text,lineHeight:1.1,marginBottom:28,whiteSpace:"pre-line"}}>{SITE.heroLine}</h1></div>
        <div style={fade(0.6)}><p style={{fontFamily:"'Jost',sans-serif",fontSize:17,fontWeight:300,color:C.textMuted,maxWidth:480,margin:"0 auto 36px",lineHeight:1.8}}>BLA from the University of Arizona · CAPLA<br/>Formerly at Kimley-Horn · National Park Service</p></div>
        <div style={{...fade(0.8),display:"flex",gap:16,justifyContent:"center",flexWrap:"wrap"}}>
          <button onClick={()=>scrollTo("projects")} className="btn-fill" style={{fontFamily:"'Jost',sans-serif",fontSize:13,fontWeight:500,letterSpacing:"0.1em",textTransform:"uppercase",color:C.bg,background:C.accent,border:"none",padding:"15px 34px",cursor:"pointer",transition:"all 0.3s"}}>View Projects</button>
          <button onClick={()=>scrollTo("contact")} className="btn-ghost" style={{fontFamily:"'Jost',sans-serif",fontSize:13,fontWeight:500,letterSpacing:"0.1em",textTransform:"uppercase",color:C.text,background:"transparent",border:`1px solid ${C.border}`,padding:"15px 34px",cursor:"pointer",transition:"all 0.3s"}}>Get in Touch</button>
        </div>
      </div>
      <div style={{position:"absolute",bottom:40,left:"50%",transform:"translateX(-50%)",opacity:loaded?0.35:0,transition:"opacity 1.2s 1.4s"}}><div style={{width:1,height:44,background:C.textDim,position:"relative",overflow:"hidden"}}><div className="scroll-pip" style={{width:1,height:10,background:C.accent,position:"absolute"}}/></div></div>
    </section>
  );
}

// ── ABOUT ────────────────────────────────────────────────────────
function About(){return(
  <Reveal id="about" style={{padding:"120px 32px",maxWidth:900,margin:"0 auto"}}>
    <Label text="About"/><STitle>A bit about me</STitle>
    <div style={{display:"flex",justifyContent:"center",marginTop:36,marginBottom:40}}>
      <div style={{width:330,height:330,borderRadius:"50%",overflow:"hidden",border:`3px solid ${C.accent}40`,boxShadow:`0 0 60px ${C.accent}10`}}>
        <img src={SITE.headshot} alt="Chase Linzey" style={{width:"100%",height:"100%",objectFit:"cover"}} onError={e=>{e.target.parentElement.style.display="none";}}/>
      </div>
    </div>
    <blockquote style={{fontFamily:"'DM Serif Display',serif",fontSize:18,fontStyle:"italic",color:C.textMuted,lineHeight:1.7,borderLeft:`2px solid ${C.accent}40`,paddingLeft:24,marginBottom:12}}>"{SITE.about.quote}"</blockquote>
    <div style={{fontFamily:"'Jost',sans-serif",fontSize:12,fontWeight:600,letterSpacing:"0.15em",textTransform:"uppercase",color:C.accent,paddingLeft:26,marginBottom:36}}>{SITE.about.quoteAuthor}</div>
    <p style={{fontFamily:"'Jost',sans-serif",fontSize:16,fontWeight:300,color:C.textMuted,lineHeight:1.85}}>{SITE.about.bio}</p>
  </Reveal>
);}

// ── EXPERIENCE ──────────────────────────────────────────────────
function Experience(){return(
  <Reveal id="experience" style={{padding:"120px 32px",maxWidth:1000,margin:"0 auto"}}>
    <Label text="Experience"/><STitle>Where I've worked</STitle>
    <div style={{marginTop:48}}>
      {SITE.experience.map((x,i)=><div key={i} style={{borderLeft:`2px solid ${C.accent}30`,paddingLeft:28,marginBottom:44,position:"relative"}}>
        <div style={{position:"absolute",left:-5,top:7,width:8,height:8,borderRadius:"50%",background:C.accent}}/>
        <div style={{fontFamily:"'Jost',sans-serif",fontSize:11,fontWeight:600,letterSpacing:"0.15em",textTransform:"uppercase",color:C.accent,marginBottom:6}}>{x.period}</div>
        <div style={{fontFamily:"'DM Serif Display',serif",fontSize:20,color:C.text,marginBottom:4}}>{x.role}</div>
        <div style={{fontFamily:"'Jost',sans-serif",fontSize:13,color:C.textDim,marginBottom:14}}>{x.org}</div>
        <ul style={{margin:0,paddingLeft:16,listStyle:"none"}}>{x.bullets.map((b,j)=><li key={j} style={{fontFamily:"'Jost',sans-serif",fontSize:14,fontWeight:300,color:C.textMuted,lineHeight:1.75,marginBottom:6,paddingLeft:12,position:"relative"}}><span style={{position:"absolute",left:0,color:C.accent}}>·</span>{b}</li>)}</ul>
      </div>)}
    </div>
    <div style={{marginTop:24,borderTop:`1px solid ${C.border}`,paddingTop:40}}>
      <Label text="Education"/>
      <div style={{fontFamily:"'DM Serif Display',serif",fontSize:22,color:C.text,marginBottom:6}}>{SITE.education.degree}</div>
      <div style={{fontFamily:"'Jost',sans-serif",fontSize:14,color:C.textMuted,marginBottom:4}}>{SITE.education.school} — {SITE.education.gpa} — {SITE.education.year}</div>
      <div style={{fontFamily:"'Jost',sans-serif",fontSize:13,color:C.textDim,marginBottom:20}}>{SITE.education.activities}</div>
      <div style={{display:"flex",flexWrap:"wrap",gap:10}}>{SITE.education.awards.map((a,i)=><span key={i} style={{fontFamily:"'Jost',sans-serif",fontSize:12,fontWeight:500,color:C.accent,background:C.accentDim,padding:"8px 16px",letterSpacing:"0.04em"}}>{a}</span>)}</div>
    </div>
  </Reveal>
);}

// ── IMAGE CAROUSEL ──────────────────────────────────────────────
function ImageCarousel({images,title,color}){
  const[idx,setIdx]=useState(0);const[lb,setLb]=useState(null);const t=images.length;
  return(<>
    {lb!==null&&<Lightbox images={images} startIdx={lb} onClose={()=>setLb(null)}/>}
    <div style={{padding:"16px 32px"}}>
      <div style={{position:"relative",width:"100%",aspectRatio:"16/9",overflow:"hidden",border:`1px solid ${C.border}`,background:C.bg}}>
        <img src={images[idx]} alt={`${title} ${idx+1}`} onClick={e=>{e.stopPropagation();setLb(idx);}} style={{width:"100%",height:"100%",objectFit:"contain",cursor:"zoom-in",background:C.bg}} onError={e=>{e.target.style.display="none";}}/>
        {t>1&&<><button onClick={e=>{e.stopPropagation();setIdx((idx-1+t)%t);}} style={{position:"absolute",left:12,top:"50%",transform:"translateY(-50%)",width:36,height:36,borderRadius:"50%",background:"rgba(0,0,0,0.55)",border:"none",color:"#fff",fontSize:18,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}>‹</button>
        <button onClick={e=>{e.stopPropagation();setIdx((idx+1)%t);}} style={{position:"absolute",right:12,top:"50%",transform:"translateY(-50%)",width:36,height:36,borderRadius:"50%",background:"rgba(0,0,0,0.55)",border:"none",color:"#fff",fontSize:18,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}>›</button></>}
        {t>1&&<div style={{position:"absolute",bottom:12,left:"50%",transform:"translateX(-50%)",display:"flex",gap:6}}>{images.map((_,j)=><button key={j} onClick={e=>{e.stopPropagation();setIdx(j);}} style={{width:idx===j?18:6,height:6,borderRadius:3,background:idx===j?color:"rgba(255,255,255,0.4)",border:"none",cursor:"pointer",padding:0,transition:"all 0.3s"}}/>)}</div>}
        <div style={{position:"absolute",top:12,right:12,fontFamily:"'Jost',sans-serif",fontSize:11,fontWeight:500,color:"rgba(255,255,255,0.7)",background:"rgba(0,0,0,0.5)",padding:"4px 10px",letterSpacing:"0.05em"}}>{idx+1} / {t}</div>
      </div>
    </div>
  </>);
}

// ── PROJECTS ────────────────────────────────────────────────────
function Projects(){
  const[expanded,setExpanded]=useState(null);
  return(
    <Reveal id="projects" style={{padding:"120px 32px",maxWidth:1100,margin:"0 auto"}}>
      <Label text="Projects"/><STitle>Selected Design Work</STitle>
      <div style={{display:"flex",flexDirection:"column",gap:20,marginTop:48}}>
        {SITE.projects.map((p,i)=>{const isOpen=expanded===i;return(
          <div key={p.id} onClick={()=>setExpanded(isOpen?null:i)} className="project-card" style={{background:isOpen?C.surfaceHover:C.surface,border:`1px solid ${isOpen?C.borderHover:C.border}`,cursor:"pointer",transition:"all 0.4s cubic-bezier(0.16,1,0.3,1)",position:"relative",overflow:"hidden"}}>
            <div style={{position:"absolute",top:0,left:0,width:isOpen?"100%":"3px",height:isOpen?2:"100%",background:p.color,transition:"all 0.5s cubic-bezier(0.16,1,0.3,1)"}}/>
            <div style={{padding:"28px 32px",paddingBottom:isOpen?0:28}}>
              {p.highlight&&<div style={{display:"flex",justifyContent:"flex-end",marginBottom:10}}><span style={{fontFamily:"'Jost',sans-serif",fontSize:9,fontWeight:700,letterSpacing:"0.2em",textTransform:"uppercase",color:C.bg,background:p.color,padding:"4px 12px"}}>★ CAPSTONE</span></div>}
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12}}>
                <div>
                  <div style={{fontFamily:"'Jost',sans-serif",fontSize:10,fontWeight:600,letterSpacing:"0.18em",textTransform:"uppercase",color:p.color,marginBottom:6}}>{p.type}</div>
                  <div style={{fontFamily:"'DM Serif Display',serif",fontSize:22,color:C.text}}>{p.title}</div>
                </div>
                <div style={{textAlign:"right",flexShrink:0}}>
                  <div style={{fontFamily:"'Jost',sans-serif",fontSize:12,color:C.textDim,letterSpacing:"0.08em"}}>{p.location} · {p.size}</div>
                  <div style={{fontFamily:"'Jost',sans-serif",fontSize:12,color:C.textDim}}>{p.date}</div>
                </div>
              </div>
            </div>
            <div style={{maxHeight:isOpen?2000:0,opacity:isOpen?1:0,overflow:"hidden",transition:"all 0.6s cubic-bezier(0.16,1,0.3,1)"}}>
              <ImageCarousel images={p.images} title={p.title} color={p.color}/>
              <div style={{padding:"0 32px 28px"}}><p style={{fontFamily:"'Jost',sans-serif",fontSize:15,fontWeight:300,color:C.textMuted,lineHeight:1.8}}>{p.description}</p></div>
            </div>
            <div style={{fontFamily:"'Jost',sans-serif",fontSize:11,color:C.textDim,padding:"0 32px 20px",letterSpacing:"0.1em"}}>{isOpen?"— click to collapse":"— click to read more"}</div>
          </div>
        );})}
      </div>
    </Reveal>
  );
}

// ── PROCESS / IN THE FIELD ──────────────────────────────────────
function Process(){
  const[lb,setLb]=useState(null);
  return(
    <Reveal id="process" style={{padding:"120px 32px",maxWidth:1100,margin:"0 auto"}}>
      {lb!==null&&<Lightbox images={SITE.processPhotos} startIdx={lb} onClose={()=>setLb(null)}/>}
      <Label text="In the Field"/><STitle>A closer look into my process</STitle>
      <p style={{fontFamily:"'Jost',sans-serif",fontSize:15,fontWeight:300,color:C.textMuted,lineHeight:1.8,maxWidth:600,marginBottom:44}}>Site visits, presentations, model building, fieldwork, and everything in between.</p>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(250px,1fr))",gap:12}}>
        {SITE.processPhotos.map((src,i)=><div key={i} onClick={()=>setLb(i)} className="process-img" style={{aspectRatio:i%3===0?"4/5":"3/2",overflow:"hidden",cursor:"zoom-in",border:`1px solid ${C.border}`,background:C.surface,transition:"border-color 0.3s"}}>
          <img src={src} alt={`Process ${i+1}`} style={{width:"100%",height:"100%",objectFit:"cover",transition:"transform 0.5s cubic-bezier(0.16,1,0.3,1)"}} onError={e=>{e.target.parentElement.style.display="none";}}/>
        </div>)}
      </div>
    </Reveal>
  );
}

// ── SKILLS ───────────────────────────────────────────────────────
function Skills(){return(
  <Reveal id="skills" style={{padding:"120px 32px",maxWidth:900,margin:"0 auto"}}>
    <Label text="Skills"/><STitle>Tools & Capabilities</STitle>
    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:40,marginTop:48}}>
      <div><h3 style={{fontFamily:"'Jost',sans-serif",fontSize:12,fontWeight:600,letterSpacing:"0.18em",textTransform:"uppercase",color:C.accentWarm,marginBottom:20}}>Software (5+ Years)</h3><div style={{display:"flex",flexWrap:"wrap",gap:10}}>{SITE.skills.software.map((s,i)=><span key={i} className="skill-chip" style={{fontFamily:"'Jost',sans-serif",fontSize:13,fontWeight:400,color:C.textMuted,background:C.surface,border:`1px solid ${C.border}`,padding:"10px 18px",transition:"all 0.3s"}}>{s}</span>)}</div></div>
      <div><h3 style={{fontFamily:"'Jost',sans-serif",fontSize:12,fontWeight:600,letterSpacing:"0.18em",textTransform:"uppercase",color:C.accent,marginBottom:20}}>Design & Professional</h3><div style={{display:"flex",flexWrap:"wrap",gap:10}}>{SITE.skills.design.map((s,i)=><span key={i} className="skill-chip" style={{fontFamily:"'Jost',sans-serif",fontSize:13,fontWeight:400,color:C.textMuted,background:C.surface,border:`1px solid ${C.border}`,padding:"10px 18px",transition:"all 0.3s"}}>{s}</span>)}</div></div>
    </div>
    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(140px,1fr))",gap:16,marginTop:56}}>
      {[{n:"6+",l:"Projects at Kimley-Horn"},{n:"$10M+",l:"Construction Value"},{n:"112",l:"Trees Planned (Rio Rico)"},{n:"3.8 mi",l:"Road Revitalized"}].map((s,i)=><div key={i} style={{background:C.surface,border:`1px solid ${C.border}`,padding:24,textAlign:"center"}}><div style={{fontFamily:"'DM Serif Display',serif",fontSize:28,color:C.accent,marginBottom:4}}>{s.n}</div><div style={{fontFamily:"'Jost',sans-serif",fontSize:11,color:C.textDim,letterSpacing:"0.1em",textTransform:"uppercase"}}>{s.l}</div></div>)}
    </div>
  </Reveal>
);}

// ── CONTACT ─────────────────────────────────────────────────────
function Contact(){
  const[form,setForm]=useState({name:"",email:"",message:""});const[sent,setSent]=useState(false);
  const inp={fontFamily:"'Jost',sans-serif",fontSize:14,fontWeight:300,color:C.text,background:"rgba(255,255,255,0.02)",border:`1px solid ${C.border}`,padding:"15px 18px",width:"100%",boxSizing:"border-box",outline:"none",transition:"border-color 0.3s"};
  return(
    <Reveal id="contact" style={{padding:"120px 32px",maxWidth:700,margin:"0 auto"}}>
      <Label text="Contact"/><STitle>Let's connect</STitle>
      <p style={{fontFamily:"'Jost',sans-serif",fontSize:15,fontWeight:300,color:C.textMuted,lineHeight:1.8,maxWidth:500,marginBottom:44}}>I'm open to full-time positions, internships, and collaborative projects in landscape architecture, urban design, and GIS.</p>
      {sent?<div style={{background:C.accentDim,border:`1px solid ${C.accent}40`,padding:36,textAlign:"center"}}><div style={{fontFamily:"'DM Serif Display',serif",fontSize:20,color:C.accent,marginBottom:8}}>Sent!</div><div style={{fontFamily:"'Jost',sans-serif",fontSize:14,color:C.textMuted}}>Thanks for reaching out — I'll get back to you soon.</div></div>
      :<div style={{display:"flex",flexDirection:"column",gap:18}}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:18}}><input placeholder="Your Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} style={inp} className="inp"/><input placeholder="Your Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} style={inp} className="inp"/></div>
        <textarea placeholder="Your Message" rows={5} value={form.message} onChange={e=>setForm({...form,message:e.target.value})} style={{...inp,resize:"vertical"}} className="inp"/>
        <button onClick={()=>{setSent(true);setTimeout(()=>setSent(false),4000);}} className="btn-fill" style={{fontFamily:"'Jost',sans-serif",fontSize:13,fontWeight:500,letterSpacing:"0.1em",textTransform:"uppercase",color:C.bg,background:C.accent,border:"none",padding:"15px 36px",cursor:"pointer",alignSelf:"flex-start",transition:"all 0.3s"}}>Send Message</button>
      </div>}
      <div style={{marginTop:56,display:"flex",gap:48,flexWrap:"wrap",borderTop:`1px solid ${C.border}`,paddingTop:36}}>
        {[{label:"Email",value:SITE.contact.email,href:`mailto:${SITE.contact.email}`},{label:"Phone",value:SITE.contact.phone},{label:"LinkedIn",value:"linkedin.com/in/chaseplinzey",href:SITE.contact.linkedin}].map((c,i)=><div key={i}><div style={{fontFamily:"'Jost',sans-serif",fontSize:10,fontWeight:600,letterSpacing:"0.18em",textTransform:"uppercase",color:C.textDim,marginBottom:6}}>{c.label}</div>{c.href?<a href={c.href} target="_blank" rel="noopener noreferrer" style={{fontFamily:"'Jost',sans-serif",fontSize:14,color:C.accent,textDecoration:"none"}}>{c.value}</a>:<div style={{fontFamily:"'Jost',sans-serif",fontSize:14,color:C.textMuted}}>{c.value}</div>}</div>)}
      </div>
    </Reveal>
  );
}

function Footer(){return<footer style={{padding:"36px 32px",borderTop:`1px solid ${C.border}`,textAlign:"center"}}><div style={{fontFamily:"'Jost',sans-serif",fontSize:12,color:C.textDim,letterSpacing:"0.06em"}}>© {new Date().getFullYear()} Chase Linzey — Landscape Architecture</div></footer>;}

// ── APP ─────────────────────────────────────────────────────────
export default function App(){
  const[active,setActive]=useState("home");
  const scrollTo=id=>document.getElementById(id)?.scrollIntoView({behavior:"smooth"});
  useEffect(()=>{
    const ids=["home","about","experience","projects","process","skills","contact"];
    const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)setActive(e.target.id);}),{threshold:0.25});
    ids.forEach(id=>{const el=document.getElementById(id);if(el)obs.observe(el);});
    return()=>obs.disconnect();
  },[]);
  return(<>
    <style>{`
      @import url('${FONT_URL}');
      *,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
      body{background:${C.bg};color:${C.text};overflow-x:hidden;-webkit-font-smoothing:antialiased}
      ::selection{background:${C.accent}33;color:${C.text}}
      .btn-fill:hover{filter:brightness(1.15);transform:translateY(-1px);box-shadow:0 6px 24px ${C.accent}22}
      .btn-ghost:hover{border-color:${C.accent}60 !important;color:${C.accent} !important}
      .skill-chip:hover{border-color:${C.accent}50 !important;color:${C.accent} !important;background:${C.accentDim} !important}
      .project-card:hover{border-color:${C.borderHover} !important}
      .process-img:hover{border-color:${C.accent}40 !important}
      .process-img:hover img{transform:scale(1.05)}
      .inp:focus{border-color:${C.accent}70 !important}
      .scroll-pip{animation:scrollAnim 2.2s ease-in-out infinite}
      @keyframes scrollAnim{0%{top:0;opacity:0}20%{opacity:1}80%{opacity:1}100%{top:34px;opacity:0}}
      .orb-a{animation:floatA 14s ease-in-out infinite}.orb-b{animation:floatB 18s ease-in-out infinite}
      @keyframes floatA{0%,100%{transform:translate(0,0)}50%{transform:translate(-30px,20px)}}
      @keyframes floatB{0%,100%{transform:translate(0,0)}50%{transform:translate(20px,-30px)}}
      @media(max-width:768px){.desk-nav{display:none !important}.mob-btn{display:block !important}}
      @media(min-width:769px){.mob-btn{display:none !important}}
      ::-webkit-scrollbar{width:5px}::-webkit-scrollbar-track{background:${C.bg}}::-webkit-scrollbar-thumb{background:${C.accent}30;border-radius:3px}::-webkit-scrollbar-thumb:hover{background:${C.accent}50}
    `}</style>
    <Nav active={active} scrollTo={scrollTo}/>
    <Hero scrollTo={scrollTo}/>
    <About/>
    <Experience/>
    <Projects/>
    <Process/>
    <Skills/>
    <Contact/>
    <Footer/>
  </>);
}
