const arrayA = [5, 32, 3, 44, 1];
const arrayB = [57, 4, 21, 2, 13];

for (let i = 0; i < arrayB.length; i++) {
  if (arrayB[i] < arrayA[i]) {
    console.log(arrayB[i]);
  } else {
    console.log(arrayA[i]);
  }
}

//for (let i = 0; i < arrayA.length; i++) {
//  console.log(Math.min(arrayA[i], arrayB[i]));
//}
