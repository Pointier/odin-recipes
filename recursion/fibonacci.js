function fibs(n) {
    if (n === 0) {
        return [];
    }
    else if (n === 1) {
        return [0];
    }
    else {
        var seq = [0, 1];
        var x = 0;
        var y = 1;
        while (seq.length < n) {
            seq.push(seq[x] + seq[y]);
            console.log(x);
            x++;
            y++;
        }
        return seq;
    }
}
function fibsRec(n) {
    if (n === 0) {
        return [];
    }
    else if (n === 1) {
        return [0];
    }
    else if (n === 2) {
        return [0, 1];
    }
    else {
        var arr = fibsRec(n - 1);
        arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
        return arr;
    }
}
function mergeSort(a) {
    var sortedLeft = [];
    var sortedRight = [];
    var arraySorted = [];
    // Logging the array state for debugging
    console.log("Sorting array: ", a);
    // Base case
    if (a.length <= 1) {
        return a;
    }
    // Split the array into two halves
    sortedLeft = mergeSort(a.slice(0, a.length / 2));
    sortedRight = mergeSort(a.slice(a.length / 2));
    var i = 0, j = 0;
    // Merge the sorted halves
    while (i < sortedLeft.length && j < sortedRight.length) {
        if (sortedLeft[i] > sortedRight[j]) {
            arraySorted.push(sortedRight[j]);
            j++;
        }
        else {
            arraySorted.push(sortedLeft[i]);
            i++;
        }
    }
    // Append remaining elements from both sides
    return arraySorted.concat(sortedLeft.slice(i)).concat(sortedRight.slice(j));
}
// Sample array to be sorted
var myArray = [3, 2, 1, 13, 8, 5, 0, 1];
console.log("Initial array: ", myArray);
// Sort the array
var sortedArray = mergeSort(myArray);
console.log("Sorted array: ", sortedArray);
// Print an empty array
console.log("Empty array: ", []);
