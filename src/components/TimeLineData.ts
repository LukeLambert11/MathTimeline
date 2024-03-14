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

data[-1825 + 2000].info += '\n **Kahun Papyri**\n [Wikipedia](https://en.wikipedia.org/wiki/Kahun_Papyri)'
data[-1825 + 2000].color = 'red';

data[-1500 + 2000].info += '\n **Rhind Papyrus**\n [Wikipedia](https://en.wikipedia.org/wiki/Rhind_Mathematical_Papyrus)'
data[-1500 + 2000].color = 'red';

data[-800 + 2000].info += '\n **Baudhayana Sutrasn**\n [Wikipedia](https://en.wikipedia.org/wiki/Baudhayana_sutras)'
data[-800 + 2000].color = 'red';

data[-1100 + 2000].info += '\n **Zhoubi Suanjing**\n [Wikipedia](https://en.wikipedia.org/wiki/Zhoubi_Suanjing)'
data[-1100 + 2000].color = 'red';

data[-490 + 2000].info += '\n **Zeno\'s Paradoxes**\n [Wikipedia](https://en.wikipedia.org/wiki/Zeno%27s_paradoxes)'
data[-490 + 2000].color = 'red';

data[-387  + 2000].info += '\n **Platonic Academy Founded**\n [Wikipedia](https://en.wikipedia.org/wiki/Platonic_Academy)'
data[-387 + 2000].color = 'red';

data[-300 + 2000].info += '\n **Euclid Elements**\n [Wikipedia](https://en.wikipedia.org/wiki/Euclid%27s_Elements)';
data[-300 + 2000].color = 'red';

data[-280 + 2000].info += '\n **On the Sizes and Distances (Aristarchus)**\n [Wikipedia](https://en.wikipedia.org/wiki/On_the_Sizes_and_Distances)'
data[-280 + 2000].color = 'red';

data[-202 + 2000].info += '\n **Book on Numbers and Computation**\n [Wikipedia](https://en.wikipedia.org/wiki/Book_on_Numbers_and_Computation)'
data[-202 + 2000].color = 'red';

data[-150 + 2000].info += '\n **The Nine Chapters on the Mathematical Art\n**\n [Wikipedia](https://en.wikipedia.org/wiki/The_Nine_Chapters_on_the_Mathematical_Art)'
data[-150 + 2000].color = 'red';

data[-40 + 2000].info += '\n **Organon Translated into Latin**\n [Wikipedia](https://en.wikipedia.org/wiki/Organon)'
data[-40 + 2000].color = 'red';

data[147 + 2000].info += '\n **Almagest**\n [Wikipedia](https://en.wikipedia.org/wiki/Almagest)'
data[147 + 2000].color = 'red';

data[284 + 2000].info += '\n **Arithmetica**\n [Wikipedia](https://en.wikipedia.org/wiki/Arithmetica)'
data[284 + 2000].color = 'red';

data[300 + 2000].info += '\n **Sunzi Suanjing\n**\n [Wikipedia](https://en.wikipedia.org/wiki/Sunzi_Suanjing)'
data[300 + 2000].color = 'red';

data[383 + 2000].info += '\n **Bakhshali manuscript\n**\n [Wikipedia](https://en.wikipedia.org/wiki/Bakhshali_manuscript)'
data[383 + 2000].color = 'red';

data[628 + 2000].info += '\n **Brāhmasphuṭasiddhānta\n**\n [Wikipedia](https://en.wikipedia.org/wiki/Br%C4%81hmasphu%E1%B9%ADasiddh%C4%81nta)'
data[628 + 2000].color = 'red';

data[750 + 2000].info += '\n **Brāhmasphuṭasiddhānta translated into Arabic **\n [Wikipedia](https://en.wikipedia.org/wiki/Mu%E1%B8%A5ammad_ibn_Ibr%C4%81h%C4%ABm_al-Faz%C4%81r%C4%AB#Works)'
data[750 + 2000].color = 'red';

data[818+2000].info += '\n **House of Wisdom founded**\n [Wikipedia](https://en.wikipedia.org/wiki/House_of_Wisdom)'



//things people used

data[-2000 + 2000].info += '\n **Babylonians use a base-60 positional numeral system**\n [Wikipedia](https://en.wikipedia.org/wiki/Sexagesimal)'
data[-2000 + 2000].color = 'blue';

data[-1000 + 2000].info += '\n **Egyptian\'s use unit fractions **\n [Wikipedia](https://en.wikipedia.org/wiki/Egyptian_fraction)'
data[-1000 + 2000].color = 'blue';

data[-650 + 2000].info += '\n **Luoshu Square**\n [Wikipedia](https://en.wikipedia.org/wiki/Luoshu_Square)'
data[-650 + 2000].color = 'blue';

data[-500 + 2000].info += '\n **Irrational Numbers**\n [Wikipedia](https://en.wikipedia.org/wiki/Irrational_number#Ancient_Greece)'
data[-500 + 2000].color = 'blue';

data[-400 + 2000].info += '\n **Counting Rods used in China**\n [Wikipedia](https://en.wikipedia.org/wiki/Counting_rods)'
data[-400 + 2000].color = 'blue';

data[-300 + 2000].info += '\n **Brahmi numerals**\n [Wikipedia](https://en.wikipedia.org/wiki/Brahmi_numerals)'
data[-300 + 2000].color = 'blue';

data[-299 + 2000].info += '\n **Abacus Invented**\n [Wikipedia](https://en.wikipedia.org/wiki/Abacus)'
data[-299 + 2000].color = 'blue';

data[-240 + 2000].info += '\n **Sieve of Eratosthenes**\n [Wikipedia](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes)'
data[-240 + 2000].color = 'blue';

data[-50 + 2000].info += '\n **Indian Numerals**\n [Wikipedia](https://en.wikipedia.org/wiki/Hindu%E2%80%93Arabic_numeral_system#Glyph_comparison)'
data[-50 + 2000].color = 'blue';

data[60 + 2000].info += '\n **Heron\'s Formula**\n [Wikipedia](https://en.wikipedia.org/wiki/Heron%27s_formula)'
data[60 + 2000].color = 'blue';

data[224 + 2000].info += '\n **Earliest use of 0 Character**\n [Wikipedia](https://en.wikipedia.org/wiki/0#India)'
data[224 + 2000].color = 'blue';

data[263 + 2000].info += '\n **Liu Hui\'s π algorithm**\n [Wikipedia](https://en.wikipedia.org/wiki/Liu_Hui%27s_%CF%80_algorithm)'
data[263 + 2000].color = 'blue';

data[340 + 2000].info += '\n **Pappus\'s hexagon theorem**\n [Wikipedia](https://en.wikipedia.org/wiki/Pappus%27s_hexagon_theorem)'
data[340 + 2000].color = 'blue';

data[500 + 2000].info += '\n **Pi Calculated to 6 decimal places**\n [Wikipedia](https://en.wikipedia.org/wiki/Zu_Chongzhi#Mathematics)'
data[500 + 2000].color = 'blue';

data[510 + 2000].info += '\n **Sine and Cosine**\n [Wikipedia](https://en.wikipedia.org/wiki/Aryabhata#Trigonometry)'
data[510 + 2000].color = 'blue';

data[680 + 2000].info += '\n **Bhāskara I\'s sine approximation formula**\n [Wikipedia](https://en.wikipedia.org/wiki/Bh%C4%81skara_I%27s_sine_approximation_formula)'
data[680 + 2000].color = 'blue';

data[650 + 2000].info += '\n **Brahmagupta\'s formula\n**\n [Wikipedia](https://en.wikipedia.org/wiki/Brahmagupta%27s_formula)'
data[650 + 2000].color = 'blue';




//people born
data[-626 + 2000].info += '\n **Thales of Miletus is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/Thales_of_Miletus)'
data[-626 + 2000].color = 'green';

//Pythagoras
data[-570 + 2000].info += '\n **Pythagoras of Samos is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/Pythagoras)'
data[-570 + 2000].color = 'green';

//Anaxagoras
data[-501 + 2000].info += '\n **Anaxagoras is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/Anaxagoras)'
data[-501 + 2000].color = 'green';

// Theodorus of Cyrene
data[-465 + 2000].info += '\n **Theodorus of Cyrene is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/Theodorus_of_Cyrene)';
data[-465 + 2000].color = 'green';

// Antiphon the Sophist
data[-480 + 2000].info += '\n **Antiphon the Sophist is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/Sophistic_works_of_Antiphon)';
data[-480 + 2000].color = 'green';

// Democritus
data[-460 + 2000].info += '\n **Democritus is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/Democritus)';
data[-460 + 2000].color = 'green';

// Hippias
data[-460 + 2000].info += '\n **Hippias is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/Hippias)';
data[-460 + 2000].color = 'green';

// Bryson of Heraclea
data[-450 + 2000].info += '\n **Bryson of Heraclea is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/Bryson_of_Heraclea)';
data[-450 + 2000].color = 'green';

// Archytas
data[-428 + 2000].info += '\n **Archytas is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/Archytas)';
data[-428 + 2000].color = 'green';

// Plato
data[-423 + 2000].info += '\n **Plato is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/Plato)';
data[-423 + 2000].color = 'green';

// Theaetetus
data[-417 + 2000].info += '\n **Theaetetus is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/Theaetetus_(mathematician))';
data[-417 + 2000].color = 'green';

// Eudoxus of Cnidus
data[-408 + 2000].info += '\n **Eudoxus of Cnidus is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/Eudoxus_of_Cnidus)';
data[-408 + 2000].color = 'green';

// Thymaridas
data[-400 + 2000].info += '\n **Thymaridas is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/Thymaridas)';
data[-400 + 2000].color = 'green';

// Xenocrates
data[-395 + 2000].info += '\n **Xenocrates is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/Xenocrates)';
data[-395 + 2000].color = 'green';

// Autolycus of Pitane
data[-380 + 2000].info += '\n **Autolycus of Pitane is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/Autolycus_of_Pitane)';
data[-380 + 2000].color = 'green';

// Aristarchus of Samos
data[-310 + 2000].info += '\n **Aristarchus of Samos is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/Aristarchus_of_Samos)';
data[-310 + 2000].color = 'green';

//Archimedes
data[-287 + 2000].info += '\n **Archimedes is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/Archimedes)';
data[-287 + 2000].color = 'green';

//Chrysippus
data[-279 + 2000].info += '\n **Chrysippus of Soil is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/Chrysippus#Mathematics)';
data[-279 + 2000].color = 'green';

//Appollonius of Perga
data[-240 + 2000].info += '\n **Appollonius of Perga is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/Apollonius_of_Perga)';
data[-240 + 2000].color = 'green';

//Hipparchus
data[-120 + 2000].info += '\n **Hipparchus is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/Hipparchus)'
data[-120 + 2000].color = 'green';

data[60 + 2000].info += '\n **Nicomachus of Gerasa is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/Nicomachus#Introduction_to_Arithmetic)'
data[60 + 2000].color = 'green';

data[78 + 2000].info += '\n **Zhang Heng is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/Zhang_Heng#Mathematics)'
data[78 + 2000].color = 'green';

data[100 + 2000].info += '\n **Claudius Ptolemy is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/Ptolemy)'
data[100 + 2000].color = 'green';

data[214 + 2000].info += '\n **Diophantus is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/Diophantus)'
data[214 + 2000].color = 'green';

data[335 + 2000].info += '\n **Theon of Alexandria is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/Theon_of_Alexandria)'
data[335 + 2000].color = 'green';

data[476 + 2000].info += '\n **Aryabhata is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/Aryabhata)'
data[476 + 2000].color = 'green';

data[480  + 2000].info += '\n **Simplicius of Cilicia is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/Simplicius_of_Cilicia)'
data[480 + 2000].color = 'green';

data[598 + 2000].info += '\n **Brahmagupta is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/Brahmagupta)'
data[598 + 2000].color = 'green';



//Gauss
data[1777 + 2000].info += '\n **Carl Friedrich Gauss is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/Carl_Friedrich_Gauss)'
data[1777 + 2000].color = 'green';

//Euler
data[1707 + 2000].info += '\n **Leonhard Euler is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/Leonhard_Euler)'
data[1707 + 2000].color = 'green';








export default data;