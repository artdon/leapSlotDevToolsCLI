"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdkTitlePlayer = void 0;
var adkTitlePlayer_1 = require("./adkTitlePlayer/adkTitlePlayer");
Object.defineProperty(exports, "AdkTitlePlayer", { enumerable: true, get: function () { return adkTitlePlayer_1.AdkTitlePlayer; } });
var t = new adkTitlePlayer_1.AdkTitlePlayer('Hello Title');
t.init(5);
t.up(2);
t.up(3);
