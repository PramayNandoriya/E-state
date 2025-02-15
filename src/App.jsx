import React from 'react';
import Header from './components/header';
import About from './components/About';
import Projects from './components/Projects';
import Reviews from './components/Reviews';
import ContactUs from './components/ContactUs';
import Footer from './components/footer';
import { ToastContainer, toast } from 'react-toastify';



const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <ToastContainer />
      <Header/>
      <About/>
      <Projects/>
      <Reviews/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;
