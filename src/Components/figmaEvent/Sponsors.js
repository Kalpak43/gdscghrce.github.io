import PSL from "../../Images/persistent_systems_logo_full.png"

export default function Sponsors () {


    return (
        <section className="sponsors flex items-center justify-center flex-col">
            <h3>Venue Partner</h3>
            <div className="sponsor-box m-2">
                <img src={PSL} className="h-28"/>
            </div>
        </section>
    )
}