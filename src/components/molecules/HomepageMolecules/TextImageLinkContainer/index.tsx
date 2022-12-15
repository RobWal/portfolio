import './TextImageContainer.css';

interface TextImageContainerInterface {
    textComponent: JSX.Element,
    ImageLinkComponent: JSX.Element,
}

const TextImageContainer = ({textComponent, ImageLinkComponent}: TextImageContainerInterface) => {
    return (
        <div className="text-image-container-homepage">
            {textComponent}{ImageLinkComponent}
        </div>
    )
}

export default TextImageContainer;