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
                    <Card.Title><h3>Portifolio Antigo</h3></Card.Title>
                    <Card.Text>
                        <p>Meu antigo website/portifolio que foi feito com: Js, Express, Sass, Bootstrap</p>
                    </Card.Text>
                    <Button variant="light" target="_blank" href="https://github.com/Rafhael1/Portfolio-" >Ver Código</Button>
                </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card className="Cards" style={{width: '18rem'}}>
                <Card.Img variant="top" src="newPortfolio.png"/>
                <Card.Body>
                    <Card.Title><h3>Portifolio Novo</h3></Card.Title>
                    <Card.Text>
                        <p>Meu novo website/portifolio feito com: React, Next.js, Sass, Bootstrap</p>
                    </Card.Text>
                    <Button variant="light" target="_blank" href="https://github.com/Rafhael1/Portfolio-new-version-" >Ver Código</Button>
                </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card className="Cards" style={{width: '18rem'}}>
                <Card.Img variant="top" src="fokuso.png"/>
                <Card.Body>
                    <Card.Title><h3>Fokuso</h3></Card.Title>
                    <Card.Text>
                        <p>Este é o meu mais recente projeto. Este site está sendo hospedado na AWS e é um projeto full-stack, construído com a stack "PERN"</p>
                    </Card.Text>
                    <Button variant="light" target="_blank" href="https://www.fokuso.xyz/" >Ver Website</Button>
                </Card.Body>
            </Card>
            </Col>
            </Row>
        </div>
    )
}
