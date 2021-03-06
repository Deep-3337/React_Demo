function Service(props){
    return(

        <div className="card">
            <div className="card-img">
                <img src= {props.image} className="card-image"/>
            </div>
            <h1 className="card-title">{props.title}</h1>
            <p className="card-description">{props.desc}</p>
            <p className="btn-parent">
                <button className="card-btn">
                Read more
                </button>
            </p>
        </div>
    )

}

export default Service;