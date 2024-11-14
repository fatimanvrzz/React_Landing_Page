import GetInTouchContact from "../GetInTouchContact";
import GetInTouchForm from "../GetInTouchForm";
import fData from "../../form.json"


const GetInTouch = () => {
    return (

        <div className="flex flex-col  w-full pt-10 pl-44 pb-10 gap-10 h-auto bg-gradient-to-br from-blue-500 to-indigo-300 text-white">

            <h1 className="text-4xl font-bold uppercase">get in touch</h1>

            <div className="flex w-[970px] justify-between">
                <p className="text-lg opacity-55">Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
                <h2 className="text-lg">Contact-info</h2>

            </div>

            <div className="flex">

                <GetInTouchForm />

                {fData.map(fData => <GetInTouchContact key={fData.id} address={fData.address} mobile={fData.mobile} email={fData.email} />)}

            </div>

        </div>

    )
}

export default GetInTouch
