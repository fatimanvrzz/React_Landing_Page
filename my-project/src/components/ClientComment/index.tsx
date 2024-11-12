import cData from "../../clientdata.json"
import ClientCard from "../ClientCard";




const ClientComment: React.FC = () => {


  return (
    <div className="flex flex-col items-center bg-gray-100">
      <div className="text-4xl font-bold mt-20 uppercase">What Our Clients Say</div>

      <div className="grid grid-cols-3 gap-3">
        {cData.map((item) => {
          return <ClientCard name={item.name} comment={item.comments} photoPath={item.photopath} />
        })}
      </div>

    </div>
  )
}

export default ClientComment