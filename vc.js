let arr = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];
console.log("unsorted:",arr);

function bubble(a){ //bouncy bubble sort !
    let l = 0; //left
    let r = 0; //right
    
    for(let i=0; i<a.length-1; i++){
        let flag = 0;
        if(i%2==0){
            for(let j=l; j<a.length-1-r; j++){
                if(a[j]>a[j+1]){
                    let temp = a[j];
                    a[j] = a[j+1];
                    a[j+1] = temp;
                    flag = 1;
                }
            }
            r++;
        }
        else{
            for(let k=a.length-1-r; k>l; k--){
                if(a[k]<a[k-1]){
                    let temp = a[k];
                    a[k] = a[k-1];
                    a[k-1] = temp;
                    flag = 1;
                }
            }
            l++;
        }
        if(flag==0)
        	break;
    }
    return a;
}


console.log("sorted:",bubble(arr));