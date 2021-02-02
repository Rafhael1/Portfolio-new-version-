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
                <Card.Title><h3>Recipes App</h3></Card.Title>
                <Card.Text>
                    <p>This is a recipes app, you can search for ingredients and dishes and get many different recipes.</p>
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
                <Card.Title><h3>Quotes App</h3></Card.Title>
                <Card.Text>
                    <p>This is a quotes app with a very simple design. The app gets random quotes from an external API when you click the button.</p>
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
                <Card.Title><h3>Weather App</h3></Card.Title>
                <Card.Text>
                    <p>This is a simple weather app built with React.</p>
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
                <Card.Title><h3>Restaurants App</h3></Card.Title>
                <Card.Text>
                    <p>Search for restaurants. It was built with React Native. A sample is not available but you can check its code down below.</p>
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
