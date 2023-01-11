function reverse(arr) {
    var rev = new Array;
    for (var i = 0; i <= arr.length -1; i++) {
        rev.unshift(arr[i]);
    }
    return rev;
}
 
var arr = [ 1, 2, 3, 4, 5 ];
var rev = reverse(arr);
console.log(rev);