// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 19;

// // Для чисел, менших ніж порогове значення, спрацьовує continue, виконання тіла
// // припиняється і управління передається на наступну ітерацію.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число більше за ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }
// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// console.log(clients.slice(0, 4));

// const colors = ['red', 'green', 'blue', 'pink'];

// colors.splice(4, 0, 'purple');
// console.log(colors);
// //===============================================================
// const languages = ['C', 'C++', 'Java', 'JavaScript'];
// console.log(languages);

// // Заміняємо елемент з індексом 1 на новий
// languages.splice(1, 1, 'Python');
// console.log(languages); // ["C", "Python", "Java", "JavaScript"]

// // Заміняємо один елемент (з індексом 2) на декілька
// languages.splice(2, 1, 'C#', 'Swift', 'Go');
// console.log(languages);

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Monkong', 'Singu'];

// const allClientsWithOldFirst = oldClients.concat(newClients);
// console.log(allClientsWithOldFirst);

// const allClientsWithNewFirst = newClients.concat(oldClients);
// console.log(allClientsWithNewFirst);

// console.log(oldClients);
// console.log(newClients);
// const x = 20;
// const y = 10;
// const z = 5;
// function multiply(x, y, z) {
//   console.log(`Результат множення дорівнює ${x * y * z}`);
// }
// multiply(2, 3, 5);
// multiply(17, 6, 25);
// multiply(4, 8, 12);

// function multiply(x, y, z) {
//   console.log('Код до return виконується звичайним чином');

//   // Повертаємо результат виразу множення
//   return x * y * z;
// }

// // Результат роботи функції можна зберегти у змінну
// let result = multiply(2, 3, 5);
// console.log(result); // 30

// result = multiply(4, 8, 12);
// console.log(result); // 384

// result = multiply(17, 6, 25);
// console.log(result); // 2550

// function multiply(x, y, z) {
//   console.log(`Результат множення дорівнює ${x * y + z}`);
// }

// multiply(2, 3, 5);
// function count(countFrom = 0, countTo = 10, step = 1) {
//   // console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

//   for (let i = countFrom; i <= countTo; i += step) {
//     console.log(i);
//   }
// }
// count(0, 100, 1);
