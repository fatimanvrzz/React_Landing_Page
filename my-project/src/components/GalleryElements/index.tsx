
type GalleryElementsProps = {
    photoPath: string,
}

const GalleryElements = ({ photoPath } : GalleryElementsProps) => {
    return (
        <div>
            <div className="w-96 h-auto relative">
                <img src={photoPath} alt="" className="w-screen" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 hover:opacity-75 flex items-center justify-center text-white duration-500  cursor-pointer">
                    <p>
                        Project Title
                    </p>
                </div>
                
            </div>
        </div>
    )
}

export default GalleryElements
