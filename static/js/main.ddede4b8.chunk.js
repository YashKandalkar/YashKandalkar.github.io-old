(this["webpackJsonpgithub-pages"]=this["webpackJsonpgithub-pages"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(10),r=a.n(o),s=(a(16),a(17),a(1)),l=function(){var e={visible:{opacity:1,y:0,transition:{duration:.5}},hidden:{opacity:1,y:"200px"}};return i.a.createElement("div",{id:"main"},i.a.createElement(s.a.div,{id:"main-content"},i.a.createElement(s.a.div,{className:"top",initial:"hidden",animate:"visible",variants:e},i.a.createElement(s.a.div,{className:"greetings"},"About ME")),i.a.createElement(s.a.div,{className:"about-me",initial:"hidden",animate:"visible",variants:e},i.a.createElement("div",{style:{textAlign:"right"}},"Hey, hello there!"),i.a.createElement("div",null,"I am Yash Kandalkar. I started coding when I was 16. I started out with Python since it is very easy to learn for a beginner and also teaches many programming principles. I started solving simple problems in Python and learning about different data structures and algorithms. I was learning on ",i.a.createElement("a",{href:"https://www.sololearn.com",target:"_blank",rel:"noopener noreferrer"},"SoloLearn")," and doing their challenges, it was a lot of fun! With this new found knowledge, I took part in CoDecode - A coding competition organised by IIT Bombay, one of the best institutes in India. I was sure I would atleast qualify in the qualification round. When I entered the examination room, most of the participants were from 3rd, 4th year. Neverthless, I gave the exam, and waited for the results. I did not qualify. I wasn't too sad though. I thought this was my first competition, and I had a lot to learn. During this time, I was in 12th. The decisive year for Indian students. I was already in an integrated class for JEE preparation. I still think I shouldn't have joined that class. But going to that class for 2 years made me realize that colleges really doesn't matter all that much. Everything depends on your skills. But in our society, everybody - especially parents, think that if their child is in IIT, he will definetely get a good job, and his future will definetely flourish. While that is obviously true for some children, it is definetely not true for everyone. Even if you are not in the best college, you can still get the best job if you have the right skills. So I started giving less time to studying and more time towards learning new things about programming. I even started learning about IoT after seeing a friend of mine making cool things. I just started learning anything that looked interesting to me. So after some time I started learning Web Development. I made many projects (which are still not completed because of my lazy a$$). I recently completed ",i.a.createElement("a",{href:"https://www.udemy.com/share/101WcUBUUScFZTQ3o=/",target:"_blank",rel:"noopener noreferrer"},"this")," course from Udemy, which had a lot of knowledge about the new technologies which companies use. I could only make this website because of that course. ",i.a.createElement("br",null),'Apart from spending most of my time learning new things, I also watch some anime or play video games when I have time. I had a long "PUBG Phase" too :P ',i.a.createElement("br",null),"So, that's all about me. One last thing I'd like to tell students of 11th or 12th or even FY is that don't wait for your college / school to teach you something. Learn things on your own but don't completely drop out of schools or colleges since that is important too. The internet already has everything you need. Search the thing you're interested in and start learning. ",i.a.createElement("br",null),"I always copy-paste this quote whenever I have a chance-",i.a.createElement("span",{className:"quote"},"Don\u2019t let schooling interfere with your education.",i.a.createElement("br",null)," - Mark Twain")))))},c=a(3),h=(a(18),a(19),a(20),{visible:{opacity:1,x:0,display:"block"},hidden:{opacity:0,x:50,display:"none"}}),m=function(e){var t=e.variant,a=e.name,o=e.description,r=e.img,l=e.url,m=Object(n.useState)({open:!1,style:{}}),d=Object(c.a)(m,2),u=d[0],g=d[1],p=i.a.createRef();return i.a.createElement(s.a.div,{className:"project-item",variants:t,style:u.style,onClick:function(){u.open?(p.current.style.whiteSpace="nowrap",g({style:{height:"0px"}})):(p.current.style.whiteSpace="initial",g({style:{height:"120px"}})),g({open:!u.open})}},i.a.createElement(s.a.div,{className:"preview"},i.a.createElement("img",{src:r,alt:"preview"})),i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"title"},a),i.a.createElement("div",{className:"description",ref:p},o),i.a.createElement(s.a.a,{className:"go-to-website",variants:h,animate:u.open?"visible":"hidden",href:l,target:"_blank",rel:"noopener noreferrer"},"Go to website")))},d=function(e){var t=e.isOpen,a={visible:{opacity:1,x:0},hidden:{opacity:0,x:100}};return i.a.createElement("div",{id:"container"},i.a.createElement("div",{id:"heading"},"My Projects"),i.a.createElement(s.a.div,{initial:"hidden",animate:t?"visible":"hidden",variants:{visible:{opacity:1,transition:{when:"beforeChildren",staggerChildren:.2}},hidden:{opacity:0,transition:{when:"afterChildren"}}},id:"project-items-container"},i.a.createElement(m,{name:"Collabora",description:"A site to (Collabora)tively solve online MCQs!",variant:a,img:"/assets/collabora.webp",url:"https://github.com/YashKandalkar/Collabora"}),i.a.createElement(m,{name:"Track Your Day",description:"A website to keep a track on your daily activities",variant:a,img:"/assets/track-your-day.webp",url:"https://YashKandalkar.github.io/track-your-day"}),i.a.createElement(m,{name:"Canary",description:"A prototype site for streaming music",variant:a,img:"/assets/canary.webp",url:"https://YashKandalkar.github.io/canary"}),i.a.createElement(m,{name:"Chat It Dude",description:"What's better than talking to someone who won't judge you?",variant:a,img:"/assets/chatitdude.webp",url:"http://chat-it-dude.herokuapp.com/"}),i.a.createElement(m,{name:"Tachyons",description:"A hackathon project made to help illiterate people study financial policies",variant:a,img:"/assets/tachyons.webp",url:"https://YashKandalkar.github.io/tachyons"})))};function u(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}function g(){var e=Object(n.useState)(u()),t=Object(c.a)(e,2),a=t[0],i=t[1];return Object(n.useEffect)((function(){function e(){i(u())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),a}var p=a(4),f=a(5),b=function(e){e.activeTab;var t=g().width,a=Object(n.useState)({open:!1}),o=Object(c.a)(a,2),r=o[0],l=o[1],h=t<=480?{left:0,right:t-30}:{left:.5*t-30,right:t-30},m={x:[h.right,h.right-30,h.right]},u=Object(s.b)(h.right),b=Object(s.c)(u,[h.left,h.right],[1,0]),y=Object(s.c)(u,[h.left,h.right],[180,0]);Object(n.useEffect)((function(){var e=u.onChange((function(){u.get()<=h.left?l({open:!0}):l({open:!1})}));return function(){e()}}),[h.left,u]);return i.a.createElement("div",{className:"right-tab"},i.a.createElement(s.a.div,{className:"right-tab-arrow",animate:m,transition:{ease:"easeOut",duration:.7,delay:1},style:{x:u},drag:"x",dragConstraints:h,dragElastic:.2,dragTransition:{bounceStiffness:600,bounceDamping:30},dragMomentum:!0,onTap:function(e,t){u.current===h.right?(u.set(h.left),l({open:!0})):u.current===h.left&&(u.set(h.right),l({open:!1}))},onDrag:function(e,t){u.current<=h.left+40?l({open:!0}):l({open:!1})}},i.a.createElement(s.a.div,{style:{transform:"rotate("+y.current+"deg)"}},i.a.createElement(p.a,{icon:f.a}))),i.a.createElement(s.a.div,{className:"right-tab-content",style:{opacity:b,x:u}},i.a.createElement(d,{isOpen:r.open})))},y=(a(26),a(27),a(28),function(e){var t=e.icon,a=e.useclass,n=e.usehref;return i.a.createElement(s.a.div,{whileHover:{scale:1.1},whileTap:{scale:.95}},i.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},i.a.createElement(p.a,{icon:t,size:"6x",className:a})))}),v=a(6),w=a(11),E=function(){return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"heading"},i.a.createElement("div",{className:"main"},"Let's chat!"),i.a.createElement("div",{className:"sub-heading"},"Contact me on any of my social media")),i.a.createElement(s.a.div,{id:"content"},i.a.createElement(y,{icon:v.b,useclass:"instagram",usehref:"https://www.instagram.com/yash__kandalkar/"}),i.a.createElement(y,{icon:v.a,useclass:"github",usehref:"https://github.com/YashKandalkar/"}),i.a.createElement(y,{icon:v.c,useclass:"linkedin",usehref:"https://www.linkedin.com/in/yash-kandalkar-b5890b1aa/"}),i.a.createElement(y,{icon:w.a,useclass:"gmail",usehref:"mailto:yashsk.yk@gmail.com"})))},k=function(e){e.activeTab;var t=g(),a=t.height,o=t.width,r=Object(n.useState)({open:!1}),l=Object(c.a)(r,2),h=(l[0],l[1]),m=o<=480?{top:0,bottom:a-30}:{top:.5*a-30,bottom:a-30},d={y:[m.bottom,m.bottom-30,m.bottom]},u=Object(s.b)(m.bottom),b=Object(s.c)(u,[m.top,m.bottom],[1,0]),y=Object(s.c)(u,[m.top,m.bottom],[180,0]);Object(n.useEffect)((function(){var e=u.onChange((function(){u.get()<=m.top?h({open:!0}):h({open:!1})}));return function(){e()}}),[m.top,u]);return i.a.createElement("div",{className:"bottom-tab"},i.a.createElement(s.a.div,{className:"bottom-tab-arrow",animate:d,transition:{ease:"easeOut",duration:.7,delay:2},style:{y:u},drag:"y",dragConstraints:m,dragElastic:.2,dragTransition:{bounceStiffness:600,bounceDamping:30},onTap:function(e,t){u.get()>=m.bottom-20?(u.set(m.top),h({open:!0})):u.get()<=m.top+20&&(u.set(m.bottom),h({open:!1}))}},i.a.createElement(s.a.div,{style:{transform:"rotate("+y.get()+"deg)"}},i.a.createElement(p.a,{icon:f.b}))),i.a.createElement(s.a.div,{className:"bottom-tab-content",style:{opacity:b,y:u}},i.a.createElement(E,null)))},I=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(l,null),i.a.createElement(b,null),i.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[29,1,2]]]);
//# sourceMappingURL=main.ddede4b8.chunk.js.map