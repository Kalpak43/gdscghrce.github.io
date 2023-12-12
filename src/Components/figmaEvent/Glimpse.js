import img_1 from "../../Images/figma-lifestyle/img-1.jpeg"
import img_2 from "../../Images/figma-lifestyle/img-2.jpeg"
import img_3 from "../../Images/figma-lifestyle/img-3.jpeg"
import img_4 from "../../Images/figma-lifestyle/img-4.jpeg"
import img_5 from "../../Images/figma-lifestyle/img-5.jpeg"
import img_6 from "../../Images/figma-lifestyle/img-6.jpeg"
import img_7 from "../../Images/figma-lifestyle/img-7.jpeg"
import img_8 from "../../Images/figma-lifestyle/img-8.jpeg"
import img_9 from "../../Images/figma-lifestyle/img-9.jpeg"
import img_10 from "../../Images/figma-lifestyle/img-10.jpeg"

export default function Glimpse () {

    return (
        <section className="glimpse">
            <h2>
                Glimpses
            </h2>
            <div className="photo-container py-2">
                <div className="photo-container-1 gap-2">
                    <div className="img-1 flex-grow rounded-lg">
                        <img src={img_9}/>
                        
                    </div>
                    <div className="img-2 aspect-video rounded-lg">
                        <img src={img_1}/>
                    </div>
                </div>
                <div className="photo-container-2 gap-2">
                    <div className="sub-container-1 md:flex justify-between px-2 gap-2 md:pt-0 pt-2">
                        <div className="img-1 aspect-video rounded-lg">
                            <img src={img_7}></img>
                        </div>
                        <div className="img-2 flex-grow rounded-lg md:px-0 md:pt-0 px-2 pt-2">
                            <img src={img_8}></img>
                        </div>
                    </div>
                    <div className="sub-container-2 px-2 pb-0 md:flex justify-between gap-2">
                        <div className="img-1 aspect-[3/4] rounded-lg md:m-0 m-2">
                            {/* <img src={img_3}></img> */}
                            <img src={img_3}></img>

                        </div>
                        <div className="aspect-square rounded-lg md:m-0 m-2">
                            <img src={img_4}></img>

                        </div>
                        <div className="flex-grow rounded-lg md:m-0 m-2">
                            <img src={img_5}></img>
                        </div>
                    </div>
                    {/* <div className="img-1 border-2 border-blue-700 aspect-square rounded-lg"></div>
                    <div className="img-2 border-2 border-red-500 aspect-video rounded-lg"></div> */}
                </div>
            </div>
        </section>
    )
}