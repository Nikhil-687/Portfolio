"use client"

import "./styles.css"
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import { useEffect } from "react"

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
      <div id="home" style={{height:"100vh", width:"100vw", overflow:"hidden"}}>
        <div id="nav">
          <Nav />
        </div>
        <div id="hero">
          <Hero></Hero>
        </div>
        <div id="body">

        </div>
        <div id="footer">

        </div>
      </div>
    </>
  );
}
