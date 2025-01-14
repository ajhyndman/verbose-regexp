"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rx = void 0;
function trim(str) {
    return str.replace(/\/\/.*/g, '').replace(/ *\n */g, '');
}
function parse(template, ...subs) {
    return subs.reduce((result, sub, i) => result + String(sub) + trim(template.raw[i + 1]), trim(template.raw[0]));
}
exports.rx = ((template, ...args) => new RegExp(parse(template, ...args)));
const FLAGS = 'dgimsuy';
for (let i = 1; i < (1 << FLAGS.length); i++) {
    const flags = FLAGS.replace(/./g, (char, offset) => (i & (1 << offset)) > 0 ? char : '');
    exports.rx[flags] = function (template, ...args) {
        return new RegExp(parse(template, ...args), flags);
    };
}
//# sourceMappingURL=index.js.map