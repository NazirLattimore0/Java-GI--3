ppi = () => {
  const personInformation = {
    name: "Hector Pacheco-Campos",
    ssn: 1234567890,
  };
  return (() => personInformation.name)();
};

getName = (x) => `This order is being delivered to ${x}`;

console.log(getName(ppi()));
