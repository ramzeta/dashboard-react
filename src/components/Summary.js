import React from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

function Summary(props) {
  const { formik } = props;
  return (
    <Card>
      <Card.Body>
        <Card.Text>
          <pre>{JSON.stringify(formik.values, null, 2)}</pre>
        </Card.Text>
      </Card.Body>
      <Button variant="danger" type="Submit">
        Login
      </Button>
    </Card>
  );
}

export default Summary;