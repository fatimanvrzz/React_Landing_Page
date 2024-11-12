
  type CleintCardProps = {
    name: string,
    photoPath: string,
    comment: string
  }


  const ClientCard = ({ name, photoPath, comment }: CleintCardProps) => {


    return (
      
        <div className="flex items-start pl-10 gap-5 w-max mt-20 mb-5">

          <img src={photoPath} className="w-20 h-20 rounded-full " alt="" />

          <div className="flex flex-col">


            <p className="w-60 italic text-sm text-gray-400">
              {comment}
            </p>

            <h2 className="font-bold text-gray-500 text-sm">
              - {name}
            </h2>
          </div>

        </div>
      
    )
  }

  export default ClientCard
