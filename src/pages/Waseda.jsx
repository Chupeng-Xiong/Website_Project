import sakuraPetals from '../assets/Japan/petals.png'
import tokyoSkyline from '../assets/Japan/tokyo-skyline.png'
import '../styles/Waseda.css'

export default function Waseda() {
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
                
            </div>
        </div>
    )
}