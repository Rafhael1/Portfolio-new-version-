import NavBarPT from '../components/UI/NavBar/NavBarPT'
import VectorPT from '../components/UI/Vector/VectorPT'
import WebsitesPT from '../components/Cards/WebsitesPT'
import ProjectsPT from '../components/Cards/ProjectsPT'
import Technologies from '../components/Cards/Technologies'
import ContactFormPT from '../components/ContactForm/ContactFormPT'
import Footer from '../components/UI/Footer/Footer'

import Container from 'react-bootstrap/Container'
import {Row, Col} from 'react-bootstrap'

export default function pt() {
    return (
        <div id="pt">
            <Container id="pt">
                <NavBarPT/>
                <main>
                    <section>
                        <Row>
                            <Col>
                                <div
                                    style={{
                                    width: '450px'
                                }}>
                                    <h2 className="green">Sobre Mim</h2>
                                    <p>
                                        Eu sou um desenvolvedor web front-end do Brasil. Tenho experiência no
                                        desenvolvimento de websites com Javascript e com os frameworks mostrados em meu
                                        currículo, também tenho experiência no desenvolvimento de aplicativos móveis
                                        com React Native, e aplicativos desktop com Electron. Embora eu
                                        foque mais em desenvolvimento front-end, também tenho conhecimento de tecnologias de back-end,
                                        incluindo Node.Js e databases como SQL e MongoDB.
                                    </p>
                                </div>
                            </Col>
                            <Col>
                                <div className="Vector">
                                    <VectorPT/>
                                </div>
                            </Col>
                        </Row>
                    </section>
                    <section>
                        <Row>
                            <Col>
                                <div>
                                    <h2 className="yellow">Websites</h2>
                                    <WebsitesPT/>
                                </div>
                            </Col>
                        </Row>
                    </section>
                    <section>
                        <Row>
                            <Col>
                                <div>
                                    <h2 className="green">Projetos</h2>
                                    <ProjectsPT/>
                                </div>
                            </Col>
                        </Row>
                    </section>
                    <section>
                        <div>
                            <h2 className="yellow">Tecnologias</h2>
                            <Technologies/>
                        </div>
                    </section>
                    <section>
                        <div>
                            <h2 className="green">Contato</h2>
                            <ContactFormPT/>
                        </div>
                    </section>
                </main>
            </Container>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}
