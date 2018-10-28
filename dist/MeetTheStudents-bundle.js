(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"./src/components/MeetTheStudents.jsx":function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});var _getPrototypeOf=__webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js"),_getPrototypeOf2=_interopRequireDefault(_getPrototypeOf),_classCallCheck2=__webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js"),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__("./node_modules/babel-runtime/helpers/createClass.js"),_createClass3=_interopRequireDefault(_createClass2),_possibleConstructorReturn2=__webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),_possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2),_inherits2=__webpack_require__("./node_modules/babel-runtime/helpers/inherits.js"),_inherits3=_interopRequireDefault(_inherits2),_react=__webpack_require__("./node_modules/react/index.js"),_react2=_interopRequireDefault(_react),_NavigationBar=__webpack_require__("./src/components/NavigationBar.jsx"),_NavigationBar2=_interopRequireDefault(_NavigationBar),_Footer=__webpack_require__("./src/components/Footer.jsx"),_Footer2=_interopRequireDefault(_Footer),_ourKelvin=__webpack_require__("./src/images/ourKelvin.jpg"),_ourKelvin2=_interopRequireDefault(_ourKelvin),_ourAnn=__webpack_require__("./src/images/ourAnn.jpeg"),_ourAnn2=_interopRequireDefault(_ourAnn),_ourDaniel=__webpack_require__("./src/images/ourDaniel.jpg"),_ourDaniel2=_interopRequireDefault(_ourDaniel),_ourMary=__webpack_require__("./src/images/ourMary.jpg"),_ourMary2=_interopRequireDefault(_ourMary),_ourOnesmus=__webpack_require__("./src/images/ourOnesmus.jpg"),_ourOnesmus2=_interopRequireDefault(_ourOnesmus),_ourSamuel=__webpack_require__("./src/images/ourSamuel.jpg"),_ourSamuel2=_interopRequireDefault(_ourSamuel),_ourVivian=__webpack_require__("./src/images/ourVivian.jpg"),_ourVivian2=_interopRequireDefault(_ourVivian),_ourWinnie=__webpack_require__("./src/images/ourWinnie.jpg"),_ourWinnie2=_interopRequireDefault(_ourWinnie),_ourYvonne=__webpack_require__("./src/images/ourYvonne.jpg"),_ourYvonne2=_interopRequireDefault(_ourYvonne),_ScrollToTop=__webpack_require__("./src/components/ScrollToTop.jsx"),_ScrollToTop2=_interopRequireDefault(_ScrollToTop);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}!function(){var e=__webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;e&&e(module)}();var MeetTheStudents=function(_Component){function MeetTheStudents(e){(0,_classCallCheck3.default)(this,MeetTheStudents);var t=(0,_possibleConstructorReturn3.default)(this,(MeetTheStudents.__proto__||(0,_getPrototypeOf2.default)(MeetTheStudents)).call(this,e));return t.state={students:["Ann","Daniel","Kelvin","Mary","Onesmus","Samuel","Vivian","Winnie","Yvonne"],fullStudents:["Ann Ndunge"]},t}return(0,_inherits3.default)(MeetTheStudents,_Component),(0,_createClass3.default)(MeetTheStudents,[{key:"handleAnn",value:function(){this.props.history.push("/Ann")}},{key:"handleDaniel",value:function(){this.props.history.push("/Daniel")}},{key:"handleKelvin",value:function(){this.props.history.push("/Kelvin")}},{key:"handleMary",value:function(){this.props.history.push("/Mary")}},{key:"handleOnesmus",value:function(){this.props.history.push("/Onesmus")}},{key:"handleSamuel",value:function(){this.props.history.push("/Samuel")}},{key:"handleVivian",value:function(){this.props.history.push("/Vivian")}},{key:"handleWinnie",value:function(){this.props.history.push("/Winnie")}},{key:"handleYvonne",value:function(){this.props.history.push("/Yvonne")}},{key:"render",value:function(){return _react2.default.createElement("div",null,_react2.default.createElement("div",null,_react2.default.createElement(_ScrollToTop2.default,null),_react2.default.createElement(_NavigationBar2.default,null)),_react2.default.createElement("main",null,_react2.default.createElement("div",{className:"ourStudentsHeader"},_react2.default.createElement("div",{className:"ourStudentsHeader__text"},"We are a technology education organization"),_react2.default.createElement("div",{className:"ourStudentsHeader__subtext"},"We build post-secondary vocational training programs in East Africa")),_react2.default.createElement("div",{className:"ourStudents"},_react2.default.createElement("div",{className:"ourStudents__header"},"Our Students"),_react2.default.createElement("div",{className:"studentsContainer"},_react2.default.createElement("div",{className:"studentsContainer__eachStudent"},_react2.default.createElement("div",{className:"studentsContainer__eachStudent--picture"},_react2.default.createElement("img",{src:_ourAnn2.default})),_react2.default.createElement("div",{className:"studentsContainer__eachStudent--info"},_react2.default.createElement("div",{className:"studentsContainer__eachStudent--info-title"},this.state.students[0]),_react2.default.createElement("div",{className:"studentsContainer__eachStudent--info-subtitle"},"Currently I am working on a project from the Jijenge tech club which involves teaching two students Microsoft Word and internet browsing skills.",_react2.default.createElement("div",{onClick:this.handleAnn.bind(this)},"Hear "+this.state.students[0]+"'s story","→")))),_react2.default.createElement("div",{className:"studentsContainer__eachStudent"},_react2.default.createElement("div",{className:"studentsContainer__eachStudent--pictureDaniel"},_react2.default.createElement("img",{src:_ourDaniel2.default})),_react2.default.createElement("div",{className:"studentsContainer__eachStudent--info"},_react2.default.createElement("div",{className:"studentsContainer__eachStudent--info-title"},this.state.students[1]),_react2.default.createElement("div",{className:"studentsContainer__eachStudent--info-subtitle"},"What I am trying to accomplish is to share the skills to others, am also trying to make them smart and convincing them the importances of having skills in computer. Not only having skills but also to love it with great interest.",_react2.default.createElement("div",{onClick:this.handleDaniel.bind(this)},"Hear "+this.state.students[1]+"'s story","→")))),_react2.default.createElement("div",{className:"studentsContainer__eachStudent"},_react2.default.createElement("div",{className:"studentsContainer__eachStudent--picture"},_react2.default.createElement("img",{src:_ourKelvin2.default})),_react2.default.createElement("div",{className:"studentsContainer__eachStudent--info"},_react2.default.createElement("div",{className:"studentsContainer__eachStudent--info-title"},this.state.students[2]),_react2.default.createElement("div",{className:"studentsContainer__eachStudent--info-subtitle"},"I am working hard in spreading my skills of computer back to the community so people can get educated abaut computers.",_react2.default.createElement("div",{onClick:this.handleKelvin.bind(this)},"Hear "+this.state.students[2]+"'s story","→"))))),_react2.default.createElement("div",{className:"studentsContainer"},_react2.default.createElement("div",{className:"studentsContainer__eachStudent"},_react2.default.createElement("div",{className:"studentsContainer__eachStudent--picture"},_react2.default.createElement("img",{src:_ourMary2.default})),_react2.default.createElement("div",{className:"studentsContainer__eachStudent--info"},_react2.default.createElement("div",{className:"studentsContainer__eachStudent--info-title"},this.state.students[3]),_react2.default.createElement("div",{className:"studentsContainer__eachStudent--info-subtitle"},"Am trying my level best to work hard in my internship to get out with the best results ever. Trying to save as much as possible so that in future I won't have any problems and most probably for my school fees in college. Trying to make the right choice in the career am choosing.",_react2.default.createElement("div",{onClick:this.handleMary.bind(this)},"Hear "+this.state.students[3]+"'s story","→")))),_react2.default.createElement("div",{className:"studentsContainer__eachStudent"},_react2.default.createElement("div",{className:"studentsContainer__eachStudent--picture"},_react2.default.createElement("img",{src:_ourOnesmus2.default})),_react2.default.createElement("div",{className:"studentsContainer__eachStudent--info"},_react2.default.createElement("div",{className:"studentsContainer__eachStudent--info-title"},this.state.students[4]),_react2.default.createElement("div",{className:"studentsContainer__eachStudent--info-subtitle"},"As I have acquired a job recently am working hard to set a good and strong financial background that will enable me to enter into my goals. One thing I know is that for one to achieve his goals he has to focus and have passion of what he wants, and as for me to achieve my goals I have to get a well financial background of which am working on today.",_react2.default.createElement("div",{onClick:this.handleOnesmus.bind(this)},"Hear "+this.state.students[4]+"'s story","→")))),_react2.default.createElement("div",{className:"studentsContainer__eachStudent"},_react2.default.createElement("div",{className:"studentsContainer__eachStudent--picture"},_react2.default.createElement("img",{src:_ourSamuel2.default})),_react2.default.createElement("div",{className:"studentsContainer__eachStudent--info"},_react2.default.createElement("div",{className:"studentsContainer__eachStudent--info-title"},this.state.students[5]),_react2.default.createElement("div",{className:"studentsContainer__eachStudent--info-subtitle"},"Currently, I am taking typing lessons and online programming courses but my dream is to become an Electrical Engineer.",_react2.default.createElement("div",{onClick:this.handleSamuel.bind(this)},"Hear "+this.state.students[5]+"'s story","→"))))),_react2.default.createElement("div",{className:"studentsContainer"},_react2.default.createElement("div",{className:"studentsContainer__eachStudent"},_react2.default.createElement("div",{className:"studentsContainer__eachStudent--picture"},_react2.default.createElement("img",{src:_ourVivian2.default})),_react2.default.createElement("div",{className:"studentsContainer__eachStudent--info"},_react2.default.createElement("div",{className:"studentsContainer__eachStudent--info-title"},this.state.students[6]),_react2.default.createElement("div",{className:"studentsContainer__eachStudent--info-subtitle"},"Currently, I am trying to help at least two kids at Mogra to know how to use a computer and know how to browse the internet. I am also trying to get my admission to college coming September.",_react2.default.createElement("div",{onClick:this.handleVivian.bind(this)},"Hear "+this.state.students[6]+"'s story","→")))),_react2.default.createElement("div",{className:"studentsContainer__eachStudent"},_react2.default.createElement("div",{className:"studentsContainer__eachStudent--pictureWinnie"},_react2.default.createElement("img",{src:_ourWinnie2.default})),_react2.default.createElement("div",{className:"studentsContainer__eachStudent--info"},_react2.default.createElement("div",{className:"studentsContainer__eachStudent--info-title"},this.state.students[7]),_react2.default.createElement("div",{className:"studentsContainer__eachStudent--info-subtitle"},"I am currently working on equipping knowledge on my mentees.",_react2.default.createElement("div",{onClick:this.handleWinnie.bind(this)},"Hear "+this.state.students[7]+"'s story","→")))),_react2.default.createElement("div",{className:"studentsContainer__eachStudent"},_react2.default.createElement("div",{className:"studentsContainer__eachStudent--picture"},_react2.default.createElement("img",{src:_ourYvonne2.default})),_react2.default.createElement("div",{className:"studentsContainer__eachStudent--info"},_react2.default.createElement("div",{className:"studentsContainer__eachStudent--info-title"},this.state.students[8]),_react2.default.createElement("div",{className:"studentsContainer__eachStudent--info-subtitle"},"Am currently trying to give knowledge to my precious mentees who have really showed me there interest in computers and are really eagered to know how to connect to people through internet through using Google and how to be the best typers than me.",_react2.default.createElement("div",{onClick:this.handleYvonne.bind(this)},"Hear "+this.state.students[8]+"'s story","→"))))))),_react2.default.createElement("footer",null,_react2.default.createElement(_Footer2.default,null)))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),MeetTheStudents}(_react.Component),_default=MeetTheStudents;exports.default=_default,function(){var e=__webpack_require__("./node_modules/react-hot-loader/index.js").default,t=__webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;e&&(e.register(MeetTheStudents,"MeetTheStudents","/Users/isabellabeltran/Code/super-duper-sniffle/src/components/MeetTheStudents.jsx"),e.register(_default,"default","/Users/isabellabeltran/Code/super-duper-sniffle/src/components/MeetTheStudents.jsx"),t(module))}()}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./src/images/ourAnn.jpeg":function(e,t,a){e.exports=a.p+"images/ourAnn.jpeg"},"./src/images/ourDaniel.jpg":function(e,t,a){e.exports=a.p+"images/ourDaniel.jpg"},"./src/images/ourKelvin.jpg":function(e,t,a){e.exports=a.p+"images/ourKelvin.jpg"},"./src/images/ourMary.jpg":function(e,t,a){e.exports=a.p+"images/ourMary.jpg"},"./src/images/ourOnesmus.jpg":function(e,t,a){e.exports=a.p+"images/ourOnesmus.jpg"},"./src/images/ourSamuel.jpg":function(e,t,a){e.exports=a.p+"images/ourSamuel.jpg"},"./src/images/ourVivian.jpg":function(e,t,a){e.exports=a.p+"images/ourVivian.jpg"},"./src/images/ourWinnie.jpg":function(e,t,a){e.exports=a.p+"images/ourWinnie.jpg"},"./src/images/ourYvonne.jpg":function(e,t,a){e.exports=a.p+"images/ourYvonne.jpg"}}]);