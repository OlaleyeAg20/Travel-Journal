
export default function Card(props){
        return <div className="card">
        <img src={props.image} alt="" />
        <div>
            <p className="countryInfo">
                <img src="assets/location.svg" alt="" className="location" />
                <span className="countryName"> {props.Country} </span>
                <a href="#">view on google map</a>
            </p>
            <h1>{props.locationName}</h1>
            <p className="date">{props.date}</p>
            <p className="description">{props.description}</p>
        </div>
    </div>
}
