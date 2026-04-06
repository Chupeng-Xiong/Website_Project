import { Card, Badge, Button, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import '../styles/Home.css'

export default function Home() {
    const navigate = useNavigate()

    const sections = [
        { title: 'Education', description: 'My academic journey at UW–Madison and study abroad experiences.', path: '/education', badge: 'Interactive Map' },
        { title: 'Experience', description: 'My work history and coding experience', path: '/experience', badge: 'Timeline' },
        { title: 'Interests', description: 'Reading, Gunpla, and other hobbies.', path: '/interests', badge: 'Interactive' },
        { title: 'Contact', description: 'Get in touch with me.', path: '/contact', badge: 'Links' },
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
                        <Card.Text className='profile-text'>CS student at The University of Madison-Wisconsin</Card.Text>
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
                            <Card.Body>
                                <Card.Title>{section.title}</Card.Title>
                                <Card.Text>{section.description}</Card.Text>
                                <Badge bg='dark'>{section.badge}</Badge>
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
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}