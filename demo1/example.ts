interface IPerson {
  name: string;
  age: number;
  nationality?: string | string[]; 
}

var friends: IPerson[] = [
  { name: 'Margherita', age: 30 },
  { name: 'Angela', age: 23 },
  { name: 'Prashant', age: 27 },
  { name: 'David', age: 26 }
];

function sortByName(a: IPerson[]): IPerson[] {
  var result = a.slice(0);
  result.sort(function (x, y) {
    return x.name.localCompare(y.name);
  });
  return result;
}

var sorted = sortByName(friends);

console.log(sorted);