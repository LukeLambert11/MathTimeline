import React from 'react';
import GridItem from './GridItem';
import './styles/GridContainer.css'; // Make sure to create this CSS file with styles for the container

type GridItemProps = {
    id: React.Key;
    info: string;
    color?: string; // The color is optional
};

type GridContainerProps = {
    items: GridItemProps[];
};
const GridContainer: React.FC<GridContainerProps> = ({ items }) => {
    return (
        <div className="grid-container">
            {items.map(item => (
                <GridItem key={item.id} info={item.info} color={item.color}/>
            ))}
        </div>
    );
};

export default GridContainer;
