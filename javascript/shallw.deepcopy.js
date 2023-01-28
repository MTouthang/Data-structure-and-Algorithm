/**
 * Q86. What is swallow copy and deep copy
 * _> shallow copy
 *  - Shallow copy is a bit-wise copy of an object,
 *  - A new object is created that has an exact copy of values in the original object.
 *  - if any of the fields of the object references to other objects, just the reference addresses are copied
 *  - i.e only the memory address is copied.
 * _> deep copy
 *  - A deep copy copies of all fields and makes copies of dynamically allocated memory pointed to by the fields
 *  - A deep copy occurs when an object is copied along along with the objects to which it refers
 */

// shallow copy of the object is can be done using object.assign() method in javascript
// change in the original object will change the copy object
// reference is copy not object values.
let obj1 = {
  a: 1,
  b: 2,
};
obj1.a = 2;
let obj1Copy = Object.assign({}, obj1);

console.log(obj1Copy); // { a: 2, b: 2 }

// deep copy
// A deep copy in object can be using JSON.parse(JSON.stringify(object))
let obj2 = {
  a: 1,
  b: {
    c: 2,
  },
};
obj2.a = 2;
let newObj = JSON.parse(JSON.stringify(obj2));
newObj.a = 1;
console.log(newObj);

// third party lodash can be used to clean up of deep copy.
