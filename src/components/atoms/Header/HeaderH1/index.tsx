import './HeaderH1.css'; 

type HeaderH1 = {
    text: string,
    componentKey: number,
}

const HeaderH1 = ({text, componentKey}: HeaderH1) => {
    return (
        <div key={componentKey} className="header-h1">
            {text}
        </div>
    );
};

export default HeaderH1;