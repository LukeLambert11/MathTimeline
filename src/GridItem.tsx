import React from 'react';
import './GridItem.css'; // Make sure to create this CSS file with styles for grid item

type GridItemProps = {
    info: string;
    color?: string; // Make color optional
};

const GridItem: React.FC<GridItemProps> = ({ info, color }) => {
    // Function to handle the mouse entering the grid item
    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        const popup = e.currentTarget.querySelector('.popup') as HTMLElement;
        const rect = e.currentTarget.getBoundingClientRect();
        const isRightSide = (rect.left + rect.width / 2) > window.innerWidth / 2;

        // Position the popup on the left if the grid item is on the right side of the screen
        if (isRightSide) {
            popup.style.left = 'auto';
            popup.style.right = '100%';
        } else {
            popup.style.left = '100%';
            popup.style.right = 'auto';
        }
    };

    const itemStyle = color ? { backgroundColor: color } : {};

    // Convert Markdown links to HTML <a> tags
    const convertLinksAndBold = (text: string) => {
        // Convert Markdown links to HTML <a> tags
        const withLinks = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, `<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>`);

        // Convert Markdown bold syntax to HTML <strong> tags
        const withBold = withLinks.replace(/\*\*([^*]+)\*\*/g, `<strong>$1</strong>`);

        return withBold;
    };

    const createMarkup = () => {
        return {
            __html: convertLinksAndBold(info)
        };
    };

    return (
        <div className="grid-item" style={itemStyle} onMouseEnter={handleMouseEnter}>
            <div className="popup" dangerouslySetInnerHTML={createMarkup()}></div> {/* Removed {info} from here */}
        </div>
    );
};

export default GridItem;
