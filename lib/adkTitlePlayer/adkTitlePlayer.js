'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.AdkTitlePlayer = void 0;
var AdkTitlePlayer = /** @class */ (function() {
    function AdkTitlePlayer(_startValue) {
        this.startValue = _startValue;
        this.init(0);
    }

    AdkTitlePlayer.prototype.up = function(num) {
        var r = '';
        for (var i = 0; i < num; i++) {
            r += this.startValue;
        }
        return r;
    };
    AdkTitlePlayer.prototype.init = function(num) {
        var _this = this;
        if (num === 0) {
            document.title = 'init #############################';
            return 'init : ' + this.startValue;
        }
        for (var i = 0; i < num; i++) {
            setTimeout(function() {
                var _num = 0;
                document.title = '#### ' + _this.startValue + ':' + _num + ' ####';
            }, (i + 1) * 3000);
        }
        return 'init : ' + num + ' : ' + this.startValue;
    };
    return AdkTitlePlayer;
}());
exports.AdkTitlePlayer = AdkTitlePlayer;
