var longestPalindrome = function(s) {
    let start = 0, maxLen = 1;
    if(s.length < 2 ) return s;

    function expand(left, right){
        while(left >= 0 && right <= s.length && s[left] == s[right]){
            if( right - left +1 > maxLen){
                start = left;
                maxLen = right -left +1;
            }
            left--
            right++
        }
    }

    for(let i =0;i< s.length;i++){
        expand(i,i)
        expand(i, i+1)
    }

        return s.substring(start, start + maxLen)
};


let inputStr = 'babad'
console.log(longestPalindrome(inputStr))