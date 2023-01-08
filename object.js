"use strict";
const person1 = {
    name: 'Mark',
    age: 39
};
const person2 = Object.create({
    name: 'Mark',
    age: 39
});
create({ prop: 0 });
create(null);
// create(42); Error
// create(false); Error
// create(undefined); Error
