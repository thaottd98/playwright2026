//1. Sum(1,100)
let sum = 0;
for (let i = 1;i<=100;i++){
    sum+=i
};
console.log(sum);

//2. Print bảng nhân 2 -> 9
for(let i=2;i<=9;i++){
    console.log(`--- Bảng nhân ${i} ---`);
    for (let j=1;j<=10;j++){
        console.log(`${i} x ${j} = ${i * j}`)
    }

};

//3. Create arr chứa số lẻ từ 1 -> 99
const arr = [];
for (let i=1;i<=99;i++){
    if (i%2 !== 0){
        arr.push(i);
    }
}
console.log(arr);

//4. In email từ 1->10
for (let i=1;i<=10;i++){
    console.log(`user${i}@example.com`);
};

//5. Sum doanh thu 12 tháng
const revenues = [
    { month: 1, total: 3000 },
    { month: 2, total: 2000 },
    { month: 3, total: 4500 },
    { month: 4, total: 300 },
    { month: 5, total: 2500 },
    { month: 6, total: 400 },
    { month: 7, total: 350 },
    { month: 8, total: 500 },
    { month: 9, total: 450 },
    { month: 10, total: 600 },
    { month: 11, total: 550 },
    { month: 12, total: 0 }
];
let totalrevenus = 0;
for(let i=1;i<revenues.length;i++){
    totalrevenus += revenues[i].total;
};
console.log(totalrevenus);