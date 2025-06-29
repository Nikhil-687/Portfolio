"use client"
import Nav from "@/app/components/Nav"
import { useEffect } from "react";
// import Image from "next/image";

import Dev from "./../../../public/assets/Developer.png"
// import TechDev from "./../../../public/assets/TechDev.png"
// import DevBackground from "./../../../public/assets/cDesigner.png"
// import TechDevBackground from "./../../../public/assets/coder.png"
import "@/app/styles.css"

import Blog from "./../components/Blog"

export default function Blogs(){
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
    const blogId = "290620251";
    
    return(
        <>
          <div id="home-blog" style={{textAlign:"center", backgroundColor:"white"}}>
            <div id="nav-blog" style={{background:"#212121"}}>
              <Nav />
            </div>
            <div id="body-blog" style={{ width:"100vw", overflowX: "hidden", scrollbarWidth:"none", justifyItems:"center"}}>
              <a href={`/blog/${blogId}`} style={{alignItems:"center"}}>
                <Blog 
                  usr="Nikhil" 
                  head={"Amazed to use my own written file go-main.sh"} 
                  desc={"Found a very amazing use case of a very basic script i have written it to just swich usr and reboot automatically. BUt unexpectedly yesterday got my self trapped in grub rescue login screen no way to enter main user because username was containing a space thats not read by shell there, finally somehow hit to login to guest usr which was having this saver file go-main.sh which just redirected me to main os with in 20 secs not a very big deal but found myself too much happy using my sript that give me a lot of confidence that actualy i can write production ready scripts also i can rome here and there in whole pc."}
                  postDate={"29 june 2025"}
                  reach={1}
                  comments={0}
                  img={Dev}
                  />
              </a>
            </div>
            <div id="footer-blog">
    
            </div>
          </div>
        </>
    )
}