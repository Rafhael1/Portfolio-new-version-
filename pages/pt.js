import NavBarPT from '../components/UI/NavBar/NavBarPT'
import VectorPT from '../components/UI/Vector/VectorPT'
import WebsitesPT from '../components/Cards/WebsitesPT'
import ProjectsPT from '../components/Cards/ProjectsPT'
import Technologies from '../components/Cards/Technologies'
import ContactFormPT from '../components/ContactForm/ContactFormPT'
import Footer from '../components/UI/Footer/Footer'

import Container from 'react-bootstrap/Container'
import {Row, Col} from 'react-bootstrap'

import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';


import {NextSeo} from 'next-seo';


export default function pt() {
    return (
        <div id="pt">
            <NextSeo title="Rafhael Marques" description="Website/Portifolio de Rafhael Marques de Lima Freitas para mostrar meus projetos e competencias"/>
            <Container id="pt">
                <Bounce>
                <NavBarPT/>
                </Bounce>
                <main>
                    <section>
                        <Fade left>
                        <Row>
                            <Col>
                                <div >
                                    <h2 className="green">Sobre Mim</h2>
                                    <p>
                                        Eu sou um desenvolvedor web front-end do Brasil. Tenho experiência no
                                        desenvolvimento de websites com Javascript e com os frameworks mostrados em meu
                                        currículo, também tenho experiência no desenvolvimento de aplicativos móveis com
                                        React Native, e aplicativos desktop com Electron. Embora eu foque mais em
                                        desenvolvimento front-end, também tenho conhecimento de tecnologias de back-end,
                                        incluindo Node.Js e databases como SQL|PostgreSQL e eu também já testei MongoDB mas,
                                        pessoalmente, prefiro SQL.
                                    </p>
                                </div>
                            </Col>
                            <Col className="Vector">
                                <div >
                                    <VectorPT className="Vector"/>
                                </div>
                            </Col>
                        </Row>
                        </Fade>
                    </section>
                    <section>
                        <Fade right>
                        <Row>
                            <Col>
                                <div>
                                    <h2 className="yellow">Websites</h2>
                                    <WebsitesPT/>
                                </div>
                            </Col>
                        </Row>
                        </Fade>
                    </section>
                    <section>
                        <Fade left>
                        <Row>
                            <Col>
                                <div>
                                    <h2 className="green">Projetos</h2>
                                    <ProjectsPT/>
                                </div>
                            </Col>
                        </Row>
                        </Fade>
                    </section>
                    <section>
                        <Fade right>
                        <div>
                            <h2 className="yellow">Tecnologias</h2>
                            <Technologies/>
                        </div>
                        </Fade>
                    </section>
                    <section>
                        <Fade bottom>
                        <div>
                            <h2 className="green">Contato</h2>
                            <ContactFormPT/>
                        </div>
                        </Fade>
                    </section>
                </main>
            </Container>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}
