let arr = [
  { id: 1, name: 'john', age: 18, profession: 'developer' },
  { id: 2, name: 'jack', age: 20, profession: 'developer' },
  { id: 3, name: 'karen', age: 19, profession: 'admin' },
];

// Don't worry about consoling these functions, they are already being called on the button clicks.
// Please don't change anything in the index.html file.

function PrintDeveloper() {
  //Write your code here , just console.log
  for (const user of arr) {
    if (user.profession === "developer") {
      console.log(user);
    }
  }
}

function addData() {
  //Write your code here, just console.log
  const newEmployee = { id: 4, name: "susan", age:20, profession: "intern" };
  arr.push(newEmployee);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  const filteredUsers = arr.filter(user => user.profession !== "admin");
  console.log("Users without admins:", filteredUsers);
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr2 = [
    { id: 1, name: 'jo', age: 18, profession: 'developer' },
    { id: 2, name: 'ja', age: 20, profession: 'developer' },
    { id: 3, name: 'ka', age: 19, profession: 'admin' },
  ];
  const arr3=arr.concat(arr2);
  console.log(arr3);
}

// Here is an example of how functions work,
// basically a function is a block of code which can directly access your 'arr' variable since arr is global.
// If I have a function called consoleArr(), that can directly access arr like this to console it.

function consoleArr() {
  console.log('Consoling Array Variable', arr);
  // Over here I can directly access the variable.
}
