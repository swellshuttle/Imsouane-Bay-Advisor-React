import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import SolidButton from '../components/solid-button'
import BlogPostCard2 from '../components/blog-post-card2'
import Footer from '../components/footer'
import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>About - Imsouane Bay Advisor</title>
        <meta property="og:title" content="About - Imsouane Bay Advisor" />
      </Helmet>
      <div className="about-top-container">
        <nav data-role="Header" className="about-navbar">
          <h1 className="about-logo">Imsouane Bay Advisor</h1>
          <div className="about-right-side">
            <div className="about-links-container">
              <Link to="/" className="about-home">
                Home
              </Link>
              <Link to="/imsouane-taxi" className="about-taxi">
                Taxi
              </Link>
              <span className="about-taxi1">Surfboard Rental</span>
              <span className="about-about">About</span>
            </div>
          </div>
          <div data-role="BurgerMenu" className="about-burger-menu">
            <svg viewBox="0 0 1024 1024" className="about-burger-menu">
              <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="about-mobile-menu">
            <div className="about-nav">
              <div className="about-top">
                <h1>Travel</h1>
                <div data-role="CloseMobileMenu" className="about-close-menu">
                  <svg viewBox="0 0 1024 1024" className="about-icon03">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="about-right-side1">
                <div className="about-links-container1">
                  <Link to="/" className="about-navlink">
                    Home
                  </Link>
                  <Link to="/imsouane-taxi" className="about-navlink1">
                    Taxi
                  </Link>
                  <span className="about-text">Surfboard Rental</span>
                  <span className="about-text01">About</span>
                </div>
                <SolidButton button="Explore places"></SolidButton>
              </div>
            </div>
            <div className="about-follow-container">
              <span className="about-text02">
                Follow us on
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <div className="about-icons-container">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="about-link"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="about-icon05"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="about-link1"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="about-icon07"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="about-link2"
                >
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="about-icon09"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className="about-hero">
          <div className="about-content-container">
            <h1 className="about-text03 Heading">
              <span>Work less. </span>
              <span>Surf more</span>
              <br></br>
            </h1>
          </div>
        </div>
      </div>
      <div id="main-section" className="about-main">
        <div className="about-features">
          <h1 className="about-text07">
            <span>Explore our services</span>
            <br></br>
            <span></span>
          </h1>
          <span className="about-text10">
            Embark on your epic Morocco surf escapade with a touch of
            confidence! Whether you&apos;re hunting for top-notch surf gear or a
            smooth ride in a private taxi, rest easy knowing our dependable and
            fun-loving service has got everything covered.
          </span>
          <div className="about-container01">
            <div className="about-feature-card">
              <div className="about-container02">
                <svg viewBox="0 0 1024 1024" className="about-icon11">
                  <path d="M214 470h596l-64-192h-468zM746 682q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM278 682q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM808 256l88 256v342q0 18-12 30t-30 12h-44q-18 0-30-12t-12-30v-44h-512v44q0 18-12 30t-30 12h-44q-18 0-30-12t-12-30v-342l88-256q12-42 62-42h106v-86h256v86h106q50 0 62 42z"></path>
                </svg>
                <h2 className="about-text11">Private Taxi</h2>
                <span className="about-text12">
                  Book a taxi to Morocco&apos;s golden coast! We cover a wide
                  variety of destinations
                </span>
              </div>
              <Link to="/imsouane-taxi" className="about-navlink2 button">
                Book Now
              </Link>
            </div>
            <div className="about-feature-card1">
              <div className="about-container03">
                <img
                  alt="image"
                  src="/surfboard%20(1)-1500h.png"
                  className="about-image"
                />
                <h2 className="about-text13"> Rentals</h2>
                <span className="about-text14">
                  Experience the waves like a pro with our top-quality surfboard
                  and wetsuit rentals in Imsouane.
                </span>
              </div>
              <button type="button" className="about-button button">
                Book Now
              </button>
            </div>
            <div className="about-feature-card2">
              <div className="about-container04">
                <img
                  alt="image"
                  src="/seminar-1500h.png"
                  className="about-image1"
                />
                <h2 className="about-text15">Surf Classes</h2>
                <span className="about-text16">
                  Discover the thrill of riding the waves in Imsouane with our
                  exciting surf classes, designed to make you a surf pro in no
                  time!
                </span>
              </div>
              <button type="button" className="about-button1 button">
                Book Now
              </button>
            </div>
            <div className="about-feature-card3">
              <div className="about-container05">
                <img
                  alt="image"
                  src="/tripod-1500h.png"
                  className="about-image2"
                />
                <h2 className="about-text17"> Photography</h2>
                <span className="about-text18">
                  Book a taxi to Morocco&apos;s golden coast! We cover a wide
                  variety of destinations
                </span>
              </div>
              <button type="button" className="about-button2 button">
                Book Now
              </button>
            </div>
          </div>
        </div>
        <div className="about-blog">
          <div className="about-container06">
            <div className="about-blog-post-card">
              <img
                alt="Imsouane"
                src="https://images.unsplash.com/photo-1533813857885-4bfd57de64e4?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGltc291YW5lfGVufDB8fHx8MTY5NTM5OTg3M3ww&amp;ixlib=rb-4.0.3&amp;w=1500"
                image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
                className="about-image3"
              />
              <div className="about-container07">
                <div className="about-container08">
                  <span className="about-text19">GUIDES</span>
                </div>
                <h1 className="about-text20">
                  The Ultimate Guide to Surfing in Morocco
                </h1>
                <span className="about-text21">
                  Morocco, with its stunning coastline and world-class waves,
                  has become a premier destination for surfers from around the
                  globe. From the famous right-hand point breaks to
                  beginner-frien...
                </span>
                <div className="about-container09">
                  <div className="about-profile"></div>
                  <Link to="/imsouane-surf-guide" className="about-navlink3">
                    Read More -&gt;
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="about-container10">
            <BlogPostCard2
              image_src="https://images.unsplash.com/photo-1595565312451-23051ab0666c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1000"
              profile_src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName2"
            ></BlogPostCard2>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default About
