import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const SearchBox = () => {
  const [searchName, setSearchName] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    event.preventDefault();
    dispatch({ type: 'SEARCH_NAME', payload: { searchName } });
  };

  return (
    <div>
      <Form onSubmit={handleSearch}>
        <Form.Label>전화번호부</Form.Label>
        <Row>
          <Col lg={10}>
            <Form.Control
              type="text"
              placeholder="이름을 입력해주세요."
              value={searchName}
              onChange={(event) => setSearchName(event.target.value)}
            />
          </Col>
          <Col lg={2}>
            <Button type="submit" variant="warning">
              찾기
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default SearchBox;