const nums = [2, 4, 7, 8, 11, 14];  
const target = 18;  

function twosum(nums,target){
let emptyArr=[];

for(let i = 0; i < nums.length; i++){          
        for(let j = i + 1; j < nums.length; j++){  

            if(nums[i] + nums[j] === target){     
                emptyArr.push([i, j]);            
            }
        }
    }

    return emptyArr; 
}

console.log(twosum(nums, target)); 


