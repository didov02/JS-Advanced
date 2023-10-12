function getMax(arr,n) {
    var max = arr[0];
    
    for(var i=1;i<n;i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

function countSort(arr,n,exp) {
    var output = new Array(n);
    var count = [0,0,0,0,0,0,0,0,0,0];

    for(var i=0;i<n;i++) {
        var x = Math.floor(arr[i]/exp)%10;
        count[x]++;
    }

    for(var i=1;i<n;i++) {
        count[i] += count[i-1];
    }

    for(var i=n-1;i>=0;i--) {
        output[count[x] - 1] = arr[i];
        count[x]--;
    }

    for(var i=0;i<n;i++) {
        arr[i]=output[i];
    }
}

function radixSort (arr,n) {
    var m = getMax(arr,n);

    for(var exp = 1; Math.floor(m/exp) > 0; exp *= 10) {
        countSort(arr,n,exp);
    }
}