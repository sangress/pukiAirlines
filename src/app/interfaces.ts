export interface IPlane {
    id: number;
    model: string;
    sitsCount: number;
}

export interface AppStore {
    planes: IPlane[]
}
