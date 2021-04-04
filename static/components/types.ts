export interface OptionsType {
    value: string
    label: string
}

export interface RefObjectKeyRulesType {
    [key: string]: any
}
export interface FormData {
    model: string,
    label: string,
    type?: string,
    url?: string,
    loading?: boolean,
    multiple?: boolean,
    options?: OptionsType[],
    default?: number | string | any[],
}