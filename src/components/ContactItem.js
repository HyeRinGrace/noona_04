import React from 'react'
import {Row,Col} from 'react-bootstrap';
import '../App.css';

const ContactItem = ({item}) => {

    console.log(item);
  return (
    <Row className='ItemBox' >
        <Col lg = {2}>
            <img width = {60} src='https://t3.ftcdn.net/jpg/03/53/11/00/360_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg'></img>
        </Col>
        <Col lg = {10}>
            <div>
                {item.name}
                <span style={{
                    fontSize:'13px',
                    margin:'50px',
                    color:'green',
                }}>{item.nickName}</span>
            </div>
            <div>
                {item.phoneNumber}
            </div>

        </Col>
    </Row>
  )
}

export default ContactItem
