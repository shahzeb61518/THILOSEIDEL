import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

export default function App () {
  const [modalExhibition, setModalExhibition] = useState(false)
  const [modalAward, setModalAward] = useState(false)
  const [modalPublications, setModalPublications] = useState(false)
  const [modalData, setModalData] = useState('')

  const ModallExhibition = props => {
    const toggle = () => setModalExhibition(!modalExhibition)
    return (
      <div>
        <Modal isOpen={modalExhibition} toggle={toggle} size='lg'>
          <ModalHeader toggle={toggle}>
            <h2>Exhibitions</h2>
          </ModalHeader>
          <ModalBody>
            <div className='section-title'>
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
                            paddingLeft: '80px',
                            paddingRight: '80px'
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
                              <h4
                                style={{
                                  fontSize: '36px',
                                  fontWeight: '700'
                                }}
                              >
                                <label className='font-weight-bold'>2021 </label> (upcoming) Observatoire Photographique du
                                Grand-Est, GroupExhibition, Stadtgalerie
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
                            paddingLeft: '80px',
                            paddingRight: '80px'
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
                              <h4
                                style={{
                                  fontSize: '36px',
                                  fontWeight: '700'
                                }}
                              >
                                <label className='font-weight-bold'>2021 </label> EMOP - European Month of Photography,
                                Repenser le Paysage, Group exhibition, Abbey de
                                Neumünster, Luxembourg (LUX)
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
                            paddingLeft: '80px',
                            paddingRight: '80px'
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
                              <h4
                                style={{
                                  fontSize: '36px',
                                  fontWeight: '700'
                                }}
                              >
                                <label className='font-weight-bold'>2020 </label> Premio Combat Prize, GroupExhibition, Museo
                                Civico Giovanni Fattori, Livorno (IT)
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
                            paddingLeft: '80px',
                            paddingRight: '80px'
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
                              <h4
                                style={{
                                  fontSize: '36px',
                                  fontWeight: '700'
                                }}
                              >
                                <label className='font-weight-bold'>2021 </label> (upcoming) Observatoire Photographique du
                                Grand-Est, Group-Exhibition, CCAM Scène
                                Nationale Vandoeuvrelès-Nancy (FR)
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
                            paddingLeft: '80px',
                            paddingRight: '80px'
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
                              <h4
                                style={{
                                  fontSize: '36px',
                                  fontWeight: '700'
                                }}
                              >
                                <label className='font-weight-bold'>2020 </label> Portals, Solo-Exhibition, Treehouse NDSM,
                                Amsterdam (NL)
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
                            paddingLeft: '80px',
                            paddingRight: '80px'
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
                              <h4
                                style={{
                                  fontSize: '36px',
                                  fontWeight: '700'
                                }}
                              >
                                <label className='font-weight-bold'>2019 </label> Regards Sans Limites, Trio-Exhibition, CCAM
                                Scène Nationale Vandoeuvre-lès-Nancy (FR)
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
                            paddingLeft: '80px',
                            paddingRight: '80px'
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
                              <h4
                                style={{
                                  fontSize: '36px',
                                  fontWeight: '700'
                                }}
                              >
                                <label className='font-weight-bold'>2019 </label> Regards Sans Limites, Trio-Exhibition,
                                Saarländisches Künstlerhaus, Saarbrücken (GER)
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
                            paddingLeft: '80px',
                            paddingRight: '80px'
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
                              <h4
                                style={{
                                  fontSize: '36px',
                                  fontWeight: '700'
                                }}
                              >
                                <label className='font-weight-bold'>2019 </label> EMOP - European Month of Photography, group
                                exhibition, Abbey de Neumünster, Luxembourg
                                (LUX)
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
                            paddingLeft: '80px',
                            paddingRight: '80px'
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
                              <h4
                                style={{
                                  fontSize: '36px',
                                  fontWeight: '700'
                                }}
                              >
                                <label className='font-weight-bold'>2018 </label> Tender Kissing Leads To Some Rough
                                Assfucking Stuff, Trio-exhibition, Stadtgallerie
                                Saarbrücken (GER)
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
                            paddingLeft: '80px',
                            paddingRight: '80px'
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
                              <h4
                                style={{
                                  fontSize: '36px',
                                  fontWeight: '700'
                                }}
                              >
                                <label className='font-weight-bold'>2018 </label> Exosphäre, Solo-Exhibition, Raketenstation
                                Hombroich, Feldinstitut, Neuss (GER)
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
                            paddingLeft: '80px',
                            paddingRight: '80px'
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
                              <h4
                                style={{
                                  fontSize: '36px',
                                  fontWeight: '700'
                                }}
                              >
                                <label className='font-weight-bold'>2018 </label> Atelier 111, group exhibition, Atelier 111,
                                Saarbrücken (GER)
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
                            paddingLeft: '80px',
                            paddingRight: '80px'
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
                              <h4
                                style={{
                                  fontSize: '36px',
                                  fontWeight: '700'
                                }}
                              >
                                <label className='font-weight-bold'>2018 </label> Prix d‘Art Robert-Schuman, Arsenal, Metz,
                                (FR)
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
                            paddingLeft: '80px',
                            paddingRight: '80px'
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
                              <h4
                                style={{
                                  fontSize: '36px',
                                  fontWeight: '700'
                                }}
                              >
                                2017 Landeskunstausstellung SaarART 11, National
                                Exhibition of Saarland, group exhibition,
                                Saarland (GER)
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
                            paddingLeft: '80px',
                            paddingRight: '80px'
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
                              <h4
                                style={{
                                  fontSize: '36px',
                                  fontWeight: '700'
                                }}
                              >
                                2017 EarlyBirds, Galerie der HBKSaar,
                                Saarbrücken (GER)
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
                            paddingLeft: '80px',
                            paddingRight: '80px'
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
                              <span>15</span>
                              <h4
                                style={{
                                  fontSize: '36px',
                                  fontWeight: '700'
                                }}
                              >
                                2016 Tjurip, graduate exhibition, Fasanerieweg
                                17, Saarbrücken (GER)
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
                            paddingLeft: '80px',
                            paddingRight: '80px'
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
                              <h4
                                style={{
                                  fontSize: '36px',
                                  fontWeight: '700'
                                }}
                              >
                                2016 Opus Fotopreis, Wanderausstellung,
                                Theodor-Zink-Museum, Kaiserslautern (GER);
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
                            paddingLeft: '80px',
                            paddingRight: '80px'
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
                              <h4
                                style={{
                                  fontSize: '36px',
                                  fontWeight: '700'
                                }}
                              >
                                2016 Opus Fotopreis, Wanderausstellung, Atelier
                                Museum Haus Ludwig, Saarlouis (GER)
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
                            paddingLeft: '80px',
                            paddingRight: '80px'
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
                              <h4
                                style={{
                                  fontSize: '36px',
                                  fontWeight: '700'
                                }}
                              >
                                2016 Außer Haus, group exhibition, Alte
                                Druckerei, Saarbrücken (GER)
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
                            paddingLeft: '80px',
                            paddingRight: '80px'
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
                              <h4
                                style={{
                                  fontSize: '36px',
                                  fontWeight: '700'
                                }}
                              >
                                2016 Exposition photographique transfrontalière,
                                Wanderausstellung, Espace d‘Art Adagio,
                                Thionville (FR)
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
          </ModalBody>
          <ModalFooter>
            <Button color='light' onClick={toggle}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }

  const ModallAward = props => {
    const toggle = () => setModalAward(!modalAward)
    return (
      <div>
        <Modal isOpen={modalAward} toggle={toggle} size='lg'>
          <ModalHeader toggle={toggle}>
            <h2>Honors</h2>
          </ModalHeader>
          <ModalBody>
            <div className='section-title'>
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
                            height: '300px',
                            paddingLeft: '50px',
                            paddingRight: '50px'
                          }}
                        >
                          <p>
                            <label className='font-weight-bold'>2020 </label> Winner of the Premio Combat Prize in
                            Photography, Livorno (IT)
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
                            height: '300px',
                            paddingLeft: '50px',
                            paddingRight: '50px'
                          }}
                        >
                          <p>
                            <label className='font-weight-bold'>2019 </label> Scholarship for young photographers, Surface
                            Sensible (GER/FR/LUX)
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
                            height: '300px',
                            paddingLeft: '50px',
                            paddingRight: '50px'
                          }}
                        >
                          <p>
                            <label className='font-weight-bold'>2018 </label> Winner of the Prix d‘art Robert Schumann -
                            Quattropole Luxembourg, Metz, Saarbrücken, Trier
                            (GER/FR/LUX))
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
                            height: '300px',
                            paddingLeft: '50px',
                            paddingRight: '50px'
                          }}
                        >
                          <p>
                            <label className='font-weight-bold'>2018 </label> & 16 Artist in residence Raketenstation
                            Hombroich, Fieldinstitut - Raketenstation Hombroich,
                            Foundation Insel Hombroich, Neuss (GER)
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
                            height: '300px',
                            paddingLeft: '50px',
                            paddingRight: '50px'
                          }}
                        >
                          <p>
                            2017 Stipend for the artists group TJURIP -
                            Municipal Cultural Office Of Saarbrücken (GER)
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
                            height: '300px',
                            paddingLeft: '50px',
                            paddingRight: '50px'
                          }}
                        >
                          <p>
                            2016 Diploma Promotion, Allianz Arts Council, Berlin
                            / The Ministry Of Education And Culture, Saarland
                            (GER)
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
                            height: '300px',
                            paddingLeft: '50px',
                            paddingRight: '50px'
                          }}
                        >
                          <p>
                            2016 Scholarship for remarkable final years projects
                            - Hochschule Der Bildenden Künste Saar / Bank1saar (
                            GER)
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
                            height: '300px',
                            paddingLeft: '50px',
                            paddingRight: '50px'
                          }}
                        >
                          <p>2015 Commendation in photography – Opus Magazin</p>
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
                            paddingLeft: '50px',
                            paddingRight: '50px'
                          }}
                        >
                          <p>
                            2015 Promotion of the project SWAP YOUR SHOE at the
                            United Nations - Foundation Apfelbaum,
                            North-rhinewestphalia / Ministry
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
                            height: '300px',
                            paddingLeft: '50px',
                            paddingRight: '50px'
                          }}
                        >
                          <p>
                            2015 Promotion of the project SWAP YOUR SHOE at the
                            United Nations - Foundation Apfelbaum,
                            North-rhinewestphalia / Ministry Of Education And
                            Culture, Saar (GER)
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
                            height: '300px',
                            paddingLeft: '50px',
                            paddingRight: '50px'
                          }}
                        >
                          <p>
                            2015 Scholarship for emerging artists - City Of
                            Saarbrücken (GER)
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
                            height: '300px',
                            paddingLeft: '50px',
                            paddingRight: '50px'
                          }}
                        >
                          <p>
                            2012 Study sholarship of the Academic Foundation
                            Saar - Studienstiftung Saar (GER)
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
          </ModalBody>
          <ModalFooter>
            <Button color='light' onClick={toggle}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }

  const ModallPublications = props => {
    const toggle = () => setModalPublications(!modalPublications)
    return (
      <div>
        <Modal isOpen={modalPublications} toggle={toggle} size='lg'>
          <ModalHeader toggle={toggle}>
            <h2>Publications</h2>
          </ModalHeader>
          <ModalBody>
            <div className='section-title'>
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
                            paddingLeft: '100px',
                            paddingRight: '50px'
                          }}
                        >
                          <p style={{ fontSize: '22px', textAlign: 'left' }}>
                            <label className='font-weight-bold'>2019 </label> Emoplux <br />
                            European Month of Photography 2019
                            <br />
                            Publisher: Café-Crème asbl / Paul di Felice / Pierre
                            Stiwer
                            <br />
                            Exhibition: 22.05-16.06.2019, Abbaye de Neumünster,
                            Luxembourg (LUX)
                            <br />
                            Texts: Paul di Felice; Pierre Stiwer
                            <br />
                            ISBN 978-99959-674-6-8
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
                            height: '300px',
                            paddingLeft: '100px',
                            paddingRight: '50px'
                          }}
                        >
                          <p style={{ fontSize: '22px', textAlign: 'left' }}>
                            <label className='font-weight-bold'>2019 </label> Regards sans limites <br />
                            Stipendium zur Förderung junger Fotografie 4.
                            Auflage
                            <br />
                            Publisher: Surface Sensible, Eric Dydim
                            <br />
                            Exhibition:
                            <br />
                            22.05-16.06.2019, Abbaye de Neumünster, Luxembourg
                            (LUX)
                            <br />
                            28.08-20.10.2019, Saarländisches Künstlerhaus,
                            Saarbrücken (GER)
                            <br />
                            05.11-23.11.2019, CCAM / Scène Nationale de
                            Vandoeuvre, Nancy (FR)
                            <br />
                            ISBN: 978-3-945126-66-0
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
                            height: '300px',
                            paddingLeft: '100px',
                            paddingRight: '50px'
                          }}
                        >
                          <p style={{ fontSize: '22px', textAlign: 'left' }}>
                            <label className='font-weight-bold'>2018 </label> Prix d‘Art Robert Schumann <br />
                            Publisher:QuattroPole
                            <br />
                            Exhibition: 19.01-04.03.2018, Arsenal, Metz (FR)
                            <br />
                            Texts: Andrea Jahn; Kamila Kolesniczenko
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
                            height: '300px',
                            paddingLeft: '100px',
                            paddingRight: '50px'
                          }}
                        >
                          <p style={{ fontSize: '22px', textAlign: 'left' }}>
                            2017 Saarart 11 <br />
                            11. Landeskunstausstellung
                            <br />
                            Publisher: Ministerium für Bildung und Kultur, Dr.
                            Heike Otto
                            <br />
                            Exhibition: 28.04-02.07, Lehrwerkstatt Burbach,
                            Saarbrücken (GER)
                            <br />
                            Texts: i.a. Cornelieke Lagerwaard; Friederike Steitz
                            <br />
                            ISBN: 978-3-943924-12-1
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
                            height: '300px',
                            paddingLeft: '100px',
                            paddingRight: '50px'
                          }}
                        >
                          <p style={{ fontSize: '22px', textAlign: 'left' }}>
                            2016 Tjurip
                            <br />
                            AbsolventInnenausstellung
                            <br />
                            Publisher: Das TJURIP-Künstlerkollektiv
                            <br />
                            Exhibition: 30.09-29.19.2016, Fasanerieweg 17,
                            Saarbrücken (GER)
                            <br />
                            Texts: Markus Hammerschmitt; Katharina Ritter; Prof.
                            Dr. Hartmut Wagner
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
                            height: '300px',
                            paddingLeft: '100px',
                            paddingRight: '50px'
                          }}
                        >
                          <p style={{ fontSize: '22px', textAlign: 'left' }}>
                            2015 Early Birds
                            <br />
                            Publisher: Enovos Deutschland SE
                            <br />
                            Exhibition: 28.01-31.05.2015
                            <br />
                            Texts: Anna-Gabriela Henné
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
                            height: '300px',
                            paddingLeft: '100px',
                            paddingRight: '50px'
                          }}
                        >
                          <p style={{ fontSize: '22px', textAlign: 'left' }}>
                            2015 Opus Kulturmagazin
                            <br />
                            Fotopreis 2015
                            <br />
                            Publisher: Verlag Saarkultur; Dr. Kurt Bohr
                            <br />
                            Exhibition: 29.04-09.05.2015, Galerie der HBKsaar,
                            Saarbrücken (GER)
                            <br />
                            Texts: Dr. Roland Augustin; Anna-Gabriela Henné;
                            Prof. Dr. Rolf Sachsse
                            <br />
                            ISBN: 978-3-9815946-3-8
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
                            height: '300px',
                            paddingLeft: '100px',
                            paddingRight: '50px'
                          }}
                        >
                          <p style={{ fontSize: '22px', textAlign: 'left' }}>
                            2015 Swap Your Shoe
                            <br />
                            Social transformation as a step towards
                            sustainability
                            <br />
                            Publisher: TMQL!
                            <br />
                            Exhibition: 02.02-19.02.2015, German House Gallery,
                            The Permanent Mission of Germany to the United
                            Nations,
                            <br />
                            United Nations Plaza, New York (US)
                            <br />
                            Texts: Prof. Thalia Goldstein; Andrea Haring; Golda
                            El-Khoury; Shazia Sikander; Prof. Kendall Thomas;
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
                            height: '300px',
                            paddingLeft: '100px',
                            paddingRight: '50px'
                          }}
                        >
                          <p style={{ fontSize: '22px', textAlign: 'left' }}>
                            2015 Vorhallen/Nachhallen
                            <br />
                            Publisher: Stiftung Saarländischer Kulturbesitz, Dr.
                            Roland Mönig
                            <br />
                            Exhibition Vorhallen: 01.07.2015, Erweiterungsbau
                            des Saarlandmuseums, Saarbrücken (GER)
                            <br />
                            Exhibition Nachhallen: 08.-26.07.2015, Galerie der
                            HBKsaar, Saarbrücken (GER)
                            <br />
                            Texts: Dr. Roland Augustin; Nadine Brettar; Prof.
                            Eric Lanz; Dr. Roland Mönig; Prof. Dr. Matthias
                            Winzen
                            <br />
                            ISBN: 978-3-932036-78-1
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
          </ModalBody>
          <ModalFooter>
            <Button color='light' onClick={toggle}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }

  return (
    <div>
      {ModallExhibition()}
      {ModallAward()}
      {ModallPublications()}
      <link rel='profile' href='https://gmpg.org/xfn/11' />
      <link rel='pingback' href='https://anaduje.com/xmlrpc.php' />
      <link
        rel='stylesheet'
        href='https://use.fontawesome.com/releases/v5.7.0/css/all.css'
      />
      {/* This site is optimized with the Yoast SEO plugin v11.5 - https://yoast.com/wordpress/plugins/seo/ */}
      <link
        rel='canonical'
        href='https://anaduje.com/about-illustrator-ana-duje/'
      />

      {/* / Yoast SEO plugin. */}
      <link rel='dns-prefetch' href='//fonts.googleapis.com' />
      <link rel='dns-prefetch' href='//s.w.org' />
      <link href='https://fonts.gstatic.com' crossOrigin rel='preconnect' />
      <link
        rel='alternate'
        type='application/rss+xml'
        title='Ana Duje » Feed'
        href='https://anaduje.com/feed/'
      />
      <link
        rel='alternate'
        type='application/rss+xml'
        title='Ana Duje » Comments Feed'
        href='https://anaduje.com/comments/feed/'
      />
      <style
        type='text/css'
        dangerouslySetInnerHTML={{
          __html:
            '\nimg.wp-smiley,\nimg.emoji {\n\tdisplay: inline !important;\n\tborder: none !important;\n\tbox-shadow: none !important;\n\theight: 1em !important;\n\twidth: 1em !important;\n\tmargin: 0 .07em !important;\n\tvertical-align: -0.1em !important;\n\tbackground: none !important;\n\tpadding: 0 !important;\n}\n'
        }}
      />
      <link
        rel='stylesheet'
        id='front_style-css'
        href='https://anaduje.com/wp-content/plugins/woo-advanced-shipment-tracking/assets/css/front.css?ver=2.2'
        type='text/css'
        media='all'
      />
      <link
        rel='stylesheet'
        id='woocommerce-layout-css'
        href='//anaduje.com/wp-content/plugins/woocommerce/assets/css/woocommerce-layout.css?ver=3.0.0'
        type='text/css'
        media='all'
      />
      <link
        rel='stylesheet'
        id='woocommerce-smallscreen-css'
        href='//anaduje.com/wp-content/plugins/woocommerce/assets/css/woocommerce-smallscreen.css?ver=3.0.0'
        type='text/css'
        media='only screen and (max-width: 768px)'
      />
      <link
        rel='stylesheet'
        id='woocommerce-general-css'
        href='//anaduje.com/wp-content/plugins/woocommerce/assets/css/woocommerce.css?ver=3.0.0'
        type='text/css'
        media='all'
      />
      <link
        rel='stylesheet'
        id='hint-css'
        href='https://anaduje.com/wp-content/plugins/woo-fly-cart/assets/hint/hint.min.css?ver=4.9.8'
        type='text/css'
        media='all'
      />
      <link
        rel='stylesheet'
        id='perfect-scrollbar-css'
        href='https://anaduje.com/wp-content/plugins/woo-fly-cart/assets/perfect-scrollbar/css/perfect-scrollbar.min.css?ver=4.9.8'
        type='text/css'
        media='all'
      />
      <link
        rel='stylesheet'
        id='perfect-scrollbar-wpc-css'
        href='https://anaduje.com/wp-content/plugins/woo-fly-cart/assets/perfect-scrollbar/css/custom-theme.css?ver=4.9.8'
        type='text/css'
        media='all'
      />
      <link
        rel='stylesheet'
        id='woofc-fonts-css'
        href='https://anaduje.com/wp-content/plugins/woo-fly-cart/assets/css/fonts.css?ver=4.9.8'
        type='text/css'
        media='all'
      />
      <link
        rel='stylesheet'
        id='woofc-frontend-css'
        href='https://anaduje.com/wp-content/plugins/woo-fly-cart/assets/css/frontend.css?ver=4.9.8'
        type='text/css'
        media='all'
      />
      <style
        id='woofc-frontend-inline-css'
        type='text/css'
        dangerouslySetInnerHTML={{
          __html:
            "\n.woofc-area.woofc-style-01, .woofc-area.woofc-style-03, .woofc-area.woofc-style-02 .woofc-area-bot .woofc-action .woofc-action-inner > div a:hover, .woofc-area.woofc-style-04 .woofc-area-bot .woofc-action .woofc-action-inner > div a:hover {\n                            background-color: #cc6055;\n                        }\n\n                        .woofc-area.woofc-style-01 .woofc-area-bot .woofc-action .woofc-action-inner > div a, .woofc-area.woofc-style-02 .woofc-area-bot .woofc-action .woofc-action-inner > div a, .woofc-area.woofc-style-03 .woofc-area-bot .woofc-action .woofc-action-inner > div a, .woofc-area.woofc-style-04 .woofc-area-bot .woofc-action .woofc-action-inner > div a {\n                            outline: none;\n                            color: #cc6055;\n                        }\n\n                        .woofc-area.woofc-style-02 .woofc-area-bot .woofc-action .woofc-action-inner > div a, .woofc-area.woofc-style-04 .woofc-area-bot .woofc-action .woofc-action-inner > div a {\n                            border-color: #cc6055;\n                        }\n\n                        .woofc-area.woofc-style-05 {\n                            background-color: #cc6055;\n                            background-image: url('');\n                            background-size: cover;\n                            background-position: center;\n                            background-repeat: no-repeat;\n                        }\n"
        }}
      />
      <link
        rel='stylesheet'
        id='twentytwelve-fonts-css'
        href='https://fonts.googleapis.com/css?family=Open+Sans:400italic,700italic,400,700&subset=latin,latin-ext'
        type='text/css'
        media='all'
      />
      <link
        rel='stylesheet'
        id='twentytwelve-style-css'
        href='https://anaduje.com/wp-content/themes/Ana_Duje/style.css?ver=4.9.8'
        type='text/css'
        media='all'
      />
      {/*[if lt IE 9]>
<link rel='stylesheet' id='twentytwelve-ie-css'  href='https://anaduje.com/wp-content/themes/Ana_Duje/css/ie.css?ver=20121010' type='text/css' media='all' />
<![endif]*/}
      <link rel='https://api.w.org/' href='https://anaduje.com/wp-json/' />
      <link
        rel='EditURI'
        type='application/rsd+xml'
        title='RSD'
        href='https://anaduje.com/xmlrpc.php?rsd'
      />
      <link
        rel='wlwmanifest'
        type='application/wlwmanifest+xml'
        href='https://anaduje.com/wp-includes/wlwmanifest.xml'
      />

      <link rel='shortlink' href='https://anaduje.com/?p=23' />
      <link
        rel='alternate'
        type='application/json+oembed'
        href='https://anaduje.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fanaduje.com%2Fabout-illustrator-ana-duje%2F'
      />
      <link
        rel='alternate'
        type='text/xml+oembed'
        href='https://anaduje.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fanaduje.com%2Fabout-illustrator-ana-duje%2F&format=xml'
      />
      <style
        type='text/css'
        dangerouslySetInnerHTML={{
          __html:
            '.recentcomments a{display:inline !important;padding:0 !important;margin:0 !important;}'
        }}
      />
      <link
        rel='icon'
        href='https://anaduje.com/wp-content/uploads/2019/09/cropped-favicon-32x32.png'
        sizes='32x32'
      />
      <link
        rel='icon'
        href='https://anaduje.com/wp-content/uploads/2019/09/cropped-favicon-192x192.png'
        sizes='192x192'
      />
      <link
        rel='apple-touch-icon-precomposed'
        href='https://anaduje.com/wp-content/uploads/2019/09/cropped-favicon-180x180.png'
      />
      {/* BEGIN ExactMetrics v5.3.8 Universal Analytics - https://exactmetrics.com/ */}
      {/* END ExactMetrics Universal Analytics */}
      {/* WooCommerce Google Analytics Integration */}
      {/* /WooCommerce Google Analytics Integration */}
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n.wc-forward{\n\tdisplay: none !important;\n}\n.newbtn{\n\twidth: 100%;\n    padding: 10px 15px;\t\n\tbackground-color:#fff;\n\tborder:1px solid #000;\n\tcolor:#000;\n    font-size: 23px;\n    cursor: pointer;\n}\n.newbtn:hover{\n\tborder: solid 1px #000;\n    background-color: #000;\n    color: #fff;\n}\n.side_cart_file{\n\twidth: 25% !important;\n    position: fixed !important;\n    height: 100vh !important;\n    background-color: #fff !important;\n    right: 0px !important;\n    top: 0px !important;\n    border-left: 1px solid #000 !important;\n    box-shadow: 0px 0px 1px #000 !important;\n}\n.cart_wrap_sty5{\n\t    width: 100% !important;\n    float: left !important;\n    padding: 15px !important;\n}\n.sub_total_amout {\n    width: 100% !important;\n    float: left !important;\n    padding: 15px !important;\n    font-size: 20px !important;\n}\n.pat_wrap a{\n\tbackground-color: #ffc439 !important;\n}\n.pat_wrap2 a{\n\tbackground-color: #6772e5 !important;\n}\n.cart .quantity{\n\tdisplay:none !important;\n}\n.woocommerce-variation-add-to-cart .quantity{\n\tdisplay:none !important;\n}\n\n.woofc-count {\n   display:none !important;\n}\n.woocommerce-variation-price .price{\n    display:none !important; \n}\n'
        }}
      />
      <link
        href='https://anaduje.com/wp-content/themes/Ana_Duje/css/bootstrap.min.css'
        rel='stylesheet'
      />
      <link
        href='https://anaduje.com/wp-content/themes/Ana_Duje/css/style.css'
        rel='stylesheet'
      />

      <nav className='navbar navbar-expand-md navbar-dark fixed-top mobile_view'>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarsExampleDefault'
          aria-controls='navbarsExampleDefault'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarsExampleDefault'>
          <ul className='navbar-nav mr-auto'>
            {/* <li className='nav-item'>
              <a href='https://anaduje.com/' className='nav-link menu_one '>
                work
              </a>
            </li> */}
            <li className='nav-item'>
              <a href='' className='nav-link menu_two wp_class2'>
                about
              </a>
            </li>
            {/* <li className='nav-item'>
              <a href='javascript:;' className='nav-link slidecart menu_thre '>
                cart{' '}
              </a>
            </li>
            <li className='nav-item'>
              <a
                href='https://anaduje.com/shop/?sid=1'
                className='nav-link menu_for  '
              >
                shop
              </a>
            </li>*/}
          </ul>
        </div>
      </nav>
      <div className='menu_wrapper dektop_view'>
        <div className='menu_new_file'>
          <a href='' className='menu_one wp_class2'>
            work
          </a>
          <a href='' className='menu_two   '>
            about
          </a>
          {/* <a href='javascript:;' className='slidecart menu_thre  '>
            cart{' '}
          </a>
          <a href='https://anaduje.com/shop/?sid=1' className='menu_for  '>
            shop
          </a> */}
        </div>
      </div>
      <div className='mid_cont_wrapper_text'>
        <span className='black2'>
          Thilo Seidel is an Amsterdam based Visual Artist doing Video and
          Photography. In his work he does not capture immediate moments, but
          rather explores environments by questioning perceptions as well as
          representations of realities.
        </span>
        <span className='blue_wrap'>
          Recently Thilo got awarded with the Premio Combat Price in
          Photography, Livorno, Italy.
        </span>
      </div>
      <div className='about_wrap_file'>
        <div className='left-side-heading '>
          <span>Contact Info</span>
        </div>
        <div className='contac_wrap_style2 contac_wrap_style25'>
          <a
            href='mailto:thiloseidel@posteo.de'
            target='_blank'
            className='menu_one'
          >
            thiloseidel@posteo.de NDSM Treehouse, Neveritaweg 55, Amsterdam
          </a>
          {/* <a
            href='https://instagram.com/ana.duje'
            target='_blank'
            className='menu_thre'
          >
            instagram
          </a>
          <a
            href='https://behance.net/anaduje'
            target='_blank'
            className='menu_two'
          >
            behance
          </a> */}
        </div>
      </div>
      {/* <div className='about_wrap_file'>
        <div className='left-side-heading '>
          <span>some clients</span>
        </div>
        <div className='contac_wrap_style2 contac_wrap_style25'>
          <span>
            Adobe/ Apple/ Fast Company/ Google/ Lotte DFS/ Snapchat/ The Lily/
            Twitter/ Virgin Media/ Vox/ Wired/
          </span>
        </div>
      </div> */}

      <div className='about_wrap_file bor_none'>
        <div className='left-side-heading '>
          <span>Some Exhibition</span>
        </div>
        <div className='contac_wrap_style2 contac_wrap_style25 fety_set'>
          <a
            className='menu_one'
            onClick={() => {
              setModalExhibition(true)
            }}
          >
            <label className='font-weight-bold'>2021 </label> (upcoming) Observatoire Photographique du Grand-Est,
            Group-Exhibition, CCAM Scène Nationale Vandoeuvrelès-Nancy (FR)
          </a>
          <a
            onClick={() => {
              setModalExhibition(true)
            }}
            className='menu_one'
          >
            <label className='font-weight-bold'>2021 </label> (upcoming) Observatoire Photographique du Grand-Est,
            Group-Exhibition, Stadtgalerie Saarbrücken (DE)
          </a>

          <a
            onClick={() => {
              setModalExhibition(true)
            }}
            className='menu_one'
          >
            <label className='font-weight-bold'>2020 </label> Premio Combat Prize, GroupExhibition, Museo Civico Giovanni
            Fattori, Livorno (IT)
          </a>

          <a
            className='btn btn-light font-weight-bold'
            style={{ width: '100px' }}
            onClick={() => {
              setModalExhibition(true)
            }}
          >
            <p style={{ fontSize: '35px' }}>...</p>
          </a>
          {/* <a
            href='https://www.peopleofprint.com/best-of/pop-member-showcase-10-illustrators/'
            target='_blank'
            className='menu_one'
          >
            <label className='font-weight-bold'>2021 </label> EMOP - European Month of Photography, Bodyfiction(s), Group
            exhibition, Abbey de Neumünster, Luxembourg (LUX)
          </a>
          <a
            href='https://www.wix.com/blog/design/2018/08/instagram-tips-designers/'
            target='_blank'
            className='menu_one'
          >
            <label className='font-weight-bold'>2020 </label> Premio Combat Prize, Group-Exhibition, Museo Civico Giovanni
            Fattori, Livorno (IT)
          </a>
          <a
            href='http://stafmagazine.com/gallery/ana-duje/'
            target='_blank'
            className='menu_one'
          >
            <label className='font-weight-bold'>2020 </label> Portals, Solo-Exhibition, Treehouse NDSM, Amsterdam (NL)
          </a>
          <a
            href='https://www.mache.digital/series/2018/8/6/illustrations-by-ana-duje'
            target='_blank'
            className='menu_one'
          >
            <label className='font-weight-bold'>2019 </label> Regards Sans Limites, Trio-Exhibition, CCAM Scène Nationale
            Vandoeuvre-lès-Nancy (FR)
          </a>
          <a
            href='https://www.domestika.org/es/blog/1285-36-days-of-type-2018-10-de-nuestros-favoritos'
            target='_blank'
            className='menu_one'
          >
            <label className='font-weight-bold'>2019 </label> Regards Sans Limites, Trio-Exhibition, Saarländisches
            Künstlerhaus, Saarbrücken (GER)
          </a>
          <a
            href='https://www.machodominante.es/color-y-forma-con-el-estilo-peculiar-de-ana-duje/'
            target='_blank'
            className='menu_one'
          >
            <label className='font-weight-bold'>2019 </label> EMOP - European Month of Photography, group exhibition, Abbey
            de Neumünster, Luxembourg (LUX)
          </a>
          <a
            href='https://www.machodominante.es/color-y-forma-con-el-estilo-peculiar-de-ana-duje/'
            target='_blank'
            className='menu_one'
          >
            <label className='font-weight-bold'>2018 </label> Tender Kissing Leads To Some Rough Assfucking Stuff,
            Trio-exhibition, Stadtgallerie Saarbrücken (GER)
          </a>
          <a
            href='https://www.machodominante.es/color-y-forma-con-el-estilo-peculiar-de-ana-duje/'
            target='_blank'
            className='menu_one'
          >
            <label className='font-weight-bold'>2018 </label> Exosphäre, Solo-Exhibition, Raketenstation Hombroich,
            Feldinstitut, Neuss (GER)
          </a>
          <a
            href='https://www.machodominante.es/color-y-forma-con-el-estilo-peculiar-de-ana-duje/'
            target='_blank'
            className='menu_one'
          >
            <label className='font-weight-bold'>2018 </label> Atelier 111, group exhibition, Atelier 111, Saarbrücken (GER)
          </a>

          <a
            href='https://www.machodominante.es/color-y-forma-con-el-estilo-peculiar-de-ana-duje/'
            target='_blank'
            className='menu_one'
          >
            <label className='font-weight-bold'>2018 </label> Prix d‘Art Robert-Schuman, Arsenal, Metz, (FR)
          </a>
          <a
            href='https://www.machodominante.es/color-y-forma-con-el-estilo-peculiar-de-ana-duje/'
            target='_blank'
            className='menu_one'
          >
            2017 Landeskunstausstellung SaarART 11, National Exhibition of
            Saarland, group exhibition, Saarland (GER)
          </a>
          <a
            href='https://www.machodominante.es/color-y-forma-con-el-estilo-peculiar-de-ana-duje/'
            target='_blank'
            className='menu_one'
          >
            2017 EarlyBirds, Galerie der HBKSaar, Saarbrücken (GER)
          </a>

          <a
            href='https://www.machodominante.es/color-y-forma-con-el-estilo-peculiar-de-ana-duje/'
            target='_blank'
            className='menu_one'
          >
            2016 Tjurip, graduate exhibition, Fasanerieweg 17, Saarbrücken (GER)
          </a>
          <a
            href='https://www.machodominante.es/color-y-forma-con-el-estilo-peculiar-de-ana-duje/'
            target='_blank'
            className='menu_one'
          >
            2016 Opus Fotopreis, Wanderausstellung, Theodor-Zink-Museum,
            Kaiserslautern (GER);
          </a>
          <a
            href='https://www.machodominante.es/color-y-forma-con-el-estilo-peculiar-de-ana-duje/'
            target='_blank'
            className='menu_one'
          >
            2016 Opus Fotopreis, Wanderausstellung, Atelier Museum Haus Ludwig,
            Saarlouis (GER)
          </a>

          <a
            href='https://www.machodominante.es/color-y-forma-con-el-estilo-peculiar-de-ana-duje/'
            target='_blank'
            className='menu_one'
          >
            2016 Außer Haus, group exhibition, Alte Druckerei, Saarbrücken (GER)
          </a>
          <a
            href='https://www.machodominante.es/color-y-forma-con-el-estilo-peculiar-de-ana-duje/'
            target='_blank'
            className='menu_one'
          >
            2016 Exposition photographique transfrontalière, Wanderausstellung,
            Espace d‘Art Adagio, Thionville (FR)
          </a> */}
        </div>
      </div>

      <div className='about_wrap_file bor_none'>
        <div className='left-side-heading '>
          <span>Award</span>
        </div>
        <div className='contac_wrap_style2 contac_wrap_style25 fety_set'>
          <a
            onClick={() => {
              setModalAward(true)
            }}
            className='menu_one'
          >
            <label className='font-weight-bold'>2020 </label> Winner of the Premio Combat Prize in Photography, Livorno (IT)
          </a>
          <a
            onClick={() => {
              setModalAward(true)
            }}
            className='menu_one'
          >
            <label className='font-weight-bold'>2019 </label> Scholarship for young photographers, Surface Sensible
            (GER/FR/LUX)
          </a>

          <a
            onClick={() => {
              setModalAward(true)
            }}
            className='menu_one'
          >
            <label className='font-weight-bold'>2018 </label> Winner of the Prix d‘art Robert Schumann - Quattropole
            Luxembourg, Metz, Saarbrücken, Trier (GER/FR/LUX))
          </a>

          <a
            className='btn btn-light font-weight-bold'
            style={{ width: '100px' }}
            onClick={() => {
              setModalAward(true)
            }}
          >
            <p style={{ fontSize: '35px' }}>...</p>
          </a>
          {/* <a
            href='https://www.peopleofprint.com/best-of/pop-member-showcase-10-illustrators/'
            target='_blank'
            className='menu_one'
          >
            <label className='font-weight-bold'>2018 </label> Winner of the Prix d‘art Robert Schumann - Quattropole
            Luxembourg,Metz,Saarbrücken,Trier (GER/FR/LUX))
          </a>
          <a
            href='https://www.wix.com/blog/design/2018/08/instagram-tips-designers/'
            target='_blank'
            className='menu_one'
          >
            <label className='font-weight-bold'>2018 </label> & 16 Artist in residence Raketenstation Hombroich,
            Fieldinstitut - Raketenstation Hombroich, Foundation Insel
            Hombroich, Neuss (GER)
          </a>
          <a
            href='http://stafmagazine.com/gallery/ana-duje/'
            target='_blank'
            className='menu_one'
          >
            2017 Stipend for the artists group TJURIP - Municipal Cultural
            Office Of Saarbrücken (GER)
          </a>
          <a
            href='https://www.mache.digital/series/2018/8/6/illustrations-by-ana-duje'
            target='_blank'
            className='menu_one'
          >
            2016 Diploma Promotion, Allianz Arts Council, Berlin / The Ministry
            Of Education And Culture, Saarland (GER)
          </a>
          <a
            href='https://www.domestika.org/es/blog/1285-36-days-of-type-2018-10-de-nuestros-favoritos'
            target='_blank'
            className='menu_one'
          >
            2016 Scholarship for remarkable final years projects - Hochschule
            Der Bildenden Künste Saar / Bank1saar ( GER)
          </a>
          <a
            href='https://www.machodominante.es/color-y-forma-con-el-estilo-peculiar-de-ana-duje/'
            target='_blank'
            className='menu_one'
          >
            2015 Commendation in photography – Opus Magazin
          </a>
          <a
            href='https://www.machodominante.es/color-y-forma-con-el-estilo-peculiar-de-ana-duje/'
            target='_blank'
            className='menu_one'
          >
            2015 Promotion of the project SWAP YOUR SHOE at the United Nations -
            Foundation Apfelbaum, North-rhinewestphalia / Ministry Of Education
            And Culture, Saar (GER)
          </a>
          <a
            href='https://www.machodominante.es/color-y-forma-con-el-estilo-peculiar-de-ana-duje/'
            target='_blank'
            className='menu_one'
          >
            2015 Scholarship for emerging artists - City Of Saarbrücken (GER)
          </a>
          <a
            href='https://www.machodominante.es/color-y-forma-con-el-estilo-peculiar-de-ana-duje/'
            target='_blank'
            className='menu_one'
          >
            2012 Study sholarship of the Academic Foundation Saar -
            Studienstiftung Saar (GER)
          </a> */}
        </div>
      </div>

      <div className='about_wrap_file bor_none'>
        <div className='left-side-heading '>
          <span>Publications</span>
        </div>
        <div className='contac_wrap_style2 contac_wrap_style25 fety_set'>
          <a
            onClick={() => {
              setModalPublications(true)
            }}
            className='menu_one'
          >
            <label className='font-weight-bold'>2019 </label> Emoplux <br />
            European Month of Photography 2019
          </a>
          <a
            onClick={() => {
              setModalPublications(true)
            }}
            className='menu_one'
          >
            <label className='font-weight-bold'>2019 </label> Regards sans limites <br />
            Stipendium zur Förderung junger Fotografie 4. Auflage
          </a>

          <a
            onClick={() => {
              setModalPublications(true)
            }}
            className='menu_one'
          >
            <label className='font-weight-bold'>2018 </label> Prix d‘Art Robert Schumann <br />
            Publisher:QuattroPole
          </a>

          <a
            className='btn btn-light font-weight-bold'
            style={{ width: '100px' }}
            onClick={() => {
              setModalPublications(true)
            }}
          >
            <p style={{ fontSize: '35px' }}>...</p>
          </a>
        </div>
      </div>

      <div className='footer_wrapper'>
        <span>©2021 by THILOSEIDEL</span>{' '}
        {/* <a
          href='https://calendly.com/anaduje'
          target='_blank'
          className='menu_one'
        >
          wanna talk?
        </a>
        <a href='mailto:hello@anaduje.com' target='_blank' className='menu_two'>
          drop a line
        </a>
        <a
          href='https://www.instagram.com/ana.duje/'
          target='_blank'
          className='menu_thre'
        >
          instagram
        </a>
        <a
          href='https://www.anaduje.com/shipping'
          target='_blank'
          className='menu_for'
        >
          shipping
        </a> */}
      </div>
      <div
        id='woofc-area'
        className=' woofc-area woofc-effect-01 woofc-style-01  side_cart_file'
      >
        <div className='cart_wrap_sty5'>
          <span>Cart</span>
          <a href='javascript:;' className='woofc-close'>
            <i className='woofc-icon-icon10' />
          </a>
        </div>
        <div className='woofc-area-mid woofc-items '>
          <div
            className='woofc-no-item return-to-shop'
            style={{ color: '#000' }}
          >
            Your cart is empty. Time to{' '}
            <a
              style={{ color: '#000', textDecoration: 'underline' }}
              href='https://anaduje.com/shop/'
            >
              start shopping
            </a>
          </div>
        </div>
        <div className>
          <div className='sub_total_amout'>
            <div className='woofc-total-left flow_left'>Subtotal</div>
            <div id='woofc-subtotal' className='woofc-total-right flow_right'>
              <span className='woocommerce-Price-amount amount'>
                <span className='woocommerce-Price-currencySymbol'>$</span>0
              </span>
            </div>
          </div>
          <div className='woofc-action'>
            <div className>
              <div className=' check_out_wrap'>
                <a href='https://anaduje.com/checkout/'>Checkout</a>
                <div className='pat_wrap'>
                  <a href='https://anaduje.com/checkout/'>
                    <img
                      src='https://anaduje.com/wp-content/uploads/2019/05/pay.jpg'
                      alt=''
                    />
                  </a>
                </div>
                <div className='pat_wrap2'>
                  <a href='https://anaduje.com/checkout/'>
                    <img
                      src='https://anaduje.com/wp-content/uploads/2019/05/pay.png'
                      alt=''
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='woofc-count' className='woofc-count woofc-count-top-right '>
        <i className='woofc-icon-cart7' />
        <span id='woofc-count-number' className='woofc-count-number'>
          0
        </span>
      </div>
      <div className='woofc-overlay' />
      {/* WooCommerce JavaScript */}
    </div>
  )
}
