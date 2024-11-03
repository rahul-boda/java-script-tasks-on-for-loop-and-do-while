// 1. Check whether a given number is  a perfect number Or not?  using do while
let num=prompt("Enter the number:")
sum=0;
i=1;
do{if(num % i==0){
    sum += i;}
i++
} while(i<= num / 2) 
console.log(sum)

// 2. Check whether given number is a prime number Or not

// let num =prompt("Enter the number:")
// sum=0;
// i=2;
// do { if(num % i == 0){
//     sum +=num;}
// i++
// } while(i<= num ) 
// console.log(sum)

// 3. Print a pattern in this way
//       A
//       AB
//       ABC
//       ABCD
//       ABCDE
input="ABCDE"
let i=1;
  do {
        let line = '';
        let j = 0;
        do {
            line += input[j]; 
            j++;
        } while (j < i); 
        
        console.log(line); 
        i++;
    } while (i <= input.length);






//for possitive number print
startinput=prompt("start:");
endinput=prompt("end:");
do{console.log(startinput)
    startinput++
}
while(startinput<=endinput)


    // for reverse print
    startinput=prompt("start:");
endinput=prompt("end:");
do{console.log(startinput)
    startinput--
}
while(startinput>=endinput)