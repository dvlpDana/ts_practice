"use strict";
function error(message) {
    throw new Error(message);
}
function fail() {
    return error("failed");
}
function infiniteLoop() {
    while (true) { }
}
let a = "hello";
if (typeof a !== "string") {
    a; //never
}
if (typeof b !== "string") {
    b; //number
}
