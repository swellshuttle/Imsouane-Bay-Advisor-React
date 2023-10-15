import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import SolidButton from '../components/solid-button'
import Footer from '../components/footer'
import './imsouane-taxi.css'

const ImsouaneTaxi = (props) => {
  return (
    <div className="imsouane-taxi-container">
      <Helmet>
        <title>Imsouane-Taxi - Imsouane Bay Advisor</title>
        <meta
          property="og:title"
          content="Imsouane-Taxi - Imsouane Bay Advisor"
        />
      </Helmet>
      <div className="imsouane-taxi-top-container">
        <nav data-role="Header" className="imsouane-taxi-navbar">
          <Link to="/imsouane-taxi" className="imsouane-taxi-navlink">
            <h1 className="imsouane-taxi-logo">
              <span className="imsouane-taxi-text">Swell</span>
              <span>
                Shuttle
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="imsouane-taxi-text02">Morocco</span>
            </h1>
          </Link>
          <Link to="/" className="imsouane-taxi-navlink01">
            <h1 className="imsouane-taxi-logo1">
              <span className="imsouane-taxi-text03">Swell</span>
              <span>
                Shuttle
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="imsouane-taxi-text05">Morocco</span>
            </h1>
          </Link>
          <div className="imsouane-taxi-right-side">
            <div className="imsouane-taxi-links-container">
              <Link to="/" className="imsouane-taxi-home">
                Home
              </Link>
              <Link to="/imsouane-taxi" className="imsouane-taxi-taxi">
                Taxi
              </Link>
              <Link to="/surfboard-rental" className="imsouane-taxi-taxi1">
                Surfboard Rental
              </Link>
              <span className="imsouane-taxi-about">About</span>
            </div>
          </div>
          <div data-role="BurgerMenu" className="imsouane-taxi-burger-menu">
            <svg viewBox="0 0 1024 1024" className="imsouane-taxi-burger-menu">
              <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="imsouane-taxi-mobile-menu">
            <div className="imsouane-taxi-nav">
              <div className="imsouane-taxi-top">
                <h1>Travel</h1>
                <div
                  data-role="CloseMobileMenu"
                  className="imsouane-taxi-close-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="imsouane-taxi-icon03">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="imsouane-taxi-right-side1">
                <div className="imsouane-taxi-links-container1">
                  <Link to="/" className="imsouane-taxi-navlink02">
                    Home
                  </Link>
                  <Link to="/imsouane-taxi" className="imsouane-taxi-navlink03">
                    Taxi
                  </Link>
                  <Link
                    to="/surfboard-rental"
                    className="imsouane-taxi-navlink04"
                  >
                    Surfboard Rentals
                  </Link>
                  <span className="imsouane-taxi-text06">About</span>
                </div>
                <SolidButton button="Explore places"></SolidButton>
              </div>
            </div>
            <div className="imsouane-taxi-follow-container">
              <span className="imsouane-taxi-text07">
                Follow us on
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <div className="imsouane-taxi-icons-container">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="imsouane-taxi-link"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="imsouane-taxi-icon05"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="imsouane-taxi-link1"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="imsouane-taxi-icon07"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="imsouane-taxi-link2"
                >
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="imsouane-taxi-icon09"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className="imsouane-taxi-container01">
          <div className="imsouane-taxi-container02">
            <div className="imsouane-taxi-container03">
              <div className="imsouane-taxi-container04">
                <h1 className="imsouane-taxi-text08">Book a private taxi</h1>
                <span className="imsouane-taxi-text09">
                  <span className="imsouane-taxi-text10">
                    Car:
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    Dacia Lodgy
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="imsouane-taxi-text12">(or equivelant)</span>
                  <br></br>
                  <br></br>
                  <span className="imsouane-taxi-text15">Max Capacity:</span>
                  <span> 6 passengers + luggage</span>
                  <br></br>
                  <br></br>
                  <span className="imsouane-taxi-text19">AC:</span>
                  <span> Yes</span>
                  <br></br>
                  <span className="imsouane-taxi-text22">Heating:</span>
                  <span> Yes</span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
          <div className="imsouane-taxi-booking-widget">
            <div className="imsouane-taxi-container05">
              <div className="imsouane-taxi-container06">
                <Script
                  html={`<script defer="" type="text/javascript" src="https://imsouanebayadvisor.rezdy.com/pluginJs"></script>
                <iframe seamless="" width="300px" height="1000px" frameborder="0" class="rezdy" src="https://imsouanebayadvisor.rezdy.com/transferWidget?catalogId=542948&iframe=true"></iframe>`}
                ></Script>
              </div>
            </div>
          </div>
        </div>
        <div className="imsouane-taxi-container07">
          <div className="imsouane-taxi-container08">
            <div className="imsouane-taxi-container09">
              <div className="imsouane-taxi-container10">
                <h1 className="imsouane-taxi-text25">Book a private taxi</h1>
                <span className="imsouane-taxi-text26">
                  <span className="imsouane-taxi-text27">
                    Car:
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    Dacia Lodgy
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="imsouane-taxi-text29">(or equivelant)</span>
                  <br></br>
                  <br></br>
                  <span className="imsouane-taxi-text32">Max Capacity:</span>
                  <span> 6 passengers + luggage</span>
                  <br></br>
                  <br></br>
                  <span className="imsouane-taxi-text36">AC:</span>
                  <span> Yes</span>
                  <br></br>
                  <span className="imsouane-taxi-text39">Heating:</span>
                  <span> Yes</span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
          <div className="imsouane-taxi-booking-widget1">
            <div className="imsouane-taxi-container11">
              <div className="imsouane-taxi-container12">
                <Script
                  html={`<script defer="" type="text/javascript" src="https://imsouanebayadvisor.rezdy.com/pluginJs"></script>
                <iframe seamless="" width="300px" height="1000px" frameborder="0" class="rezdy" src="https://imsouanebayadvisor.rezdy.com/transferWidget?catalogId=542948&iframe=true"></iframe>`}
                ></Script>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="imsouane-taxi-container13">
        <div className="imsouane-taxi-hero">
          <div className="imsouane-taxi-container14">
            <div className="imsouane-taxi-container15">
              <div className="imsouane-taxi-steps">
                <h1 className="imsouane-taxi-text42">How it works</h1>
                <div className="imsouane-taxi-container16">
                  <div className="imsouane-taxi-container17">
                    <div className="imsouane-taxi-step">
                      <h1 className="imsouane-taxi-text43">
                        <span>1</span>
                      </h1>
                      <h1 className="imsouane-taxi-text45">Booking</h1>
                      <span className="imsouane-taxi-text46">
                        <span>
                          We only charge a deposit, the rest is settled in cash
                          on the day of the trip
                        </span>
                        <br></br>
                      </span>
                    </div>
                    <div className="imsouane-taxi-step1">
                      <h1 className="imsouane-taxi-text49">
                        <span>2</span>
                      </h1>
                      <h1 className="imsouane-taxi-text51">Confirmation</h1>
                      <span className="imsouane-taxi-text52">
                        <span>
                          We will confirm your booking with the taxi driver, and
                          you&apos;ll receive a confirmation email
                        </span>
                        <br></br>
                      </span>
                    </div>
                  </div>
                  <div className="imsouane-taxi-container18">
                    <div className="imsouane-taxi-step2">
                      <h1 className="imsouane-taxi-text55">
                        <span>3</span>
                      </h1>
                      <h1 className="imsouane-taxi-text57">Pick-up</h1>
                      <span className="imsouane-taxi-text58">
                        <span>
                          Meet with your taxi at the specified time and
                          location. We will provide you with their contact
                          information.
                        </span>
                        <br></br>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <span className="imsouane-taxi-text61">
                <span>
                  Booking your ride is quick and hassle-free, allowing you to
                  focus on what matters most - catching those waves! Plus, with
                  competitive fares, you can enjoy affordable transportation
                  without breaking the bank.
                </span>
                <br></br>
                <br></br>
                <br></br>
                <span>
                  To book a taxi, simply pay 20% online to secure your
                  reservation. Pay the rest in cash on the day of your trip. If
                  you need a taxi within 12 hours, message us on WhatsApp to
                  check availability.
                </span>
                <br></br>
                <br></br>
                <span>
                  Our taxis are comfy and air-conditioned, with room for up to
                  six passengers with their luggage. Our friendly drivers will
                  get you there safely and on time. If you need a bigger vehicle
                  or a special route, just ask for a quote.
                </span>
                <br></br>
                <br></br>
                <span>
                  We accept payment in USD, Euros or Moroccan Dirham at an
                  exchange rate of 1 Euro / USD = 10 dirhams to keep things
                  simple, alternatively, you can exchange at the airport to get
                  an accurate price.
                </span>
                <br></br>
                <br></br>
                <span>
                  For hotel pickups, your driver will meet you in the lobby. If
                  your place isn&apos;t car-accessible, we&apos;ll coordinate a
                  meeting point on WhatsApp.
                </span>
                <br></br>
                <br></br>
                <span>
                  At the airport, your driver will be in the arrivals area with
                  a sign. If you have any issues, WhatsApp us; there&apos;s free
                  airport WiFi.
                </span>
                <br></br>
                <br></br>
                <span>
                  To handle flight delays, please include your flight number
                  when booking. If your flight&apos;s delayed by over an hour,
                  we may need to send a different driver.
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="imsouane-taxi-container19">
          <h1 className="imsouane-taxi-text82">You may also like</h1>
          <div className="imsouane-taxi-container20">
            <div className="imsouane-taxi-blog-post-card">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1517702669-ebedf5190943?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxzdXJmfGVufDB8fHx8MTY5NTQ3ODAzN3ww&amp;ixlib=rb-4.0.3&amp;h=300"
                className="imsouane-taxi-image"
              />
              <div className="imsouane-taxi-container21">
                <span className="imsouane-taxi-text83">
                  Surf Classes in Imsouane
                </span>
                <span className="imsouane-taxi-text84">
                  Whether you&apos;re a pro, or never surfed before. We&apos;ll
                  get you surfing bigger waves!
                </span>
                <Link
                  to="/imsouane-taxi"
                  className="imsouane-taxi-navlink05 button"
                >
                  Book Now
                </Link>
              </div>
            </div>
            <div className="imsouane-taxi-blog-post-card1">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1621433213916-fde39d28e016?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxzdXJmYm9hcmR8ZW58MHx8fHwxNjk1NDc4MzQ4fDA&amp;ixlib=rb-4.0.3&amp;h=300"
                className="imsouane-taxi-image1"
              />
              <div className="imsouane-taxi-container22">
                <span className="imsouane-taxi-text85">
                  Imsouane Surfboard rentals
                </span>
                <span className="imsouane-taxi-text86">
                  Experience the waves like a pro with our top-quality surfboard
                  and wetsuit rentals in Imsouane.
                </span>
                <Link
                  to="/imsouane-taxi"
                  className="imsouane-taxi-navlink06 button"
                >
                  Book Now
                </Link>
              </div>
            </div>
            <div className="imsouane-taxi-blog-post-card2">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDV8fFBob3RvZ3JhcGh5fGVufDB8fHx8MTY5NTQ3ODQ3N3ww&amp;ixlib=rb-4.0.3&amp;h=300"
                className="imsouane-taxi-image2"
              />
              <div className="imsouane-taxi-container23">
                <span className="imsouane-taxi-text87">
                  Imsouane Surf Photography
                </span>
                <span className="imsouane-taxi-text88">
                  Our professional photographers will take stunning photos of
                  you riding the waves. 
                </span>
                <Link
                  to="/imsouane-taxi"
                  className="imsouane-taxi-navlink07 button"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="imsouane-taxi-container24">
        <div className="imsouane-taxi-container25">
          <h1 className="imsouane-taxi-text89">You may also like</h1>
          <div className="imsouane-taxi-container26">
            <div className="imsouane-taxi-blog-post-card3">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1517702669-ebedf5190943?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxzdXJmfGVufDB8fHx8MTY5NTQ3ODAzN3ww&amp;ixlib=rb-4.0.3&amp;h=300"
                className="imsouane-taxi-image3"
              />
              <div className="imsouane-taxi-container27">
                <span className="imsouane-taxi-text90">
                  Surf Classes in Imsouane
                </span>
                <span className="imsouane-taxi-text91">
                  Whether you&apos;re a pro, or never surfed before. We&apos;ll
                  get you surfing bigger waves!
                </span>
                <Link
                  to="/surfboard-rental"
                  className="imsouane-taxi-navlink08 button"
                >
                  Book Now
                </Link>
              </div>
            </div>
            <div className="imsouane-taxi-blog-post-card4">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1621433213916-fde39d28e016?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxzdXJmYm9hcmR8ZW58MHx8fHwxNjk1NDc4MzQ4fDA&amp;ixlib=rb-4.0.3&amp;h=300"
                className="imsouane-taxi-image4"
              />
              <div className="imsouane-taxi-container28">
                <span className="imsouane-taxi-text92">
                  Imsouane Surfboard rentals
                </span>
                <span className="imsouane-taxi-text93">
                  Experience the waves like a pro with our top-quality surfboard
                  and wetsuit rentals in Imsouane.
                </span>
                <Link
                  to="/surfboard-rental"
                  className="imsouane-taxi-navlink09 button"
                >
                  Book Now
                </Link>
              </div>
            </div>
            <div className="imsouane-taxi-blog-post-card5">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDV8fFBob3RvZ3JhcGh5fGVufDB8fHx8MTY5NTQ3ODQ3N3ww&amp;ixlib=rb-4.0.3&amp;h=300"
                className="imsouane-taxi-image5"
              />
              <div className="imsouane-taxi-container29">
                <span className="imsouane-taxi-text94">
                  Imsouane Surf Photography
                </span>
                <span className="imsouane-taxi-text95">
                  Our professional photographers will take stunning photos of
                  you riding the waves. 
                </span>
                <Link
                  to="/imsouane-taxi"
                  className="imsouane-taxi-navlink10 button"
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

export default ImsouaneTaxi
