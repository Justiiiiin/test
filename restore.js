const zoo = {
  name: "Edinburgh Zoo",
  animals: [
    {
      id: 1,
      name: "Tom",
      species: "Tiger",
    },
    {
      id: 2,
      name: "Jerry",
      species: "Capybara",
    },
    {
      id: 3,
      name: "Sheryl",
      species: "Tarantula",
    },
  ],
};

// to access the info, we "drill down" one layer at a time
console.log(zoo.name);
console.log(zoo.animals[1].name);
console.log(zoo["animals"][2]["species"]);
