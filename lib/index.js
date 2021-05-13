"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var adkTitlePlayer_1 = require('./adkTitlePlayer/adkTitlePlayer');
var t = new adkTitlePlayer_1.AdkTitlePlayer('Hello Title');
setTimeout(function() {
    t.init(5);
}, 1000);
