import React from 'react'

import {Card, Button, Col, Row} from 'react-bootstrap'

import VisibilityIcon from '@material-ui/icons/Visibility';
import CodeIcon from '@material-ui/icons/Code';


export default function Projects() {
    return (
        <div id="projects" style={{padding: '15px', margin: '0 auto'}} >
        <Row>
            <Col>
        <Card className="Cards" style={{width: '18rem'}}>
            <Card.Img variant="top" src="recipeApp.png"/>
            <Card.Body>
                <Card.Title><h3>App de Receitas</h3></Card.Title>
                <Card.Text>
                    <p>Este é um aplicativo de receitas, você pode pesquisar ingredientes e pratos e obter muitas receitas diferentes.</p>
                </Card.Text>
                <Button variant="none" target="_blank" href="https://recipes-project.vercel.app/" ><VisibilityIcon className="icon" /></Button>
                <Button variant="none" target="_blank" href="https://github.com/Rafhael1/RecipesProject" ><CodeIcon className="icon" /></Button>
            </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card className="Cards" style={{width: '18rem'}}>
            <Card.Img variant="top" src="quotesApp.png"/>
            <Card.Body>
                <Card.Title><h3>App de citações</h3></Card.Title>
                <Card.Text>
                    <p>Este é um aplicativo de citações com um design muito simples. O aplicativo obtém citações aleatórias quando você clica no botão.</p>
                </Card.Text>
                <Button variant="none" target="_blank" href="https://quotes-app-a3283.web.app/" ><VisibilityIcon className="icon" /></Button>
                <Button variant="none" target="_blank" href="https://github.com/Rafhael1/QuotesApp" ><CodeIcon className="icon" /></Button>
            </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card className="Cards" style={{width: '18rem'}}>
            <Card.Img variant="top" src="weatherApp.png" style={{maxHeight: '128px'}}/>
            <Card.Body>
                <Card.Title><h3>App Climático</h3></Card.Title>
                <Card.Text>
                    <p>Um app climático bem simples feito com React.</p>
                </Card.Text>
                <Button variant="none" target="_blank" href="https://weather-app-psi-nine.vercel.app/" ><VisibilityIcon className="icon" /></Button>
                <Button variant="none" target="_blank" href="https://github.com/Rafhael1/weather-app" ><CodeIcon className="icon" /></Button>
            </Card.Body>
        </Card>
        </Col>
        </Row>
        <Row>
        <Col>
        <Card className="Cards" style={{width: '18rem'}}>
            <Card.Img variant="top" src="yelp-restaurant.jpeg" style={{maxHeight: '128px', maxWidth: '80px', textAlign: 'center', margin: '0 auto'}} />
            <Card.Body>
                <Card.Title><h3>Restaurantes App</h3></Card.Title>
                <Card.Text>
                    <p>Foi construído com React Native. Uma amostra não está disponível, mas você pode verificar o código abaixo.</p>
                </Card.Text>
                <Button variant="none" target="_blank"  ><VisibilityIcon className=" iconDisabled" /></Button>
                <Button variant="none" target="_blank" href="https://github.com/Rafhael1/Yelp-restaurant-search-app-" ><CodeIcon className="icon" /></Button>
            </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card className="Cards" style={{width: '18rem', background: 'none'}}>
           {/* Placeholder for design purposes */}
        </Card>
        </Col>
        <Col>
        <Card className="Cards" style={{width: '18rem', background: 'none'}}>
            {/* Placeholder for design purposes */}
        </Card>
        </Col>
        </Row>
    </div>
    )
}
