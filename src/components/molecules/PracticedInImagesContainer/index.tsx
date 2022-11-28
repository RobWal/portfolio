import './PracticedInImagesContainer.css';

interface PracticedInImagesContainerInterface {
    images: PracticedImageInterface[]; 
}

interface PracticedImageInterface {
    imageSrc: string,
    id: string,
    className: string,
}

const PracticedInImagesContainer = ({images}: PracticedInImagesContainerInterface) => {
    return (
        <div className="practiced-in-images-container">
            {images.map((image, index) => {
                return (
                    <img key={`${index}`} id={image.id} className={`images-container-image ${image.className}`} src={image.imageSrc} />
                )
            })}
        </div>
    );
};

export default PracticedInImagesContainer;