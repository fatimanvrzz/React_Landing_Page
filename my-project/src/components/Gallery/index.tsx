

import GalleryElements from "../GalleryElements"
import photoPaths from "../../photoPaths.json"


const Gallery = () => {
    return (
        <div className="flex flex-col items-center justify-center h-auto w-auto mb-20">
            <div className="flex flex-col items-center justify-center gap-5">
                <h1 className="text-4xl font-bold mt-14">GALLERY</h1>
                <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>

                <div className="grid grid-cols-3">

                    {
                        photoPaths.map((item) => {
                            return <GalleryElements photoPath={item.photoPath} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Gallery
