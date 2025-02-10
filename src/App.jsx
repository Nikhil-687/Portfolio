import About from './About.jsx';
// import './App.css'
import Button from './Components/button.jsx';
import './Fresh/styles.css'
import Hero from './Hero.jsx';

function hideHero(){
  document.getElementById('hero').classList.toggle('hide');
  if(document.getElementById('hero').classList.length === 1){
    document.getElementById('hideHero').textContent = "Render hero Page";
  }else{
    document.getElementById('hideHero').textContent = "Hide";
  }
}

function App() {
  const dear = "{ Dear }";
  return (
    <>
      {/* {/* <h1 style={{color:"rgba(246, 248, 189, 1.952)"}}>HI, To you {dear}.</h1> */}
      
      <Hero id="hero3"></Hero>
      {/* <button className='toShadow' id='hideHero' onClick={hideHero}>Hide</button> */}
      {/* <About></About>  */}
    
      {/* <Button value="Say Hi" ></Button> */}
    </>
  )
}

export default App
