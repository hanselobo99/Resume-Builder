import React, {useEffect, useState} from "react";
import {detailsProps, educationalQualifications} from "../Types";
import EducationalDetails from "./EducationalDetails";
import Button from "../Ui Components/Button";
import {Col2} from "../Ui Components/Cols";
import {viewType} from "../Enum";

const EducationalQualifications = ({details, setDetails, change}: detailsProps) => {
    const [educationalQualification, setEducationalQualification] = useState<educationalQualifications>([])
    const [educationalQualificationErrors, setEducationalQualificationErrors] = useState<educationalQualifications>([])
    useEffect(() => {
        setEducationalQualification(() => details.educationalQualifications)
    }, [details.educationalQualifications])

    const previousButtonHandler = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault()
        setDetails((prevState) => {
            return {...prevState, educationalQualifications: educationalQualification}
        })
        change(viewType.CareerObjective)
    }

    const nextButtonHandler = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault()

    }

    return (
        <div className="p-4">
            <h5 className="text-4xl font-serif font-normal ">Educational Qualifications</h5>
            <EducationalDetails key={0} order={0} educationalQualification={educationalQualification}
                                setEducationalQualification={setEducationalQualification}
                                educationalQualificationErrors={educationalQualificationErrors}/>
            <hr/>
            <EducationalDetails key={1} order={1} educationalQualification={educationalQualification}
                                setEducationalQualification={setEducationalQualification}
                                educationalQualificationErrors={educationalQualificationErrors}/>
            <Col2>
                <Button name="Previous" buttonType="button" buttonClickHandler={previousButtonHandler}/>
                <Button name="Next" buttonType="button" buttonClickHandler={nextButtonHandler}/>
            </Col2>
        </div>
    )
}

export default EducationalQualifications