var twosum = function(num,target){
    num=[3,2,4];
    target=6;
    for(let i=0;i<=num.length;i++){
        for(let j=0;j<=num.lenth;j++){
            if(num[i]+num[j]== target){
                return [i,j]
            }
        }
    }
};
console.log("abc",twosum);
