const isBirthdayData: boolean = true;
let ageData: number = 40;
const userNameData: string = 'Ivan';

// function logBrtMsg(isBirthday: boolean, age: number, userName: string): string {
//   if (isBirthday) {
//     return `Congrats ${userName.toUpperCase()}, age: ${age + 1}`;
//   } else {
//     return 'Error';
//   }
// }
const logBrtMsg = (isBirthday: boolean, age: number, userName: string): string => {
  if (isBirthday) {
    return `Congrats ${userName.toUpperCase()}, age: ${age + 1}`;
  } else {
    return 'Error';
  }
}

logBrtMsg(isBirthdayData, ageData, userNameData);
