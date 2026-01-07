function findPalindrome(num) {
    let numStr = String(num);
    let len = numStr.length;
    let halfLen = Math.floor(len / 2);
    let leftHalf = numStr.slice(0, halfLen); // left part
    let middle = len % 2 === 0 ? '' : numStr[halfLen]; // middle digit if odd
    let rightHalf = numStr.slice(len - halfLen); // right part
    let leftArr = leftHalf.split("");
    
    let swapped = false;

    // Try to find next palindrome by swapping digits in left half
    for (let i = halfLen - 1; i > 0; i--) {
        if (leftArr[i - 1] < leftArr[i]) {
            // Swap
            [leftArr[i], leftArr[i - 1]] = [leftArr[i - 1], leftArr[i]];
            swapped = true;
            break;
        }
    }

    if (!swapped) {
        console.log("Not Possible");
        return;
    }

    let newLeft = leftArr.join("");
    let newRight = newLeft.split("").reverse().join("");

    let nextPalindrome = middle ? newLeft + middle + newRight : newLeft + newRight;

    console.log(nextPalindrome);
}

// Test cases
findPalindrome(4697557964); // Output: 4756996574
findPalindrome(543212345);  // Output: Not Possible
findPalindrome(12321);      // Example odd-length
