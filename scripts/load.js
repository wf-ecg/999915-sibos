/*jslint es5:true, white:false */
/*globals $, Global, Main, Modernizr, window */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

var Data, CDN, W = (W || window);
var ShareStrings;

W.debug = 1;

if ($.now() > 137760e7) {
    W.debug--;
}
if (W.isIE) {
    W.debug--;
}

CDN = {
    self: '/lib/',
    disk: 'file:///lib/',
    bithon: '../../../../lib/',
    webdev: 'http://10.89.101.100/lib/',
    mython: 'http://10.89.101.81:8000/lib/',
    python: 'http://localhost:8000/lib/',
    other0: 'http://cdnjs.cloudflare.com/ajax/libs/',
}.bithon;

Modernizr.load([{
    test: W.isIE,
    yep: [
        CDN + 'ie/split.js',
        CDN + 'ie/html5shiv.js',
    ],
    //        CDN + 'ie/nwmatcher.min.js',
    //        CDN + 'ie/selectivizr-min.js',
    both: [
        CDN + 'underscore/js-1.4.4/underscore.js',
        CDN + 'js/console.js',
    ],
    //        CDN + 'video-js/4.1/video-js.css',
    //        CDN + 'video-js/4.1/video.dev.js',
    complete: function () {
        Data = new Global('Data', '(catchall data fixture)');
    },
}, {
    both: [
        '../scripts/drt.js',
        '../scripts/share.js',
        '../scripts/banner.js',
        '../scripts/scroll.js',
        '../scripts/main.js',
    ],
    complete: function () {
        Main(W).init();
    },
}, {
    test: !W.debug,
    yep: [
        CDN + 'js/ecg-ga.js',
    ],
}]);

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */