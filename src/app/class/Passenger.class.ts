import {IPassnger} from '../interfaces';

export class Passenger implements IPassnger {

    constructor(
        public id,
        public fName,
        public lName,
        public birthdate
    ) {}
}
 