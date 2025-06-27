"use client"
import Nav from "@/app/components/Nav"
import { useEffect } from "react";
import Image from "next/image";

import Dev from "./../../../public/assets/Developer.png"
import TechDev from "./../../../public/assets/TechDev.png"
import DevBackground from "./../../../public/assets/cDesigner.png"
import TechDevBackground from "./../../../public/assets/coder.png"
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
    let blogId = "alongstring";
    let blogId2 = "newlongstring";
    let blogId3= "freshnewlongstring";
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
                  head={"AI killed my coding brain and I'm rebuilding it"} 
                  desc={"we sprinted into the AI age of Autocomplete IDEsnow we're walking up wondering we we forgot howto write a for loop"}
                  postDate={"20 May"}
                  reach={20}
                  comments={30}
                  img={Dev}
                  />
              </a>
              <a href={`/blog/${blogId2}`} style={{justifyItems:"center"}}>
                <Blog 
                  usr="Nikhil" 
                  head={"AI killed my coding brain and I'm rebuilding it"} 
                  desc={"we sprinted into the AI age of Autocomplete IDEsnow we're walking up wondering we we forgot howto write a for loop"}
                  postDate={"20 May"}
                  reach={20}
                  comments={30}
                  img={TechDevBackground}
                  />
              </a>
              <a href={`/blog/${blogId3}`} style={{justifyItems:"center"}}>
                <Blog 
                  usr="Nikhil" 
                  head={"AI killed my coding brain and I'm rebuilding it"} 
                  desc={"we sprinted into the AI age of Autocomplete IDEsnow we're walking up wondering we we forgot howto write a for loop"}
                  postDate={"20 May"}
                  reach={20}
                  comments={30}
                  img={DevBackground}
                  />
              </a>
            </div>
            <div id="footer-blog">
    
            </div>
          </div>
        </>
    )
}