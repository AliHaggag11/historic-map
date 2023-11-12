import { HistoricalEvent } from "./Components/MapsApp";

const eventsData: HistoricalEvent[] = [
  // War
  {
    id: 1,
    title: "Normandy Landings (D-Day)",
    description:
      "Allied forces landed on the beaches of Normandy, France on June 6, 1944, marking a pivotal turn in World War II.",
    position: [49.4144, -0.8322],
    category: "War",
  },
  // Art
  {
    id: 2,
    title: "Completion of the Sistine Chapel Ceiling",
    description:
      "Michelangelo completed the ceiling of the Sistine Chapel in Vatican City in 1512.",
    position: [41.9029, 12.4545],
    category: "Art",
  },
  // Science
  {
    id: 3,
    title: "Invention of the Telephone",
    description:
      "Alexander Graham Bell patented the telephone in the United States in 1876.",
    position: [38.8977, -77.0365],
    category: "Science",
  },
  // Politics
  {
    id: 4,
    title: "India Gains Independence",
    description:
      "India gained independence from British rule on August 15, 1947.",
    position: [28.6139, 77.209],
    category: "Politics",
  },
  // Religion
  {
    id: 5,
    title: "First Council of Nicaea",
    description:
      "The first ecumenical council of the Christian church was held in Nicaea (now Iznik, Turkey) in 325 AD.",
    position: [40.4286, 29.7215],
    category: "Religion",
  },
  // Sports
  {
    id: 6,
    title: "First FIFA World Cup",
    description:
      "The first FIFA World Cup was held in Uruguay, with the host nation winning in 1930.",
    position: [-34.9011, -56.1645],
    category: "Sports",
  },
  // Other
  {
    id: 7,
    title: "Construction of the Sydney Opera House",
    description: "The Sydney Opera House was opened in 1973 in Australia.",
    position: [-33.8568, 151.2153],
    category: "Other",
  },
  // Adding additional events to cover more continents and countries
  // War
  {
    id: 8,
    title: "Rwandan Genocide",
    description:
      "The Rwandan genocide was a mass slaughter of Tutsi in Rwanda during a 100-day period in 1994.",
    position: [-1.9403, 29.8739],
    category: "War",
  },
  // Science
  {
    id: 9,
    title: "Discovery of Oil in Saudi Arabia",
    description:
      "Commercial quantities of oil were discovered in Dhahran, Saudi Arabia in 1938.",
    position: [26.2361, 50.0393],
    category: "Science",
  },
  // Politics
  {
    id: 10,
    title: "Brazilian Proclamation of Independence",
    description:
      "Brazil declared its independence from Portugal on September 7, 1822.",
    position: [-15.7934, -47.8822],
    category: "Politics",
  },
  // Continuing the eventsData array with IDs starting from 11
  {
    id: 11,
    title: "Fall of the Berlin Wall",
    description:
      "The Berlin Wall, a symbol of the Cold War, was torn down on November 9, 1989, leading to German reunification.",
    position: [52.5163, 13.3777],
    category: "Politics",
  },
  {
    id: 12,
    title: "Signing of the Magna Carta",
    description:
      "King John of England signed the Magna Carta, a document limiting his power and establishing the principle that everyone is subject to the law, on June 15, 1215.",
    position: [51.1797, -0.4439],
    category: "Politics",
  },
  {
    id: 13,
    title: "Hiroshima and Nagasaki Bombings",
    description:
      "The United States dropped atomic bombs on the Japanese cities of Hiroshima and Nagasaki in August 1945, leading to Japan's surrender in World War II.",
    position: [34.3853, 132.4553], // Hiroshima
    category: "War",
  },
  {
    id: 14,
    title: "Discovery of Insulin",
    description:
      "Insulin was discovered by Frederick Banting and Charles Best in Toronto, Canada, in 1921, revolutionizing the treatment of diabetes.",
    position: [43.661, -79.3957],
    category: "Science",
  },
  {
    id: 15,
    title: "Spanish Conquest of the Aztec Empire",
    description:
      "Hernán Cortés and his men conquered the Aztec Empire in 1521, marking a significant event in the Spanish colonization of the Americas.",
    position: [19.4326, -99.1332],
    category: "War",
  },
  {
    id: 16,
    title: "Founding of the United Nations",
    description:
      "The United Nations was founded on October 24, 1945, after World War II, to prevent future conflicts and foster international cooperation.",
    position: [40.7489, -73.968],
    category: "Politics",
  },
  {
    id: 17,
    title: "First Heart Transplant",
    description:
      "The first human-to-human heart transplant was performed by Dr. Christiaan Barnard in Cape Town, South Africa, on December 3, 1967.",
    position: [-33.9249, 18.4241],
    category: "Science",
  },
  {
    id: 18,
    title: "French Revolution",
    description:
      "The French Revolution, a period of social and political upheaval in France, began with the storming of the Bastille on July 14, 1789.",
    position: [48.8566, 2.3522],
    category: "Politics",
  },
  {
    id: 19,
    title: "Battle of Adwa",
    description:
      "Ethiopian forces defeated Italian troops at the Battle of Adwa on March 1, 1896, ensuring Ethiopia's independence.",
    position: [14.04, 38.2844],
    category: "War",
  },
  {
    id: 20,
    title: "Egyptian Revolution of 2011",
    description:
      "The Egyptian Revolution of 2011, part of the Arab Spring, began on January 25, 2011, leading to the ousting of President Hosni Mubarak.",
    position: [30.0444, 31.2357],
    category: "Politics",
  },
  {
    id: 21,
    title: "Discovery of the Rosetta Stone",
    description:
      "The Rosetta Stone, key to deciphering ancient Egyptian hieroglyphs, was discovered in Egypt in 1799.",
    position: [31.1981, 29.9192],
    category: "Other",
  },
  {
    id: 22,
    title: "Eruption of Krakatoa",
    description:
      "The catastrophic eruption of the Krakatoa volcano occurred in Indonesia on August 27, 1883.",
    position: [-6.1025, 105.4233],
    category: "Other",
  },
  {
    id: 23,
    title: "Construction of the Great Wall",
    description:
      "Construction of the Great Wall of China as it is known today began around the 7th century BC to protect against invasions.",
    position: [40.4319, 116.5704],
    category: "Other",
  },
  {
    id: 24,
    title: "The Great Irish Famine",
    description:
      "The Great Irish Famine, caused by potato blight, resulted in the deaths of approximately one million people from 1845 to 1849.",
    position: [53.3498, -6.2603],
    category: "Other",
  },
  {
    id: 25,
    title: "Invention of the Printing Press",
    description:
      "Johannes Gutenberg invented the printing press in Mainz, Germany, around 1440, revolutionizing the spread of information.",
    position: [49.9929, 8.2473],
    category: "Science",
  },
  {
    id: 26,
    title: "Battle of Isandlwana",
    description:
      "The Battle of Isandlwana on January 22, 1879, was a significant defeat for the British Empire at the hands of Zulu forces.",
    position: [-28.3536, 30.6537],
    category: "War",
  },
  {
    id: 27,
    title: "First Olympic Games of the Modern Era",
    description:
      "The first Olympic Games of the modern era were held in Athens, Greece, in 1896.",
    position: [37.9838, 23.7275],
    category: "Sports",
  },
  {
    id: 28,
    title: "Completion of the Transcontinental Railroad",
    description:
      "The Transcontinental Railroad in the United States was completed on May 10, 1869, connecting the east and west coasts by rail for the first time.",
    position: [41.0192, -112.1231],
    category: "Other",
  },
  {
    id: 29,
    title: "Treaty of Waitangi",
    description:
      "The Treaty of Waitangi was signed on February 6, 1840, marking the beginning of British colonization of New Zealand.",
    position: [-35.2623, 174.122],
    category: "Politics",
  },
  {
    id: 30,
    title: "Renaissance",
    description:
      "The Renaissance was a period of intense artistic and cultural development that began in Italy in the 14th century and spread throughout Europe.",
    position: [43.7696, 11.2558],
    category: "Art",
  },
  // Continuing the eventsData array with IDs starting from 31
  {
    id: 31,
    title: "Nelson Mandela's Release from Prison",
    description:
      "Nelson Mandela was released on February 11, 1990, after 27 years in prison, marking a significant step towards the end of apartheid in South Africa.",
    position: [-33.9249, 18.4241], // Cape Town, South Africa
    category: "Politics",
  },
  {
    id: 32,
    title: "Battle of Al-Qadisiyyah",
    description:
      "The Battle of Al-Qadisiyyah in 636 CE saw the Muslim Arab army defeat the Sassanid Persian forces, leading to the Islamic conquest of Persia.",
    position: [32.0575, 47.2635], // Near modern-day Iraq, historically significant for North African Arab history
    category: "War",
  },
  {
    id: 33,
    title: "Great Zimbabwe",
    description:
      "Great Zimbabwe was built between the 11th and 15th centuries and was the capital of the Kingdom of Zimbabwe during the country’s Late Iron Age.",
    position: [-20.2686, 30.9309], // Zimbabwe
    category: "Other",
  },
  {
    id: 34,
    title: "Discovery of Tutankhamun's Tomb",
    description:
      "Howard Carter discovered the intact tomb of Pharaoh Tutankhamun in November 1922, providing immense insight into ancient Egyptian culture and history.",
    position: [25.7402, 32.6014], // Valley of the Kings, Egypt
    category: "Other",
  },
  {
    id: 35,
    title: "Battle of Adowa",
    description:
      "The Battle of Adowa on March 1, 1896, saw Ethiopian forces defeat the Italian military, ensuring Ethiopia's sovereignty.",
    position: [14.9482, 38.7749], // Adowa, Ethiopia
    category: "War",
  },
  {
    id: 36,
    title: "Suez Canal Opening",
    description:
      "The Suez Canal in Egypt was opened on November 17, 1869, connecting the Mediterranean Sea to the Red Sea and significantly shortening trade routes.",
    position: [30.5852, 32.2654], // Suez Canal, Egypt
    category: "Other",
  },
  {
    id: 37,
    title: "Rwandan Genocide",
    description:
      "The Rwandan Genocide was a mass slaughter of Tutsi in Rwanda during a 100-day period from April 7 to mid-July 1994.",
    position: [-1.9403, 29.8739], // Rwanda
    category: "War",
  },
  {
    id: 38,
    title: "Mansa Musa's Pilgrimage",
    description:
      "Mansa Musa, emperor of Mali, made his pilgrimage to Mecca in 1324, demonstrating the wealth and grandeur of his empire.",
    position: [12.6392, -8.0029], // Mali
    category: "Religion",
  },
  {
    id: 39,
    title: "Independence of Ghana",
    description:
      "Ghana became the first sub-Saharan African country to gain independence from colonial rule on March 6, 1957.",
    position: [5.6037, -0.187], // Accra, Ghana
    category: "Politics",
  },
  {
    id: 40,
    title: "Battle of Isandlwana",
    description:
      "On January 22, 1879, Zulu forces defeated British troops at the Battle of Isandlwana during the Anglo-Zulu War.",
    position: [-28.3536, 30.6537], // South Africa
    category: "War",
  },
  {
    id: 41,
    title: "The Opening of the University of Timbuktu",
    description:
      "The University of Timbuktu, one of the world's oldest universities, was an intellectual and spiritual center in the 15th and 16th centuries, attracting scholars from around the Islamic world.",
    position: [16.7666, -3.0026], // Timbuktu, Mali
    category: "Science",
  },
  {
    id: 42,
    title: "Discovery of Diamonds in Kimberley",
    description:
      "Diamonds were discovered at Kimberley in 1867, prompting a diamond rush and the creation of De Beers Consolidated Mines Limited in 1888.",
    position: [-28.7282, 24.7499], // Kimberley, South Africa
    category: "Other",
  },
  {
    id: 43,
    title: "Construction of the Aswan High Dam",
    description:
      "Egypt constructed the Aswan High Dam between 1960 and 1970, which controlled floods, provided increased water storage for irrigation, and generated hydroelectricity.",
    position: [23.97, 32.88], // Aswan, Egypt
    category: "Other",
  },
  {
    id: 44,
    title: "Fashoda Incident",
    description:
      "The Fashoda Incident of 1898 was the climax of imperial territorial disputes between Britain and France in Eastern Africa, almost leading to war.",
    position: [9.8894, 32.2039], // Fashoda, South Sudan
    category: "Politics",
  },
  {
    id: 45,
    title: "Algerian War of Independence",
    description:
      "The Algerian War of Independence was fought between France and the Algerian National Liberation Front from 1954 to 1962, leading to Algeria gaining its independence.",
    position: [36.7372, 3.0863], // Algeria
    category: "War",
  },
  {
    id: 46,
    title: "Lucy's Discovery",
    description:
      "In 1974, the discovery of the hominin 'Lucy' in Ethiopia provided critical evidence of early human evolution.",
    position: [11.3548, 40.6822], // Hadar, Ethiopia
    category: "Science",
  },
  {
    id: 47,
    title: "Battle of Mogadishu",
    description:
      "The Battle of Mogadishu in 1993 was a confrontation between the United States forces and Somali militiamen, which was later depicted in the film 'Black Hawk Down'.",
    position: [2.0469, 45.3182], // Mogadishu, Somalia
    category: "War",
  },
  {
    id: 48,
    title: "King Shaka Zulu's Reign",
    description:
      "Shaka Zulu became king of the Zulu Nation in 1816 and transformed it into a formidable empire through his military innovations and leadership.",
    position: [-28.7998, 32.0383], // Zululand, South Africa
    category: "Politics",
  },
  {
    id: 49,
    title: "The Scramble for Africa",
    description:
      "The Scramble for Africa was the invasion, annexation, and division of African territory by European powers during the period of New Imperialism, between 1881 and 1914.",
    position: [9.145, 40.4897], // General location for Africa
    category: "Politics",
  },
  {
    id: 50,
    title: "The Abolition of Slavery in Mauritania",
    description:
      "Mauritania was the last country to abolish slavery in 1981, making the practice illegal.",
    position: [18.0735, -15.9582], // Nouakchott, Mauritania
    category: "Politics",
  },
  // Continuing the eventsData array with IDs starting from 51
  {
    id: 51,
    title: "Brazilian Independence",
    description:
      "Brazil declared its independence from Portugal on September 7, 1822, becoming the Empire of Brazil.",
    position: [-15.7934, -47.8822], // Brasília, Brazil
    category: "Politics",
  },
  {
    id: 52,
    title: "Battle of Ayacucho",
    description:
      "The Battle of Ayacucho, on December 9, 1824, was a decisive military encounter during the Peruvian War of Independence. It effectively ended Spanish rule in South America.",
    position: [-13.1588, -74.2239], // Ayacucho, Peru
    category: "War",
  },
  {
    id: 53,
    title: "Argentine War of Independence",
    description:
      "Starting in 1810 with the May Revolution, Argentina fought a series of battles against Spanish rule, culminating in independence in 1818.",
    position: [-34.6037, -58.3816], // Buenos Aires, Argentina
    category: "War",
  },
  {
    id: 54,
    title: "The Liberation of Chile",
    description:
      "Led by Bernardo O'Higgins and José de San Martín, Chilean forces secured independence from Spain with the victory at the Battle of Maipú on April 5, 1818.",
    position: [-33.4869, -70.7678], // Santiago, Chile
    category: "War",
  },
  {
    id: 55,
    title: "October Revolution",
    description:
      "The October Revolution, also known as the Bolshevik Revolution, overthrew the Russian Provisional Government and gave rise to the Soviet Union in 1917.",
    position: [59.9343, 30.3351], // Saint Petersburg, Russia
    category: "Politics",
  },
  {
    id: 56,
    title: "The Battle of Stalingrad",
    description:
      "One of the deadliest battles in human history, the Battle of Stalingrad from August 23, 1942, to February 2, 1943, was a turning point in World War II, marking the decline of the Axis powers.",
    position: [48.708, 44.5133], // Stalingrad (now Volgograd), Russia
    category: "War",
  },
  {
    id: 57,
    title: "The Flight of Yuri Gagarin",
    description:
      "Yuri Gagarin became the first human to journey into outer space and orbit the Earth on April 12, 1961, signifying a significant achievement for the Soviet space program.",
    position: [55.7558, 37.6173], // Moscow, Russia
    category: "Science",
  },
  {
    id: 58,
    title: "The Fall of the Soviet Union",
    description:
      "The dissolution of the Soviet Union took place on December 26, 1991, marking the end of the Cold War and resulting in the independence of 15 republics.",
    position: [55.7558, 37.6176], // Moscow, Russia
    category: "Politics",
  },
  {
    id: 59,
    title: "First War of Indian Independence",
    description:
      "The First War of Indian Independence, also known as the Sepoy Mutiny, began in 1857 as a rebellion against the British East India Company's rule.",
    position: [28.7041, 77.1025], // New Delhi, India
    category: "War",
  },
  {
    id: 60,
    title: "Jallianwala Bagh Massacre",
    description:
      "The Jallianwala Bagh Massacre of 1919 involved British troops firing on a large crowd of unarmed Indians in Amritsar, Punjab, significantly escalating the Indian independence movement.",
    position: [31.62, 74.8765], // Amritsar, India
    category: "Politics",
  },
  {
    id: 61,
    title: "Dandi March",
    description:
      "The Dandi March, or Salt Satyagraha, was a nonviolent protest led by Mahatma Gandhi in 1930 against the British salt tax in colonial India.",
    position: [20.9517, 72.9324], // Dandi, India
    category: "Politics",
  },
  {
    id: 62,
    title: "Indian Independence Act 1947",
    description:
      "The Indian Independence Act was passed by the British Parliament, which partitioned British India into two new independent dominions of India and Pakistan.",
    position: [28.6143, 77.1994], // New Delhi, India
    category: "Politics",
  },
  {
    id: 63,
    title: "India's First Satellite, Aryabhata",
    description:
      "India launched its first satellite, Aryabhata, in 1975, marking a milestone in its space program.",
    position: [13.0621, 77.4748], // Bangalore, India
    category: "Science",
  },
  {
    id: 64,
    title: "Foundation of Saint Petersburg",
    description:
      "Tsar Peter the Great founded the city of Saint Petersburg in 1703, which later became the capital of the Russian Empire for more than two centuries.",
    position: [59.9343, 30.3351], // Saint Petersburg, Russia
    category: "Politics",
  },
  {
    id: 65,
    title: "Treaty of Kuchuk-Kainarji",
    description:
      "The Treaty of Kuchuk-Kainarji in 1774 concluded the Russo-Turkish War (1768–1774), marking the rise of Russia as a major European power.",
    position: [45.3333, 36.4539], // Near Kuchuk-Kainarji, Crimea
    category: "Politics",
  },
  {
    id: 66,
    title: "Emancipation of the Serfs",
    description:
      "In 1861, Tsar Alexander II issued the Emancipation Reform, freeing millions of serfs and profoundly changing Russian society.",
    position: [55.7558, 37.6173], // Moscow, Russia
    category: "Politics",
  },
  {
    id: 67,
    title: "Battleship Potemkin Uprising",
    description:
      "The crew of the Russian battleship Potemkin rebelled in 1905, a key event in the prelude to the Russian Revolution.",
    position: [44.6167, 33.5254], // Black Sea, near Odessa
    category: "War",
  },
  {
    id: 68,
    title: "Sputnik Launch",
    description:
      "The Soviet Union launched Sputnik 1, the world's first artificial satellite, in 1957, initiating the space age and the space race.",
    position: [45.9646, 63.3052], // Baikonur Cosmodrome, Kazakhstan
    category: "Science",
  },
  {
    id: 69,
    title: "The St. Petersburg Academy of Sciences",
    description:
      "Founded by Peter the Great in 1724, the St. Petersburg Academy of Sciences was one of the first scientific institutions in Russia, fostering the development of science and learning.",
    position: [59.9398, 30.3146], // Saint Petersburg, Russia
    category: "Science",
  },
  {
    id: 70,
    title: "Mendeleev's Periodic Table",
    description:
      "Dmitri Mendeleev created the Periodic Table of Elements in 1869, revolutionizing chemistry with his periodic law for organizing the elements.",
    position: [55.7517, 37.6178], // Moscow, Russia
    category: "Science",
  },
  {
    id: 71,
    title: "Opening of the Tretyakov Gallery",
    description:
      "The Tretyakov Gallery, opened in 1856, houses one of the largest collections of Russian fine art in the world.",
    position: [55.7415, 37.6208], // Moscow, Russia
    category: "Art",
  },
  {
    id: 72,
    title: "First Russian State Ballet",
    description:
      "The Mariinsky Ballet, founded in the 1740s in St. Petersburg, is one of the world's leading ballet companies, greatly contributing to the art of ballet.",
    position: [59.9251, 30.2956], // Saint Petersburg, Russia
    category: "Art",
  },
  {
    id: 73,
    title: "Pavlov's Classical Conditioning",
    description:
      "Ivan Pavlov's work on classical conditioning began in the 1890s, which became one of the most famous studies in behavioral science.",
    position: [59.9419, 30.2982], // Saint Petersburg, Russia
    category: "Science",
  },
  {
    id: 74,
    title: "Isaac Newton's Principia Mathematica",
    description:
      "Sir Isaac Newton published 'Philosophiæ Naturalis Principia Mathematica' in 1687, laying the groundwork for classical mechanics.",
    position: [52.2053, 0.1218], // Cambridge, UK
    category: "Science",
  },
  {
    id: 75,
    title: "Establishment of the Royal Society",
    description:
      "The Royal Society, a fellowship of eminent scientists, was granted a royal charter by King Charles II in 1660.",
    position: [51.5058, -0.1374], // London, UK
    category: "Science",
  },
  {
    id: 76,
    title: "The First Exhibition of the Royal Academy",
    description:
      "The Royal Academy of Arts held its first exhibition in 1769, promoting the arts of design in Britain through education and exhibitions.",
    position: [51.5091, -0.1393], // London, UK
    category: "Art",
  },
  {
    id: 77,
    title: "Charles Darwin's On the Origin of Species",
    description:
      "Charles Darwin's book, published in 1859, introduced the scientific theory of evolution by natural selection.",
    position: [51.5118, -0.1445], // London, UK
    category: "Science",
  },
  {
    id: 78,
    title: "The Tate Gallery Opening",
    description:
      "The Tate Gallery, now known as Tate Britain, opened in 1897, and today it is one of the most significant art galleries in the UK.",
    position: [51.4911, -0.1278], // London, UK
    category: "Art",
  },
  {
    id: 79,
    title: "Second Vatican Council",
    description:
      "The Second Vatican Council, held from 1962 to 1965, brought significant reforms to the Catholic Church, addressing its relation to the modern world.",
    position: [41.9029, 12.4534], // Vatican City
    category: "Religion",
  },
  {
    id: 80,
    title: "Dalai Lama's Escape to India",
    description:
      "The 14th Dalai Lama fled to India in 1959, escaping Chinese suppression in Tibet and establishing a government-in-exile.",
    position: [28.6139, 77.209], // Dharamshala, India
    category: "Religion",
  },
  {
    id: 81,
    title: "Assisi World Day of Prayer for Peace",
    description:
      "The World Day of Prayer for Peace in Assisi in 1986 gathered leaders of various religious traditions to pray for peace and promote interfaith dialogue.",
    position: [43.0707, 12.6196], // Assisi, Italy
    category: "Religion",
  },

  // Science
  {
    id: 82,
    title: "Human Genome Project Completion",
    description:
      "The Human Genome Project was completed in 2003, providing a complete map of the human genome and advancing genetics research.",
    position: [38.9072, -77.037], // Washington, D.C., USA
    category: "Science",
  },
  {
    id: 83,
    title: "Hubble Space Telescope Launch",
    description:
      "The Hubble Space Telescope was launched into orbit in 1990, revolutionizing our understanding of the universe with its stunning images.",
    position: [28.5623, -80.5774], // Cape Canaveral, USA
    category: "Science",
  },
  {
    id: 84,
    title: "CRISPR-Cas9 Gene Editing Breakthrough",
    description:
      "The CRISPR-Cas9 gene-editing technology, developed in 2012, allows precise modification of DNA and has significant implications for medicine and biology.",
    position: [37.7749, -122.4194], // San Francisco, USA
    category: "Science",
  },

  // Politics
  {
    id: 85,
    title: "End of Apartheid in South Africa",
    description:
      "The end of apartheid in South Africa was marked by Nelson Mandela's election as president in 1994, symbolizing the nation's move toward reconciliation.",
    position: [-33.918861, 18.423300], // Cape Town, South Africa
    category: "Politics",
  },
  {
    id: 86,
    title: "European Union Formation",
    description:
      "The Treaty of Maastricht in 1992 laid the foundation for the European Union, fostering political and economic integration among European countries.",
    position: [50.8503, 4.3517], // Brussels, Belgium
    category: "Politics",
  },
  {
    id: 87,
    title: "Arab Spring",
    description:
      "The Arab Spring, starting in 2010, saw widespread protests and uprisings across the Arab world, leading to political changes in several countries.",
    position: [30.0444, 31.2357], // Cairo, Egypt
    category: "Politics",
  },
  {
    id: 88,
    title: "Renaissance in Italy",
    description: "The Renaissance in Italy marked a period of cultural rebirth and artistic innovation in the 14th to 17th centuries.",
    position: [41.9028, 12.4964], // Florence, Italy
    category: "Art",
  },
  {
    id: 89,
    title: "Impressionist Exhibition in Paris",
    description: "The first Impressionist exhibition in Paris in 1874 showcased a new style of painting that had a profound impact on the art world.",
    position: [48.8566, 2.3522], // Paris, France
    category: "Art",
  },
  {
    id: 90,
    title: "Bauhaus School Founded",
    description: "The Bauhaus school, founded in Germany in 1919, played a crucial role in the development of modernist art, design, and architecture.",
    position: [51.0617, 13.6465], // Weimar, Germany
    category: "Art",
  },

  // War
  {
    id: 91,
    title: "World War I",
    description: "World War I, from 1914 to 1918, was a global conflict that had a profound impact on geopolitics, society, and the course of history.",
    position: [49.2827, -123.1207], // Vancouver, Canada
    category: "War",
  },
  {
    id: 92,
    title: "D-Day Normandy Invasion",
    description: "The Allied invasion of Normandy on June 6, 1944, marked a turning point in World War II, leading to the eventual defeat of Nazi Germany.",
    position: [49.4144, -0.8322], // Normandy, France
    category: "War",
  },
  {
    id: 93,
    title: "Cold War and Cuban Missile Crisis",
    description: "The Cold War, a geopolitical tension between the U.S. and the Soviet Union, escalated during the Cuban Missile Crisis in 1962, bringing the world to the brink of nuclear war.",
    position: [23.1136, -82.3666], // Havana, Cuba
    category: "War",
  },

  // Religion
  {
    id: 94,
    title: "Reformation",
    description: "The Protestant Reformation, led by Martin Luther in the 16th century, resulted in a schism within Western Christianity and significant religious changes.",
    position: [51.0504, 13.7373], // Wittenberg, Germany
    category: "Religion",
  },
  {
    id: 95,
    title: "Jerusalem Embassy Recognition",
    description: "The recognition of Jerusalem as the capital of Israel by the U.S. in 2017 sparked controversy and raised geopolitical tensions in the Middle East.",
    position: [31.7683, 35.2137], // Jerusalem, Israel
    category: "Religion",
  },
  {
    id: 96,
    title: "Fatima Apparitions",
    description: "The apparitions of Our Lady of Fatima in 1917 in Portugal had a profound impact on Catholicism and became a significant Marian pilgrimage site.",
    position: [39.6336, -8.6731], // Fatima, Portugal
    category: "Religion",
  },

  // Science
  {
    id: 97,
    title: "Apollo 11 Moon Landing",
    description: "The Apollo 11 mission in 1969 successfully landed humans on the moon, a historic achievement in space exploration.",
    position: [29.5502, -95.097], // Houston, USA
    category: "Science",
  },
  {
    id: 98,
    title: "Chernobyl Nuclear Disaster",
    description: "The Chernobyl nuclear disaster in 1986 was a catastrophic event that had far-reaching environmental and health consequences.",
    position: [51.4045, 30.0542], // Chernobyl, Ukraine
    category: "Science",
  },
  {
    id: 99,
    title: "First Successful Organ Transplant",
    description: "The first successful organ transplant, a kidney transplant, took place in 1954, paving the way for advancements in organ transplantation.",
    position: [41.8781, -87.6298], // Chicago, USA
    category: "Science",
  },

  // Politics
  {
    id: 100,
    title: "Fall of the Berlin Wall",
    description: "The fall of the Berlin Wall in 1989 symbolized the end of the Cold War and the reunification of East and West Germany.",
    position: [52.5200, 13.4050], // Berlin, Germany
    category: "Politics",
  },
  {
    id: 101,
    title: "United Nations Formation",
    description: "The United Nations was founded in 1945 after World War II, with the goal of maintaining international peace and cooperation.",
    position: [40.7489, -73.9680], // New York City, USA
    category: "Politics",
  },
  {
    id: 102,
    title: "Indian Independence and Partition",
    description: "India gained independence from British rule in 1947, accompanied by the partition of India and Pakistan.",
    position: [28.6139, 77.209], // New Delhi, India
    category: "Politics",
  },
  {
    id: 103,
    title: "Golden Age of Dutch Painting",
    description: "The 17th century marked the Golden Age of Dutch painting, with artists like Rembrandt and Vermeer producing masterpieces in various genres.",
    position: [52.3676, 4.9041], // Amsterdam, Netherlands
    category: "Art",
  },
  {
    id: 104,
    title: "Pop Art Movement",
    description: "The emergence of the Pop Art movement in the 1950s and 1960s, with artists like Andy Warhol and Roy Lichtenstein challenging traditional notions of art.",
    position: [40.7831, -73.9712], // New York City, USA
    category: "Art",
  },
  {
    id: 105,
    title: "Digital Art and NFTs",
    description: "The rise of digital art and non-fungible tokens (NFTs) in the 21st century, transforming the art market and how artists monetize their work.",
    position: [37.7749, -122.4194], // San Francisco, USA
    category: "Art",
  },
  
  // War
  {
    id: 106,
    title: "Vietnam War",
    description: "The Vietnam War (1955-1975) was a conflict between North and South Vietnam, involving the United States and its allies, with profound political and social impacts.",
    position: [21.0285, 105.8542], // Hanoi, Vietnam
    category: "War",
  },
  {
    id: 107,
    title: "Gulf War",
    description: "The Gulf War in 1990-1991, triggered by Iraq's invasion of Kuwait, had significant consequences for the geopolitics of the Middle East.",
    position: [29.3759, 47.9774], // Kuwait City, Kuwait
    category: "War",
  },
  {
    id: 108,
    title: "Syrian Civil War",
    description: "The Syrian Civil War, which began in 2011, has resulted in a complex and devastating conflict with global implications.",
    position: [33.5138, 36.2765], // Damascus, Syria
    category: "War",
  },
  
  // Religion
  {
    id: 109,
    title: "Second Vatican Council",
    description: "The Second Vatican Council (1962-1965) brought significant reforms to the Catholic Church, addressing its relationship with the modern world.",
    position: [41.9028, 12.4964], // Vatican City
    category: "Religion",
  },
  {
    id: 110,
    title: "Dalai Lama's Escape to India",
    description: "The Dalai Lama's escape to India in 1959 following the Tibetan Uprising against Chinese rule, leading to the establishment of the Tibetan government-in-exile.",
    position: [30.7333, 79.0667], // Dharamshala, India
    category: "Religion",
  },
  {
    id: 111,
    title: "Assisi World Day of Prayer for Peace",
    description: "The Assisi World Day of Prayer for Peace in 1986 brought together leaders of various religions to pray for peace and promote dialogue.",
    position: [43.0707, 12.6196], // Assisi, Italy
    category: "Religion",
  },
  
  // Science
  {
    id: 112,
    title: "Human Genome Project Completion",
    description: "The completion of the Human Genome Project in 2003 marked a major milestone in genetics, providing a complete sequence of the human DNA.",
    position: [38.9072, -77.037], // Washington, D.C., USA
    category: "Science",
  },
  {
    id: 113,
    title: "Hubble Space Telescope Launch",
    description: "The launch of the Hubble Space Telescope in 1990 revolutionized astronomy, providing unprecedented views of the universe.",
    position: [28.3922, -80.6077], // Cape Canaveral, USA
    category: "Science",
  },
  {
    id: 114,
    title: "CRISPR-Cas9 Gene Editing Breakthrough",
    description: "The development of CRISPR-Cas9 gene editing technology in 2012 opened new possibilities for precise genetic modifications.",
    position: [37.7749, -122.4194], // San Francisco, USA
    category: "Science",
  },
  
  // Politics
  {
    id: 115,
    title: "Apartheid End in South Africa",
    description: "The end of apartheid in South Africa in the early 1990s, marked by the release of Nelson Mandela and the establishment of multiracial elections.",
    position: [-26.2041, 28.0473], // Johannesburg, South Africa
    category: "Politics",
  },
  {
    id: 116,
    title: "Arab Spring",
    description: "The Arab Spring, a series of protests and uprisings across the Arab world in 2010-2012, leading to political changes and social unrest.",
    position: [30.033, 31.2336], // Cairo, Egypt
    category: "Politics",
  },
  {
    id: 117,
    title: "Brexit Referendum",
    description: "The Brexit referendum in 2016 resulted in the United Kingdom's decision to leave the European Union, impacting global politics and economics.",
    position: [51.5099, -0.1337], // London, UK
    category: "Politics",
  },
  {
    id: 118,
    title: "COVID-19 Pandemic",
    description: "The COVID-19 pandemic, caused by the SARS-CoV-2 virus, emerged in late 2019, leading to widespread illness, lockdowns, and significant global social and economic impacts.",
    position: [20, 10], // Global position
    category: "Science",
  },
  {
    id: 119,
    title: "Development of COVID-19 Vaccines",
    description: "The rapid development and distribution of COVID-19 vaccines in 2020-2021, a collaborative effort by scientists and pharmaceutical companies to combat the pandemic.",
    position: [38.9072, -77.037], // Washington, D.C., USA
    category: "Science",
  },
  {
    id: 120,
    title: "Global Vaccination Campaigns",
    description: "The initiation of global vaccination campaigns against COVID-19, aiming to achieve widespread immunity and control the spread of the virus.",
    position: [34.0522, -118.2437], // Los Angeles, USA
    category: "Science",
  },
  
  // Politics / Global Issues
  {
    id: 121,
    title: "International Response to COVID-19",
    description: "The international response to the COVID-19 pandemic, including collaborative efforts, vaccine diplomacy, and challenges in coordinating a global response.",
    position: [40.7128, -74.006], // New York City, USA
    category: "Politics",
  },
  {
    id: 122,
    title: "Economic Impact of COVID-19",
    description: "The economic impact of the COVID-19 pandemic, including global recessions, job losses, and efforts to recover and rebuild economies.",
    position: [35.6895, 139.6917], // Tokyo, Japan
    category: "Politics",
  },
  {
    id: 123,
    title: "Disinformation and Infodemic",
    description: "The spread of disinformation and an infodemic during the COVID-19 pandemic, influencing public perception, and challenging efforts to control the virus.",
    position: [51.1657, 10.4515], // Germany (central)
    category: "Politics",
  },
  
];

export default eventsData;
