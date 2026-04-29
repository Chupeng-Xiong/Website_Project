import { Carousel } from 'react-bootstrap'

import sakuraPetals from '../assets/Japan/petals.png'
import tokyoSkyline from '../assets/Japan/tokyo-skyline.png'

import takao_1 from '../assets/Japan/takao_1.png'
import takao_2 from '../assets/Japan/takao_2.png'
import takao_3 from '../assets/Japan/takao_3.png'
import takao_4 from '../assets/Japan/takao_4.png'
import takao_5 from '../assets/Japan/takao_5.png'
import takao_6 from '../assets/Japan/takao_6.png'
import takao_7 from '../assets/Japan/takao_7.png'
import takao_8 from '../assets/Japan/takao_8.png'
import takao_9 from '../assets/Japan/takao_9.png'
import takao_10 from '../assets/Japan/takao_10.png'

import aqua_1 from '../assets/Japan/aqua_1.png'
import aqua_2 from '../assets/Japan/aqua_2.png'
import aqua_3 from '../assets/Japan/aqua_3.png'
import aqua_4 from '../assets/Japan/aqua_4.png'
import aqua_5 from '../assets/Japan/aqua_5.png'
import aqua_6 from '../assets/Japan/aqua_6.png'
import aqua_7 from '../assets/Japan/aqua_7.png'
import aqua_8 from '../assets/Japan/aqua_8.png'
import aqua_9 from '../assets/Japan/aqua_9.png'
import aqua_10 from '../assets/Japan/aqua_10.png'

import palace_1 from '../assets/Japan/palace_1.png'
import palace_2 from '../assets/Japan/palace_2.png'
import palace_3 from '../assets/Japan/palace_3.png'
import palace_4 from '../assets/Japan/palace_4.png'
import palace_5 from '../assets/Japan/palace_5.png'
import palace_6 from '../assets/Japan/palace_6.png'
import palace_7 from '../assets/Japan/palace_7.png'
import palace_8 from '../assets/Japan/palace_8.png'
import palace_9 from '../assets/Japan/palace_9.png'
import palace_10 from '../assets/Japan/palace_10.png'


import '../styles/Waseda.css'

export default function Waseda() {

    const japan_tabs = [
        {
            title: "Mount Takao",
            description: "Mount Takao is a mountain in the city of Hachioji in Tokyo, Japan. It is a popular hiking spot featuring a Shinto-Buddhist temple",
            images: [takao_1, takao_2, takao_3, takao_4, takao_5, takao_6, takao_7, takao_8, takao_9, takao_10],
        },
        {
            title: "Sumida Aquarium",
            description: "An aquarium located in Tokyo, Japan next to Tokyo Skytree. The star of this aquarium is the large penguin tank located in the middle of the aquarium.",
            images: [aqua_1, aqua_2, aqua_3, aqua_4, aqua_5, aqua_6, aqua_7, aqua_8, aqua_9, aqua_10]
        },
        {
            title: "Imperial Palace",
            description: "The Imperial Palace is a large park like area located in Tokyo, Japan. It's defining features are the beatiful gardens and architecture surrounded by moats with massive stone walls.",
            images: [palace_1, palace_2, palace_3, palace_4, palace_5, palace_6, palace_7, palace_8, palace_9, palace_10]
        },
    ]

    return (
        <div className='Waseda'>
            <div className='poster'   style={{ backgroundImage: `url(${tokyoSkyline})` }}>
                <div className='header_text_container'>
                    <div className='header_container'>
                        <img src={sakuraPetals} alt='left_petal' className='header_img_left'/>
                        < h1 className='header1'>JAPAN!!!</h1>
                        <img src={sakuraPetals} alt='right_petal' className='header_img_right'/>
                    </div>
                    <h2 className='header2'>MY STUDY ABROAD EXPERIENCE</h2>
                </div>
            </div>
            <div>
                {japan_tabs.map((japan) => 
                    <div className='japan-section'>
                        <h1 className='japan-title'>{japan.title}</h1>
                        <p className='japan-description'>{japan.description}</p>
                        <Carousel interval={null} className='carousel'>
                            {japan.images.map((img, index) => (
                                <Carousel.Item>
                                    <img src={img} alt={`slide-${index}`} className='japan_images'/>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>
                )}
            </div>
        </div>
    )
}