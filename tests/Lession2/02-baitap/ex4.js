// a. Khai báo chiều cao của bạn (đơn vị cm)
const height = 150;
// Tính "số lẻ của chiều cao"
const heightDecimal = height - 100;
//Tính cân nặng lý tưởng:
const idealWeight = (heightDecimal*9)/10;
//Tính mức cân tối đa
const maxWeight = heightDecimal;
//Tính mức cân tối thiểu
const minWeight = (heightDecimal*8)/10;
//In ra kết quả
console.log(`Cân nặng lý tưởng: ${idealWeight}kg, Cân nặng tối đa: ${maxWeight}kg, Cân nặng tối thiểu: ${minWeight}kg`);