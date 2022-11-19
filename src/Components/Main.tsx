import React, {ChangeEvent, useState} from "react";
import BasicDetails from "./Form/BasicDetails";
import {detail} from "./Types";
import CareerObjective from "./Form/CareerObjective";
import {viewType} from "./Enum";
import EducationalQualifications from "./Form/EducationalQualifications";
import AchievementsSkills from "./Form/AchievementsSkills";
import Resume from "./Resume/Resume";


const Main = () => {
    const [details, setDetails] = useState<detail>({
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

    const [view, setView] = useState(viewType.BasicDetails)
    const goToView = (title: number) => {
        setView(() => title)
    }
    const formSubmitHandler = (event: ChangeEvent<HTMLFormElement>) => {
        event.preventDefault()

    }
    return (
        <main>
            <div className="container">
                <div className="grid grid-cols-1 bg-white shadow-2xl">
                    <h4 className="text-5xl font-serif font-medium text-center py-6">Details</h4>
                    <hr/>
                    <form onSubmit={formSubmitHandler}>
                        {view === viewType.BasicDetails &&
                            <BasicDetails details={details} setDetails={setDetails}
                                          change={goToView}/>}
                        {view === viewType.CareerObjective &&
                            <CareerObjective details={details} setDetails={setDetails}
                                             change={goToView}/>}
                        {view === viewType.EducationalQualifications &&
                            <EducationalQualifications details={details} setDetails={setDetails}
                                                       change={goToView}/>}
                        {view === viewType.AchievementsSkills &&
                            <AchievementsSkills details={details} setDetails={setDetails}
                                                change={goToView}/>}
                        {view === viewType.Resume &&
                            <Resume details={details}/>}
                    </form>
                </div>
            </div>
        </main>
    )
}
export default Main