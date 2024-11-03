// 1.count the vowels and constants in string
// Input:-karunakar

const name = prompt("Enther the name:");
const vowels = "aeiouAEIOU"; // String of vowels (both lowercase and uppercase)
let result = "";
let res = "";
for (i = 0; i < name.length; i++) {
    if (vowels.includes(name[i])) {
        result += name[i];
    }
    if (!vowels.includes(name[i])) {
        res += name[i];
    }
}
console.log(name);
console.log(`${result}  (are vowles in this name)`);
console.log(`${res} (are consonents in this name)`);

// // 2.Wap to to calculate the sum of all multiples of 3between 1 to 30.
let sum = 0;
for (i = 1; i <= 30; i++) {
    if (i % 3 == 0) {
        sum += i;
    }
}
console.log(sum)
// //    3.check whether given number  is a armstrong number or not
num = prompt("Enter the number:");
i = 0;
len = num.length;
sum = 0;
input = num
while (i < +input) {
    mod = input % 10;
    mul = mod ** len;
    sum += mul;
    input = parseInt(input / 10);
}
console.log(num);
console.log(sum);
(num == sum) ? console.log("Amstrong") : console.log("NOT a Amstrong");