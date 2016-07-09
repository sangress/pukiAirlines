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
