/*! For license information please see photos-src_mixins_GridConfig_js-src_components_EmptyContent_vue-src_components_FolderTagPreview_vue--cac48e.js.LICENSE.txt */
(self.webpackChunkphotos=self.webpackChunkphotos||[]).push([["src_mixins_GridConfig_js-src_components_EmptyContent_vue-src_components_FolderTagPreview_vue--cac48e"],{16897:n=>{n.exports={sizes:{400:{marginTop:66,marginW:8,count:3,gap:8},700:{marginTop:66,marginW:8,count:4,gap:8},1024:{marginTop:66,marginW:44,count:5,gap:8},1280:{marginTop:66,marginW:44,count:4,gap:8},1440:{marginTop:88,marginW:66,count:5,gap:8},1600:{marginTop:88,marginW:66,count:6,gap:8},2048:{marginTop:88,marginW:66,count:7,gap:8},2560:{marginTop:88,marginW:88,count:8,gap:8},3440:{marginTop:88,marginW:88,count:9,gap:8},max:{marginTop:88,marginW:88,count:10,gap:8}}}},85324:(n,t,a)=>{"use strict";a.d(t,{Z:()=>s});var e=a(20144),i=a(16897);const o=new e.ZP({data:function(){return{gridConfig:i.sizes.max}},watch:{gridConfig:function(n){this.$emit("changed",n)}},created:function(){window.addEventListener("resize",this.handleWindowResize),this.handleWindowResize()},beforeDestroy:function(){window.removeEventListener("resize",this.handleWindowResize)},methods:{handleWindowResize:function(){var n=Object.keys(i.sizes).find((function(n){return n>document.documentElement.clientWidth}));this.gridConfig=i.sizes[n]||i.sizes.max}}});var r=a(25108);const s={data:function(){return{gridConfig:{}}},created:function(){var n=this;o.$on("changed",(function(t){n.gridConfig=t})),r.debug("[".concat("photos","]"),"Grid config",Object.assign({},o.gridConfig)),this.gridConfig=o.gridConfig},beforeDestroy:function(){o.$off("changed",this.gridConfig)}}},86228:(n,t,a)=>{"use strict";a.d(t,{Z:()=>s});var e=a(87537),i=a.n(e),o=a(23645),r=a.n(o)()(i());r.push([n.id,'.emptycontent{grid-column:1/-1;margin-top:20vh}.illustration{min-width:200px;max-width:15%;width:300px;margin:auto;margin-bottom:20px;position:relative}.illustration svg{width:100%;height:100%;max-height:40vh}.illustration [fill*="6c63ff"]{fill:var(--color-primary-element)}',"",{version:3,sources:["webpack://./src/components/EmptyContent.vue"],names:[],mappings:"AAmHA,cAEC,gBAAA,CACA,eAAA,CAGD,cACC,eAAA,CACA,aAAA,CACA,WAAA,CACA,WAAA,CACA,kBAAA,CACA,iBAAA,CAEA,kBACC,UAAA,CACA,WAAA,CACA,eAAA,CAID,+BACC,iCAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.emptycontent {\n\t// span all the available columns\n\tgrid-column: 1/-1;\n\tmargin-top: 20vh;\n}\n\n.illustration {\n\tmin-width: 200px;\n\tmax-width: 15%;\n\twidth: 300px;\n\tmargin: auto;\n\tmargin-bottom: 20px;\n\tposition: relative;\n\n\tsvg {\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tmax-height: 40vh;\n\t}\n\n\t// change colour of illustration\n\t[fill*=\'6c63ff\'] {\n\t\tfill: var(--color-primary-element);\n\t}\n}\n'],sourceRoot:""}]);const s=r},10369:(n,t,a)=>{"use strict";a.d(t,{Z:()=>s});var e=a(87537),i=a.n(e),o=a(23645),r=a.n(o)()(i());r.push([n.id,".file[data-v-b8db2226],.folder[data-v-b8db2226]{position:relative;display:flex;align-items:center;justify-content:center;-webkit-user-select:none;user-select:none;border-radius:var(--border-radius);overflow:hidden}.file .cover[data-v-b8db2226],.folder .cover[data-v-b8db2226]{z-index:2;width:100%;padding-bottom:100%;transition:opacity var(--animation-quick) ease-in-out;opacity:0;background-color:var(--color-main-text)}.file.active .cover[data-v-b8db2226],.file:active .cover[data-v-b8db2226],.file:hover .cover[data-v-b8db2226],.file:focus .cover[data-v-b8db2226],.folder.active .cover[data-v-b8db2226],.folder:active .cover[data-v-b8db2226],.folder:hover .cover[data-v-b8db2226],.folder:focus .cover[data-v-b8db2226]{opacity:.3}.file--clear.active .cover[data-v-b8db2226],.file--clear:active .cover[data-v-b8db2226],.file--clear:hover .cover[data-v-b8db2226],.file--clear:focus .cover[data-v-b8db2226],.folder--clear.active .cover[data-v-b8db2226],.folder--clear:active .cover[data-v-b8db2226],.folder--clear:hover .cover[data-v-b8db2226],.folder--clear:focus .cover[data-v-b8db2226]{opacity:.1}.fade-enter-active[data-v-b8db2226],.fade-leave-active[data-v-b8db2226]{transition:opacity var(--animation-quick) ease-in-out}.fade-enter[data-v-b8db2226],.fade-leave-to[data-v-b8db2226]{opacity:0}.folder-content[data-v-b8db2226]{position:absolute;display:grid;width:100%;height:100%}.folder-content--grid-1[data-v-b8db2226]{grid-template-columns:1fr;grid-template-rows:1fr}.folder-content--grid-2[data-v-b8db2226]{grid-template-columns:1fr;grid-template-rows:1fr 1fr}.folder-content--grid-3[data-v-b8db2226]{grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr}.folder-content--grid-3 img[data-v-b8db2226]:first-child{grid-column:span 2}.folder-content--grid-4[data-v-b8db2226]{grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr}.folder-content img[data-v-b8db2226]{width:100%;height:100%;object-fit:cover}.folder-name[data-v-b8db2226]{position:absolute;z-index:3;display:flex;overflow:hidden;flex-direction:column;width:100%;height:100%;transition:opacity var(--animation-quick) ease-in-out;opacity:1}.folder-name__icon[data-v-b8db2226]{height:40%;margin-top:calc(30% - 1rem / 2);background-size:40%}.folder-name__name[data-v-b8db2226]{overflow:hidden;height:1rem;padding:0 10px;text-align:center;white-space:nowrap;text-overflow:ellipsis;color:var(--color-main-background);text-shadow:0 0 8px var(--color-main-text);font-size:1rem;line-height:1rem}.folder--clear .folder-name__icon[data-v-b8db2226]{opacity:.3}.folder--clear .folder-name__name[data-v-b8db2226]{color:var(--color-main-text);text-shadow:0 0 8px var(--color-main-background)}.folder:not(.folder--clear) .cover[data-v-b8db2226]{opacity:.3}.folder:not(.folder--clear):active .folder-name[data-v-b8db2226],.folder:not(.folder--clear):active .cover[data-v-b8db2226],.folder:not(.folder--clear):hover .folder-name[data-v-b8db2226],.folder:not(.folder--clear):hover .cover[data-v-b8db2226],.folder:not(.folder--clear):focus .folder-name[data-v-b8db2226],.folder:not(.folder--clear):focus .cover[data-v-b8db2226]{opacity:0}","",{version:3,sources:["webpack://./src/mixins/FileFolder.scss","webpack://./src/components/FolderTagPreview.vue"],names:[],mappings:"AAsBA,gDAEC,iBAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,wBAAA,CAAA,gBAAA,CACA,kCAAA,CACA,eAAA,CAEA,8DACC,SAAA,CAMA,UAAA,CACA,mBAAA,CACA,qDAAA,CACA,SAAA,CACA,uCAAA,CAOA,4SACC,UAAA,CAQD,oWACC,UAAA,CAKH,wEACC,qDAAA,CAGD,6DACC,SAAA,CCkFD,iCACC,iBAAA,CACA,YAAA,CACA,UAAA,CACA,WAAA,CAEA,yCACC,yBAAA,CACA,sBAAA,CAED,yCACC,yBAAA,CACA,0BAAA,CAED,yCACC,6BAAA,CACA,0BAAA,CACA,yDACC,kBAAA,CAGF,yCACC,6BAAA,CACA,0BAAA,CAED,qCACC,UAAA,CACA,WAAA,CAEA,gBAAA,CAMF,8BACC,iBAAA,CACA,SAAA,CACA,YAAA,CACA,eAAA,CACA,qBAAA,CACA,UAAA,CACA,WAAA,CACA,qDAAA,CACA,SAAA,CACA,oCACC,UAAA,CACA,+BAAA,CACA,mBAAA,CAED,oCACC,eAAA,CACA,WAnBY,CAoBZ,cAAA,CACA,iBAAA,CACA,kBAAA,CACA,sBAAA,CACA,kCAAA,CACA,0CAAA,CACA,cA1BY,CA2BZ,gBA3BY,CAmCZ,mDACC,UAAA,CAED,mDACC,4BAAA,CACA,gDAAA,CAQD,oDACC,UAAA,CAQA,gXAEC,SAAA",sourcesContent:["/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license AGPL-3.0-or-later\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n\n.file,\n.folder {\n\tposition: relative;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tuser-select: none;\n\tborder-radius: var(--border-radius);\n\toverflow: hidden;\n\n\t.cover {\n\t\tz-index: 2;\n\t\t// We want nice squares despite anything that is in it.\n\t\t// The .cover is what makes the exact square size of the grid.\n\t\t// We use padding-bottom because padding with percentage\n\t\t// always refers to the width. And we only want to fit\n\t\t// the css grid's width.\n\t\twidth: 100%;\n\t\tpadding-bottom: 100%;\n\t\ttransition: opacity var(--animation-quick) ease-in-out;\n\t\topacity: 0;\n\t\tbackground-color: var(--color-main-text);\n\t}\n\n\t&.active,\n\t&:active,\n\t&:hover,\n\t&:focus {\n\t\t.cover {\n\t\t\topacity: .3;\n\t\t}\n\t}\n\n\t&--clear.active,\n\t&--clear:active,\n\t&--clear:hover,\n\t&--clear:focus {\n\t\t.cover {\n\t\t\topacity: .1;\n\t\t}\n\t}\n}\n\n.fade-enter-active, .fade-leave-active {\n\ttransition: opacity var(--animation-quick) ease-in-out;\n}\n\n.fade-enter, .fade-leave-to {\n\topacity: 0;\n}\n",'$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import \'../mixins/FileFolder\';\n\n.folder-content {\n\tposition: absolute;\n\tdisplay: grid;\n\twidth: 100%;\n\theight: 100%;\n\t// folder layout if less than 4 pictures\n\t&--grid-1 {\n\t\tgrid-template-columns: 1fr;\n\t\tgrid-template-rows: 1fr;\n\t}\n\t&--grid-2 {\n\t\tgrid-template-columns: 1fr;\n\t\tgrid-template-rows: 1fr 1fr;\n\t}\n\t&--grid-3 {\n\t\tgrid-template-columns: 1fr 1fr;\n\t\tgrid-template-rows: 1fr 1fr;\n\t\timg:first-child {\n\t\t\tgrid-column: span 2;\n\t\t}\n\t}\n\t&--grid-4 {\n\t\tgrid-template-columns: 1fr 1fr;\n\t\tgrid-template-rows: 1fr 1fr;\n\t}\n\timg {\n\t\twidth: 100%;\n\t\theight: 100%;\n\n\t\tobject-fit: cover;\n\t}\n}\n\n$name-height: 1rem;\n\n.folder-name {\n\tposition: absolute;\n\tz-index: 3;\n\tdisplay: flex;\n\toverflow: hidden;\n\tflex-direction: column;\n\twidth: 100%;\n\theight: 100%;\n\ttransition: opacity var(--animation-quick) ease-in-out;\n\topacity: 1;\n\t&__icon {\n\t\theight: 40%;\n\t\tmargin-top: calc(30% - #{$name-height} / 2); // center name+icon\n\t\tbackground-size: 40%;\n\t}\n\t&__name {\n\t\toverflow: hidden;\n\t\theight: $name-height;\n\t\tpadding: 0 10px;\n\t\ttext-align: center;\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\t\tcolor: var(--color-main-background);\n\t\ttext-shadow: 0 0 8px var(--color-main-text);\n\t\tfont-size: $name-height;\n\t\tline-height: $name-height;\n\t}\n}\n\n// Cover management empty/full\n.folder {\n\t// if no img, let\'s display the folder icon as default black\n\t&--clear {\n\t\t.folder-name__icon {\n\t\t\topacity: .3;\n\t\t}\n\t\t.folder-name__name {\n\t\t\tcolor: var(--color-main-text);\n\t\t\ttext-shadow: 0 0 8px var(--color-main-background);\n\t\t}\n\t}\n\n\t// show the cover as background\n\t// if  there are pictures in it\n\t// so we can sho the folder+name above it\n\t&:not(.folder--clear) {\n\t\t.cover {\n\t\t\topacity: .3;\n\t\t}\n\n\t\t// hide everything but pictures\n\t\t// on hover/active/focus\n\t\t&:active,\n\t\t&:hover,\n\t\t&:focus {\n\t\t\t.folder-name,\n\t\t\t.cover {\n\t\t\t\topacity: 0;\n\t\t\t}\n\t\t}\n\t}\n}\n\n'],sourceRoot:""}]);const s=r},56222:(n,t,a)=>{"use strict";a.d(t,{Z:()=>s});var e=a(87537),i=a.n(e),o=a(23645),r=a.n(o)()(i());r.push([n.id,".icon-confirm[data-v-080cb7fa]{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.photos-navigation[data-v-080cb7fa]{display:flex;position:block;height:44px;padding:0 40px;align-items:center;max-width:100%}.photos-navigation__title[data-v-080cb7fa]{margin:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.photos-navigation__share[data-v-080cb7fa]{margin-left:10px}.photos-navigation__back[data-v-080cb7fa],.photos-navigation__share[data-v-080cb7fa]{flex-grow:0;flex-shrink:0}@media(min-width: 0px)and (max-width: 400px){.photos-navigation[data-v-080cb7fa]{margin-top:-7.3333333333px}.photos-navigation--root .photos-navigation__title[data-v-080cb7fa]{padding-left:-36px}}@media(min-width: 400px)and (max-width: 700px){.photos-navigation[data-v-080cb7fa]{margin-top:-7.3333333333px}.photos-navigation--root .photos-navigation__title[data-v-080cb7fa]{padding-left:-36px}}@media(min-width: 700px)and (max-width: 1024px){.photos-navigation[data-v-080cb7fa]{margin-top:-7.3333333333px}.photos-navigation__back[data-v-080cb7fa]{margin:0 0px}.photos-navigation--root .photos-navigation__title[data-v-080cb7fa]{padding-left:0px}}@media(min-width: 1024px)and (max-width: 1280px){.photos-navigation[data-v-080cb7fa]{margin-top:-7.3333333333px}.photos-navigation__back[data-v-080cb7fa]{margin:0 0px}.photos-navigation--root .photos-navigation__title[data-v-080cb7fa]{padding-left:0px}}@media(min-width: 1280px)and (max-width: 1440px){.photos-navigation[data-v-080cb7fa]{margin-top:0px}.photos-navigation__back[data-v-080cb7fa]{margin:0 11px}.photos-navigation--root .photos-navigation__title[data-v-080cb7fa]{padding-left:22px}}@media(min-width: 1440px)and (max-width: 1600px){.photos-navigation[data-v-080cb7fa]{margin-top:0px}.photos-navigation__back[data-v-080cb7fa]{margin:0 11px}.photos-navigation--root .photos-navigation__title[data-v-080cb7fa]{padding-left:22px}}@media(min-width: 1600px)and (max-width: 2048px){.photos-navigation[data-v-080cb7fa]{margin-top:0px}.photos-navigation__back[data-v-080cb7fa]{margin:0 11px}.photos-navigation--root .photos-navigation__title[data-v-080cb7fa]{padding-left:22px}}@media(min-width: 2048px)and (max-width: 2560px){.photos-navigation[data-v-080cb7fa]{margin-top:0px}.photos-navigation__back[data-v-080cb7fa]{margin:0 22px}.photos-navigation--root .photos-navigation__title[data-v-080cb7fa]{padding-left:44px}}@media(min-width: 2560px)and (max-width: 3440px){.photos-navigation[data-v-080cb7fa]{margin-top:0px}.photos-navigation__back[data-v-080cb7fa]{margin:0 22px}.photos-navigation--root .photos-navigation__title[data-v-080cb7fa]{padding-left:44px}}@media(min-width: 3440px){.photos-navigation[data-v-080cb7fa]{margin-top:0px}.photos-navigation__back[data-v-080cb7fa]{margin:0 22px}.photos-navigation--root .photos-navigation__title[data-v-080cb7fa]{padding-left:44px}}","",{version:3,sources:["webpack://./src/components/Navigation.vue","webpack://./src/mixins/GridSizes.scss"],names:[],mappings:"AAoJA,+BACC,gCAAA,CAAA,wBAAA,CAGD,oCACC,YAAA,CACA,cAAA,CACA,WAAA,CACA,cAAA,CACA,kBAAA,CACA,cAAA,CACA,2CACC,QAAA,CACA,kBAAA,CACA,eAAA,CACA,sBAAA,CAED,2CACC,gBAAA,CAED,qFAEC,WAAA,CACA,aAAA,CCvIC,6CDoHH,oCAyBE,0BAAA,CAOA,oEACC,kBAAA,CAAA,CCrJA,+CDoHH,oCAyBE,0BAAA,CAOA,oEACC,kBAAA,CAAA,CCrJA,gDDoHH,oCAyBE,0BAAA,CAGC,0CACC,YAAA,CAGF,oEACC,gBAAA,CAAA,CCrJA,iDDoHH,oCAyBE,0BAAA,CAGC,0CACC,YAAA,CAGF,oEACC,gBAAA,CAAA,CCrJA,iDDoHH,oCAyBE,cAAA,CAGC,0CACC,aAAA,CAGF,oEACC,iBAAA,CAAA,CCrJA,iDDoHH,oCAyBE,cAAA,CAGC,0CACC,aAAA,CAGF,oEACC,iBAAA,CAAA,CCrJA,iDDoHH,oCAyBE,cAAA,CAGC,0CACC,aAAA,CAGF,oEACC,iBAAA,CAAA,CCrJA,iDDoHH,oCAyBE,cAAA,CAGC,0CACC,aAAA,CAGF,oEACC,iBAAA,CAAA,CCrJA,iDDoHH,oCAyBE,cAAA,CAGC,0CACC,aAAA,CAGF,oEACC,iBAAA,CAAA,CCzJA,0BDwHH,oCAyBE,cAAA,CAGC,0CACC,aAAA,CAGF,oEACC,iBAAA,CAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@use \'sass:math\';\n@import \'../mixins/GridSizes\';\n\n.icon-confirm {\n\ttransform: rotate(180deg)\n}\n\n.photos-navigation {\n\tdisplay: flex;\n\tposition: block;\n\theight: 44px;\n\tpadding: 0 40px;\n\talign-items: center;\n\tmax-width: 100%;\n\t&__title {\n\t\tmargin: 0;\n\t\twhite-space: nowrap;\n\t\toverflow: hidden;\n\t\ttext-overflow: ellipsis;\n\t}\n\t&__share {\n\t\tmargin-left: 10px;\n\t}\n\t&__back,\n\t&__share {\n\t\tflex-grow: 0;\n\t\tflex-shrink: 0;\n\t}\n\n\t// Specific grid spacing\n\t@include grid-sizes using ($marginTop, $marginW) {\n\t\t// we space this with 2/3 margin top, 1/3 margin bottom\n\t\tmargin-top: math.div($marginTop - 44px * 2, 3);\n\n\t\t@if $marginW >= 44px {\n\t\t\t&__back {\n\t\t\t\tmargin: 0 math.div($marginW - 44px, 2);\n\t\t\t}\n\t\t}\n\t\t&--root &__title {\n\t\t\tpadding-left: #{$marginW - 44}px;\n\t\t}\n\t}\n}\n',"/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license AGPL-3.0-or-later\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n@use 'sass:map';\n\n@mixin grid-sizes() {\n\t$previous: 0;\n\n\t@each $size, $config in $sizes {\n\t\t$count: map.get($config, 'count');\n\t\t$marginTop: map.get($config, 'marginTop');\n\t\t$marginW: map.get($config, 'marginW');\n\n\t\t@if $size == 'max' {\n\t\t\t@media (min-width: #{$previous}px) {\n\t\t\t\t@content($marginTop, $marginW);\n\t\t\t}\n\t\t} @else {\n\t\t\t@media (min-width: #{$previous}px) and (max-width: #{$size}px) {\n\t\t\t\t@content($marginTop, $marginW);\n\t\t\t}\n\t\t}\n\t\t$previous: $size;\n\t}\n}\n"],sourceRoot:""}]);const s=r},66533:(n,t,a)=>{"use strict";a.d(t,{Z:()=>b});var e=a(25108);function i(n,t,a,e,i,o,r){try{var s=n[o](r),A=s.value}catch(n){return void a(n)}s.done?t(A):Promise.resolve(A).then(e,i)}const o={name:"EmptyContent",props:{illustrationName:{type:String,default:""}},data:function(){return{illustration:""}},computed:{haveIllustration:function(){return""!==this.illustrationName},isLoaded:function(){return!this.haveIllustration||""!==this.illustration},isReady:function(){return!this.haveIllustration||this.haveIllustration&&this.isLoaded}},watch:{illustrationName:function(){this.getIllustration()}},beforeMount:function(){this.getIllustration()},methods:{getIllustration:function(){var n,t=this;return(n=regeneratorRuntime.mark((function n(){var i;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.illustration="",""===t.illustrationName){n.next=12;break}return n.prev=2,n.next=5,a(57767)("./".concat(t.illustrationName,".svg"));case 5:i=n.sent,t.illustration=i.default,n.next=12;break;case 9:n.prev=9,n.t0=n.catch(2),e.error("Could not get the error illustration",n.t0);case 12:case"end":return n.stop()}}),n,null,[[2,9]])})),function(){var t=this,a=arguments;return new Promise((function(e,o){var r=n.apply(t,a);function s(n){i(r,e,o,s,A,"next",n)}function A(n){i(r,e,o,s,A,"throw",n)}s(void 0)}))})()}}};var r=a(93379),s=a.n(r),A=a(7795),c=a.n(A),d=a(90569),l=a.n(d),p=a(3565),m=a.n(p),g=a(19216),h=a.n(g),f=a(44589),C=a.n(f),v=a(86228),u={};u.styleTagTransform=C(),u.setAttributes=m(),u.insert=l().bind(null,"head"),u.domAPI=c(),u.insertStyleElement=h();s()(v.Z,u);v.Z&&v.Z.locals&&v.Z.locals;const b=(0,a(51900).Z)(o,(function(){var n=this,t=n.$createElement,a=n._self._c||t;return n.isReady?a("div",{staticClass:"emptycontent"},[n.haveIllustration?a("div",{staticClass:"illustration",domProps:{innerHTML:n._s(n.illustration)}}):a("div",{staticClass:"icon-error"}),n._v(" "),a("h2",[n._t("default")],2),n._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:n.$slots.desc,expression:"$slots.desc"}]},[n._t("desc")],2)]):n._e()}),[],!1,null,null,null).exports},88318:(n,a,e)=>{"use strict";e.d(a,{Z:()=>b});var i=e(79753);const o={name:"FolderTagPreview",props:{icon:{type:String,default:"icon-folder"},id:{type:Number,required:!0},name:{type:String,required:!0},path:{type:String,required:!0},fileList:{type:Array,default:function(){return[]}}},data:function(){return{loaded:!1,failed:[]}},computed:{isEmpty:function(){return 0===this.previewList.length},ariaUuid:function(){return"folder-".concat(this.id)},ariaLabel:function(){return t("photos",'Open the "{name}" sub-directory',{name:this.name})},previewList:function(){var n=this;return this.fileList.filter((function(t){return-1===n.failed.indexOf(t.fileid)}))},to:function(){var n=/^\/?(.+)/i.exec(this.path)[1];return Object.assign({},this.$route,{params:{path:n.split("/")}})}},methods:{generateImgSrc:function(n){var t=n.fileid,a=n.etag;return(0,i.generateUrl)("/core/preview?fileId=".concat(t,"&c=").concat(a,"&x=",250,"&y=",250,"&forceIcon=0&a=0"))},onPreviewFail:function(n){var t=n.fileid;this.failed.push(t)}}};var r=e(93379),s=e.n(r),A=e(7795),c=e.n(A),d=e(90569),l=e.n(d),p=e(3565),m=e.n(p),g=e(19216),h=e.n(g),f=e(44589),C=e.n(f),v=e(10369),u={};u.styleTagTransform=C(),u.setAttributes=m(),u.insert=l().bind(null,"head"),u.domAPI=c(),u.insertStyleElement=h();s()(v.Z,u);v.Z&&v.Z.locals&&v.Z.locals;const b=(0,e(51900).Z)(o,(function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("router-link",{staticClass:"folder",class:{"folder--clear":n.isEmpty},attrs:{to:n.to,"aria-label":n.ariaLabel}},[a("transition",{attrs:{name:"fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:n.loaded,expression:"loaded"}],staticClass:"folder-content",class:"folder-content--grid-"+n.previewList.length,attrs:{role:"none"}},n._l(n.previewList,(function(t){return a("img",{key:t.fileid,attrs:{src:n.generateImgSrc(t),alt:""},on:{load:function(t){n.loaded=!0},error:function(a){return n.onPreviewFail(t)}}})})),0)]),n._v(" "),a("div",{staticClass:"folder-name"},[a("span",{staticClass:"folder-name__icon",class:[n.isEmpty?"icon-dark":"icon-white",n.icon],attrs:{role:"img"}}),n._v(" "),a("p",{staticClass:"folder-name__name",attrs:{id:n.ariaUuid}},[n._v("\n\t\t\t"+n._s(n.name)+"\n\t\t")])]),n._v(" "),a("div",{staticClass:"cover",attrs:{role:"none"}})],1)}),[],!1,null,"b8db2226",null).exports},82390:(n,a,e)=>{"use strict";e.d(a,{Z:()=>x});var i=e(79440),o=e.n(i),r=e(56286);const s={name:"Navigation",components:{ActionButton:e.n(r)(),Actions:o()},inheritAttrs:!1,props:{basename:{type:String,required:!0},filename:{type:String,required:!0},showActions:{type:Boolean,default:!1},rootTitle:{type:String,default:t("photos","Photos")}},computed:{isRoot:function(){return"/"===this.filename},name:function(){return this.isRoot?this.rootTitle:this.basename},parentPath:function(){var n=this.filename.split("/");n.pop();var t=n.join("/");return this.isRoot||""===t.trim()?"/":n.join("/")},parentName:function(){return this.parentPath&&this.parentPath.split("/").pop()},backToText:function(){return"/"===this.parentPath?t("photos","Back to {folder}",{folder:this.rootTitle}):t("photos","Back to {folder}",{folder:this.parentName})},to:function(){var n=/^\/?(.*)/i.exec(this.parentPath)[1],t=Object.assign({},this.$route,{params:{path:n}}),a=t.name,e=t.params;return""===n?{name:a}:decodeURIComponent(this.$router.resolve({name:a,params:e}).resolved.path)}},methods:{folderUp:function(){this.$router.push(this.to)},showSidebar:function(){OCA.Files.Sidebar.open(this.filename)}}};var A=e(93379),c=e.n(A),d=e(7795),l=e.n(d),p=e(90569),m=e.n(p),g=e(3565),h=e.n(g),f=e(19216),C=e.n(f),v=e(44589),u=e.n(v),b=e(56222),w={};w.styleTagTransform=u(),w.setAttributes=h(),w.insert=m().bind(null,"head"),w.domAPI=l(),w.insertStyleElement=C();c()(b.Z,w);b.Z&&b.Z.locals&&b.Z.locals;const x=(0,e(51900).Z)(s,(function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{staticClass:"photos-navigation",class:{"photos-navigation--root":n.isRoot},attrs:{role:"toolbar"}},[n.isRoot?n._e():a("Actions",{staticClass:"photos-navigation__back"},[a("ActionButton",{attrs:{icon:"icon-confirm"},on:{click:n.folderUp}},[n._v("\n\t\t\t"+n._s(n.backToText)+"\n\t\t")])],1),n._v(" "),a("h2",{staticClass:"photos-navigation__title"},[n._v("\n\t\t"+n._s(n.name)+"\n\t")]),n._v(" "),!n.isRoot&&n.showActions?a("Actions",{staticClass:"photos-navigation__share"},[a("ActionButton",{attrs:{icon:"icon-shared"},on:{click:n.showSidebar}},[n._v("\n\t\t\t"+n._s(n.t("photos","Share this folder"))+"\n\t\t")])],1):n._e()],1)}),[],!1,null,"080cb7fa",null).exports},57767:(n,t,a)=>{var e={"./empty.svg":[51612,"src_assets_Illustrations_empty_svg"],"./folder.svg":[80917,"src_assets_Illustrations_folder_svg"],"./images.svg":[39777,"src_assets_Illustrations_images_svg"]};function i(n){if(!a.o(e,n))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=e[n],i=t[0];return a.e(t[1]).then((()=>a.t(i,17)))}i.keys=()=>Object.keys(e),i.id=57767,n.exports=i}}]);
//# sourceMappingURL=photos-src_mixins_GridConfig_js-src_components_EmptyContent_vue-src_components_FolderTagPreview_vue--cac48e.js.map?v=3afc7159512c68ca7652