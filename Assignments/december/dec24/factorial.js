var i, num, f;
f = 1;
num = 5
for(i = 1; i <= num; i++)  
{
    f = f * i;
    if(i<num)
        document.write(i+"*");
    else
        document.write(i+"=");
}
i = i - 1;  
console.log("The factorial of the number " + i + " is: " + f );
