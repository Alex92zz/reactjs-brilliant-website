import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import ContactAbout from './ContactAbout'
import ContactForm from './ContactForm'
import ContactHeader from './ContactHeader'

function Contact() {
  return (
    <>
      <Navbar />
      <div>

        <main className="js-animsition-overlay" data-animsition-overlay="true">

          <ContactHeader />
          <ContactAbout />
          <ContactForm />

        </main>

      </div>

    </>
  )
}

export default Contact
