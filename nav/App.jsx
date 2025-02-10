
function clickedPlay(){
  document.getElementById('pause').style.transitionDuration= "3s";
  document.getElementById('play').style.transitionDuration= "3s";
  document.getElementById('play').style.display= "none"; 
  document.getElementById('pause').style.display= "flex";
}


function clickedPause(){
  document.getElementById('pause').style.transitionDuration= "3s";
  document.getElementById('play').style.transitionDuration= "3s";
  document.getElementById('play').style.transitionDuration= "3s";
  document.getElementById('pause').style.display= "none";
  document.getElementById('play').style.display= "flex";
}



function App() {
  const dear = "{ Dear }";
  // document.getElementById('play').addEventListener('click')
  return (
    <>
      {/* <h1 style={{color:"rgba(246, 248, 189, 1.952)"}}>HI, To you {dear}.</h1> */}
      
      {/* <button className='toShadow' id='hideHero' onClick={hideHero}>Hide</button> */}
      {/* <About></About>  */}
      <div id="nav" style={{display:"flex",justifyContent:"space-between",fontSize:"2.7vw", alignItems: "center", padding: '1.5vw 0', width: "96vw", paddingLeft: "2vw", paddingRight: "2vw", paddingTop:"2vw",background:"transparent", maxHeight:"10vh"}}>
        <div style={{color:"black"}}>
          <div style={{color:"black", fontSize: "1rem"}}>
            Local Time
          </div>
          <div style={{color:"black"}}>  
            10:32pm
          </div>
        </div>
        <div style={{width: "8vw"}}>
          <a href="/home">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" style={{fill: "black"}} viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-3">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
            </svg>
          </a>
        </div>
        <div>
          <div>
          <div id="play" onClick={clickedPlay} style={{fontSize:"2vw", minWidth:"7vw", transition:"ease-out all 2s", color:"white", display: "flex", justifyContent:"end", background:"black", borderRadius:"3vw", alignItems:"center", padding: "0.5vw 0vw 0.5vw 2vw", cursor:"pointer"}}>
              Play
              <div style={{width:"4vw", height:"3.5vw", background:"white", borderRadius:"3vw", alignItems:"center", padding: "0.5vw 2vw 0vw 3vw", marginLeft:"2vw", marginRight:"0.5vw"}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" style={{fill: "black", height:"3vw", margin:"auto", justifyContent: "center"}} viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="size-1">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                </svg>
              </div>
            </div> <div id="pause" onClick={clickedPause} style={{fontSize:"2vw", color:"white", background:"black", transition:"ease-out all 2s", borderRadius:"3vw", alignItems:"center", padding: "0.5vw 2vw 0.5vw 0.7vw", cursor:"pointer"}}>
              <div style={{width:"4vw", height:"3.5vw", background:"white", borderRadius:"3vw", alignItems:"center", padding: "0.2vw 2vw 0.2vw 2vw", marginRight:"1vw"}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" stroke-width="3" stroke="black" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                </svg>
              </div>
              Pause
            </div>
          </div>
        </div>
      </div>
      {/* <Button value="Say Hi" ></Button> */}
    </>
  )
}

export default App
