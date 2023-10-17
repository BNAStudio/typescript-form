import { Dispatch, SetStateAction } from "react"

export type FormProps = {
    name: string
    email: string
    age?: number
    vip: boolean
}

export type Storage = {
    key: string,
    initialValue: FormProps
}

export type UseStateLocalStorageValue = Dispatch<SetStateAction<FormProps>>

export type UseLocalStorageReturn = [
    FormProps,
    UseStateLocalStorageValue
]