function partition (arr,low,high) {
    var pivot = arr[high];

    var i = low -1;

    for(var j=low; j<=high-1;j++) {
        if(arr[j] < pivot) {
            i++;
            [arr[i],arr[j]] = [arr[j],arr[i]];//swap
        }
    }

    [arr[i+1],arr[high]] = [arr[high],arr[i+1]];//swap
    return i+1;
}

function quickSort(arr,low,high) {
    if(low < high) {
        var pi=partition(arr,low,high);

        quickSort(arr,low,pi-1);
        quickSort(arr,pi+1,high);
    }
}

var arr = [1,14,2,8,7];
var size = arr.length;

quickSort(arr,0,size-1);
console.log("Sorted array:");
console.log(arr.join(" "));//set spaces between array elements