var lengthOfLongestSubstring = function(s) {
    let map={}, maxLen=0, left=0;
    
    for(let right = 0;right<s.length;right++){
        if(map[s[right]] != undefined && map[s[right]]>=left){
            left = map[s[right]]+1;
        }
        map[s[right]] = right;
        maxLen = Math.max(maxLen, right-left+1);
    }


    return maxLen;
};

let inputStr ="abba";
console.log(lengthOfLongestSubstring(inputStr));