import React from 'react';

const Cards = (props) => {
    return (
        <>
            <div className="col-md-4 col-10 col-xxl mx-auto">
                <div className="card" >
                    <img src={props.imgsrc} className="card-img-top" alt="image" className="img-fluid"/>
                    <div className="card-body">
                        <p>NETFLIX ORIGINAL SERIES</p>
                        <h5 className="card-title">{props.name}</h5>
                        <a href={props.sLink}>
                        <button type="button" className="btn btn-outline-dark">WATCH NOW</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Cards;