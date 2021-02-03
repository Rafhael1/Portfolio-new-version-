import NavBar from '../components/UI/NavBar/NavBar'
import Vector from '../components/UI/Vector/Vector'
import Websites from '../components/Cards/Websites'
import Projects from '../components/Cards/Projects'
import Technologies from '../components/Cards/Technologies'
import ContactForm from '../components/ContactForm/ContactForm'
import Footer from '../components/UI/Footer/Footer'

import Container from 'react-bootstrap/Container'
import {Row, Col} from 'react-bootstrap'

import {NextSeo} from 'next-seo';

export default function Home() {
    return (
        <div id="en">
            <NextSeo title="Rafhael Marques" description="Rafhael Marques de Lima Freitas' personal portfolio website. A website to show my skills and projects"/>
            <Container id="en">
                <NavBar/>
                <main>
                    <section>
                        <Row>
                            <Col>
                                <div>
                                    <h2 className="red">About Me</h2>
                                    <p>
                                        I am a Front-End Web Developer from Brazil. I have experience developing
                                        Websites with Javascript and with some of its frameworks. Also, I have
                                        experience developing cross platform mobile applications with React Native, and
                                        desktop applications with Electron. Even though I focus on front-end
                                        development, I also have experience with back-end technologies including Node.Js
                                        and databases such as SQL and MongoDB. Check out my resume.
                                    </p>
                                </div>
                            </Col>
                            <Col className="Vector">
                                <div className="Vector">
                                    <Vector/>
                                </div>
                            </Col>
                        </Row>
                    </section>
                    <section>
                        <Row>
                            <Col>
                                <div>
                                    <h2 className="blue">Websites</h2>
                                    <Websites/>
                                </div>
                            </Col>
                        </Row>
                    </section>
                    <section>
                        <Row>
                            <Col>
                                <div>
                                    <h2 className="red">Projects</h2>
                                    <Projects/>
                                </div>
                            </Col>
                        </Row>
                    </section>
                    <section>
                        <div>
                            <h2 className="blue">Technologies</h2>
                            <Technologies/>
                        </div>
                    </section>
                    <section>
                        <div>
                            <h2 className="red">Contact</h2>
                            <ContactForm/>
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
