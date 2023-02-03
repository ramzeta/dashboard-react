import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, Form as FormBS, Container, Row, Col } from 'react-bootstrap';

const MyForm = () => (
  <Container>
    <Row>
      <Col xs={12} md={8}> 
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={values => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <FormBS.Group controlId="formEmail">
                <FormBS.Label>Email address</FormBS.Label>
                <Field type="email" name="email" as={FormBS.Control} />
                <ErrorMessage name="email" component="div" />
              </FormBS.Group>
              <FormBS.Group controlId="formPassword">
                <FormBS.Label>Password</FormBS.Label>
                <Field type="password" name="password" as={FormBS.Control} />
                <ErrorMessage name="password" component="div" />
              </FormBS.Group>
              <Button type="submit" disabled={isSubmitting}>
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </Col>
    </Row>
  </Container>
);

export default MyForm;