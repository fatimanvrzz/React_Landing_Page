type MemberData ={
    photoPath: string,
    name: string,
    mission: string
}




const TeamMember = ({photoPath, name, mission }: MemberData) => {
  return (
    <div className="flex flex-col">
      <img src={photoPath} alt="" /> 
      <h5 className="font-bold mt-5">{name}</h5>
      <p className="text-gray-400">{mission}</p>
    </div>
  )
}

export default TeamMember
