(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],Array(36).concat([function(e,t,n){},function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(30),s=n.n(c),i=(n(36),n(8)),u=n(9),o=n(11),l=n(10),j=(n(37),n(7)),d=n.p+"static/media/logoNew.9069426c.png",b=n(0),h=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(b.jsx)("span",{className:"Logo-wrapper",children:Object(b.jsx)(j.b,{to:"/",children:Object(b.jsx)("img",{src:d,alt:"Logo"})})})}}]),n}(a.Component),p=h,m=n(4),f=n(6),O=Object(a.createContext)();function x(){var e=new Date(localStorage.getItem("tokenExpirationTime"));if(e){var t=new Date,n=new Date(t.getTime()-6e4*t.getTimezoneOffset()).toISOString();return e<new Date(n)}}var g=function(e){var t=Object(a.useState)({id:"",userName:"",authToken:""}),n=Object(f.a)(t,2),r=n[0],c=n[1];return x(),Object(a.useEffect)((function(){var e=localStorage.getItem("id"),t=localStorage.getItem("userName"),n=localStorage.getItem("authToken");c((function(a){return Object(m.a)(Object(m.a)({},a),{},{id:e,userName:t,authToken:n})}))}),[]),Object(b.jsx)(O.Provider,{value:{user:r,login:function(e,t,n,a){c((function(a){return Object(m.a)(Object(m.a)({},a),{},{id:e,userName:t,authToken:n})})),localStorage.setItem("id",e),localStorage.setItem("userName",t),localStorage.setItem("authToken",n),localStorage.setItem("tokenExpirationTime",a)},logout:function(){c((function(e){return Object(m.a)(Object(m.a)({},e),{},{id:"",email:"",authToken:""})})),localStorage.clear()},checkForToken:x},children:e.children})},v=(n(43),function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).clickHandler=function(){e.context.logout(),localStorage.clear()},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(b.jsx)("nav",{className:"Header-nav",children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)(j.b,{to:"/all",children:"All Quizzes"})}),Object(b.jsx)("li",{children:Object(b.jsx)(j.b,{to:"/search",children:"Search"})}),this.context.user.id?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("li",{children:Object(b.jsx)(j.b,{to:"/my-quizzes/1",children:"My Quizzes"})}),Object(b.jsx)("li",{children:Object(b.jsx)(j.b,{to:"/create",children:"Create Quiz"})}),Object(b.jsx)("li",{children:Object(b.jsxs)(j.b,{to:"/my-profile",children:['Hello "',this.context.user.userName,'"']})}),Object(b.jsx)("li",{children:Object(b.jsx)(j.b,{onClick:this.clickHandler.bind(this),to:"/all",children:"Logout"})})]}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("li",{children:Object(b.jsx)(j.b,{to:"/login",children:"Login"})}),Object(b.jsx)("li",{children:Object(b.jsx)(j.b,{to:"/register",children:"Register"})})]})]})})}}]),n}(a.Component));v.contextType=O;var w=v,N=(n(44),function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("header",{className:"header-wrapper",children:[Object(b.jsx)(p,{}),Object(b.jsx)(w,{})]})}}]),n}(a.Component)),y=N,q=n.p+"static/media/659509.2810db0f.svg",k=n(16),z=(n(45),n(15)),S=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("section",{className:"welcome-section",children:[Object(b.jsx)("article",{className:"welcome-image-wrapper",children:Object(b.jsx)("img",{src:q,alt:"WelcomeImage"})}),Object(b.jsxs)("article",{className:"welcome-ul-wrapper",children:[Object(b.jsxs)("ul",{children:[Object(b.jsxs)("li",{children:[Object(b.jsx)(z.a,{icon:k.a}),"  You like to learn new things ?"]}),Object(b.jsxs)("li",{children:[Object(b.jsx)(z.a,{icon:k.a}),"  You like to play games ?"]}),Object(b.jsxs)("li",{children:[Object(b.jsx)(z.a,{icon:k.a}),"  You are in the right place !"]})]}),Object(b.jsxs)(j.b,{to:"/all",children:[" ",Object(b.jsx)("button",{className:"start-button",children:"Get Started"})]})]})]})}}]),n}(a.Component),C=S,A=n(2),Q=n.n(A),P=n(3);n(50);function I(e,t){return T.apply(this,arguments)}function T(){return(T=Object(P.a)(Q.a.mark((function e(t,n){var a,r,c;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,n);case 2:if(401!==(a=e.sent).status){e.next=5;break}return e.abrupt("return",new Error("401"));case 5:if(a.ok){e.next=11;break}return e.next=8,a.json();case 8:throw r=e.sent,alert(r.message),new Error(r.message);case 11:return e.prev=11,e.next=14,a.json();case 14:return c=e.sent,e.abrupt("return",c);case 18:return e.prev=18,e.t0=e.catch(11),e.abrupt("return",a);case 21:case"end":return e.stop()}}),e,null,[[11,18]])})))).apply(this,arguments)}function M(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"get",t=arguments.length>1?arguments[1]:void 0,n={method:e,headers:{}};return localStorage.authToken&&(n.headers.Authorization="bearer "+localStorage.getItem("authToken")),t&&(n.headers["Content-Type"]="application/json",n.headers.Accept="*/*",n.body=JSON.stringify(t)),n}function V(e){return H.apply(this,arguments)}function H(){return(H=Object(P.a)(Q.a.mark((function e(t){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",I(t,M()));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(e,t){return E.apply(this,arguments)}function E(){return(E=Object(P.a)(Q.a.mark((function e(t,n){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",I(t,M("post",n)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e,t){return L.apply(this,arguments)}function L(){return(L=Object(P.a)(Q.a.mark((function e(t,n){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",I(t,M("put",n)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function G(e){return R.apply(this,arguments)}function R(){return(R=Object(P.a)(Q.a.mark((function e(t){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",I(t,M("delete")));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var U="https://localhost:44377";function W(e){return J.apply(this,arguments)}function J(){return(J=Object(P.a)(Q.a.mark((function e(t){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V(U+"/all/".concat(t||1));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Y(e){return B.apply(this,arguments)}function B(){return(B=Object(P.a)(Q.a.mark((function e(t){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F(U+"/quiz/create",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e){return K.apply(this,arguments)}function K(){return(K=Object(P.a)(Q.a.mark((function e(t){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V(U+"/quiz/".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function X(e,t){return Z.apply(this,arguments)}function Z(){return(Z=Object(P.a)(Q.a.mark((function e(t,n){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V(U+"/quiz/my-quizzes/".concat(t,"/").concat(n||1));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function $(e){return ee.apply(this,arguments)}function ee(){return(ee=Object(P.a)(Q.a.mark((function e(t){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F(U+"/quiz/result/".concat(t.id),t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function te(e,t){return ne.apply(this,arguments)}function ne(){return(ne=Object(P.a)(Q.a.mark((function e(t,n){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D(U+"/quiz/".concat(t),n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ae(e){return re.apply(this,arguments)}function re(){return(re=Object(P.a)(Q.a.mark((function e(t){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G(U+"/quiz/".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ce(e){return se.apply(this,arguments)}function se(){return(se=Object(P.a)(Q.a.mark((function e(t){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F(U+"/vote/quiz",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ie=n(13);n(51);var ue=function(e){return Object(b.jsx)("span",{className:e.class,"data-value":e.value,onClick:function(){return e.clickHandler(e.value)},children:Object(b.jsx)(z.a,{icon:k.e,value:e.value})})},oe=(n(52),function(e){var t=Object(ie.f)(),n=Object(a.useContext)(O),r=Object(a.useState)({voteCount:e.votesCount,grade:e.grade,stars:[{id:1,class:""},{id:2,class:""},{id:3,class:""},{id:4,class:""},{id:5,class:""}]}),c=Object(f.a)(r,2),s=c[0],i=c[1];function u(){return(u=Object(P.a)(Q.a.mark((function n(a){var r;return Q.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=a.target.getAttribute("data-id"),n.next=3,ae(r);case 3:e.removeQuizHandler(r),t.push("/all");case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function o(e){return l.apply(this,arguments)}function l(){return(l=Object(P.a)(Q.a.mark((function t(n){var a,r,c;return Q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.id,r={quiz:"".concat(a),grade:n,userId:localStorage.getItem("id")},t.next=4,ce(r);case 4:c=t.sent,i((function(e){return Object(m.a)(Object(m.a)({},e),{},{voteCount:c.voteCount,grade:c.grade})}));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(b.jsxs)("article",{className:"quiz-wrapper",children:[Object(b.jsx)("h3",{children:e.name}),Object(b.jsxs)("p",{className:"quiz-taken",children:["Taken: ",1===e.taken?"".concat(e.taken," time"):"".concat(e.taken," times")]}),Object(b.jsxs)("p",{className:"quiz-creator",children:["Created by: ",e.creator]}),Object(b.jsx)("span",{children:s.stars.map((function(e,t){return Object(b.jsx)(ue,{value:e.id,class:s.grade>=Number(e.id)?"yellow":"",clickHandler:o},e.id)}))}),Object(b.jsxs)("span",{className:"votes-box",children:[Object(b.jsxs)("p",{children:["Average grade: ",s.grade,"/5"]}),Object(b.jsxs)("p",{children:[s.voteCount," votes"]})]}),e.creator===localStorage.getItem("userName")?Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("span",{className:"quiz-modify",children:[Object(b.jsxs)(j.b,{to:"/edit/".concat(e.id),children:[Object(b.jsx)(z.a,{icon:k.b})," Edit"]}),Object(b.jsxs)("button",{"data-id":e.id,onClick:function(e){return u.apply(this,arguments)},children:[Object(b.jsx)(z.a,{icon:k.f}),"Delete"]})]})}):"",Object(b.jsx)(j.b,{className:"button",to:""!==n.user.id?"/play/".concat(e.id):"#",children:Object(b.jsxs)("button",{className:"play-button",children:[Object(b.jsx)(z.a,{icon:k.d}),"Play"]})})]})}),le=(n(53),function(e){return Object(b.jsxs)("div",{className:"pagination",onClick:e.clickHandler,children:[Object(b.jsx)(j.b,{"data-id":"1",className:"anchor",to:{pathname:"/".concat(e.location,"/1")},children:"First"}),e.prev?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(j.b,{"data-id":e.currPage-1,className:"anchor",to:{pathname:"/".concat(e.location,"/").concat(e.currPage-1)},children:[" ",e.currPage-1]})," "]}):"",Object(b.jsx)(j.b,{"data-id":e.currPage,className:"current",to:{pathname:"/".concat(e.location,"/").concat(e.currPage)},children:e.currPage}),e.nextPage?Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(j.b,{"data-id":e.currPage+1,to:{pathname:"/".concat(e.location,"/").concat(e.currPage+1)},className:"anchor",children:e.currPage+1})}):"",Object(b.jsx)(j.b,{"data-id":e.total,className:"anchor",to:{pathname:"/".concat(e.location,"/").concat(e.total)},children:"Last"})]})}),je=n(32),de=n.n(je),be=(n(54),function(e){return Object(b.jsx)("div",{className:"loader",children:Object(b.jsx)(de.a,{loading:e.loading,color:"yellow",size:150})})}),he=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={quizzes:[],id:a.props.match.params.id,paginationModel:{},loading:!1},a}return Object(u.a)(n,[{key:"getEvents",value:function(){var e=Object(P.a)(Q.a.mark((function e(t){var n;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W(t);case 2:n=e.sent,this.setState({quizzes:n.quizzes,paginationModel:n});case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getId",value:function(){var e=Object(P.a)(Q.a.mark((function e(t){var n;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.dataset.id,e.next=3,this.getEvents(Number(n));case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(P.a)(Q.a.mark((function e(){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,this.getEvents(this.props.match.params.id);case 3:this.setState({loading:!1});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"removeQuizHandler",value:function(e){var t=this.state.quizzes.filter((function(t){return t.id!==e}));this.setState((function(e){return Object(m.a)(Object(m.a)({},e),{},{quizzes:t})}))}},{key:"render",value:function(){var e=this;return Object(b.jsxs)("section",{className:"all",children:[Object(b.jsx)(le,{clickHandler:this.getId.bind(this),location:"all",nextPage:this.state.paginationModel.hasNextPage,prev:this.state.paginationModel.hasPreviousPage,currPage:this.state.paginationModel.currentPage,total:this.state.paginationModel.totalPages}),Object(b.jsx)("div",{className:"quizzes-boxes-wrapper",children:this.state.quizzes.map((function(t){return Object(b.jsx)(oe,{id:t.id,name:t.name,taken:t.taken?t.taken:0,grade:t.grade,votesCount:t.votesCount,creator:t.creatorName?t.creatorName:"Admin-GameQuiz@Gmail.com",removeQuizHandler:e.removeQuizHandler.bind(e)},t.id)}))}),Object(b.jsx)(be,{loading:this.state.loading}),Object(b.jsx)(le,{clickHandler:this.getId.bind(this),location:"all",nextPage:this.state.paginationModel.hasNextPage,prev:this.state.paginationModel.hasPreviousPage,currPage:this.state.paginationModel.currentPage,total:this.state.paginationModel.totalPages})]})}}]),n}(a.Component),pe=he,me=(n(60),n(23)),fe=n(21),Oe=n(19),xe=Object(a.createContext)(),ge=function(e){var t=Object(Oe.useState)({name:"",isValid:!1}),n=Object(f.a)(t,2),a=n[0],r=n[1],c=Object(Oe.useState)([]),s=Object(f.a)(c,2),i=s[0],u=s[1];return Object(b.jsx)(xe.Provider,{value:{changeQuizName:function(e){var t=e.target.value;t.length<5||t.length>50?r({name:t,questions:i,isValid:!1}):r({name:t,questions:i,isValid:!0})},quizName:a,createQuestion:function(e){var t={type:e,questionName:"",answers:[],isValidQuestionName:!1,haveAnswers:!1,correct:""};u(i.concat([t]))},handleQuestionChange:function(e,t,n){var a=i[e];t.length>=10&&t.length<=150&&(a.isValidQuestionName=!0,n&&(a.haveAnswers=!0)),a.questionName=t,u(i)},addAnswer:function(e,t){var n={answer:e,name:"",isValidAnswerName:!1,isCorrect:!1},a=i[t];a.answers.push(n),a.haveAnswers=!0,u(i)},changeAnswerNameHandler:function(e,t,n){var a=i[t].answers[n];e.length<10||e.length>150?a.isValidAnswerName=!1:a.isValidAnswerName=!0,a.isCorrect&&(i[t].correct=e),a.name=e,u(i)},changeCorrectAnswer:function(e,t){i[e].correct=i[e].answers[t].name,i[e].answers[t].isCorrect=!0,u(i)},createQuiz:function(){if(a.isValid)if(i.some((function(e){return e.isValidQuestionName})))if(i.some((function(e){return e.haveAnswers})))if(i.some((function(e){return e.answers.some((function(e){return e.isValidAnswerName}))}))){if(!i.some((function(e){return""===e.correct}))){var e={name:a.name,questions:[],creator:localStorage.getItem("id")};return i.map((function(t){return e.questions.push({title:t.questionName,answerArray:t.answers.map((function(e){return e.name})),correct:t.correct})})),e}alert("All questions must have correct answer!")}else alert("Answer name must be between 10 and 150 characters long!");else alert("All questions must have answers!");else alert("Question name must be between 10 and 150 characters long!");else alert("Quiz name must be between 5 and 50 characters long!")}},children:e.children})},ve=(n(61),function(e){return Object(b.jsx)("div",{className:"error",children:e.message})}),we=(n(62),function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={isValid:!1},a}return Object(u.a)(n,[{key:"validateAnswer",value:function(e){var t=e.target.value.length;t<10||t>150?this.setState({isValid:!1}):this.setState({isValid:!0}),console.log(this.state.isValid),this.context.changeAnswerNameHandler(e.target.value,this.props.questionIndex,this.props.number-1)}},{key:"render",value:function(){var e,t=this;return Object(b.jsxs)("div",{className:"myAnswer",children:[Object(b.jsxs)("label",{className:"answer-label",htmlFor:this.state.value,children:[" Answer: ",this.props.number]}),Object(b.jsxs)("div",{className:"answer-wrapper",children:[Object(b.jsx)("p",{className:"radio-message",children:"Mark as correct"}),Object(b.jsxs)("div",{className:"radio-div",children:[Object(b.jsx)("input",(e={type:"radio",name:this.state.value,value:this.state.value},Object(me.a)(e,"name","question".concat(this.props.questionIndex)),Object(me.a)(e,"onChange",(function(){return t.context.changeCorrectAnswer(t.props.questionIndex,t.props.number-1)})),e)),Object(b.jsx)("input",{type:"text",className:"answer-input",onChange:this.validateAnswer.bind(this)})]})]}),!this.state.isValid&&Object(b.jsx)(ve,{message:"Answer must be between 10 and 150 characters long"})]})}}]),n}(fe.Component));we.contextType=xe;var Ne=we,ye=(n(63),function(e){var t=Object(a.useState)({name:"",isValid:!1}),n=Object(f.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)({answers:[]}),i=Object(f.a)(s,2),u=i[0],o=i[1],l=Object(a.useContext)(xe);return Object(b.jsxs)("article",{className:"question-create",children:[Object(b.jsxs)("h2",{children:["Question: ",e.count]}),Object(b.jsx)("textarea",{maxLength:"150",type:"textarea",placeholder:"Please enter question Title",onChange:function(t){var n=t.target.value;n.length<10||n>150?c({name:n,isValid:!1}):c({name:n,isValid:!0}),l.handleQuestionChange(e.count-1,n,u.answers.length)},name:"question".concat(e.count-1)}),!r.isValid&&Object(b.jsx)(ve,{message:"Question must be between 10 and 150 characters long"}),Object(b.jsx)("button",{type:"button",onClick:function(){var t=Object(b.jsx)(Ne,{});o((function(e){return Object(m.a)(Object(m.a)({},e),{},{answers:e.answers.concat([t])})})),l.addAnswer(t,e.count-1)},children:"ADD ANSWER"}),Object(b.jsx)("div",{className:"answers",children:u.answers.map((function(t,n){return Object(b.jsx)(Ne,{number:n+1,questionIndex:e.count-1},n)}))})]})}),qe=(n(64),function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).handleCreateQuiz=function(){var e=Object(P.a)(Q.a.mark((function e(t){var n,r;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!(n=a.context.createQuiz())){e.next=10;break}return a.setState({loading:!0}),e.next=6,Y(n);case 6:r=e.sent,a.setState({loading:!1}),"401"===r.message&&a.props.history.push("/login"),a.props.history.push("/all");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={questions:[],loading:!1},a}return Object(u.a)(n,[{key:"createQuestion",value:function(){var e=Object(b.jsx)(ye,{});this.context.createQuestion(e),this.setState({questions:this.state.questions.concat([e])})}},{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsx)("section",{className:"create-quiz-section",onSubmit:this.handleCreateQuiz.bind(this),children:this.state.loading?Object(b.jsx)(be,{loading:this.state.loading}):Object(b.jsxs)("form",{children:[Object(b.jsx)("label",{className:"quiz-name-label",htmlFor:"QuizName",children:"Quiz name"}),Object(b.jsx)("input",{className:"name-input",id:"QuizName",type:"text",placeholder:"Name",name:"quizName",onChange:this.context.changeQuizName}),!this.context.quizName.isValid&&Object(b.jsx)(ve,{message:"Name must be between 5 and 50 characters"}),Object(b.jsx)("div",{id:"dynamicInput",children:this.state.questions.map((function(e,t){return Object(b.jsx)(ye,{count:t+1},t)}))}),Object(b.jsxs)("span",{className:"form-buttons",children:[Object(b.jsx)("button",{id:"addQuestion",type:"button",onClick:this.createQuestion.bind(this),children:"Add Question"}),Object(b.jsx)("button",{id:"create-quiz-btn",type:"submit",children:"Create"})]})]})})})}}]),n}(a.Component));qe.contextType=xe;var ke=qe;n(65);function ze(e){return Se.apply(this,arguments)}function Se(){return(Se=Object(P.a)(Q.a.mark((function e(t){var n;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F(U+"/api/authenticate/register",t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ce(e){return Ae.apply(this,arguments)}function Ae(){return(Ae=Object(P.a)(Q.a.mark((function e(t){var n;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F(U+"/api/authenticate/login",t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Qe=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).onSubmitHandler=function(){var e=Object(P.a)(Q.a.mark((function e(t){var n,r;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a.setState({error:""}),""!==t.target.userName.value&&""!==t.target.email.value&&""!==t.target.password.value&&""!==t.target.rePass.value){e.next=6;break}a.setState({error:"All fields must be filled"}),e.next=12;break;case 6:return n={username:t.target.querySelector("input").value,email:t.target.querySelectorAll("input")[1].value,password:t.target.querySelectorAll("input")[2].value},e.next=9,ze(n);case 9:r=e.sent,console.log(r),a.props.history.push("/all");case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={error:""},a}return Object(u.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsxs)("form",{onSubmit:this.onSubmitHandler,className:"register-form",children:[Object(b.jsx)("span",{className:"validation-errors",children:this.state.error}),Object(b.jsx)("label",{htmlFor:"userName",children:"Username"}),Object(b.jsx)("input",{type:"text",name:"userName"}),Object(b.jsx)("label",{htmlFor:"email",children:"Email"}),Object(b.jsx)("input",{type:"email",name:"email"}),Object(b.jsx)("label",{htmlFor:"password",children:"Password"}),Object(b.jsx)("input",{type:"password",name:"password"}),Object(b.jsx)("label",{htmlFor:"rePass",children:"Repeat Password"}),Object(b.jsx)("input",{type:"password",name:"rePass"}),Object(b.jsx)("button",{type:"submit",children:"Register"})]})})}}]),n}(a.Component),Pe=Qe,Ie=(n(66),function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).LoginSubmitHandler=function(){var e=Object(P.a)(Q.a.mark((function e(t){var n,r,c;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.setState({errors:""}),t.preventDefault(),n=t.target.userName.value,r=t.target.password.value,""!==n&&""!==r){e.next=8;break}a.setState({error:"All fields must be filled"}),e.next=12;break;case 8:return e.next=10,Ce({userName:n,password:r});case 10:c=e.sent,localStorage.authToken||(a.context.login(c.id,c.userName,c.token,c.expiration),a.props.history.push("/all"));case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={errors:""},a}return Object(u.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"login-wrapper",children:[Object(b.jsx)("h3",{children:"Login"}),Object(b.jsxs)("form",{onSubmit:this.LoginSubmitHandler,children:[Object(b.jsx)("span",{className:"validation-errors",children:this.state.error}),Object(b.jsx)(z.a,{className:"loginIcons",icon:k.g}),Object(b.jsx)("input",{type:"text",name:"userName",placeholder:"Enter your username ..."}),Object(b.jsx)(z.a,{className:"loginIcons",icon:k.c}),Object(b.jsx)("input",{type:"password",name:"password",placeholder:"Enter your password ..."}),Object(b.jsx)("button",{children:"Login"})]})]})})}}]),n}(fe.Component));Ie.contextType=O;var Te=Ie,Me=(n(67),function(e){var t=Object(a.useState)({quizzes:[],paginationModel:{}}),n=Object(f.a)(t,2),r=n[0],c=n[1];function s(e){return i.apply(this,arguments)}function i(){return(i=Object(P.a)(Q.a.mark((function e(t){var n,a;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),n=localStorage.getItem("id"),e.next=4,X(n,t);case 4:a=e.sent,console.log("returned"),c((function(e){return Object(m.a)(Object(m.a)({},e),{},{quizzes:a.quizzes,paginationModel:a})}));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}console.log(e),Object(a.useEffect)((function(){s()}),[]);var u=function(){var e=Object(P.a)(Q.a.mark((function e(t){var n;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.dataset.id,e.next=3,s(n);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(le,{clickHandler:u,nextPage:r.paginationModel.hasNextPage,location:"my-quizzes",prev:r.paginationModel.hasPreviousPage,currPage:r.paginationModel.currentPage,total:r.paginationModel.totalPages}),Object(b.jsx)("article",{className:"user-quizzes-wrapper",children:r.quizzes.map((function(e){return Object(b.jsx)(oe,{id:e.id,name:e.name,taken:e.taken?e.taken:0,grade:e.grade,votesCount:e.votesCount,creator:e.creatorName?e.creatorName:"Admin-GameQuiz@Gmail.com"},e.id)}))}),Object(b.jsx)(le,{clickHandler:u,nextPage:r.paginationModel.hasNextPage,location:"my-quizzes",prev:r.paginationModel.hasPreviousPage,currPage:r.paginationModel.currentPage,total:r.paginationModel.totalPages})]})}),Ve=(n(68),n(69),function(e){var t=e.questionId,n=e.answer,r=e.correct,c=e.changeCorrectAnswer,s=e.changeAnswerName,i=Object(a.useState)(!0),u=Object(f.a)(i,2),o=u[0],l=u[1];return Object(b.jsxs)("div",{className:"answer",children:[Object(b.jsx)("textarea",{maxLength:150,spellCheck:"true",type:"text",name:"answerName",id:n.id,defaultValue:n.title,onChange:function(e){return function(e,t,n){var a=e.target.value.length;l(!(a<10||a>150)),s(e,t,n)}(e,t,n.id)}}),o?"":Object(b.jsx)(ve,{message:"Answer length must be between 10 and 150 characters long"}),Object(b.jsx)("input",{className:"radio-input",type:"radio",defaultValue:n.title,name:"isCorrect",onClick:function(){return c(t,n.title)},defaultChecked:r})]})});var He=function(e){var t=e.question,n=e.number,a=e.nameChange,r=e.changeCorrectAnswer,c=e.changeAnswerName;return Object(b.jsxs)("article",{className:"question-create",id:t.id,children:[Object(b.jsxs)("h2",{children:["Question: ",n]}),Object(b.jsx)("textarea",{onChange:function(e){return a(e,t.id)},name:"QuestionName",maxLength:"150",type:"textarea",placeholder:"Please enter question Title",defaultValue:t.title}),t.title.length<10?Object(b.jsx)(ve,{message:"Name must be between 10 and 150 characters long"}):"",Object(b.jsx)("section",{className:"answers-wrapper",children:t.answers.map((function(e){return Object(b.jsx)(Ve,{changeCorrectAnswer:r,questionId:t.id,answer:e,correct:e.id===t.correct,changeAnswerName:c},e.id)}))})]})},Fe=(n(70),function(e){return Object(b.jsx)("div",{"data-name":e.questionsName,"data-question":e.boxNum,className:e.currentQuestion===e.boxNum?"active-square outer-square":"outer-square",onClick:e.clickHandler,children:Object(b.jsx)("div",{"data-question":e.boxNum,className:"inner-square"})})});n(71);var Ee=function(e){var t=Object(a.useState)(!0),n=Object(f.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)(!0),i=Object(f.a)(s,2),u=i[0],o=i[1],l=Object(a.useState)({quizName:"",questions:[],currentQuestion:0}),j=Object(f.a)(l,2),d=j[0],h=j[1],p=function(){var t=Object(P.a)(Q.a.mark((function t(n){var a;return Q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),a={id:e.id,name:d.quizName,questions:d.questions},t.next=4,te(e.id,a);case 4:e.history.push("/all");case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();Object(a.useEffect)((function(){!u||d.questions.some((function(e){return e.title.length<10||e.title.length>150||""===e.correct}))||d.questions.some((function(e){return e.answers.some((function(e){return e.title.length<10||e.title.length>150}))}))?c(!1):c(!0)}),[d,u]),Object(a.useEffect)((function(){h((function(t){return Object(m.a)(Object(m.a)({},t),{},{quizName:e.name,questions:e.questionsArray})}))}),[e.questionsArray,e.name]);var O=function(e){var t=Number(e.target.getAttribute("data-question"));t!==d.currentQuestion&&h((function(e){return Object(m.a)(Object(m.a)({},e),{},{currentQuestion:t})}))};return Object(b.jsxs)("section",{className:"editSection ",children:[Object(b.jsxs)("h2",{children:["Edit ",e.name]}),Object(b.jsxs)("form",{className:"editForm",onSubmit:p,children:[Object(b.jsx)("label",{className:"quiz-name-label",htmlFor:"QuizName",children:"Quiz name"}),Object(b.jsx)("input",{className:"name-input",id:"QuizName",name:"QuizName",defaultValue:d.quizName,onChange:function(e){var t=e.target.value;t.length<5||t.length>50?o(!1):o(!0),h((function(e){return Object(m.a)(Object(m.a)({},e),{},{quizName:t})}))}}),!u&&Object(b.jsx)(ve,{message:"Quiz name must be between 5 and 50 characters long"}),Object(b.jsxs)("div",{id:"editQuestion",children:[Object(b.jsx)("div",{className:"question-redirection",children:d.questions.map((function(e,t){return Object(b.jsx)(Fe,{questionName:e.title,currentQuestion:d.currentQuestion,boxNum:t,clickHandler:O},t)}))}),d.questions.length>0?Object(b.jsx)(He,{changeCorrectAnswer:function(e,t){d.questions.find((function(t){return t.id===e})).correct=t,h((function(e){return Object(m.a)({},e)}))},question:d.questions[d.currentQuestion],nameChange:function(e,t){d.questions.find((function(e){return e.id===t})).title=e.target.value,h((function(e){return Object(m.a)({},e)}))},number:d.currentQuestion+1,changeAnswerName:function(e,t,n){d.questions.find((function(e){return e.id===t})).answers.find((function(e){return e.id===n})).title=e.target.value,h((function(e){return Object(m.a)(Object(m.a)({},e),{},{questions:d.questions})}))}},d.questions[d.currentQuestion].id):""]}),Object(b.jsx)("span",{className:"form-buttons",children:Object(b.jsx)("button",{disabled:!r,id:"update",children:"Update"})})]})]})},De=(n(72),function(e){var t=Object(a.useState)(!0),n=Object(f.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)({name:"a",id:e.match.params.id,questions:[]}),i=Object(f.a)(s,2),u=i[0],o=i[1];return Object(a.useEffect)((function(){function t(){return(t=Object(P.a)(Q.a.mark((function t(){var n;return Q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_(e.match.params.id);case 2:n=t.sent,c(!1),o((function(t){return Object(m.a)(Object(m.a)({},t),{},{name:n.name,id:e.match.params.id,questions:n.questions})}));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),r?Object(b.jsxs)("span",{className:"loading-span",children:[" ",Object(b.jsx)(be,{})]}):Object(b.jsx)(Ee,{history:e.history,name:u.name,id:u.id,questionsArray:u.questions})}),Le=(n(73),Object(a.createContext)()),Ge=function(e){var t=Object(a.useState)({}),n=Object(f.a)(t,2),r=n[0],c=n[1];return Object(b.jsx)(Le.Provider,{value:{checkAnswer:function(e,t){r[t]=e.target.value,c(r)},checkedAnswer:r,setCheckedAnswer:c},children:e.children})},Re=function(e){var t=Object(a.useContext)(Le);return Object(b.jsxs)("span",{className:"answerSpan",children:[Object(b.jsx)("input",{type:"radio",id:"".concat(e.data.id),onChange:function(e){},name:e.question,value:"".concat(e.data.id),onClick:function(n){return t.checkAnswer(n,e.question)},defaultChecked:e.setChecked}),Object(b.jsx)("label",{htmlFor:"".concat(e.data.id),children:"".concat(e.data.title)})]})},Ue=(n(74),function(e){var t=Object(a.useContext)(Le);return Object(b.jsxs)("article",{className:"questionArticle",children:[Object(b.jsx)("h4",{children:e.data.title}),Object(b.jsx)("span",{name:e.data.title,children:e.data.answers.map((function(n){return Object(b.jsx)(Re,{data:n,question:e.data.title,setChecked:t.checkedAnswer[e.data.title]===n.id},n.id)}))})]})}),We=(n(75),function(e){return Object(b.jsxs)("section",{className:"resultWrapper",children:[Object(b.jsxs)("h2",{children:["Quiz: ",e.name]}),Object(b.jsxs)("p",{children:["Done by: ",e.userName]}),Object(b.jsxs)("article",{className:"results article",children:[Object(b.jsx)("p",{children:"Correct Answers"}),Object(b.jsxs)("p",{children:[Object(b.jsx)("span",{className:"pointsSpan",children:e.points})," / ",e.maxScore,"  Points"]}),Object(b.jsxs)("p",{children:["Progress: ",Number(e.percentage)," %"]})]})]})}),Je=(n(76),function(e){var t=Object(Oe.useContext)(Le),n=Object(Oe.useContext)(O),a=Object(Oe.useState)(!1),r=Object(f.a)(a,2),c=r[0],s=r[1],i=Object(Oe.useState)({points:"",percentage:0,maxScore:0}),u=Object(f.a)(i,2),o=u[0],l=u[1],j=Object(Oe.useState)({id:"",name:"",questions:[],currentQuestion:0}),d=Object(f.a)(j,2),h=d[0],p=d[1];function x(){return(x=Object(P.a)(Q.a.mark((function e(n){var a,r,i,u;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),a=[],Object.keys(t.checkedAnswer).map((function(e){return a.push({name:e,answer:t.checkedAnswer[e]})})),a.length===h.questions.length){e.next=6;break}return alert("All questions must be answered"),e.abrupt("return");case 6:return r=localStorage.getItem("id"),i={id:h.id,user:r,questionsArray:a},e.next=10,$(i);case 10:u=e.sent,l((function(e){return Object(m.a)(Object(m.a)({},e),{},{points:u.score,percentage:u.percentage,maxScore:u.maxScore})})),t.setCheckedAnswer({}),s(c=!c);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(Oe.useEffect)((function(){function t(){return t=Object(P.a)(Q.a.mark((function t(){var a;return Q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_(e.match.params.id);case 2:"401"===(a=t.sent).message?(n.logout(),e.history.push("/login")):p((function(e){return Object(m.a)(Object(m.a)({},e),{},{id:a.id,name:a.name,questions:a.questions})}));case 4:case"end":return t.stop()}}),t)}))),t.apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e.history,e.match.params.id,n]);var g=function(e){var t=Number(e.target.getAttribute("data-question"));t!==h.currentQuestion&&p((function(e){return Object(m.a)(Object(m.a)({},e),{},{currentQuestion:t})}))};return c?Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(We,{points:o.points,name:h.name,percentage:o.percentage,maxScore:o.maxScore,userName:localStorage.getItem("userName")})}):Object(b.jsxs)("article",{className:"quizPlayWrapper",children:[Object(b.jsx)("h3",{children:h.name}),Object(b.jsxs)("form",{className:"quizForm",onSubmit:function(e){return x.apply(this,arguments)},children:[Object(b.jsxs)("div",{className:"submit-dialog",children:[Object(b.jsx)("article",{className:"questions-change-box",children:h.questions.map((function(e,t){return Object(b.jsx)(Fe,{questionName:e.name,currentQuestion:h.currentQuestion,boxNum:t,clickHandler:g},e.id)}))}),h.currentQuestion===h.questions.length-1?Object(b.jsx)("button",{className:"submitResult",children:"Submit"}):""]}),h.questions.length>0?Object(b.jsx)(Ue,{data:h.questions[h.currentQuestion],checked:h.questions[h.currentQuestion].checked},h.questions[h.currentQuestion].id):""]})]})}),Ye=(n(77),function(e){return Object(b.jsx)("h1",{className:"h1",children:"UNDER CONSTRUCTION"})}),Be=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("main",{className:"main",children:[Object(b.jsxs)(ie.c,{children:[Object(b.jsx)(ie.a,{path:"/",exact:!0,component:C}),Object(b.jsx)(ie.a,{path:"/all",exact:!0,component:pe}),Object(b.jsx)(ie.a,{path:"/all/:id",exact:!0,component:pe}),Object(b.jsx)(ie.a,{path:"/register",exact:!0,component:Pe}),Object(b.jsx)(ie.a,{path:"/Login",exact:!0,component:Te}),Object(b.jsx)(ie.a,{path:"/my-quizzes/:id",exact:!0,component:Me}),Object(b.jsx)(ie.a,{path:"/edit/:id",exact:!0,component:De}),Object(b.jsx)(ie.a,{path:"/search",exact:!0,component:Ye}),Object(b.jsx)(ge,{children:Object(b.jsx)(ie.a,{path:"/create",exact:!0,component:ke})})]}),Object(b.jsx)(ie.c,{children:Object(b.jsx)(Ge,{children:Object(b.jsx)(ie.a,{path:"/play/:id",exact:!0,component:Je})})})]})}}]),n}(a.Component),_e=Be,Ke=(n(78),function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(b.jsx)("footer",{className:"site-footer",children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:"\xa9  GameQuiz 2021"}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{rel:"noopener noreferrer",target:"_blank",href:"https://github.com/MTsatsarov/GameQuiz",children:"Github source"})})]})})}}]),n}(a.Component)),Xe=Ke;n(79);var Ze=function(){return Object(b.jsxs)(g,{children:[Object(b.jsx)(y,{}),Object(b.jsx)(_e,{}),Object(b.jsx)(Xe,{})]})},$e=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,82)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(j.a,{children:Object(b.jsx)(Ze,{})})}),document.getElementById("root")),$e()}]),[[80,1,2]]]);
//# sourceMappingURL=main.52fd9bda.chunk.js.map