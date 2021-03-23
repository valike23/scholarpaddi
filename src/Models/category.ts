export interface Icategory {
    id?: number;
    name?: string;
    subCategory?: Array<IsubCategory>
}
export interface IsubCategory {
    id?: number;
    name?: string;
}
