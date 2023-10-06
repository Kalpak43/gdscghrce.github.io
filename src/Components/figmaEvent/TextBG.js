import "./TextBG.css";

export default function TextBG () {
    let textArr = []
    for(let i = 0; i < 61; i++) {
        textArr.push(<h2 style={{"--i" : 0.5}}><span>Figma Lifestyle</span></h2>)
    }
    for(let i = 0; i < 60; i++) {
        textArr.push(<h2 style={{"--i" : 1.5}}><span>Figma Lifestyle</span></h2>)
    }
    for(let i = 0; i < 61; i++) {
        textArr.push(<h2 style={{"--i" : 2.5}}><span>Figma Lifestyle</span></h2>)
    }
    for(let i = 0; i < 60; i++) {
        textArr.push(<h2 style={{"--i" : 1.25}}><span>Figma Lifestyle</span></h2>)
    }
    for(let i = 0; i < 60; i++) {
        textArr.push(<h2 style={{"--i" : 1.25}}><span>Figma Lifestyle</span></h2>)
    }


    const position = document.documentElement
    position.addEventListener('mousemove', e => {
        position.style.setProperty('--x', e.clientX + 'px')
    })

    return (
        <div className="text-bg fixed top-0 left-0 bg-white h-screen w-screen">
            <div className="text">
                {textArr}
            </div>
        </div>
    )
}