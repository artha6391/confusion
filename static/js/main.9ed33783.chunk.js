(this.webpackJsonpconfusion=this.webpackJsonpconfusion||[]).push([[0],{157:function(e,s,t){"use strict";t.r(s);var n=t(2),c=t.n(n),r=t(14),a=t.n(r),i=(t(96),t(97),t(98),t(16)),o=t(17),l=t(19),j=t(18),d=(t(99),t(3)),h=t(1),m=function(){return Object(h.jsxs)("div",{className:"col-12",children:[Object(h.jsx)("span",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-primary"}),Object(h.jsx)("p",{children:"Loading . . ."})]})},b="http://localhost:3001/",u=t(23);function O(e){var s=e.item,t=e.isLoading,n=e.errMess;return t?Object(h.jsx)(m,{}):n?Object(h.jsx)("h4",{children:n}):Object(h.jsx)(u.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"},children:Object(h.jsxs)(d.d,{children:[Object(h.jsx)(d.g,{src:b+s.image,alt:s.name}),Object(h.jsxs)(d.e,{children:[Object(h.jsx)(d.k,{children:s.name}),s.designation?Object(h.jsx)(d.i,{children:s.designation}):null,Object(h.jsx)(d.j,{children:s.description})]})]})})}var x=function(e){return Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"row align-items-start",children:[Object(h.jsx)("div",{className:"col-12 col-md m-1",children:Object(h.jsx)(O,{item:e.dish,isLoading:e.dishesLoading,errMess:e.dishesErrMess})}),Object(h.jsx)("div",{className:"col-12 col-md m-1",children:Object(h.jsx)(O,{item:e.promotion,isLoading:e.promosLoading,errMess:e.promosErrMess})}),Object(h.jsx)("div",{className:"col-12 col-md m-1",children:Object(h.jsx)(O,{item:e.leader,isLoading:e.leadersLoading,errMess:e.leadersErrMess})})]})})},f=t(6);function p(e){var s=e.dish;e.onClick;return Object(h.jsx)(d.d,{children:Object(h.jsxs)(f.b,{to:"/menu/".concat(s.id),children:[Object(h.jsx)(d.g,{width:"100%",src:b+s.image,alt:s.name}),Object(h.jsx)(d.h,{children:Object(h.jsxs)(d.k,{children:[" ",s.name," "]})})]})})}var g=function(e){var s=e.dishes.dishes.map((function(e){return Object(h.jsx)("div",{className:"col-12 col-md-5 m-1",children:Object(h.jsx)(p,{dish:e})},e.id)}));return e.dishes.isLoading?Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsx)(m,{})})}):e.dishes.errMess?Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("h4",{children:e.dishes.errMess})})}):Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)(d.a,{children:[Object(h.jsx)(d.b,{children:Object(h.jsx)(f.b,{to:"/home",children:"Home"})}),Object(h.jsx)(d.b,{active:!0,children:"Menu"})]}),Object(h.jsxs)("div",{className:"col-12",children:[Object(h.jsx)("h3",{children:"Menu"}),Object(h.jsx)("hr",{})]})]}),Object(h.jsx)("div",{className:"row",children:s})]})},N=t(15),v=t(9),y=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=s.call(this,e)).state={isModalOpen:!1},n.toggleModal=n.toggleModal.bind(Object(N.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(N.a)(n)),n}return Object(o.a)(t,[{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleSubmit",value:function(e){this.toggleModal(),this.props.postComment(this.props.dishId,e.rating,e.author,e.comment)}},{key:"render",value:function(){return Object(h.jsxs)(c.a.Fragment,{children:[Object(h.jsxs)(d.c,{outline:!0,className:"text-primary bg-light",onClick:this.toggleModal,children:[Object(h.jsx)("span",{className:"fa fa-comments fa-lg"})," Submit Comment"]}),Object(h.jsxs)(d.t,{isOpen:this.state.isModalOpen,toggle:this.toggleModal,children:[Object(h.jsx)(d.v,{toggle:this.toggleModal,children:"Submit Comment"}),Object(h.jsx)(d.u,{children:Object(h.jsxs)(v.LocalForm,{onSubmit:this.handleSubmit,children:[Object(h.jsxs)(d.B,{className:"form-group",children:[Object(h.jsx)(d.r,{htmlFor:"author",md:12,children:"Your Name"}),Object(h.jsx)(d.l,{md:12,children:Object(h.jsx)(v.Control.text,{model:".author",className:"form-control",name:"author",id:"author"})})]}),Object(h.jsxs)(d.B,{className:"form-group",children:[Object(h.jsx)(d.r,{htmlFor:"rating",md:12,children:"Rating"}),Object(h.jsx)(d.l,{md:12,children:Object(h.jsxs)(v.Control.select,{model:".rating",className:"form-control",name:"rating",id:"rating",children:[Object(h.jsx)("option",{children:"1"}),Object(h.jsx)("option",{children:"2"}),Object(h.jsx)("option",{children:"3"}),Object(h.jsx)("option",{children:"4"}),Object(h.jsx)("option",{children:"5"})]})})]}),Object(h.jsxs)(d.B,{className:"form-group",children:[Object(h.jsx)(d.r,{htmlFor:"comment",md:12,children:"Comment"}),Object(h.jsx)(d.l,{md:12,children:Object(h.jsx)(v.Control.textarea,{model:".comment",id:"comment",name:"comment",rows:"6",className:"form-control"})})]}),Object(h.jsx)(d.B,{className:"form-group",children:Object(h.jsx)(d.l,{children:Object(h.jsx)(d.c,{type:"submit",color:"primary",children:"Submit"})})})]})})]})]})}}]),t}(n.Component);function w(e){var s=e.dish;if(null!=s)return Object(h.jsx)("div",{className:"col-md-5 m-1",children:Object(h.jsx)(u.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"},children:Object(h.jsxs)(d.d,{children:[Object(h.jsx)(d.g,{width:"100%",src:b+s.image,alt:s.name}),Object(h.jsxs)(d.e,{children:[Object(h.jsx)(d.k,{children:s.name}),Object(h.jsx)(d.j,{children:s.description})]})]})})})}function M(e){var s=e.comments,t=e.postComment,n=e.dishId;if(null==s)return Object(h.jsx)("div",{});var c=s.map((function(e){return Object(h.jsx)(u.Fade,{in:!0,children:Object(h.jsxs)("li",{children:[Object(h.jsx)("p",{children:e.comment}),Object(h.jsxs)("p",{children:["-- ",e.author,", ",e.date]})]},e.id)})}));return Object(h.jsxs)("div",{className:"col-12 col-md-5 m-1",children:[Object(h.jsx)("h3",{children:"Comments"}),Object(h.jsx)("ul",{className:"list-unstyled",children:Object(h.jsx)(u.Stagger,{in:!0,children:c})}),Object(h.jsx)(y,{comments:s,dishId:n,postComment:t})]})}var L=function(e){return e.isLoading?Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsx)(m,{})})}):e.errMess?Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("h4",{children:e.errMess})})}):null==e.dish?Object(h.jsx)("div",{}):Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)(d.a,{children:[Object(h.jsx)(d.b,{children:Object(h.jsx)(f.b,{to:"/menu",children:"Menu"})}),Object(h.jsx)(d.b,{active:!0,children:e.dish.name})]}),Object(h.jsxs)("div",{className:"col-12",children:[Object(h.jsx)("h3",{children:e.dish.name}),Object(h.jsx)("hr",{})]})]}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)(w,{dish:e.dish}),Object(h.jsx)(M,{comments:e.comments,postComment:e.postComment,dishId:e.dish.id})]})]})};function k(e){var s=e.leader,t=e.isLoading,n=e.errMess;return t?Object(h.jsx)(m,{}):n?Object(h.jsx)("h4",{children:n}):Object(h.jsx)(u.Fade,{in:!0,children:Object(h.jsx)("div",{className:"col-12 mt-5",children:Object(h.jsxs)(d.s,{tag:"li",children:[Object(h.jsx)(d.s,{left:!0,middle:!0,children:Object(h.jsx)(d.s,{object:!0,src:b+s.image,alt:s.name})}),Object(h.jsxs)(d.s,{body:!0,className:"ml-5",children:[Object(h.jsx)(d.s,{heading:!0,children:s.name}),Object(h.jsx)("p",{children:s.description})]})]})},s.id)},s.id)}var C=function(e){var s=e.leaders.map((function(s){return Object(h.jsx)(k,{leader:s,isLoading:e.leadersLoading,errMess:e.leadersErrMess})}));return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)(d.a,{children:[Object(h.jsx)(d.b,{children:Object(h.jsx)(f.b,{to:"/home",children:"Home"})}),Object(h.jsx)(d.b,{active:!0,children:"About Us"})]}),Object(h.jsxs)("div",{className:"col-12",children:[Object(h.jsx)("h3",{children:"About Us"}),Object(h.jsx)("hr",{})]})]}),Object(h.jsxs)("div",{className:"row row-content",children:[Object(h.jsxs)("div",{className:"col-12 col-md-6",children:[Object(h.jsx)("h2",{children:"Our History"}),Object(h.jsx)("p",{children:"Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us."}),Object(h.jsxs)("p",{children:["The restaurant traces its humble beginnings to ",Object(h.jsx)("em",{children:"The Frying Pan"}),", a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan."]})]}),Object(h.jsx)("div",{className:"col-12 col-md-5",children:Object(h.jsxs)(d.d,{children:[Object(h.jsx)(d.f,{className:"bg-primary text-white",children:"Facts At a Glance"}),Object(h.jsx)(d.e,{children:Object(h.jsxs)("dl",{className:"row p-1",children:[Object(h.jsx)("dt",{className:"col-6",children:"Started"}),Object(h.jsx)("dd",{className:"col-6",children:"3 Feb. 2013"}),Object(h.jsx)("dt",{className:"col-6",children:"Major Stake Holder"}),Object(h.jsx)("dd",{className:"col-6",children:"HK Fine Foods Inc."}),Object(h.jsx)("dt",{className:"col-6",children:"Last Year's Turnover"}),Object(h.jsx)("dd",{className:"col-6",children:"$1,250,375"}),Object(h.jsx)("dt",{className:"col-6",children:"Employees"}),Object(h.jsx)("dd",{className:"col-6",children:"40"})]})})]})}),Object(h.jsx)("div",{className:"col-12",children:Object(h.jsx)(d.d,{children:Object(h.jsx)(d.e,{className:"bg-faded",children:Object(h.jsxs)("blockquote",{className:"blockquote",children:[Object(h.jsx)("p",{className:"mb-0",children:"You better cut the pizza in four pieces because I'm not hungry enough to eat six."}),Object(h.jsxs)("footer",{className:"blockquote-footer",children:["Yogi Berra,",Object(h.jsx)("cite",{title:"Source Title",children:"The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014"})]})]})})})})]}),Object(h.jsxs)("div",{className:"row row-content",children:[Object(h.jsx)("div",{className:"col-12",children:Object(h.jsx)("h2",{children:"Corporate Leadership"})}),Object(h.jsx)("div",{className:"col-12",children:Object(h.jsx)(d.s,{list:!0,children:Object(h.jsx)(u.Stagger,{in:!0,children:s})})})]})]})},E=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=s.call(this,e)).state={isNavOpen:!1,isModalOpen:!1},n.toggleNav=n.toggleNav.bind(Object(N.a)(n)),n.toggleModal=n.toggleModal.bind(Object(N.a)(n)),n.handleLogin=n.handleLogin.bind(Object(N.a)(n)),n}return Object(o.a)(t,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleLogin",value:function(e){this.toggleModal(),alert("Username: "+this.username.value+" Password: "+this.password.value+" Remember: "+this.remember.checked),e.preventDefault()}},{key:"render",value:function(){var e=this;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(d.y,{dark:!0,expand:"md",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(d.A,{onClick:this.toggleNav}),Object(h.jsx)(d.z,{className:"mr-auto",href:"/",children:Object(h.jsx)("img",{src:"assets/images/logo.png",width:"41",height:"30",alt:"Artha's Sample Project"})}),Object(h.jsxs)(d.m,{isOpen:this.state.isOpen,navbar:!0,children:[Object(h.jsxs)(d.w,{navbar:!0,children:[Object(h.jsx)(d.x,{children:Object(h.jsxs)(f.c,{className:"nav-link",to:"/home",children:[Object(h.jsx)("span",{className:"fa fa-home fa-lg"})," Home"]})}),Object(h.jsx)(d.x,{children:Object(h.jsxs)(f.c,{className:"nav-link",to:"/aboutus",children:[Object(h.jsx)("span",{className:"fa fa-info fa-lg"})," About Us"]})}),Object(h.jsx)(d.x,{children:Object(h.jsxs)(f.c,{className:"nav-link",to:"/menu",children:[Object(h.jsx)("span",{className:"fa fa-list fa-lg"})," Menu"]})}),Object(h.jsx)(d.x,{children:Object(h.jsxs)(f.c,{className:"nav-link",to:"/contactus",children:[Object(h.jsx)("span",{className:"fa fa-address-card fa-lg"})," Contact Us"]})})]}),Object(h.jsx)(d.w,{className:"ml-auto",navbar:!0,children:Object(h.jsx)(d.x,{children:Object(h.jsxs)(d.c,{outline:!0,onClick:this.toggleModal,children:[Object(h.jsx)("span",{className:"fa fa-sign-in fa-lg"})," Login"]})})})]})]})}),Object(h.jsx)(d.q,{children:Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"row row-header",children:Object(h.jsxs)("div",{className:"col-12 col-sm-6",children:[Object(h.jsx)("h1",{children:"Artha's Sample Projecto"}),Object(h.jsx)("p",{children:"This is my sample project for React"})]})})})}),Object(h.jsxs)(d.t,{isOpen:this.state.isModalOpen,toggle:this.toggleModal,children:[Object(h.jsx)(d.v,{toggle:this.toggleModal,children:"Login"}),Object(h.jsx)(d.u,{children:Object(h.jsxs)(d.n,{onSubmit:this.handleLogin,children:[Object(h.jsxs)(d.o,{children:[Object(h.jsx)(d.r,{htmlFor:"username",children:"Username"}),Object(h.jsx)(d.p,{type:"text",id:"username",name:"username",innerRef:function(s){return e.username=s}})]}),Object(h.jsxs)(d.o,{children:[Object(h.jsx)(d.r,{htmlFor:"password",children:"Password"}),Object(h.jsx)(d.p,{type:"password",id:"password",name:"password",innerRef:function(s){return e.password=s}})]}),Object(h.jsx)(d.o,{check:!0,children:Object(h.jsxs)(d.r,{check:!0,children:[Object(h.jsx)(d.p,{type:"checkbox",name:"remember",innerRef:function(s){return e.remember=s}}),"Remember me"]})}),Object(h.jsx)(d.c,{type:"submit",value:"submit",color:"primary",children:"Login"})]})})]})]})}}]),t}(n.Component);var S=function(e){return Object(h.jsx)("div",{className:"footer",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("div",{className:"row justify-content-center",children:[Object(h.jsxs)("div",{className:"col-4 offset-1 col-sm-2",children:[Object(h.jsx)("h5",{children:"Links"}),Object(h.jsxs)("ul",{className:"list-unstyled",children:[Object(h.jsx)("li",{children:Object(h.jsx)(f.b,{to:"/home",children:"Home"})}),Object(h.jsx)("li",{children:Object(h.jsx)(f.b,{to:"/aboutus",children:"About Us"})}),Object(h.jsx)("li",{children:Object(h.jsx)(f.b,{to:"/menu",children:"Menu"})}),Object(h.jsx)("li",{children:Object(h.jsx)(f.b,{to:"/contactus",children:"Contact"})})]})]}),Object(h.jsxs)("div",{className:"col-7 col-sm-5",children:[Object(h.jsx)("h5",{children:"Our Address"}),Object(h.jsxs)("address",{children:["121, Clear Water Bay Road",Object(h.jsx)("br",{}),"Clear Water Bay, Kowloon",Object(h.jsx)("br",{}),"HONG KONG",Object(h.jsx)("br",{}),Object(h.jsx)("i",{className:"fa fa-phone fa-lg"}),": +852 1234 5678",Object(h.jsx)("br",{}),Object(h.jsx)("i",{className:"fa fa-fax fa-lg"}),": +852 8765 4321",Object(h.jsx)("br",{}),Object(h.jsx)("i",{className:"fa fa-envelope fa-lg"}),": ",Object(h.jsx)("a",{href:"mailto:confusion@food.net",children:"confusion@food.net"})]})]}),Object(h.jsx)("div",{className:"col-12 col-sm-4 align-self-center",children:Object(h.jsxs)("div",{className:"text-center",children:[Object(h.jsx)("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+",children:Object(h.jsx)("i",{className:"fa fa-google-plus"})}),Object(h.jsx)("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id=",children:Object(h.jsx)("i",{className:"fa fa-facebook"})}),Object(h.jsx)("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/",children:Object(h.jsx)("i",{className:"fa fa-linkedin"})}),Object(h.jsx)("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/",children:Object(h.jsx)("i",{className:"fa fa-twitter"})}),Object(h.jsx)("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/",children:Object(h.jsx)("i",{className:"fa fa-youtube"})}),Object(h.jsx)("a",{className:"btn btn-social-icon",href:"mailto:",children:Object(h.jsx)("i",{className:"fa fa-envelope-o"})})]})})]}),Object(h.jsx)("div",{className:"row justify-content-center",children:Object(h.jsx)("div",{className:"col-auto",children:Object(h.jsx)("p",{children:"\xa9 Copyright 2018 Ristorante Con Fusion"})})})]})})},F=function(e){return e&&e.length},T=function(e){return!isNaN(Number(e))},D=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},A=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=s.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(N.a)(n)),n}return Object(o.a)(t,[{key:"handleSubmit",value:function(e){this.props.postFeedback(e.firstname,e.lastname,e.telnum,e.email,e.agree,e.contactType,e.message),this.props.resetFeedbackForm()}},{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)(d.a,{children:[Object(h.jsx)(d.b,{children:Object(h.jsx)(f.b,{to:"/home",children:"Home"})}),Object(h.jsx)(d.b,{active:!0,children:"Contact Us"})]}),Object(h.jsxs)("div",{className:"col-12",children:[Object(h.jsx)("h3",{children:"Contact Us"}),Object(h.jsx)("hr",{})]})]}),Object(h.jsxs)("div",{className:"row row-content",children:[Object(h.jsx)("div",{className:"col-12",children:Object(h.jsx)("h3",{children:"Location Information"})}),Object(h.jsxs)("div",{className:"col-12 col-sm-4 offset-sm-1",children:[Object(h.jsx)("h5",{children:"Our Address"}),Object(h.jsxs)("address",{children:["121, Clear Water Bay Road",Object(h.jsx)("br",{}),"Clear Water Bay, Kowloon",Object(h.jsx)("br",{}),"HONG KONG",Object(h.jsx)("br",{}),Object(h.jsx)("i",{className:"fa fa-phone"}),": +852 1234 5678",Object(h.jsx)("br",{}),Object(h.jsx)("i",{className:"fa fa-fax"}),": +852 8765 4321",Object(h.jsx)("br",{}),Object(h.jsx)("i",{className:"fa fa-envelope"}),": ",Object(h.jsx)("a",{href:"mailto:confusion@food.net",children:"confusion@food.net"})]})]}),Object(h.jsx)("div",{className:"col-12 col-sm-6 offset-sm-1",children:Object(h.jsx)("h5",{children:"Map of our Location"})}),Object(h.jsx)("div",{className:"col-12 col-sm-11 offset-sm-1",children:Object(h.jsxs)("div",{className:"btn-group",role:"group",children:[Object(h.jsxs)("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678",children:[Object(h.jsx)("i",{className:"fa fa-phone"})," Call"]}),Object(h.jsxs)("a",{role:"button",className:"btn btn-info",children:[Object(h.jsx)("i",{className:"fa fa-skype"})," Skype"]}),Object(h.jsxs)("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net",children:[Object(h.jsx)("i",{className:"fa fa-envelope-o"})," Email"]})]})})]}),Object(h.jsxs)("div",{className:"row row-content",children:[Object(h.jsx)("div",{className:"col-12",children:Object(h.jsx)("h3",{children:"Send us your Feedback"})}),Object(h.jsx)("div",{className:"col-12 col-md-9",children:Object(h.jsxs)(v.Form,{model:"feedback",onSubmit:function(s){return e.handleSubmit(s)},children:[Object(h.jsxs)(d.B,{className:"form-group",children:[Object(h.jsx)(d.r,{htmlFor:"firstname",md:2,children:"First Name"}),Object(h.jsxs)(d.l,{md:10,children:[Object(h.jsx)(v.Control.text,{model:".firstname",id:"firstname",name:"firstname",placeholder:"First Name",className:"form-control",validators:{required:F,minLength:function(e){return e&&e.length>=3},maxLength:function(e){return!e||e.length<=15}}}),Object(h.jsx)(v.Errors,{className:"text-danger",model:".firstname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be less than 16 characters"}})]})]}),Object(h.jsxs)(d.B,{className:"form-group",children:[Object(h.jsx)(d.r,{htmlFor:"lastname",md:2,children:"Last Name"}),Object(h.jsxs)(d.l,{md:10,children:[Object(h.jsx)(v.Control.text,{model:".lastname",id:"lastname",name:"lastname",placeholder:"Last Name",className:"form-control",validators:{required:F,minLength:function(e){return e&&e.length>=3},maxLength:function(e){return!e||e.length<=15}}}),Object(h.jsx)(v.Errors,{className:"text-danger",model:".lastname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be less than 16 characters"}})]})]}),Object(h.jsxs)(d.B,{className:"form-group",children:[Object(h.jsx)(d.r,{htmlFor:"telnum",md:2,children:"Contact Tel."}),Object(h.jsxs)(d.l,{md:10,children:[Object(h.jsx)(v.Control.text,{model:".telnum",id:"telnum",name:"telnum",placeholder:"Tel. Number",className:"form-control",validators:{required:F,minLength:function(e){return e&&e.length>=3},maxLength:function(e){return!e||e.length<=15},isNumber:T}}),Object(h.jsx)(v.Errors,{className:"text-danger",model:".telnum",show:"touched",messages:{required:"Required",minLength:"Must be greater than 4 numbers",maxLength:"Must be less than 13 numbers",isNumber:"Must be a sequence of numbers"}})]})]}),Object(h.jsxs)(d.B,{className:"form-group",children:[Object(h.jsx)(d.r,{htmlFor:"email",md:2,children:"Email"}),Object(h.jsxs)(d.l,{md:10,children:[Object(h.jsx)(v.Control.text,{model:".email",id:"email",name:"email",placeholder:"Email",className:"form-control",validators:{required:F,validEmail:D}}),Object(h.jsx)(v.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Required",validEmail:"Invalid Email address"}})]})]}),Object(h.jsxs)(d.B,{className:"form-group",children:[Object(h.jsx)(d.l,{md:{size:6,offset:2},children:Object(h.jsx)("div",{className:"form-check",children:Object(h.jsxs)(d.r,{check:!0,children:[Object(h.jsx)(v.Control.checkbox,{model:".agree",name:"agree",className:"form-check-input"})," "," ",Object(h.jsx)("strong",{children:"May we contact you?"})]})})}),Object(h.jsx)(d.l,{md:{size:3,offset:1},children:Object(h.jsxs)(v.Control.select,{model:".contactType",name:"contactType",className:"form-control",children:[Object(h.jsx)("option",{children:"Tel."}),Object(h.jsx)("option",{children:"Email"})]})})]}),Object(h.jsxs)(d.B,{className:"form-group",children:[Object(h.jsx)(d.r,{htmlFor:"message",md:2,children:"Your Feedback"}),Object(h.jsx)(d.l,{md:10,children:Object(h.jsx)(v.Control.textarea,{model:".message",id:"message",name:"message",rows:"12",className:"form-control"})})]}),Object(h.jsx)(d.B,{className:"form-group",children:Object(h.jsx)(d.l,{md:{size:10,offset:2},children:Object(h.jsx)(d.c,{type:"submit",color:"primary",children:"Send Feedback"})})})]})})]})]})}}]),t}(n.Component),I=t(21),P="ADD_COMMENT",R="DISHES_LOADING",B="DISHES_FAILED",q="ADD_DISHES",H="ADD_COMMENTS",_="COMMENTS_FAILED",G="ADD_PROMOS",U="PROMOS_LOADING",Y="PROMOS_FAILED",K="ADD_LEADERS",W="LEADERS_LOADING",z="LEADERS_FAILED",J=function(e,s,t,n){return function(c){var r={dishId:e,rating:s,author:t,comment:n};return r.date=(new Date).toISOString(),fetch(b+"comments",{method:"POST",body:JSON.stringify(r),headers:{"Content-type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var s=new Error("Error "+e.status+": "+e.statusText);throw s.response=e,s}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){return c(function(e){return{type:P,payload:e}}(e))})).catch((function(e){console.log("post comments",e.message)}))}},Z=function(){return{type:R}},$=function(e){return{type:B,payload:e}},Q=function(e){return{type:q,payload:e}},V=function(e){return{type:_,payload:e}},X=function(e){return{type:H,payload:e}},ee=function(){return{type:U}},se=function(e){return{type:Y,payload:e}},te=function(e){return{type:G,payload:e}},ne=function(){return{type:W}},ce=function(e){return{type:z,payload:e}},re=function(e){return{type:K,payload:e}},ae=t(46),ie=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(e){return Object(i.a)(this,t),s.call(this,e)}return Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchDishes(),this.props.fetchComments(),this.props.fetchPromos(),this.props.fetchLeaders()}},{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{children:[Object(h.jsx)(E,{}),Object(h.jsx)(ae.TransitionGroup,{children:Object(h.jsx)(ae.CSSTransition,{classNames:"page",timeout:300,children:Object(h.jsxs)(f.f,{location:this.props.location,children:[Object(h.jsx)(f.e,{path:"/home",component:function(){return Object(h.jsx)(x,{dish:e.props.dishes.dishes.filter((function(e){return e.featured}))[0],dishesLoading:e.props.dishes.isLoading,dishesErrMess:e.props.dishes.errMess,promotion:e.props.promotions.promotions.filter((function(e){return e.featured}))[0],leader:e.props.leaders.leaders.filter((function(e){return e.featured}))[0],promosLoading:e.props.promotions.isLoading,promosErrMess:e.props.promotions.errMess,leadersLoading:e.props.leaders.isLoading,leadersErrMess:e.props.leaders.errMess})}}),Object(h.jsx)(f.e,{exact:!0,path:"/menu",component:function(){return Object(h.jsx)(g,{dishes:e.props.dishes})}}),Object(h.jsx)(f.e,{path:"/menu/:dishId",component:function(s){var t=s.match;return Object(h.jsx)(L,{dish:e.props.dishes.dishes.filter((function(e){return e.id===parseInt(t.params.dishId,10)}))[0],isLoading:e.props.dishes.isLoading,errMess:e.props.dishes.errMess,comments:e.props.comments.comments.filter((function(e){return e.dishId===parseInt(t.params.dishId,10)})),postComment:e.props.postComment,commentsErrMess:e.props.comments.errMess})}}),Object(h.jsx)(f.e,{exact:!0,path:"/contactus",component:function(){return Object(h.jsx)(A,{resetFeedbackForm:e.props.resetFeedbackForm,postFeedback:e.props.postFeedback})}}),Object(h.jsx)(f.e,{path:"/aboutus",component:function(){return Object(h.jsx)(C,{leaders:e.props.leaders.leaders,leadersErrMess:e.props.leaders.errMess,leadersLoading:e.props.leaders.isLoading})}}),Object(h.jsx)(f.d,{to:"/home"})]})},this.props.location.key)}),Object(h.jsx)(S,{})]})}}]),t}(n.Component),oe=Object(f.g)(Object(I.connect)((function(e){return{dishes:e.dishes,comments:e.comments,promotions:e.promotions,leaders:e.leaders}}),(function(e){return{postComment:function(s,t,n,c){return e(J(s,t,n,c))},fetchDishes:function(){e((function(e){return e(Z(!0)),fetch(b+"dishes").then((function(e){if(e.ok)return e;var s=new Error("Error "+e.status+": "+e.statusText);throw s.response=e,s}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(s){return e(Q(s))})).catch((function(s){return e($(s.message))}))}))},resetFeedbackForm:function(){e(v.actions.reset("feedback"))},fetchComments:function(){e((function(e){return fetch(b+"comments").then((function(e){if(e.ok)return e;var s=new Error("Error "+e.status+": "+e.statusText);throw s.response=e,s}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(s){return e(X(s))})).catch((function(s){return e(V(s.message))}))}))},fetchPromos:function(){e((function(e){return e(ee(!0)),fetch(b+"promotions").then((function(e){if(e.ok)return e;var s=new Error("Error"+e.status+": "+e.statusText);throw s.response=e,s}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(s){return e(te(s))})).catch((function(s){return e(se(s.message))}))}))},fetchLeaders:function(){e((function(e){return e(ne(!0)),fetch(b+"leaders").then((function(e){if(e.ok)return e;var s=new Error("Error "+e.status+": "+e.statusText);throw s.response=e,s}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(s){return e(re(s))})).catch((function(s){return e(ce(s.message))}))}))},postFeedback:function(s,t,n,c,r,a,i){return e(function(e,s,t,n,c,r,a){return function(i){var o={firstname:e,lastname:s,telnum:t,email:n,agree:c,contactType:r,message:a};return o.date=(new Date).toISOString(),fetch(b+"feedback",{method:"POST",body:JSON.stringify(o),headers:{"Content-type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var s=new Error("Error "+e.status+": "+e.statusText);throw s.response=e,s}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(e){return alert(JSON.stringify(e))})).catch((function(e){console.log("Post comments",e.message)}))}}(s,t,n,c,r,a,i))}}}))(ie)),le=t(7),je=t(22),de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errMess:null,comments:[]},s=arguments.length>1?arguments[1]:void 0;switch(s.type){case _:return Object(le.a)(Object(le.a)({},e),{},{isLoading:!1,errMess:s.payload,comments:[]});case H:return Object(le.a)(Object(le.a)({},e),{},{isLoading:!1,errMess:null,comments:s.payload});case P:var t=s.payload;return Object(le.a)(Object(le.a)({},e),{},{comments:e.comments.concat(t)});default:return e}},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,dishes:[]},s=arguments.length>1?arguments[1]:void 0;switch(s.type){case R:return Object(le.a)(Object(le.a)({},e),{},{isLoading:!0,errMess:null,dishes:[]});case B:return Object(le.a)(Object(le.a)({},e),{},{isLoading:!1,errMess:s.payload,dishes:[]});case q:return Object(le.a)(Object(le.a)({},e),{},{isLoading:!1,errMess:null,dishes:s.payload});default:return e}},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,leaders:[]},s=arguments.length>1?arguments[1]:void 0;switch(s.type){case W:return Object(le.a)(Object(le.a)({},e),{},{isLoading:!0,errMess:null,leaders:[]});case z:return Object(le.a)(Object(le.a)({},e),{},{isLoading:!1,errMess:s.payload,leaders:[]});case K:return Object(le.a)(Object(le.a)({},e),{},{isLoading:!1,errMess:null,leaders:s.payload});default:return e}},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,promotions:[]},s=arguments.length>1?arguments[1]:void 0;switch(s.type){case U:return Object(le.a)(Object(le.a)({},e),{},{isLoading:!0,errMess:null,promotions:[]});case Y:return Object(le.a)(Object(le.a)({},e),{},{isLoading:!1,errMess:s.payload,promotions:[]});case G:return Object(le.a)(Object(le.a)({},e),{},{isLoading:!1,errMess:null,promotions:s.payload});default:return e}},ue=t(90),Oe=t.n(ue),xe=t(91),fe=t.n(xe),pe={firstname:"",lastname:"",telnum:"",email:"",agree:!1,contactType:"Tel.",message:""},ge=Object(je.createStore)(Object(je.combineReducers)(Object(le.a)({dishes:he,comments:de,promotions:be,leaders:me},Object(v.createForms)({feedback:pe}))),Object(je.applyMiddleware)(Oe.a,fe.a)),Ne=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return Object(h.jsx)(I.Provider,{store:ge,children:Object(h.jsx)(f.a,{children:Object(h.jsx)("div",{children:Object(h.jsx)(oe,{})})})})}}]),t}(n.Component),ve=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,158)).then((function(s){var t=s.getCLS,n=s.getFID,c=s.getFCP,r=s.getLCP,a=s.getTTFB;t(e),n(e),c(e),r(e),a(e)}))};a.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(Ne,{})}),document.getElementById("root")),ve()},98:function(e,s,t){},99:function(e,s,t){}},[[157,1,2]]]);
//# sourceMappingURL=main.9ed33783.chunk.js.map