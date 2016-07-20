export interface IPlane {
    id: number;
    model: string;
    sitsCount: number;
}

export interface IPassnger {
    id: number;
    fName: string;
    lName: string;
    birthdate: any;
}

export interface AppStore {
    planes: IPlane[]
}

export interface IFlight {
    id: number;
    date: any;
    source: string;
    destination: string;
    plane: IPlane
}
