Q1

let arr = [1,1,1,1,2,2,2,2,0,0,0,0]
console.log(merge(arr));
function merge(arr){
    if(arr.length === 1) {
        return arr;
    }    
    let mid = Math.floor(arr.length / 2)
    let left = merge(arr.slice(0, mid))
    let right = merge(arr.slice(mid))
    return mergeSort(left, right)
    }
     
     
    function mergeSort(left,right){
        let result = []
        let i = 0;
        let j = 0;
        
        while(i < left.length && j < right.length) {
            
         if(left[i] <= right[j]){
             result.push(left[i])
             i++
         }   
         
         if(right[j] < left[i]){
             result.push(right[j])
             j++
         }   
                 }
                 
        while(i < left.length)    {
            result.push(left[i])
            i++
        } 
        
          while(j < right.length)    {
            result.push(right[j])
            j++
        } 
        return result
    }   
        