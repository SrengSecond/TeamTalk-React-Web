import React from 'react'

import SpeadOperator from "./1-GettingStarted/SpeadOperator";
import Destructuring from "./1-GettingStarted/Destructuring";
import MainBasic from "./2-Basic/MainBasic";
import BasicPractise from "./Practise/Practise1/BasicPracise";
import BasicPractise2 from "./Practise/Practise2/Container/BasicPractise2";
import Assigment from "./Assignment/Assigment";
import Section1 from "./4-StylingCompoment/Sass/Cyberpunk 2020/Section1";
import HigherComponent from "./3-Debuggging/HigherComponent";
import Adjacent from "./5-CompomentDeepDive/19-Render Adjacent JSX/Adjacent";
import PropTypes from "./5-CompomentDeepDive/20-Proptype/PropTypes";
import RefsCompoment from "./5-CompomentDeepDive/21-Refs/RefsCompoment";

function FreelancerApp()
{
    return (
        <div>
            {/*<h1>FreelanceApp</h1>*/}
            {/*<SpeadOperator/>*/}
            {/*<Destructuring/>*/}
            {/*<MainBasic/>*/}
            {/*<BasicPractise/>*/}
            {/*<Section1/>*/}
            {/*<Assigment/>*/}
            {/*<HigherComponent/>*/}
            {/*<Adjacent/>*/}
            {/*<PropTypes/>*/}
            {/*<RefsCompoment/>*/}

            <BasicPractise2
                sectionTitle={"NEVER FADE AWAY"}
            />
        </div>
    )
}
export default FreelancerApp