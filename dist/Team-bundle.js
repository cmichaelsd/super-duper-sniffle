(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"./src/components/Popup.jsx":function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});var _getPrototypeOf=__webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js"),_getPrototypeOf2=_interopRequireDefault(_getPrototypeOf),_classCallCheck2=__webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js"),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__("./node_modules/babel-runtime/helpers/createClass.js"),_createClass3=_interopRequireDefault(_createClass2),_possibleConstructorReturn2=__webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),_possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2),_inherits2=__webpack_require__("./node_modules/babel-runtime/helpers/inherits.js"),_inherits3=_interopRequireDefault(_inherits2),_react=__webpack_require__("./node_modules/react/index.js"),_react2=_interopRequireDefault(_react);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}!function(){var e=__webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;e&&e(module)}();var Popup=function(_Component){function Popup(e){return(0,_classCallCheck3.default)(this,Popup),(0,_possibleConstructorReturn3.default)(this,(Popup.__proto__||(0,_getPrototypeOf2.default)(Popup)).call(this,e))}return(0,_inherits3.default)(Popup,_Component),(0,_createClass3.default)(Popup,[{key:"render",value:function(){var e=this.props.close;return _react2.default.createElement("div",{className:"popup"},_react2.default.createElement("div",{className:"popup__content"},_react2.default.createElement("div",{onClick:e()},"X"),_react2.default.createElement("div",{className:"popup__content--header"}),_react2.default.createElement("div",{className:"popup__content--bio"})))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Popup}(_react.Component),_default=Popup;exports.default=_default,function(){var e=__webpack_require__("./node_modules/react-hot-loader/index.js").default,a=__webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;e&&(e.register(Popup,"Popup","/Users/isabellabeltran/Code/super-duper-sniffle/src/components/Popup.jsx"),e.register(_default,"default","/Users/isabellabeltran/Code/super-duper-sniffle/src/components/Popup.jsx"),a(module))}()}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./src/components/Team.jsx":function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});var _getPrototypeOf=__webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js"),_getPrototypeOf2=_interopRequireDefault(_getPrototypeOf),_classCallCheck2=__webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js"),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__("./node_modules/babel-runtime/helpers/createClass.js"),_createClass3=_interopRequireDefault(_createClass2),_possibleConstructorReturn2=__webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),_possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2),_inherits2=__webpack_require__("./node_modules/babel-runtime/helpers/inherits.js"),_inherits3=_interopRequireDefault(_inherits2),_react=__webpack_require__("./node_modules/react/index.js"),_react2=_interopRequireDefault(_react),_NavigationBar=__webpack_require__("./src/components/NavigationBar.jsx"),_NavigationBar2=_interopRequireDefault(_NavigationBar),_Footer=__webpack_require__("./src/components/Footer.jsx"),_Footer2=_interopRequireDefault(_Footer),_drjohn=__webpack_require__("./src/images/drjohn.jpg"),_drjohn2=_interopRequireDefault(_drjohn),_sam=__webpack_require__("./src/images/sam.jpg"),_sam2=_interopRequireDefault(_sam),_vassia=__webpack_require__("./src/images/vassia.jpg"),_vassia2=_interopRequireDefault(_vassia),_isabellasPicture=__webpack_require__("./src/images/isabellasPicture.jpg"),_isabellasPicture2=_interopRequireDefault(_isabellasPicture),_jacob=__webpack_require__("./src/images/jacob.jpg"),_jacob2=_interopRequireDefault(_jacob),_DanielMbogoh=__webpack_require__("./src/images/DanielMbogoh.jpg"),_DanielMbogoh2=_interopRequireDefault(_DanielMbogoh),_Popup=__webpack_require__("./src/components/Popup.jsx"),_Popup2=_interopRequireDefault(_Popup),_ScrollToTop=__webpack_require__("./src/components/ScrollToTop.jsx"),_ScrollToTop2=_interopRequireDefault(_ScrollToTop);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}!function(){var e=__webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;e&&e(module)}();var Team=function(_Component){function Team(){(0,_classCallCheck3.default)(this,Team);var e=(0,_possibleConstructorReturn3.default)(this,(Team.__proto__||(0,_getPrototypeOf2.default)(Team)).call(this));return e.handleCloseBioPopup=function(){e.setState({popup:"close"}),console.log("hello")},e.state={popup:"close"},e}return(0,_inherits3.default)(Team,_Component),(0,_createClass3.default)(Team,[{key:"handleBioPopup",value:function(){this.setState({popup:"open"})}},{key:"render",value:function(){return _react2.default.createElement("div",null,_react2.default.createElement("div",null,_react2.default.createElement(_ScrollToTop2.default,null),_react2.default.createElement(_NavigationBar2.default,null)),_react2.default.createElement("header",null,_react2.default.createElement("div",{className:"team"}),_react2.default.createElement("div",{className:"teamQuote"},_react2.default.createElement("div",{className:"primaryHeading"},"We believe everyone deserves a chance to learn"))),_react2.default.createElement("section",{id:"section-team"},_react2.default.createElement("div",{className:"teamHeading"},_react2.default.createElement("div",{className:"primaryHeading"},"Team")),_react2.default.createElement("div",{className:"row"},_react2.default.createElement("div",{className:"col-1-of-3"},_react2.default.createElement("div",{className:"member"},_react2.default.createElement("div",{className:"member__picture"},_react2.default.createElement("img",{className:"member__picture--img",src:_drjohn2.default})),_react2.default.createElement("div",{className:"member__information"},_react2.default.createElement("div",{className:"member__information--name"},"Dr. John Mucoki"),_react2.default.createElement("div",{className:"member__information--role"},"Program Manager & Dean of Students"))),_react2.default.createElement("div",{className:"member__bio"},_react2.default.createElement("a",{href:"#johnPopup",className:"member__bio--link"},"Bio")),_react2.default.createElement("div",{id:"johnPopup",className:"johnPopup"},_react2.default.createElement("div",{className:"johnPopup__content"},_react2.default.createElement("div",{className:"johnPopup__right"},_react2.default.createElement("a",{href:"#section-team",className:"johnPopup__close"},"×"),_react2.default.createElement("figure",{className:"johnPopup__right--shape"},_react2.default.createElement("img",{className:"johnPopup__right--img",src:_drjohn2.default,alt:"Vassiliki Daskalakis"}))),_react2.default.createElement("div",{className:"johnPopup__left"},"John is a Physician, humanitarian and liaison. He has great passion in uplifting the vulnerable in some of the most hard to reach and under-served communities in order for them  to get necessary skills to uplift their lives. Jijenge Academy came up as a result of the gap that John saw from high school graduates in the orphanages struggling to get college education or even jobs having no employability skills. He coordinates the program to ensure it runs smoothly, reaches out to potential local donors to support the students with basic needs, and scouts for internship opportunities as well as apprenticeship for the high school graduates.")))),_react2.default.createElement("div",{className:"col-1-of-3"},_react2.default.createElement("div",{className:"member"},_react2.default.createElement("div",{className:"member__picture"},_react2.default.createElement("img",{className:"member__picture--img",src:_vassia2.default})),_react2.default.createElement("div",{className:"member__information"},_react2.default.createElement("div",{className:"member__information--name"},"Vassiliki Daskalakis"),_react2.default.createElement("div",{className:"member__information--role"},"CEO"))),_react2.default.createElement("div",{className:"member__bio"},_react2.default.createElement("a",{href:"#popup",className:"member__bio--link"},"Bio")),_react2.default.createElement("div",{id:"popup",className:"popup"},_react2.default.createElement("div",{className:"popup__content"},_react2.default.createElement("div",{className:"popup__right"},_react2.default.createElement("a",{href:"#section-team",className:"popup__close"},"×"),_react2.default.createElement("figure",{className:"popup__right--shape"},_react2.default.createElement("img",{className:"popup__right--img",src:_vassia2.default,alt:"Vassiliki Daskalakis"}))),_react2.default.createElement("div",{className:"popup__left"},"My name is Vas, I'm a former JPM investment banker who moved from NY to Nairobi to raise Series A rounds for startups & SMEs across East Africa with I-Dev International. Jijenge Academy developed organically from our work with a local orphanage to stop Mogra's graduated high school students from returning back to the slums from which they were rescued. I've been on the ground in Nairobi for the past year, training students in employability and positioning Jijenge as a pipeline partner to feed our candidates to high growth Kenyan Tech Companies.")))),_react2.default.createElement("div",{className:"col-1-of-3"},_react2.default.createElement("div",{className:"member"},_react2.default.createElement("div",{className:"member__picture"},_react2.default.createElement("img",{className:"member__picture--img",src:_jacob2.default})),_react2.default.createElement("div",{className:"member__information"},_react2.default.createElement("div",{className:"member__information--name"},"Jacob Reisch"),_react2.default.createElement("div",{className:"member__information--role"},"Board Member"))),_react2.default.createElement("div",{className:"member__bio"},_react2.default.createElement("a",{href:"#jakePopup",className:"member__bio--link"},"Bio")),_react2.default.createElement("div",{id:"jakePopup",className:"jakePopup"},_react2.default.createElement("div",{className:"jakePopup__content"},_react2.default.createElement("div",{className:"jakePopup__right"},_react2.default.createElement("a",{href:"#section-team",className:"jakePopup__close"},"×"),_react2.default.createElement("figure",{className:"jakePopup__right--shape"},_react2.default.createElement("img",{className:"jakePopup__right--img",src:_jacob2.default,alt:"Jacob Reisch"}))),_react2.default.createElement("div",{className:"jakePopup__left"},"Jake Reisch is a Forbes 30 Under 30 entrepreneur and CEO of Eversound, a specialized audio technology for the 75+. Jake started building startups during his Junior year at Cornell University when he founded Party Headphones, an audio provider for the special events industry. Jake was selected as a Young Global Shaper by the World Economic Forum, was the 2016 SBA Young Entrepreneur of the Year for New England and is a member of Cornell University’s Entrepreneurship@Cornell Advisory Council."))))),_react2.default.createElement("div",{className:"row"},_react2.default.createElement("div",{className:"col-1-of-3"},_react2.default.createElement("div",{className:"member"},_react2.default.createElement("div",{className:"member__picture"},_react2.default.createElement("img",{className:"member__picture--img",src:_isabellasPicture2.default})),_react2.default.createElement("div",{className:"member__information"},_react2.default.createElement("div",{className:"member__information--name"},"Isabella Beltran"),_react2.default.createElement("div",{className:"member__information--role"},"Software Engineer"))),_react2.default.createElement("div",{className:"member__bio"},_react2.default.createElement("a",{href:"#isabellaPopup",className:"member__bio--link"},"Bio")),_react2.default.createElement("div",{id:"isabellaPopup",className:"isabellaPopup"},_react2.default.createElement("div",{className:"isabellaPopup__content"},_react2.default.createElement("div",{className:"isabellaPopup__right"},_react2.default.createElement("a",{href:"#section-team",className:"isabellaPopup__close"},"×"),_react2.default.createElement("figure",{className:"isabellaPopup__right--shape"},_react2.default.createElement("img",{className:"isabellaPopup__right--img",src:_isabellasPicture2.default,alt:"Isabella Beltran"}))),_react2.default.createElement("div",{className:"isabellaPopup__left"},"I’m a full-stack software engineer helping impactful organizations reach their highest potential.")))),_react2.default.createElement("div",{className:"col-1-of-3"},_react2.default.createElement("div",{className:"member"},_react2.default.createElement("div",{className:"member__picture"},_react2.default.createElement("img",{className:"member__picture--img",src:_sam2.default})),_react2.default.createElement("div",{className:"member__information"},_react2.default.createElement("div",{className:"member__information--name"},"Sam Langer"),_react2.default.createElement("div",{className:"member__information--role"},"Board Member"))),_react2.default.createElement("div",{className:"member__bio"},_react2.default.createElement("a",{href:"#samPopup",className:"member__bio--link"},"Bio")),_react2.default.createElement("div",{id:"samPopup",className:"samPopup"},_react2.default.createElement("div",{className:"samPopup__content"},_react2.default.createElement("div",{className:"samPopup__right"},_react2.default.createElement("a",{href:"#section-team",className:"samPopup__close"},"×"),_react2.default.createElement("figure",{className:"samPopup__right--shape"},_react2.default.createElement("img",{className:"samPopup__right--img",src:_sam2.default,alt:"Vassiliki Daskalakis"}))),_react2.default.createElement("div",{className:"samPopup__left"},"Sam Langer graduated from Cornell University with a degree in Psychology and Religious studies. Sam teaches meditation and is involved in organizing events in the New York area based around improving well being. Sam believes in a world where every human has the opportunity to live their highest dream.")))),_react2.default.createElement("div",{className:"col-1-of-3"},_react2.default.createElement("div",{className:"member"},_react2.default.createElement("div",{className:"member__picture"},_react2.default.createElement("img",{className:"member__picture--img",src:_DanielMbogoh2.default})),_react2.default.createElement("div",{className:"member__information"},_react2.default.createElement("div",{className:"member__information--name"},"Daniel Mbogoh"),_react2.default.createElement("div",{className:"member__information--role"},"Director of Communications"))),_react2.default.createElement("div",{className:"member__bio"},_react2.default.createElement("a",{href:"#danielPopup",className:"member__bio--link"},"Bio")),_react2.default.createElement("div",{id:"danielPopup",className:"danielPopup"},_react2.default.createElement("div",{className:"danielPopup__content"},_react2.default.createElement("div",{className:"danielPopup__right"},_react2.default.createElement("a",{href:"#section-team",className:"danielPopup__close"},"×"),_react2.default.createElement("figure",{className:"danielPopup__right--shape"},_react2.default.createElement("img",{className:"danielPopup__right--img",src:_DanielMbogoh2.default,alt:"Vassiliki Daskalakis"}))),_react2.default.createElement("div",{className:"danielPopup__left"},"Daniel Mbogoh is a community development professional with exceptional leadership skills and 10+ years of experience in implementing innovative community development programs. His commitment to a career in community development work has connected him to his passion—creating positive and meaningful change in people's lives. Currently, he is working as the programmes manager for Village Voices—a community-based organization working to empower rural women in Kenya.Village Voices programmes are focused on providing women with the knowledge, skills, tools and resources necessary to not only actively participate in, but grow to lead community development projects. Daniel is also the founder and director of FilmCity International, a nonprofit film organization dedicated to telling the stories of charitable and not-for-profit organizations, advocacy and educational groups, youth and women’s projects and other non-profit organizations in Kenya through film.")))))),_react2.default.createElement("footer",null,_react2.default.createElement(_Footer2.default,null)))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Team}(_react.Component),_default=Team;exports.default=_default,function(){var e=__webpack_require__("./node_modules/react-hot-loader/index.js").default,a=__webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;e&&(e.register(Team,"Team","/Users/isabellabeltran/Code/super-duper-sniffle/src/components/Team.jsx"),e.register(_default,"default","/Users/isabellabeltran/Code/super-duper-sniffle/src/components/Team.jsx"),a(module))}()}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./src/images/DanielMbogoh.jpg":function(e,a,t){e.exports=t.p+"images/DanielMbogoh.jpg"},"./src/images/drjohn.jpg":function(e,a,t){e.exports=t.p+"images/drjohn.jpg"},"./src/images/isabellasPicture.jpg":function(e,a,t){e.exports=t.p+"images/isabellasPicture.jpg"},"./src/images/jacob.jpg":function(e,a,t){e.exports=t.p+"images/jacob.jpg"},"./src/images/sam.jpg":function(e,a,t){e.exports=t.p+"images/sam.jpg"},"./src/images/vassia.jpg":function(e,a,t){e.exports=t.p+"images/vassia.jpg"}}]);