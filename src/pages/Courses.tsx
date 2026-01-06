import React from 'react'
import HeroSection from '../components/Courses/HeroSection'
import CoursesBody from '../components/Courses/CoursesBody'

const Courses: React.FC = () => {
  return (
    <div className='mt-32'>
      <HeroSection />
      <CoursesBody />
    </div>
  )
}

export default Courses