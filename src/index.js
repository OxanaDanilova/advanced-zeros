module.exports = function getZerosCount(number, base) {
 
  ////// get prime numbers from base
  

  console.log('number - '+ number);
  console.log('base - '+ base);
  const arr=[];
  for (let i=2; i<=base;) {
    if (base%i==0) {
      arr.push(i);
       base=base/i;
     }
      else {
        i++;
    }
  }

 
//////sorting
 
 let max=arr[arr.length-1]; //// max from prime numbers
 console.log('Max -' + max);

 let min=0;                ///// another prime number, wich goes before max
 if (arr[arr.indexOf(max)-1]) {
   min=arr[arr.indexOf(max)-1];
 }
 console.log('min ' + min);


 ////// how many 'max' prime number in base
 let count=0; 
  for (i=0;i<arr.length;i++) {
   if (arr[i]===max) {
    count++;
   }
 }
////// how many 'min' prime number in base
 let count1=0;
 for (i=0;i<arr.length;i++) {
  if (arr[i]===min) {
   count1++;
  }
}

 const arr2=[];
 const arr3=[];

 let num=max;
 let num1=min;
 ///////// main algorithm///////////
 while (Math.trunc(number/num)>0){
   arr2.push(Math.trunc(number/num));
   num=num*max;
    }

    ///////// perform main algorithm when min meets more often then max in base ///////////
 
    if (count<count1) {
    while (Math.trunc(number/num1)>0){
      arr3.push(Math.trunc(number/num1));
      num1=num1*min;
        }}

     let sum=0;
 for (let i=0; i<arr2.length; i++) {
   
   sum=sum+arr2[i];
    }
    let sum1=0;
    for (let i=0; i<arr3.length; i++) {
      
      sum1=sum1+arr3[i];
       }

    sum=sum/count;
    if (count1!==0) {sum1=sum1/count1};
    
    if (sum>sum1 & sum1!==0) {
      return Math.trunc(sum1);
    } else return Math.trunc(sum);
  




}

