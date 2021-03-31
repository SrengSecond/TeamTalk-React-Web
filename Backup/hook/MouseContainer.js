import React,{useState} from "react";
import ClassEffect2 from "./ClassEffect2";

import HookEffect2 from "./HookEffect2";
import ClassDependency from "./ClassDependency";
import HookDependency from "./HookDependency";

function MouseContainer ()
{
    const [click,setClick] = useState(true)
    const clickHandle = () =>
    {
        setClick(!click)
    }
    return (
        <div>
            {/*<button onClick={clickHandle}>Click Toggle Mouse</button>
            {click && <ClassEffect2/>}
            {click && <HookEffect2/>}*/}

            {/*<ClassDependency/>
            <HookDependency/>*/}


        </div>
    )
}
export default MouseContainer