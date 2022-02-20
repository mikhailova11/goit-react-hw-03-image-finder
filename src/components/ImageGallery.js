import ImageGalleryItem from './ImageGalleryItem'
import '../styles.css';


const ImageGallery = ({onClick}) => {
    return (
        <ul className="ImageGallery" onClick={onClick}>
            <ImageGalleryItem />
        </ul>
    )
}

export default ImageGallery