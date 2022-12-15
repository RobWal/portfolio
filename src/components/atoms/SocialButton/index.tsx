import React, { ReactEventHandler } from 'react';
import './SocialButton.css';

type SocialButton = {
    fileName: string,
    link?: string,
    alternate: string,
    onClickFunction?: ReactEventHandler,
};

const SocialButton = ({fileName, link, alternate, onClickFunction}: SocialButton) => {
    return (
        <div className="social">
            <a className="social-link" href={link} target="_blank" onClick={onClickFunction}>
                <img className="social-link-image" src={fileName} alt={alternate}/>   
            </a>
        </div>
    );
};

export default SocialButton;