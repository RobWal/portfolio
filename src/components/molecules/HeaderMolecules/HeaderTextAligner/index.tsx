import './HeaderTextAligner.css';

type HeaderTextAlignerType = {
    components: JSX.Element[],
}

const HeaderTextAligner = ({components}: HeaderTextAlignerType) => {
    return (
        <div className="header-text-aligner">
            {components[0]}
            {components[1]}
        </div>
    );
};

export default HeaderTextAligner;