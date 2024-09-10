// PATTERN 1

function pattern1(n) {
  for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 0; j < n; j++) {
      str += '*';
    }
    console.log(str);
  }
}
// PATTERN 2

function pattern2(n) {
  for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 0; j < i; j++) {
      str += '*';
    }
    console.log(str);
  }
}

// PATTERN 3

function pattern3(n) {
  for (let i = 0; i <= n; i++) {
    let str = '';
    for (let j = 1; j <= i; j++) {
      str += `${j}`;
    }
    console.log(str);
  }
}
// PATTERN 4

function pattern4(n) {
  for (let i = 0; i <= n; i++) {
    let str = '';
    for (let j = 1; j <= i; j++) {
      str += `${i}`;
    }
    console.log(str);
  }
}

// PATTERN 5

function pattern5(n) {
  for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 0; j < n - i; j++) {
      str += '*';
    }
    console.log(str);
  }
}
// PATTERN 6

function pattern6(n) {
  for (let i = 0; i <= n; i++) {
    let str = '';
    for (let j = 1; j < n - i + 1; j++) {
      str += `${j}`;
    }
    console.log(str);
  }
}
// PATTERN 7

function pattern7(n) {
  for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 0; j < n - i - 1; j++) {
      str += ` `;
    }

    for (let j = 0; j < i * 2 - 1; j++) {
      str += `*`;
    }

    for (let j = 0; j < n - i - 1; j++) {
      str += ` `;
    }
    console.log(str);
  }
}
// PATTERN 8
// let n = 5;

function pattern8(n) {
  for (let i = n - 1; i > 0; i--) {
    let str = '';
    for (let j = 0; j < n - i - 1; j++) {
      str += ` `;
    }

    for (let j = 0; j < i * 2 - 1; j++) {
      str += `*`;
    }

    for (let j = 0; j < n - i - 1; j++) {
      str += ` `;
    }
    console.log(str);
  }
}

// PATTERN 9

function pattern9(n) {
  pattern7(n);
  pattern8(n);
}

// PATTERN 10

function pattern10(n) {
  pattern2(n);
  pattern5(n);
}

// PATTERN 11

// function pattern11(n) {
//   for (let i = 0; i < 5; i++) {
//     let str = '';
//     for (let j = 0; j <= i; j++) {
//       if ((i + j) % 2 === 0) {
//         str += '1';
//       } else {
//         str += '0';
//       }
//     }
//     console.log(str);
//   }
// }

// pattern11(6);

// // PATTERN 12

// function pattern12(n) {
//   for (let i = 1; i <= n; i++) {

//     let str = '';
//     for (let j = 1; j <= i; j++) {
//       str += `${j}`;
//     }
//     for (let j = n - i; j >= 1; j--) {
//       str += ' ';
//     }
//     for (let j = n - i; j >= 1; j--) {
//       str += ' ';
//     }
//     for (let j = i; j >= 1; j--) {
//       str += `${j}`;
//     }
//     console.log(str);
//   }
// }
// pattern12(4);

// PATTERN 13

// function pattern13(n) {
//   let count = 0;
//   for (let i = 1; i <= n; i++) {
//     let str = '';
//     for (let j = 1; j <= i; j++) {
//       ++count;
//       str += `${count}`;
//     }
//     console.log(str);
//   }
// }
// pattern13(5);

// PATTERN 14

// function pattern14(n) {
//   let count = 0;
//   for (let i = 1; i <= n; i++) {
//     let str = "";
//     for (let ch = "A".charCodeAt(0); ch < "A".charCodeAt(0) + i; ch++) {
//       str += `${String.fromCharCode(ch)}`;
//     }
//     console.log(str);
//   }
// }
// pattern14(5);

// PATTERN 15

// function pattern15(n) {
//   let count = 0;
//   for (let i = n; i > 0; i--) {
//     let str = "";
//     for (let ch = "A".charCodeAt(0); ch < "A".charCodeAt(0) + i; ch++) {
//       str += `${String.fromCharCode(ch)}`;
//     }
//     console.log(str);
//   }
// }
// pattern15(5);

// PATTERN 16

// function pattern16(n) {
//   let count = 0;
//   for (let i = 0; i >= n; i++) {
//     let str = '';
//     for (let j = 1; j <= i; j++) {
//       const ch = 'A'.charCodeAt(0) + i;
//       str += `${String.fromCharCode(ch)}`;
//     }
//     console.log(str);
//   }
// }
// pattern16(5);

// PATTERN 17
// function pattern17(n) {
//   for (let i = 0; i < n; i++) {
//     let str = '';
//     for (let j = 0; j < n - i + 1; j++) {
//       str += ' ';
//     }

//     for (let ch = 'A'.charCodeAt(0); ch <= 'A'.charCodeAt(0) + i; ch++) {
//       str += `${String.fromCharCode(ch)}`;
//     }
//     for (let ch = 'A'.charCodeAt(0) + i - 1; ch >= 'A'.charCodeAt(0); ch--) {
//       str += `${String.fromCharCode(ch)}`;
//     }

//     for (let j = 0; j < n - i + 1; j++) {
//       str += ' ';
//     }

//     console.log(str);
//   }
// }
// pattern17(4);

// PATTERN 18

// function pattern18(n) {
//   for (let i = 0; i <= n; i++) {
//     let str = "";
//     for (let j = 0; j <= i; j++) {
//       let ch = "A".charCodeAt(0) + n - j;
//       str = `${String.fromCharCode(ch)}` + str;
//     }

//     console.log(str);
//   }
// }
// pattern18(4);

// // PATTERN 19
// function pattern19(n) {
//   for (let i = 0; i <= n; i++) {
//     let str = "";
//     for (let j = 0; j <= n - i; j++) {
//       str += "*";
//     }

//     for (let j = 0; j < 2 * i; j++) {
//       str += " ";
//     }

//     for (let j = 0; j <= n - i; j++) {
//       str += "*";
//     }
//     console.log(str);
//   }

//   for (let i = 0; i <= n; i++) {
//     let str = "";
//     for (let j = 0; j <= i; j++) {
//       str += "*";
//     }

//     for (let j = 0; j < 2 * n - 2 * i; j++) {
//       str += " ";
//     }

//     for (let j = 0; j <= i; j++) {
//       str += "*";
//     }
//     console.log(str);
//   }
// }
// pattern19(5);
