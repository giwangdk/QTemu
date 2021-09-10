import React, {Component} from 'react';
import {Container} from 'react-bootstrap';

class Footer extends Component{

    render(){
        return(
            <div>
                <Container>
                    <hr className="mt-5"/>
                    <p className="my-5 text-center font-weight-bold">Copyright Hacktiv8 2018</p>
                </Container>
                
            </div>
        )
    }
}

export default Footer;