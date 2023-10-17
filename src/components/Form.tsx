import { useState, FormEvent } from "react";
import { FormProps } from "../types/Form.types";



export const Form = () => {

    const [form, setForm] = useState<FormProps>({ 
        name: "",
        email: "",
        age: undefined,
        vip: false
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(form)
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="name">Name: </label>
            <input autoComplete="false" id="name" name="name" type="text" onChange={(e) => handleChange(e)} />

            <div>{form.name}</div>
            <button type="submit">Submit</button>
        </form>
    )
}
