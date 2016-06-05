interface IPerson {
  name: string;
  age: number;
  nationality?: string | string[]; 
}

interface IProduct {
  name: string;
  price: number;
}

// Some data using our custom type IPerson
var me: IPerson = { name: 'Antoni', age: 30 };

var friends: IPerson[] = [
  { name: 'Margherita', age: 30 },
  { name: 'Angela', age: 23 },
  { name: 'Prashant', age: 27 },
  { name: 'David', age: 26 }
];

// Some data using our custom type IProduct
var products: IProduct[] = [
  { name: 'Hammer', price: 12.3 },
  { name: 'Glue', price: 23 },
  { name: 'Lawnmower', price: 70 }
];

/**
 * Greeter
 */
class Greeter {
  public greet (person: IPerson): void {
    let greetingMessage: string = `Hello!, ${person.name}.`;
    console.log(greetingMessage);
  }
}

// Function to sort IPerson by name.
function sortByName(a: IPerson[]): IPerson[] {
  var result = a.slice(0);
  result.sort((x, y) => {
    return x.name.localeCompare(y.name);
  });
  return result;
}

var greeter = new Greeter();
greeter.greet(me);