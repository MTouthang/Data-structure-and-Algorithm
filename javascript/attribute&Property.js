/**
 * Q42. What is the difference between attribute and property
 * - Attribute : An attribute is a default value for an element that is set in the HTML code.
 * example - An `value` attribute in an `<input/>` element sets the default value of the input field
 * - Property - A property, on the other hand, is a value that is set and retrieved through javascript code
 */

// attribute 
<input type="text", value="default value" />

// property 
let input = document.querySelector("input")
console.log(input.value); // output : "default value"