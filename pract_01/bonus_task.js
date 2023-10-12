function getSum(c,arr) {
    var sum = 0;

    for(var j=0;j<c.length;j++) {
        if(c[j].length > 1) {
            for(var k=0;k<c[j].length;k++) {
                if(c[j][k] === '*') {
                    if(sum === 0) {
                        sum += Number(c[j][k-1])*Number(c[j][k+1]);
                    } else {
                        sum = sum * Number(c[j][k+1]);
                    }
                } else if(c[j] === '/') {
                    if(sum === 0) {
                        sum += Number(c[j][k-1])/Number(c[j][k+1]);
                    } else {
                        sum = sum / Number(c[j][k+1]);
                    }
                }
            }
        } 
        
        if(sum !== 0) {
            c[j] = sum;
            sum = 0;
        }
    }

    var idx = 0;

    for(var j=0;j<arr.length;j++) {
        if(arr[j] === '+') {
            if(sum === 0) {
                sum= c[idx] + Number(c[idx+1]);
                idx+=2;
            } else {
                sum = sum + Number(c[idx++]);
            }
        } else if(arr[j] === '-') {
            if(sum === 0) {
                sum = c[idx] - Number(c[idx+1]);
                idx+=2;
            } else {
                sum = sum - Number(c[idx++]);
            }
        }
    }

    return sum;
}

var str = "7 - 3 * 2 + 1 = 4 * 2 + 1 = 8 + 1 = 9";
var arr = str.replace(/\s/g, "").split("=");

var count = 0;

for(var i=0;i<arr.length-1;i++) {
    var arr1 = arr[i];
    var arr2 = arr[i+1];

    var c1 = arr1.split(/[+-]/);
    var c2 = arr2.split(/[+-]/); 
    
    var sum1 = getSum(c1,arr1);
    var sum2 = getSum(c2,arr2);

    if(sum1 === sum2) {
        count++;
    }
}

console.log(count + "/" + arr.length-1);