mod utils;

use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;


#[wasm_bindgen]//communicate between Rust and JavaScript
//addition
pub fn add(x: i32,y: i32)->i32 {

    let sum:i32 = x+y;

    return sum;

}

#[wasm_bindgen]
//substraction
pub fn sub(a: i32,b: i32)->i32 {

    let sub:i32 = a-b;

    return sub;

}

#[wasm_bindgen]
//multiplication 
pub fn mul(d: i32,e: i32)->i32 {

    let mul:i32 = d*e;

    return mul;

}

#[wasm_bindgen]
//division 
pub fn div(g: f64,h: f64)->f64 {

    let div:f64 = g/h;

    return div;

}
#[wasm_bindgen]
//modulus 
pub fn modulus(j: i32,k: i32)->i32{  

    let modulus:i32 = j%k;

    return modulus;

}


