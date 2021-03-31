import React from "react";
import './MyBasicApp.css';
import MappingData from "./MappingCompoment/MappingData";
import HandleEvents from "./HandingEvent/HandleEvent"
import CycleMethods from "./8_lifecycleMethods/CycleMethod";
import ConditionRedering from "./9_Conditional_Rendering/ConditionRedering";
import Fecting from "./10_fect_API/Fecting";
import Forms from "./11_Form/Forms"
import PractiseForm from "./11_Form/PractiseForm";

//Make sure you import file before used itS

function MyBasicApp()

{
    return(
        <div className="myBasicApp">

            {/*            <Item
                name="MoonSine"
                cost="25$"
                description="Increase you health core"
                skillPerk={
                    {
                        mainPerk: "Scaler",
                        subPerk: "Rust-Blood",
                        passivePerk: "DragonBorn"
                    }
                }
            />

            <Item
                name="tomato"
                cost="30$"
                description="Increase stamana"
                skillPerk={
                    {
                        mainPerk: "Scaler",
                        subPerk: "Rust-Blood",
                        passivePerk: "DragonBorn"
                    }
                }
            />*/}
            {/*<MappingData/>*/}
            {/*<ClassBase item = "Box"/>*/}
            {/*<StateCompoment/>*/}
            {/*<HandleEvents/>*/}
            {/*<ClassBase/>*/}
            {/*<MappingData/>*/}
            {/*<CycleMethods name={"22-MK"} damage={32}/>*/}
            {/*<ConditionRedering/>*/}
            {/*<Fecting/>*/}
            {/*<Forms/>*/}
            {/*<PractiseForm/>*/}
            <Forms/>
        </div>
    )
}
export default MyBasicApp