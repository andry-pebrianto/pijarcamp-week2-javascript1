let data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
};

const newData = {
  name: "Andry Pebrianto",
  email: "andrypeb227@gmail.com",
  hobbies: ["Playing Game", "Writing Story", "Coding"],
};

data = {
  ...data,
  ...newData,
};

// data setelah berubah
console.log(data);

const { street, city } = data.address;
console.log(street);
console.log(city);