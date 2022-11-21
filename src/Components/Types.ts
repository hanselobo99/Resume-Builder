import React, {ChangeEvent, Dispatch, SetStateAction} from "react";

export type basicDetail = {
    firstName: string
    lastName: string
    address: string
    email: string
    contact: string
}

export type inputProps = {
    name?: string
    placeHolder?: string
    value?: string | undefined
    inputType?: string
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
    error?: string
}

export type buttonProps = {
    name: string
    buttonClickHandler?: (event: React.MouseEvent<HTMLElement>) => void
    buttonType: "button" | "submit" | "reset" | undefined
    btnColor?: string
}

export type detailsProps = {
    details: detail
    setDetails: Dispatch<SetStateAction<detail>>
    change: (title: number) => void;
}

export type colProps = {
    children: React.ReactNode
}

export type educationalQualification = {
    courseName: string
    specialization: string
    university: string
    yearOfCompletion: string
    percentage: string
}


export type educationalQualifications = educationalQualification[]

export type achievementsSkills = {
    achievement1: string
    achievement2: string
    skill1: string
    skill2: string
    skill3: string
}

export type detail = {
    basicDetail: basicDetail
    careerObjective: string
    educationalQualifications: educationalQualifications
    achievementsSkills: achievementsSkills
}

export type educationalDetailsProps = {
    order: number
    educationalQualification: educationalQualifications
    educationalQualificationErrors: educationalQualifications
    setEducationalQualification: React.Dispatch<React.SetStateAction<educationalQualifications>>
}
export type resumeProps = {
    details?: detail
}