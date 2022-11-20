import React, {ChangeEvent, useEffect, useState} from "react";
import {detailsProps, educationalQualification} from "../Types";
import Button from "../Ui Components/Button";
import {Col1, Col2} from "../Ui Components/Cols";
import Input from "./Input";
import {viewType} from "../Enum";

const EducationalQualifications = ({details, setDetails, change}: detailsProps) => {
    const [educationalQualificationOne, setEducationalQualificationOne] = useState<educationalQualification>({
        specialization: "",
        courseName: "",
        percentage: "",
        university: "",
        yearOfCompletion: ""
    })
    const [educationalQualificationTwo, setEducationalQualificationTwo] = useState<educationalQualification>({
        specialization: "",
        courseName: "",
        percentage: "",
        university: "",
        yearOfCompletion: ""
    })
    const [educationalQualificationErrorsOne, setEducationalQualificationErrorsOne] = useState<educationalQualification>({
        specialization: "",
        courseName: "",
        percentage: "",
        university: "",
        yearOfCompletion: ""
    })
    const [educationalQualificationErrorsTwo, setEducationalQualificationErrorsTwo] = useState<educationalQualification>({
        specialization: "",
        courseName: "",
        percentage: "",
        university: "",
        yearOfCompletion: ""
    })
    useEffect(() => {
        setEducationalQualificationOne((prevState) => {
            return {...prevState, ...details.educationalQualifications[0]}
        })
        setEducationalQualificationTwo((prevState) => {
            return {...prevState, ...details.educationalQualifications[1]}
        })
    }, [details.educationalQualifications])

    const previousButtonHandler = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault()
        setDetails((prevState) => {
            return {...prevState, educationalQualifications: [educationalQualificationOne, educationalQualificationTwo]}
        })
        change(viewType.CareerObjective)
    }


    const courseNameHandler0 = (event: ChangeEvent<HTMLInputElement>) => {
        setEducationalQualificationOne((prevState) => {
            return {...prevState, courseName: event.target.value}
        })
    }
    const percentageHandler0 = (event: ChangeEvent<HTMLInputElement>) => {
        setEducationalQualificationOne((prevState) => {

            return {...prevState, percentage: event.target.value}
        })
    }
    const universityHandler0 = (event: ChangeEvent<HTMLInputElement>) => {
        setEducationalQualificationOne((prevState) => {
            return {...prevState, university: event.target.value}
        })
    }
    const yearOfCompletionHandler0 = (event: ChangeEvent<HTMLInputElement>) => {
        setEducationalQualificationOne((prevState) => {
            return {...prevState, yearOfCompletion: event.target.value}
        })
    }
    const specializationHandler0 = (event: ChangeEvent<HTMLInputElement>) => {
        setEducationalQualificationOne((prevState) => {
            return {...prevState, specialization: event.target.value}
        })
    }
    const courseNameHandler1 = (event: ChangeEvent<HTMLInputElement>) => {
        setEducationalQualificationTwo((prevState) => {
            return {...prevState, courseName: event.target.value}
        })
    }
    const percentageHandler1 = (event: ChangeEvent<HTMLInputElement>) => {
        setEducationalQualificationTwo((prevState) => {
            return {...prevState, percentage: event.target.value}
        })
    }
    const universityHandler1 = (event: ChangeEvent<HTMLInputElement>) => {
        setEducationalQualificationTwo((prevState) => {
            return {...prevState, university: event.target.value}
        })
    }
    const yearOfCompletionHandler1 = (event: ChangeEvent<HTMLInputElement>) => {
        setEducationalQualificationTwo((prevState) => {
            return {...prevState, yearOfCompletion: event.target.value}
        })
    }
    const specializationHandler1 = (event: ChangeEvent<HTMLInputElement>) => {
        setEducationalQualificationTwo((prevState) => {
            return {...prevState, specialization: event.target.value}
        })
    }
    const nextButtonHandler = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault()
        let errors = false
        if (educationalQualificationOne.courseName.length === 0) {
            setEducationalQualificationErrorsOne((prevState) => {
                return {...prevState, courseName: "Course name cant be empty"}
            })
            errors = true
        } else {
            setEducationalQualificationErrorsOne((prevState) => {
                return {...prevState, courseName: ""}
            })
        }
        if (educationalQualificationOne.specialization.length === 0) {
            setEducationalQualificationErrorsOne((prevState) => {
                return {...prevState, specialization: "Specialization cant be empty"}
            })
            errors = true
        } else {
            setEducationalQualificationErrorsOne((prevState) => {
                return {...prevState, specialization: ""}
            })
        }
        if (educationalQualificationOne.university.length === 0) {
            setEducationalQualificationErrorsOne((prevState) => {
                return {...prevState, university: "university name cant be empty"}
            })
            errors = true
        } else {
            setEducationalQualificationErrorsOne((prevState) => {
                return {...prevState, university: ""}
            })
        }
        if (educationalQualificationOne.yearOfCompletion.length === 0) {
            setEducationalQualificationErrorsOne((prevState) => {
                return {...prevState, yearOfCompletion: "Year Of completion cant be empty"}
            })
            errors = true
        } else {
            setEducationalQualificationErrorsOne((prevState) => {
                return {...prevState, yearOfCompletion: ""}
            })
        }
        if (educationalQualificationOne.percentage.length === 0) {
            setEducationalQualificationErrorsOne((prevState) => {
                return {...prevState, percentage: "Percentage cant be empty"}
            })
            errors = true
        } else {
            setEducationalQualificationErrorsOne((prevState) => {
                return {...prevState, percentage: ""}
            })
        }
        if (educationalQualificationTwo.courseName.length === 0) {
            setEducationalQualificationErrorsTwo((prevState) => {
                return {...prevState, courseName: "Course name cant be empty"}
            })
            errors = true
        } else {
            setEducationalQualificationErrorsTwo((prevState) => {
                return {...prevState, courseName: ""}
            })
        }
        if (educationalQualificationTwo.specialization.length === 0) {
            setEducationalQualificationErrorsTwo((prevState) => {
                return {...prevState, specialization: "Specialization cant be empty"}
            })
            errors = true
        } else {
            setEducationalQualificationErrorsTwo((prevState) => {
                return {...prevState, specialization: ""}
            })
        }
        if (educationalQualificationTwo.university.length === 0) {
            setEducationalQualificationErrorsTwo((prevState) => {
                return {...prevState, university: "university name cant be empty"}
            })
            errors = true
        } else {
            setEducationalQualificationErrorsTwo((prevState) => {
                return {...prevState, university: ""}
            })
        }
        if (educationalQualificationTwo.yearOfCompletion.length === 0) {
            setEducationalQualificationErrorsTwo((prevState) => {
                return {...prevState, yearOfCompletion: "Year Of completion cant be empty"}
            })
            errors = true
        } else {
            setEducationalQualificationErrorsTwo((prevState) => {
                return {...prevState, yearOfCompletion: ""}
            })
        }
        if (educationalQualificationTwo.percentage.length === 0) {
            setEducationalQualificationErrorsTwo((prevState) => {
                return {...prevState, percentage: "Percentage cant be empty"}
            })
            errors = true
        } else {
            setEducationalQualificationErrorsTwo((prevState) => {
                return {...prevState, percentage: ""}
            })
        }

        if (errors) {
            return
        } else {
            setDetails((prevState) => {
                return {
                    ...prevState,
                    educationalQualifications: [educationalQualificationOne, educationalQualificationTwo]
                }
            })
            change(viewType.AchievementsSkills)
        }
    }
    return (

        <div className="p-4">
            <h5 className="text-4xl font-serif font-normal ">Educational Qualifications</h5>
            <div className="p-3">
                <Col2>
                    <Input name="Course Name" inputType="text" value={educationalQualificationOne.courseName}
                           onChange={courseNameHandler0}
                           placeHolder="Course Name" error={educationalQualificationErrorsOne.courseName}/>
                    <Input name="Specialization" inputType="text" value={educationalQualificationOne.specialization}
                           onChange={specializationHandler0}
                           placeHolder="Specialization" error={educationalQualificationErrorsOne.specialization}/>
                </Col2>
                <Col1>
                    <Input name="University" inputType="text" value={educationalQualificationOne.university}
                           onChange={universityHandler0}
                           placeHolder="University" error={educationalQualificationErrorsOne.university}/>
                </Col1>
                <Col2>
                    <Input name="Year of Completion" inputType="number"
                           value={educationalQualificationOne.yearOfCompletion}
                           onChange={yearOfCompletionHandler0}
                           placeHolder="Year of Completion"
                           error={educationalQualificationErrorsOne.yearOfCompletion}/>
                    <Input name="Percentage / Grade" inputType="number" value={educationalQualificationOne.percentage}
                           onChange={percentageHandler0} placeHolder="Percentage / Grade"
                           error={educationalQualificationErrorsOne.percentage}/>
                </Col2>
            </div>
            <div className="p-3">
                <Col2>
                    <Input name="Course Name" inputType="text" value={educationalQualificationTwo.courseName}
                           onChange={courseNameHandler1}
                           placeHolder="Course Name" error={educationalQualificationErrorsTwo.courseName}/>
                    <Input name="Specialization" inputType="text" value={educationalQualificationTwo.specialization}
                           onChange={specializationHandler1}
                           placeHolder="Specialization" error={educationalQualificationErrorsTwo.specialization}/>
                </Col2>
                <Col1>
                    <Input name="University" inputType="text" value={educationalQualificationTwo.university}
                           onChange={universityHandler1}
                           placeHolder="University" error={educationalQualificationErrorsTwo.university}/>
                </Col1>
                <Col2>
                    <Input name="Year of Completion" inputType="number"
                           value={educationalQualificationTwo.yearOfCompletion}
                           onChange={yearOfCompletionHandler1}
                           placeHolder="Year of Completion"
                           error={educationalQualificationErrorsTwo.yearOfCompletion}/>
                    <Input name="Percentage / Grade" inputType="number" value={educationalQualificationTwo.percentage}
                           onChange={percentageHandler1} placeHolder="Percentage / Grade"
                           error={educationalQualificationErrorsTwo.percentage}/>
                </Col2>

            </div>


            <Col2>
                <Button name="Previous" buttonType="button" buttonClickHandler={previousButtonHandler}/>
                <Button name="Next" buttonType="button" buttonClickHandler={nextButtonHandler}/>
            </Col2>
        </div>
    )
}

export default EducationalQualifications