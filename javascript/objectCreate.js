/**
 * Q68. How do you create object with prototype:
 * - Object.create(obj)
 */

const obj1 = {
  email: "em@gmail.com",
  username: "em",
};

const newObj = Object.create(obj1);
newObj.name = "touthang";
console.log(newObj);
