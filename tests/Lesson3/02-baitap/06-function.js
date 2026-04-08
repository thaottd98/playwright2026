// 1. Viết hàm multiply nhận 2 tham số a và b, in ra kết quả nhân của chúng.
function multiply(a,b){
    console.log(`${a} x ${b} = ${a*b}`);
}
multiply(3,7);
multiply(25,4);

// 2. Viết hàm findMin nhận 3 tham số a, b, c, trả về giá trị nhỏ nhất.
function finMin(a,b,c){
    let min = a;
    if (b<a){
        min = b;
    }
    if (c<b){
        min = c;
    }
    return min;
}
console.log("Giá trị nhỏ nhất: " + finMin(3,-20,10));
console.log("Giá trị nhỏ nhất: " + finMin(90,11,99));

// 3. Viết hàm getTopStudents nhận 2 tham số: students và threshold.
function getTopStudents(students,threshold){
    const result = [];
    for (let i=0; i< students.length;i++){
        if (students[i].score >= threshold){
            result.push(students[i].name);
        }
    }
    return result;
}
const students = [
    { name: "Thao", score: 10 },
    { name: "Thuong", score: 4 },
    { name: "Quan", score: 6 }
];

console.log(getTopStudents(students, 5));

// 4. Viết hàm calculateInterest
function calculateInterest (principal,rate,years){
     const total = principal + (principal * rate * years) / 100;
    return total;
}
console.log(calculateInterest(6000000,3.5,2));
