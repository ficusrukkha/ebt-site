(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(t,e,o){"use strict";o(40),o(28),o(46),o(21),o(71),o(53);var r={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"HTTP Error 404 (Not Found)",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}},methods:{clickRefresh:function(){console.log("refreshing page",window.location);var t=window.location,e=t.origin,o=t.pathname.split("/").slice(0,2),r="".concat(e).concat(o.join("/"));console.log("refreshing page",r),window.location.replace(r)}}},n=(o(335),o(19)),l=o(30),c=o.n(l),d=o(531),f=o(529),m=o(206),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",{attrs:{dark:""}},[o("h1",[t._v(t._s(t.$t("applicationError")))]),t._v(" "),o("details",[o("summary",[t._v("\n      "+t._s(t.$t("clickRefresh"))+"\n    ")]),t._v(" "),o("v-alert",{attrs:{value:"true",type:"error",color:"orange darken-4"}},[404===t.error.statusCode?o("div",[t._v("\n        "+t._s(t.pageNotFound)+"\n      ")]):o("div",[t._v("\n        HTTP Error "+t._s(t.error.statusCode)+"\n      ")])])],1),t._v(" "),o("div",{staticClass:"refresh"},[o("v-btn",{staticClass:"ebt-text-btn",attrs:{color:"orange darken-4",dark:""},on:{click:t.clickRefresh}},[t._v("\n      "+t._s(t.$t("refreshPage"))+"\n    ")])],1)])}),[],!1,null,"4642269f",null);e.a=component.exports;c()(component,{VAlert:d.a,VApp:f.a,VBtn:m.a})},205:function(t){t.exports=JSON.parse('{"name":"ebt-site","version":"1.0.129","private":true,"description":"Vue/Vuetify website framework for Early Buddhist Texts","scripts":{"dev":"nuxt","build":"scripts/build","build:nuxt":"nuxt build","build:nuxt-config":"scripts/build-nuxt-config","start":"nuxt start","generate":"scripts/nuxt-routes.js && nuxt generate","generate:deploy":"export BABEL_ENV=deploy; scripts/nuxt-routes.js && nuxt generate","push-action":"scripts/push-action","schedule-action":"scripts/schedule-action","deploy:branch":"push-dir --dir=dist --branch=gh-pages --cleanup","version:nuxt":"nuxt --version"},"dependencies":{"@nuxt/content":"^1.14.0","@nuxtjs/vuetify":"^1.11.3","ebt-vue":"^1.25.29","nuxt":"2.15.3"},"devDependencies":{"@mdi/js":"^5.8.55","express":"^4.17.1","json":"^10.0.0","memo-again":"^0.3.12","mocha":"^7.1.1","push-dir":"^0.4.1","sass-loader":"^10.1.1","scv-bilara":"^3.2.14","should":"^11.2.0"},"author":"Karl Lew","homepage":"https://github.com/ebt-site/ebt-site","license":"MIT"}')},213:function(t,e,o){"use strict";var r=o(85);e.a=function(t,e){r.EbtClient.default(t,e)}},247:function(t,e,o){var content=o(336);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(10).default)("bfa9903e",content,!0,{sourceMap:!1})},278:function(t,e,o){var content=o(503);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(10).default)("56b15182",content,!0,{sourceMap:!1})},298:function(t,e,o){"use strict";o(21);var r=o(85),n=o(5),l=o(205).version,c={BilaraWeb:o(113)},d={components:{EbtProcessing:r.EbtVue.EbtProcessing,EbtAppBar:r.EbtVue.EbtAppBar},data:function(){return{clipped:!1,mdiMenu:n.v,mdiGithub:n.p,mdiFileClock:n.j}},methods:{},mounted:function(){console.log("layouts/default mounted",this.$nuxt)},computed:{js:function(){return c},version:function(){return l},processing:function(){var t=this.$store;return t&&t.state.ebt.processing},ebtLang:function(){return this.$nuxt.context.env.ebt_lang},ebtSiteImage:function(){return this.$nuxt.context.env.ebt_site_image},ebtSiteTitle:function(){return this.$nuxt.context.env.ebt_site_title},githubUrl:function(){var t=this.$nuxt.context.env,e=t.ebt_repository,o=t.ebt_account;return"https://github.com/".concat(o,"/").concat(e)}}},f=(o(502),o(19)),m=o(30),h=o.n(m),x=o(529),v=o(530),w=o(206),k=o(532),y=o(204),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("v-app-bar",{attrs:{dark:"","clipped-left":t.clipped,fixed:"",app:"","hide-on-scroll":""}},[o("ebt-app-bar",{attrs:{title:t.ebtSiteTitle,imgUrl:t.ebtSiteImage,monolingual:t.ebtLang}},[o("v-btn",{staticClass:"ebt-icon-btn",attrs:{icon:"",title:"Github",href:t.githubUrl,target:"_blank"}},[o("v-icon",[t._v(t._s(t.mdiGithub))])],1)],1)],1),t._v(" "),o("div",{staticClass:"site-main"},[o("v-container",{staticClass:"site-content"},[o("nuxt")],1)],1),t._v(" "),o("ebt-processing")],1)}),[],!1,null,null,null);e.a=component.exports;h()(component,{VApp:x.a,VAppBar:v.a,VBtn:w.a,VContainer:k.a,VIcon:y.a})},305:function(t,e,o){o(306),t.exports=o(307)},326:function(t,e,o){"use strict";o.r(e),e.default=function(t){t.store;var e=t.redirect;console.log("redirecting to wiki/welcome"),e("/wiki/welcome")}},335:function(t,e,o){"use strict";o(247)},336:function(t,e,o){var r=o(9)(!1);r.push([t.i,".refresh[data-v-4642269f]{display:flex;justify-content:space-around;margin:1em}h1[data-v-4642269f]{font-size:20px}",""]),t.exports=r},363:function(t,e,o){var content=o(364);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(10).default)("22618b18",content,!0,{sourceMap:!1})},364:function(t,e,o){var r=o(9)(!1);r.push([t.i,':root{--ebt-text-width:45rem;--ebt-text-line-height:1.5;--ebt-sutta-title-font-size:20px;--ebt-division-title-font-size:12px;--ebt-header-margin-bottom:64px;--ebt-segment-margin-bottom:0.5em;--ebt-text-font-size:16px;--ebt-sc-sans-font:"Roboto","Skolar Sans PE","Noto Sans",sans-serif;--ebt-sc-serif-font:"Roboto","Skolar PE","Noto Serif","Skolar Sans PE","Noto Sans",serif;--ebt-sans-font:"Roboto","Helvetica Neue",Helvetica,Arial,sans-serif;--ebt-sc-sans-font:"Skolar Sans PE","Noto Sans",sans-serif;--ebt-sc-serif-font:"Skolar PE","Noto Serif","Skolar Sans PE","Noto Sans",serif;--ebt-focus-font-weight:600;--ebt-focus-color-light:#820;--ebt-focus-color-dark:#ff9f80;--ebt-focus-background-color-dark:#000;--ebt-focus-background-color-light:#fff;--ebt-background-color-light:#eee;--ebt-background-color-dark:#000;--ebt-settings-width:350px;--ebt-setting-width:330px;--ebt-label-color:rgba(0,0,0,0.6);--ebt-color-dark:#fff;--ebt-color-light:#222;--ebt-cursor-border:0.15em;--ebt-nav-font-size:0.85rem;--ebt-bottom-navigation-height:2rem}label{color:rgba(0,0,0,.6);color:var(--ebt-label-color)}.ebt-image{padding:.4em;border-radius:.2em;background:#fff;max-width:600px}.ebt-checkbox{padding-top:.2em;padding-bottom:.2em;padding-left:2em;margin-right:.5rem;text-indent:-1.8em}.ebt-checkbox label{color:rgba(0,0,0,.6);color:var(--ebt-label-color)}.ebt-checkbox input{margin-left:.4em;margin-right:.4em}.ebt-checkbox[focus-within]{box-shadow:0 0 3pt 2pt #820;box-shadow:0 0 3pt 2pt var(--ebt-focus-color-light)}.ebt-checkbox:focus-within{box-shadow:0 0 3pt 2pt #820;box-shadow:0 0 3pt 2pt var(--ebt-focus-color-light)}.ebt-summary{margin:2pt;padding-left:.4rem}.ebt-summary:focus{box-shadow:0 0 3pt 2pt #820;box-shadow:0 0 3pt 2pt var(--ebt-focus-color-light)}.ebt-select{padding:.5em;text-align:left;-webkit-appearance:auto}.ebt-select:focus{box-shadow:-1 0 3pt 2pt #820;box-shadow:-1 0 3pt 2pt var(--ebt-focus-color-light)}.ebt-select-container{display:flex;justify-content:space-between;align-items:baseline;padding-right:.5rem}.ebt-select-container select{max-width:290px}.ebt-text{line-height:1.5;line-height:var(--ebt-text-line-height);font-size:16px;font-size:var(--ebt-text-font-size);max-width:45rem;max-width:var(--ebt-text-width)}.ebt-root{font-style:italic}.ebt-root,.ebt-trans{font-family:"Roboto","Helvetica Neue",Helvetica,Arial,sans-serif;font-family:var(--ebt-sans-font)}.ebt-text-root{font-family:"Roboto","Helvetica Neue",Helvetica,Arial,sans-serif;font-family:var(--ebt-sans-font);padding-bottom:.3em;font-style:italic}.ebt-text-english,.ebt-text-root{max-width:45rem;max-width:var(--ebt-text-width);flex:1 1 50%}.ebt-text-english{font-family:"Skolar PE","Noto Serif","Skolar Sans PE","Noto Sans",serif;font-family:var(--ebt-sc-serif-font);font-size:95%}.ebt-text-english,.ebt-text-trans{padding-bottom:.7em;padding-left:.7em}.ebt-text-trans{max-width:45rem;max-width:var(--ebt-text-width);font-family:"Roboto","Helvetica Neue",Helvetica,Arial,sans-serif;font-family:var(--ebt-sans-font);flex:1 1 50%}.ebt-side-by-side{display:flex}.ebt-matched{color:#232323;font-weight:600;font-weight:var(--ebt-focus-font-weight)}.ebt-text-container .ebt-matched{cursor:pointer;text-decoration:underline}.ebt-text-container .ebt-matched:focus,.ebt-text-container .ebt-matched:hover{color:#820;color:var(--ebt-focus-color-light);-webkit-text-decoration-color:#820;text-decoration-color:#820;-webkit-text-decoration-color:var(--ebt-focus-color-light);text-decoration-color:var(--ebt-focus-color-light)}.ebt-text-btn{margin-left:1px;border-radius:4px;text-align:center;margin-bottom:1em;border:1pt solid #222;height:24px}.ebt-text-btn .v-btn__content{font-size:.85rem;font-size:var(--ebt-nav-font-size);text-transform:none;font-feature-settings:"smcp";font-variant:small-caps;font-weight:400}.ebt-text-btn:hover .v-btn__content,.ebt-text-btn[focus-within] .v-btn__content{font-weight:600;font-weight:var(--ebt-focus-font-weight)}.ebt-text-btn:focus-within .v-btn__content,.ebt-text-btn:hover .v-btn__content{font-weight:600;font-weight:var(--ebt-focus-font-weight)}.ebt-text-btn:hover,.ebt-text-btn[focus-within]{border:1pt solid;border-radius:0;text-decoration:underline}.ebt-text-btn:focus-within,.ebt-text-btn:hover{border:1pt solid;border-radius:0;text-decoration:underline}.theme--dark.ebt-text-btn:hover,.theme--dark.ebt-text-btn[focus-within]{color:#ff9f80!important;color:var(--ebt-focus-color-dark)!important;outline:1pt solid #ff9f80;outline:1pt solid var(--ebt-focus-color-dark)}.theme--dark.ebt-text-btn:focus-within,.theme--dark.ebt-text-btn:hover{color:#ff9f80!important;color:var(--ebt-focus-color-dark)!important;outline:1pt solid #ff9f80;outline:1pt solid var(--ebt-focus-color-dark)}.theme--light.ebt-text-btn:hover,.theme--light.ebt-text-btn[focus-within]{color:#820;color:var(--ebt-focus-color-light);outline:1pt solid #820;outline:1pt solid var(--ebt-focus-color-light)}.theme--light.ebt-text-btn:focus-within,.theme--light.ebt-text-btn:hover{color:#820;color:var(--ebt-focus-color-light);outline:1pt solid #820;outline:1pt solid var(--ebt-focus-color-light)}.ebt-inspire-row{margin:-.8em 0 .5em;display:flex;justify-content:center;width:100%}.ebt-icon-btn{margin:0 2px;border-radius:5px;border:none;min-width:2em!important;font-size:1rem!important}.ebt-icon-btn svg{bottom:0!important}.ebt-icon-btn:focus,.ebt-icon-btn:hover{outline:2px solid #820;outline:2px solid var(--ebt-focus-color-light)}.theme--dark.ebt-icon-btn:hover,.theme--dark.ebt-icon-btn[focus-within]{outline:2px solid #ff9f80;outline:2px solid var(--ebt-focus-color-dark);background-color:#000;background-color:var(--ebt-focus-background-color-dark)}.theme--dark.ebt-icon-btn:focus-within,.theme--dark.ebt-icon-btn:hover{outline:2px solid #ff9f80;outline:2px solid var(--ebt-focus-color-dark);background-color:#000;background-color:var(--ebt-focus-background-color-dark)}.theme--dark.ebt-icon-btn:hover svg,.theme--dark.ebt-icon-btn[focus-within] svg{color:#ff9f80;color:var(--ebt-focus-color-dark);background-color:#000;background-color:var(--ebt-focus-background-color-dark)}.theme--dark.ebt-icon-btn:focus-within svg,.theme--dark.ebt-icon-btn:hover svg{color:#ff9f80;color:var(--ebt-focus-color-dark);background-color:#000;background-color:var(--ebt-focus-background-color-dark)}summary:focus,summary:hover{border-radius:var(--ebt-focus-width);outline:#820;outline:var(--ebt-focus-color-light);box-shadow:inset var(--ebt-focus-width) var(--ebt-focus-width) var(--ebt-focus-width) 0-var(--ebt-focus-width) #820,inset 0-var(--ebt-focus-width) 0-var(--ebt-focus-width) var(--ebt-focus-width) 0-var(--ebt-focus-width) #820;box-shadow:inset var(--ebt-focus-width) var(--ebt-focus-width) var(--ebt-focus-width) 0-var(--ebt-focus-width) var(--ebt-focus-color-light),inset 0-var(--ebt-focus-width) 0-var(--ebt-focus-width) var(--ebt-focus-width) 0-var(--ebt-focus-width) var(--ebt-focus-color-light)}.ebt-settings{background-color:#eee;background-color:var(--ebt-background-color-light);color:#222;color:var(--ebt-color-light);z-index:1000}.ebt-settings.theme--dark{background-color:#000;background-color:var(--ebt-background-color-dark);color:#fff;color:var(--ebt-color-dark)}.ebt-settings-detail{max-width:350px;max-width:var(--ebt-settings-width);padding-left:1.2rem;padding-bottom:.5rem}.ebt-settings-title{width:330px;width:var(--ebt-setting-width);display:inline-flex;flex-flow:row nowrap;justify-content:space-between;align-items:baseline;margin-top:.1em;font-size:120%;font-weight:500;padding-right:.2rem}.ebt-settings-title:focus{border-color:#820;border-color:var(--ebt-focus-color-light);outline:1pt solid #820;outline:1pt solid var(--ebt-focus-color-light)}.ebt-settings-title .ebt-setting-icon,.ebt-settings-title .ebt-setting-icon svg{width:1rem;height:1rem}.ebt-settings-icon{background-color:--var(ebt-background-color-dark);color:--var(ebt-color-dark)}.ebt-settings-icon:focus>svg{background-color:--var(ebt-focus-color-dark);margin-bottom:5px}.ebt-more-menu{position:absolute;list-style:none;top:3em;right:0;min-width:23em;text-align:left;padding-left:0!important;padding-right:0!important;padding-top:.3em;padding-bottom:.3rem;border:1pt solid #555;border-radius:2pt;background-color:#eee;background-color:var(--ebt-background-color-light)}.ebt-scid{display:inline-block;font-size:xx-small;color:#888;margin-top:.6em;margin-left:.2em;padding-right:.5em;flex:1 1;min-width:8em}.ebt-scid:hover{color:#222;color:var(--ebt-color-light)}.ebt-sutta{margin-top:2em}.ebt-results{width:35rem}.ebt-result-summary{display:inline-flex;flex-flow:row wrap;justify-content:space-between;min-width:500px;max-width:550px}.ebt-result-details summary{max-width:520px}.ebt-result-details summary:focus{max-width:520px;box-shadow:0 0 3pt 2pt #820;box-shadow:0 0 3pt 2pt var(--ebt-focus-color-light)}.ebt-result-text{padding-left:1.15em;width:32rem}.ebt-result-icons{cursor:pointer;font-size:1.25rem;margin-top:-.4em;margin-bottom:.4em}.ebt-result-title{padding-left:3em;text-indent:-3em;padding-right:.5em}.ebt-division{text-align:center}.ebt-division div.ebt-text-root,.ebt-division div.ebt-text-trans{font-size:12px;font-size:var(--ebt-division-title-font-size)}.ebt-division-root{xfont-variant-caps:all-small-caps;font-feature-settings:normal;font-family:"Roboto","Helvetica Neue",Helvetica,Arial,sans-serif;font-family:var(--ebt-sans-font);font-style:italic}.ebt-division-trans{xfont-variant-caps:all-small-caps;font-feature-settings:normal;font-family:"Roboto","Helvetica Neue",Helvetica,Arial,sans-serif;font-family:var(--ebt-sans-font)}.ebt-sutta-title{font-size:20px;font-size:var(--ebt-sutta-title-font-size);text-align:center;font-weight:400;line-height:1.2em;margin-top:.5rem;letter-spacing:.02em}.ebt-sutta-title-root{font-feature-settings:normal;font-family:"Roboto","Helvetica Neue",Helvetica,Arial,sans-serif;font-family:var(--ebt-sans-font);font-style:italic}.ebt-sutta-title-root,.ebt-sutta-title-trans{xfont-variant-caps:small-caps;padding-left:1em;padding-right:1em}.ebt-sutta-title-trans{xfont-feature-settings:normal;font-family:var(--ebt-serif-font)}.ebt-text-container{font-size:16px;font-size:var(--ebt-text-font-size);line-height:1.5;line-height:var(--ebt-text-line-height);margin-left:auto;margin-right:auto}.ebt-sutta-cursor{border-left:.15em solid #820;border-left:var(--ebt-cursor-border) solid var(--ebt-focus-color-light);border-right:.15em solid #820;border-right:var(--ebt-cursor-border) solid var(--ebt-focus-color-light);border-radius:.15em;border-radius:var(--ebt-cursor-border);background-color:#fff;background-color:var(--ebt-focus-background-color-light)}.ebt-segment{margin-bottom:.5em;margin-bottom:var(--ebt-segment-margin-bottom);margin-left:auto;margin-right:auto;padding-left:.8em;padding-right:1em}.ebt-header{margin-bottom:64px;margin-bottom:var(--ebt-header-margin-bottom)}.ebt-author{margin-bottom:1em;text-align:center;font-size:smaller}.ebt-nav-sutta{display:flex;flex-flow:row noWrap;align-items:center;justify-content:space-between;width:100%}.ebt-nav-btn{min-width:5rem;background-color:transparent;border:none;margin-bottom:0}.ebt-nav-btn-disabled svg{min-width:5rem;color:hsla(0,0%,49.8%,.25)}.ebt-nav-app{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center;width:100%}.ebt-nav-title{margin-left:.5em;cursor:pointer}.ebt-nav-img{height:56px;border-bottom:1px solid transparent;border-top:1px solid transparent}.ebt-nav-app-title{justify-content:flex-start;cursor:pointer}.ebt-nav-app-icons,.ebt-nav-app-title{display:flex;flex-flow:row nowrap;align-items:center;width:50%}.ebt-nav-app-icons{justify-content:flex-end}.v-application a{text-decoration:none;color:#222;color:var(--ebt-color-light);background:transparent}.v-application a:hover{text-decoration:underline}.v-application .v-alert__content a{color:#fff;color:var(--ebt-color-dark)}.v-app-bar .v-toolbar__content{padding-left:0;padding-right:.5em}.v-btn:before{background-color:inherit!important}.theme--light.v-application{background-color:#eee!important;background-color:var(--ebt-background-color-light)!important}.theme--dark.v-sheet{background-color:#000!important;background-color:var(--ebt-background-color-dark)!important}.theme--light.v-sheet{background-color:#eee!important;background-color:var(--ebt-background-color-light)!important}.v-input__slot[focus-within]{background-color:#fff;background-color:var(--ebt-focus-background-color-light)}.v-input__slot:focus-within{background-color:#fff;background-color:var(--ebt-focus-background-color-light)}.v-btn:hover,.v-btn[focus-within]{background-color:#fff;background-color:var(--ebt-focus-background-color-light)}.v-btn:focus-within,.v-btn:hover{background-color:#fff;background-color:var(--ebt-focus-background-color-light)}.ebt-article{padding:1em 1em 20em;font-size:14px}.ebt-wiki-heading{display:flex;flex-flow:row wrap;align-items:flex-start}.ebt-wiki-heading img{margin-right:1em;height:175px;border-top-left-radius:.5em}.nuxt-content{max-width:55em}.nuxt-content a{color:#222!important;color:var(--ebt-color-light)!important;font-weight:700;text-decoration:none}.nuxt-content a:focus,.nuxt-content a:hover{color:#820!important;color:var(--ebt-focus-color-light)!important;text-decoration:underline}.nuxt-content nav{font-size:12px;margin-top:1em}.nuxt-content h1,h2,h3,h4,h5,h6{margin:36px 0 10px;font-weight:600}.nuxt-content h1,h2,h3,h4,h5{font-family:"Roboto","Helvetica Neue",Helvetica,Arial,sans-serif;font-family:var(--ebt-sans-font);margin-top:1.5em}.nuxt-content h1,h2,h3{display:block;border-bottom:1px solid #ccc;padding-bottom:5px}.nuxt-content h1{font-size:24px;margin-top:0}[dir=ltr] .nuxt-content h3{margin-left:0}[dir=ltr] .nuxt-content h3,[dir=rtl] .nuxt-content h3{margin-right:0}[dir=rtl] .nuxt-content h3{margin-left:0}.nuxt-content h3{font-size:1.17em;margin-top:1em;margin-bottom:1em}[dir=ltr] .nuxt-content p{margin-left:0}[dir=ltr] .nuxt-content p,[dir=rtl] .nuxt-content p{margin-right:0}[dir=rtl] .nuxt-content p{margin-left:0}.nuxt-content p{display:block;margin-top:1em;margin-bottom:1em}.nuxt-content table{border-collapse:collapse}.nuxt-content thead th{border-bottom:1pt solid #888}.nuxt-content td,.nuxt-content th{padding:.25em}.ebt-toc{margin:1em}.ebt-toc-item a{display:flex;flex-flow:row wrap;align-item:flex-start;margin-top:.4em}.ebt-toc-item-text{margin-top:.3em;margin-left:1em}.ebt-toc-item-subtitle{font-size:smaller;font-weight:400}.ebt-thumbnail{height:4em;width:5em;overflow:hidden;border-top-left-radius:.5em}.ebt-thumbnail img{height:4.5em}.ebt-article-link a{font-size:18px;font-weight:400}div.site-content{display:flex;flex-flow:column;align-items:center;padding-bottom:8em}blockquote,pre{border-left:3pt solid #ccc;padding-left:.5em}.theme--light.v-application kbd{background:rgba(33,37,41,.72941)!important}li{margin-top:.15em;margin-bottom:.15em}@media(max-width:599px){:root{--ebt-text-line-height:1.4;--ebt-sutta-title-font-size:18px;--ebt-header-margin-bottom:32px;--ebt-segment-margin-bottom:0.3em;--ebt-text-font-size:16px;--ebt-text-width:100%}.ebt-nav-app-title svg{display:none}.ebt-nav-app-title img{position:absolute;width:5pt}.ebt-nav-title{border-top-left-radius:.5em;padding-left:.3em}.nuxt-content{max-width:100%}.ebt-results{width:340px}.ebt-result-details summary{max-width:305px}.ebt-result-summary{min-width:240px}.ebt-result-text{max-width:290px}.ebt-side-by-side{flex-flow:column}}',""]),t.exports=r},365:function(t,e,o){var content=o(366);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(10).default)("663169f8",content,!0,{sourceMap:!1})},366:function(t,e,o){var r=o(9)(!1);r.push([t.i,':root{--ebt-text-width:45rem;--ebt-text-line-height:1.5;--ebt-sutta-title-font-size:20px;--ebt-division-title-font-size:12px;--ebt-header-margin-bottom:64px;--ebt-segment-margin-bottom:0.5em;--ebt-text-font-size:16px;--ebt-sc-sans-font:"Roboto","Skolar Sans PE","Noto Sans",sans-serif;--ebt-sc-serif-font:"Roboto","Skolar PE","Noto Serif","Skolar Sans PE","Noto Sans",serif;--ebt-sans-font:"Roboto","Helvetica Neue",Helvetica,Arial,sans-serif;--ebt-sc-sans-font:"Skolar Sans PE","Noto Sans",sans-serif;--ebt-sc-serif-font:"Skolar PE","Noto Serif","Skolar Sans PE","Noto Sans",serif;--ebt-focus-font-weight:600;--ebt-focus-color-light:#820;--ebt-focus-color-dark:#ff9f80;--ebt-focus-background-color-dark:#000;--ebt-focus-background-color-light:#fff;--ebt-background-color-light:#eee;--ebt-background-color-dark:#000;--ebt-settings-width:350px;--ebt-setting-width:330px;--ebt-label-color:rgba(0,0,0,0.6);--ebt-color-dark:#fff;--ebt-color-light:#222;--ebt-cursor-border:0.15em;--ebt-nav-font-size:0.85rem;--ebt-bottom-navigation-height:2rem}label{color:rgba(0,0,0,.6);color:var(--ebt-label-color)}.ebt-image{padding:.4em;border-radius:.2em;background:#fff;max-width:600px}.ebt-checkbox{padding-top:.2em;padding-bottom:.2em;padding-left:2em;margin-right:.5rem;text-indent:-1.8em}.ebt-checkbox label{color:rgba(0,0,0,.6);color:var(--ebt-label-color)}.ebt-checkbox input{margin-left:.4em;margin-right:.4em}.ebt-checkbox[focus-within]{box-shadow:0 0 3pt 2pt #820;box-shadow:0 0 3pt 2pt var(--ebt-focus-color-light)}.ebt-checkbox:focus-within{box-shadow:0 0 3pt 2pt #820;box-shadow:0 0 3pt 2pt var(--ebt-focus-color-light)}.ebt-summary{margin:2pt;padding-left:.4rem}.ebt-summary:focus{box-shadow:0 0 3pt 2pt #820;box-shadow:0 0 3pt 2pt var(--ebt-focus-color-light)}.ebt-select{padding:.5em;text-align:left;-webkit-appearance:auto}.ebt-select:focus{box-shadow:-1 0 3pt 2pt #820;box-shadow:-1 0 3pt 2pt var(--ebt-focus-color-light)}.ebt-select-container{display:flex;justify-content:space-between;align-items:baseline;padding-right:.5rem}.ebt-select-container select{max-width:290px}.ebt-text{line-height:1.5;line-height:var(--ebt-text-line-height);font-size:16px;font-size:var(--ebt-text-font-size);max-width:45rem;max-width:var(--ebt-text-width)}.ebt-root{font-style:italic}.ebt-root,.ebt-trans{font-family:"Roboto","Helvetica Neue",Helvetica,Arial,sans-serif;font-family:var(--ebt-sans-font)}.ebt-text-root{font-family:"Roboto","Helvetica Neue",Helvetica,Arial,sans-serif;font-family:var(--ebt-sans-font);padding-bottom:.3em;font-style:italic}.ebt-text-english,.ebt-text-root{max-width:45rem;max-width:var(--ebt-text-width);flex:1 1 50%}.ebt-text-english{font-family:"Skolar PE","Noto Serif","Skolar Sans PE","Noto Sans",serif;font-family:var(--ebt-sc-serif-font);font-size:95%}.ebt-text-english,.ebt-text-trans{padding-bottom:.7em;padding-left:.7em}.ebt-text-trans{max-width:45rem;max-width:var(--ebt-text-width);font-family:"Roboto","Helvetica Neue",Helvetica,Arial,sans-serif;font-family:var(--ebt-sans-font);flex:1 1 50%}.ebt-side-by-side{display:flex}.ebt-matched{color:#232323;font-weight:600;font-weight:var(--ebt-focus-font-weight)}.ebt-text-container .ebt-matched{cursor:pointer;text-decoration:underline}.ebt-text-container .ebt-matched:focus,.ebt-text-container .ebt-matched:hover{color:#820;color:var(--ebt-focus-color-light);-webkit-text-decoration-color:#820;text-decoration-color:#820;-webkit-text-decoration-color:var(--ebt-focus-color-light);text-decoration-color:var(--ebt-focus-color-light)}.ebt-text-btn{margin-left:1px;border-radius:4px;text-align:center;margin-bottom:1em;border:1pt solid #222;height:24px}.ebt-text-btn .v-btn__content{font-size:.85rem;font-size:var(--ebt-nav-font-size);text-transform:none;font-feature-settings:"smcp";font-variant:small-caps;font-weight:400}.ebt-text-btn:hover .v-btn__content,.ebt-text-btn[focus-within] .v-btn__content{font-weight:600;font-weight:var(--ebt-focus-font-weight)}.ebt-text-btn:focus-within .v-btn__content,.ebt-text-btn:hover .v-btn__content{font-weight:600;font-weight:var(--ebt-focus-font-weight)}.ebt-text-btn:hover,.ebt-text-btn[focus-within]{border:1pt solid;border-radius:0;text-decoration:underline}.ebt-text-btn:focus-within,.ebt-text-btn:hover{border:1pt solid;border-radius:0;text-decoration:underline}.theme--dark.ebt-text-btn:hover,.theme--dark.ebt-text-btn[focus-within]{color:#ff9f80!important;color:var(--ebt-focus-color-dark)!important;outline:1pt solid #ff9f80;outline:1pt solid var(--ebt-focus-color-dark)}.theme--dark.ebt-text-btn:focus-within,.theme--dark.ebt-text-btn:hover{color:#ff9f80!important;color:var(--ebt-focus-color-dark)!important;outline:1pt solid #ff9f80;outline:1pt solid var(--ebt-focus-color-dark)}.theme--light.ebt-text-btn:hover,.theme--light.ebt-text-btn[focus-within]{color:#820;color:var(--ebt-focus-color-light);outline:1pt solid #820;outline:1pt solid var(--ebt-focus-color-light)}.theme--light.ebt-text-btn:focus-within,.theme--light.ebt-text-btn:hover{color:#820;color:var(--ebt-focus-color-light);outline:1pt solid #820;outline:1pt solid var(--ebt-focus-color-light)}.ebt-inspire-row{margin:-.8em 0 .5em;display:flex;justify-content:center;width:100%}.ebt-icon-btn{margin:0 2px;border-radius:5px;border:none;min-width:2em!important;font-size:1rem!important}.ebt-icon-btn svg{bottom:0!important}.ebt-icon-btn:focus,.ebt-icon-btn:hover{outline:2px solid #820;outline:2px solid var(--ebt-focus-color-light)}.theme--dark.ebt-icon-btn:hover,.theme--dark.ebt-icon-btn[focus-within]{outline:2px solid #ff9f80;outline:2px solid var(--ebt-focus-color-dark);background-color:#000;background-color:var(--ebt-focus-background-color-dark)}.theme--dark.ebt-icon-btn:focus-within,.theme--dark.ebt-icon-btn:hover{outline:2px solid #ff9f80;outline:2px solid var(--ebt-focus-color-dark);background-color:#000;background-color:var(--ebt-focus-background-color-dark)}.theme--dark.ebt-icon-btn:hover svg,.theme--dark.ebt-icon-btn[focus-within] svg{color:#ff9f80;color:var(--ebt-focus-color-dark);background-color:#000;background-color:var(--ebt-focus-background-color-dark)}.theme--dark.ebt-icon-btn:focus-within svg,.theme--dark.ebt-icon-btn:hover svg{color:#ff9f80;color:var(--ebt-focus-color-dark);background-color:#000;background-color:var(--ebt-focus-background-color-dark)}summary:focus,summary:hover{border-radius:var(--ebt-focus-width);outline:#820;outline:var(--ebt-focus-color-light);box-shadow:inset var(--ebt-focus-width) var(--ebt-focus-width) var(--ebt-focus-width) 0-var(--ebt-focus-width) #820,inset 0-var(--ebt-focus-width) 0-var(--ebt-focus-width) var(--ebt-focus-width) 0-var(--ebt-focus-width) #820;box-shadow:inset var(--ebt-focus-width) var(--ebt-focus-width) var(--ebt-focus-width) 0-var(--ebt-focus-width) var(--ebt-focus-color-light),inset 0-var(--ebt-focus-width) 0-var(--ebt-focus-width) var(--ebt-focus-width) 0-var(--ebt-focus-width) var(--ebt-focus-color-light)}.ebt-settings{background-color:#eee;background-color:var(--ebt-background-color-light);color:#222;color:var(--ebt-color-light);z-index:1000}.ebt-settings.theme--dark{background-color:#000;background-color:var(--ebt-background-color-dark);color:#fff;color:var(--ebt-color-dark)}.ebt-settings-detail{max-width:350px;max-width:var(--ebt-settings-width);padding-left:1.2rem;padding-bottom:.5rem}.ebt-settings-title{width:330px;width:var(--ebt-setting-width);display:inline-flex;flex-flow:row nowrap;justify-content:space-between;align-items:baseline;margin-top:.1em;font-size:120%;font-weight:500;padding-right:.2rem}.ebt-settings-title:focus{border-color:#820;border-color:var(--ebt-focus-color-light);outline:1pt solid #820;outline:1pt solid var(--ebt-focus-color-light)}.ebt-settings-title .ebt-setting-icon,.ebt-settings-title .ebt-setting-icon svg{width:1rem;height:1rem}.ebt-settings-icon{background-color:--var(ebt-background-color-dark);color:--var(ebt-color-dark)}.ebt-settings-icon:focus>svg{background-color:--var(ebt-focus-color-dark);margin-bottom:5px}.ebt-more-menu{position:absolute;list-style:none;top:3em;right:0;min-width:23em;text-align:left;padding-left:0!important;padding-right:0!important;padding-top:.3em;padding-bottom:.3rem;border:1pt solid #555;border-radius:2pt;background-color:#eee;background-color:var(--ebt-background-color-light)}.ebt-scid{display:inline-block;font-size:xx-small;color:#888;margin-top:.6em;margin-left:.2em;padding-right:.5em;flex:1 1;min-width:8em}.ebt-scid:hover{color:#222;color:var(--ebt-color-light)}.ebt-sutta{margin-top:2em}.ebt-results{width:35rem}.ebt-result-summary{display:inline-flex;flex-flow:row wrap;justify-content:space-between;min-width:500px;max-width:550px}.ebt-result-details summary{max-width:520px}.ebt-result-details summary:focus{max-width:520px;box-shadow:0 0 3pt 2pt #820;box-shadow:0 0 3pt 2pt var(--ebt-focus-color-light)}.ebt-result-text{padding-left:1.15em;width:32rem}.ebt-result-icons{cursor:pointer;font-size:1.25rem;margin-top:-.4em;margin-bottom:.4em}.ebt-result-title{padding-left:3em;text-indent:-3em;padding-right:.5em}.ebt-division{text-align:center}.ebt-division div.ebt-text-root,.ebt-division div.ebt-text-trans{font-size:12px;font-size:var(--ebt-division-title-font-size)}.ebt-division-root{xfont-variant-caps:all-small-caps;font-feature-settings:normal;font-family:"Roboto","Helvetica Neue",Helvetica,Arial,sans-serif;font-family:var(--ebt-sans-font);font-style:italic}.ebt-division-trans{xfont-variant-caps:all-small-caps;font-feature-settings:normal;font-family:"Roboto","Helvetica Neue",Helvetica,Arial,sans-serif;font-family:var(--ebt-sans-font)}.ebt-sutta-title{font-size:20px;font-size:var(--ebt-sutta-title-font-size);text-align:center;font-weight:400;line-height:1.2em;margin-top:.5rem;letter-spacing:.02em}.ebt-sutta-title-root{font-feature-settings:normal;font-family:"Roboto","Helvetica Neue",Helvetica,Arial,sans-serif;font-family:var(--ebt-sans-font);font-style:italic}.ebt-sutta-title-root,.ebt-sutta-title-trans{xfont-variant-caps:small-caps;padding-left:1em;padding-right:1em}.ebt-sutta-title-trans{xfont-feature-settings:normal;font-family:var(--ebt-serif-font)}.ebt-text-container{font-size:16px;font-size:var(--ebt-text-font-size);line-height:1.5;line-height:var(--ebt-text-line-height);margin-left:auto;margin-right:auto}.ebt-sutta-cursor{border-left:.15em solid #820;border-left:var(--ebt-cursor-border) solid var(--ebt-focus-color-light);border-right:.15em solid #820;border-right:var(--ebt-cursor-border) solid var(--ebt-focus-color-light);border-radius:.15em;border-radius:var(--ebt-cursor-border);background-color:#fff;background-color:var(--ebt-focus-background-color-light)}.ebt-segment{margin-bottom:.5em;margin-bottom:var(--ebt-segment-margin-bottom);margin-left:auto;margin-right:auto;padding-left:.8em;padding-right:1em}.ebt-header{margin-bottom:64px;margin-bottom:var(--ebt-header-margin-bottom)}.ebt-author{margin-bottom:1em;text-align:center;font-size:smaller}.ebt-nav-sutta{display:flex;flex-flow:row noWrap;align-items:center;justify-content:space-between;width:100%}.ebt-nav-btn{min-width:5rem;background-color:transparent;border:none;margin-bottom:0}.ebt-nav-btn-disabled svg{min-width:5rem;color:hsla(0,0%,49.8%,.25)}.ebt-nav-app{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center;width:100%}.ebt-nav-title{margin-left:.5em;cursor:pointer}.ebt-nav-img{height:56px;border-bottom:1px solid transparent;border-top:1px solid transparent}.ebt-nav-app-title{justify-content:flex-start;cursor:pointer}.ebt-nav-app-icons,.ebt-nav-app-title{display:flex;flex-flow:row nowrap;align-items:center;width:50%}.ebt-nav-app-icons{justify-content:flex-end}.v-application a{text-decoration:none;color:#222;color:var(--ebt-color-light);background:transparent}.v-application a:hover{text-decoration:underline}.v-application .v-alert__content a{color:#fff;color:var(--ebt-color-dark)}.v-app-bar .v-toolbar__content{padding-left:0;padding-right:.5em}.v-btn:before{background-color:inherit!important}.theme--light.v-application{background-color:#eee!important;background-color:var(--ebt-background-color-light)!important}.theme--dark.v-sheet{background-color:#000!important;background-color:var(--ebt-background-color-dark)!important}.theme--light.v-sheet{background-color:#eee!important;background-color:var(--ebt-background-color-light)!important}.v-input__slot[focus-within]{background-color:#fff;background-color:var(--ebt-focus-background-color-light)}.v-input__slot:focus-within{background-color:#fff;background-color:var(--ebt-focus-background-color-light)}.v-btn:hover,.v-btn[focus-within]{background-color:#fff;background-color:var(--ebt-focus-background-color-light)}.v-btn:focus-within,.v-btn:hover{background-color:#fff;background-color:var(--ebt-focus-background-color-light)}.ebt-article{padding:1em 1em 20em;font-size:14px}.ebt-wiki-heading{display:flex;flex-flow:row wrap;align-items:flex-start}.ebt-wiki-heading img{margin-right:1em;height:175px;border-top-left-radius:.5em}.nuxt-content{max-width:55em}.nuxt-content a{color:#222!important;color:var(--ebt-color-light)!important;font-weight:700;text-decoration:none}.nuxt-content a:focus,.nuxt-content a:hover{color:#820!important;color:var(--ebt-focus-color-light)!important;text-decoration:underline}.nuxt-content nav{font-size:12px;margin-top:1em}.nuxt-content h1,h2,h3,h4,h5,h6{margin:36px 0 10px;font-weight:600}.nuxt-content h1,h2,h3,h4,h5{font-family:"Roboto","Helvetica Neue",Helvetica,Arial,sans-serif;font-family:var(--ebt-sans-font);margin-top:1.5em}.nuxt-content h1,h2,h3{display:block;border-bottom:1px solid #ccc;padding-bottom:5px}.nuxt-content h1{font-size:24px;margin-top:0}[dir=ltr] .nuxt-content h3{margin-left:0}[dir=ltr] .nuxt-content h3,[dir=rtl] .nuxt-content h3{margin-right:0}[dir=rtl] .nuxt-content h3{margin-left:0}.nuxt-content h3{font-size:1.17em;margin-top:1em;margin-bottom:1em}[dir=ltr] .nuxt-content p{margin-left:0}[dir=ltr] .nuxt-content p,[dir=rtl] .nuxt-content p{margin-right:0}[dir=rtl] .nuxt-content p{margin-left:0}.nuxt-content p{display:block;margin-top:1em;margin-bottom:1em}.nuxt-content table{border-collapse:collapse}.nuxt-content thead th{border-bottom:1pt solid #888}.nuxt-content td,.nuxt-content th{padding:.25em}.ebt-toc{margin:1em}.ebt-toc-item a{display:flex;flex-flow:row wrap;align-item:flex-start;margin-top:.4em}.ebt-toc-item-text{margin-top:.3em;margin-left:1em}.ebt-toc-item-subtitle{font-size:smaller;font-weight:400}.ebt-thumbnail{height:4em;width:5em;overflow:hidden;border-top-left-radius:.5em}.ebt-thumbnail img{height:4.5em}.ebt-article-link a{font-size:18px;font-weight:400}div.site-content{display:flex;flex-flow:column;align-items:center;padding-bottom:8em}blockquote,pre{border-left:3pt solid #ccc;padding-left:.5em}.theme--light.v-application kbd{background:rgba(33,37,41,.72941)!important}li{margin-top:.15em;margin-bottom:.15em}@media(max-width:599px){:root{--ebt-text-line-height:1.4;--ebt-sutta-title-font-size:18px;--ebt-header-margin-bottom:32px;--ebt-segment-margin-bottom:0.3em;--ebt-text-font-size:16px;--ebt-text-width:100%}.ebt-nav-app-title svg{display:none}.ebt-nav-app-title img{position:absolute;width:5pt}.ebt-nav-title{border-top-left-radius:.5em;padding-left:.3em}.nuxt-content{max-width:100%}.ebt-results{width:340px}.ebt-result-details summary{max-width:305px}.ebt-result-summary{min-width:240px}.ebt-result-text{max-width:290px}.ebt-side-by-side{flex-flow:column}}',""]),t.exports=r},502:function(t,e,o){"use strict";o(278)},503:function(t,e,o){var r=o(9)(!1);r.push([t.i,".site-content{margin-top:90px;padding:0 0 60px}",""]),t.exports=r},514:function(t,e,o){"use strict";o.r(e),o.d(e,"actions",(function(){return n})),o.d(e,"getters",(function(){return l})),o.d(e,"mutations",(function(){return c})),o.d(e,"state",(function(){return d}));var r=o(85),n=r.EbtStore.actions,l=r.EbtStore.getters,c=r.EbtStore.mutations,d=r.EbtStore.state}},[[305,14,1,15]]]);