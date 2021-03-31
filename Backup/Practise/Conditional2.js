import React from "react";
class Conditional2 extends React.Component
{
    constructor()
    {
        super()
        this.state =
            {
                unreadMessage: ["Hey joe","It jane"]
            }
    }
    render()
    {

        return (
            <div>
                {
                    this.state.unreadMessage.length > 0 &&
                    <div>
                        <h2>You have {this.state.unreadMessage.length} unreadMessage</h2>
                        <h3>Message</h3>
                        {this.state.unreadMessage.map((each) => <h4>{each.indexOf()}{each}</h4>                            )}
                    </div>

                }
            </div>
        )
    }
}
export default Conditional2