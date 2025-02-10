export default function Button({value}){
    function sayHi(){
        console.log("Hi, is it All good\n");
    }
    return (
        <>
            <button className="toShadow">
                {value}
            </button>
        </>
    )
}