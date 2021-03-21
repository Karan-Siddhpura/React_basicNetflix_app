import React from 'react';
import Heading from './Heading';
import Cards from './Cards';
import SeriesData from './SeriesData';


const App = () => {
    return (
        <>
            <Heading />
            <div className="container">
                <div className="row">
                    {SeriesData.map((val) => {
                        return (
                            <Cards
                            key={val.id}
                                name={val.name}
                                imgsrc={val.imgsrc}
                                sLink={val.sLink}
                            />
                        );
                    })}
                </div>
            </div>

        </>
    );
}
export default App;