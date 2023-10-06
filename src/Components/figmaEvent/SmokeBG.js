import smokeVid from "../../assets/videos/SmokeVideo.mp4"
import smokeGif from "../../assets/videos/SmokeVideoGIF.gif"

export default function SmokeBG () {



    return (
        <div className="h-screen fixed top-0 left-0 z-[-1]">
            <video autoPlay  playsInline muted className="overflow-hidden" id="video">
                <source src={smokeVid} />
            </video>
        </div>
    )
}