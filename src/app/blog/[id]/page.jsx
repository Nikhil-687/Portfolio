"use client"
import Nav from "./../../components/Nav"
import { useEffect } from "react";
export default function(){
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
    let user = "Nikhil";
    return(
        <>
                  <div id="home" style={{textAlign:"center", backgroundColor:""}}>
                    <div id="nav" style={{background:"#fff"}}>
                      <Nav />
                    </div>
                    <div id="body" style={{ width:"100vw", overflowX: "hidden", scrollbarWidth:"none", justifyItems:"start", padding:"0 0 0 30vw", marginTop:"40px", fontSize:"2vw"}}>
                        <strong style={{color:"red", padding:"0vw", paddingRight:"22VW"}}>Error Ahead:</strong>
                        <p>Hi there this blog is personal cant be opened</p>
                        <p>ask usr for a personal copy </p>
                        <div style={{display:"flex", gap:"3vw", width:"100%", justifyContent:"end", marginLeft:"-30vw"}}>
                          <a href={`/blog`}>
                              <button style={{background:"#ad98d3", padding:"1vh 3vw", borderRadius:"10px", cursor:"pointer"}}>go back</button>
                          </a>
                          <a href={`/usr/${user}`}>
                              <button style={{background:"#ad98d3", padding:"1vh 3vw", borderRadius:"10px", cursor:"pointer"}}>message</button>
                          </a>
                        </div>
                    </div>
                    <div id="footer">
            
                    </div>
                  </div>
                </>
    )
}