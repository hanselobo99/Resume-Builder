import React from "react";

const H3 = ({children}:{children:React.ReactNode}) =>{
    return(
        <h3 className="text-xl underline">
            {children} :
        </h3>
    )
}
export default H3