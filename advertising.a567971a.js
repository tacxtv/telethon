var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},i=t.parcelRequire8e21;null==i&&((i=function(t){if(t in e)return e[t].exports;if(t in n){var i=n[t];delete n[t];var r={id:t,exports:{}};return e[t]=r,i.call(r.exports,r,r.exports),r.exports}var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){n[t]=e},t.parcelRequire8e21=i),i.register("gngdn",(function(t,e){t.exports,t.exports=function(){var t=1e3,e=6e4,n=36e5,i="millisecond",r="second",s="minute",a="hour",u="day",o="week",d="month",h="quarter",l="year",c="date",f="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,$=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},g=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},_={s:g,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),r=n%60;return(e<=0?"+":"-")+g(i,2,"0")+":"+g(r,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),r=e.clone().add(i,d),s=n-r<0,a=e.clone().add(i+(s?-1:1),d);return+(-(i+(n-r)/(s?r-a:a-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:d,y:l,w:o,d:u,D:c,h:a,m:s,s:r,ms:i,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},p="en",M={};M[p]=v;var y=function(t){return t instanceof Y},w=function t(e,n,i){var r;if(!e)return p;if("string"==typeof e){var s=e.toLowerCase();M[s]&&(r=s),n&&(M[s]=n,r=s);var a=e.split("-");if(!r&&a.length>1)return t(a[0])}else{var u=e.name;M[u]=e,r=u}return!i&&r&&(p=r),r||!i&&p},D=function(t,e){if(y(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new Y(n)},S=_;S.l=w,S.i=y,S.w=function(t,e){return D(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var Y=function(){function v(t){this.$L=w(t.locale,null,!0),this.parse(t)}var g=v.prototype;return g.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(S.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(m);if(i){var r=i[2]-1||0,s=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)):new Date(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},g.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},g.$utils=function(){return S},g.isValid=function(){return!(this.$d.toString()===f)},g.isSame=function(t,e){var n=D(t);return this.startOf(e)<=n&&n<=this.endOf(e)},g.isAfter=function(t,e){return D(t)<this.startOf(e)},g.isBefore=function(t,e){return this.endOf(e)<D(t)},g.$g=function(t,e,n){return S.u(t)?this[e]:this.set(n,t)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(t,e){var n=this,i=!!S.u(e)||e,h=S.p(t),f=function(t,e){var r=S.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return i?r:r.endOf(u)},m=function(t,e){return S.w(n.toDate()[t].apply(n.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},$=this.$W,v=this.$M,g=this.$D,_="set"+(this.$u?"UTC":"");switch(h){case l:return i?f(1,0):f(31,11);case d:return i?f(1,v):f(0,v+1);case o:var p=this.$locale().weekStart||0,M=($<p?$+7:$)-p;return f(i?g-M:g+(6-M),v);case u:case c:return m(_+"Hours",0);case a:return m(_+"Minutes",1);case s:return m(_+"Seconds",2);case r:return m(_+"Milliseconds",3);default:return this.clone()}},g.endOf=function(t){return this.startOf(t,!1)},g.$set=function(t,e){var n,o=S.p(t),h="set"+(this.$u?"UTC":""),f=(n={},n[u]=h+"Date",n[c]=h+"Date",n[d]=h+"Month",n[l]=h+"FullYear",n[a]=h+"Hours",n[s]=h+"Minutes",n[r]=h+"Seconds",n[i]=h+"Milliseconds",n)[o],m=o===u?this.$D+(e-this.$W):e;if(o===d||o===l){var $=this.clone().set(c,1);$.$d[f](m),$.init(),this.$d=$.set(c,Math.min(this.$D,$.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},g.set=function(t,e){return this.clone().$set(t,e)},g.get=function(t){return this[S.p(t)]()},g.add=function(i,h){var c,f=this;i=Number(i);var m=S.p(h),$=function(t){var e=D(f);return S.w(e.date(e.date()+Math.round(t*i)),f)};if(m===d)return this.set(d,this.$M+i);if(m===l)return this.set(l,this.$y+i);if(m===u)return $(1);if(m===o)return $(7);var v=(c={},c[s]=e,c[a]=n,c[r]=t,c)[m]||1,g=this.$d.getTime()+i*v;return S.w(g,this)},g.subtract=function(t,e){return this.add(-1*t,e)},g.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var i=t||"YYYY-MM-DDTHH:mm:ssZ",r=S.z(this),s=this.$H,a=this.$m,u=this.$M,o=n.weekdays,d=n.months,h=function(t,n,r,s){return t&&(t[n]||t(e,i))||r[n].slice(0,s)},l=function(t){return S.s(s%12||12,t,"0")},c=n.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:u+1,MM:S.s(u+1,2,"0"),MMM:h(n.monthsShort,u,d,3),MMMM:h(d,u),D:this.$D,DD:S.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:S.s(s,2,"0"),h:l(1),hh:l(2),a:c(s,a,!0),A:c(s,a,!1),m:String(a),mm:S.s(a,2,"0"),s:String(this.$s),ss:S.s(this.$s,2,"0"),SSS:S.s(this.$ms,3,"0"),Z:r};return i.replace($,(function(t,e){return e||m[t]||r.replace(":","")}))},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(i,c,f){var m,$=S.p(c),v=D(i),g=(v.utcOffset()-this.utcOffset())*e,_=this-v,p=S.m(this,v);return p=(m={},m[l]=p/12,m[d]=p,m[h]=p/3,m[o]=(_-g)/6048e5,m[u]=(_-g)/864e5,m[a]=_/n,m[s]=_/e,m[r]=_/t,m)[$]||_,f?p:S.a(p)},g.daysInMonth=function(){return this.endOf(d).$D},g.$locale=function(){return M[this.$L]},g.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=w(t,e,!0);return i&&(n.$L=i),n},g.clone=function(){return S.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},v}(),O=Y.prototype;return D.prototype=O,[["$ms",i],["$s",r],["$m",s],["$H",a],["$W",u],["$M",d],["$y",l],["$D",c]].forEach((function(t){O[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),D.extend=function(t,e){return t.$i||(t(e,Y,D),t.$i=!0),D},D.locale=w,D.isDayjs=y,D.unix=function(t){return D(1e3*t)},D.en=M[p],D.Ls=M,D.p={},D}()}));var r=i("hKdZU"),s=i("gngdn");(function(t){function e(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var n=e(t),i={name:"fr",weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"di_lu_ma_me_je_ve_sa".split("_"),months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},ordinal:function(t){return t+(1===t?"er":"")}};n.default.locale(i,null,!0)})(i("gngdn")),window.Alpine=r.default,s.locale("fr"),r.default.store("app",{title:null,interval:6e4,duration:8e3,spawn:60,unit:"minutes",open:!1,lastUsed:null,image:null,init(){const t=new URLSearchParams(document.location.search),e=parseInt(t.get("interval"));e>=1&&(this.interval=1e3*e);const n=parseInt(t.get("duration"));n>=1&&(this.duration=1e3*n);const i=parseInt(t.get("spawn"));i>=1&&(this.spawn=i);const r=t.get("unit");"minutes"!==r&&"hours"!==r||(this.unit=r);1===parseInt(t.get("debug"))&&this.debug(),this.lastUsed=window.localStorage.getItem("lastUsed"),document.addEventListener("DOMContentLoaded",(()=>{t.has("image")&&(document.getElementById("advertising-image").style["background-image"]=`url(${t.get("image")})`),this.intervalFunction(),setInterval((()=>this.intervalFunction()),this.interval)}))},intervalFunction(){const t=s();if(t.add(-this.spawn,this.unit).valueOf()>=this.lastUsed){this.open=!0;const e=setTimeout((()=>{this.open=!1,clearTimeout(e)}),this.duration);this.lastUsed=t.valueOf(),window.localStorage.setItem("lastUsed",this.lastUsed)}},debug(){this.spawn=.2,this.interval=1e3,this.duration=4e3}}),r.default.start();
//# sourceMappingURL=advertising.a567971a.js.map