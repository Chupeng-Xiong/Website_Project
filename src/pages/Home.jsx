import { Card, Badge, Button, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import books from '../assets/Home/books.png'
import experience from '../assets/Home/Experience.png'
import interests from '../assets/Home/interests.png'
import contacts from '../assets/Home/contacts.png'
import '../styles/Home.css'

export default function Home() {
    const navigate = useNavigate()

    const sections = [
        { title: 'Education', description: 'My academic journey at UW–Madison and study abroad experiences.', path: '/education', badge: 'Degree & Study Abroad', img: books },
        { title: 'Experience', description: 'My work history and coding experience', path: '/experience', badge: 'Timeline', img: experience },
        { title: 'Interests', description: 'Reading, Gunpla, and other hobbies.', path: '/interests', badge: 'Interactive', img: interests },
        { title: 'Contact', description: 'Get in touch with me.', path: '/contact', badge: 'Links', img: contacts },
    ]

    return (
        <div className='home'>
            <h2 className='page-section'>PROFILE</h2>
            <Card className='profile'>
                <Card.Body className='profile-body'>
                    <div className='profile-img'>
                        CX
                    </div>
                    <div className='profile-info'>
                        <Card.Title className='profile-title'>Chupeng Xiong</Card.Title>
                        <Card.Text className='profile-text'>Computer Science student at The University of Madison-Wisconsin</Card.Text>
                        <div className='profile-links'>
                            <Button className='profile-btn' href='https://github.com/Chupeng-Xiong'>GitHub</Button>
                            <Button className='profile-btn' href='mailto:chupengxiong@gmail.com'>Email</Button>
                        </div>
                    </div>
                </Card.Body>
            </Card>

            <h2 className='page-section'>SECTIONS</h2>
            <Row className='section-grid'>
                {sections.map((section) => (
                    <Col key={section.title} xs={12} sm={6} md={6} lg={3}>
                        <Card className='section-card' onClick={() => navigate(section.path)}>
                            <Card.Body className='section-body'>
                                <div className='image_container'>
                                    <img src={section.img} alt={section.title} className='section_image'/>
                                </div>
                                <div>
                                    <Card.Title>{section.title}</Card.Title>
                                    <Card.Text>{section.description}</Card.Text>
                                    <Badge bg='dark'>{section.badge}</Badge>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            <h2 className='page-section'>ABOUT ME</h2>
            <Card className='profile'>
                <Card.Body className='profile-body'>
                    <Card.Text className='about-me'>
                        My name is Chupeng Xiong, a student at The University of Madison-Wisconsin and a first generation Hmong college student. 
                        I was born and raised in Madison, Wisconsin.
                        Growing up, I loved both science and art, and frequently watched documentaries with my dad late at night.
                        Unfortunately, there was not many opportunities where art also coincide with science and this left me in a bit of a conundrum.
                        In school, both of those topics were often separated into different studies and often did not overlap with one another.
                        Luckily for me, I was also an avid gamer growing up.
                        This allowed me to be more aware of programming as a sort of art form.
                        You see, what really pulled me towards art was the sense of creation that comes with it, and programming allowed for this while also allowing me to use my talent of science and math.
                        Of course, while I had a strong interest towards programming, this does not mean I had zero struggles in this field.
                        I first started seriously studying programming through my last two years of highschool, but during this time period school was shut down due to Covid-19.
                        Through online classes, I struggled to understand core concepts of programming and was greatly out of my depth at the time.
                        I fell behind compared to my other classmates and really struggled with the idea of continuing this career choice.
                        Fortunately, I stuck through and as time passed I began catching back up to my peers and eventually thriving in my computer science studies.
                    </Card.Text>
                </Card.Body>
            </Card>
            <h2 className='page-section'></h2>
        </div>
    )
}