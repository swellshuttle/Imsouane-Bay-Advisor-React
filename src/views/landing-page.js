import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import SolidButton from '../components/solid-button'
import BlogPostCard2 from '../components/blog-post-card2'
import Footer from '../components/footer'
import './landing-page.css'

const LandingPage = (props) => {
  return (
    <div className="landing-page-container">
      <Helmet>
        <title>Imsouane Bay Advisor</title>
        <meta property="og:title" content="Imsouane Bay Advisor" />
      </Helmet>
      <div className="landing-page-top-container">
        <nav data-role="Header" className="landing-page-navbar">
          <h1 className="landing-page-logo">
            <span className="landing-page-text">Swell</span>
            <span className="landing-page-text01">
              Shuttle
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="landing-page-text02">Morocco</span>
          </h1>
          <div className="landing-page-right-side">
            <div className="landing-page-links-container">
              <Link to="/" className="landing-page-home">
                Home
              </Link>
              <Link to="/imsouane-taxi" className="landing-page-taxi">
                Taxi
              </Link>
              <Link to="/surfboard-rental" className="landing-page-taxi1">
                Surfboard Rental
              </Link>
            </div>
          </div>
          <div data-role="BurgerMenu" className="landing-page-burger-menu">
            <svg viewBox="0 0 1024 1024" className="landing-page-burger-menu">
              <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="landing-page-mobile-menu">
            <div className="landing-page-nav">
              <div className="landing-page-top">
                <h1>Travel</h1>
                <div
                  data-role="CloseMobileMenu"
                  className="landing-page-close-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="landing-page-icon03">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="landing-page-right-side1">
                <div className="landing-page-links-container1">
                  <Link to="/" className="landing-page-navlink">
                    Home
                  </Link>
                  <Link to="/imsouane-taxi" className="landing-page-navlink1">
                    Taxi
                  </Link>
                  <Link
                    to="/surfboard-rental"
                    className="landing-page-navlink2"
                  >
                    Surfboard Rental
                  </Link>
                  <span className="landing-page-text03">About</span>
                </div>
                <a href="#main-section" className="landing-page-link">
                  <SolidButton button="Explore places"></SolidButton>
                </a>
              </div>
            </div>
            <div className="landing-page-follow-container">
              <span className="landing-page-text04">
                Follow us on
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <div className="landing-page-icons-container">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="landing-page-link1"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="landing-page-icon05"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="landing-page-link2"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="landing-page-icon07"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="landing-page-link3"
                >
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="landing-page-icon09"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className="landing-page-hero">
          <div className="landing-page-content-container">
            <h1 className="landing-page-text05 Heading">
              <span>Work less. </span>
              <span>Surf more</span>
              <br></br>
            </h1>
          </div>
        </div>
      </div>
      <div id="main-section" className="landing-page-main">
        <div className="landing-page-features">
          <h1 className="landing-page-text09 Heading">
            <span>JUST SURF!</span>
            <br></br>
          </h1>
          <span className="landing-page-text12">
            Embark on your epic Morocco surf escapade with a touch of
            confidence! Whether you&apos;re hunting for top-notch surf gear or a
            smooth ride in a private taxi, rest easy knowing our dependable and
            fun-loving service has got everything covered.
          </span>
          <div className="landing-page-container01">
            <div className="landing-page-feature-card">
              <div className="landing-page-container02">
                <svg viewBox="0 0 1024 1024" className="landing-page-icon11">
                  <path d="M214 470h596l-64-192h-468zM746 682q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM278 682q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM808 256l88 256v342q0 18-12 30t-30 12h-44q-18 0-30-12t-12-30v-44h-512v44q0 18-12 30t-30 12h-44q-18 0-30-12t-12-30v-342l88-256q12-42 62-42h106v-86h256v86h106q50 0 62 42z"></path>
                </svg>
                <h2 className="landing-page-text13">Private Taxi</h2>
                <span className="landing-page-text14">
                  Book a taxi to Morocco&apos;s golden coast! We cover a wide
                  variety of destinations
                </span>
              </div>
              <Link
                to="/imsouane-taxi"
                className="landing-page-navlink3 button"
              >
                Book Now
              </Link>
            </div>
            <div className="landing-page-feature-card1">
              <div className="landing-page-container03">
                <img
                  alt="image"
                  src="/surfboard%20(1)-1500h.png"
                  className="landing-page-image"
                />
                <h2 className="landing-page-text15"> Rentals</h2>
                <span className="landing-page-text16">
                  Experience the waves like a pro with our top-quality surfboard
                  and wetsuit rentals in Imsouane.
                </span>
              </div>
              <Link
                to="/surfboard-rental"
                className="landing-page-navlink4 button"
              >
                Book Now
              </Link>
            </div>
            <div className="landing-page-feature-card2">
              <div className="landing-page-container04">
                <img
                  alt="image"
                  src="/seminar-1500h.png"
                  className="landing-page-image1"
                />
                <h2 className="landing-page-text17">Surf Classes</h2>
                <span className="landing-page-text18">
                  Discover the thrill of riding the waves in Imsouane with our
                  exciting surf classes, designed to make you a surf pro in no
                  time!
                </span>
              </div>
              <button type="button" className="landing-page-button button">
                Coming Soon
              </button>
            </div>
            <div className="landing-page-feature-card3">
              <div className="landing-page-container05">
                <img
                  alt="image"
                  src="/tripod-1500h.png"
                  className="landing-page-image2"
                />
                <h2 className="landing-page-text19"> Photography</h2>
                <span className="landing-page-text20">
                  Capture the thrill of every wave with our surf photography
                  service, where every click is a ride worth remembering.
                </span>
              </div>
              <button type="button" className="landing-page-button1 button">
                Coming Soon
              </button>
            </div>
          </div>
        </div>
        <div className="landing-page-blog">
          <div className="landing-page-container06">
            <div className="landing-page-blog-post-card">
              <img
                alt="Imsouane"
                src="https://images.unsplash.com/photo-1533813857885-4bfd57de64e4?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGltc291YW5lfGVufDB8fHx8MTY5NTM5OTg3M3ww&amp;ixlib=rb-4.0.3&amp;w=1500"
                image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
                className="landing-page-image3"
              />
              <div className="landing-page-container07">
                <div className="landing-page-container08">
                  <span className="landing-page-text21">GUIDES</span>
                </div>
                <h1 className="landing-page-text22">
                  The Ultimate Guide to Surfing in Morocco
                </h1>
                <span className="landing-page-text23">
                  Morocco, with its stunning coastline and world-class waves,
                  has become a premier destination for surfers from around the
                  globe. From the famous right-hand point breaks to
                  beginner-frien...
                </span>
                <div className="landing-page-container09">
                  <div className="landing-page-profile"></div>
                  <Link
                    to="/imsouane-surf-guide"
                    className="landing-page-navlink5"
                  >
                    Read More -&gt;
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="landing-page-container10">
            <BlogPostCard2
              image_src="https://images.unsplash.com/photo-1595565312451-23051ab0666c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1000"
              profile_src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName"
            ></BlogPostCard2>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default LandingPage
