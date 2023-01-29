/**
 * Q72. What are javascript accessors?
 * ECMAScript 5 introduced javascript object accessors or computed through getters and setters.
 * Getters uses get keyword whereas setters uses set keyword
 */

var user = {
  firstName: "mang",
  lastName: "touthang",
  language: "en",
  get lang() {
    return this.language;
  },
  set lang(lang) {
    this.language = lang;
  },
};

console.log(user.lang);
user.lang = "jap";

console.log(user.lang);
