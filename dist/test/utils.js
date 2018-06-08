"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../lib/utils");
var chai_1 = require("chai");
describe('word parser', function () {
    it('initializes', function () {
        var color = new utils_1.Color(0, 0, 0);
        chai_1.expect(color.red).to.equal(0);
        chai_1.expect(color.green).to.equal(0);
        chai_1.expect(color.blue).to.equal(0);
        chai_1.expect(color.rgb).to.equal('000000');
    });
    it('test rgb', function () {
        var white = new utils_1.Color(255, 255, 255);
        chai_1.expect(white.rgb).to.equal('FFFFFF');
    });
});
