import './GoUpButton.css';

const GoUpButton = () => {
    return (
        <div className="go-up-button" onClick={()=>{window.scrollTo({top: (0), behavior: "smooth"})}}>
            <img className="go-up-button-image" src="/images/upArrowIcon.svg" />
        </div>
    );
};

export default GoUpButton;