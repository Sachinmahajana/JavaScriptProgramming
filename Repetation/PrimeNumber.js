//Q Prime Number

let input = 4;
let count = 0;
for(let i=2; i<input; i++){
    if(input%i==0)
    {
        count++;
        break;
    }
}
if(count>0){
    console.log("Number is not prime");
}
else{
    console.log("Number is Prime");
}