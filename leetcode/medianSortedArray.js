let nums1 = [1,3], nums2 = [2, 4]

var findMedianSortedArrays = function(nums1, nums2) {
    let arr = [...nums1, ...nums2], median;
    arr.sort((a,b) => a-b)
    console.log(arr)
    let n = arr.length;
    if(n %2 ==0){
        return (arr[Math.floor((n-1)/2)] + arr[(Math.floor((n-1)/2))+1])/2
    }else{
        return arr[Math.floor(n/2)]
    }
};


let output = findMedianSortedArrays(nums1, nums2)

console.log(output)