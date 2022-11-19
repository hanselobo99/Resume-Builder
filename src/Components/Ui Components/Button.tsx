import React from "react";
import {buttonProps} from "../Types";

const Button = ({buttonType, buttonClickHandler, name, btnColor = "secondary"}: buttonProps) => {
    let btnType: string = ""
    if (btnColor === "secondary") {
        btnType = "bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
    }else if(btnColor === "primary"){
        btnType = "bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300"
    }


    return (
        <div className="w-1/3 m-auto">
            <button type={buttonType} onClick={buttonClickHandler}
                    className={`text-white  font-medium rounded-lg text-sm w-full  px-5 py-2.5
                 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${btnType}`}>
                {name}</button>
        </div>
    )
}

export default Button