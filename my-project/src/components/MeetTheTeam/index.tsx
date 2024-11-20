import tData from "../../teamMember.json"
import TeamMember from "../TeamMember"


const MeetTheTeam = () => {
    return (

        < div className="flex flex-col items-center justify-center h-auto w-auto mb-20" id="team" >
            <div className="flex flex-col items-center justify-center gap-5">
                <h1 className="text-4xl font-bold mt-14">MEET THE TEAM</h1>
                <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>


                <div className="flex gap-5 items-center text-center mt-10 pb-10">
                    {tData.map((item) => {
                        return <TeamMember photoPath={item.photoPath} name={item.name} mission={item.mission} />
                    })}
                </div>

            </div>
        </div >
    )
}

export default MeetTheTeam
