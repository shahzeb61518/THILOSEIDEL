import React, { Component } from 'react'
import './dashboard.css'

class ProductsList extends Component {
  constructor (props) {
    super()
    this.state = {
      activeTab: 'home'
    }
  }

  componentDidMount () {}

  render () {
    return (
      <React.Fragment>
        <div>
          {/* ======= Top Bar ======= */}

          {/* ======= Header ======= */}
          <header
            id='header'
            className='fixed-top d-flex align-items-cente header-scrolled'
          >
            <div className='container-fluid container-xl d-flex align-items-center justify-content-lg-between'>
              <h1 className='logo me-auto me-lg-0'>
                <a href='index.html'>THILOSEIDEL</a>
              </h1>
              {/* Uncomment below if you prefer to use an image logo */}
              {/* <a href="index.html" class="logo me-auto me-lg-0"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
              <nav id='navbar' className='navbar order-last order-lg-0'>
                <ul>
                  <li
                    onClick={() => {
                      this.setState({
                        activeTab: 'home'
                      })
                    }}
                  >
                    <a
                      className={
                        this.state.activeTab === 'home'
                          ? 'nav-link scrollto  active'
                          : 'nav-link scrollto '
                      }
                      href='#hero'
                    >
                      Home
                    </a>
                  </li>
                  <li
                    onClick={() => {
                      this.setState({
                        activeTab: 'about'
                      })
                    }}
                  >
                    <a
                      className={
                        this.state.activeTab === 'about'
                          ? 'nav-link scrollto active'
                          : 'nav-link scrollto '
                      }
                      href='#events'
                    >
                      About
                    </a>
                  </li>
                  <li
                    onClick={() => {
                      this.setState({
                        activeTab: 'shop'
                      })
                    }}
                  >
                    <a
                      className={
                        this.state.activeTab === 'shop'
                          ? 'nav-link scrollto  active'
                          : 'nav-link scrollto '
                      }
                      href='#menu'
                    >
                      Shop
                    </a>
                  </li>
                  <li
                    onClick={() => {
                      this.setState({
                        activeTab: 'work'
                      })
                    }}
                  >
                    <a
                      className={
                        this.state.activeTab === 'work'
                          ? 'nav-link scrollto active'
                          : 'nav-link scrollto '
                      }
                      href='#gallery'
                    >
                      Work
                    </a>
                  </li>

                  <li
                    onClick={() => {
                      this.setState({
                        activeTab: 'contact'
                      })
                    }}
                  >
                    <a
                      className={
                        this.state.activeTab === 'contact'
                          ? 'nav-link scrollto active'
                          : 'nav-link scrollto '
                      }
                      href='#contact'
                    >
                      Contact
                    </a>
                  </li>
                </ul>
                <i className='bi bi-list mobile-nav-toggle' />
              </nav>
              {/* .navbar */}
            </div>
          </header>
          {/* End Header */}
          {/* ======= Hero Section ======= */}
          <section id='hero' className='d-flex align-items-center'>
            <div
              className='container position-relative text-center text-lg-start aos-init aos-animate'
              data-aos='zoom-in'
              data-aos-delay={100}
            >
              <div className='row'>
                <div className='col-lg-8'>
                  <h1>
                    Welcome to <span>THILOSEIDEL</span>
                  </h1>
                  <h2>
                    Thilo Seidel is an Amsterdam/ Saarbrücken based Visual
                    Artist doing Video and Photography.
                  </h2>
                  <h2>
                    In his work he does not capture immediate moments, but
                    rather explores environments by questioning perceptions as
                    well as representations of realities.
                  </h2>
                </div>
                <div
                  className='col-lg-4 d-flex align-items-center justify-content-center position-relative aos-init aos-animate'
                  data-aos='zoom-in'
                  data-aos-delay={200}
                >
                  <a href='https://youtu.be' className='glightbox play-btn' />
                </div>
              </div>
            </div>
          </section>
          {/* End Hero */}
          <main id='main'>
            {/* ======= Events Section ======= */}
            <section id='events' className='events'>
              <div
                id='carouselExampleIndicators'
                class='carousel slide'
                data-bs-ride='carousel'
              >
                <div class='carousel-indicators'>
                  <button
                    type='button'
                    data-bs-target='#carouselExampleIndicators'
                    data-bs-slide-to='0'
                    class='active'
                    aria-current='true'
                    aria-label='Slide 1'
                  ></button>
                  <button
                    type='button'
                    data-bs-target='#carouselExampleIndicators'
                    data-bs-slide-to='1'
                    aria-label='Slide 2'
                  ></button>
                  <button
                    type='button'
                    data-bs-target='#carouselExampleIndicators'
                    data-bs-slide-to='2'
                    aria-label='Slide 3'
                  ></button>
                </div>
                <div class='carousel-inner'>
                  <div class='carousel-item active'>
                    <div className='row event-item'>
                      <div className='col-lg-6'>
                        <img
                          src='assets/img/event-birthday.jpg'
                          className='img-fluid'
                          alt=''
                        />
                      </div>
                      <div className='col-lg-6 pt-4 pt-lg-0 content'>
                        <h3>About</h3>
                        <div className='price'>
                          {/* <p>
                            <span>$189</span>
                          </p> */}
                        </div>
                        <p className='fst-italic'>
                          Thilo Seidel is an Amsterdam based Visual Artist doing
                          Video and Photography. In his work he does not capture
                          immediate moments, but rather explores environments by
                          questioning perceptions as well as representations of
                          realities. Recently Thilo got awarded with the Premio
                          Combat Price in Photography, Livorno, Italy.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class='carousel-item'>
                    <div className='row event-item'>
                      <div className='col-lg-6'>
                        <img
                          src='assets/img/event-private.jpg'
                          className='img-fluid'
                          alt=''
                        />
                      </div>
                      <div className='col-lg-6 pt-4 pt-lg-0 content'>
                        <h3>About</h3>
                        <div className='price'></div>
                        <p className='fst-italic'>
                          Thilo Seidel is an Amsterdam based Visual Artist doing
                          Video and Photography. In his work he does not capture
                          immediate moments, but rather explores environments by
                          questioning perceptions as well as representations of
                          realities. Recently Thilo got awarded with the Premio
                          Combat Price in Photography, Livorno, Italy.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class='carousel-item'>
                    <div className='row event-item'>
                      <div className='col-lg-6'>
                        <img
                          src='assets/img/event-custom.jpg'
                          className='img-fluid'
                          alt=''
                        />
                      </div>
                      <div className='col-lg-6 pt-4 pt-lg-0 content'>
                        <h3>About</h3>
                        <div className='price'></div>
                        <p className='fst-italic'>
                          Thilo Seidel is an Amsterdam based Visual Artist doing
                          Video and Photography. In his work he does not capture
                          immediate moments, but rather explores environments by
                          questioning perceptions as well as representations of
                          realities. Recently Thilo got awarded with the Premio
                          Combat Price in Photography, Livorno, Italy.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  class='carousel-control-prev'
                  type='button'
                  data-bs-target='#carouselExampleIndicators'
                  data-bs-slide='prev'
                >
                  <span
                    class='carousel-control-prev-icon'
                    aria-hidden='true'
                  ></span>
                  <span class='visually-hidden'>Previous</span>
                </button>
                <button
                  class='carousel-control-next'
                  type='button'
                  data-bs-target='#carouselExampleIndicators'
                  data-bs-slide='next'
                >
                  <span
                    class='carousel-control-next-icon'
                    aria-hidden='true'
                  ></span>
                  <span class='visually-hidden'>Next</span>
                </button>
              </div>
            </section>
            {/* End Events Section */}
            {/* ======= Why Us Section ======= */}
            <section id='why-us' className='why-us'   style={{ background: '#1a1814' }}>
              <div className='container aos-init' data-aos='fade-up'>
                <div className='section-title'>
                  <h2>Exhibitions</h2>
                  <p>Some Exhibitions</p>
                  <br />
                  <section
                    id='events'
                    className='events'
                    style={{ textAlign: 'center' }}
                  >
                    <div
                      id='carouselExampleIndicators3'
                      class='carousel slide'
                      data-bs-ride='carousel'
                    >
                      <div class='carousel-indicators'>
                        <button
                          type='button'
                          data-bs-target='#carouselExampleIndicators3'
                          data-bs-slide-to='0'
                          class='active'
                          aria-current='true'
                          aria-label='Slide 1'
                        ></button>
                        <button
                          type='button'
                          data-bs-target='#carouselExampleIndicators3'
                          data-bs-slide-to='1'
                          aria-label='Slide 2'
                        ></button>
                        <button
                          type='button'
                          data-bs-target='#carouselExampleIndicators3'
                          data-bs-slide-to='2'
                          aria-label='Slide 3'
                        ></button>
                        <button
                          type='button'
                          data-bs-target='#carouselExampleIndicators3'
                          data-bs-slide-to='3'
                          aria-label='Slide 4'
                        ></button>
                        <button
                          type='button'
                          data-bs-target='#carouselExampleIndicators3'
                          data-bs-slide-to='4'
                          aria-label='Slide 5'
                        ></button>
                        <button
                          type='button'
                          data-bs-target='#carouselExampleIndicators3'
                          data-bs-slide-to='5'
                          aria-label='Slide 6'
                        ></button>
                        <button
                          type='button'
                          data-bs-target='#carouselExampleIndicators3'
                          data-bs-slide-to='6'
                          aria-label='Slide 7'
                        ></button>
                        <button
                          type='button'
                          data-bs-target='#carouselExampleIndicators3'
                          data-bs-slide-to='7'
                          aria-label='Slide 8'
                        ></button>
                        <button
                          type='button'
                          data-bs-target='#carouselExampleIndicators3'
                          data-bs-slide-to='8'
                          aria-label='Slide 9'
                        ></button>
                        <button
                          type='button'
                          data-bs-target='#carouselExampleIndicators3'
                          data-bs-slide-to='9'
                          aria-label='Slide 10'
                        ></button>
                        <button
                          type='button'
                          data-bs-target='#carouselExampleIndicators3'
                          data-bs-slide-to='10'
                          aria-label='Slide 11'
                        ></button>
                        <button
                          type='button'
                          data-bs-target='#carouselExampleIndicators3'
                          data-bs-slide-to='11'
                          aria-label='Slide 12'
                        ></button>
                         <button
                          type='button'
                          data-bs-target='#carouselExampleIndicators3'
                          data-bs-slide-to='12'
                          aria-label='Slide 13'
                        ></button>
                         <button
                          type='button'
                          data-bs-target='#carouselExampleIndicators3'
                          data-bs-slide-to='13'
                          aria-label='Slide 14'
                        ></button>
                         <button
                          type='button'
                          data-bs-target='#carouselExampleIndicators3'
                          data-bs-slide-to='14'
                          aria-label='Slide 15'
                        ></button>
                         <button
                          type='button'
                          data-bs-target='#carouselExampleIndicators3'
                          data-bs-slide-to='15'
                          aria-label='Slide 16'
                        ></button>
                         <button
                          type='button'
                          data-bs-target='#carouselExampleIndicators3'
                          data-bs-slide-to='16'
                          aria-label='Slide 17'
                        ></button>
                         <button
                          type='button'
                          data-bs-target='#carouselExampleIndicators3'
                          data-bs-slide-to='17'
                          aria-label='Slide 18'
                        ></button>
                         <button
                          type='button'
                          data-bs-target='#carouselExampleIndicators3'
                          data-bs-slide-to='18'
                          aria-label='Slide 19'
                        ></button>
                       
                        
                      </div>
               
                      <div class='carousel-inner'>
                        <div class='carousel-item active'>
                          <div className='row event-item'>
                            <div
                              className='swiper-slide swiper-slide-active'
                              data-swiper-slide-index={3}
                              role='group'
                              aria-label='7 / 11'
                              style={{
                                height: '300px',
                                paddingLeft:'80px',paddingRight:'80px'
                              }}
                            >
                              <a
                                className='col-lg-4'
                                href='https://kuenstlerhaus-saar.de/regards-sans-limites-blicke-ohne-grenzen-eine-retrospektive-mit-foto-grafien-der-ehemaligen-preistraegerinnen-anne-'
                              >
                                <div
                                  className='box aos-init'
                                  data-aos='zoom-in'
                                  data-aos-delay={100}
                                >
                                  <span>01</span>
                                  <h4>
                                    2021 (upcoming) Observatoire Photographique
                                    du Grand-Est, GroupExhibition, Stadtgalerie
                                    Saarbrücken (DE)
                                  </h4>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class='carousel-item'>
                          <div className='row event-item'>
                            <div
                              className='swiper-slide swiper-slide-next'
                              data-swiper-slide-index={4}
                              role='group'
                              aria-label='8 / 11'
                              style={{
                                height: '300px',
                                paddingLeft:'80px',paddingRight:'80px'
                              }}
                            >
                              <a
                                className='col-lg-4 mt-4 mt-lg-0'
                                href='https://www.emoplux.lu/?p=5875'
                              >
                                <div
                                  className='box aos-init'
                                  data-aos='zoom-in'
                                  data-aos-delay={200}
                                >
                                  <span>02</span>
                                  <h4>
                                    2021 EMOP - European Month of Photography,
                                    Repenser le Paysage, Group exhibition, Abbey
                                    de Neumünster, Luxembourg (LUX)
                                  </h4>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class='carousel-item'>
                          <div className='row event-item'>
                            <div
                              className='swiper-slide swiper-slide-duplicate'
                              data-swiper-slide-index={0}
                              role='group'
                              aria-label='9 / 11'
                              style={{
                                height: '300px',
                                paddingLeft:'80px',paddingRight:'80px'
                              }}
                            >
                              <a
                                className='col-lg-4 mt-4 mt-lg-0'
                                href='https://www.museofattori.livorno.it/mostre-ed-eventi/premio-combat-2020-dal-10-fino-al-31-ottobre-ai-granai-e-al-museo-g-fattori-di-vil-la-mimbelli-e-al-sac/'
                              >
                                <div
                                  className='box aos-init'
                                  data-aos='zoom-in'
                                  data-aos-delay={300}
                                >
                                  <span>03</span>
                                  <h4>
                                    2020 Premio Combat Prize, GroupExhibition,
                                    Museo Civico Giovanni Fattori, Livorno (IT)
                                  </h4>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class='carousel-item'>
                          <div className='row event-item'>
                          <div
                              className='swiper-slide swiper-slide-duplicate'
                              data-swiper-slide-index={0}
                              role='group'
                              aria-label='9 / 11'
                              style={{
                                height: '300px',
                                paddingLeft:'80px',paddingRight:'80px'
                              }}
                            >
                              <a
                                className='col-lg-4 mt-4 mt-lg-0'
                                href='https://www.museofattori.livorno.it/mostre-ed-eventi/premio-combat-2020-dal-10-fino-al-31-ottobre-ai-granai-e-al-museo-g-fattori-di-vil-la-mimbelli-e-al-sac/'
                              >
                                <div
                                  className='box aos-init'
                                  data-aos='zoom-in'
                                  data-aos-delay={300}
                                >
                                  <span>04</span>
                                  <h4>
                                  2021 (upcoming) Observatoire Photographique du Grand-Est, Group-Exhibition, CCAM Scène Nationale Vandoeuvrelès-Nancy (FR)

                                  </h4>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class='carousel-item'>
                          <div className='row event-item'>
                          <div
                              className='swiper-slide swiper-slide-duplicate'
                              data-swiper-slide-index={0}
                              role='group'
                              aria-label='9 / 11'
                              style={{
                                height: '300px',
                                paddingLeft:'80px',paddingRight:'80px'
                              }}
                            >
                              <a
                                className='col-lg-4 mt-4 mt-lg-0'
                                href='https://www.museofattori.livorno.it/mostre-ed-eventi/premio-combat-2020-dal-10-fino-al-31-ottobre-ai-granai-e-al-museo-g-fattori-di-vil-la-mimbelli-e-al-sac/'
                              >
                                <div
                                  className='box aos-init'
                                  data-aos='zoom-in'
                                  data-aos-delay={300}
                                >
                                  <span>05</span>
                                  <h4>
                                  2020 Portals, Solo-Exhibition, Treehouse NDSM, Amsterdam (NL)

                                  </h4>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class='carousel-item'>
                          <div className='row event-item'>
                          <div
                              className='swiper-slide swiper-slide-duplicate'
                              data-swiper-slide-index={0}
                              role='group'
                              aria-label='9 / 11'
                              style={{
                                height: '300px',
                                paddingLeft:'80px',paddingRight:'80px'
                              }}
                            >
                              <a
                                className='col-lg-4 mt-4 mt-lg-0'
                                href='https://www.museofattori.livorno.it/mostre-ed-eventi/premio-combat-2020-dal-10-fino-al-31-ottobre-ai-granai-e-al-museo-g-fattori-di-vil-la-mimbelli-e-al-sac/'
                              >
                                <div
                                  className='box aos-init'
                                  data-aos='zoom-in'
                                  data-aos-delay={300}
                                >
                                  <span>06</span>
                                  <h4>
                                  2019 Regards Sans Limites, Trio-Exhibition, CCAM Scène Nationale Vandoeuvre-lès-Nancy (FR)

                                  </h4>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class='carousel-item'>
                          <div className='row event-item'>
                          <div
                              className='swiper-slide swiper-slide-duplicate'
                              data-swiper-slide-index={0}
                              role='group'
                              aria-label='9 / 11'
                              style={{
                                height: '300px',
                                paddingLeft:'80px',paddingRight:'80px'
                              }}
                            >
                              <a
                                className='col-lg-4 mt-4 mt-lg-0'
                                href='https://www.museofattori.livorno.it/mostre-ed-eventi/premio-combat-2020-dal-10-fino-al-31-ottobre-ai-granai-e-al-museo-g-fattori-di-vil-la-mimbelli-e-al-sac/'
                              >
                                <div
                                  className='box aos-init'
                                  data-aos='zoom-in'
                                  data-aos-delay={300}
                                >
                                  <span>07</span>
                                  <h4>
                                  2019 Regards Sans Limites, Trio-Exhibition, Saarländisches Künstlerhaus, Saarbrücken (GER)

                                  </h4>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class='carousel-item'>
                          <div className='row event-item'>
                          <div
                              className='swiper-slide swiper-slide-duplicate'
                              data-swiper-slide-index={0}
                              role='group'
                              aria-label='9 / 11'
                              style={{
                                height: '300px',
                                paddingLeft:'80px',paddingRight:'80px'
                              }}
                            >
                              <a
                                className='col-lg-4 mt-4 mt-lg-0'
                                href='https://www.museofattori.livorno.it/mostre-ed-eventi/premio-combat-2020-dal-10-fino-al-31-ottobre-ai-granai-e-al-museo-g-fattori-di-vil-la-mimbelli-e-al-sac/'
                              >
                                <div
                                  className='box aos-init'
                                  data-aos='zoom-in'
                                  data-aos-delay={300}
                                >
                                  <span>08</span>
                                  <h4>
                                  2019 EMOP - European Month of Photography, group exhibition, Abbey de Neumünster, Luxembourg (LUX)

                                  </h4>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class='carousel-item'>
                          <div className='row event-item'>
                          <div
                              className='swiper-slide swiper-slide-duplicate'
                              data-swiper-slide-index={0}
                              role='group'
                              aria-label='9 / 11'
                              style={{
                                height: '300px',
                                paddingLeft:'80px',paddingRight:'80px'
                              }}
                            >
                              <a
                                className='col-lg-4 mt-4 mt-lg-0'
                                href='https://www.museofattori.livorno.it/mostre-ed-eventi/premio-combat-2020-dal-10-fino-al-31-ottobre-ai-granai-e-al-museo-g-fattori-di-vil-la-mimbelli-e-al-sac/'
                              >
                                <div
                                  className='box aos-init'
                                  data-aos='zoom-in'
                                  data-aos-delay={300}
                                >
                                  <span>09</span>
                                  <h4>
                                  2018 Tender Kissing Leads To Some Rough Assfucking Stuff, Trio-exhibition, Stadtgallerie Saarbrücken (GER)

                                  </h4>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class='carousel-item'>
                          <div className='row event-item'>
                          <div
                              className='swiper-slide swiper-slide-duplicate'
                              data-swiper-slide-index={0}
                              role='group'
                              aria-label='9 / 11'
                              style={{
                                height: '300px',
                                paddingLeft:'80px',paddingRight:'80px'
                              }}
                            >
                              <a
                                className='col-lg-4 mt-4 mt-lg-0'
                                href='https://www.museofattori.livorno.it/mostre-ed-eventi/premio-combat-2020-dal-10-fino-al-31-ottobre-ai-granai-e-al-museo-g-fattori-di-vil-la-mimbelli-e-al-sac/'
                              >
                                <div
                                  className='box aos-init'
                                  data-aos='zoom-in'
                                  data-aos-delay={300}
                                >
                                  <span>10</span>
                                  <h4>
                                  2018 Exosphäre, Solo-Exhibition, Raketenstation Hombroich, Feldinstitut, Neuss (GER)

                                  </h4>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class='carousel-item'>
                          <div className='row event-item'>
                          <div
                              className='swiper-slide swiper-slide-duplicate'
                              data-swiper-slide-index={0}
                              role='group'
                              aria-label='9 / 11'
                              style={{
                                height: '300px',
                                paddingLeft:'80px',paddingRight:'80px'
                              }}
                            >
                              <a
                                className='col-lg-4 mt-4 mt-lg-0'
                                href='https://www.museofattori.livorno.it/mostre-ed-eventi/premio-combat-2020-dal-10-fino-al-31-ottobre-ai-granai-e-al-museo-g-fattori-di-vil-la-mimbelli-e-al-sac/'
                              >
                                <div
                                  className='box aos-init'
                                  data-aos='zoom-in'
                                  data-aos-delay={300}
                                >
                                  <span>11</span>
                                  <h4>
                                  2018 Atelier 111, group exhibition, Atelier 111, Saarbrücken (GER)

                                  </h4>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class='carousel-item'>
                          <div className='row event-item'>
                          <div
                              className='swiper-slide swiper-slide-duplicate'
                              data-swiper-slide-index={0}
                              role='group'
                              aria-label='9 / 11'
                              style={{
                                height: '300px',
                                paddingLeft:'80px',paddingRight:'80px'
                              }}
                            >
                              <a
                                className='col-lg-4 mt-4 mt-lg-0'
                                href='https://www.museofattori.livorno.it/mostre-ed-eventi/premio-combat-2020-dal-10-fino-al-31-ottobre-ai-granai-e-al-museo-g-fattori-di-vil-la-mimbelli-e-al-sac/'
                              >
                                <div
                                  className='box aos-init'
                                  data-aos='zoom-in'
                                  data-aos-delay={300}
                                >
                                  <span>12</span>
                                  <h4>
                                  2018 Prix d‘Art Robert-Schuman, Arsenal, Metz, (FR)

                                  </h4>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class='carousel-item'>
                          <div className='row event-item'>
                          <div
                              className='swiper-slide swiper-slide-duplicate'
                              data-swiper-slide-index={0}
                              role='group'
                              aria-label='9 / 11'
                              style={{
                                height: '300px',
                                paddingLeft:'80px',paddingRight:'80px'
                              }}
                            >
                              <a
                                className='col-lg-4 mt-4 mt-lg-0'
                                href='https://www.museofattori.livorno.it/mostre-ed-eventi/premio-combat-2020-dal-10-fino-al-31-ottobre-ai-granai-e-al-museo-g-fattori-di-vil-la-mimbelli-e-al-sac/'
                              >
                                <div
                                  className='box aos-init'
                                  data-aos='zoom-in'
                                  data-aos-delay={300}
                                >
                                  <span>13</span>
                                  <h4>
                                  2017 Landeskunstausstellung SaarART 11, National Exhibition of Saarland, group exhibition, Saarland (GER)

                                  </h4>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class='carousel-item'>
                          <div className='row event-item'>
                          <div
                              className='swiper-slide swiper-slide-duplicate'
                              data-swiper-slide-index={0}
                              role='group'
                              aria-label='9 / 11'
                              style={{
                                height: '300px',
                                paddingLeft:'80px',paddingRight:'80px'
                              }}
                            >
                              <a
                                className='col-lg-4 mt-4 mt-lg-0'
                                href='https://www.museofattori.livorno.it/mostre-ed-eventi/premio-combat-2020-dal-10-fino-al-31-ottobre-ai-granai-e-al-museo-g-fattori-di-vil-la-mimbelli-e-al-sac/'
                              >
                                <div
                                  className='box aos-init'
                                  data-aos='zoom-in'
                                  data-aos-delay={300}
                                >
                                  <span>14</span>
                                  <h4>
                                  2017 EarlyBirds, Galerie der HBKSaar, Saarbrücken (GER)
                                  </h4>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class='carousel-item'>
                          <div className='row event-item'>
                          <div
                              className='swiper-slide swiper-slide-duplicate'
                              data-swiper-slide-index={0}
                              role='group'
                              aria-label='9 / 11'
                              style={{
                                height: '300px',
                                paddingLeft:'80px',paddingRight:'80px'
                              }}
                            >
                              <a
                                className='col-lg-4 mt-4 mt-lg-0'
                                href='https://www.museofattori.livorno.it/mostre-ed-eventi/premio-combat-2020-dal-10-fino-al-31-ottobre-ai-granai-e-al-museo-g-fattori-di-vil-la-mimbelli-e-al-sac/'
                              >
                                <div
                                  className='box aos-init'
                                  data-aos='zoom-in'
                                  data-aos-delay={300}
                                >
                                  <span>16</span>
                                  <h4>
                                  2016 Tjurip, graduate exhibition, Fasanerieweg 17, Saarbrücken (GER)
                                  </h4>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class='carousel-item'>
                          <div className='row event-item'>
                          <div
                              className='swiper-slide swiper-slide-duplicate'
                              data-swiper-slide-index={0}
                              role='group'
                              aria-label='9 / 11'
                              style={{
                                height: '300px',
                                paddingLeft:'80px',paddingRight:'80px'
                              }}
                            >
                              <a
                                className='col-lg-4 mt-4 mt-lg-0'
                                href='https://www.museofattori.livorno.it/mostre-ed-eventi/premio-combat-2020-dal-10-fino-al-31-ottobre-ai-granai-e-al-museo-g-fattori-di-vil-la-mimbelli-e-al-sac/'
                              >
                                <div
                                  className='box aos-init'
                                  data-aos='zoom-in'
                                  data-aos-delay={300}
                                >
                                  <span>17</span>
                                  <h4>
                                  2016 Opus Fotopreis, Wanderausstellung, Theodor-Zink-Museum, Kaiserslautern (GER);
                                  </h4>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class='carousel-item'>
                          <div className='row event-item'>
                          <div
                              className='swiper-slide swiper-slide-duplicate'
                              data-swiper-slide-index={0}
                              role='group'
                              aria-label='9 / 11'
                              style={{
                                height: '300px',
                                paddingLeft:'80px',paddingRight:'80px'
                              }}
                            >
                              <a
                                className='col-lg-4 mt-4 mt-lg-0'
                                href='https://www.museofattori.livorno.it/mostre-ed-eventi/premio-combat-2020-dal-10-fino-al-31-ottobre-ai-granai-e-al-museo-g-fattori-di-vil-la-mimbelli-e-al-sac/'
                              >
                                <div
                                  className='box aos-init'
                                  data-aos='zoom-in'
                                  data-aos-delay={300}
                                >
                                  <span>18</span>
                                  <h4>
                                  2016 Opus Fotopreis, Wanderausstellung, Atelier Museum Haus Ludwig, Saarlouis (GER)
                                  </h4>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class='carousel-item'>
                          <div className='row event-item'>
                          <div
                              className='swiper-slide swiper-slide-duplicate'
                              data-swiper-slide-index={0}
                              role='group'
                              aria-label='9 / 11'
                              style={{
                                height: '300px',
                                paddingLeft:'80px',paddingRight:'80px'
                              }}
                            >
                              <a
                                className='col-lg-4 mt-4 mt-lg-0'
                                href='https://www.museofattori.livorno.it/mostre-ed-eventi/premio-combat-2020-dal-10-fino-al-31-ottobre-ai-granai-e-al-museo-g-fattori-di-vil-la-mimbelli-e-al-sac/'
                              >
                                <div
                                  className='box aos-init'
                                  data-aos='zoom-in'
                                  data-aos-delay={300}
                                >
                                  <span>19</span>
                                  <h4>
                                  2016 Außer Haus, group exhibition, Alte Druckerei, Saarbrücken (GER)
                                  </h4>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class='carousel-item'>
                          <div className='row event-item'>
                          <div
                              className='swiper-slide swiper-slide-duplicate'
                              data-swiper-slide-index={0}
                              role='group'
                              aria-label='9 / 11'
                              style={{
                                height: '300px',
                                paddingLeft:'80px',paddingRight:'80px'
                              }}
                            >
                              <a
                                className='col-lg-4 mt-4 mt-lg-0'
                                href='https://www.museofattori.livorno.it/mostre-ed-eventi/premio-combat-2020-dal-10-fino-al-31-ottobre-ai-granai-e-al-museo-g-fattori-di-vil-la-mimbelli-e-al-sac/'
                              >
                                <div
                                  className='box aos-init'
                                  data-aos='zoom-in'
                                  data-aos-delay={300}
                                >
                                  <span>20</span>
                                  <h4>
                                  2016 Exposition photographique transfrontalière, Wanderausstellung, Espace d‘Art Adagio, Thionville (FR)
                                  </h4>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>


                      </div>
                      <button
                        class='carousel-control-prev'
                        type='button'
                        data-bs-target='#carouselExampleIndicators3'
                        data-bs-slide='prev'
                      >
                        <span
                          class='carousel-control-prev-icon'
                          aria-hidden='true'
                        ></span>
                        <span class='visually-hidden'>Previous</span>
                      </button>
                      <button
                        class='carousel-control-next'
                        type='button'
                        data-bs-target='#carouselExampleIndicators3'
                        data-bs-slide='next'
                      >
                        <span
                          class='carousel-control-next-icon'
                          aria-hidden='true'
                        ></span>
                        <span class='visually-hidden'>Next</span>
                      </button>
                    </div>
                  </section>
                </div>
              </div>
            </section>
            {/* End Why Us Section */}
            {/* ======= Menu Section ======= */}
            {/* <section id='menu' className='menu section-bg'>
              <div className='container aos-init' data-aos='fade-up'>
                <div className='section-title'>
                  <h2>Menu</h2>
                  <p>Check Our Tasty Menu</p>
                </div>
                <div
                  className='row aos-init'
                  data-aos='fade-up'
                  data-aos-delay={100}
                >
                  <div className='col-lg-12 d-flex justify-content-center'>
                    <ul id='menu-flters'>
                      <li data-filter='*' className='filter-active'>
                        All
                      </li>
                      <li data-filter='.filter-starters'>Starters</li>
                      <li data-filter='.filter-salads'>Salads</li>
                      <li data-filter='.filter-specialty'>Specialty</li>
                    </ul>
                  </div>
                </div>
                <div
                  className='row menu-container aos-init'
                  data-aos='fade-up'
                  data-aos-delay={200}
                  style={{ position: 'relative', height: '600px' }}
                >
                  <div
                    className='col-lg-6 menu-item filter-starters'
                    style={{ position: 'absolute', left: '0px', top: '0px' }}
                  >
                    <img
                      src='assets/img/menu/lobster-bisque.jpg'
                      className='menu-img'
                      alt=''
                    />
                    <div className='menu-content'>
                      <a href='#'>Lobster Bisque</a>
                      <span>$5.95</span>
                    </div>
                    <div className='menu-ingredients'>
                      Lorem, deren, trataro, filede, nerada
                    </div>
                  </div>
                  <div
                    className='col-lg-6 menu-item filter-specialty'
                    style={{ position: 'absolute', left: '570px', top: '0px' }}
                  >
                    <img
                      src='assets/img/menu/bread-barrel.jpg'
                      className='menu-img'
                      alt=''
                    />
                    <div className='menu-content'>
                      <a href='#'>Bread Barrel</a>
                      <span>$6.95</span>
                    </div>
                    <div className='menu-ingredients'>
                      Lorem, deren, trataro, filede, nerada
                    </div>
                  </div>
                  <div
                    className='col-lg-6 menu-item filter-starters'
                    style={{ position: 'absolute', left: '0px', top: '120px' }}
                  >
                    <img
                      src='assets/img/menu/cake.jpg'
                      className='menu-img'
                      alt=''
                    />
                    <div className='menu-content'>
                      <a href='#'>Crab Cake</a>
                      <span>$7.95</span>
                    </div>
                    <div className='menu-ingredients'>
                      A delicate crab cake served on a toasted roll with lettuce
                      and tartar sauce
                    </div>
                  </div>
                  <div
                    className='col-lg-6 menu-item filter-salads'
                    style={{
                      position: 'absolute',
                      left: '570px',
                      top: '120px'
                    }}
                  >
                    <img
                      src='assets/img/menu/caesar.jpg'
                      className='menu-img'
                      alt=''
                    />
                    <div className='menu-content'>
                      <a href='#'>Caesar Selections</a>
                      <span>$8.95</span>
                    </div>
                    <div className='menu-ingredients'>
                      Lorem, deren, trataro, filede, nerada
                    </div>
                  </div>
                  <div
                    className='col-lg-6 menu-item filter-specialty'
                    style={{ position: 'absolute', left: '0px', top: '240px' }}
                  >
                    <img
                      src='assets/img/menu/tuscan-grilled.jpg'
                      className='menu-img'
                      alt=''
                    />
                    <div className='menu-content'>
                      <a href='#'>Tuscan Grilled</a>
                      <span>$9.95</span>
                    </div>
                    <div className='menu-ingredients'>
                      Grilled chicken with provolone, artichoke hearts, and
                      roasted red pesto
                    </div>
                  </div>
                  <div
                    className='col-lg-6 menu-item filter-starters'
                    style={{
                      position: 'absolute',
                      left: '570px',
                      top: '240px'
                    }}
                  >
                    <img
                      src='assets/img/menu/mozzarella.jpg'
                      className='menu-img'
                      alt=''
                    />
                    <div className='menu-content'>
                      <a href='#'>Mozzarella Stick</a>
                      <span>$4.95</span>
                    </div>
                    <div className='menu-ingredients'>
                      Lorem, deren, trataro, filede, nerada
                    </div>
                  </div>
                  <div
                    className='col-lg-6 menu-item filter-salads'
                    style={{ position: 'absolute', left: '0px', top: '360px' }}
                  >
                    <img
                      src='assets/img/menu/greek-salad.jpg'
                      className='menu-img'
                      alt=''
                    />
                    <div className='menu-content'>
                      <a href='#'>Greek Salad</a>
                      <span>$9.95</span>
                    </div>
                    <div className='menu-ingredients'>
                      Fresh spinach, crisp romaine, tomatoes, and Greek olives
                    </div>
                  </div>
                  <div
                    className='col-lg-6 menu-item filter-salads'
                    style={{
                      position: 'absolute',
                      left: '570px',
                      top: '360px'
                    }}
                  >
                    <img
                      src='assets/img/menu/spinach-salad.jpg'
                      className='menu-img'
                      alt=''
                    />
                    <div className='menu-content'>
                      <a href='#'>Spinach Salad</a>
                      <span>$9.95</span>
                    </div>
                    <div className='menu-ingredients'>
                      Fresh spinach with mushrooms, hard boiled egg, and warm
                      bacon vinaigrette
                    </div>
                  </div>
                  <div
                    className='col-lg-6 menu-item filter-specialty'
                    style={{ position: 'absolute', left: '0px', top: '480px' }}
                  >
                    <img
                      src='assets/img/menu/lobster-roll.jpg'
                      className='menu-img'
                      alt=''
                    />
                    <div className='menu-content'>
                      <a href='#'>Lobster Roll</a>
                      <span>$12.95</span>
                    </div>
                    <div className='menu-ingredients'>
                      Plump lobster meat, mayo and crisp lettuce on a toasted
                      bulky roll
                    </div>
                  </div>
                </div>
              </div>
            </section>
            */}
            {/* End Menu Section */}

            {/* End Book A Table Section */}
            {/* ======= Testimonials Section ======= */}
            <section id='testimonials' className='testimonials section-bg'>
              <div className='container aos-init' data-aos='fade-up'>
                <div className='section-title'>
                  <h2>Honors</h2>
                  <p>Some Honors</p>
                  <br />
                  <section
                    id='events'
                    className='events'
                    style={{ textAlign: 'center' }}
                  >
                    <div
                      id='carouselExampleIndicators2'
                      class='carousel slide'
                      data-bs-ride='carousel'
                    >
                      <div class='carousel-indicators'>
                        <button
                          type='button'
                          data-bs-target='#carouselExampleIndicators2'
                          data-bs-slide-to='0'
                          class='active'
                          aria-current='true'
                          aria-label='Slide 1'
                        ></button>
                        <button
                          type='button'
                          data-bs-target='#carouselExampleIndicators2'
                          data-bs-slide-to='1'
                          aria-label='Slide 2'
                        ></button>
                        <button
                          type='button'
                          data-bs-target='#carouselExampleIndicators2'
                          data-bs-slide-to='2'
                          aria-label='Slide 3'
                        ></button>
                        <button
                          type='button'
                          data-bs-target='#carouselExampleIndicators2'
                          data-bs-slide-to='3'
                          aria-label='Slide 4'
                        ></button>
                        <button
                          type='button'
                          data-bs-target='#carouselExampleIndicators2'
                          data-bs-slide-to='4'
                          aria-label='Slide 5'
                        ></button>
                        <button
                          type='button'
                          data-bs-target='#carouselExampleIndicators2'
                          data-bs-slide-to='5'
                          aria-label='Slide 6'
                        ></button>
                        <button
                          type='button'
                          data-bs-target='#carouselExampleIndicators2'
                          data-bs-slide-to='6'
                          aria-label='Slide 7'
                        ></button>
                        <button
                          type='button'
                          data-bs-target='#carouselExampleIndicators2'
                          data-bs-slide-to='7'
                          aria-label='Slide 8'
                        ></button>
                        <button
                          type='button'
                          data-bs-target='#carouselExampleIndicators2'
                          data-bs-slide-to='8'
                          aria-label='Slide 9'
                        ></button>
                        <button
                          type='button'
                          data-bs-target='#carouselExampleIndicators2'
                          data-bs-slide-to='9'
                          aria-label='Slide 10'
                        ></button>
                        <button
                          type='button'
                          data-bs-target='#carouselExampleIndicators2'
                          data-bs-slide-to='10'
                          aria-label='Slide 11'
                        ></button>
                        <button
                          type='button'
                          data-bs-target='#carouselExampleIndicators2'
                          data-bs-slide-to='11'
                          aria-label='Slide 12'
                        ></button>
                      </div>

                      <div class='carousel-inner'>
                        <div class='carousel-item active'>
                          <div className='row event-item'>
                            <div
                              className='swiper-slide swiper-slide-active'
                              data-swiper-slide-index={3}
                              role='group'
                              aria-label='7 / 11'
                              style={{
                                height: '300px'
                              }}
                            >
                              <p>
                                <i className='bx bxs-quote-alt-left quote-icon-left' />
                                2020 Winner of the Premio Combat Prize in
                                Photography, Livorno (IT)
                                <i className='bx bxs-quote-alt-right quote-icon-right' />
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class='carousel-item'>
                          <div className='row event-item'>
                            <div
                              className='swiper-slide swiper-slide-next'
                              data-swiper-slide-index={4}
                              role='group'
                              aria-label='8 / 11'
                              style={{
                                height: '300px'
                              }}
                            >
                              <p>
                                <i className='bx bxs-quote-alt-left quote-icon-left' />
                                2019 Scholarship for young photographers,
                                Surface Sensible (GER/FR/LUX)
                                <i className='bx bxs-quote-alt-right quote-icon-right' />
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class='carousel-item'>
                          <div className='row event-item'>
                            <div
                              className='swiper-slide swiper-slide-duplicate'
                              data-swiper-slide-index={0}
                              role='group'
                              aria-label='9 / 11'
                              style={{
                                height: '300px'
                              }}
                            >
                              <p>
                                <i className='bx bxs-quote-alt-left quote-icon-left' />
                                2018 Winner of the Prix d‘art Robert Schumann -
                                Quattropole Luxembourg, Metz, Saarbrücken, Trier
                                (GER/FR/LUX))
                                <i className='bx bxs-quote-alt-right quote-icon-right' />
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class='carousel-item'>
                          <div className='row event-item'>
                            <div
                              className='swiper-slide swiper-slide-duplicate'
                              data-swiper-slide-index={0}
                              role='group'
                              aria-label='9 / 11'
                              style={{
                                height: '300px'
                              }}
                            >
                              <p>
                                <i className='bx bxs-quote-alt-left quote-icon-left' />
                                2018 & 16 Artist in residence Raketenstation
                                Hombroich, Fieldinstitut - Raketenstation
                                Hombroich, Foundation Insel Hombroich, Neuss
                                (GER)
                                <i className='bx bxs-quote-alt-right quote-icon-right' />
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class='carousel-item'>
                          <div className='row event-item'>
                            <div
                              className='swiper-slide swiper-slide-duplicate'
                              data-swiper-slide-index={0}
                              role='group'
                              aria-label='9 / 11'
                              style={{
                                height: '300px'
                              }}
                            >
                              <p>
                                <i className='bx bxs-quote-alt-left quote-icon-left' />
                                2017 Stipend for the artists group TJURIP -
                                Municipal Cultural Office Of Saarbrücken (GER)
                                <i className='bx bxs-quote-alt-right quote-icon-right' />
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class='carousel-item'>
                          <div className='row event-item'>
                            <div
                              className='swiper-slide swiper-slide-duplicate'
                              data-swiper-slide-index={0}
                              role='group'
                              aria-label='9 / 11'
                              style={{
                                height: '300px'
                              }}
                            >
                              <p>
                                <i className='bx bxs-quote-alt-left quote-icon-left' />
                                2016 Diploma Promotion, Allianz Arts Council,
                                Berlin / The Ministry Of Education And Culture,
                                Saarland (GER)
                                <i className='bx bxs-quote-alt-right quote-icon-right' />
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class='carousel-item'>
                          <div className='row event-item'>
                            <div
                              className='swiper-slide swiper-slide-duplicate'
                              data-swiper-slide-index={0}
                              role='group'
                              aria-label='9 / 11'
                              style={{
                                height: '300px'
                              }}
                            >
                              <p>
                                <i className='bx bxs-quote-alt-left quote-icon-left' />
                                2016 Scholarship for remarkable final years
                                projects - Hochschule Der Bildenden Künste Saar
                                / Bank1saar ( GER)
                                <i className='bx bxs-quote-alt-right quote-icon-right' />
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class='carousel-item'>
                          <div className='row event-item'>
                            <div
                              className='swiper-slide swiper-slide-duplicate'
                              data-swiper-slide-index={0}
                              role='group'
                              aria-label='9 / 11'
                              style={{
                                height: '300px'
                              }}
                            >
                              <p>
                                <i className='bx bxs-quote-alt-left quote-icon-left' />
                                2015 Commendation in photography – Opus Magazin
                                <i className='bx bxs-quote-alt-right quote-icon-right' />
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class='carousel-item'>
                          <div className='row event-item'>
                            <div
                              className='swiper-slide swiper-slide-duplicate'
                              data-swiper-slide-index={0}
                              role='group'
                              aria-label='9 / 11'
                              style={{
                                height: '300px'
                              }}
                            >
                              <p>
                                <i className='bx bxs-quote-alt-left quote-icon-left' />
                                2015 Promotion of the project SWAP YOUR SHOE at
                                the United Nations - Foundation Apfelbaum,
                                North-rhinewestphalia / Ministry
                                <i className='bx bxs-quote-alt-right quote-icon-right' />
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class='carousel-item'>
                          <div className='row event-item'>
                            <div
                              className='swiper-slide swiper-slide-duplicate'
                              data-swiper-slide-index={0}
                              role='group'
                              aria-label='9 / 11'
                              style={{
                                height: '300px'
                              }}
                            >
                              <p>
                                <i className='bx bxs-quote-alt-left quote-icon-left' />
                                2015 Promotion of the project SWAP YOUR SHOE at
                                the United Nations - Foundation Apfelbaum,
                                North-rhinewestphalia / Ministry Of Education
                                And Culture, Saar (GER)
                                <i className='bx bxs-quote-alt-right quote-icon-right' />
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class='carousel-item'>
                          <div className='row event-item'>
                            <div
                              className='swiper-slide swiper-slide-duplicate'
                              data-swiper-slide-index={0}
                              role='group'
                              aria-label='9 / 11'
                              style={{
                                height: '300px'
                              }}
                            >
                              <p>
                                <i className='bx bxs-quote-alt-left quote-icon-left' />
                                2015 Scholarship for emerging artists - City Of
                                Saarbrücken (GER)
                                <i className='bx bxs-quote-alt-right quote-icon-right' />
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class='carousel-item'>
                          <div className='row event-item'>
                            <div
                              className='swiper-slide swiper-slide-duplicate'
                              data-swiper-slide-index={0}
                              role='group'
                              aria-label='9 / 11'
                              style={{
                                height: '300px'
                              }}
                            >
                              <p>
                                <i className='bx bxs-quote-alt-left quote-icon-left' />
                                2012 Study sholarship of the Academic Foundation
                                Saar - Studienstiftung Saar (GER)
                                <i className='bx bxs-quote-alt-right quote-icon-right' />
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button
                        class='carousel-control-prev'
                        type='button'
                        data-bs-target='#carouselExampleIndicators2'
                        data-bs-slide='prev'
                      >
                        <span
                          class='carousel-control-prev-icon'
                          aria-hidden='true'
                        ></span>
                        <span class='visually-hidden'>Previous</span>
                      </button>
                      <button
                        class='carousel-control-next'
                        type='button'
                        data-bs-target='#carouselExampleIndicators2'
                        data-bs-slide='next'
                      >
                        <span
                          class='carousel-control-next-icon'
                          aria-hidden='true'
                        ></span>
                        <span class='visually-hidden'>Next</span>
                      </button>
                    </div>
                  </section>
                </div>
              </div>
            </section>
            {/* End Testimonials Section */}
            {/* ======= Gallery Section ======= */}
            <section
              id='gallery'
              className='gallery'
              style={{ background: '#1a1814' }}
            >
              <div className='container aos-init' data-aos='fade-up'>
                <div className='section-title'>
                  <h2>Gallery</h2>
                  <p>Some photos from Our Gallery</p>
                </div>
              </div>
              <div
                className='container-fluid aos-init'
                data-aos='fade-up'
                data-aos-delay={100}
              >
                <div className='row g-0'>
                  <div className='col-lg-3 col-md-4'>
                    <div className='gallery-item'>
                      <a
                        href='assets/img/gallery/gallery-1.jpg'
                        className='gallery-lightbox'
                        data-gall='gallery-item'
                      >
                        <img
                          src='assets/img/gallery/gallery-1.jpg'
                          alt=''
                          className='img-fluid'
                        />
                      </a>
                    </div>
                  </div>
                  <div className='col-lg-3 col-md-4'>
                    <div className='gallery-item'>
                      <a
                        href='assets/img/gallery/gallery-2.jpg'
                        className='gallery-lightbox'
                        data-gall='gallery-item'
                      >
                        <img
                          src='assets/img/gallery/gallery-2.jpg'
                          alt=''
                          className='img-fluid'
                        />
                      </a>
                    </div>
                  </div>
                  <div className='col-lg-3 col-md-4'>
                    <div className='gallery-item'>
                      <a
                        href='assets/img/gallery/gallery-3.jpg'
                        className='gallery-lightbox'
                        data-gall='gallery-item'
                      >
                        <img
                          src='assets/img/gallery/gallery-3.jpg'
                          alt=''
                          className='img-fluid'
                        />
                      </a>
                    </div>
                  </div>
                  <div className='col-lg-3 col-md-4'>
                    <div className='gallery-item'>
                      <a
                        href='assets/img/gallery/gallery-4.jpg'
                        className='gallery-lightbox'
                        data-gall='gallery-item'
                      >
                        <img
                          src='assets/img/gallery/gallery-4.jpg'
                          alt=''
                          className='img-fluid'
                        />
                      </a>
                    </div>
                  </div>
                  <div className='col-lg-3 col-md-4'>
                    <div className='gallery-item'>
                      <a
                        href='assets/img/gallery/gallery-5.jpg'
                        className='gallery-lightbox'
                        data-gall='gallery-item'
                      >
                        <img
                          src='assets/img/gallery/gallery-5.jpg'
                          alt=''
                          className='img-fluid'
                        />
                      </a>
                    </div>
                  </div>
                  <div className='col-lg-3 col-md-4'>
                    <div className='gallery-item'>
                      <a
                        href='assets/img/gallery/gallery-6.jpg'
                        className='gallery-lightbox'
                        data-gall='gallery-item'
                      >
                        <img
                          src='assets/img/gallery/gallery-6.jpg'
                          alt=''
                          className='img-fluid'
                        />
                      </a>
                    </div>
                  </div>
                  <div className='col-lg-3 col-md-4'>
                    <div className='gallery-item'>
                      <a
                        href='assets/img/gallery/gallery-7.jpg'
                        className='gallery-lightbox'
                        data-gall='gallery-item'
                      >
                        <img
                          src='assets/img/gallery/gallery-7.jpg'
                          alt=''
                          className='img-fluid'
                        />
                      </a>
                    </div>
                  </div>
                  <div className='col-lg-3 col-md-4'>
                    <div className='gallery-item'>
                      <a
                        href='assets/img/gallery/gallery-8.jpg'
                        className='gallery-lightbox'
                        data-gall='gallery-item'
                      >
                        <img
                          src='assets/img/gallery/gallery-8.jpg'
                          alt=''
                          className='img-fluid'
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* End Gallery Section */}

            {/* End Chefs Section */}
            {/* ======= Contact Section ======= */}
            <section
              id='contact'
              className='contact'
              style={{ background: '#1a1814' }}
            >
              <div className='container aos-init' data-aos='fade-up'>
                <div className='section-title'>
                  <h2>Contact</h2>
                  <p>Contact Us</p>
                </div>
              </div>

              <div className='container aos-init' data-aos='fade-up'>
                <div className='row mt-5'>
                  <div className='col-lg-4'>
                    <div className='info'>
                      <div className='address'>
                        <i className='bi bi-geo-alt' />
                        <h4>Location:</h4>
                        <p>
                          {' '}
                          NDSM Treehouse, Neveritaweg 55 <br />
                          Amsterdam
                        </p>
                      </div>
                      <div className='open-hours'>
                        <i className='bi bi-clock' />
                        <h4>Open Hours:</h4>
                        <p>
                          Monday-Saturday:
                          <br />
                          11:00 AM - 2300 PM
                        </p>
                      </div>
                      <div className='email'>
                        <i className='bi bi-envelope' />
                        <h4>Email:</h4>
                        <p>thiloseidel@posteo.de</p>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-8 mt-5 mt-lg-0'>
                    <form
                      action='forms/contact.php'
                      method='post'
                      role='form'
                      className='php-email-form'
                    >
                      <div className='row'>
                        <div className='col-md-6 form-group'>
                          <input
                            type='text'
                            name='name'
                            className='form-control'
                            id='name'
                            placeholder='Your Name'
                            required
                          />
                        </div>
                        <div className='col-md-6 form-group mt-3 mt-md-0'>
                          <input
                            type='email'
                            className='form-control'
                            name='email'
                            id='email'
                            placeholder='Your Email'
                            required
                          />
                        </div>
                      </div>
                      <div className='form-group mt-3'>
                        <input
                          type='text'
                          className='form-control'
                          name='subject'
                          id='subject'
                          placeholder='Subject'
                          required
                        />
                      </div>
                      <div className='form-group mt-3'>
                        <textarea
                          className='form-control'
                          name='message'
                          rows={8}
                          placeholder='Message'
                          required
                          defaultValue={''}
                        />
                      </div>
                      <div className='my-3'>
                        <div className='loading'>Loading</div>
                        <div className='error-message' />
                        <div className='sent-message'>
                          Your message has been sent. Thank you!
                        </div>
                      </div>
                      <div className='text-center'>
                        <button type='submit'>Send Message</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
            {/* End Contact Section */}
          </main>
          {/* End #main */}
          {/* ======= Footer ======= */}
          <footer id='footer'>
            <div className='footer-top'>
              <div className='container'>
                <div className='row'>
                  <div className='col-lg-3 col-md-6'>
                    <div className='footer-info'>
                      <h3>THILOSEIDEL</h3>
                      <p>
                        <a href='https://www.treehousendsm.com/'>
                          {' '}
                          NDSM Treehouse, Neveritaweg 55 <br />
                          Amsterdam
                          <br />
                          <br />
                          <strong>Email:</strong> thiloseidel@posteo.de
                          <br />
                        </a>
                      </p>
                      {/* <div className='social-links mt-3'>
                        <a href='#' className='twitter'>
                          <i className='bx bxl-twitter' />
                        </a>
                        <a href='#' className='facebook'>
                          <i className='bx bxl-facebook' />
                        </a>
                        <a href='#' className='instagram'>
                          <i className='bx bxl-instagram' />
                        </a>
                        <a href='#' className='google-plus'>
                          <i className='bx bxl-skype' />
                        </a>
                        <a href='#' className='linkedin'>
                          <i className='bx bxl-linkedin' />
                        </a>
                      </div> */}
                    </div>
                  </div>
                  {/* <div className='col-lg-2 col-md-6 footer-links'>
                    <h4>Useful Links</h4>
                    <ul>
                      <li>
                        <i className='bx bx-chevron-right' />{' '}
                        <a href='#'>Home</a>
                      </li>
                      <li>
                        <i className='bx bx-chevron-right' />{' '}
                        <a href='#'>About us</a>
                      </li>
                      <li>
                        <i className='bx bx-chevron-right' />{' '}
                        <a href='#'>Services</a>
                      </li>
                      <li>
                        <i className='bx bx-chevron-right' />{' '}
                        <a href='#'>Terms of service</a>
                      </li>
                      <li>
                        <i className='bx bx-chevron-right' />{' '}
                        <a href='#'>Privacy policy</a>
                      </li>
                    </ul>
                  </div>
                  <div className='col-lg-3 col-md-6 footer-links'>
                    <h4>Our Services</h4>
                    <ul>
                      <li>
                        <i className='bx bx-chevron-right' />{' '}
                        <a href='#'>Web Design</a>
                      </li>
                      <li>
                        <i className='bx bx-chevron-right' />{' '}
                        <a href='#'>Web Development</a>
                      </li>
                      <li>
                        <i className='bx bx-chevron-right' />{' '}
                        <a href='#'>Product Management</a>
                      </li>
                      <li>
                        <i className='bx bx-chevron-right' />{' '}
                        <a href='#'>Marketing</a>
                      </li>
                      <li>
                        <i className='bx bx-chevron-right' />{' '}
                        <a href='#'>Graphic Design</a>
                      </li>
                    </ul>
                  </div>
                  <div className='col-lg-4 col-md-6 footer-newsletter'>
                    <h4>Our Newsletter</h4>
                    <p>
                      Tamen quem nulla quae legam multos aute sint culpa legam
                      noster magna
                    </p>
                    <form action method='post'>
                      <input type='email' name='email' />
                      <input type='submit' defaultValue='Subscribe' />
                    </form>
                  </div>
                */}
                </div>
              </div>
            </div>
            <div className='container'>
              <div className='copyright'>
                © Copyright{' '}
                <strong>
                  <span>THILOSEIDEL</span>
                </strong>
                . All Rights Reserved
              </div>
            </div>
          </footer>
          {/* End Footer */}
          <a
            href='#'
            className='back-to-top d-flex align-items-center justify-content-center active'
          >
            <i className='bi bi-arrow-up-short' />
          </a>
          {/* Vendor JS Files */}
          {/* Template Main JS File */}
        </div>
      </React.Fragment>
    )
  }
}

export default ProductsList
