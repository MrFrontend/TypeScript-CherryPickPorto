/// <reference path="../typings/index.d.ts" />
// Libraries
import * as _ from 'lodash';

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

// Use of generics to reuse the sort functionality for any type and any property of the given type.
function sortBy<T>(a: T[], key: string | ((item: T) => any)) {
    var result = a.slice(0);
    var callback = typeof key === 'string' ? x => x[key]: key;
    result.sort((x,y) => {
        var kx = callback(x);
        var ky = callback(y);
        return kx > ky ? 1 : kx < ky ? -1 : 0;
    });
    return result;
}

let greeter: Greeter = new Greeter();

_.each(friends, (currentFriend: IPerson) => {
    let currentGreeting = greeter.greet(currentFriend);
});
