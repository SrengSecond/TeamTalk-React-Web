import React from 'react'
class Header extends React.Component
{
    componentWillUnmount()
    {
        //console.log('[headerTap.js] componentWillUnmount: Doing Clean up')
    }

    render()
    {

        return (
            <div>
                <h1>GEAR</h1>
            </div>
        )
    }

}
export default Header;