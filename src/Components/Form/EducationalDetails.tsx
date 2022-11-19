import React, {ChangeEvent, useEffect, useState} from "react";
import {Col1, Col2} from "../Ui Components/Cols";
import Input from "./Input";
import {educationalQualification, educationalDetailsProps} from "../Types";


const EducationalDetails = ({
                                order,
                                educationalQualification,
                                setEducationalQualification,
                                educationalQualificationErrors
                            }: educationalDetailsProps) => {

    const [eduDetail, setEduDetail] = useState<educationalQualification>({
        id: order,
        specialization: "",
        courseName: "",
        percentage: "",
        university: "",
        yearOfCompletion: ""
    })
    const [eduDetailError, setEduDetailError] = useState<educationalQualification>({
        id: order,
        specialization: "",
        courseName: "",
        percentage: "",
        university: "",
        yearOfCompletion: ""
    })

    const courseNameHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setEduDetail((prevState) => {
            return {...prevState, courseName: event.target.value}
        })
    }
    const percentageHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setEduDetail((prevState) => {
            return {...prevState, percentage: event.target.value}
        })
    }
    const universityHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setEduDetail((prevState) => {
            return {...prevState, university: event.target.value}
        })
    }
    const yearOfCompletionHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setEduDetail((prevState) => {
            return {...prevState, yearOfCompletion: event.target.value}
        })
    }
    const specializationHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setEduDetail((prevState) => {
            return {...prevState, specialization: event.target.value}
        })
    }
    return (
        <div className="p-3">
            <Col2>
                <Input name="Course Name" inputType="text" value={eduDetail.courseName} onChange={courseNameHandler}
                       placeHolder="Course Name" error={eduDetailError.courseName}/>
                <Input name="Specialization" inputType="text" value={eduDetail.specialization}
                       onChange={specializationHandler}
                       placeHolder="Specialization" error={eduDetailError.specialization}/>
            </Col2>
            <Col1>
                <Input name="University" inputType="text" value={eduDetail.university} onChange={universityHandler}
                       placeHolder="University" error={eduDetailError.university}/>
            </Col1>
            <Col2>
                <Input name="Year of Completion" inputType="number" value={eduDetail.yearOfCompletion}
                       onChange={yearOfCompletionHandler}
                       placeHolder="Year of Completion" error={eduDetailError.yearOfCompletion}/>
                <Input name="Percentage / Grade" inputType="number" value={eduDetail.percentage}
                       onChange={percentageHandler} placeHolder="Percentage / Grade"
                       error={eduDetailError.percentage}/>
            </Col2>

        </div>
    )
}

export default EducationalDetails