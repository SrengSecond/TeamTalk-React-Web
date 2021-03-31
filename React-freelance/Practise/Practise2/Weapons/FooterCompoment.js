import React from 'react'
import '../Style/FooterCompoment.css'
function FooterComponent(props)
{
    return(
        <div className={"footerCompoment"}>
            <p>Vendor: {props.vendor}</p>
            <p>Location: {props.location}</p>
        </div>
    )
}
export default FooterComponent