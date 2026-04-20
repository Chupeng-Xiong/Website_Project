import { Card, Carousel } from 'react-bootstrap'
import { useState } from 'react'
import walmart from '../assets/Experience/walmart.png'
import pythonIcon from '../assets/Experience/python_logo.png'
import javaIcon from '../assets/Experience/java_logo.png'
import cIcon from '../assets/Experience/c_logo.png'
import htmlIcon from '../assets/Experience/html_logo.png'
import cssIcon from '../assets/Experience/css_logo.png'
import jsIcon from '../assets/Experience/js_logo.png'
import reactIcon from '../assets/Experience/react_logo.png'

import postmanIcon from '../assets/Experience/postman_logo.png'
import dockerIcon from '../assets/Experience/docker_logo.png'
import linuxIcon from '../assets/Experience/linux_logo.png'
import gitIcon from '../assets/Experience/git_logo.png'

import '../styles/Experience.css'
export default function Experience() {

  const jobs = [
    {
      name: 'Walmart',
      position: 'Online Grocery Pickup',
      time: '05/2022 to Present ',
      location: 'Madison, WI',
      img: walmart
    },
  ]

  const languages = [
    {name: 'Python', img: pythonIcon,},
    {name: 'Java', img: javaIcon,},
    {name: 'C', img: cIcon,},
    {name: 'HTML', img: htmlIcon,},
    {name: 'CSS', img: cssIcon,},
    {name: 'JavaScript', img: jsIcon,},
    {name: 'REACT', img: reactIcon,},
  ]

  const tools = [
    {name: 'Postman', img: postmanIcon,},
    {name: 'Docker', img: dockerIcon,},
    {name: 'Linux Commands', img: linuxIcon,},
    {name: 'Git', img: gitIcon},
  ]

  return (
  <div className="experience">
    <div className="job-exp">
      <h2 className='page-section'>Job Experiences</h2>
      {jobs.map((job) => (
        <Card key={job.name} className='job'>
          <Card.Body className='job-body'>
            <div className='job-img-container'>
                <img src={job.img} alt={job.name} className='job-img'/>
            </div>
            <div className='job-main'>
            <Card.Title className='job-title'>{job.name}</Card.Title>
            <Card.Text className='job-position'>{job.position}</Card.Text>
            </div>
            <Card.Text className='job-time'>{job.time}</Card.Text>
            <Card.Text className='job-location'>{job.location}</Card.Text>
          </Card.Body>
        </Card>
      ))}
      <h1 className='job-gap'>...</h1>
    </div>
    
    <hr className='section-divider' />

    <h2 className='page-section'>Programming Languages</h2>
    <Carousel interval={null} className='carousel'>
      {languages.map((lang) => (
        <Carousel.Item>
          <Card className='caro-card'>
            <Card.Body className='caro-body'>
              <img src={lang.img} alt={lang.name} className='caro-img'/>
              <Card.Title className='caro-title'>{lang.name}</Card.Title>
            </Card.Body>
          </Card>
        </Carousel.Item>
      ))}
    </Carousel>

    <h2 className='page-section'>Developement Tools</h2>
    <Carousel interval={null} className='carousel'>
      {tools.map((tool) => (
        <Carousel.Item>
          <Card className='caro-card'>
            <Card.Body className='caro-body'>
              <img src={tool.img} alt={tool.name} className='caro-img'/>
              <Card.Title className='caro-title'>{tool.name}</Card.Title>
            </Card.Body>
          </Card>
        </Carousel.Item>
      ))}
    </Carousel>
  </div>
  )
}