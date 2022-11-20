import React, {ChangeEvent, useState} from "react";
import {Col1, Col2, Col3} from "../Ui Components/Cols";
import Input from "./Input";
import Button from "../Ui Components/Button";
import {achievementsSkills, detailsProps} from "../Types";
import {viewType} from "../Enum";
import Padding4 from "../Ui Components/Padding4";

const AchievementsSkills = ({details, setDetails, change}: detailsProps) => {
    const [achievementsSkills, setAchievementsSkills] = useState<achievementsSkills>({
        achievement1: "",
        achievement2: "",
        skill1: "",
        skill2: "",
        skill3: ""
    })
    const [achievementsSkillsErrors, setAchievementsSkillsErrors] = useState<achievementsSkills>({
        achievement1: "",
        achievement2: "",
        skill1: "",
        skill2: "",
        skill3: ""
    })
    const achievementOneHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setAchievementsSkills((prevState) => {
            return {...prevState, achievement1: event.target.value}
        })
    }
    const achievementTwoHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setAchievementsSkills((prevState) => {
            return {...prevState, achievement2: event.target.value}
        })
    }
    const skillOneHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setAchievementsSkills((prevState) => {
            return {...prevState, skill1: event.target.value}
        })
    }
    const skillTwoHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setAchievementsSkills((prevState) => {
            return {...prevState, skill2: event.target.value}
        })
    }
    const skillThreeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setAchievementsSkills((prevState) => {
            return {...prevState, skill3: event.target.value}
        })
    }
    const previousButtonHandler = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault()
        setDetails((prevState) => {
            return {...prevState, achievementsSkills}
        })
        change(viewType.EducationalQualifications)
    }
    const nextButtonHandler = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault()
        let errors = false
        if (achievementsSkills.achievement1.length === 0) {
            setAchievementsSkillsErrors((prevState) => {
                return {...prevState, achievement1: "Achievement 1 Cannot be empty"}
            })
            errors = true
        } else {
            setAchievementsSkillsErrors((prevState) => {
                return {...prevState, achievement1: ""}
            })
        }
        if (achievementsSkills.achievement2.length === 0) {
            setAchievementsSkillsErrors((prevState) => {
                return {...prevState, achievement2: "Achievement 2 Cannot be empty"}
            })
            errors = true
        } else {
            setAchievementsSkillsErrors((prevState) => {
                return {...prevState, achievement2: ""}
            })
        }
        if (achievementsSkills.skill1.length === 0) {
            setAchievementsSkillsErrors((prevState) => {
                return {...prevState, skill1: "Skill 1 Cannot be empty"}
            })
            errors = true
        } else {
            setAchievementsSkillsErrors((prevState) => {
                return {...prevState, skill1: ""}
            })
        }
        if (achievementsSkills.skill2.length === 0) {
            setAchievementsSkillsErrors((prevState) => {
                return {...prevState, skill2: "Skill 2 Cannot be empty"}
            })
            errors = true
        } else {
            setAchievementsSkillsErrors((prevState) => {
                return {...prevState, skill2: ""}
            })
        }
        if (achievementsSkills.skill3.length === 0) {
            setAchievementsSkillsErrors((prevState) => {
                return {...prevState, skill3: "Skill 3 Cannot be empty"}
            })
            errors = true
        } else {
            setAchievementsSkillsErrors((prevState) => {
                return {...prevState, skill3: ""}
            })
        }
        if (errors) {
            return
        } else {
            setDetails((prevState) => {
                return {...prevState, achievementsSkills: achievementsSkills}
            })
            let dets = JSON.stringify({...details, achievementsSkills: achievementsSkills})
            localStorage.setItem("details", dets)
            change(viewType.Resume)
        }

    }
    return (
        <Padding4>
            <h5 className="text-4xl font-serif font-normal ">Achievements and Skills</h5>
            <div className="p-3">

                <Col1>
                    <Input name="Achievement 1" inputType="text" value={achievementsSkills.achievement1}
                           onChange={achievementOneHandler}
                           placeHolder="Address" error={achievementsSkillsErrors.achievement1}/>
                </Col1>
                <Col1>
                    <Input name="Achievement 2" inputType="text" value={achievementsSkills.achievement2}
                           onChange={achievementTwoHandler}
                           placeHolder="Address" error={achievementsSkillsErrors.achievement2}/>
                </Col1>
                <Col3>
                    <Input name="Skill 1" inputType="text" value={achievementsSkills.skill1} onChange={skillOneHandler}
                           placeHolder="Email" error={achievementsSkillsErrors.skill1}/>
                    <Input name="Skill 2" inputType="text" value={achievementsSkills.skill2}
                           onChange={skillTwoHandler} placeHolder="Contact Info"
                           error={achievementsSkillsErrors.skill2}/>
                    <Input name="Skill 3" inputType="text" value={achievementsSkills.skill3}
                           onChange={skillThreeHandler} placeHolder="Contact Info"
                           error={achievementsSkillsErrors.skill3}/>
                </Col3>
                <Col2>
                    <Button name="Previous" buttonType="button" buttonClickHandler={previousButtonHandler}/>
                    <Button name="Create Resume" buttonType="button" btnColor="primary"
                            buttonClickHandler={nextButtonHandler}/>
                </Col2>
            </div>
        </Padding4>

    )
}

export default AchievementsSkills