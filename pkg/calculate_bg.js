import * as wasm from './calculate_bg.wasm';

const lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}
/**
*/
export function greet() {
    wasm.greet();
}

/**
* @param {number} x
* @param {number} y
* @returns {number}
*/
export function add(x, y) {
    var ret = wasm.add(x, y);
    return ret;
}

/**
* @param {number} a
* @param {number} b
* @returns {number}
*/
export function sub(a, b) {
    var ret = wasm.sub(a, b);
    return ret;
}

/**
* @param {number} d
* @param {number} e
* @returns {number}
*/
export function mul(d, e) {
    var ret = wasm.mul(d, e);
    return ret;
}

/**
* @param {number} g
* @param {number} h
* @returns {number}
*/
export function div(g, h) {
    var ret = wasm.div(g, h);
    return ret;
}

/**
* @param {number} j
* @param {number} k
* @returns {number}
*/
export function modulus(j, k) {
    var ret = wasm.modulus(j, k);
    return ret;
}

export function __wbg_alert_49b40ce7c7b62b0d(arg0, arg1) {
    alert(getStringFromWasm0(arg0, arg1));
};

