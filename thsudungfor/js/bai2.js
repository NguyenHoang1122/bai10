let number = +prompt("Enter your number");
let sum = 0;
for(let i = 1; i <= number; i++){
    sum += i;
}
document.write(`Tong tu 1 den ${number} la : ${sum}`);