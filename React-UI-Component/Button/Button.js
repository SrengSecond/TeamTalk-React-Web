import React from 'react';
import './Button.css'
function Button({children,type,onClick,buttonStyle,buttonSize,borderRadius})
{

    const STYLES =
        [
            'btn--primary',
            'btn--outline'
        ]
    const SIZES =
        [
            'btn--medium',
            'btn--large'
        ]
    const BORDE =
        [
            'btn--no-radius'
        ]


    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = STYLES.includes(buttonSize) ? buttonSize : SIZES[0];
    const checkButtonBorderRadius = STYLES.includes(borderRadius) ? borderRadius: BORDE[0];


    return (
        <button className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonBorderRadius}`}
                onClick={onClick}
                type={type}>
            {children}
        </button>
    );
}

export default Button;