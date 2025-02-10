import img from './assets/cDesigner.png'
import myImg from './assets/IMG_20241222_0727572.png'
import img2 from './assets/coder.png'
import './Fresh/styles.css'



// SCRIPTING
// lot of things going on

// {Image Cursore animation}









export default function Hero() {
    let z = 0;
    document.addEventListener('resize', (e) => {
        console.log(document.getElementById('positionate'));
    })
    document.addEventListener('DOMContentLoaded', () => {
        let element = document.getElementById('positionate');
        console.log(element.getBoundingClientRect().width);
        let slider1Shadow = `0 -300px 530px 40px rgb(255, 0, 0)`;
        let slider2Shadow = `0 -300px 530px 40px #5a00ff`;
        // let ImgContainer = document.getElementById('ImgContainer');

        document.getElementById('Slider1').style.boxShadow = "0 0 0 0 #fff";
        document.getElementById('Slider2').style.boxShadow = slider2Shadow;

        document.getElementById('img1').style.height = '100%';
        document.getElementById('img2').style.height = '100%';
        // if(element.getBoundingClientRect().width >= 1140){
        document.getElementById('root').addEventListener('mousemove', (e) => {
            if(element.getBoundingClientRect().width >= 1140){
                let curs = parseInt(e.clientX);
                let ratios = 9+parseInt((70 - (curs)/5)/5);
                
                document.getElementById('myImg').style.zIndex = '22';
                document.getElementById('imgimg1').style.zIndex = '-2';
                document.getElementById('imgimg2').style.zIndex = '-2';



                if((70 - (curs)/10) > 0){
                    document.getElementById('positionate').style.paddingLeft = `${3+parseInt((100 - (curs)/5)/10)}vw`;
                    document.getElementById('positionate').style.transition = '0.7s';
                    // console.log(document.getElementById('positionate').style.paddingLeft);
                }
                else{
                    document.getElementById('positionate').style.marginLeft = `${3+parseInt((70 - (curs)/5)/10)}vw`;
                    document.getElementById('positionate').style.paddingRight = `${parseInt((70 - (curs)/5)/10)}vw`;
                    document.getElementById('positionate').style.transition = '0.7s';
                    // console.log(document.getElementById('positionate').style.paddingLeft);
                }
                if(ratios <= 10 && ratios >= -10){
                    document.getElementById('imgimg1').style.opacity = 1;
                    document.getElementById('img1').style.height = '100%';
                    document.getElementById('img2').style.height = '100%';
                    document.getElementById('imgimg2').style.opacity = 1;
                    document.getElementById('imgimg1').style.zIndex = -2;
                    document.getElementById('imgimg2').style.zIndex = -2;
                    document.getElementById('Slider1').style.boxShadow = slider1Shadow;
                    document.getElementById('Slider2').style.boxShadow = slider2Shadow;
                    // console.log(document.getElementById('imgimg1').style.opacity, " " , ratios);
                }
                if(ratios < -10){
                    document.getElementById('imgimg1').style.opacity = 0;
                    document.getElementById('imgimg2').style.opacity = 1;
                    document.getElementById('img1').style.height = '00';
                    document.getElementById('img2').style.height = '100%';
                    document.getElementById('imgimg1').style.zIndex = -2;
                    document.getElementById('imgimg2').style.zIndex = -2;
                    // console.log(document.getElementById('imgimg1').style.opacity, " " , ratios);
                    // console.log(document.getElementById('imgimg1').style.opacity , document.getElementById('imgimg2').style.opacity )
                    document.getElementById('Slider1').style.boxShadow = '1px 1px 1px #fff';
                    document.getElementById('Slider2').style.boxShadow = slider2Shadow;
                }
                else if(ratios > 10){
                    document.getElementById('imgimg1').style.opacity = 1;
                    document.getElementById('imgimg2').style.opacity = 0;
                    document.getElementById('img1').style.height  = '100%';
                    document.getElementById('img2').style.height  = '00%';
                    document.getElementById('imgimg1').style.zIndex = -1;
                    document.getElementById('imgimg2').style.zIndex = -1;
                    document.getElementById('Slider1').style.boxShadow = slider1Shadow;
                    document.getElementById('Slider2').style.boxShadow = '1px 1px 1px #fff';
                    // console.log(document.getElementById('imgimg1').style.opacity, " " , ratios);
                }
            }})
        if(z === 0){
            document.getElementById('root').addEventListener('mouseleave', () => {
                if(element.getBoundingClientRect().width >= 1140){
                    document.getElementById('positionate').style.marginLeft = '0px';
                    document.getElementById('positionate').style.padding = '0px';
                    document.getElementById('positionate').style.transition = '0.5s ease-out';
                    document.getElementById('imgimg1').style.opacity = (1);
                    document.getElementById('imgimg2').style.opacity = 1;
                    document.getElementById('Slider1').style.boxShadow = slider1Shadow;
                    document.getElementById('Slider2').style.boxShadow = slider2Shadow;
                    document.getElementById('img1').style.height = '100%';
                    document.getElementById('img2').style.height = '100%';
                }})
        }})
        document.addEventListener(('DOMContentLoaded') , () => {
            let prev = document.getElementById('img2').style.height; 
            let newu = document.getElementById('img2').style.height;
            document.getElementById('root').addEventListener('mousemove', () => {
                newu = document.getElementById('img2').style.height;
                document.getElementById('img2').style.transition = ( newu === '100%' ? '1ms ease':'1s ease' );
                
            })
            document.getElementById('root').addEventListener('mouseleave', () => {
                newu = document.getElementById('img2').style.height;
                document.getElementById('img2').style.transition =  '1ms ease' ;           
            })

        })

    return (
        <>
            <div id="hero" style={{minHeight:'80vh', maxHeight: "80vh", maxHeight: "100vw", overflowY: "hidden", placeContent: "center", paddingTop: "10vw", marginLeft: "0vw",minWidth:"100vw" }}>
                {/* <div id="designer" class="designer" style="opacity: 1;">
					<div id="designer-desc" class="description" style="opacity: 1;">
						<h1>designer</h1>
						<p>Product designer specialising in UI design and design systems.</p>
					</div>
				</div> */}
                <div id='ImgContainer' style={{background:"white", height: "30vw",overflow: "hidden", width:"100vw"}}>
                    {/* <img src={img} style={{width: "170px", height: "100px"}} alt="" /> */}

                    <div id="positionate" style={{justifyContent:"center",overflow:"hidden"}}>
                        <div id="mainImg" style={{position:"absolute",width:"80vw", height:"30vw",margin:0,overflow:"hidden",textAlign:"center",justifyContent:"center"}}>
                            {/* <img src={img} alt="" /> */}
                            <img src={myImg} alt="" style={{width: "47vw", height:"30vw",left:"30px",top: 0}} id='myImg' />
                        </div>
                        <div id="grabCursor" style={{display:"flex", height: "20vw", paddingTop:"8vw",paddingBottom:"2vw"}}>
                            <div className='img1' style={{background:"none"}}>
                                <div id="img1" style={{paddingBottom:"4vw"}}>
                                    <img src={img} alt="" id='imgimg1' style={{paddingBottom:"4vw"}} />
                                </div>
                                <div style={{marginTop:"0vw"}}>
                                    <h3 style={{color:"#555", fontSize:"3.4vw", lineHeight:"3vw", maxWidth:"20vw", textAlign:"center", paddingLeft: '22vw', opacity:"0.9"}}>{`Web Developer`}</h3>
                                    <p style={{fontSize:'1.2vw',color:"#555",opacity:0.5, maxWidth:"20vw", textAlign:"center", paddingLeft: '22vw',paddingTop:"2vw"}}>{`-Aspiring backend`}</p>
                                    <p style={{fontSize:'1.2vw',color:"#555",opacity:0.5, maxWidth:"20vw", textAlign:"center", paddingLeft: '22vw',paddingTop:"1vw"}}>{`-Great at frontend webDesigning`}</p>
                                    <p style={{fontSize:'1.5vw',color:"#555",opacity:0.7, maxWidth:"20vw", textAlign:"center", paddingLeft: '22vw',paddingTop:"0vw"}}>{`-React Developer`}</p>
                                    {/* <img src={img2} alt=""/> */}
                                    {/* <img style={{marginTop: '-7vw'}} src={img2} alt=""/> */}
                                    {/* <h1 id='specialMovableContentweb'></h1> */}
                                </div>
                            </div>
                            <div className='img2' style={{background:"none"}}>
                                <div id="img2" style={{paddingBottom:"4vw"}} >
                                    <img src={img2} alt="" id='imgimg2' style={{paddingBottom:"14vw"}} />
                                </div>
                                <div style={{paddingLeft: "10vw"}}>
                                    <h3 style={{color:"#555"}}>{`< Coder >`}</h3>
                                    <p style={{fontSize:'1.2vw',color:"#555",opacity:0.5}}>{`Great at problem solving skill`}</p>
                                    <p style={{fontSize:'1.5vw',color:"#555",opacity:0.7}}>{`at Leetcode and codechef`}</p>
                                    {/* <h3></h3> */}
                                    {/* <img src={img} style={{rotate:'0deg'}} alt=""/> */}
                                    {/* <h1 id='specialMovableContentcpp'></h1> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div >
                    {/* <h1 className="MainHero" style={{background: "#fff", marginTop:"0vw", userSelect: "none", placeContent:"center", padding: "auto", display:"flex", justifyContent:"center", alignItems:"baseline", margin:"0 4vw 0 0"}}>
                        <span className="outerHighlight">
                            <span>HI Dear, </span>
                            <span className="higlight">Nikhil Patidar</span>
                            <span>   Welcomes You.</span>
                        </span>
                        { <span id="forSmall">Hi Dear, Nikhil Patidar Welcomes You.</span> }
                    </h1> */}
                    <h1 class="row-start-2 justify-self-center text-[clamp(3.25rem,1.5rem+8.75vw,12rem)] leading-[1.15] tracking-wide" style={{fontStyle:"PP Neue Montreal, sans-serif"}}><div>Nikhil</div> <div class="ml-[1em]">Patidar</div></h1>
                    {/* <h1 style={{fontSize: "9vw", textAlign: "center", marginTop: "-1vw", zIndex: "21"}}>Nikhil Patidar</h1> */}
                    <div style={{display:"flex",width:"100vw",height:"0vw",paddingLeft:"1vw", marginBottom:"0"}} className='endHero'>
                        <div id="Slider1" style={{margin: '0', background:"transparent",paddingTop:0, height: "1vw", padding: 0}} className='toShadow'></div>
                        <div id="Slider2" style={{margin: '0', background:"transparent",placeContent:"end", height: "1vw", paddingBottom: 0,textAlign:"center",padding: 0,fontSize:"2vw", border:"2px solid white"}} className='toShadow'><span></span></div>
                    </div>
                </div>
                {/* <div style={{width: "100vw", background: "white", zIndex: 5, height: "5vw"}}>Projects</div> */}
            </div>

        </>
    )
}