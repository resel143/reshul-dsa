var twoSum = function(nums, target) {
    let i, map={};

    for(i=0;i<nums.length;i++){
        let complement = target - nums[i];
        if(map[complement] !== undefined){
            return [map[complement], i]
        }
        map[nums[i]]=i;
    }

};

let nums = [2,7,11,15], target = 9;
console.log(twoSum(nums, target))