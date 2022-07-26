import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';

export default function Home() {
    return (
        <>
        <Hero hero="defaultHero">
        </Hero>
        <Banner title="Sheraton Hotel" subtitle="deluxe rooms starting at R300">
                <Link to="/rooms" className="btn btn-primary">
                      Our Rooms
                </Link>
        </Banner>
        <Services/> 
        <FeaturedRooms/>
        {/* <iframe
        className='map'
        src="https://goo.gl/maps/cTav9CjZRShuBJ9Y9"
        
        width="600"
        height="450"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
      ></iframe> */}
      <iframe 
       className='map'
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57500.36141590994!2d28.14187915820314!3d-25.745032999999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9561f6b58593c5%3A0xdf598b7acb595659!2sSheraton%20Pretoria%20Hotel!5e0!3m2!1sen!2sza!4v1658778857596!5m2!1sen!2sza" 
      width="600" 
      height="450" 
      style={{border:"0" }}
      allowfullscreen="" 
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade">

      </iframe>
        </>

    )
}
