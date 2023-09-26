import React from 'react'
const Footer = (props) => {
  return (
    <>
    <section className='quick_service_section'>
      <div className="page_width">
        <div className="quick_service_inner_section">
          <h2>Quick Service On Emergency</h2>
          <a href='tel:+971586747123'>{props.icon}<span>+971 58 67 47 123</span></a>
        </div>
      </div>
    </section>
    <footer>
      <div className='page_width'>
        <div className='footer_inner_grid'>
          <div className='footer_about'>
            <div className='footer_logo'><img src={props.logo} alt="" /></div>
            <p>We make sure that your safety is never compromised. This is why we hire all the staff under the roof of Home Comfort, just for your satisfaction.</p>
          </div>
          <nav className='footer_nav'>
            <ul>
              <li><a herf="">Home</a></li>
              <li><a herf="">Services</a></li>
              <li><a herf="">Contact Us</a></li>
            </ul>
          </nav>
          <nav className='footer_nav'>
            <ul>
            <li><a herf="">Facebook</a></li>
            <li><a herf="">Twitter</a></li>
            <li><a herf="">Linkedin</a></li>
            <li><a herf="">Instagram</a></li>
            </ul>
          </nav>
          <div className='footer_contact_us'>
            <a href="tel:+971586747123">+971 58 67 47 123</a>
            <a href="mailto:info@homecomfort.com">info@homecomfort.com</a>
            <form className='form_footer' action="">
              <input type="text" />
              <input type="submit" value="SEND" />
            </form>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer
