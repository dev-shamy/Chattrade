
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
