export type SellerTableItemType = {
    powerType: string,
    kWh: number,
    date: string,
    status: boolean,
    provider: string,
    location: string,
    Co2CID: string,
    hyperCID: string,
    sequence: number,
}

export type buyerTableItemType = {
    powerType: string,
    kWh: number,
    date: string,
    provider: string,
}
