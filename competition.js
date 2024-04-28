// question 1
function maxsubarrayProduct(nums){
    if(nums.length<2)return "array should have atleast 2 integers"
    let maxproduct=nums[0]*nums[1]

    for(let i=1;i<nums.length-1;i++){
        const product=nums[i]*nums[i+1];
       
        maxproduct=Math.max(maxproduct,product)
        
    }
    if (Math.sign(maxproduct) === -0) return 0;
    return maxproduct;
}
let nums=[2,3,-9,0]
console.log(maxsubarrayProduct(nums))

// question 3
function reverseString(str){
    let words=str.split(" ")

    const reverseWords=words.map(word =>{
        return word.split("").reverse().join("")
    });
    
    return reverseWords.join(" ")
    
}
let inputstring="welcome to javascript guide"
console.log(reverseString(inputstring))

// question2
function twoSum(num, targetsum) {
    for (let i = 0; i < num.length; i++) {
        for (let j = i + 1; j < num.length; j++) {
            if (num[i] + num[j] === targetsum) {
                return [i, j];
            }
        }
    }
    return [];
}

const numsinput = [3,2,4];
const target = 6;
console.log(twoSum(numsinput, target));

// question5

function amountToCoins(amount, coins) {
    const result = [];
    
    for (let i = 0; i < coins.length; i++) {
        while (amount >= coins[i]) {
            result.push(coins[i]);
            amount -= coins[i];
        }
    }
    
    return result;
}

const amount = 56;
const coins = [25, 10, 5, 2, 1];
console.log(amountToCoins(amount, coins)); 


