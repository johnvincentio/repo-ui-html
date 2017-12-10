(function(c){if(!Modernizr.genericDOM){var e=document,i,h,m=/<([\w:]+)/,o={option:1,optgroup:1,legend:1,thead:1,tr:1,td:1,col:1,area:1};c.webshims.fixHTML5=function(c){if("string"!=typeof c||o[(m.exec(c)||["",""])[1].toLowerCase()])return c;if(!h){i=e.body;if(!i)return c;h=e.createElement("div");h.style.display="none"}var q=h.cloneNode(!1);i.appendChild(q);q.innerHTML=c;i.removeChild(q);return q.childNodes}}})(jQuery);
jQuery.webshims.register("dom-extend",function(c,e,i,h,m){var o=e.modules,l=/\s*,\s*/,q={},r={},p={},j={},s={},w=c.fn.val,v=function(a,b,d,f,n){return n?w.call(c(a)):w.call(c(a),d)};c.fn.val=function(a){var b=this[0];arguments.length&&null==a&&(a="");if(!arguments.length)return!b||1!==b.nodeType?w.call(this):c.prop(b,"value",a,"val",!0);if(c.isArray(a))return w.apply(this,arguments);var d=c.isFunction(a);return this.each(function(f){b=this;1===b.nodeType&&(d?(f=a.call(b,f,c.prop(b,"value",m,"val",
!0)),null==f&&(f=""),c.prop(b,"value",f,"val")):c.prop(b,"value",a,"val"))})};var t="_webshimsLib"+Math.round(1E3*Math.random()),u=function(a,b,d){a=a.jquery?a[0]:a;if(!a)return d||{};var f=c.data(a,t);d!==m&&(f||(f=c.data(a,t,{})),b&&(f[b]=d));return b?f&&f[b]:f};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(a){c.fn[a.name]=function(){return this.map(function(){var b=u(this,
"shadowData");return b&&b[a.prop]||this})}});["removeAttr","prop","attr"].forEach(function(a){q[a]=c[a];c[a]=function(b,d,f,n,g){var k="val"==n,e=!k?q[a]:v;if(!b||!r[d]||1!==b.nodeType||!k&&n&&"attr"==a&&c.attrFn[d])return e(b,d,f,n,g);var z=(b.nodeName||"").toLowerCase(),o=p[z],l="attr"==a&&(!1===f||null===f)?"removeAttr":a,h,x,j;o||(o=p["*"]);o&&(o=o[d]);o&&(h=o[l]);if(h){if("value"==d)x=h.isVal,h.isVal=k;if("removeAttr"===l)return h.value.call(b);if(f===m)return h.get?h.get.call(b):h.value;h.set&&
("attr"==a&&!0===f&&(f=d),j=h.set.call(b,f));if("value"==d)h.isVal=x}else j=e(b,d,f,n,g);if((f!==m||"removeAttr"===l)&&s[z]&&s[z][d]){var i;i="removeAttr"==l?!1:"prop"==l?!!f:!0;s[z][d].forEach(function(d){if(!d.only||(d.only="prop"==a)||"attr"==d.only&&"prop"!=a)d.call(b,f,i,k?"val":l,a)})}return j};j[a]=function(b,d,f){p[b]||(p[b]={});p[b][d]||(p[b][d]={});var n=p[b][d][a],g=function(b,c,n){return c&&c[b]?c[b]:n&&n[b]?n[b]:"prop"==a&&"value"==d?function(b){return f.isVal?v(this,d,b,!1,0===arguments.length):
q[a](this,d,b)}:"prop"==a&&"value"==b&&f.value.apply?function(b){var c=q[a](this,d);c&&c.apply&&(c=c.apply(this,arguments));return c}:function(b){return q[a](this,d,b)}};p[b][d][a]=f;if(f.value===m){if(!f.set)f.set=f.writeable?g("set",f,n):e.cfg.useStrict&&"prop"==d?function(){throw d+" is readonly on "+b;}:c.noop;if(!f.get)f.get=g("get",f,n)}["value","get","set"].forEach(function(a){f[a]&&(f["_sup"+a]=g(a,n))})}});var y=!c.browser.msie||8<parseInt(c.browser.version,10),g=function(){var a=e.getPrototypeOf(h.createElement("foobar")),
b=Object.prototype.hasOwnProperty;return function(d,c,n){var g=h.createElement(d),o=e.getPrototypeOf(g);if(y&&o&&a!==o&&(!g[c]||!b.call(g,c))){var l=g[c];n._supvalue=function(){return l&&l.apply?l.apply(this,arguments):l};o[c]=n.value}else n._supvalue=function(){var a=u(this,"propValue");return a&&a[c]&&a[c].apply?a[c].apply(this,arguments):a&&a[c]},k.extendValue(d,c,n.value);n.value._supvalue=n._supvalue}}(),k=function(){var a={};e.addReady(function(b,d){var f={},g=function(a){f[a]||(f[a]=c(b.getElementsByTagName(a)),
d[0]&&c.nodeName(d[0],a)&&(f[a]=f[a].add(d)))};c.each(a,function(a,b){g(a);!b||!b.forEach?e.warn("Error: with "+a+"-property. methods: "+b):b.forEach(function(b){f[a].each(b)})});f=null});var b,d=c([]),f=function(d,f){a[d]?a[d].push(f):a[d]=[f];c.isDOMReady&&(b||c(h.getElementsByTagName(d))).each(f)};return{createTmpCache:function(a){c.isDOMReady&&(b=b||c(h.getElementsByTagName(a)));return b||d},flushTmpCache:function(){b=null},content:function(a,b){f(a,function(){var a=c.attr(this,b);null!=a&&c.attr(this,
b,a)})},createElement:function(a,b){f(a,b)},extendValue:function(a,b,d){f(a,function(){c(this).each(function(){u(this,"propValue",{})[b]=this[b];this[b]=d})})}}}(),x=function(a,b){if(a.defaultValue===m)a.defaultValue="";if(!a.removeAttr)a.removeAttr={value:function(){a[b||"prop"].set.call(this,a.defaultValue);a.removeAttr._supvalue.call(this)}}};c.extend(e,{getID:function(){var a=(new Date).getTime();return function(b){var b=c(b),d=b.attr("id");d||(a++,d="ID-"+a,b.attr("id",d));return d}}(),extendUNDEFProp:function(a,
b){c.each(b,function(b,c){b in a||(a[b]=c)})},createPropDefault:x,data:u,moveToFirstEvent:function(){var a=c._data?"_data":"data";return function(b,d,f){if((b=(c[a](b,"events")||{})[d])&&1<b.length)d=b.pop(),f||(f="bind"),"bind"==f&&b.delegateCount?b.splice(b.delegateCount,0,d):b.unshift(d)}}(),addShadowDom:function(a,b,d){d=d||{};a.jquery&&(a=a[0]);b.jquery&&(b=b[0]);if(!d.shadowFocusElement)d.shadowFocusElement=b;var f=c.data(a,t)||c.data(a,t,{}),g=c.data(b,t)||c.data(b,t,{});f.hasShadow=b;g.nativeElement=
a;g.shadowData=f.shadowData={nativeElement:a,shadowElement:b,shadowFocusElement:d.shadowFocusElement};d.shadowChilds&&d.shadowChilds.each(function(){u(this,"shadowData",g.shadowData)});if(d.data)f.shadowData.data=d.data,g.shadowData.data=d.data;d=null},propTypes:{standard:function(a){x(a);if(!a.prop)a.prop={set:function(b){a.attr.set.call(this,""+b)},get:function(){return a.attr.get.call(this)||a.defaultValue}}},"boolean":function(a){x(a);if(!a.prop)a.prop={set:function(b){b?a.attr.set.call(this,
""):a.removeAttr.value.call(this)},get:function(){return null!=a.attr.get.call(this)}}}},reflectProperties:function(a,b){"string"==typeof b&&(b=b.split(l));b.forEach(function(b){e.defineNodeNamesProperty(a,b,{prop:{set:function(a){c.attr(this,b,a)},get:function(){return c.attr(this,b)||""}}})})},defineNodeNameProperty:function(a,b,d){r[b]=!0;if(d.reflect)e.propTypes[d.propType||"standard"](d);["prop","attr","removeAttr"].forEach(function(f){var n=d[f];n&&(n="prop"===f?c.extend({writeable:!0},n):c.extend({},
n,{writeable:!0}),j[f](a,b,n),"*"!=a&&e.cfg.extendNative&&"prop"==f&&n.value&&c.isFunction(n.value)&&g(a,b,n),d[f]=n)});d.initAttr&&k.content(a,b);return d},defineNodeNameProperties:function(a,b,d,c){for(var g in b)!c&&b[g].initAttr&&k.createTmpCache(a),d&&(b[g][d]?e.log("override: "+a+"["+g+"] for "+d):(b[g][d]={},["value","set","get"].forEach(function(a){a in b[g]&&(b[g][d][a]=b[g][a],delete b[g][a])}))),b[g]=e.defineNodeNameProperty(a,g,b[g]);c||k.flushTmpCache();return b},createElement:function(a,
b,d){var f;c.isFunction(b)&&(b={after:b});k.createTmpCache(a);b.before&&k.createElement(a,b.before);d&&(f=e.defineNodeNameProperties(a,d,!1,!0));b.after&&k.createElement(a,b.after);k.flushTmpCache();return f},onNodeNamesPropertyModify:function(a,b,d,f){"string"==typeof a&&(a=a.split(l));c.isFunction(d)&&(d={set:d});a.forEach(function(a){s[a]||(s[a]={});"string"==typeof b&&(b=b.split(l));d.initAttr&&k.createTmpCache(a);b.forEach(function(b){s[a][b]||(s[a][b]=[],r[b]=!0);if(d.set){if(f)d.set.only=f;
s[a][b].push(d.set)}d.initAttr&&k.content(a,b)});k.flushTmpCache()})},defineNodeNamesBooleanProperty:function(a,b,d){d||(d={});if(c.isFunction(d))d.set=d;e.defineNodeNamesProperty(a,b,{attr:{set:function(a){this.setAttribute(b,a);d.set&&d.set.call(this,!0)},get:function(){return null==this.getAttribute(b)?m:b}},removeAttr:{value:function(){this.removeAttribute(b);d.set&&d.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:d.initAttr||!1})},contentAttr:function(a,b,d){if(a.nodeName){if(d===
m)return d=(a.attributes[b]||{}).value,null==d?m:d;"boolean"==typeof d?d?a.setAttribute(b,b):a.removeAttribute(b):a.setAttribute(b,d)}},activeLang:function(){var a=[],b={},d,f,g=/:\/\/|^\.*\//,k=function(a,b,d){return b&&d&&-1!==c.inArray(b,d.availabeLangs||[])?(a.loading=!0,d=d.langSrc,g.test(d)||(d=e.cfg.basePath+d),e.loader.loadScript(d+b+".js",function(){a.langObj[b]?(a.loading=!1,h(a,!0)):c(function(){a.langObj[b]&&h(a,!0);a.loading=!1})}),!0):!1},l=function(a){b[a]&&b[a].forEach(function(a){a.callback()})},
h=function(a,b){if(a.activeLang!=d&&a.activeLang!==f){var c=o[a.module].options;if(a.langObj[d]||f&&a.langObj[f])a.activeLang=d,a.callback(a.langObj[d]||a.langObj[f],d),l(a.module);else if(!b&&!k(a,d,c)&&!k(a,f,c)&&a.langObj[""]&&""!==a.activeLang)a.activeLang="",a.callback(a.langObj[""],d),l(a.module)}};return function(g){if("string"==typeof g&&g!==d)d=g,f=d.split("-")[0],d==f&&(f=!1),c.each(a,function(a,b){h(b)});else if("object"==typeof g)if(g.register)b[g.register]||(b[g.register]=[]),b[g.register].push(g),
g.callback();else{if(!g.activeLang)g.activeLang="";a.push(g);h(g)}return d}}()});c.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(a,b){e[a]=function(a,c,g,k){"string"==typeof a&&(a=a.split(l));var o={};a.forEach(function(a){o[a]=e[b](a,c,g,k)});return o}});e.isReady("webshimLocalization",!0)});
(function(c,e){var i=c.webshims.browserVersion;if(!(c.browser.mozilla&&5<i)&&(!c.browser.msie||12>i&&7<i)){var h={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},m=function(c,e){c.getAttribute("role")||c.setAttribute("role",e)};c.webshims.addReady(function(o,l){c.each(h,function(e,h){for(var i=c(e,o).add(l.filter(e)),p=0,t=i.length;p<t;p++)m(i[p],h)});if(o===e){var i=e.getElementsByTagName("header")[0],r=e.getElementsByTagName("footer"),p=r.length;
i&&!c(i).closest("section, article")[0]&&m(i,"banner");p&&(i=r[p-1],c(i).closest("section, article")[0]||m(i,"contentinfo"))}})}})(jQuery,document);
(function(c,e,i){var h=e.audio&&e.video,m=!1;if(h)c=document.createElement("video"),e.videoBuffered="buffered"in c,m="loop"in c,i.capturingEvents("play,playing,waiting,paused,ended,durationchange,loadedmetadata,canplay,volumechange".split(",")),e.videoBuffered||(i.addPolyfill("mediaelement-native-fix",{f:"mediaelement",test:e.videoBuffered,d:["dom-support"]}),i.reTest("mediaelement-native-fix"));jQuery.webshims.register("mediaelement-core",function(c,e,i,r,p){var j=e.mediaelement,s=e.cfg.mediaelement,
w=function(a,b){var a=c(a),d={src:a.attr("src")||"",elem:a,srcProp:a.prop("src")};if(!d.src)return d;var f=a.attr("type");if(f)d.type=f,d.container=c.trim(f.split(";")[0]);else if(b||(b=a[0].nodeName.toLowerCase(),"source"==b&&(b=(a.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),f=j.getTypeForSrc(d.src,b))d.type=f,d.container=f;if(f=a.attr("media"))d.media=f;return d},v=swfobject.hasFlashPlayerVersion("9.0.115"),t=function(){e.ready("mediaelement-swf",function(){if(!j.createSWF)e.modules["mediaelement-swf"].test=
c.noop,e.reTest(["mediaelement-swf"],h)})};j.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],"audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":"mp4,mpg4,m4r,m4a,m4p,m4b,aac".split(","),"audio/wav":["wav"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv","f4a","fla"],"application/x-mpegURL":["m3u8","m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf",
"asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}};j.mimeTypes.source=c.extend({},j.mimeTypes.audio,j.mimeTypes.video);j.getTypeForSrc=function(a,b){if(-1!=a.indexOf("youtube.com/watch?")||-1!=a.indexOf("youtube.com/v/"))return"video/youtube";var a=a.split("?")[0].split("."),a=a[a.length-1],d;c.each(j.mimeTypes[b],function(b,c){if(-1!==c.indexOf(a))return d=b,!1});return d};j.srces=function(a,b){a=c(a);if(b)a.removeAttr("src").removeAttr("type").find("source").remove(),
c.isArray(b)||(b=[b]),b.forEach(function(b){var c=r.createElement("source");"string"==typeof b&&(b={src:b});c.setAttribute("src",b.src);b.type&&c.setAttribute("type",b.type);b.media&&c.setAttribute("media",b.media);a.append(c)});else{var b=[],d=a[0].nodeName.toLowerCase(),f=w(a,d);f.src?b.push(f):c("source",a).each(function(){f=w(this,d);f.src&&b.push(f)});return b}};c.fn.loadMediaSrc=function(a,b){return this.each(function(){b!==p&&(c(this).removeAttr("poster"),b&&c.attr(this,"poster",b));j.srces(this,
a);c(this).mediaLoad()})};j.swfMimeTypes="video/3gpp,video/x-msvideo,video/quicktime,video/x-m4v,video/mp4,video/m4p,video/x-flv,video/flv,audio/mpeg,audio/aac,audio/mp4,audio/x-m4a,audio/m4a,audio/mp3,audio/x-fla,audio/fla,youtube/flv,jwplayer/jwplayer,video/youtube".split(",");j.canSwfPlaySrces=function(a,b){var d="";v&&(a=c(a),b=b||j.srces(a),c.each(b,function(a,b){if(b.container&&b.src&&-1!=j.swfMimeTypes.indexOf(b.container))return d=b,!1}));return d};var u={};j.canNativePlaySrces=function(a,
b){var d="";if(h){var a=c(a),f=(a[0].nodeName||"").toLowerCase();if(!u[f])return d;b=b||j.srces(a);c.each(b,function(b,c){if(c.type&&u[f].prop._supvalue.call(a[0],c.type))return d=c,!1})}return d};j.setError=function(a,b){b||(b="can't play sources");c(a).pause().data("mediaerror",b);e.warn("mediaelementError: "+b);setTimeout(function(){c(a).data("mediaerror")&&c(a).trigger("mediaerror")},1)};var y=function(){var a;return function(b,c,f){e.ready("mediaelement-swf",function(){j.createSWF?j.createSWF(b,
c,f):a||(a=!0,t(),y(b,c,f))})}}(),g=function(a,b,c,f,e){c||!1!==c&&b&&"flash"==b.isActive?(c=j.canSwfPlaySrces(a,f))?y(a,c,b):e?j.setError(a,!1):g(a,b,!1,f,!0):(c=j.canNativePlaySrces(a,f))?b&&"flash"==b.isActive&&j.setActive(a,"html5",b):e?(j.setError(a,!1),b&&"flash"==b.isActive&&j.setActive(a,"html5",b)):g(a,b,!0,f,!0)},k=/^(?:embed|object|datalist)$/i,x=function(a,b){var d=e.data(a,"mediaelementBase")||e.data(a,"mediaelementBase",{}),f=j.srces(a),n=a.parentNode;clearTimeout(d.loadTimer);c.data(a,
"mediaerror",!1);if(f.length&&n&&!(1!=n.nodeType||k.test(n.nodeName||"")))b=b||e.data(a,"mediaelement"),g(a,b,s.preferFlash||p,f)};c(r).bind("ended",function(a){var b=e.data(a.target,"mediaelement");(!m||b&&"html5"!=b.isActive||c.prop(a.target,"loop"))&&setTimeout(function(){!c.prop(a.target,"paused")&&c.prop(a.target,"loop")&&c(a.target).prop("currentTime",0).play()},1)});m||e.defineNodeNamesBooleanProperty(["audio","video"],"loop");["audio","video"].forEach(function(a){var b=e.defineNodeNameProperty(a,
"load",{prop:{value:function(){var a=e.data(this,"mediaelement");x(this,a);h&&(!a||"html5"==a.isActive)&&b.prop._supvalue&&b.prop._supvalue.apply(this,arguments)}}});u[a]=e.defineNodeNameProperty(a,"canPlayType",{prop:{value:function(b){var f="";h&&u[a].prop._supvalue&&(f=u[a].prop._supvalue.call(this,b),"no"==f&&(f=""));!f&&v&&(b=c.trim((b||"").split(";")[0]),-1!=j.swfMimeTypes.indexOf(b)&&(f="maybe"));return f}}})});e.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var a=
this,b=e.data(a,"mediaelementBase")||e.data(a,"mediaelementBase",{});clearTimeout(b.loadTimer);b.loadTimer=setTimeout(function(){x(a);a=null},9)}});i=function(){e.addReady(function(a,b){c("video, audio",a).add(b.filter("video, audio")).each(function(){c.browser.msie&&8<e.browserVersion&&c.prop(this,"paused")&&!c.prop(this,"readyState")&&c(this).is('audio[preload="none"][controls]:not([autoplay])')?c(this).prop("preload","metadata").mediaLoad():x(this);if(h){var a,b,g=this,k=function(){var a=c.prop(g,
"buffered");if(a){for(var b="",d=0,f=a.length;d<f;d++)b+=a.end(d);return b}},i=function(){var a=k();a!=b&&(b=a,c(g).triggerHandler("progress"))};c(this).bind("play loadstart progress",function(c){"progress"==c.type&&(b=k());clearTimeout(a);a=setTimeout(i,999)}).bind("emptied stalled mediaerror abort suspend",function(c){"emptied"==c.type&&(b=!1);clearTimeout(a)})}})})};h?(e.isReady("mediaelement-core",!0),i(),v&&e.ready("WINDOWLOAD mediaelement",t)):e.ready("mediaelement-swf",i)})})(jQuery,Modernizr,
jQuery.webshims);
(function(c){var e=window.Modernizr,i=c.webshims,h=i.bugs,m=c('<form action="#" style="width: 1px; height: 1px; overflow: hidden;"><select name="b" required="" /><input type="date" required="" name="a" /><input type="submit" /></form>'),o=function(){if(m[0].querySelector)try{h.findRequired=!m[0].querySelector("select:required")}catch(c){h.findRequired=!1}};h.findRequired=!1;h.validationMessage=!1;h.valueAsNumberSet=!1;i.capturingEventPrevented=function(e){if(!e._isPolyfilled){var h=e.isDefaultPrevented,
i=e.preventDefault;e.preventDefault=function(){clearTimeout(c.data(e.target,e.type+"DefaultPrevented"));c.data(e.target,e.type+"DefaultPrevented",setTimeout(function(){c.removeData(e.target,e.type+"DefaultPrevented")},30));return i.apply(this,arguments)};e.isDefaultPrevented=function(){return!(!h.apply(this,arguments)&&!c.data(e.target,e.type+"DefaultPrevented"))};e._isPolyfilled=!0}};if(!e.formvalidation||h.bustedValidity)o();else if(i.capturingEvents(["input"]),i.capturingEvents(["invalid"],!0),
e.bugfreeformvalidation=!0,window.opera||c.browser.webkit||window.testGoodWithFix){var l=c("input",m).eq(0),q,r=function(c){i.loader.loadList(["dom-extend"]);i.ready("dom-extend",c)},p=function(h){var j=["form-extend","form-message","form-native-fix"];h&&(h.preventDefault(),h.stopImmediatePropagation());clearTimeout(q);setTimeout(function(){m&&(m.remove(),m=l=null)},9);if(!e.bugfreeformvalidation)i.addPolyfill("form-native-fix",{f:"forms",d:["form-extend"]}),i.modules["form-extend"].test=c.noop;i.isReady("form-number-date-api")&&
j.push("form-number-date-api");i.reTest(j);if(l)try{l.prop({disabled:!0,value:""}).prop("disabled",!1).is(":valid")&&r(function(){i.onNodeNamesPropertyModify(["input","textarea"],["disabled","readonly"],{set:function(e){!e&&this&&c.prop(this,"value",c.prop(this,"value"))}});i.onNodeNamesPropertyModify(["select"],["disabled","readonly"],{set:function(e){if(!e&&this)e=c(this).val(),(c("option:last-child",this)[0]||{}).selected=!0,c(this).val(e)}})})}catch(o){}(c.browser.opera||window.testGoodWithFix)&&
r(function(){var h=function(c){c.preventDefault()};["form","input","textarea","select"].forEach(function(e){var j=i.defineNodeNameProperty(e,"checkValidity",{prop:{value:function(){i.fromSubmit||c(this).bind("invalid.checkvalidity",h);i.fromCheckValidity=!0;var g=j.prop._supvalue.apply(this,arguments);i.fromSubmit||c(this).unbind("invalid.checkvalidity",h);i.fromCheckValidity=!1;return g}}})});e.input.list&&!(c("<datalist><select><option></option></select></datalist>").prop("options")||[]).length&&
i.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var e=this.options||[];if(!e.length){var h=c("select",this);if(h[0]&&h[0].options&&h[0].options.length)e=h[0].options}return e}}})})};m.appendTo("head");if(window.opera||window.testGoodWithFix){o();h.validationMessage=!l.prop("validationMessage");if((e.inputtypes||{}).date){try{l.prop("valueAsNumber",0)}catch(j){}h.valueAsNumberSet="1970-01-01"!=l.prop("value")}l.prop("value","")}m.bind("submit",function(c){e.bugfreeformvalidation=
!1;p(c)});q=setTimeout(function(){m&&m.triggerHandler("submit")},9);c("input, select",m).bind("invalid",p).filter('[type="submit"]').bind("click",function(c){c.stopImmediatePropagation()}).trigger("click")}})(jQuery);
jQuery.webshims.register("form-core",function(c,e,i,h,m,o){var l={radio:1},q={checkbox:1,radio:1},r=c([]),p=e.bugs,j=function(g){var g=c(g),e,i;e=r;if(l[g[0].type])i=g.prop("form"),e=(e=g[0].name)?i?c(i[e]):c(h.getElementsByName(e)).filter(function(){return!c.prop(this,"form")}):g,e=e.filter('[type="radio"]');return e},s=e.getContentValidationMessage=function(g,e,h){var a=c(g).data("errormessage")||g.getAttribute("x-moz-errormessage")||"";h&&a[h]&&(a=a[h]);"object"==typeof a&&(e=e||c.prop(g,"validity")||
{valid:1},e.valid||c.each(e,function(b,c){if(c&&"valid"!=b&&a[b])return a=a[b],!1}));if("object"==typeof a)a=a.defaultMessage;return a||""},w={number:1,range:1,date:1};c.extend(c.expr.filters,{"valid-element":function(g){return!(!c.prop(g,"willValidate")||!(c.prop(g,"validity")||{valid:1}).valid)},"invalid-element":function(g){return!(!c.prop(g,"willValidate")||(c.prop(g,"validity")||{valid:1}).valid)},"required-element":function(g){return!(!c.prop(g,"willValidate")||!c.prop(g,"required"))},"optional-element":function(g){return!!(c.prop(g,
"willValidate")&&!1===c.prop(g,"required"))},"in-range":function(g){if(!w[c.prop(g,"type")]||!c.prop(g,"willValidate"))return!1;g=c.prop(g,"validity");return!(!g||g.rangeOverflow||g.rangeUnderflow)},"out-of-range":function(g){if(!w[c.prop(g,"type")]||!c.prop(g,"willValidate"))return!1;g=c.prop(g,"validity");return!(!g||!g.rangeOverflow&&!g.rangeUnderflow)}});["valid","invalid","required","optional"].forEach(function(g){c.expr.filters[g]=c.expr.filters[g+"-element"]});c.expr.filters.focus=function(c){try{var e=
c.ownerDocument;return c===e.activeElement&&(!e.hasFocus||e.hasFocus())}catch(h){}return!1};var v=c.event.customEvent||{};(p.bustedValidity||p.findRequired||!Modernizr.bugfreeformvalidation)&&function(){var g=c.find,e=c.find.matchesSelector,i=/(\:valid|\:invalid|\:optional|\:required|\:in-range|\:out-of-range)(?=[\s\[\~\.\+\>\:\#*]|$)/ig,a=function(a){return a+"-element"};c.find=function(){var b=Array.prototype.slice,c=function(c){var d=arguments,d=b.call(d,1,d.length);d.unshift(c.replace(i,a));return g.apply(this,
d)},f;for(f in g)g.hasOwnProperty(f)&&(c[f]=g[f]);return c}();if(!Modernizr.prefixed||Modernizr.prefixed("matchesSelector",h.documentElement))c.find.matchesSelector=function(b,c){c=c.replace(i,a);return e.call(this,b,c)}}();var t=c.prop,u={selectedIndex:1,value:1,checked:1,disabled:1,readonly:1};c.prop=function(g,e,h){var a=t.apply(this,arguments);if(g&&"form"in g&&u[e]&&h!==m&&c(g).hasClass("form-ui-invalid")&&(c.prop(g,"validity")||{valid:1}).valid)c(g).getShadowElement().removeClass("form-ui-invalid"),
"checked"==e&&h&&j(g).not(g).removeClass("form-ui-invalid").removeAttr("aria-invalid");return a};var y=function(g,e){var h;c.each(g,function(a,b){if(b)return h="customError"==a?c.prop(e,"validationMessage"):a,!1});return h};c(h).bind(o.validityUIEvents||"focusout change refreshvalidityui",function(g){if(g.target&&"submit"!=g.target.type&&c.prop(g.target,"willValidate")){var e=c.data(g.target,"webshimsswitchvalidityclass"),h=function(){var a=c(g.target).getNativeElement().trigger("refreshCustomValidityRules")[0],
b=c.prop(a,"validity"),d=c(a).getShadowElement(),f,e,h,i;b.valid?d.hasClass("form-ui-valid")||(f="form-ui-valid",e="form-ui-invalid",i="changedvaliditystate",h="changedvalid",q[a.type]&&a.checked&&j(a).not(a).removeClass(e).addClass(f).removeAttr("aria-invalid"),c.removeData(a,"webshimsinvalidcause")):(b=y(b,a),c.data(a,"webshimsinvalidcause")!=b&&(c.data(a,"webshimsinvalidcause",b),i="changedvaliditystate"),d.hasClass("form-ui-invalid")||(f="form-ui-invalid",e="form-ui-valid",q[a.type]&&!a.checked&&
j(a).not(a).removeClass(e).addClass(f),h="changedinvalid"));f&&(d.addClass(f).removeClass(e),setTimeout(function(){c(a).trigger(h)},0));i&&setTimeout(function(){c(a).trigger(i)},0);c.removeData(g.target,"webshimsswitchvalidityclass")};e&&clearTimeout(e);"refreshvalidityui"==g.type?h():c.data(g.target,"webshimsswitchvalidityclass",setTimeout(h,9))}});v.changedvaliditystate=!0;v.refreshCustomValidityRules=!0;v.changedvalid=!0;v.changedinvalid=!0;v.refreshvalidityui=!0;e.triggerInlineForm=function(e,
h){c(e).trigger(h)};e.modules["form-core"].getGroupElements=j;p=function(){e.scrollRoot=c.browser.webkit||"BackCompat"==h.compatMode?c(h.body):c(h.documentElement)};p();e.ready("DOM",p);e.getRelOffset=function(e,h){var e=c(e),i=c(h).offset(),a;c.swap(c(e)[0],{visibility:"hidden",display:"inline-block",left:0,top:0},function(){a=e.offset()});i.top-=a.top;i.left-=a.left;return i};e.validityAlert=function(){var g=!c.browser.msie||7<parseInt(c.browser.version,10)?"span":"label",k,j=!1,a=!1,b,d={hideDelay:5E3,
showFor:function(e,g,h,m){d._create();var e=c(e),l=c(e).getShadowElement(),o=d.getOffsetFromBody(l);d.clear();m?this.hide():(this.getMessage(e,g),this.position(l,o),k.css({fontSize:e.css("fontSize"),fontFamily:e.css("fontFamily")}),this.show(),this.hideDelay&&(j=setTimeout(b,this.hideDelay)),c(i).bind("resize.validityalert orientationchange.validityalert emchange.validityalert",function(){clearTimeout(a);a=setTimeout(function(){d.position(l)},9)}));h||this.setFocus(l,o)},getOffsetFromBody:function(a){return e.getRelOffset(k,
a)},setFocus:function(a,d){var i=c(a).getShadowFocusElement(),j=e.scrollRoot.scrollTop(),l=(d||i.offset()).top-30,m;e.getID&&"label"==g&&k.attr("for",e.getID(i));j>l&&(e.scrollRoot.animate({scrollTop:l-5},{queue:!1,duration:Math.max(Math.min(600,1.5*(j-l)),80)}),m=!0);try{i[0].focus()}catch(o){}m&&(e.scrollRoot.scrollTop(j),setTimeout(function(){e.scrollRoot.scrollTop(j)},0));setTimeout(function(){c(h).bind("focusout.validityalert",b)},10)},getMessage:function(a,b){b||(b=s(a[0])||a.prop("validationMessage"));
b?c("span.va-box",k).text(b):this.hide()},position:function(a,b){b=b?c.extend({},b):d.getOffsetFromBody(a);b.top+=a.outerHeight();k.css(b)},show:function(){"none"===k.css("display")&&k.css({opacity:0}).show();k.addClass("va-visible").fadeTo(400,1)},hide:function(){k.removeClass("va-visible").fadeOut()},clear:function(){clearTimeout(!1);clearTimeout(j);c(h).unbind(".validityalert");c(i).unbind(".validityalert");k.stop().removeAttr("for")},_create:function(){if(!k)k=d.errorBubble=c("<"+g+' class="validity-alert-wrapper" role="alert"><span  class="validity-alert"><span class="va-arrow"><span class="va-arrow-box"></span></span><span class="va-box"></span></span></'+
g+">").css({position:"absolute",display:"none"}),e.ready("DOM",function(){k.appendTo("body");c.fn.bgIframe&&c.browser.msie&&7>parseInt(c.browser.version,10)&&k.bgIframe()})}};b=c.proxy(d,"hide");return d}();(function(){var e,i=[],j;c(h).bind("invalid",function(a){if(!a.wrongWebkitInvalid){var b=c(a.target),d=b.getShadowElement();d.hasClass("form-ui-invalid")||(d.addClass("form-ui-invalid").removeClass("form-ui-valid"),setTimeout(function(){c(a.target).trigger("changedinvalid").trigger("changedvaliditystate")},
0));if(!e)e=c.Event("firstinvalid"),e.isInvalidUIPrevented=a.isDefaultPrevented,d=c.Event("firstinvalidsystem"),c(h).triggerHandler(d,{element:a.target,form:a.target.form,isInvalidUIPrevented:a.isDefaultPrevented}),b.trigger(e);e&&e.isDefaultPrevented()&&a.preventDefault();i.push(a.target);a.extraData="fix";clearTimeout(j);j=setTimeout(function(){var b={type:"lastinvalid",cancelable:!1,invalidlist:c(i)};e=!1;i=[];c(a.target).trigger(b,b)},9);d=b=null}})})();c.fn.getErrorMessage=function(){var e="",
h=this[0];h&&(e=s(h)||c.prop(h,"customValidationMessage")||c.prop(h,"validationMessage"));return e};o.replaceValidationUI&&e.ready("DOM",function(){c(h).bind("firstinvalid",function(e){e.isInvalidUIPrevented()||(e.preventDefault(),c.webshims.validityAlert.showFor(e.target,c(e.target).prop("customValidationMessage")))})})});
