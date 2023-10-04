import smokeVid from "../../assets/videos/SmokeVideo.mp4"

export default function SmokeBG () {

    return (
        <div className="h-screen fixed top-0 left-0 z-[-1] overflow-hidden">
            <video autoPlay loop playsInline muted className="overflow-hidden">
                <source src={smokeVid} />
            </video>
        </div>
    )
}