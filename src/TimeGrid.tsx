import React from "react"
import './TimeGrid.css'
import GridContainer from './components/GridContainer';
import { FaLinkedin } from 'react-icons/fa';

// @ts-ignore
import data from './components/TimeLineData';

const timeLine = () => {

    // @ts-ignore
    const gridItems = data;


    return (
        <div className="background">
            <h1 className="title">Mathematics Timeline</h1>

            <div className= "byLineContainerStyle">
                <span>By Luke Lambert</span>
                <a
                    href="https://www.linkedin.com/in/luke-lambert-378730232"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin className="linkedinIconStyle" />
                </a>
            </div>


            <div>
                <GridContainer items={gridItems} />
            </div>
            <h1></h1>
            <h1></h1>
            <h1></h1>

        </div>
    )
}

export default timeLine;


