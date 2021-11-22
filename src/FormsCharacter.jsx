import React from "react";
import { Form, Button } from "react-bootstrap";

const FormsCharacter = () => {
  return (
    <Form>
      <Form.Group controlId="formFile">
        <Form.Label>Image</Form.Label>
        <Form.Control type="file" />
        <Form.Text className="text-muted">
          Paste the URL of a JPG or PNG of max 20 kb
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="formText">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group controlId="formTextarea">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Form.Group controlId="formTextarea">
        <Form.Label>Friends</Form.Label>
        <Form.Select aria-label="Default select example">
          <option>Select friends</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </Form.Group>
      <div className="d-flex justify-content-end mt-4">
        <Button className="btn-grey" type="cancel">
          cancel
        </Button>
        <Button className="btn-submit" type="submit">
          create character
        </Button>
      </div>
    </Form>
  );
};

export default FormsCharacter;
