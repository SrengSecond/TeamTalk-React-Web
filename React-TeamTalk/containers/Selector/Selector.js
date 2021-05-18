import React from 'react';
import Select from 'react-select';
import './Selector.css'

class Selector extends React.Component
{
    state = {
        selectedOption: null,
    };
    handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    };
    render()
    {
        const { selectedOption } = this.state;

        return (
            <Select

                className={"selector_item"}
                placeholder={this.props.txtholder}
                defaultValue={this.props.menu[0]}
                onChange={this.handleChange}
                options={this.props.menu}
                    theme={theme => ({
                        ...theme,
                        borderRadius: 0,
                        colors: {
                            ...theme.colors,
                            primary25: '#EBEBEB',
                            primary:"var(--primary)",
                        },
                    })}
            />
        );
    }
}
export default Selector