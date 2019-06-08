const promise = new Promise((resolve, reject) => {
  // resolve('This is my resolved data');
  reject('This is an error');
});

const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b)
    }, 2000)
  })
}

promise.then((data) => {
  console.log(data);
}).catch((e) => {
  console.log('Error:', e);
});

add(2,3).then((sum1) => {
  console.log('Sum 1 is', sum1);
  add(sum1, 10).then((sum2) => {
    console.log('Sum 2 is', sum2);
  });
})
