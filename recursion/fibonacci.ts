function fibs(n: number): Array<number> {
  if (n === 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else {
    const seq = [0, 1];

    let x = 0;
    let y = 1;
    while (seq.length < n) {
      seq.push(seq[x] + seq[y]);
      console.log(x);
      x++;
      y++;
    }

    return seq;
  }
}

function fibsRec(n: number): Array<number> {
  if (n === 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    const arr = fibsRec(n - 1);
    arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
    return arr;
  }
}

function mergeSort(a: Array<number>): Array<number> {
  let sortedLeft: Array<number> = [];
  let sortedRight: Array<number> = [];
  const arraySorted: Array<number> = [];

  if (a.length <= 1) {
    return a;
  }

  sortedLeft = mergeSort(a.slice(0, a.length / 2));
  sortedRight = mergeSort(a.slice(a.length / 2));

  let i = 0,
    j = 0;

  while (i < sortedLeft.length && j < sortedRight.length) {
    if (sortedLeft[i] > sortedRight[j]) {
      arraySorted.push(sortedRight[j]);
      j++;
    } else {
      arraySorted.push(sortedLeft[i]);
      i++;
    }
  }

  return arraySorted.concat(sortedLeft.slice(i)).concat(sortedRight.slice(j));
}

const myArray = [3, 2, 1, 13, 8, 5, 0, 1];
console.log("Initial array: ", myArray);

const sortedArray = mergeSort(myArray);
console.log("Sorted array: ", sortedArray);
