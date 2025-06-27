import Image from "next/image"
import Dev from "./../../../public/assets/Developer.png"
import TechDev from "./../../../public/assets/TechDev.png"
import DevBackground from "./../../../public/assets/cDesigner.png"
import TechDevBackground from "./../../../public/assets/coder.png"
import { useState } from "react"


export default function Hero(){
    const [left, setLeft] = useState({
        
    })
    return(
        <>
            <div style={{height:"100%", color:"#000", fontSize:"2vw"}}>
                <div id="hero-center">
                    <div>
                        <div style={{display:"flex"}}>
                            <div style={{alignContent:"end", height:"540px", width:"50vw"}}>
                                <Image className="center-image" src={DevBackground} alt="" style={{width:"600px", height:"400px"}}></Image>
                            </div>
                            <div style={{alignContent:"end", height:"500px", width:"50vw"}}>
                                <Image className="center-image" src={TechDevBackground} alt="" style={{width:"600px", height:"400px"}}></Image>
                            </div>
                            <div style={{width:"100%", textAlign:"center", display:"flex", paddingLeft:"300px", position:"absolute"}}>
                                <div id="main-img--left" style={{overflow:"hidden"}}>
                                    <div style={{width:"600px"}}>
                                        <Image className="center-image" src={Dev} alt="" style={{width:"600px", background:"transparent"}}></Image>
                                    </div>
                                </div>
                                <div id="main-img--right" style={{overflow:"hidden", justifyItems:"end"}}>
                                    <div style={{width:"600px"}}>
                                        {/* <Image className="center-image" src={Dev} alt="" style={{width:"600px", background:"transparent", position:"relative"}}></Image> */}
                                        <Image className="center-image" src={TechDev} alt="" style={{width:"600px"}}></Image>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{width:"100vw", height:"10vh", alignContent:"center", color:"#001", fontSize:"3.5vw",textAlign:'center'}}>
                    Nikhil Patidar
                </div>
            </div>
        </>
    )
}