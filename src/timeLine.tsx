import React from "react"
import { Chrono } from "react-chrono";
import data from "./data"

const timeLine = () => {
    const items = data;

    return (
        <div style={{ width: '1000px', height: '950px' }}>
            <Chrono items={items}  />
        </div>
    )
}
export default timeLine;