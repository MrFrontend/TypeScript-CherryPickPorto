import IPerson from '../models/IPerson';

interface IGreeter {
    greet(person: IPerson): string;
}

/**
 * Greeter
 */
class Greeter implements IGreeter {
    private salutation: string;
    
    public greet (person: IPerson): string {
        let greetingMessage = `${this.salutation} ${person.name}`;
        return greetingMessage;
    }
    
    constructor (salutation: string) {
        this.salutation = salutation;
    }
}

export default Greeter;