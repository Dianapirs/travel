import { useParams } from "react-router-dom";
import data from '../../data/pages.json';
import "../../App.css";

function Pages() {
    const params = useParams();

    const pageData = data.find((item) => {
      return item.slug == params.slug;
    });
    

    return (
    <div className="pageWrapper">
        <h1 className="pageTitle">{pageData.title}</h1>
        <div className="pageImageWrapper"><img className="pageImage" src={pageData.picture} alt='#' /></div>
        <p className="pageContent">{pageData.text}</p>
    </div>
    );
  }
  
  export default Pages;