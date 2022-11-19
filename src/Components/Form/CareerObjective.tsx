import React, {ChangeEvent, useEffect, useState} from "react";
import {Col2} from "../Ui Components/Cols";
import Button from "../Ui Components/Button";
import {detailsProps} from "../Types";
import {viewType} from "../Enum";

const CareerObjective = ({details, setDetails, change}: detailsProps) => {
    const [err, setErr] = useState(false)
    const [careerObjective, setCareerObjective] = useState("")
    useEffect(() => {
        setCareerObjective(() => details.careerObjective)
    }, [details.careerObjective])
    const [inputClass, setInputClass] = useState("bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 " +
        "                   focus:border-blue-500 block w-full p-2.5 mb-8")
    const textareaHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        event.preventDefault()
        setCareerObjective(() => event.target.value)
    }
    const previousButtonHandler = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault()
        setDetails((prevState) => {
            return {...prevState, careerObjective}
        })
        change(viewType.BasicDetails)
    }
    const nextButtonHandler = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault()
        if (careerObjective.length === 0) {
            setErr(true)
            setInputClass(() => "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg " +
                "focus:ring-red-500 focus:border-red-500 block w-full p-2.5 ")
        } else {
            setInputClass(() => "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 " +
                "                   focus:border-blue-500 block w-full p-2.5 mb-8")
            setErr(false)
            setDetails((prevState) => {
                return {...prevState, careerObjective}
            })
            change(viewType.EducationalQualifications)
        }

    }
    return (
        <div className="p-4">
            <h5 className="text-4xl font-serif font-normal ">Career Objective</h5>
            <div className="p-3">
                 <textarea
                     className={inputClass}
                     rows={4}
                     placeholder="Your Career Objective"
                     value={careerObjective}
                     onChange={textareaHandler}
                 ></textarea>
                {err && <p className="mt-2 text-sm text-red-600 dark:text-red-500"><span
                    className="font-medium"></span> Career Objective cant be empty</p>}
                <Col2>
                    <Button name="Previous" buttonType="button" buttonClickHandler={previousButtonHandler}/>
                    <Button name="Next" buttonType="button" buttonClickHandler={nextButtonHandler}/>
                </Col2>
            </div>
        </div>

    )
}

export default CareerObjective