import React from 'react'

import {Card, Button, Col, Row} from 'react-bootstrap'

export default function Websites() {
    return (
        <div className="Websites" style={{padding: '15px', margin: '0 auto'}} >
            <Row>
                <Col>
            <Card className="Cards" style={{width: '18rem'}}>
                <Card.Img variant="top" src="oldPortfolio.png"/>
                <Card.Body>
                    <Card.Title><h3>Old Portfolio</h3></Card.Title>
                    <Card.Text>
                        <p>This is my old portfolio website made with: Js, Express, Sass, Bootstrap</p>
                    </Card.Text>
                    <Button variant="light" target="_blank" href="https://github.com/Rafhael1/Portfolio-" >See Code</Button>
                </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card className="Cards" style={{width: '18rem'}}>
                <Card.Img variant="top" src="newPortfolio.png"/>
                <Card.Body>
                    <Card.Title><h3>New Portfolio</h3></Card.Title>
                    <Card.Text>
                        <p>This is my new portfolio website made with: React, Next.js, Sass, Bootstrap</p>
                    </Card.Text>
                    <Button variant="light" target="_blank" href="https://github.com/Rafhael1/Portfolio-new-version-" >See Code</Button>
                </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card className="Cards" style={{width: '18rem'}}>
                <Card.Img variant="top" src="fokuso.png"/>
                <Card.Body>
                    <Card.Title><h3>Fokuso</h3></Card.Title>
                    <Card.Text>
                        <p>This is my latest and first big project. This website is being hosted on AWS and it's a fullstack project, built with the PERN stack</p>
                    </Card.Text>
                    <Button variant="light" target="_blank" href="https://www.fokuso.xyz/" >See Website</Button>
                </Card.Body>
            </Card>
            </Col>
            </Row>
        </div>
    )
}
