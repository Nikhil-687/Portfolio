import Dev from "./../../../public/assets/Developer.png"
import Image from "next/image";

export default function Blog({usr, head, desc, postDate, reach, comments, img}){
    usr = usr || "dev link tips";
    head = head || "AI killed my coding brain and I'm rebuilding it";
    desc = desc || "we sprinted into the AI age of Autocomplete IDEsnow we're walking up wondering we we forgot howto write a for loop";
    postDate = postDate || "11 may";
    reach = reach || "0";
    comments = comments || [];
    img = img || Dev;
    return(
        <>
            <div style={{textAlign:"center", width:"60vw", margin:"2vh 0 4vh 4vw", border:"2px solid rgb(122, 117, 117)", marginLeft:"20vw", display:"flex", alignContent:"center", alignItems:"center", borderRadius:"15px", padding:"1px 0 0 3vw", height:"40vh"}}>
                <div style={{minWidth:"50vw", height:"30vh", textAlign:"start", padding:"0 2vw"}}>
                  <p style={{color:"#323232"}}>{usr}</p>
                  <h2 style={{fontSize:"2.3vw", fontWeight:"800", color:"#010110"}}>{head}</h2>
                  <p style={{color:"#787878"}}>{desc}</p>
                  <div style={{display:"flex", justifyContent:"space-between"}}>
                    <div style={{display:"flex", minWidth:"300px", justifyContent:"space-between"}}>
                      <strong style={{color:"#777777"}}>{postDate}</strong>
                      <strong style={{color:"#777777"}}>{reach}</strong>
                      <strong style={{color:"#777777"}}>{comments.length}</strong>
                    </div>
                    <div style={{display:"flex", minWidth:"150px", justifyContent:"space-around"}}>
                      <strong style={{color:"#777777"}}>save</strong>
                      <strong style={{color:"#777777"}}>repost</strong>
                      <strong style={{color:"#777777"}}>=</strong>
                    </div>
                  </div>
                </div>
                <Image style={{height:"27vh", boxShadow:"10px 0 14px #676767", borderRadius:"10px", background:"#fff", minWidth:"16vw"}} src={img} alt=""></Image>
            </div>
        </>
    )
}