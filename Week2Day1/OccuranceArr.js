const nums = [2, 4, 5, 2, 1, 2];
const k = 2;

function occuranceArr() {
    let count = 0;

    for (let index = 0; index < nums.length; index++) {
        if (nums[index] === k) {
            count++;
        }
    }
    return count;
}

console.log(occuranceArr());
