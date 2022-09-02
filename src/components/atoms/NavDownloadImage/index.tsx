import './NavDownloadImage.css';

const NavDownloadImage = () => {
    return (
        <a className="nav-download-image-container" href="download.png" download>
            <img className="nav-download-image" src="download.png" alt="DownloadImage"/>    
        </a>
    )
}

export default NavDownloadImage;