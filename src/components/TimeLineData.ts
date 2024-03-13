const data = [];
for (let i = -2000; i < 2025; i++) {
    const year = i < 0 ? `${-i} BC` : i.toString(); // Use only the year number for AD
    data.push({
        id: i + 2000, // Adjust the id to be positive
        info: year,
        color: '#444442'
    });
}

//important things that happened



data[-1850 + 2000].info += '\n **Moscow Mathematical Papyrus**\n [Wikipedia](https://en.wikipedia.org/wiki/Moscow_Mathematical_Papyrus)'
data[-1850 + 2000].color = 'red';

data[-1800 + 2000].info += '\n **Berlin Papyrus 6619\n**\n [Wikipedia](https://en.wikipedia.org/wiki/Berlin_Papyrus_6619)'
data[-1800 + 2000].color = 'red';

data[-1825 + 2000].info += '\n **Kahun_Papyri**\n [Wikipedia](https://en.wikipedia.org/wiki/Kahun_Papyri)'
data[-1825 + 2000].color = 'red';

data[-1500 + 2000].info += '\n **Rhind Papyrus**\n [Wikipedia](https://en.wikipedia.org/wiki/Rhind_Mathematical_Papyrus)'
data[-1500 + 2000].color = 'red';

data[-800 + 2000].info += '\n **Baudhayana Sutrasn**\n [Wikipedia](https://en.wikipedia.org/wiki/Baudhayana_sutras)'
data[-800 + 2000].color = 'red';

data[-1100 + 2000].info += '\n **Zhoubi_Suanjing**\n [Wikipedia](https://en.wikipedia.org/wiki/Zhoubi_Suanjing)'
data[-1100 + 2000].color = 'red';



//things people used

data[-2000 + 2000].info += '\n **Babylonians use a base-60 positional numeral system**\n [Wikipedia](https://en.wikipedia.org/wiki/Sexagesimal)'
data[-2000 + 2000].color = 'blue';

data[-1000 + 2000].info += '\n **Egyptian\'s use unit fractions **\n [Wikipedia](https://en.wikipedia.org/wiki/Egyptian_fraction)'
data[-1000 + 2000].color = 'blue';

data[-650 + 2000].info += '\n **Luoshu_Square**\n [Wikipedia](https://en.wikipedia.org/wiki/Luoshu_Square)'
data[-650 + 2000].color = 'blue';

//people born
data[-626 + 2000].info += '\n **Thales of Miletus is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/Thales_of_Miletus)'
data[-626 + 2000].color = 'green';

data[1777 + 2000].info += '\n **Carl Friedrich Gauss is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/Carl_Friedrich_Gauss)'
data[1777 + 2000].color = 'green';

data[1707 + 2000].info += '\n **Leonhard Euler is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/Leonhard_Euler)'
data[1707 + 2000].color = 'green';

export default data;