'use strict';

// Home work - Functions & Arrays

let array1 = [5, 6, 3, 9, -3, -15, 0, -4, 13, 0, 44];
let array2 = [55, 36, -2, 15, -11, -18, 0, 4, 3];
console.log(`array1 = ${array1}`);
console.log(`array2 = ${array2}`);

// 1. Сумма отрицательных элементов массива
let sumNegativeElements = (arr) => {
  let sum = 0;
  arr.forEach((element) => {
    sum += element < 0 ? element : 0;
  });
  return sum;
};
console.log(`1. Сумма отрицательных элементов массива:`);
console.log(`array1 = ${sumNegativeElements(array1)}`);
console.log(`array2 = ${sumNegativeElements(array2)}`);

// 2. Замените все отрицательные элементы массива на ноль
let negativeElementsClean = (arr) => {
  let res = [];
  arr.forEach((element) => {
    res.push(element > 0 ? element : 0);
  });
  return res;
};
console.log(`2. Заменить отрицательные элементы на 0:`);
console.log(`array1 = ${negativeElementsClean(array1)}`);
console.log(`array2 = ${negativeElementsClean(array2)}`);

// 3. Найдите произведение элементов массива , которые меньше 10, но положительные
let multiPositiveElements = (arr) => {
  let res = 1;
  for (let i in arr) {
    res *= arr[i] > 0 && arr[i] < 10 ? arr[i] : 1;
  }
  return res;
};
console.log(`3. Произведение положительных элементов до 10:`);
console.log(`array1 = ${multiPositiveElements(array1)}`);
console.log(`array2 = ${multiPositiveElements(array2)}`);

// 4. Выведите индексы нулевых элементов массива (которые равны нулю), сохраняя результат в отдельный массив
let getNullIndexes = (arr) => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) res.push(i);
  }
  return res;
};
console.log(`4. Выбрать индексы нулевых элементов массива:`);
console.log(`array1 = ${getNullIndexes(array1)}`);
console.log(`array2 = ${getNullIndexes(array2)}`);

// 5. Вернуть первые N элемента массива
let getNelements = (arr, count = 0) => {
  let res = [];
  for (let i = 0; i < count; i++) {
    res[i] = arr[i];
  }
  return res;
};
console.log(`5. Вернуть первых 5 элементов массива:`);
console.log(`array1 = ${getNelements(array1, 5)}`);
console.log(`array2 = ${getNelements(array2, 5)}`);

// 6* найдите максимальный элемент массива
let getMaxElement = (arr) => {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    max = arr[i] > max ? arr[i] : max;
  }
  return max;
};
console.log(`6. Найти максимальный элемент массива:`);
console.log(`array1 = ${getMaxElement(array1)}`);
console.log(`array2 = ${getMaxElement(array2)}`);

// 7* найдите сумму элементов двух массивов , учитывая что у них может быть разная длина
let sumArrays = (a, b) => {
  let res = [];
  let maxIndex = a.length > b.length ? a.length : b.length;
  for (let i = 0; i < maxIndex; i++)
    res[i] = (a[i] != undefined ? a[i] : 0) + (b[i] != undefined ? b[i] : 0);
  return res;
};
console.log(`7. Найти сумму элементов двух массивов:`);
console.log(`array1 + array2 = ${sumArrays(array1, array2)}`);

// 8* переместить элемент массива : тоесть обменять например 2 и 5 элементы местами - это значит 2 элемент станет на место 5-го, а 5-й элемент станет вторым
let exchangeElements = (arr, index1, index2) => {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
  return arr;
};
console.log(`8. Обменять местами элементы с индексами 2 и 5:`);
console.log(`array1 = ${exchangeElements(array1, 2, 5)}`);
console.log(`array2 = ${exchangeElements(array2, 2, 5)}`);
