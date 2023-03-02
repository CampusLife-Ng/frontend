import React from 'react'
import "./CreateLodge.css"
import { Navbar, Footer, NewsLetter } from '../../components'

const CreateLodge = () => {
  return (
    <>
        <Navbar />
        <div className="create-lodge">
            <h1>CREATE LODGE</h1>
        </div>
        <NewsLetter />
        <Footer />
    </>
  )
}

export default CreateLodge