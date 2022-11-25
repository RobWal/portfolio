import './HeaderP1.css'; 

type HeaderP1 = {
    text: string,
}

const HeaderP1 = ({text}: HeaderP1) => {
    return (
        <div className="header-p1">
            {text}
        </div>
    );
};

export default HeaderP1;