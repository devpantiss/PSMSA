import{j as e}from"./vendor-three-pDo7wFfb.js";const x=({logos:t,heading:r,height:s="h-20",speed:n="20s",gap:i="mx-6",bg:l="bg-black/90",className:m=""})=>e.jsxs("div",{className:`w-full overflow-hidden ${l} ${m}`,children:[r&&e.jsxs("div",{className:"text-center py-6",children:[e.jsx("h2",{className:"text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:r}),e.jsx("span",{className:"block mt-2 h-1 w-24 mx-auto bg-gradient-to-r from-green-500 to-purple-500 rounded-full"})]}),e.jsx("div",{className:"marquee flex items-center whitespace-nowrap",style:{animation:`marquee ${n} linear infinite`},children:[...t,...t].map((a,c)=>e.jsx("img",{src:a.src,alt:a.name,className:`inline-block ${s} w-auto object-contain ${i}`,loading:"lazy"},`${a.name}-${c}`))}),e.jsx("style",{children:`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee {
            animation: none;
          }
        }
      `})]});export{x as L};
