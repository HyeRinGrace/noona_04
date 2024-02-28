import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useDispatch} from 'react-redux';

const ContactForm = () => {

    let [name,setName] = useState('');
    let [phoneNumber,setPhoneNumber] = useState(0);
    let dispatch = useDispatch();

    const addContact = (event) =>{
        event.preventDefault();
        dispatch({type:"ADD_USER_INFO", payload:{name:name, phoneNumber:phoneNumber}})

    }



  return (
    <Form onSubmit={addContact}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>이름</Form.Label>
        <Form.Control type="text" placeholder="이름을 입력해주세요." onChange={(event) => setName(event.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formContact">
        <Form.Label>전화번호</Form.Label>
        <Form.Control type="number" placeholder="전화번호를 입력해주세요" onChange={(event) => setPhoneNumber(event.target.value)} />
      </Form.Group>

      <Button variant="warning" type="submit">
        Add
      </Button>
    </Form>
  );
}

export default ContactForm
