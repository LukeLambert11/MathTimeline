import { Chrono } from "react-chrono";


const items = [
    {
    title: "May 1940",
    cardTitle: "Dunkirk",
    url: "http://www.history.com",
    cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
    cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
    media: {
        type: "IMAGE",
        source: {
            url: "http://someurl/image.jpg"
        }
    }
},
    {
        title: "1300",
        cardTitle: "Test",
        url: "http://www.wikipedia.com",
        cardSubtitle:"Test1",
        cardDetailedText: "test2",
    },

    {
        title: "900",
        cardTitle: "Test",
        url: "http://www.wikipedia.com",
        cardSubtitle:"Test1",
        cardDetailedText: "test2",
    },
    {
        title: "800",
        cardTitle: 'Card Title 1',
        items: [
            {   Title: "880",
                cardTitle: 'test1',
                url: "http://www.history.com",
                cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
                },
            { cardTitle: 'nested card title 2' },
            { cardTitle: 'nested card title 2' },
            { cardTitle: 'nested card title 2' },
            { cardTitle: 'nested card title 2' },
            { cardTitle: 'nested card title 2' },
            { cardTitle: 'nested card title 2' },
            { cardTitle: 'nested card title 2' },

        ]
    },     {
        title: "600",
        cardTitle: "Test",
        url: "http://www.wikipedia.com",
        cardSubtitle:"Test1",
        cardDetailedText: "test2",
    },
    {
        title: "400",
        cardTitle: "Test",
        url: "http://www.wikipedia.com",
        cardSubtitle:"Test1",
        cardDetailedText: "test2",
    },  {
        title: "100BC",
        cardTitle: "Test",
        url: "http://www.wikipedia.com",
        cardSubtitle:"Test1",
        cardDetailedText: "test2",
    },




];

export default items;
