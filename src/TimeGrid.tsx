import React from "react"
import './TimeGrid.css'
import GridContainer from './components/GridContainer';
// @ts-ignore
import data from './components/TimeLineData';

const timeLine = () => {

    // @ts-ignore
    const gridItems = data;


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