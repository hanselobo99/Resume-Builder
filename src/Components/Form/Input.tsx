import React, {useEffect, useState} from "react";
import {inputProps} from "../Types";

const Input = (props: inputProps) => {
    let name = props.name?.replace(" ", "_").toLowerCase()

    const [labelClass, setLabelClass] = useState("")
    const [inputClass, setInputClass] = useState("")
    const [err, setErr] = useState(false)
    useEffect(() => {

        if (props.error?.length !== 0) {
            setErr(() => true)
            setLabelClass(() => "text-red-700")
            setInputClass(() => "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg " +
                "focus:ring-red-500 focus:border-red-500 block w-full p-2.5")
        } else {
            setErr(() => false)
            setLabelClass(() => "text-gray-900 ")
            setInputClass(() => "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 " +
                "                   focus:border-blue-500 block w-full p-2.5  ")
        }
    }, [props.error])
    return (
        <div>
            <label htmlFor={name}
                   className={`block mb-2 text-sm font-medium ${labelClass}`}>{props.name}</label>
            <input type={props.inputType} id={name}
                   className={inputClass}
                   value={props.value}
                   placeholder={props.placeHolder} onChange={props.onChange}/>

            {err && <p className="mt-2 text-sm text-red-600 "><span
                className="font-medium"></span> {props.error}</p>}
        </div>
    )
}
export default Input