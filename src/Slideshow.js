import { Box, Button, Container, Slider, Tab, Tabs, Typography } from '@mui/material';
import { useState, useEffect, useRef } from 'react';

import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';

const Slideshow = ({ images }) => {
    const [index, setIndex] = useState(0);
    const [playing, setPlaying] = useState(true);
    const tabsRef = useRef();

    const titles=['Taj Mahal',
     'Italy',
    'Maldives',
    'Dubai',
    'England',
    'Paris',
    'Russia',
    'Golden Temple']
    const texts = [
        'The Taj Mahal is located on the right bank of the Yamuna River in a vast Mughal garden that encompasses nearly 17 hectares, in the Agra District in Uttar Pradesh. It was built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal with construction starting in 1632 AD and completed in 1648 AD, with the mosque, the guest house and the main gateway on the south, the outer courtyard and its cloisters were added subsequently and completed in 1653 AD. The existence of several historical and Quaranic inscriptions in Arabic script have facilitated setting the chronology of Taj Mahal. For its construction, masons, stone-cutters, inlayers, carvers, painters, calligraphers, dome builders and other artisans were requisitioned from the whole of the empire and also from the Central Asia and Iran. Ustad-Ahmad Lahori was the main architect of the Taj Mahal.',
        'Italy, country of south-central Europe, occupying a peninsula that juts deep into the Mediterranean Sea. Italy comprises some of the most varied and scenic landscapes on Earth and is often described as a country shaped like a boot. At its broad top stand the Alps, which are among the world’s most rugged mountains. Italy’s highest points are along Monte Rosa, which peaks in Switzerland, and along Mont Blanc, which peaks in France. The western Alps overlook a landscape of Alpine lakes and glacier-carved valleys that stretch down to the Po River and the Piedmont. Tuscany, to the south of the cisalpine region, is perhaps the country’s best-known region. From the central Alps, running down the length of the country, radiates the tall Apennine Range, which widens near Rome to cover nearly the entire width of the Italian peninsula.',
        'Maldives , officially Republic of Maldives, Archipelago country, north-central Indian Ocean southwest of Sri Lanka. It is a chain of about 1,200 small coral islands and sandbanks (some 200 of which are inhabited), grouped in clusters, or atolls.The islands extend more than 510 mi (820 km) north-south and 80 mi (130 km) east-west. Area: 115 sq mi (298 sq km). Population: (2023 est.) 457,900. Capital: Male (Male’). The population is ethnically mixed; ancestors include Tamil and Sinhalese peoples as well as Arabs, Chinese, and others from surrounding Asian areas. Languages: Dhivehi (or Maldivian; official), Arabic. Religion: Islam (official; predominantly Sunni). Currency: rufiyaa. All the islands are low-lying, none rising more than 6 ft (1.8 m) above sea level. The atolls have sandy beaches, lagoons, and a luxuriant growth of coconut palms, together with breadfruit trees and tropical bushes. One of the world’s poorest countries, the Maldives has a developing economy based on fishing, tourism, boatbuilding, and...',
       'Dubai (/duːˈbaɪ/, doo-BY; Arabic: دبي, romanized: Dubayy, IPA: [dʊˈbajj], Gulf Arabic pronunciation: [dəˈbaj]) is the most populous city in the United Arab Emirates (UAE) and the capital of the Emirate of Dubai, the most populated of the 7 emirates of the United Arab Emirates.[7][8][9] Established in the 18th century as a small fishing village, the city grew rapidly in the early 21st century with a focus on tourism and luxury,[10] having the second most five-star hotels in the world,[11] and the tallest building in the world, the Burj Khalifa, which is 828 metres (2,717 ft) tall.[12]In the eastern Arabian Peninsula on the coast of the Persian Gulf,it is also a major global transport hub for passengers and cargo. Oil revenue helped accelerate the development of the city, which was already a major mercantile hub.',
        'England, predominant constituent unit of the United Kingdom, occupying more than half of the island of Great Britain. Isles, England is often erroneously considered synonymous with the island of Great Britain (England, Scotland, and Wales) and even with the entire United Kingdom. Despite the political, economic, and cultural legacy that has secured the perpetuation of its name, England no longer officially exists as a governmental or political unit—unlike Scotland, Wales, and Northern Ireland, which all have varying degrees of self-government in domestic affairs. It is rare for institutions to operate for England alone. Notable exceptions are the Church of England (Wales, Scotland, and Ireland, including Northern Ireland, have separate branches of the Anglican Communion) and sports associations for cricket, rugby, and football (soccer). In many ways England has seemingly been absorbed within the larger mass of Great Britain since the Act of Union of 1707',
        'Paris, city and capital of France, situated in the north-central part of the country. People were living on the site of the present-day city, located along the Seine River some 233 miles (375 km) upstream from the river’s mouth on the English Channel (La Manche), by about 7600 BCE. The modern city has spread from the island (the Île de la Cité) and far beyond both banks of the Seine.Paris occupies a central position in the rich agricultural region known as the Paris Basin, and it constitutes one of eight départements of the Île-de-France administrative region. It is by far the country’s most important centre of commerce and culture. Area city, 41 square miles (105 square km); metropolitan area, 890 square miles (2,300 square km). Pop. (2020 est.) city, 2,145,906; (2020 est.) urban agglomeration, 10,858,874.',
        'Russia, country that stretches over a vast expanse of eastern Europe and northern Asia. Once the preeminent republic of the Union of Soviet Socialist Republics (U.S.S.R.; commonly known as the Soviet Union), Russia became an independent country after the dissolution of the Soviet Union in December 1991.Russia is a land of superlatives. By far the world’s largest country, it covers nearly twice the territory of Canada, the second largest. It extends across the whole of northern Asia and the eastern third of Europe, spanning 11 time zones and incorporating a great range of environments and landforms, from deserts to semiarid steppes to deep forests and Arctic tundra. Russia contains Europe’s longest river, the Volga, and its largest lake, Ladoga. Russia also is home to the world’s deepest lake, Baikal, and the country recorded the world’s lowest temperature outside the North and South poles.',
        'Harmandir Sahib, Harmandir also spelled Harimandir, also called Darbar Sahib (Punjabi: “Sacred Audience”) or Golden Temple, the chief gurdwara, or house of worship, of Sikhism and the Sikhs’ most important pilgrimage site. It is located in the city of Amritsar, Punjab state, northwestern India.The first Harmandir Sahib was built in 1604 by Arjan, the fifth Sikh Guru, who symbolically had it placed on a lower level so that even the humblest had to step down to enter it. He also included entrances on all four sides, signifying that it was open to worshippers of all castes and creeds. The foundation stone was laid by Mian Mīr, a Muslim divine of Lahore (now in Pakistan). The temple was destroyed several times by Afghan invaders and was finally rebuilt in marble and copper overlaid with gold foil during the reign (1801–39) of Maharaja Ranjit Singh. The structure thus became known as the Golden Temple.'
    ];

    useEffect(() => {
        let intervalId = null;
        if (playing) {
            intervalId = setInterval(() => {
                setIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 3000);
        }
        return () => clearInterval(intervalId);
    }, [playing, images]);


    const handleTabChange = (event, value) => {
        setIndex(value);
    };

    const handlePrevClick = () => {
        // setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));

    };

    const handleNextClick = () => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handleToggleClick = () => {
        setPlaying((prevPlaying) => !prevPlaying);
    };

    const handleTabsScroll = () => {
        const tabsEl = tabsRef.current;
        const scrollPosition = tabsEl.scrollLeft;
        const maxScroll = tabsEl.scrollWidth - tabsEl.clientWidth;

        if (scrollPosition === 0) {
            // scrolled to the start, scroll to the end
            tabsEl.scrollTo({
                left: maxScroll,
                behavior: 'smooth',
            });
        } else if (scrollPosition === maxScroll) {
            // scrolled to the end, scroll to the start
            tabsEl.scrollTo({
                left: 0,
                behavior: 'smooth',
            });
        }
    };

    return (
        <Container maxWidth={false} sx={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: { md: 'nowrap', xs: 'wrap' } }}>
          <style>
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');
</style>
            <Box

                sx={{ display: 'flex', flexDirection: 'column', width: { md: '50vw', xs: '90vw' } }}>
                <img maxWidth='100%' style={{ borderRadius: '5%' }} src={images[index]} alt={`Slide ${index}`} />
                {/* <Box>
                    <button onClick={handlePrevClick}>Prev</button>

                    <button onClick={handleNextClick}>Next</button>
                </Box> */}
                <Tabs
                    className='classes.tabLabel'
                    value={index}
                    onChange={handleTabChange}
                    onScroll={handleTabsScroll}
                    variant="scrollable"
                    scrollButtons="auto"
                    indicatorColor="primary"

                    sx={{


                        '& .MuiTabs-flexContainer': {
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            '& > *': {
                                flex: '0 0 10px',
                                maxWidth: 50,
                                '&:not(:last-child)': {
                                    marginRight: { md: 5, xs: 0 },
                                },
                            },
                        },
                        '& .MuiTab-root': {
                            minWidth: { md: 200, xs: 120 },
                        },
                    }}
                >
                    {images.map((image, i) => (
                        <Tab
                            key={i}
                            label={
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',

                                    }}
                                >
                                    <img src={image} alt={`Slide ${i + 1}`} style={{ width: '100%', borderRadius: '10%', height: 'auto' }} />
                                </div>
                            }
                        />

                    ))}
                </Tabs>

            </Box>


            <Box  sx={{ display:'flex',flexDirection:{md:'column',xs:'column-reverse'},alignItems:'center',marginLeft: { md: '10%', xs: '0' }, width: { md: '40vw', xs: '90vw' } }}>
                <Box>
                <Typography variant='h4' sx={{ fontFamily: 'Playfair Display' }}>
                    {titles[index]}
                </Typography>
                <Typography  sx={{ color: '#595857',fontFamily:'Ubuntu' ,mt:2 ,mb:5}}>
                   {texts[index]}
                     </Typography>
                </Box>
               

                <Box>
                    <Button onClick={handleToggleClick}>{playing ? <PauseCircleIcon sx={{fontSize:{md:'4rem',xs:'3rem'}}} /> : <PlayCircleIcon sx={{fontSize:{md:'4rem',xs:'3rem'}}}  />}</Button>
                </Box>
            </Box>




        </Container>
    );
};

export default Slideshow;
