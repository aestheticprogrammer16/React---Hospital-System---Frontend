import { MyContext } from "./Mycontext";
import { useContext } from "react";

function Hehe() {

    const newValue = useContext(MyContext)

    // alert(newValue)
    return (
        <>
            <h1>sssssssss</h1>
            <p>{newValue}</p>

            <h1>sssssssss</h1>
            <h1>sssssssss</h1>
        </>
    )
}

export default Hehe;