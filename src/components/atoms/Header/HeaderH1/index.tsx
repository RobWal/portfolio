import './HeaderH1.css'; 

interface HeaderH1Interface {
    text: string,
    componentKey: number,
    onClickFunction?: React.MouseEventHandler<HTMLDivElement>,
}

const HeaderH1 = ({text, componentKey, onClickFunction}: HeaderH1Interface) => {
    return (
        <div key={componentKey} className="header-h1" onClick={onClickFunction}>{text}</div>
    );
};

export default HeaderH1;