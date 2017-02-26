// function index(){
//     function init(){
//         addonLoadEvent(function(){
//             console.log(1);
//         });
//         addonLoadEvent(function(){
//             console.log(2);
//         });
//         addonLoadEvent(function(){
//             console.log(3);
//         });
//     }
//     function addonLoadEvent(e){
//         var $ = window;
//         if(typeof $.onload == "function"){
//             var _old = $.onload;
//             $.onload = function(){
//                 _old();
//                 e();
//             }
//         }else{
//             $.onload = function(){
//                 e();
//             }
//         }
//     }
//     init();
// };
// index();

// //noconflict function
// var ny = {};
// ny.noconflict = function(){
//     if(typeof $ !== 'undefined'){

//     }
// }

// (function(window){
//     var index = {};
//     index.ready = function(){
//         var _$ = window.$;

//     }
//     index.init = function(){
//         this.ready();
//         this.end();
//     }
//     window.$ = _$;
// })(window);

(function ($, doc) {
    var init = function () {
        var w = $.innerWidth,
            docE = doc.documentElement;
        if (!w) {
            return;
        }
        if (w > 640 || w == 640) {
            docE.style.fontSize = "100px";
        } else {
            docE.style.fontSize = 100 * (w / 640) + "px";
        }

    }
    var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    if (!doc.addEventListener) return;
    $.addEventListener(resizeEvt, init,false);
    addonLoadEvent(init);
})(window, document)

function addonLoadEvent(e) {
    var $ = window;
    if (typeof $.onload == "function") {
        var _old = $.onload;
        $.onload = function () {
            _old();
            e();
        }
    } else {
        $.onload = function () {
            e();
        }
    }
}