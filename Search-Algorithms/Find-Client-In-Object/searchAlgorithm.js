// SEARCH ALGORITHM TO FIND SPECIFIC USER / CLIENT IN THE OBJECTS AND ARRAYS

const clients = [
  { name: "shahzaib", email: "shahzaib@gmail.com" },
  { name: "xyz", email: "xyz@gmail.com" },
];

const findClient = (arr, client) => {
  for (let item of arr) {
    if (item.name === client) {
      return true;
    }
  }
  return false;
};

const res = findClient(clients, "shahza");
console.log(res);
