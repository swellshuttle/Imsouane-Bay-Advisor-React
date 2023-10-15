import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import SolidButton from '../components/solid-button'
import Footer from '../components/footer'
import './surfboard-rental.css'

const SurfboardRental = (props) => {
  return (
    <div className="surfboard-rental-container">
      <Helmet>
        <title>Surfboard-Rental - Imsouane Bay Advisor</title>
        <meta
          property="og:title"
          content="Surfboard-Rental - Imsouane Bay Advisor"
        />
      </Helmet>
      <div className="surfboard-rental-top-container">
        <nav data-role="Header" className="surfboard-rental-navbar">
          <Link to="/" className="surfboard-rental-navlink">
            <h1 className="surfboard-rental-logo">
              <span className="surfboard-rental-text">Swell</span>
              <span>
                Shuttle
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="surfboard-rental-text02">Morocco</span>
            </h1>
          </Link>
          <h1 className="surfboard-rental-logo1">
            <span className="surfboard-rental-text03">Swell</span>
            <span>
              Shuttle
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="surfboard-rental-text05">Morocco</span>
          </h1>
          <div className="surfboard-rental-right-side">
            <div className="surfboard-rental-links-container">
              <Link to="/" className="surfboard-rental-home">
                Home
              </Link>
              <Link to="/imsouane-taxi" className="surfboard-rental-taxi">
                Taxi
              </Link>
              <Link to="/surfboard-rental" className="surfboard-rental-taxi1">
                Surfboard Rental
              </Link>
              <span className="surfboard-rental-about">About</span>
            </div>
          </div>
          <div data-role="BurgerMenu" className="surfboard-rental-burger-menu">
            <svg
              viewBox="0 0 1024 1024"
              className="surfboard-rental-burger-menu"
            >
              <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="surfboard-rental-mobile-menu">
            <div className="surfboard-rental-nav">
              <div className="surfboard-rental-top">
                <h1>Travel</h1>
                <div
                  data-role="CloseMobileMenu"
                  className="surfboard-rental-close-menu"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="surfboard-rental-icon03"
                  >
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="surfboard-rental-right-side1">
                <div className="surfboard-rental-links-container1">
                  <Link to="/" className="surfboard-rental-navlink1">
                    Home
                  </Link>
                  <Link
                    to="/imsouane-taxi"
                    className="surfboard-rental-navlink2"
                  >
                    Taxi
                  </Link>
                  <Link
                    to="/surfboard-rental"
                    className="surfboard-rental-navlink3"
                  >
                    Surfboard Rentals
                  </Link>
                  <span className="surfboard-rental-text06">About</span>
                </div>
                <SolidButton button="Explore places"></SolidButton>
              </div>
            </div>
            <div className="surfboard-rental-follow-container">
              <span className="surfboard-rental-text07">
                Follow us on
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <div className="surfboard-rental-icons-container">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="surfboard-rental-link"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="surfboard-rental-icon05"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="surfboard-rental-link1"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="surfboard-rental-icon07"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="surfboard-rental-link2"
                >
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="surfboard-rental-icon09"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className="surfboard-rental-container01">
          <div className="surfboard-rental-container02">
            <div className="surfboard-rental-container03">
              <div className="surfboard-rental-container04">
                <h1 className="surfboard-rental-text08">
                  Surfboard Rentals in Imsouane
                </h1>
                <span className="surfboard-rental-text09">
                  <span className="surfboard-rental-text10">
                    Pass:
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="surfboard-rental-text11">all-day pass</span>
                  <br></br>
                  <br></br>
                  <span>Wetsuit included!</span>
                  <br></br>
                  <br></br>
                  <span className="surfboard-rental-text17">Change:</span>
                  <span> Unlimited</span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
          <div className="surfboard-rental-booking-widget">
            <div className="surfboard-rental-container05">
              <div className="surfboard-rental-container06">
                <Script
                  html={`<script defer="" type="text/javascript" src="https://imsouanebayadvisor.rezdy.com/pluginJs"></script>
                <iframe seamless="" width="300px" height="1000px" frameborder="0" class="rezdy" src="https://imsouanebayadvisor.rezdy.com/calendarWidget/597069?iframe=true"></iframe>`}
                ></Script>
              </div>
            </div>
          </div>
        </div>
        <div className="surfboard-rental-container07">
          <div className="surfboard-rental-container08">
            <div className="surfboard-rental-container09">
              <div className="surfboard-rental-container10">
                <h1 className="surfboard-rental-text20">
                  Surfboard Rentals in Imsouane
                </h1>
                <span className="surfboard-rental-text21">
                  <span className="surfboard-rental-text22">
                    Pass:
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="surfboard-rental-text23">all-day pass</span>
                  <br></br>
                  <br></br>
                  <span>Wetsuit included!</span>
                  <br></br>
                  <br></br>
                  <span className="surfboard-rental-text29">Change:</span>
                  <span> Unlimited</span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
          <div className="surfboard-rental-booking-widget1">
            <div className="surfboard-rental-container11">
              <div className="surfboard-rental-container12">
                <Script
                  html={`<script defer="" type="text/javascript" src="https://imsouanebayadvisor.rezdy.com/pluginJs"></script>
                <iframe seamless="" width="300px" height="1000px" frameborder="0" class="rezdy" src="https://imsouanebayadvisor.rezdy.com/calendarWidget/597069?iframe=true"></iframe>`}
                ></Script>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="surfboard-rental-container13">
        <div className="surfboard-rental-hero">
          <div className="surfboard-rental-container14">
            <div className="surfboard-rental-container15">
              <div className="surfboard-rental-steps">
                <div className="surfboard-rental-container16">
                  <div className="surfboard-rental-container17">
                    <div className="surfboard-rental-step">
                      <svg
                        viewBox="0 0 586.8251428571429 1024"
                        className="surfboard-rental-icon11"
                      >
                        <path d="M581.714 344.571c-6.286 13.143-18.857 21.143-33.143 21.143h-109.714v493.714c0 10.286-8 18.286-18.286 18.286h-402.286c-6.857 0-13.714-4-16.571-10.286-2.857-6.857-2.286-14.286 2.286-20l91.429-109.714c3.429-4 9.143-6.286 14.286-6.286h182.857v-365.714h-109.714c-14.286 0-26.857-8-33.143-21.143-5.714-12.571-4-28 5.143-38.857l182.857-219.429c13.714-16.571 42.286-16.571 56 0l182.857 219.429c9.143 10.857 11.429 26.286 5.143 38.857z"></path>
                      </svg>
                      <h1 className="surfboard-rental-text32">Skill level</h1>
                      <span className="surfboard-rental-text33">
                        <span>
                          From softboards, to hard tops and shortboards, we have
                          options to suit every level.
                        </span>
                        <br></br>
                      </span>
                    </div>
                    <div className="surfboard-rental-step1">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="surfboard-rental-icon13"
                      >
                        <path d="M1024 676.571v109.714c0 9.714-8.571 18.286-18.286 18.286h-786.286v109.714c0 9.714-8 18.286-18.286 18.286-5.143 0-9.714-2.286-13.714-5.714l-182.286-182.857c-3.429-3.429-5.143-8-5.143-12.571 0-5.143 1.714-9.714 5.143-13.143l182.857-182.857c3.429-3.429 8.571-5.143 13.143-5.143 9.714 0 18.286 8 18.286 18.286v109.714h786.286c9.714 0 18.286 8 18.286 18.286zM1024 365.714c0 4.571-1.714 9.714-5.143 13.143l-182.857 182.857c-3.429 3.429-8.571 5.143-13.143 5.143-9.714 0-18.286-8.571-18.286-18.286v-109.714h-786.286c-9.714 0-18.286-8.571-18.286-18.286v-109.714c0-9.714 8.571-18.286 18.286-18.286h786.286v-109.714c0-10.286 8-18.286 18.286-18.286 5.143 0 9.714 2.286 13.714 5.714l182.286 182.286c3.429 3.429 5.143 8.571 5.143 13.143z"></path>
                      </svg>
                      <h1 className="surfboard-rental-text36">
                        Unlimited board change
                      </h1>
                      <span className="surfboard-rental-text37">
                        <span>
                          Start with a shortboard for the big swells of
                          Cathedral, and switch to a longboard for a mellow
                          afternoon ride in the bay. change boards as much as
                          you want in a day!
                        </span>
                        <br></br>
                      </span>
                    </div>
                  </div>
                  <div className="surfboard-rental-container18">
                    <div className="surfboard-rental-step2">
                      <svg
                        viewBox="0 0 877.7142857142857 1024"
                        className="surfboard-rental-icon15"
                      >
                        <path d="M530.286 774.857v-409.143h-182.857v409.143c0 20 16.571 29.714 36.571 29.714h109.714c20 0 36.571-9.714 36.571-29.714zM269.714 292.571h111.429l-72-92c-6.286-7.429-20-17.714-39.429-17.714-30.286 0-54.857 24.571-54.857 54.857s24.571 54.857 54.857 54.857zM662.857 237.714c0-30.286-24.571-54.857-54.857-54.857-19.429 0-33.143 10.286-39.429 17.714l-71.429 92h110.857c30.286 0 54.857-24.571 54.857-54.857zM877.714 384v182.857c0 10.286-8 18.286-18.286 18.286h-54.857v237.714c0 30.286-24.571 54.857-54.857 54.857h-621.714c-30.286 0-54.857-24.571-54.857-54.857v-237.714h-54.857c-10.286 0-18.286-8-18.286-18.286v-182.857c0-10.286 8-18.286 18.286-18.286h251.429c-70.857 0-128-57.143-128-128s57.143-128 128-128c38.286 0 73.714 16 96 44l73.143 94.286 73.143-94.286c22.286-28 57.714-44 96-44 70.857 0 128 57.143 128 128s-57.143 128-128 128h251.429c10.286 0 18.286 8 18.286 18.286z"></path>
                      </svg>
                      <h1 className="surfboard-rental-text40">
                        Wetsuit included
                      </h1>
                      <span className="surfboard-rental-text41">
                        <span>
                          Our inventory covers all sizes and body types. You
                          just focus on catching waves!
                        </span>
                        <br></br>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <span className="surfboard-rental-text44">
                <span>
                  Are you ready to experience the thrill of Imsouane&apos;s
                  legendary waves? Our surfboard + wetsuit rental service is
                  your passport to an unforgettable surf adventure. Whether
                  you&apos;re a seasoned pro or a first-time surfer, we&apos;ve
                  got you covered with the best equipment in town.
                </span>
                <br></br>
                <br></br>
                <span>Unlimited Board Swaps</span>
                <br></br>
                <span>
                  With us, you&apos;re not locked into a single board for the
                  day. Enjoy the freedom to switch boards as often as the waves
                  change. Start your morning with a shortboard at Imsouane
                  Cathedral, ride the mellower waves at Imsouane Bay with a
                  longboard in the afternoon, and then switch to a fishtail for
                  the Cathedral&apos;s evening swell. It&apos;s all included in
                  your full-day pass, no questions asked.
                </span>
                <br></br>
                <br></br>
                <span>Wetsuit Included</span>
                <br></br>
                <span>
                  Stay comfortable and warm in Imsouane&apos;s waters with our
                  complimentary wetsuit. Our wetsuits are designed to keep you
                  cozy while allowing maximum flexibility, ensuring you can ride
                  those waves with ease.
                </span>
                <br></br>
                <br></br>
                <span>High-Quality Torqway Boards</span>
                <br></br>
                <span>
                  We take your surf experience seriously, which is why we
                  provide only the best. Our high-quality Torqway boards are
                  known for their performance, stability, and responsiveness.
                  Whether you&apos;re carving turns, paddling out, or hanging
                  ten, these boards are your trusty companions for a day of epic
                  surfing.
                </span>
                <br></br>
                <br></br>
                <span>
                  Don&apos;t miss out on the chance to conquer Imsouane&apos;s
                  waves with the finest gear at your disposal. Grab your Full
                  Day Pass today for just $12 and get ready to ride the surf
                  like a pro. It&apos;s time to make some unforgettable memories
                  in Imsouane!
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="surfboard-rental-container19">
          <h1 className="surfboard-rental-text64">You may also like</h1>
          <div className="surfboard-rental-container20">
            <div className="surfboard-rental-blog-post-card">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1517702669-ebedf5190943?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxzdXJmfGVufDB8fHx8MTY5NTQ3ODAzN3ww&amp;ixlib=rb-4.0.3&amp;w=1400"
                className="surfboard-rental-image"
              />
              <div className="surfboard-rental-container21">
                <span className="surfboard-rental-text65">
                  Surf Classes in Imsouane
                </span>
                <span className="surfboard-rental-text66">
                  Whether you&apos;re a pro, or never surfed before. We&apos;ll
                  get you surfing bigger waves!
                </span>
                <Link
                  to="/imsouane-taxi"
                  className="surfboard-rental-navlink4 button"
                >
                  Book Now
                </Link>
              </div>
            </div>
            <div className="surfboard-rental-blog-post-card1">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1621433213916-fde39d28e016?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxzdXJmYm9hcmR8ZW58MHx8fHwxNjk1NDc4MzQ4fDA&amp;ixlib=rb-4.0.3&amp;w=1400"
                className="surfboard-rental-image1"
              />
              <div className="surfboard-rental-container22">
                <span className="surfboard-rental-text67">
                  Imsouane Surfboard rentals
                </span>
                <span className="surfboard-rental-text68">
                  Experience the waves like a pro with our top-quality surfboard
                  and wetsuit rentals in Imsouane.
                </span>
                <Link
                  to="/surfboard-rental"
                  className="surfboard-rental-navlink5 button"
                >
                  Book Now
                </Link>
              </div>
            </div>
            <div className="surfboard-rental-blog-post-card2">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDV8fFBob3RvZ3JhcGh5fGVufDB8fHx8MTY5NTQ3ODQ3N3ww&amp;ixlib=rb-4.0.3&amp;w=1400"
                className="surfboard-rental-image2"
              />
              <div className="surfboard-rental-container23">
                <span className="surfboard-rental-text69">
                  Imsouane Surf Photography
                </span>
                <span className="surfboard-rental-text70">
                  Our professional photographers will take stunning photos of
                  you riding the waves. 
                </span>
                <Link
                  to="/imsouane-taxi"
                  className="surfboard-rental-navlink6 button"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default SurfboardRental
