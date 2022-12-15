import { ReactEventHandler } from 'react';
import './HeaderH2.css'; 

type HeaderH2 = {
    text: string,
    componentKey: number,
    onClickFunction?: ReactEventHandler<HTMLDivElement>,
}

const HeaderH2 = ({text, componentKey, onClickFunction}: HeaderH2) => {
    return (
        <div key={componentKey} className="header-h2" onClick={onClickFunction}>
            {text}
        </div>
    );
};

export default HeaderH2;