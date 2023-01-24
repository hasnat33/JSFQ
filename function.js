
function evenify_all(nums){
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if(num %2 == 0){
            console.log(num, ': is even number');  
    
        }
        else{ 
            console.log(num, ': is odd number')
        }
}
}   
    
nums = [5,12,18,56,99,87]
evenify_all(nums)

friends_age = [22,23,25,20,24,21]
evenify_all(friends_age);