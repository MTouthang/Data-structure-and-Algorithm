/**
 * Q34. what is promise
 * - A promise is an object that may produce single value some time in future with either resolve or
 * reject or reason why it is rejected.
 * Promise has three state
 * - pending
 * - fullfil
 * - reject
 */

/**
 * Promise method
 * - promise.all()
 * - promise.allSettled()
 */

// promise.all() method is a method which is used to handle a collection of promises and wait for all of them
// to resolve before returning a single resolved value.
// if any of the promise reject, then Promise.all will immediately reject with the value of the first
// reject promise.

const promise1 = Promise.resolve(3);
const promise2 = Promise.reject(2);
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([promise1, promise2, promise3])
  .then((value) => {
    console.log(value);
  })
  .catch((error) => console.log(error));

/**
 * Promise.AllSettled - is similar to Promise.all but instead of waiting for all the promise to resolve
 * or for the first promise to reject, it waits for all promise to either resolve or reject
 * and returns an array an object returning outcome of each promise
 */

const promiseFecth = Promise.resolve(1);
const promiseFetch1 = Promise.resolve(2);
const promiseFetch2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "fetch3");
});

Promise.allSettled([promiseFecth, promiseFetch1, promiseFetch2])
  .then((value) => console.log(value))
  .catch((error) => console.log(error));
// output -
//   [
//     { status: 'fulfilled', value: 1 },
//     { status: 'fulfilled', value: 2 },
//     { status: 'fulfilled', value: 'fetch3' }
//   ]
