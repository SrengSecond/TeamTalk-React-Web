import React from "react";
import FormComponent from "./MainFormComponent";
class Form extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "Heywood",
            isVagan: false,
            isKosher: false,
            isLactose: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event)
    {
        const {name,value,checked,type} = event.target
        type === "checkbox" ?
            this.setState(
                {
                    [name]: checked
                })
            /*            this.setState((preVState) => {
                            return {
                                checkRestrict:
                                    {
                                        ...preVState.checkRestrict,
                                        [name]: checked
                                    }
                            }
                            })*/
            :
            this.setState(
                {
                    [name]: value
                })
    }
    handleSubmit()
    {

    }
    render()
    {
        return (
            <FormComponent
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit()}
                data={this.state}
            />
        )
    }

}
export default Form