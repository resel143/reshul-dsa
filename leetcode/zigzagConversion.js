var convert = function(s, numRows) {
    let arr = [], current = 0, shortStr='';

    while(current < s.length){
        shortStr = s.substring(current, current + numRows);
        current += numRows
        arr.push(shortStr)
        shortStr = s.substring(current,  current + (numRows-2));
        current += (numRows-2)
        arr.push(shortStr)
    }

    for(let i=0;i<arr.length;i++){
        if(i%2 == 1){
            if(arr[i].length == 0) arr[i] = '0' + arr[i] + '0'
            arr[i] = '0' + arr[i] + '0'
        }
    }

    console.log(arr)

};

let s = "PAYPALISHIRING", numRows = 3;

convert(s, numRows);