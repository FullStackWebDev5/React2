import React from 'react'
import './CollegeStudents.css'

class CollegeStudents extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      students: [
        {
          name: 'Lakshman',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, tenetur',
          course: 'Full Stack Web Dev',
          techStack: 'MERN',
          batch: 'Batch 11'
        },
        {
          name: 'Lakshman',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, tenetur',
          course: 'Full Stack Web Dev',
          techStack: 'MERN',
          batch: 'Batch 11'
        }
      ]
    }
  }
  
  render(){
    const { students } = this.state
    const student1 = students[0]
    const student2 = students[1]
    return (
      <>
        <div className="student-data">
          <h2>{student1.name}</h2>
          <p>{student1.bio}</p>
          <h3>Course: {student1.course}</h3>
          <h3>Tech Stack: {student1.techStack}</h3>
          <h3>Batch: {student1.batch}</h3>
        </div>
        <div className="student-data">
          <h2>{student2.name}</h2>
          <p>{student2.bio}</p>
          <h3>Course: {student2.course}</h3>
          <h3>Tech Stack: {student2.techStack}</h3>
          <h3>Batch: {student2.batch}</h3>
        </div>
      </>
    );
  }
}

export default CollegeStudents