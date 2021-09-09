import React, {Component} from 'react';
import Button from '../components/atoms/Button'
import Card from '../components/atoms/Card'
import Title from '../components/atoms/Title'
import 'bootstrap/dist/css/bootstrap.min.css'

class Home extends Component{
    render(){
        return(
            <div>
                <p>gogo</p>
                <Button className="button button-primary  small ">Learn More</Button>
                <Button className="button button-pink pill small mt-4 ">Learn More</Button>
                <Card className="card">
                    <Title>Hi halo!</Title>
                </Card>
            </div>
        )
    }
}

export default Home;