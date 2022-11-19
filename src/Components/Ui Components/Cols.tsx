import React from "react";
import {colProps} from "../Types";


const Col1 = ({children}: colProps) => {
    return (
        <div className="grid mb-6 md:grid-cols-1">
            {children}
        </div>
    )
}

const Col2 = ({children}: colProps) => {
    return (
        <div className="grid gap-6 mb-6 md:grid-cols-2">
            {children}
        </div>
    )
}

const Col3 = ({children}: colProps) => {
    return (
        <div className="grid gap-6 mb-6 md:grid-cols-3">
            {children}
        </div>
    )
}


export {Col1, Col2, Col3}