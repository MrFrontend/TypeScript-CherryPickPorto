/// <reference path="../typings/index.d.ts" />
// Libraries
import * as _ from 'lodash';

export {_};

// Models
import IPerson from './models/IPerson';
import IProduct from './models/IProduct';

// Util
import Greeter from './util/Greeter';

let me: IPerson = {
    name: 'Antoni',
    age: 30
};

let friends: IPerson[] = [
  { name: 'Margherita', age: 30 },
  { name: 'Angela', age: 23 },
  { name: 'Prashant', age: 27 },
  { name: 'David', age: 26 }
];

var products: IProduct[] = [
  { name: 'Hammer', price: 12.3 },
  { name: 'Glue', price: 23 },
  { name: 'Lawnmower', price: 70 }
];

let greeter: Greeter = new Greeter('Ola ');

_.each(friends, (currentFriend: IPerson) => {
    let currentGreeting = greeter.greet(currentFriend);
    console.log(currentGreeting);
});