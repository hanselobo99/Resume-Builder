import React, {useEffect} from "react";
import {detail} from "../Types";
import {useNavigate} from "react-router-dom";

const Resume = () => {
    const navigate = useNavigate()
    useEffect(() => {
        let tempDetails = localStorage.getItem("details")
        let details:detail
        if (!tempDetails) {
            navigate("/")
        }else{
            details = JSON.parse(tempDetails)
            console.log(details)
        }
    })

    return (
        <>
            Coming soon
        </>
    )
}

export default Resume