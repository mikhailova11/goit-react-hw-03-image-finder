import ImageGalleryItem from './ImageGalleryItem'
import '../styles.css';


const ImageGallery = ({onClick, hits, activeIdx}) => {
    console.log(onClick)
    return (
        <ul className="ImageGallery" >
            <ImageGalleryItem 
            onClick={onClick} 
            hits={hits}
            activeIdx={activeIdx}
            />
        </ul>
    )
}

export default ImageGallery