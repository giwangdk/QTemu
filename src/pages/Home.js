import React, {Component} from 'react';
import Button from '../components/atoms/Button'
import Card from '../components/atoms/Card'
import Title from '../components/atoms/Title'
import Brand from '../components/atoms/Brand'
import CardContent from '../components/organism/CardContent'
import Nav from '../components/organism/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'

class Home extends Component{
    render(){
        return(
            <div>
                <Nav/>
                <p>gogo</p>
                <Button className="button button-primary  small ">Learn More</Button>
                <Button className="button button-yellow pill small mt-4 ">Learn More</Button>
                <Card className="card">
                    <Title>Hi halo!</Title>
                </Card>
                <Brand className="brand ">Qtemu</Brand>
                <CardContent/>
            </div>
        )
    }
}

export default Home;