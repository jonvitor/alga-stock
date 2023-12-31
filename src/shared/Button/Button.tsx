import React from 'react';
import './Button.css'

declare interface ButtonProps {
    content?: string;
    onClick?: () => void;
    children: any;
    appendIcon?: JSX.Element
}

const Button: React.FC<ButtonProps> = (props) => {
    return <button 
        className="AppButton"
        onClick={props.onClick}
    >
        { props.children || 'Nameless Button' }
        { props.appendIcon }
    </button>
}

export default Button;