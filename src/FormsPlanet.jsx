import React from "react";
import { Form, Button } from "react-bootstrap";

const FormsPlanet = () => {
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
      <div className="d-flex justify-content-end mt-4">
        <Button className="btn-grey" type="cancel">
          cancel
        </Button>
        <Button className="btn-submit" type="submit">
          create planet
        </Button>
      </div>
    </Form>
  );
};

export default FormsPlanet;
