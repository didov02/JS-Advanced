var arr = [[1,2,3,4,5],[1,2,3,4,5]];
arr[1][2]=6;

var arr2 = [[7,8,9,10,11],[11,12,4,5,9]];

function sum1 (m1, m2, l1, l2) {
    var newM = [];

    for(var i=0; i<l1 ;i++) {
        newM[i] = [];
        for(var j=0; j < l2; j++) {
            newM[i][j] = m1[i][j] + m2[i][j];
        }
    }

    console.log(newM);
}

sum1(arr,arr2,arr.length,arr[0].length);
