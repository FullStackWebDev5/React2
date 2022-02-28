import React from 'react'
import './CollegeStudents.css'
import devloperImage from '../../images/developer.jpeg'

class CollegeStudents extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      students: [
        {
          id: 1,
          name: 'Lakshman',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, tenetur',
          course: 'Full Stack Web Dev',
          techStack: 'MERN',
          batch: 'Batch 11'
        },
        {
          id: 2,
          name: 'Ram',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, tenetur consectetur adipisicing elit. Aliquam, tenetur',
          course: 'Front End Web Dev',
          techStack: 'MEVN',
          batch: 'Batch 12'
        },
        {
          id: 3,
          name: 'Lakshman',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, tenetur',
          course: 'Full Stack Web Dev',
          techStack: 'MERN',
          batch: 'Batch 11'
        },
      ]
    }
  }
  
  render(){
    const { students } = this.state

    return (
      <>
      {students.map((student, index) => {
        return (
          <div className="student-data" key={index}>
            <h2>{student.name}</h2>
            <p>{student.bio}</p>
            <h3>Course: {student.course}</h3>
            <h3>Tech Stack: {student.techStack}</h3>
            <h3>Batch: {student.batch}</h3>
          </div>
        )})}
        <img src={devloperImage} alt='Developer' />
      </>
    );
  }
}

export default CollegeStudents