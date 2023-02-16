import "./appSection.scss"
import ImageCarousel from "../imageCarousel/ImageCarousel";

export default function AppSection({ headerText, paragraphText, images }) {
    return (
      <div className={images ? "section withImage" : "section"}>
        <h2>{headerText}</h2>
        <p>{paragraphText}</p>
        {images && (
          <div className="carouselContainer">
            <ImageCarousel images={images}></ImageCarousel>
          </div>
        )}
      </div>
    );
  }
