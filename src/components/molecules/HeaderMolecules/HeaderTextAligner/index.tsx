import './HeaderTextAligner.css';
import { useNavigate } from 'react-router-dom';

type HeaderTextAlignerType = {
    components: JSX.Element[],
}

const HeaderTextAligner = ({components}: HeaderTextAlignerType) => {
    const navigate = useNavigate();
    return (
        <div className="header-text-aligner" onClick={() => navigate('/')}>
            {components[0]}
            {components[1]}
        </div>
    );
};

export default HeaderTextAligner;