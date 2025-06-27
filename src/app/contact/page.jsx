"use client"

import "./../styles.css"
import Image from "next/image"
import Nav from "./../components/Nav"
import { useEffect } from "react"
import Dev from "./../../../public/assets/Developer.png"

export default function Page() {

  useEffect(() => {
    const navs = document.getElementsByClassName('navPopUp');
    if (navs.length > 0) {  
      navs[0].classList.toggle('height0');
    }

    const hero = document.getElementById('hero');
    if(hero != null)
      // setTimeout(() => {
        hero.style.boxShadow = "0 10px 10px rgb(238, 238, 238)";
      // }, 1000);

  }, []);

  return (
    <>
      <div id="home-contact">
        <div id="nav-contact">
          <Nav />
        </div>
        <div id="hero-contact" style={{background:"white", color:"#444", boxShadow:"0px 10px 20px #efefef"}}>
            <section className="main nopad-b">
    			<div className="row flex" style={{justifyContent:"space-evenly", paddingLeft:"10vw"}}>
    				<div id="text-main" className="col-5" style={{visibility: "visible", alignContent:'center', maxWidth:"40vw"}}>
    					<h1 style={{fontSize:"8vw", fontWeight:"1100", letterSpacing:"-6px", color:"#343434", marginTop:"-10vh"}}>contact.</h1>
    					<p style={{fontSize:"2vw", fontWeight:"lighter", letterSpacing:"1px", color:"#999", marginBottom:"5vh"}} className="intro">Get in touch with me via social media or send me an email.</p>
    
    					<ul className="social-disc" style={{display:"flex", maxWidth:"40vw", lineHeight:"7vh", flexWrap:"wrap"}}>
    						<li style={{color:"#666", minWidth:"20vw"}}><a href="http://www.twitter.com/AdhamDannaway" target="_blank" style={{color:"#666", fontSize:"1.7vw"}} className="twitter">Twitter</a></li>
    						<li style={{color:"#666", minWidth:"20vw"}}><a href="http://www.facebook.com/ilikeadham" target="_blank" style={{color:"#666", fontSize:"1.7vw"}} className="facebook">Facebook</a></li>
    						<li style={{color:"#666", minWidth:"20vw"}}><a href="http://www.linkedin.com/in/adhamdannaway" target="_blank" className="linkedin" style={{color:"#666", fontSize:"1.7vw"}}>LinkedIn</a></li>
    						<li style={{color:"#666", minWidth:"20vw"}}><a href="https://www.instagram.com/adham.dannaway" target="_blank" className="instagram" style={{color:"#666", fontSize:"1.7vw"}}>Instagram</a></li>
    						{/* <!-- <li><a href="http://www.dribbble.com/AdhamDannaway" target="_blank" className="dribbble">Dribbble</a></li> --> */}
    					</ul>

    				</div>
    				<div id="img-main" className="col-7 align-c">
    					<Image style={{width:"40vw", height:"40vw", paddingTop:"10vh"}} className="major preload" src={Dev} alt="" />
    				</div>
    			</div>

    		</section>
        </div>
        <div id="body-contact">

        </div>
        <div id="footer-contact">

        </div>
      </div>
    </>
  );
}