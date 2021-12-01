function findSymmetricDifference(arr1, arr2) {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  const resultArr = [];
  let i = 0, j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      resultArr.push(arr1[i]);
      i++;
    } else if (arr1[i] > arr2[j]) {
      resultArr.push(arr2[j]);
      j++;
    } else {
      i++;
      j++;
    }
  }

  if (i == arr1.length && j < arr2.length) {
    for (; j < arr2.length; j++) {
      resultArr.push(arr2[j]);
    }
  } else if (j == arr2.length && i < arr1.length) {
    for (; i < arr1.length; i++) {
      resultArr.push(arr1[i]);
    }
  }

  return resultArr;
}

console.log(findSymmetricDifference([1, 2, 3], [3, 4]));