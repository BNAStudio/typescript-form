import { useState } from "react";
import { FormProps, Storage, UseLocalStorageReturn, UseStateLocalStorageValue } from "../types/Form.types"

/**
 * Custom hook for managing state with localStorage.
 * 
 * @param {Storage} param0 - Configuration object for the hook, including key and initialValue.
 * @returns {UseLocalStorageReturn} - A tuple containing the stored value and a function to update it.
 */

export const useLocalStorage = ({ key, initialValue }: Storage): UseLocalStorageReturn => {
    const [storedValue, setStoreValue] = useState<FormProps>(() => {
        if (typeof window === 'undefined') {
            return initialValue;
        }

        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error(error)
            return initialValue;
        }
    })

    /**
   * Function to update the stored value and save it to localStorage.
   * 
   * @param {FormProps | ((prevState: FormProps) => FormProps)} value - The new value or a function to calculate the new value based on the previous state.
   */
    const setLocalStorageValue: UseStateLocalStorageValue = (value) => {
        try {
            const valueToStored = typeof value === 'function' ? value(storedValue) : value
            setStoreValue(valueToStored);

            if (typeof window !== 'undefined') {
                window.localStorage.setItem(key, JSON.stringify(valueToStored));
            }

        } catch (error) {
            console.error(error)
        }
    }

    return [storedValue, setLocalStorageValue]
}


