"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rgb = require('rgb-hex');
var Color = /** @class */ (function () {
    function Color(red, green, blue) {
        if (red === void 0) { red = 0; }
        if (green === void 0) { green = 0; }
        if (blue === void 0) { blue = 0; }
        this.red = 0;
        this.green = 0;
        this.blue = 0;
        this.rgb = '000000';
        if (red < 0 || red > 255 || green < 0 || green > 255 || blue < 0 || blue > 255) {
            throw new Error("Invalid color " + red + ", " + green + ", " + blue);
        }
        this.red = red;
        this.green = green;
        this.blue = blue;
        this.rgb = rgb(red, green, blue).toUpperCase();
    }
    return Color;
}());
exports.Color = Color;
