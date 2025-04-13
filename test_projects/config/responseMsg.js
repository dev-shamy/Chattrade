// const sortArray = () => {
//   const a = [10, 9, 3, 12, 15, 11];
//   const n = a.length;

//   for (let i = 0; i < n - 1; i++) {
//     for (let k = 0; k < n-i; k++) {
//       if (a[k] > a[k + 1]) {
//         let temp = a[k];
//         a[k] = a[k + 1];
//         a[k + 1] = temp;
//       }
//     }
//   }

//   console.log("Sorted Array is: b", a);
// };

// sortArray();

const test = () => {
  a = [2, 3, ];
  l = a[0];
  let sl;
  for (let i = 0; i < a.length; i++) {
    // 3>=2
    if (a[i] >= l) {
      sl = l;// 2
      l = a[i]; // 3
    } else if (a[i] != l && a[i] > sl) {
        //
      sl = a[i]; //3
    }
  }
  console.log("Element is: ", sl);
};
test();
