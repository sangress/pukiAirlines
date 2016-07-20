import {IPlane} from '../interfaces';

export class Plane implements IPlane{
    constructor(
        public id: number,
        public model: string,
        public sitsCount: number
    ) { }
}
