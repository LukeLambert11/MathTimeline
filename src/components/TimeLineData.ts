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
data[818 + 2000].color = 'red';

data[820 + 2000].info += '\n **Al-Jabr**\n [Wikipedia](https://en.wikipedia.org/wiki/Al-Jabr)'
data[820 + 2000].color = 'red';

data[850 + 2000].info += '\n **Gaṇita-sāra-saṅgraha**\n [Wikipedia](https://en.wikipedia.org/wiki/Ga%E1%B9%87ita-s%C4%81ra-sa%E1%B9%85graha)'
data[850 + 2000].color = 'red';

data[1011 + 2000].info += '\n **Book of Optics**\n [Wikipedia](https://en.wikipedia.org/wiki/Book_of_Optics)'
data[1011 + 2000].color = 'red';

data[1150 + 2000].info += '\n **Līlāvatī**\n [Wikipedia](https://en.wikipedia.org/wiki/L%C4%ABl%C4%81vat%C4%AB)'
data[1150 + 2000].color = 'red';

data[1202 + 2000].info += '\n **Liber Abaci**\n [Wikipedia](https://en.wikipedia.org/wiki/Liber_Abaci)'
data[1202 + 2000].color = 'red';

data[1247 + 2000].info += '\n **Mathematical Treatise in Nine Sections**\n [Wikipedia](https://en.wikipedia.org/wiki/Mathematical_Treatise_in_Nine_Sections)'
data[1247 + 2000].color = 'red';

data[1248 + 2000].info += '\n **Ceyuan haijing\n**\n [Wikipedia](https://en.wikipedia.org/wiki/Ceyuan_haijing)'
data[1248 + 2000].color = 'red';

data[1303 + 2000].info += '\n **Ganita Kaumudi\n**\n [Wikipedia](https://en.wikipedia.org/wiki/Ganita_Kaumudi)'
data[1303 + 2000].color = 'red';

data[1494 + 2000].info += '\n **Summa de arithmetica\n**\n [Wikipedia](https://en.wikipedia.org/wiki/Summa_de_arithmetica)'
data[1494 + 2000].color = 'red';

data[1501 + 2000].info += '\n **Tantrasamgraha**\n [Wikipedia](https://en.wikipedia.org/wiki/Tantrasamgraha)'
data[1501 + 2000].color = 'red';

data[1530 + 2000].info += '\n **Yuktibhāṣā**\n [Wikipedia](https://en.wikipedia.org/wiki/Yuktibh%C4%81%E1%B9%A3%C4%81)'
data[1530 + 2000].color = 'red';

data[1619 + 2000].info += '\n **Cartesian/Analytic geometry**\n [Wikipedia](https://en.wikipedia.org/wiki/Ren%C3%A9_Descartes#Analytic_geometry)'
data[1619 + 2000].color = 'red';

data[1619 + 2000].info += '\n **Kepler–Poinsot polyhedron**\n [Wikipedia](https://en.wikipedia.org/wiki/Kepler%E2%80%93Poinsot_polyhedron#History)'
data[1619 + 2000].color = 'red';

data[1696 + 2000].info += '\n **Analyse des Infiniment Petits pour l\'Intelligence des Lignes Courbes**\n [Wikipedia](https://en.wikipedia.org/wiki/Analyse_des_Infiniment_Petits_pour_l%27Intelligence_des_Lignes_Courbes)'
data[1696 + 2000].color = 'red';

data[1718 + 2000].info += '\n **The Doctrine of Chances**\n [Wikipedia](https://en.wikipedia.org/wiki/The_Doctrine_of_Chances)'
data[1718 + 2000].color = 'red';

data[1794 + 2000].info += '\n **Thesaurus Logarithmorum Completus (Treasury of all Logarithms)**\n [Wikipedia](https://en.wikipedia.org/wiki/Jurij_Vega#Mathematical_accomplishments)'
data[1794 + 2000].color = 'red';

data[1801 + 2000].info += '\n **Disquisitiones Arithmeticae**\n [Wikipedia](https://en.wikipedia.org/wiki/Disquisitiones_Arithmeticae)'
data[1801 + 2000].color = 'red';

data[1894 + 2000].info += '\n **Analysis Situs**\n [Wikipedia](https://en.wikipedia.org/wiki/Analysis_Situs_(paper))'
data[1894 + 2000].color = 'red';










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

data[628 + 2000].info += '\n **Pell\'s equation Integer Solution**\n [Wikipedia](https://en.wikipedia.org/wiki/Pell%27s_equation)'
data[628 + 2000].color = 'blue';

data[680 + 2000].info += '\n **Bhāskara I\'s sine approximation formula**\n [Wikipedia](https://en.wikipedia.org/wiki/Bh%C4%81skara_I%27s_sine_approximation_formula)'
data[680 + 2000].color = 'blue';

data[650 + 2000].info += '\n **Brahmagupta\'s formula\n**\n [Wikipedia](https://en.wikipedia.org/wiki/Brahmagupta%27s_formula)'
data[650 + 2000].color = 'blue';

data[901 + 2000].info += '\n **Thabit number**\n [Wikipedia](https://en.wikipedia.org/wiki/Thabit_number)'
data[901 + 2000].color = 'blue';

data[940 + 2000].info += '\n **Trigonometric identities**\n [Wikipedia](https://en.wikipedia.org/wiki/Abu_al-Wafa%27_al-Buzjani#Mathematics)'
data[940 + 2000].color = 'blue';

data[953 + 2000].info += '\n **Formulation of the binomial theorem**\n [Wikipedia](https://en.wikipedia.org/wiki/Binomial_theorem#History)'
data[953 + 2000].color = 'blue';

data[929 + 2000].info += '\n **Spherical trigonometric functions**\n [Wikipedia](https://en.wikipedia.org/wiki/Al-Battani#Mathematics)'
data[929 + 2000].color = 'blue';

data[1000 + 2000].info += '\n **Law of Sines**\n [Wikipedia](https://en.wikipedia.org/wiki/Law_of_sines#History)'
data[1000 + 2000].color = 'blue';

data[1029 + 2000].info += '\n **Math Induction**\n [Wikipedia](https://en.wikipedia.org/wiki/Mathematical_induction#History)'
data[1029 + 2000].color = 'blue';

data[1100 + 2000].info += '\n **Modern Hindu Arabic Numerals**\n [Wikipedia](https://en.wikipedia.org/wiki/Arabic_numerals)'
data[1100 + 2000].color = 'blue';

data[1158 + 2000].info += '\n **Chakravala method**\n [Wikipedia](https://en.wikipedia.org/wiki/Chakravala_method)'
data[1158 + 2000].color = 'blue';

data[1400 + 2000].info += '\n **Madhava series**\n [Wikipedia](https://en.wikipedia.org/wiki/Madhava_series)'
data[1400 + 2000].color = 'blue';

data[1460 + 2000].info += '\n **Mean Value Theorem**\n [Wikipedia](https://en.wikipedia.org/wiki/Mean_value_theorem#History)'
data[1460 + 2000].color = 'blue';

data[1412 + 2000].info += '\n **Symbolic Algebra**\n [Wikipedia](https://en.wikipedia.org/wiki/History_of_mathematical_notation#Early_arithmetic_and_multiplication)'
data[1412 + 2000].color = 'blue';

data[1540 + 2000].info += '\n **Quartic equation**\n [Wikipedia](https://en.wikipedia.org/wiki/Quartic_equation)'
data[1540 + 2000].color = 'blue';

data[1572 + 2000].info += '\n **Complex Numbers**\n [Wikipedia](https://en.wikipedia.org/wiki/Rafael_Bombelli#Complex_numbers)'
data[1572 + 2000].color = 'blue';

data[1596 + 2000].info += '\n **Pi Calculated to 20 decimal places**\n [Wikipedia](https://en.wikipedia.org/wiki/Ludolph_van_Ceulen#Calc)'
data[1596 + 2000].color = 'blue';

data[1614 + 2000].info += '\n **Napier Logarithms**\n [Wikipedia](https://en.wikipedia.org/wiki/John_Napier#Logarithms)'
data[1614 + 2000].color = 'blue';

data[1617 + 2000].info += '\n **Base 10 Logarithms**\n [Wikipedia](https://en.wikipedia.org/wiki/Common_logarithm)'
data[1617 + 2000].color = 'blue';

data[1618 + 2000].info += '\n **e (mathematical constant)**\n [Wikipedia](https://en.wikipedia.org/wiki/E_(mathematical_constant))'
data[1618 + 2000].color = 'blue';

data[1637 + 2000].info += '\n **Fermat\'s Last Theorem**\n [Wikipedia](https://en.wikipedia.org/wiki/Fermat%27s_Last_Theorem)'
data[1637 + 2000].color = 'blue';

data[1643 + 2000].info += '\n **Descartes\' theorem**\n [Wikipedia](https://en.wikipedia.org/wiki/Descartes%27_theorem)'
data[1643 + 2000].color = 'blue';

data[1643 + 2000].info += '\n **Fundamental Theorem of Calculus**\n [Wikipedia](https://en.wikipedia.org/wiki/History_of_calculus#Newton)'
data[1643 + 2000].color = 'blue';

data[1671 + 2000].info += '\n **Taylor\'s theorem**\n [Wikipedia](https://en.wikipedia.org/wiki/Taylor%27s_theorem)'
data[1671 + 2000].color = 'blue';

data[1665 + 2000].info += '\n **Newton\'s Method**\n [Wikipedia](https://en.wikipedia.org/wiki/Newton%27s_method)'
data[1665 + 2000].color = 'blue';

data[1696 + 2000].info += '\n **Brachistochrone problem solved**\n [Wikipedia](https://en.wikipedia.org/wiki/Brachistochrone_curve)'
data[1696 + 2000].color = 'blue';

data[1699 + 2000].info += '\n **Pi Calculated to 72 decimal places**\n [Wikipedia](https://en.wikipedia.org/wiki/Abraham_Sharp#Life)'
data[1699 + 2000].color = 'blue';

data[1706 + 2000].info += '\n **Pi Calculated to 100 decimal places**\n [Wikipedia](https://en.wikipedia.org/wiki/John_Machin)'
data[1706 + 2000].color = 'blue';

data[1712 + 2000].info += '\n **Bernoulli number\n**\n [Wikipedia](https://en.wikipedia.org/wiki/Bernoulli_number)'
data[1712 + 2000].color = 'blue';

data[1715 + 2000].info += '\n **Taylor\'s Series**\n [Wikipedia](https://en.wikipedia.org/wiki/Taylor_series)'
data[1715 + 2000].color = 'blue';

data[1722 + 2000].info += '\n **De Moivre\'s formula**\n [Wikipedia](https://en.wikipedia.org/wiki/De_Moivre%27s_formula)'
data[1722 + 2000].color = 'blue';

data[1734 + 2000].info += '\n **Basel problem Solved**\n [Wikipedia](https://en.wikipedia.org/wiki/Basel_problem)'
data[1734 + 2000].color = 'blue';

data[1736 + 2000].info += '\n **Seven Bridges of Königsberg introduction to Graph Theory**\n [Wikipedia](https://en.wikipedia.org/wiki/Seven_Bridges_of_K%C3%B6nigsberg)'
data[1736 + 2000].color = 'blue';

data[1738 + 2000].info += '\n **Normal Distribution**\n [Wikipedia](https://en.wikipedia.org/wiki/Normal_distribution#History)'
data[1738 + 2000].color = 'blue';

data[1748 + 2000].info += '\n **Euler\'s formula**\n [Wikipedia](https://en.wikipedia.org/wiki/Euler%27s_formula)'
data[1748 + 2000].color = 'blue';

data[1742 + 2000].info += '\n **Goldbach\'s conjecture**\n [Wikipedia](https://en.wikipedia.org/wiki/Goldbach%27s_conjecture)'
data[1742 + 2000].color = 'blue';

data[1747 + 2000].info += '\n **d\'Alembert\'s formula**\n [Wikipedia](https://en.wikipedia.org/wiki/D%27Alembert%27s_formula)'
data[1747 + 2000].color = 'blue';

data[1761 + 2000].info += '\n **Pi is proved to be irrational**\n [Wikipedia](https://en.wikipedia.org/wiki/Johann_Heinrich_Lambert#Mathematics)'
data[1761 + 2000].color = 'blue';

data[1762 + 2000].info += '\n **Divergence theorem Discovered**\n [Wikipedia](https://en.wikipedia.org/wiki/Divergence_theorem#History)'
data[1762 + 2000].color = 'blue';

data[1763 + 2000].info += '\n **Bayes\' theorem**\n [Wikipedia](https://en.wikipedia.org/wiki/Bayes%27_theorem)'
data[1763 + 2000].color = 'blue';

data[1789 + 2000].info += '\n **Pi Calculated to 126 decimal places**\n [Wikipedia](https://en.wikipedia.org/wiki/Jurij_Vega#Mathematical_accomplishments)'
data[1789 + 2000].color = 'blue';

data[1797 + 2000].info += '\n **Prime number theorem**\n [Wikipedia](https://en.wikipedia.org/wiki/Prime_number_theorem#History_of_the_proof_of_the_asymptotic_law_of_prime_numbers)'
data[1797 + 2000].color = 'blue';

data[1799 + 2000].info += '\n **Abel–Ruffini theorem**\n [Wikipedia](https://en.wikipedia.org/wiki/Abel%E2%80%93Ruffini_theorem)'
data[1799 + 2000].color = 'blue';

data[1805 + 2000].info += '\n **Method of Least squares**\n [Wikipedia](https://en.wikipedia.org/wiki/Least_squares#History)'
data[1805 + 2000].color = 'blue';

data[1806 + 2000].info += '\n **Fundamental theorem of algebra Rigorous proof**\n [Wikipedia](https://en.wikipedia.org/wiki/Fundamental_theorem_of_algebra#History)'
data[1806 + 2000].color = 'blue';

data[1822 + 2000].info += '\n **Fourier transform**\n [Wikipedia](https://en.wikipedia.org/wiki/Fourier_transform#Background)'
data[1822 + 2000].color = 'blue';

data[1817 + 2000].info += '\n **Intermediate value theorem**\n [Wikipedia](https://en.wikipedia.org/wiki/Intermediate_value_theorem#History)'
data[1817 + 2000].color = 'blue';

data[1823 + 2000].info += '\n **Sophie Germain\'s theorem**\n [Wikipedia](https://en.wikipedia.org/wiki/Sophie_Germain%27s_theorem)'
data[1823 + 2000].color = 'blue';

data[1828 + 2000].info += '\n **Green\'s theorem**\n [Wikipedia](https://en.wikipedia.org/wiki/Green%27s_theorem#History)'
data[1828 + 2000].color = 'blue';

data[1829 + 2000].info += '\n **Group Theory**\n [Wikipedia](https://en.wikipedia.org/wiki/History_of_group_theory)'
data[1829 + 2000].color = 'blue';

data[1837 + 2000].info += '\n **Analytic number theory**\n [Wikipedia](https://en.wikipedia.org/wiki/Analytic_number_theory#History)'
data[1837 + 2000].color = 'blue';

data[1844 + 2000].info += '\n **Linear Algebra**\n [Wikipedia](https://en.wikipedia.org/wiki/Linear_algebra#History)'
data[1844 + 2000].color = 'blue';

data[1847 + 2000].info += '\n **Boolean Algebra**\n [Wikipedia](https://en.wikipedia.org/wiki/Boolean_algebra)'
data[1847 + 2000].color = 'blue';

data[1850 + 2000].info += '\n **Stokes\' theorem**\n [Wikipedia](https://en.wikipedia.org/wiki/Stokes%27_theorem)'
data[1850 + 2000].color = 'blue';

data[1859 + 2000].info += '\n **Riemann Hypothesis**\n [Wikipedia](https://en.wikipedia.org/wiki/Riemann_hypothesis#Origin)'
data[1859 + 2000].color = 'blue';

data[1858 + 2000].info += '\n **Möbius strip**\n [Wikipedia](https://en.wikipedia.org/wiki/M%C3%B6bius_strip)'
data[1858 + 2000].color = 'blue';

data[1872 + 2000].info += '\n **Dedekind cut**\n [Wikipedia](https://en.wikipedia.org/wiki/Dedekind_cut)'
data[1872 + 2000].color = 'blue';

data[1873 + 2000].info += '\n **e is proved to be transcendental**\n [Wikipedia](https://en.wikipedia.org/wiki/Transcendental_number#A_proof_that_e_is_transcendental)'
data[1873 + 2000].color = 'blue';


data[1882 + 2000].info += '\n **Pi is proved to be transcendental**\n [Wikipedia](https://en.wikipedia.org/wiki/Transcendental_number#The_transcendence_of_%CF%80)'
data[1882 + 2000].color = 'blue';

data[1882 + 2000].info += '\n **Klein bottle**\n [Wikipedia](https://en.wikipedia.org/wiki/Klein_bottle)'
data[1882 + 2000].color = 'blue';


data[1889 + 2000].info += '\n **Minkowski\'s theorem**\n [Wikipedia](https://en.wikipedia.org/wiki/Minkowski%27s_theorem)'
data[1889 + 2000].color = 'blue';

data[1891 + 2000].info += '\n **Cantor\'s diagonal argument**\n [Wikipedia](https://en.wikipedia.org/wiki/Cantor%27s_diagonal_argument)'
data[1891 + 2000].color = 'blue';

data[1896 + 2000].info += '\n **Prime number theorem Proved**\n [Wikipedia](https://en.wikipedia.org/wiki/Prime_number_theorem#History_of_the_proof_of_the_asymptotic_law_of_prime_numbers)'
data[1896 + 2000].color = 'blue';

data[1899 + 2000].info += '\n **Exterior derivative**\n [Wikipedia](https://en.wikipedia.org/wiki/Exterior_derivative)'
data[1899 + 2000].color = 'blue';

data[1900 + 2000].info += '\n **Continuum hypothesiss**\n [Wikipedia](https://en.wikipedia.org/wiki/Continuum_hypothesis)'
data[1900 + 2000].color = 'blue';

data[1900 + 2000].info += '\n **Hilbert\'s problems**\n [Wikipedia](https://en.wikipedia.org/wiki/Hilbert%27s_problems#Table_of_problems)'
data[1900 + 2000].color = 'blue';

data[1909 + 2000].info += '\n **Brouwer fixed-point theorem**\n [Wikipedia](https://en.wikipedia.org/wiki/Brouwer_fixed-point_theorem#History)'
data[1909 + 2000].color = 'blue';

data[1918 + 2000].info += '\n **Noether\'s theorem**\n [Wikipedia](https://en.wikipedia.org/wiki/Noether%27s_theorem)'
data[1918 + 2000].color = 'blue';

data[1916 + 2000].info += '\n **Ramanujan–Petersson conjecture**\n [Wikipedia](https://en.wikipedia.org/wiki/Noether%27s_theorem)'
data[1916 + 2000].color = 'blue';

data[1919 + 2000].info += '\n **Brun\'s theorem**\n [Wikipedia](https://en.wikipedia.org/wiki/Brun%27s_theorem)'
data[1919 + 2000].color = 'blue';

data[1925 + 2000].info += '\n **Hilbert\'s paradox of the Grand Hotel**\n [Wikipedia](https://en.wikipedia.org/wiki/Hilbert%27s_paradox_of_the_Grand_Hotel)'
data[1925 + 2000].color = 'blue';

data[1928 + 2000].info += '\n **Minimax theorem**\n [Wikipedia](https://en.wikipedia.org/wiki/Minimax_theorem)'
data[1928 + 2000].color = 'blue';

data[1930 + 2000].info += '\n **Kuratowski\'s theorem**\n [Wikipedia](https://en.wikipedia.org/wiki/Kuratowski%27s_theorem)'
data[1930 + 2000].color = 'blue';

data[1931 + 2000].info += '\n **Gödel\'s incompleteness theorems**\n [Wikipedia](https://en.wikipedia.org/wiki/G%C3%B6del%27s_incompleteness_theorems)'
data[1931 + 2000].color = 'blue';

data[1936 + 2000].info += '\n **Lambda calculus**\n [Wikipedia](https://en.wikipedia.org/wiki/Lambda_calculus#History)'
data[1936 + 2000].color = 'blue';

data[1936 + 2000].info += '\n **Church–Turing thesis\n**\n [Wikipedia](https://en.wikipedia.org/wiki/Church%E2%80%93Turing_thesis)'
data[1936 + 2000].color = 'blue';

data[1938 + 2000].info += '\n **LU decomposition\n**\n [Wikipedia](https://en.wikipedia.org/wiki/LU_decomposition)'
data[1938 + 2000].color = 'blue';

data[1945 + 2000].info += '\n **Realizability**\n [Wikipedia](https://en.wikipedia.org/wiki/Realizability)'
data[1945 + 2000].color = 'blue';

data[1946 + 2000].info += '\n **Spectral sequence**\n [Wikipedia](https://en.wikipedia.org/wiki/Spectral_sequence)'
data[1946 + 2000].color = 'blue';

data[1947 + 2000].info += '\n **Simplex algorithm for Linear Programming**\n [Wikipedia](https://en.wikipedia.org/wiki/Simplex_algorithm)'
data[1947 + 2000].color = 'blue';

data[1965 + 2000].info += '\n **Fast Fourier transform**\n [Wikipedia](https://en.wikipedia.org/wiki/Fast_Fourier_transform)'
data[1965 + 2000].color = 'blue';

data[1949 + 2000].info += '\n **Pi Calculated to 2,037 decimal places**\n [Wikipedia](https://en.wikipedia.org/wiki/Chronology_of_computation_of_%CF%80#1949%E2%80%932009)'
data[1949 + 2000].color = 'blue';

data[1954 + 2000].info += '\n ** Complete List of Uniform polyhedron\n**\n [Wikipedia](https://en.wikipedia.org/wiki/Uniform_polyhedron#History)'
data[1954 + 2000].color = 'blue';

data[1957 + 2000].info += '\n **Itô calculus**\n [Wikipedia](https://en.wikipedia.org/wiki/It%C3%B4_calculus)'
data[1957 + 2000].color = 'blue';

data[1957 + 2000].info += '\n **Grothendieck–Riemann–Roch theorem\n**\n [Wikipedia](https://en.wikipedia.org/wiki/Grothendieck%E2%80%93Riemann%E2%80%93Roch_theorem)'
data[1957 + 2000].color = 'blue';


data[1958 + 2000].info += '\n **Pi Calculated to 10,000 decimal places**\n [Wikipedia](https://en.wikipedia.org/wiki/Chronology_of_computation_of_%CF%80#1949%E2%80%932009)'
data[1958 + 2000].color = 'blue';

data[1959 + 2000].info += '\n **Iwasawa theory**\n [Wikipedia](https://en.wikipedia.org/wiki/Iwasawa_theory)'
data[1959 + 2000].color = 'blue';

data[1961 + 2000].info += '\n **Quicksort Algorithm Invented**\n [Wikipedia](https://en.wikipedia.org/wiki/Quicksort)'
data[1961 + 2000].color = 'blue';

data[1961 + 2000].info += '\n **QR Algorithm**\n [Wikipedia](https://en.wikipedia.org/wiki/QR_algorithm)'
data[1961 + 2000].color = 'blue';

data[1965 + 2000].info += '\n **Fuzzy Mathematics**\n [Wikipedia](https://en.wikipedia.org/wiki/Fuzzy_mathematics)'
data[1965 + 2000].color = 'blue';

data[1967 + 2000].info += '\n **Langlands Program**\n [Wikipedia](https://en.wikipedia.org/wiki/Langlands_program)'
data[1967 + 2000].color = 'blue';

data[1976 + 2000].info += '\n **Computer Proof of the 4 Color Theorem**\n [Wikipedia](https://en.wikipedia.org/wiki/Four_color_theorem)'
data[1976 + 2000].color = 'blue';

data[1983 + 2000].info += '\n **Faltings\'s theorem**\n [Wikipedia](https://en.wikipedia.org/wiki/Faltings%27s_theorem)'
data[1983 + 2000].color = 'blue';

data[1984 + 2000].info += '\n **Jones polynomial**\n [Wikipedia](https://en.wikipedia.org/wiki/Jones_polynomial)'
data[1984 + 2000].color = 'blue';

data[1986 + 2000].info += '\n **Ribet\'s theorem**\n [Wikipedia](https://en.wikipedia.org/wiki/Ribet%27s_theorem)'
data[1986 + 2000].color = 'blue';

data[1992 + 2000].info += '\n **Deutsch–Jozsa algorithm**\n [Wikipedia](https://en.wikipedia.org/wiki/Deutsch%E2%80%93Jozsa_algorithm)'
data[1992 + 2000].color = 'blue';

data[1973 + 2000].info += '\n **Pi Calculated to 1,001,250 decimal places**\n [Wikipedia](https://en.wikipedia.org/wiki/Chronology_of_computation_of_%CF%80#1949%E2%80%932009)'
data[1973 + 2000].color = 'blue';

data[1989 + 2000].info += '\n **Pi Calculated to 1,011,196,691 decimal places**\n [Wikipedia](https://en.wikipedia.org/wiki/Chronology_of_computation_of_%CF%80#1949%E2%80%932009)'
data[1989 + 2000].color = 'blue';

data[1994 + 2000].info += '\n **Fermat\'s Last Theorem\n**\n [Wikipedia](https://en.wikipedia.org/wiki/Fermat%27s_Last_Theorem)'
data[1994 + 2000].color = 'blue';

data[1995 + 2000].info += '\n **Bailey–Borwein–Plouffe formula**\n [Wikipedia](https://en.wikipedia.org/wiki/Bailey%E2%80%93Borwein%E2%80%93Plouffe_formula)'
data[1995 + 2000].color = 'blue';

data[1998 + 2000].info += '\n **Kepler conjecture**\n [Wikipedia](https://en.wikipedia.org/wiki/Kepler_conjecture)'
data[1998 + 2000].color = 'blue';

data[2000 + 2000].info += '\n **Millennium Prize Problems**\n [Wikipedia](https://en.wikipedia.org/wiki/Millennium_Prize_Problems)'
data[2000 + 2000].color = 'blue';



data[2002 + 2000].info += '\n **Pi Calculated to 1,241,100,000,000\n decimal places**\n [Wikipedia](https://en.wikipedia.org/wiki/Chronology_of_computation_of_%CF%80#1949%E2%80%932009)'
data[2002 + 2000].color = 'blue';











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

data[780 + 2000].info += '\n **Al-Khwarizmi is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/Al-Khwarizmi)'
data[780 + 2000].color = 'green';

data[801 + 2000].info += '\n **Al-Kindi is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/Al-Kindi)'
data[801 + 2000].color = 'green';

data[836 +2000].info += '\n **Thābit ibn Qurra is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/Th%C4%81bit_ibn_Qurra)'
data[836 + 2000].color = 'green';

data[850 + 2000].info += '\n **Abu Kamil is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/Abu_Kamil)'
data[850 + 2000].color = 'green';

data[940 + 2000].info += '\n **Abu al-Wafa\' al-Buzjani is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/Abu_al-Wafa%27_al-Buzjani)'
data[940 + 2000].color = 'green';

data[965 + 2000].info += '\n **Ibn al-Haytham is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/Ibn_al-Haytham)'
data[965 + 2000].color = 'green';

data[1048 + 2000].info += '\n **Omar Khayyam is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/Omar_Khayyam)'
data[1048 + 2000].color = 'green';

data[1135 + 2000].info += '\n **Sharaf al-Din al-Tusi is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/Sharaf_al-Din_al-Tusi)'
data[1135 + 2000].color = 'green';

data[1170 + 2000].info += '\n **Fibonacci is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/Fibonacci)'
data[1170 + 2000].color = 'green';

data[1201 + 2000].info += '\n **Nasir al-Din al-Tusi is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/Nasir_al-Din_al-Tusi)'
data[1201 + 2000].color = 'green';

data[1340 + 2000].info += '\n **Madhava of Sangamagrama is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/Madhava_of_Sangamagrama)'
data[1340 + 2000].color = 'green';

data[1380 + 2000].info += '\n **Jamshid al-Kashi**\n [Wikipedia](https://en.wikipedia.org/wiki/Jamshid_al-Kashi)'
data[1380 + 2000].color = 'green';

data[1477 + 2000].info += '\n **LucaPacioli is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/Luca_Pacioli)'
data[1477 + 2000].color = 'green';

data[1550 + 2000].info += '\n **John Napier is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/John_Napier)'
data[1550 + 2000].color = 'green';

data[1596 + 2000].info += '\n **René Descartes is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/Ren%C3%A9_Descartes)'
data[1596 + 2000].color = 'green';

data[1607 + 2000].info += '\n **Pierre de Fermat is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/Pierre_de_Fermat)'
data[1607 + 2000].color = 'green';

data[1616 + 2000].info += '\n **John Wallis is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/John_Wallis)'
data[1616 + 2000].color = 'green';

data[1643 + 2000].info += '\n **Isaac Newton is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/Isaac_Newton)'
data[1643 + 2000].color = 'green';

data[1646 + 2000].info += '\n **Gottfried Wilhelm Leibniz is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/Gottfried_Wilhelm_Leibniz)'
data[1646 + 2000].color = 'green';

data[1656 + 2000].info += '\n **Edmond Halley is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/Edmond_Halley)'
data[1656 + 2000].color = 'green';

data[1661 + 2000].info += '\n **Guillaume de l\'Hôpital is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/Guillaume_de_l%27H%C3%B4pital)'
data[1661 + 2000].color = 'green';

data[1655 + 2000].info += '\n **Jacob Bernoulli are Born**\n [Wikipedia](https://en.wikipedia.org/wiki/Jacob_Bernoulli)'
data[1655 + 2000].color = 'green';

data[1667 + 2000].info += '\n **Johann Bernoulli is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/Johann_Bernoulli)'
data[1667 + 2000].color = 'green';

data[1667 + 2000].info += '\n **Abraham de Moivre is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/Abraham_de_Moivre)'
data[1667 + 2000].color = 'green';

data[1701 + 2000].info += '\n **Thomas Bayes is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/Thomas_Bayes)'
data[1701 + 2000].color = 'green';

//Euler
data[1707 + 2000].info += '\n **Leonhard Euler is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/Leonhard_Euler)'
data[1707 + 2000].color = 'green';

data[1736 + 2000].info += '\n **Joseph-Louis Lagrange is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/Joseph-Louis_Lagrange)'
data[1736 + 2000].color = 'green';

data[1752 + 2000].info += '\n **Adrien-Marie Legendre is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/Adrien-Marie_Legendre)'
data[1752 + 2000].color = 'green';

data[1768 + 2000].info += '\n **Joseph Fourier is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/Joseph_Fourier)'
data[1768 + 2000].color = 'green';

//Gauss
data[1777 + 2000].info += '\n **Carl Friedrich Gauss is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/Carl_Friedrich_Gauss)'
data[1777 + 2000].color = 'green';

data[1781 + 2000].info += '\n **Siméon Denis Poisson is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/Sim%C3%A9on_Denis_Poisson)'
data[1781 + 2000].color = 'green';

data[1789 + 2000].info += '\n **Augustin-Louis Cauchy is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/Augustin-Louis_Cauchy)'
data[1789 + 2000].color = 'green';

data[1805 + 2000].info += '\n **Peter Gustav Lejeune Dirichlet is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/Joseph-Louis_Lagrange)'
data[1805 + 2000].color = 'green';

data[1811 + 2000].info += '\n **Évariste Galois is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/%C3%89variste_Galois)'
data[1811 + 2000].color = 'green';

data[1815 + 2000].info += '\n **George Boole is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/George_Boole)'
data[1815 + 2000].color = 'green';

data[1819 + 2000].info += '\n **Sir George Stokes is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/Sir_George_Stokes,_1st_Baronet)'
data[1819 + 2000].color = 'green';

data[1821 + 2000].info += '\n **Arthur Cayley is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/Arthur_Cayley)'
data[1821 + 2000].color = 'green';

data[1826 + 2000].info += '\n **Bernhard Riemann is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/Bernhard_Riemann)'
data[1826 + 2000].color = 'green';

data[1862 + 2000].info += '\n **David Hilbert is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/David_Hilbert)'
data[1862 + 2000].color = 'green';

data[1875 + 2000].info += '\n **Henri Lebesgue is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/Henri_Lebesgue)'
data[1875 + 2000].color = 'green';

data[1882 + 2000].info += '\n **Emmy Noether is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/Emmy_Noether)'
data[1882 + 2000].color = 'green';

data[1903 + 2000].info += '\n **Alonzo Church is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/Alonzo_Church)'
data[1903 + 2000].color = 'green';

data[1906 + 2000].info += '\n **Grace Hopper is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/Grace_Hopper)'
data[1906 + 2000].color = 'green';

data[1912 + 2000].info += '\n **Alan Turing is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/Alan_Turing)'
data[1912 + 2000].color = 'green';

data[1934 + 2000].info += '\n **Tony Hoare is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/Tony_Hoare)'
data[1934 + 2000].color = 'green';

data[1953 + 2000].info += '\n **Andrew Wiles is Born**\n [Wikipedia](https://en.wikipedia.org/wiki/Andrew_Wiles)'












export default data;