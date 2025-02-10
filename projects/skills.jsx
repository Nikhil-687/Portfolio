export default function Skills () {
    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('all').addEventListener('mouseover', () => {})
        document.getElementById('all').addEventListener('mouseleave', () => {})
        document.getElementById('all').addEventListener('scroll',()=>{
            
        })
    })


    return(
        <>
            <div style={{minWidth: "100vw", minHeight: "100vw", marginLeft: "4vw", background: "transparent"}} id="all">
                <div id="cpp">
                    <div id="skill1" style={{background: "Black"}}> C++ </div>
                    <div id="skill2" style={{background: "white"}}>DSA</div>
                    <div id="skill3" style={{background: "black"}}>Pointers</div>
                    <div id="skill4" style={{background: "green"}}>.h/.hpp</div>
                    <div id="skill5" style={{background: "orange"}}>Runtime error</div>
                    <div id="skill6" style={{background: "pink"}}>Segmentation fault</div>
                </div>
                <div id="webD">
                    <div id="skill7" style={{background: "violet"}}>Nikhil Patidar</div>
                    <div id="skill8" style={{background: "red"}}>React Hooks</div>
                    <div id="skill9" style={{background: "yellow"}}></div>
                    <div id="skill10" style={{background: "green"}}></div>
                    <div id="skill11" style={{background: "orange"}}></div>
                    <div id="skill12" style={{background: "pink"}}></div>
                </div>
            </div>
        </>
    )
}