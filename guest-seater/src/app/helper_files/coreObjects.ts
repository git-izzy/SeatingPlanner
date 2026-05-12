export interface Guest{
    id: number
    name: string
}

export type Dimensions={
    height:number | string;
    width:number | string;
}

export function toNumber(value: number | string): number {
    if (typeof value === "number") {
        return value;
    }

    const parsed = parseFloat(value);
    return Number.isNaN(parsed) ? 0 : parsed;
}