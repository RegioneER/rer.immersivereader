!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define('node_modules/@microsoft/immersive-reader-sdk/lib/immersive-reader-sdk',[],t):"object"==typeof exports?exports.ImmersiveReader=t():e.ImmersiveReader=t()}(window,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CookiePolicy=void 0,function(e){e[e.Disable=0]="Disable",e[e.Enable=1]="Enable"}(t.CookiePolicy||(t.CookiePolicy={}))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CookiePolicy=t.launchAsync=t.close=t.renderButtons=void 0;var n=r(2);Object.defineProperty(t,"renderButtons",{enumerable:!0,get:function(){return n.renderButtons}});var o=r(3);Object.defineProperty(t,"close",{enumerable:!0,get:function(){return o.close}}),Object.defineProperty(t,"launchAsync",{enumerable:!0,get:function(){return o.launchAsync}});var i=r(0);Object.defineProperty(t,"CookiePolicy",{enumerable:!0,get:function(){return i.CookiePolicy}}),"undefined"!=typeof window&&window.addEventListener("load",(function(){var e,t;window.hasOwnProperty("Promise")||(e="https://contentstorage.onenote.office.net/onenoteltir/permanent-static-resources/promise-polyfill.min.js",(t=document.createElement("script")).src=e,document.head.appendChild(t)),n.renderButtons()}))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.renderButtons=void 0;var n={af:"Indompelende leser",am:"በህያው ስሜት ፈጣሪ ዕይታ አንባቢ",ar:"القارئ الشامل",as:"ইমাৰচিভ ৰিডাৰ",az:"İmmersiv Oxuyucu",be:"Імерсіўны чытальнік",bg:"Концентриран четец",bn:"মনোগ্রাহী পাঠক","bn-bd":"ইমার্সিভ পাঠক",bs:"Koncentrirani čitalac",ca:"Lector immersiu",cs:"Asistivní čtečka","cy-gb":"Darllenydd Ymdrwythol",da:"Forenklet læser",de:"Plastischer Reader",el:"Προηγμένο πρόγραμμα ανάγνωσης",en:"Immersive Reader",es:"Lector inmersivo",et:"Süvaluger",eu:"Irakurgailu murgiltzailea",fa:"خواننده همه‌جانبه",fi:"Syventävä lukuohjelma",fil:"Immersive Reader",fr:"Lecteur immersif","ga-ie":"Léitheoir tumthach",gd:"An leughadair ùr-nòsach",gl:"Lector avanzado",gu:"ઇમર્સિવ રીડર",ha:"Mai karatu Mai barbazawa",he:"תצוגת קריאה מודרנית",hi:"इमर्सिव रीडर",hr:"Stopljeni čitač",hu:"Modern olvasó",hy:"Խորասուզված ընթերցիչ",id:"Pembaca Imersif",ig:"Ọgụụ Kenzipụtara",is:"Aðgengilegt lestrarumhverfi",it:"Strumento di lettura immersiva",ja:"イマーシブ リーダー",ka:"იმერსიული წამკითხველი",kk:"Иммерсивті оқу құралы",km:"កម្មវិធីអានពណ៌រំលេចនៅលើអេក្រង់",kn:"ಇಮ್ಮರ್ಸಿವ್ ಓದುಗ",ko:"몰입형 리더",kok:"तंद्री लागिल्लो वाचक","ku-arab":"خوێنەری پڕ",ky:"Курчаган Окугуч",lb:"Immersive Reader",lo:"ຕົວອ່ານອິມເມີສີບ",lt:"Įtraukianti skaitytuvė",lv:"Tīrskata lasītājs",mi:"Pūpānui Rumaki",mk:"Сеопфатен читач",ml:"ഇമ്മേഴ്‌സീവ് റീഡർ",mn:"Идэвхтэй уншигч",mr:"इमर्सिव्ह वाचक",ms:"Pembaca Imersif",mt:"Qarrej Immersiv",ne:"इमेर्सिभ रिडर",nl:"Insluitende lezer","nn-no":"Engasjerande lesar",no:"Engasjerende leser",nso:"Go Bala ka Mongwalo o Mokoto",or:"ଇମରସିଭ୍ ରିଡର୍",pa:"ਇਮਰਸਿਵ ਰੀਡਰ","pa-arab":"گھیرن آلا مطالعہ کار",pl:"Czytnik immersyjny",prs:"خواننده نمایش",pt:"Leitura Avançada",quc:"Nim ucholajil sik'inel uwach",quz:"Wankisqa Ñawiq",ro:"Immersive Reader",ru:"Иммерсивное средство чтения",rw:"Insakazasoma",sd:"امرسو ريڊر",si:"ගිලෙන සුළු කියවනය",sk:"Imerzná čítačka",sl:"Potopni bralnik",sq:"Lexuesi kredhës","sr-cyrl-ba":"Концентрисани читалац","sr-cyrl-rs":"Концентрисани читалац","sr-latn-rs":"Koncentrisani čitalac",sv:"Avancerad läsare",sw:"Kisomaji cha Kuzamisha",ta:"அற்புதமான ரீடர்",te:"మంత్రముగ్ధులను చేసే పఠన సాధనం","tg-cyrl-tj":"Хонандаи фарогир",th:"โปรแกรมช่วยอ่าน",ti:"ኣንባቢ ሕሉው ስምዒት ፈጣሪ",tk:"Giňişleýin okaýjy",tn:"Sebadi sa Imesife",tr:"Tam Ekran Okuyucu",tt:"Чолгап алучы уку чарасы","ug-cn":"چۆكمە ئوقۇغۇچ",uk:"Занурення в текст",ur:"امرسیو مطالعہ کار",uz:"Immersiv mutolaa vositasi",vi:"Trình đọc Chân thực",wo:"Jàngukaay bu Rafet",xh:"Isifundi Esikhulu",yo:"Ìwò Alámùtán",zh:"沉浸式阅读器","zh-hant":"沈浸式閱讀程式",zu:"Isifundi Sokuzizwisa"};function o(e){var t=document.createElement("img");t.src="https://contentstorage.onenote.office.net/onenoteltir/permanent-static-resources/immersive-reader-icon.svg";var r=e.getAttribute("data-icon-px-size")||"20";t.style.height=t.style.width=r+"px",t.style.verticalAlign="middle",t.style.marginTop="-2px";var n=e.getAttribute("data-locale")||"en";t.alt=s(n),e.appendChild(t)}function i(e){var t=document.createElement("span");t.style.marginLeft="8px",e.appendChild(t)}function a(e){var t=document.createElement("span"),r=e.getAttribute("data-locale")||"en";t.textContent=s(r),e.appendChild(t)}function s(e){return e=e.toLowerCase(),n[e]?n[e]:"zh-hk"===e||"zh-mo"===e||"zh-tw"===e?n["zh-hant"]:(e=e.substring(0,e.lastIndexOf("-")),n[e]?n[e]:(e=e.substring(0,e.lastIndexOf("-")),n[e]?n[e]:n.en))}t.renderButtons=function(e){var t=document.createElement("style");t.innerHTML=".immersive-reader-button{cursor:pointer;display:inline-block;padding:5px;} .immersive-reader-button:hover{background:rgba(0,0,0,.05);border-radius:2px",document.head.appendChild(t);var r=[].slice.call(document.getElementsByClassName("immersive-reader-button"));e&&e.elements&&(r=e.elements);for(var n=0,d=r;n<d.length;n++){var u=d[n];u.setAttribute("role","button");var l=u.getAttribute("data-locale")||"en";switch(u.setAttribute("aria-label",s(l)),u.getAttribute("data-button-style")||"icon"){case"icon":o(u);break;case"text":a(u);break;case"iconAndText":o(u),i(u),a(u)}}}},function(e,t,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.isValidSubdomain=t.close=t.launchAsync=void 0;var o=r(0),i=r(4),a={};a[i.ErrorCode.TokenExpired]="The access token supplied is expired.",a[i.ErrorCode.Throttled]="You have exceeded your quota.",a[i.ErrorCode.ServerError]="An error occurred when calling the server to process the text.",a[i.ErrorCode.InvalidSubdomain]="The subdomain supplied is invalid.";var s=!1;function d(e){if(!e)return!1;return new RegExp("^([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\\-]{0,61}[a-zA-Z0-9])$").test(e)}t.launchAsync=function(e,t,r,u){return s?Promise.reject("Immersive Reader is already launching"):new Promise((function(l,c){if(e)if(r)if(r.chunks)if(r.chunks.length)if(d(t)||u&&u.customDomain){s=!0;var m=Date.now();(u=n({uiZIndex:1e3,timeout:15e3,useWebview:!1,allowFullscreen:!0,hideExitButton:!1,cookiePolicy:o.CookiePolicy.Disable},u)).uiZIndex&&"number"==typeof u.uiZIndex||(u.uiZIndex=1e3);var f=null,p=document.createElement("div"),v=u.useWebview?document.createElement("webview"):document.createElement("iframe");v.allow="autoplay";var h=document.createElement("style");h.innerHTML="body{height:100%;overflow:hidden;}";var b=function(){f&&(window.clearTimeout(f),f=null)},g=function(){document.body.contains(p)&&document.body.removeChild(p),window.removeEventListener("message",k),b(),h.parentNode&&h.parentNode.removeChild(h)},y=function(){if(g(),u.onExit)try{u.onExit()}catch(e){}};g();var k=function(n){if(n&&n.data&&"string"==typeof n.data)if("ImmersiveReader-ReadyForContent"===n.data){b();var o={cogSvcsAccessToken:e,cogSvcsSubdomain:t,request:r,launchToPostMessageSentDurationInMs:Date.now()-m,disableFirstRun:u.disableFirstRun,readAloudOptions:u.readAloudOptions,translationOptions:u.translationOptions,displayOptions:u.displayOptions,sendPreferences:!!u.onPreferencesChanged,preferences:u.preferences};v.contentWindow.postMessage(JSON.stringify({messageType:"Content",messageValue:o}),"*")}else if("ImmersiveReader-Exit"===n.data)y();else if(n.data.startsWith("ImmersiveReader-LaunchResponse:")){var d=null,f=null,h=null;try{h=JSON.parse(n.data.substring("ImmersiveReader-LaunchResponse:".length))}catch(e){}h&&h.success?d={container:p,sessionId:h.sessionId,charactersProcessed:h.meteredContentSize}:f=h&&!h.success?{code:h.errorCode,message:a[h.errorCode],sessionId:h.sessionId}:{code:i.ErrorCode.ServerError,message:a[i.ErrorCode.ServerError]},s=!1,d?(b(),l(d)):f&&(y(),c(f))}else if(n.data.startsWith("ImmersiveReader-Preferences:")&&u.onPreferencesChanged&&"function"==typeof u.onPreferencesChanged)try{u.onPreferencesChanged(n.data.substring("ImmersiveReader-Preferences:".length))}catch(e){}};window.addEventListener("message",k),f=window.setTimeout((function(){g(),s=!1,c({code:i.ErrorCode.Timeout,message:"Page failed to load after timeout ("+u.timeout+" ms)"})}),u.timeout),u.allowFullscreen&&v.setAttribute("allowfullscreen",""),v.style.cssText="position: static; width: 100vw; height: 100vh; left: 0; top: 0; border-width: 0",u.useWebview&&v.addEventListener("loadstop",(function(){v.contentWindow.postMessage(JSON.stringify({messageType:"WebviewHost"}),"*")}));var w=(u.customDomain?u.customDomain:"https://"+t+".cognitiveservices.azure.com/immersivereader/webapp/v1.0/")+"reader?exitCallback=ImmersiveReader-Exit&sdkPlatform=js&sdkVersion=1.1.0";w+="&cookiePolicy="+(u.cookiePolicy===o.CookiePolicy.Enable?"enable":"disable"),u.hideExitButton&&(w+="&hideExitButton=true"),u.uiLang&&(w+="&omkt="+u.uiLang),v.src=w,p.style.cssText="position: fixed; width: 100vw; height: 100vh; left: 0; top: 0; border-width: 0; -webkit-perspective: 1px; z-index: "+u.uiZIndex+"; background: white; overflow: hidden",p.appendChild(v),document.body.appendChild(p),document.head.appendChild(h)}else c({code:i.ErrorCode.InvalidSubdomain,message:a[i.ErrorCode.InvalidSubdomain]});else c({code:i.ErrorCode.BadArgument,message:"Chunks must not be empty"});else c({code:i.ErrorCode.BadArgument,message:"Chunks must not be null"});else c({code:i.ErrorCode.BadArgument,message:"Content must not be null"});else c({code:i.ErrorCode.BadArgument,message:"Token must not be null"})}))},t.close=function(){window.postMessage("ImmersiveReader-Exit","*")},t.isValidSubdomain=d},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ErrorCode=void 0,function(e){e.BadArgument="BadArgument",e.Timeout="Timeout",e.TokenExpired="TokenExpired",e.Throttled="Throttled",e.ServerError="ServerError",e.InvalidSubdomain="InvalidSubdomain"}(t.ErrorCode||(t.ErrorCode={}))}])}));
require([
  'jquery',
  'node_modules/@microsoft/immersive-reader-sdk/lib/immersive-reader-sdk',
], function($, ImmersiveReader) {
  'use strict';

  $(document).ready(function() {
    // immersive reader
    function getTokenAndSubdomainAsync() {
      return new Promise(function(resolve, reject) {
        $.ajax({
          url: $('body').data('portalUrl') + '/@immersive-reader-token',
          type: 'GET',
          headers: { Accept: 'application/json' },
          success: function(data) {
            if (data.error) {
              reject(data.error);
            } else {
              resolve(data);
            }
          },
          error: function(err) {
            reject(err);
          },
        });
      });
    }

    function handleLaunchImmersiveReader() {
      getTokenAndSubdomainAsync()
        .then(function(response) {
          var token = response.token;
          var subdomain = response.subdomain;
          var content = '';
          if ($('body').hasClass('template-rernews_view')) {
            content = $('.news-text').html() || '';
          } else if ($('body').hasClass('portaltype-bando')) {
            content = $('.rer-contextual-text').html() || '';
          } else if ($('body').hasClass('portaltype-event')) {
            var details = $('.event.summary.details').html() || '';
            var text = $('#parent-fieldname-text').html() || '';
            content = details + text;
          } else if (
            $('body').hasClass('template-collection_bandi_view') ||
            $('body').hasClass('template-collection_bandi_tipologia_view')
          ) {
            content = $('#content .document-text').html() || '';
          } else {
            content = $('#content-core').html() || '';
          }

          // Learn more about chunk usage and supported MIME types https://docs.microsoft.com/azure/cognitive-services/immersive-reader/reference#chunk
          var data = {
            title: $('h1.documentFirstHeading').text(),
            chunks: [
              {
                content: content,
                mimeType: 'text/html',
              },
            ],
          };

          // Learn more about options https://docs.microsoft.com/azure/cognitive-services/immersive-reader/reference#options
          var options = {
            // onExit: exitCallback,
            uiZIndex: 2000,
          };

          ImmersiveReader.launchAsync(token, subdomain, data, options).catch(
            function(error) {
              alert('Impossibile caricare Immersive Reader.');
              console.error(error);
            }
          );
        })
        .catch(function(error) {
          alert('Impossibile caricare Immersive Reader.');
          console.error(error);
        });
    }

    $('.template-rernews_view #immersive-reader-wrapper').insertBefore(
      '.template-rernews_view .news-text'
    );

    $('.immersive-reader-link').click(function() {
      handleLaunchImmersiveReader();
    });

    function exitCallback() {
      alert('Impossibile caricare Immersive Reader.');
    }
  });
});

define("js/src/index.js", function(){});


//# sourceMappingURL=bundle-compiled.js.map