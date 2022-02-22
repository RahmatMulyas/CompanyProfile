  import React from 'react';
  import './Footer.css';
  import { Button } from './Button';
  import { Link } from 'react-router-dom';

  function Footer() {
    return (
      <div className='footer-container'>
        <section className='footer-subscription'>
          <p className='footer-subscription-heading'>
            Join the Application or Consultation with Me you can get many benefit and healthy 
          </p>
          <p className='footer-subscription-text'>
            You can unsubscribe at any time.
          </p>
          <div className='input-areas'>
            <form>
              <input
                className='footer-input'
                name='email'
                type='email'
                placeholder='Your Email'
              />
              <Button buttonStyle='btn--outline'>Subscribe</Button>
            </form>
          </div>
        </section>
        <div class='footer-links'>
          <div className='footer-link-wrapper'>
            <div class='footer-link-items'>
              <h2 className='txt-items'>About Us</h2>
              <Link className='link-name' to='/sign-up'>How it works</Link>
              <Link className='link-name' to='/'>Testimonials</Link>
              <Link className='link-name' to='/'>Careers</Link>
              <Link className='link-name' to='/'>Investors</Link>
              <Link className='link-name' to='/'>Terms of Service</Link>
            </div>
            <div class='footer-link-items'>
              <h2 className='txt-items'>Contact Us</h2>
              <Link className='link-name' to='/'>Contact</Link>
              <Link className='link-name' to='/'>Support</Link>
              <Link className='link-name' to='/'>Destinations</Link>
              <Link className='link-name' to='/'>Sponsorships</Link>
            </div>
          </div>
          <div className='footer-link-wrapper'>
            <div class='footer-link-items'>
              <h2 className='txt-items' >Videos</h2>
              <Link className='link-name' to='/'>Submit Video</Link>
              <Link className='link-name' to='/'>Ambassadors</Link>
              <Link className='link-name' to='/'>Agency</Link>
              <Link className='link-name' to='/'>Influencer</Link>
            </div>
            <div class='footer-link-items'>
              <h2 className='txt-items'>Social Media</h2>
              <Link className='link-name' to='/'>Instagram</Link>
              <Link className='link-name' to='/'>Facebook</Link>
              <Link className='link-name' to='/'>Youtube</Link>
              <Link className='link-name' to='/'>Twitter</Link>
            </div>
            <div class='footer-link-items'>
              <h2 className='txt-items'>Contact Company</h2>
                    <p style={{ color:'white'}}>Maquee Executive Offices At Cyber 2 Tower 18TH Floor Suite M06_CYB, Jl. H.R Rasuna Said, Blok X-5 , Jakarta 12950, Indonesia</p>
                    <p style={{color:'white'}}><strong>Phone: </strong> (62-21) 5799 8999</p>
                    <p style={{color:'white'}}><strong>Fax: </strong> (62-21) 5799 8988</p>
                    <p style={{color:'white'}}><strong>Email: </strong> pt.pas@permataazzurisehat.com</p>
            </div>
          </div>
        </div>
        <section class='social-media'>
          <div class='social-media-wrap'>
            <div class='footer-logo'>
             <img src="/images/logonew.png" style={{maxWidth: 250}}/>
            </div>
            <small class='website-rights'>© Copyright PT. Permata Azzuri Sehat. All Rights Reserved</small>
            <div class='social-icons'>
              <Link
                class='social-icon-link facebook'
                to='/'
                target='_blank'
                aria-label='Facebook'
              >
                <i class='fab fa-facebook-f' />
              </Link>
              <Link
                class='social-icon-link instagram'
                to='/'
                target='_blank'
                aria-label='Instagram'
              >
                <i class='fab fa-instagram' />
              </Link>
              <Link
                class='social-icon-link youtube'
                to='/'
                target='_blank'
                aria-label='Youtube'
              >
                <i class='fab fa-youtube' />
              </Link>
              <Link
                class='social-icon-link twitter'
                to='/'
                target='_blank'
                aria-label='Twitter'
              >
                <i class='fab fa-twitter' />
              </Link>
              <Link
                class='social-icon-link twitter'
                to='/'
                target='_blank'
                aria-label='LinkedIn'
              >
                <i class='fab fa-linkedin' />
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  export default Footer;