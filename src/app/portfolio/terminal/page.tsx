"use client"
import { useState } from "react"

export default function Page(){
    const [prev, setPrev] = useState([[{zero:"help",one: ["exit or ctrl^C to exit the Lab."],two: "~/AnantLAB"}]]);
    const [path, setPath] = useState("~/AnantOSLAB");
    const [input, setInput] = useState("");
    const [index, setIndex] = useState(0);
    const [values, setValues] = useState({"help" : ["exit or ctrl^C to exit the Lab."], "new":["A test command dont use it if you love your computer"]});
    const [commandNames, setCommandNames] = useState(["help", "new", "cd"]);
    const [command, setCommand] = useState({
        "cd" :  () => {

            return ["cd command new to our system."];
        },
        "ls" : () => {
            return ["ls command new to our system."];
        }
    })
    setPath(path);
    setValues(values);
    setCommand(command);
    setCommandNames(commandNames);


    // FILES AND FOLDERS
    const [Files, setFiles] = useState({
        "home":[{
            "name": "/",
            "..":["home"],
            ".":["home"],
            "Directory":["nikhil"],
            "files":[]
        }],
        "nikhil":[{
            "name": "/home/nikhil",
            "..":"home",
            ".":"nikhil",
            "Directory":["AnantOSLab", "projects", "skills", "intrests", "portfolio", "experience", "education"],
            "Files":[]
        }],
        "AnantOSLab" :[{
            "name": "~/AnantOSLab",
            "..":"nikhil",
            ".":"AnantOSLab",
            "Directory":[],
            "Files":[]
        }],
        "projects" : [{
            "name": "~/projects",
            "..":"nikhil",
            ".":"projects",
            "Directory":[],
            "Files":[]
        }], 
        "skills" : [{
            "name": "~/skills",
            "..":"nikhil",
            ".":"skills",
            "Directory":[],
            "Files":[]
        }], 
        "intrests": [{
            "name": "~/intrests",
            "..":"nikhil",
            ".":"intrests",
            "Directory":[],
            "Files":[]
        }], 
        "portfolio": [{
            "name": "~/portfolio",
            "..":"nikhil",
            ".":"portfolio",
            "Directory":[],
            "Files":[]
        }], 
        "experience": [{
            "name": "~/experience",
            "..":"nikhil",
            ".":"experience",
            "Directory":[],
            "Files":[]
        }],
        "education":[{
            "name": "~/education",
            "..":"nikhil",
            ".":"education",
            "Directory":[],
            "Files":[]
        }]

    })


    setFiles(Files);

    function isCommand(e: string){
        let z = 1; 
        commandNames.forEach(element => {
            if(element.toLowerCase() == e.toLowerCase()){
                z = 0;
                return true;
            }
        });
        if(z == 0)return true;
        return false;
    }
    function grep (e: string){
        console.log(e);
        if(e === 'cd'){
            return [{zero: e, one: command[e](), two : path}]
        }
        return [{zero: e, one: values[e], two : path}];
    }
    function handleSubmit(e: string, keyType: "Enter" | "ArrowDown" | "ArrowUp"){
        function trim(e: string){
            let a = "";
            for(let i = 0;i < e.length && (e[i] >= 'A' && e[i] <= 'Z') || (e[i] >= 'a' && e[i] <= 'z');i++){
                a+= e[i];
            }
            return a.toLowerCase();
        }
        const inputDiv = document.getElementById('Input');
        if(e.trim() !== "" && keyType === "Enter"){
            e = e.trim();
            e = trim(e);
            if(isCommand(e) == true){
                setPrev([...prev, grep(e)]);
            }
            else {
                setPrev(prev => [...prev, [{zero: e, one: [(e.split(' '))[0]+" command not found", "basic most Terminal reflecting your command will compute soon."], two:path}]]);
            }
            if(index < prev.length-1)setIndex(index+1);
        }
        else if(keyType === "ArrowDown"){
            if(index < prev.length-1)setIndex(index+1);
            console.log(index);
            setInput(prev[index][0].zero);
            if (inputDiv instanceof HTMLInputElement) {
                inputDiv.value = input;
            }
        }
        else if(keyType === "ArrowUp"){
            if(index > 0)setIndex(index-1);
            console.log(index);
            setInput(prev[index][0].zero);
            if (inputDiv instanceof HTMLInputElement) {
                inputDiv.value = input;
            }
        }
    }
    function focusInput(){
        const input = document.getElementById('Input');
        input?.focus();
    }
    return (
        <div style={{height:"100vh", width:"100vw", background:"#232323", padding:"10vh 10vw", overflow:"hidden", overflowY:"scroll", scrollbarWidth:"none"}} onClick={focusInput}>
            <div id="prev">
                {
                    prev.map((val, ind) => (
                        <div>
                            <p>{val[0].two}{' > '}{val[0].zero}</p> 
                            {/* <br /> */}
                            <div style={{display:"none"}}>{ind}</div>
                            <p style={{paddingLeft:"4vw"}}>{
                                val[0].one.map((output, index) => (
                                    <>
                                        {index !== val[0].one.length ? output : <></>}
                                        <br />
                                    </>
                                )) 
                            }</p>
                            <br />
                        </div>
                    ))
                }
            </div>
            <div style={{display:"flex", width:"80vw", overflow:"hidden"}}>
                <p>{"~/AnantOSLAB"}
                    <strong style={{padding:"0 10px"}}>
                        {'> '}
                    </strong>
                </p>
                <input id="Input" type="text" style={{outline:"none", width:"80vw"}} onChange={(e) => {setInput(e.target.value)}} onKeyDown={(e) => {
                                                                if (e.key == "Enter" || e.key == "ArrowDown" || e.key == "ArrowUp") {
                                                                    handleSubmit(input, e.key)
                                                                }
                                                              }}/>
            </div>
        </div>
    )
}