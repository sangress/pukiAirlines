import {IFlight} from '../interfaces';

export class Flight {
    constructor(
        private id,
        private date,
        private source,
        private destination,
        private plane
    ) {}
}
