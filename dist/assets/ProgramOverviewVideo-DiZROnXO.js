import{r as t,j as e}from"./vendor-three-pDo7wFfb.js";import{B as m}from"./building-2-EDVNqOtZ.js";import{c as u}from"./createLucideIcon-BtYyqhTl.js";import{T as v}from"./trending-up-BHBF_JWs.js";import{C as y}from"./circle-check-big-_W1MgV_6.js";import{U as j}from"./users-QQkUHEHh.js";import{M as N}from"./map-pin-GsXfIMU3.js";/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],h=u("briefcase",w);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=[["path",{d:"M6 3h12",key:"ggurg9"}],["path",{d:"M6 8h12",key:"6g4wlu"}],["path",{d:"m6 13 8.5 8",key:"u1kupk"}],["path",{d:"M6 13h3",key:"wdp6ag"}],["path",{d:"M9 13c6.667 0 6.667-10 0-10",key:"1nkvk2"}]],g=u("indian-rupee",k),P=[{name:"Rahul Kumar",role:"Junior Mechanical Technician",company:"Larsen & Toubro (L&T)",package:"₹3.6 LPA",image:"https://res.cloudinary.com/dxzhnns58/image/upload/v1762163909/student-5_duxroz.jpg"},{name:"Sunita Devi",role:"Electrical Maintenance Technician",company:"Tata Power",package:"₹3.2 LPA",image:"https://res.cloudinary.com/dxzhnns58/image/upload/v1762163947/student-6_ls3cpe.jpg"}],S=[{title:"University-Led Placement Model",description:"A structured ecosystem integrating industry partnerships, apprenticeships, and on-the-job training pathways.",icon:h},{title:"Industry & Sector Partnerships",description:"Engagement with manufacturing, infrastructure, energy, logistics, and EPC sectors for workforce deployment.",icon:m},{title:"Career Continuity & Progression",description:"Focus on sustainable employability through certification, skill depth, and real-world exposure.",icon:v}],p=[{label:"Placement / Apprenticeship Rate",value:"70–85%",icon:y},{label:"Female Candidates Placed",value:"38%",icon:j},{label:"Average Package",value:"₹3.2 LPA",icon:g},{label:"Active Hiring Partners",value:"100+",icon:m},{label:"Top Job Roles",rotatingValues:["Technicians","Operators","Supervisors"],icon:h},{label:"Placement Coverage",rotatingValues:["Local","Regional","National"],icon:N}],x=({stat:a,delay:s})=>{const n=a.icon,[i,d]=t.useState(0),r=t.useRef(null),[l,b]=t.useState(!1);return t.useEffect(()=>{const c=r.current;if(!c)return;const o=new IntersectionObserver(([f])=>b(f.isIntersecting),{threshold:.3});return o.observe(c),()=>o.disconnect()},[]),t.useEffect(()=>{if(!a.rotatingValues||!l)return;const c=setInterval(()=>{d(o=>(o+1)%a.rotatingValues.length)},1800);return()=>clearInterval(c)},[a.rotatingValues,l]),e.jsxs("div",{ref:r,className:`
        bg-neutral-900
        border border-neutral-800
        rounded-2xl
        p-8
        min-h-[180px]
        flex
        flex-col
        justify-center
        items-center
        text-center
      `,children:[e.jsx(n,{className:"w-6 h-6 text-green-500 mb-3"}),e.jsx("div",{className:"text-3xl font-semibold mb-2 h-[40px] flex items-center justify-center",children:a.value?a.value:e.jsx("span",{className:"animate-fadeUp",children:a.rotatingValues[i]},i)}),e.jsx("div",{className:"text-sm text-gray-300 opacity-0",style:{animation:"fadeUp 600ms ease forwards",animationDelay:`${s}ms`},children:a.label})]})},I=()=>e.jsxs("section",{className:"bg-black px-4 text-white",children:[e.jsxs("div",{className:"max-w-7xl mx-auto space-y-24",children:[e.jsxs("div",{className:"max-w-4xl mx-auto text-center",children:[e.jsx("h2",{className:"text-4xl lg:text-5xl font-semibold tracking-tight",children:"Placements & Career Outcomes"}),e.jsx("p",{className:"mt-4 text-gray-300 leading-relaxed",children:"A structured university-led placement framework translating skill education into sustainable employment outcomes."})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch",children:[e.jsx("div",{className:"space-y-8",children:p.slice(0,3).map((a,s)=>e.jsx(x,{stat:a,delay:s*200},s))}),e.jsx("div",{className:"space-y-6",children:S.map((a,s)=>{const n=a.icon;return e.jsxs("div",{className:"bg-neutral-900 border border-neutral-800 rounded-2xl p-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx(n,{className:"w-5 h-5 text-green-500"}),e.jsx("h3",{className:"text-lg font-semibold",children:a.title})]}),e.jsx("p",{className:"text-sm text-gray-300 leading-relaxed",children:a.description})]},s)})}),e.jsx("div",{className:"space-y-8",children:p.slice(3).map((a,s)=>e.jsx(x,{stat:a,delay:(s+3)*200},s))})]}),e.jsxs("div",{className:"space-y-12",children:[e.jsx("h3",{className:"text-2xl font-semibold text-center",children:"Select Placement Achievers"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-10",children:P.map((a,s)=>e.jsxs("div",{className:`
          relative
          bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-800
          border border-neutral-800
          rounded-3xl
          p-8
          transition-all duration-300
          hover:-translate-y-1
          hover:shadow-xl hover:shadow-black/40
        `,children:[e.jsx("span",{className:`
          absolute top-5 right-5
          text-xs font-semibold
          px-3 py-1 rounded-full
          bg-green-500/10 text-green-400
          border border-green-500/20
        `,children:"Top Achiever"}),e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsxs("div",{className:"relative",children:[e.jsx("img",{src:a.image,alt:a.name,className:`
                w-24 h-24
                object-cover
                rounded-full
                border-2 border-green-500/40
              `}),e.jsx("div",{className:`
              absolute inset-0 rounded-full
              ring-2 ring-green-500/20
            `})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h4",{className:"text-lg font-semibold tracking-tight",children:a.name}),e.jsx("p",{className:"text-sm text-gray-400 mb-4",children:a.role}),e.jsxs("div",{className:"space-y-2 text-sm",children:[e.jsxs("div",{className:"flex items-center gap-2 text-gray-300",children:[e.jsx(m,{className:"w-4 h-4 text-green-500"}),a.company]}),e.jsxs("div",{className:"flex items-center gap-2 font-medium text-white",children:[e.jsx(g,{className:"w-4 h-4 text-green-500"}),a.package]})]})]})]})]},s))})]}),e.jsx("p",{className:"text-xs text-gray-400 max-w-5xl mx-auto text-center leading-relaxed",children:"* Placement outcomes vary by program, trade, location, and individual performance. The university facilitates placements, apprenticeships, and employer linkages in line with applicable government and industry frameworks."})]}),e.jsx("style",{children:`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeUp {
          animation: fadeUp 500ms ease;
        }
      `})]}),E=t.memo(I),L=({videoId:a})=>{const s=t.useRef(null),[n,i]=t.useState(!1);t.useEffect(()=>{const r=new IntersectionObserver(([l])=>{i(l.isIntersecting)},{threshold:.5});return s.current&&r.observe(s.current),()=>r.disconnect()},[]);const d=`https://www.youtube.com/embed/${a}?autoplay=${n?1:0}&mute=1&loop=1&controls=0&modestbranding=1&rel=0&playsinline=1&playlist=${a}`;return e.jsxs("section",{ref:s,className:"relative w-full min-h-screen bg-black overflow-hidden",children:[e.jsx("iframe",{src:d,title:"Program Overview Video",className:"absolute inset-0 w-full h-full",frameBorder:"0",allow:"autoplay; encrypted-media; picture-in-picture",allowFullScreen:!0}),e.jsx("div",{className:"absolute inset-0 bg-black/40"}),e.jsx("div",{className:`
          absolute top-6 left-6 z-20
          bg-black/70 backdrop-blur-md
          border border-neutral-700
          px-5 py-3 rounded-xl
        `,children:e.jsx("span",{className:"text-sm font-semibold tracking-wide text-white",children:"Program Overview"})})]})};export{h as B,L as P,E as a};
