import { Card, Badge, Button, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import uwPhoto from '../assets/School/Hero-Bascom.png'
import wasedaPhoto from '../assets/School/waseda.png'
import matcPhoto from '../assets/School/truax-campus-1200x630.png'
import '../styles/Education.css'

export default function Education() {

  const navigate = useNavigate()

  const schools = [
    {
      name: 'University of Wisconsin-Madison',
      location: 'Madison, WI, USA',
      date: '09/2922 to Present (Graduate 05/2026)', 
      classes: ['Software Engineering', 'Building User Interfaces', 'Intro to Algorithms', 'Intro to Combinatorial Optimization', 'Intro to Optimization'],
      description: 'Study in College of Letters and Science for Computer Science.',
      img: uwPhoto,
    },
    {
      name: 'Waseda University',
      location: 'Tokyo, Japan',
      date: '04/2025 - 09/2025',
      classes: ['Intro to Operating Systems', 'Computing'],
      description: 'Study Abroad experience during my time at UW-Madison.',
      img: wasedaPhoto,
      link: '/waseda',
    },
    {
      name: 'Madison Area Technical College (MATC)',
      location: 'Madison, WI, USA',
      date: '09/2020 to 05/2022',
      classes: ['Programming 1 & 2', 'Calculus 1 & 2'],
      description: 'Studied at MATC during junior and senior years of high school through the STEM Program.',
      img: matcPhoto,
    }
  ]

  return (
    <div className='education'>
      <h1 className='page-header'>Education</h1>
        {schools.map((school) => (
          <Card 
            className={`schools ${school.link ? 'clickable' : ''}`}
            key={school.name}
            onClick={() => school.link && navigate(school.link)}
          >
            <Card.Body className='school_body'>

              <div className='school_img_container'>
                <img src={school.img} alt={school.name} className='school_image'/>
              </div>

              <div>
                <Card.Title className='school_title'>{school.name}</Card.Title>
                <Card.Text className='school_date'>{school.date}</Card.Text>
                <Card.Text className='school_location'>{school.location}</Card.Text>
                <Card.Text className='school_description'>{school.description}</Card.Text>
                <Card.Text className='courses_header'>Relevant Courses:</Card.Text>
                  <ul>
                    {school.classes.map((course) => (
                      <li className='school_course' key={course}>{course}</li>
                    ))}
                  </ul>
              </div>
            </Card.Body>
          </Card>
        ))}
    </div>
  )
}