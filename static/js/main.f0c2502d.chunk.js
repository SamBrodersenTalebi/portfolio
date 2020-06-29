(this["webpackJsonpsam-port"]=this["webpackJsonpsam-port"]||[]).push([[0],{29:function(e,t,a){e.exports=a(96)},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){},96:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(10),o=a.n(i),s=(a(34),a(3)),l=a(4),c=a(6),m=a(5),u=a(7),d=(a(35),a(36),function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=0,t=["Home","Skills","Portfolio","About me"].map((function(t){return r.a.createElement("a",{href:"#"+t,key:e++},t)}));return r.a.createElement("div",{className:"bg-color"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"topnav"},t)))}}]),t}(n.Component)),p=(a(37),function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:"header",id:"Home"},r.a.createElement("h1",null,"Hi, I'm ",r.a.createElement("span",{className:"name"}," Sam Brodersen"),"."),r.a.createElement("p",null," ","Web developer passionate about building web apps. ",r.a.createElement("br",null)," Mainly use the MERN stack, but proficient with Python/Django as well."),r.a.createElement("a",{href:"#Portfolio"},"Portfolio"))}}]),t}(n.Component)),h=(a(38),a(39),function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e={width:this.props.skills.level};return r.a.createElement("li",{className:"list-skill"},r.a.createElement("h5",null,this.props.skills.language," "),r.a.createElement("span",{className:" container-skill  bar"},r.a.createElement("span",{className:"skills",style:e})))}}]),t}(n.Component)),b=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={data:[{language:"JavaScript/HTML/CSS",level:"80%"},{language:"AWS",level:"40%"},{language:"Git",level:"70%"},{language:"Python/Django",level:"40%"},{language:"ExpressJS/GraphQL",level:"60%"},{language:"MongoDB/PostgreSQL",level:"45%"},{language:"React/Redux",level:"80%"},{language:"Jest/Cypress",level:"30%"}]},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=0,t=this.state.data.map((function(t){return r.a.createElement(h,{skills:t,key:e++})}));return r.a.createElement("div",{className:"skills",id:"Skills"},r.a.createElement("h2",{className:"title"},"Skills"),r.a.createElement("div",{className:"skillList"},t))}}]),t}(n.Component),g=(a(40),function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"About me"},r.a.createElement("h2",{className:"title about-me"}," About me "),r.a.createElement("div",{className:"flex-container"},r.a.createElement("div",{className:"text"},r.a.createElement("h3",null,"Udacity"),r.a.createElement("p",null,'I firstly started coding at Udacity where I enrolled the course "Introduction to Programming". I learned the basics of programming through HTML, CSS and Python.')),r.a.createElement("div",{className:"text"},r.a.createElement("h3",null,"Codecademy"),r.a.createElement("p",null," ",'After finishing the course at Udacity I took two courses at Codecademy. The first course was "Build Websites from Scracth" where I learned to design and build responsive websites using CSS and HTML. The second course was "Build Front-End Web Applications from Scracth" using ReactJS and JavaScript.'," ")),r.a.createElement("div",{className:"text"},r.a.createElement("h3",null,"OpenClassrooms"),r.a.createElement("p",null,"I studied Front-End Development at OpenClassrooms for 1 year. The path is completed online with the help of a mentor who guides you through the projects. Each project consists of context details and customer requirements. In doing the projects I have improved my innovative ability as you have to come up with creative solutions to the requirement of the project."))))}}]),t}(n.Component)),f=(a(41),a(8)),v=(a(92),function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(f.Card,{shadow:5,style:{minWidth:"450",margin:"auto"},className:"card"},r.a.createElement(f.CardTitle,{id:this.props.object.id,style:{height:"176px"},className:"card-title"},r.a.createElement("a",{target:"_blank",href:this.props.object.link,id:"link"})),r.a.createElement(f.CardText,{style:{height:"150px",margin:"auto"}},r.a.createElement("h4",{style:{color:"#387db1",marginTop:"0px"}},this.props.object.projectname),this.props.object.description),r.a.createElement(f.CardActions,null,r.a.createElement(f.Button,{colored:!0}," ",r.a.createElement("a",{href:this.props.object.link,target:"_blank",style:{textDecoration:"none",color:"#557A95"},className:"github"}," GitHub ")," ")),r.a.createElement(f.CardMenu,{style:{color:"#fff"}}))}}]),t}(r.a.Component)),j=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={activeTab:0,openClassroom:[{projectname:"Board Game",id:"O1",description:"Turn based board game where players battle if they cross adjacent squares. Each player can move 1-3 tiles and they switch weapons if they land on a weapon tile. This project was created using JavaScript classes and jQuery.",image:"../portfolio/images/BoardGame.PNG",link:"https://github.com/SamBrodersenTalebi/Ravenous"},{projectname:"Film Festival",id:"O2",description:"Created a static website using Bootstrap. The website contained pre-registration page (not functional). In addition created a project brief that outlined a summary of what work needed to be done.",image:"../portfolio/images/Brooklyn.PNG",link:"https://github.com/SamBrodersenTalebi/filmfestival"},{projectname:"Restaurant Review Site",id:"O3",description:"Launched a restaurant review site using React. User can view nearby restaurants and add new ones by clicking the map which was fetched from Google Places API.",image:"",link:"https://github.com/SamBrodersenTalebi/p7"}],codeCademy:[{projectname:"Jammming",id:"C1",description:"Built a React application using the Spotify API. Users were allowed to search the Spotify library, create a custom playlist and then save it to their Spotify account.",image:"../portfolio/Jammming.PNG",link:"https://github.com/SamBrodersenTalebi/JammmingCodecademy"},{projectname:"Ravenous",id:"C2",description:"Built React app where users could search for restaurants based on location and type of restaurant. In addition users could sort by 3 filters.",image:"../portfolio/Ravenous.PNG",link:"https://github.com/SamBrodersenTalebi/Ravenous"}],udacity:[{projectname:"Pixel Art Marker",id:"U1",description:"Built a single-page web application that allowed users to draw pixel art on a customizable canvas.",image:"../portfolio/images/PixelArt.PNG",link:"https://github.com/SamBrodersenTalebi/PixelArt"},{projectname:"Rock Paper Scissors",id:"U2",description:"Created a Rock, Paper and Scissors game that allowed users to play against a computer player.",image:"../portfolio/images/Rock.PNG",link:"https://github.com/SamBrodersenTalebi/RockPaperScissors"}],ownProjects:[{projectname:"Blog App",id:"S1",description:"Created a MERN app where a user can add, delete, comment and like blog posts. In order to use all functionalities a user must login. View video of app at: https://streamable.com/xm780m",image:"../portfolio/images/blogApp.PNG",link:"https://github.com/SamBrodersenTalebi/RockPaperScissors"},{projectname:"Library App",id:"S2",description:"Created library app using GraphQL and React. A user can add new books, sort books by genre and view recommended books.",image:"../portfolio/images/library.PNG",link:"https://github.com/SamBrodersenTalebi/RockPaperScissors"}]},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"toggleCategories",value:function(){var e=this.state.openClassroom.map((function(e){var t=0;return r.a.createElement(v,{object:e,key:t++})})),t=this.state.codeCademy.map((function(e){var t=0;return r.a.createElement(v,{object:e,key:t++})})),a=this.state.udacity.map((function(e){var t=0;return r.a.createElement(v,{object:e,key:t++})})),n=this.state.ownProjects.map((function(e){var t=0;return r.a.createElement(v,{object:e,key:t++})}));return 0===this.state.activeTab?r.a.createElement("div",{className:"projects-grid"},e):1===this.state.activeTab?r.a.createElement("div",{className:"projects-grid"},t):2===this.state.activeTab?r.a.createElement("div",{className:"projects-grid"},a):3===this.state.activeTab?r.a.createElement("div",{className:"projects-grid"},n):void 0}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"tab",id:"Portfolio"},r.a.createElement("div",null,r.a.createElement("h2",{className:"title"},"Portfolio")),r.a.createElement("div",{className:"category-tabs"},r.a.createElement(f.Tabs,{activeTab:this.state.activeTab,onChange:function(t){return e.setState({activeTab:t})},ripple:!0},r.a.createElement(f.Tab,null," OpenClassrooms "),r.a.createElement(f.Tab,null," Codecademy "),r.a.createElement(f.Tab,null," Udacity "),r.a.createElement(f.Tab,null," Own Projects ")),r.a.createElement(f.Grid,null,r.a.createElement(f.Cell,{col:12},r.a.createElement("div",{className:"content"},this.toggleCategories())))))}}]),t}(r.a.Component),y=(a(93),function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer",id:"Contact"},r.a.createElement("p",null," \xa9 2020. All Rights Reserved, designed by Sam Brodersen"))}}]),t}(r.a.Component)),E=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("main",{id:"wrapper"},r.a.createElement(d,null),r.a.createElement(p,null),r.a.createElement(b,null),r.a.createElement(j,null),r.a.createElement(g,null)),r.a.createElement("footer",null,r.a.createElement(y,null)))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(94),a(95);o.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[29,1,2]]]);
//# sourceMappingURL=main.f0c2502d.chunk.js.map