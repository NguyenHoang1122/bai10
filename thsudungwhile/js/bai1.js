let number = +prompt("Enter your number");
let sum = 0;
while (number != -1){
    sum = sum + number;
    number = +prompt("Enter your number");
    alert(number);
}
document.write(`Tong la : ${sum}`);
