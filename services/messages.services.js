const createMessage = (user) => {
  return `My name is ${user.name}, I'm ${user.age} Yo and I'm from ${user.city}`;
};

const getMessage = (id) => {
  return ` Ana message l id dyali huwa ${id}`;
};

const filterMessages = (data) => {
  return data;
};

module.exports = { createMessage, getMessage, filterMessages };
