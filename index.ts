
let salary: number;
salary = 5000;

const userData =
  '{"isBirthdayData": true, "ageData": 40, "userNameData":"Ivan"}';

const userObj: {
  isBirthdayData: boolean;
  ageData: number;
  userNameData: string;
} = JSON.parse(userData);

console.log(userObj.smt);


function logBrtMsg(isBirthday: boolean, age: number, userName: string): string {
  if (isBirthday) {
    return `Congrats ${userName.toUpperCase()}, age: ${age + 1}`;
  } else {
    return 'Error';
  }
}


logBrtMsg(isBirthdayData, ageData, userNameData);
