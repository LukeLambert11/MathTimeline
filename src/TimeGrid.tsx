import React from "react"
import './TimeGrid.css'
import GridContainer from './GridContainer';

const timeLine = () => {

    const gridItems = [];
    for (let i = -2000; i < 2025; i++) {
        const year = i < 0 ? `${-i} BC` : i.toString(); // Use only the year number for AD
        gridItems.push({
            id: i + 2000, // Adjust the id to be positive
            title: `Title ${year}`,
            info: year
        });
    }

    gridItems[1] = {
        id: 1,
        title: `Title 1`,
        info: `1500BC \n **Euler is Born**\n \n [Wikipedia](https://en.wikipedia.org/wiki/Main_Page)`,
        color: '#ffffff'
    };


    return (
        <div className="background">
            <h1 className="title">Mathematics Timeline</h1>
            <div>
                <GridContainer items={gridItems} />
            </div>
            <h1></h1>
        </div>
    )
}

export default timeLine;