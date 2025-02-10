document.addEventListener('DOMContentLoaded', () => {
    console.log('WokeUp');
    function alignskillI(i){
        // let i = 9;
        let va = `skill-${i}`;
        // console.log(va);
        let font = ((20-i)/((i%7)-4))/5 + 3;
        // console.log(document.getElementById(`${va}`));
        document.getElementById(`${va}`).style.padding = `${document.getElementById(`${va}`).getBoundingClientRect().width/50}vw`;
        document.getElementById(`${va}`).style.fontSize = `${font}vw`;
        let primaryColor = `#${i%8}d${i%6}${i%9}0${10- i%10}9${10-i%6}`;
        document.getElementById(`${va}`).style.color = `${primaryColor}`;
        let secondryColor = `#${i%9}4${10- i%5}e${i%5}${i%9}${9-i%6}${10-i%5}`;
        document.getElementById(`${va}`).style.position = 'absolute';
        document.getElementById(`${va}`).style.left = `${((i)*932.5)%78 - 5/*((document.getElementById(`${va}`).getBoundingClientRect().width/5))*/}vw`;
        document.getElementById(`${va}`).style.top = `${((i-0.3)*9.05)%(50)}vw`;
        document.getElementById(`${va}`).style.background = `transparent`;
        document.getElementById(`${va}`).style.opacity = `1`;
        
        // if(i%5 === 0){
        //     let primaryColor = `#${i%8}d${i%6}${i%9}0${10- i%10}${10-i%6}${9-i%6}`;
        //     document.getElementById(`${va}`).style.backgroundColor = `${primaryColor}`;
        // }
        if(i%5 === 0){
            let primaryColor = `#${i%8}d${i%6}${i%9}0${10- i%8}${10-i%6}${9-i%6}`;
            // document.getElementById(`${va}`).style.backgroundColor = `${primaryColor}`;
        }
      
        // document.getElementById(`${va}`).style.color = `#${i%10}d${i%3}${i%7}0${i%10}aa`;
    } 
    function HoverAlignskillI(i){  
        // let i = 9;
        let va = `skill-${i}`;
        // console.log(va);
        let font = ((20-i)/((i%7)-4))/5 + 3;
        // console.log(document.getElementById(`${va}`));
        document.getElementById(`${va}`).style.padding = `${document.getElementById(`${va}`).getBoundingClientRect().width/50}vw`;
        document.getElementById(`${va}`).style.fontSize = `${font}vw`;
        let primaryColor = `#${i%8}d${i%6}${i%9}0${10- i%10}9${10-i%6}`;
        document.getElementById(`${va}`).style.color = `${primaryColor}`;
        let secondryColor = `#${i%9}4${10- i%5}e${i%5}${i%9}${9-i%6}${10-i%5}`;
        document.getElementById(`${va}`).style.position = 'absolute';
        document.getElementById(`${va}`).style.left = `${((i)*932)%78 - 5/*((document.getElementById(`${va}`).getBoundingClientRect().width/5))*/}vw`;
        document.getElementById(`${va}`).style.top = `${((i-0.3)*9.05)%(50)}vw`;
        document.getElementById(`${va}`).style.background = `transparent`;
        document.getElementById(`${va}`).style.opacity = `1`;
        
        
        document.getElementById(`${va}`).addEventListener('mouseover', () => {
            let va1 = `skill-${((i+1)%39)+1}`;
            let va2 = `skill-${((i+2)%39)+1}`;
            let va3 = `skill-${((i+3)%39)+1}`;
            let va4 = `skill-${((i+4)%39)+1}`;
            let primaryColor1 = `#${i%8}1${i%6}${i%9}f${10- i%10}9${10-i%6}`
            let primaryColor2 = `#${i%8}4${i%6}${i%9}7${10- i%10}9${10-i%6}`
            let primaryColor3 = `#${i%8}8${i%6}${i%9}2${10- i%10}9${10-i%6}`
            let primaryColor4 = `#${i%8}d${i%6}${i%9}a${10- i%10}9${10-i%6}`

            document.getElementById(`${va}`).style.color = `${primaryColor}`
            document.getElementById(`${va1}`).style.color =`${primaryColor1}`
            document.getElementById(`${va2}`).style.color =`${primaryColor2}`
            document.getElementById(`${va3}`).style.color =`${primaryColor3}`
            document.getElementById(`${va4}`).style.color =`${primaryColor4}`



            document.getElementById(`${va}`).style. fontSize = `${font+1}vw` ;
            document.getElementById(`${va1}`).style.fontSize = `${font+2}vw`;
            document.getElementById(`${va2}`).style.fontSize = `${font+3}vw`;
            document.getElementById(`${va3}`).style.fontSize = `${font+4}vw`;
            document.getElementById(`${va4}`).style.fontSize = `${font+5}vw`;



            // document.getElementById(`${va}`).style.color = `${primaryColor}`
            // document.getElementById(`${va1}`).style.color =`${primaryColor1}`
            // document.getElementById(`${va2}`).style.color =`${primaryColor2}`
            // document.getElementById(`${va3}`).style.color =`${primaryColor3}`
            // document.getElementById(`${va4}`).style.color =`${primaryColor4}`
        })

        document.getElementById(`${va}`).style.transition = `1s`;

        // if(i%5 === 0){
        //     let primaryColor = `#${i%8}d${i%6}${i%9}0${10- i%10}${10-i%6}${9-i%6}`;
        //     document.getElementById(`${va}`).style.backgroundColor = `${primaryColor}`;
        // }
        if(i%5 === 0){
            let primaryColor = `#${i%8}d${i%6}${i%9}0${10- i%8}${10-i%6}${9-i%6}`;
            // document.getElementById(`${va}`).style.backgroundColor = `${primaryColor}`;
        }
      
        // document.getElementById(`${va}`).style.color = `#${i%10}d${i%3}${i%7}0${i%10}aa`;
    } 



    setTimeout(() => {
        for(let i = 1;i <= 40;i++){
            alignskillI(i);
        }  
    }, 1); 

    document.getElementById('skills').addEventListener('mouseover', () => {
        for(let i = 1;i <= 40;i++){
            HoverAlignskillI(i);
        }  
    // })
    // document.getElementById('skills').addEventListener('mouseleave', () => {
    //     for(let i = 1;i <= 40;i++){
    //         alignskillI(i);
    //     }  
    })
})