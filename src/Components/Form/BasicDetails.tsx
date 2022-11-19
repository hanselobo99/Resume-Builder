import React, {ChangeEvent, useEffect, useState} from "react";
import {Col1, Col2} from "../Ui Components/Cols";
import Input from "./Input";
import Button from "../Ui Components/Button";
import {basicDetail, detailsProps} from "../Types"
import {viewType} from "../Enum";

const BasicDetails = ({details, setDetails, change}: detailsProps) => {
    const [basicDetails, setBasicDetails] = useState<basicDetail>({
        firstName: "",
        address: "",
        contact: "",
        email: "",
        lastName: ""
    })
    const [basicDetailsErrors, setBasicDetailsError] = useState<basicDetail>({
        address: "",
        contact: "",
        email: "",
        firstName: "",
        lastName: ""
    })
    useEffect(() => {
        setBasicDetails(() => details.basicDetail)
    }, [details.basicDetail])

    const firstNameHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setBasicDetails((prevState) => {
            return {...prevState, firstName: event.target.value}
        })
    }
    const lastNameHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setBasicDetails((prevState) => {
            return {...prevState, lastName: event.target.value}
        })
    }
    const addressHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setBasicDetails((prevState) => {
            return {...prevState, address: event.target.value}
        })
    }
    const emailHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setBasicDetails((prevState) => {
            return {...prevState, email: event.target.value}
        })
    }
    const contactHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setBasicDetails((prevState) => {
            return {...prevState, contact: event.target.value}
        })
    }

    const buttonHandler = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault()

        const validateEmail = (email: string) => {
            return String(email)
                .toLowerCase()
                .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                );
        };

        let error = false
        if (basicDetails.firstName.length === 0) {
            setBasicDetailsError((prevState) => {
                return {...prevState, firstName: "First name Cannot be empty"}
            })
            error = true
        } else {
            setBasicDetailsError((prevState) => {
                return {...prevState, firstName: ""}
            })
        }
        if (basicDetails.lastName.length === 0) {
            setBasicDetailsError((prevState) => {
                return {...prevState, lastName: "Last name Cannot be empty"}
            })
            error = true
        } else {
            setBasicDetailsError((prevState) => {
                return {...prevState, lastName: ""}
            })
        }
        if (basicDetails.address.length === 0) {
            setBasicDetailsError((prevState) => {
                return {...prevState, address: "Address Cannot be empty"}
            })
            error = true
        } else {
            setBasicDetailsError((prevState) => {
                return {...prevState, address: ""}
            })
        }
        if (basicDetails.email.length === 0) {
            setBasicDetailsError((prevState) => {
                return {...prevState, email: "Email Cannot be empty"}
            })
            error = true
        } else if (!validateEmail(basicDetails.email)) {
            setBasicDetailsError((prevState) => {
                return {...prevState, email: "Enter Valid Email"}
            })
            error = true
        } else {
            setBasicDetailsError((prevState) => {
                return {...prevState, email: ""}
            })
        }
        if (basicDetails.contact.length === 0) {
            setBasicDetailsError((prevState) => {
                return {...prevState, contact: "First name Cannot be empty"}
            })
            error = true
        } else if (basicDetails.contact.length !== 10) {
            setBasicDetailsError((prevState) => {
                return {...prevState, contact: "Enter valid contact number"}
            })
            error = true
        } else {
            setBasicDetailsError((prevState) => {
                return {...prevState, contact: ""}
            })
        }
        if (error) {
            return
        } else {
            setDetails((prevState) => {
                return {...prevState, basicDetail: basicDetails}
            })
            change(viewType.CareerObjective)
        }
    }


    return (
        <div className="p-4">
            <h5 className="text-4xl font-serif font-normal ">Basic Details</h5>
            <div className="p-3">
                <Col2>
                    <Input name="First Name" inputType="text" value={basicDetails.firstName} onChange={firstNameHandler}
                           placeHolder="First Name" error={basicDetailsErrors.firstName}/>
                    <Input name="Last Name" inputType="text" value={basicDetails.lastName} onChange={lastNameHandler}
                           placeHolder="Last Name" error={basicDetailsErrors.lastName}/>
                </Col2>
                <Col1>
                    <Input name="Address" inputType="text" value={basicDetails.address} onChange={addressHandler}
                           placeHolder="Address" error={basicDetailsErrors.address}/>
                </Col1>
                <Col2>
                    <Input name="Email" inputType="email" value={basicDetails.lastName} onChange={emailHandler}
                           placeHolder="Email" error={basicDetailsErrors.email}/>
                    <Input name="Contact Number" inputType="number" value={basicDetails.contact}
                           onChange={contactHandler} placeHolder="Contact Info" error={basicDetailsErrors.contact}/>
                </Col2>
                <Col1>
                    <Button name="Next" buttonType="button" buttonClickHandler={buttonHandler}/>
                </Col1>
            </div>
        </div>

    )
}

export default BasicDetails