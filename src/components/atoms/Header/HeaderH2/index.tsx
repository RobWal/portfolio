import './HeaderH2.css'; 

type HeaderH2 = {
    text: string,
    componentKey: number,
}

const HeaderH2 = ({text, componentKey}: HeaderH2) => {
    return (
        <div key={componentKey} className="header-h2">
            {text}
        </div>
    );
};

export default HeaderH2;