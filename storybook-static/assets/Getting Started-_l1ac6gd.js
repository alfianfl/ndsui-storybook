import{j as e}from"./jsx-runtime-AgcCsxC8.js";import{G as o,D as r,Y as l,T as d}from"./tutorials-fEZxob9P.js";import{useMDXComponents as s}from"./index-7MmEg4M7.js";import"./index-XiNr8FW2.js";import"./_commonjsHelpers-5-cIlDoe.js";const i=()=>{const a=Object.assign({svg:"svg",path:"path"},s());return e.jsx(a.svg,{viewBox:"0 0 14 14",width:"8px",height:"14px",style:{marginLeft:"4px",display:"inline-block",shapeRendering:"inherit",verticalAlign:"middle",fill:"currentColor","path fill":"currentColor"},children:e.jsx(a.path,{d:"m11.1 7.35-5.5 5.5a.5.5 0 0 1-.7-.7L10.04 7 4.9 1.85a.5.5 0 1 1 .7-.7l5.5 5.5c.2.2.2.5 0 .7Z"})})};function t(a){const n=Object.assign({h1:"h1",p:"p",ol:"ol",li:"li",a:"a",h2:"h2",ul:"ul",hr:"hr",h3:"h3",strong:"strong",code:"code"},s(),a.components);return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"getting-started",children:"Getting Started"}),`
`,e.jsx(n.p,{children:"Di bawah ini, Anda dapat menjelajahi panduan untuk mengonfigurasi NDS UI Kit dan Storybook kedalam project anda. Jika Anda mengalami kesulitan, pelajari cara Anda dapat meminta bantuan dari team kami."}),`
`,e.jsx(n.h1,{id:"catatan-penting",children:"Catatan Penting"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["NDS UI Kit dikembangkan menggunakan framework ",e.jsx(n.a,{href:"https://tailwindcss.com/",target:"_blank",rel:"nofollow noopener noreferrer",children:"tailwindcss"}),", jika dokumentasi yang kami berikan kurang lengkap anda dapat melihat secara lebih lengkap di website resmi tailwind."]}),`
`,e.jsxs(n.li,{children:["Sebelum memulai pastikan sudah menginstall ",e.jsx(n.a,{href:"https://nodejs.org/en",target:"_blank",rel:"nofollow noopener noreferrer",children:"nodejs"})," versi 14 < 18 di perangkat anda."]}),`
`]}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"#design-resources",children:"Design Resources"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#figma",children:"Figma"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"#development-resources",children:"How To Install"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#how-to-install-nds-ui-kit",children:"Install NDS UI Kit"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#version-control",children:"Install and run StoryBook to Your Project"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#development-tools",children:"Development Tools"})}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"design-resources",children:"Design Resources"}),`
`,e.jsx(n.h3,{id:"figma",children:"Figma"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://www.figma.com/file/9w65bQc9wz2BZXn8jOSug8/NDS-Components?type=design&node-id=0-1&mode=design",target:"_blank",rel:"nofollow noopener noreferrer",children:"Figma"})," is a collaborative design and prototyping tool. It's the heart of the design process, allowing designers to work together seamlessly."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Get Access"}),": If you're not already part of the Figma project, request access from the project lead or manager."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"how-to-install",children:"How To Install"}),`
`,e.jsx(n.h3,{id:"how-to-install-nds-ui-kit",children:"How To Install NDS UI Kit"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Install NDS UI Kit ke dalam project anda menggunakan ",e.jsx(n.code,{children:"npm install nds-ui-base-storybook@latest"}),". Pastikan untuk selalu menggunakan versi terbaru dari package nds-ui-base-storybook."]}),`
`,e.jsxs(n.li,{children:["Import CSS di global file project anda ",e.jsx(n.code,{children:'import "nds-base-ui-storybook/dist/style.css"'}),". Pastikan untuk selalu mengimport css di global agar seluruh file project dapat terintegrasi dengan NDS UI Kit."]}),`
`]}),`
`,e.jsx(n.h3,{id:"how-to-run-and-install-storybook",children:"How To Run and Install StoryBook"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Clone repository ",e.jsx(n.a,{href:"https://bitbucket.bri.co.id/scm/nds/nds-ui-base-storybook.git",target:"_blank",rel:"nofollow noopener noreferrer",children:"NDS UI Kit"}),". lalu lakukan ",e.jsx(n.code,{children:"npm install"})," pada project untuk menginstall dependencies yang diperlukan."]}),`
`,e.jsxs(n.li,{children:["Run aplikasi menggunakan ",e.jsx(n.code,{children:"npm run storybook"})," Jika belum mempunyai storybook install menggunakan ",e.jsx(n.code,{children:"npx storybook@latest init"})," pada project anda."]}),`
`]}),`
`,e.jsx(n.h3,{id:"development-tools",children:"Development Tools"}),`
`,e.jsx(n.p,{children:"Environment pengembangan Anda sangat penting. Berikut adalah beberapa alat dan sumber daya untuk membantu Anda menyiapkan ruang kerja Anda:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Code Editor"}),": Kami sangat menyarankan menggunakan ",e.jsx(n.a,{href:"https://code.visualstudio.com/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Visual Studio Code"})," untuk development. Dapat disesuaikan secara tinggi dan mendukung berbagai ekstensi."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Package Manager"}),": ",e.jsx(n.a,{href:"https://www.npmjs.com/",target:"_blank",rel:"nofollow noopener noreferrer",children:"npm"})," adalah manajer paket yang kami gunakan untuk proyek JavaScript. Pasanglah untuk mengelola dependensi proyek."]}),`
`]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs("div",{className:"sb-section sb-socials",children:[e.jsxs("div",{className:"sb-section-item",children:[e.jsx("img",{src:o,alt:"Github logo",className:"sb-explore-image"}),e.jsx(n.p,{children:"Join our contributors building the future of UI development."}),e.jsxs("a",{href:"https://github.com/storybookjs/storybook",target:"_blank",children:["Star on GitHub",e.jsx(i,{})]})]}),e.jsxs("div",{className:"sb-section-item",children:[e.jsx("img",{src:r,alt:"Discord logo",className:"sb-explore-image"}),e.jsxs("div",{children:[e.jsx(n.p,{children:"Get support and chat with frontend developers."}),e.jsxs("a",{href:"https://discord.gg/storybook",target:"_blank",children:["Join Discord server",e.jsx(i,{})]})]})]}),e.jsxs("div",{className:"sb-section-item",children:[e.jsx("img",{src:l,alt:"Youtube logo",className:"sb-explore-image"}),e.jsxs("div",{children:[e.jsx(n.p,{children:"Watch tutorials, feature previews and interviews."}),e.jsxs("a",{href:"https://www.youtube.com/@chromaticui",target:"_blank",children:["Watch on YouTube",e.jsx(i,{})]})]})]}),e.jsxs("div",{className:"sb-section-item",children:[e.jsx("img",{src:d,alt:"A book",className:"sb-explore-image"}),e.jsx("p",{children:"Follow guided walkthroughs on for key workflows."}),e.jsxs("a",{href:"https://storybook.js.org/tutorials/",target:"_blank",children:["Discover tutorials",e.jsx(i,{})]})]})]}),`
`,e.jsx("style",{children:`
  .sb-container {
    margin-bottom: 48px;
  }

  .sb-section {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 20px;
  }

  .icon {
  font-size: 40px;
  padding: 20px;
  background-color: #42b983;
  color: #fff;
}

.content {
  padding: 20px;
}

h2 {
  margin-top: 0;
  color: #333;
}

ol {
  list-style-type: decimal;
  padding-left: 20px;
}

code {
  background-color: #f0f0f0;
  padding: 2px 4px;
  border-radius: 4px;
}

  .installation-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-width: 400px;
  width: 100%;
  text-align: left;
}

  img {
    object-fit: cover;
  }

  .sb-section-title {
    margin-bottom: 32px;
  }

  .sb-section a:not(h1 a, h2 a, h3 a) {
    font-size: 14px;
  }

  .sb-section-item, .sb-grid-item {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .sb-section-item-heading {
    padding-top: 20px !important;
    padding-bottom: 5px !important;
    margin: 0 !important;
  }
  .sb-section-item-paragraph {
    margin: 0;
    padding-bottom: 10px;
  }

  .sb-chevron {
    margin-left: 5px;
  }

  .sb-features-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 32px 20px;
  }

  .sb-socials {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  .sb-socials p {
    margin-bottom: 10px;
  }

  .sb-explore-image {
    max-height: 32px;
    align-self: flex-start;
  }

  .sb-addon {
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    background-color: #EEF3F8;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.05);
    background: #EEF3F8;
    height: 180px;
    margin-bottom: 48px;
    overflow: hidden;
  }

  .sb-addon-text {
    padding-left: 48px;
    max-width: 240px;
  }

  .sb-addon-text h4 {
    padding-top: 0px;
  }

  .sb-addon-img {
    position: absolute;
    left: 345px;
    top: 0;
    height: 100%;
    width: 200%;
    overflow: hidden;
  }

  .sb-addon-img img {
    width: 650px;
    transform: rotate(-15deg);
    margin-left: 40px;
    margin-top: -72px;
    box-shadow: 0 0 1px rgba(255, 255, 255, 0);
    backface-visibility: hidden;
  }

  @media screen and (max-width: 800px) {
    .sb-addon-img {
      left: 300px;
    }
  }

  @media screen and (max-width: 600px) {
    .sb-section {
      flex-direction: column;
    }

    .sb-features-grid {
      grid-template-columns: repeat(1, 1fr);
    }

    .sb-socials {
      grid-template-columns: repeat(2, 1fr);
    }

    .sb-addon {
      height: 280px;
      align-items: flex-start;
      padding-top: 32px;
      overflow: hidden;
    }

    .sb-addon-text {
      padding-left: 24px;
    }

    .sb-addon-img {
      right: 0;
      left: 0;
      top: 130px;
      bottom: 0;
      overflow: hidden;
      height: auto;
      width: 124%;
    }

    .sb-addon-img img {
      width: 1200px;
      transform: rotate(-12deg);
      margin-left: 0;
      margin-top: 48px;
      margin-bottom: -40px;
      margin-left: -24px;
    }
  }
  `})]})}function x(a={}){const{wrapper:n}=Object.assign({},s(),a.components);return n?e.jsx(n,Object.assign({},a,{children:e.jsx(t,a)})):t(a)}export{i as RightArrow,x as default};
