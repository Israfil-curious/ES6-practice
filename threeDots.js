const friends = ["Steve job", "jacky", "jon doy"];
const otherFriends = ["Sophia", "Alyssa", "dianna"];
const friendsAge = [10, 20, 18, 22];
// const AllFriends = friends.concat(otherFriends).concat(friendsAge); old version.
// ES6 threeDots[...]for extract an array
const AllFriends = [...friends, ...otherFriends, ...friendsAge];
console.log(AllFriends);

const firstNum = 100;
const secondNum = 150;
const thirdNum = 250;

const numbers = [10, 20, 15, 25, 10];

const findMax = Math.max(firstNum, secondNum, thirdNum);
const maximum = Math.max(...numbers);

console.log(findMax);
console.log(maximum);