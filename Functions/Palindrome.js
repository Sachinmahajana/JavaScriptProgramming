console.log("Welcome to the function programs");
//Q1.Write a Function to check if the two numbers are palindrome

   let rem;
   let rev = 0;
   let input = 12321;
   
   function CheckPalindromeFun(num)
   {
    while(num>0)
    {
        rem = num%10;
        rev = (rev*10) + rem;
        num = Math.floor(num/10);
    }
    return rev;
   }
   let result = CheckPalindromeFun(input);
   if(input==result)
   {
    console.log("Number is Palindrom");
   }
   else
   {
    console.log("Number is not Palindrom")
   }
   