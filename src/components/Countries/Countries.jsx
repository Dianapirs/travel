import countries from '../../countries.json';
import "../../App.css";

function Countries() {

    return (
        <div className='countries'>
            <h1 className='pageTitle'>Explore The World</h1>
            {countries.map((item, index) => {
                return (
                    <li className='countries__list' key={index}>
                        <img className="countries__image" src={item.picture} alt="#" />
                        <div className="countries__information">
                            <h2 className="countries__name">{item.country}</h2>
                            <p className="countries__desc">{item.description}</p>
                        </div>
                    </li>
                    )
            })}
        </div>
    );
  }
  
  export default Countries;