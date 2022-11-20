import React, {Fragment, useEffect, useState} from "react";
import {detail} from "../Types";
import {useNavigate} from "react-router-dom";
import {Col2} from "../Ui Components/Cols";
import H3 from "../Ui Components/H3";

const Resume = () => {
    const navigate = useNavigate()
    const [details, sedivetails] = useState<detail>({
        basicDetail: {
            firstName: "",
            address: "",
            contact: "",
            email: "",
            lastName: ""
        },
        careerObjective: "",
        educationalQualifications: [],
        achievementsSkills: {achievement1: "", achievement2: "", skill1: "", skill2: "", skill3: ""}
    })
    useEffect(() => {
        let tempDetails = localStorage.getItem("details") as string
        if (!tempDetails) {
            navigate("/")
        } else {
            sedivetails(() => JSON.parse(tempDetails))
        }
    }, [navigate])

    return (
        <div className="container " id='DivIdToPrint'>
            <div className="grid grid-cols-1 bg-white shadow-2xl">
                <div className="p-3 mx-10">
                    <div className="p-5">
                        <h1 className="text-4xl">{details.basicDetail.firstName} {details.basicDetail.lastName}</h1>
                        <h3>{details.basicDetail.address}</h3>
                        <h3>Phone: {details.basicDetail.contact}</h3>
                        <h3>Email: {details.basicDetail.email}</h3>
                    </div>
                    <hr/>
                    <div className="p-5">
                        <H3>Career Objective</H3>
                        <p>{details.careerObjective}</p>
                    </div>
                    <div className="p-5">
                        <H3>Achievements</H3>
                        <ul className="list-disc pl-5 leading-10">
                            <li>{details.achievementsSkills.achievement1}</li>
                            <li>{details.achievementsSkills.achievement2}</li>
                        </ul>


                    </div>
                    <div className="p-5">
                        <H3>Educational Qualification</H3>

                        {details.educationalQualifications.map((data, index) => {
                            return (
                                <Col2 key={index}>

                                    <div>Course</div>
                                    <div> {data.courseName}</div>
                                    <div>Specialization</div>
                                    <div> {data.specialization}</div>
                                    <div>University</div>
                                    <div> {data.university}</div>
                                    <div>Year of Completion</div>
                                    <div> {data.yearOfCompletion}</div>
                                    <div>CGPA/SGPA</div>
                                    <div> {data.percentage}</div>
                                    <hr/>
                                </Col2>
                            )
                        })}

                    </div>
                    <div className="p-5">
                        <H3>Skills</H3>
                        <ul className="list-disc pl-5 leading-10">
                            <li>{details.achievementsSkills.skill1}</li>
                            <li>{details.achievementsSkills.skill2}</li>
                            <li>{details.achievementsSkills.skill3}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume