import React from 'react';
import Refs from "./Refs";
class RefsCompoment extends React.Component
{
    state =
        {
            people:
                [
                    {name: "Sample1",age:23},
                    {name: "Sample2",age:12},
                    {name: "Sample3",age:50},
                ]
        }
    render()
    {
        return(
            <div>
                {this.state.people.map((each,index) =>
                    {
                        return (
                            <div
                                key={index}
                            >
                                <Refs
                                    name={each.name}
                                    age={each.age}
                                    index={index}
                                />
                            </div>
                        )
                    }
                )
                }

            </div>
        )
    }
}
export default RefsCompoment