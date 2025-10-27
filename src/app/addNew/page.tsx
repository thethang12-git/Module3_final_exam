"use client";
import dataService from '@/src/service/data';
import { useFormik } from 'formik';
import { useRouter } from "next/navigation";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function addNew() {
    const router = useRouter();
    const handleSubmit = useFormik({
        initialValues: {
            title: '',
            price: '',
            description: '',
        },
        onSubmit: values => {
            dataService.addNewProduct(values).then((response) => {
                router.push('/');
            });
        },
    });
  return (
    <Form onSubmit={handleSubmit.handleSubmit}>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Tên</Form.Label>
        <Form.Control  
                    type="text"
                    name="title"
                    value={handleSubmit.values.title}
                    onChange={handleSubmit.handleChange} />
        </Form.Group>
      <Form.Group className="mb-3" controlId="price">
        <Form.Label>Giá</Form.Label>
        <Form.Control  
                    type="number"
                    name="price"
                    value={handleSubmit.values.price}
                    onChange={handleSubmit.handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="description">
        <Form.Label>Mô tả</Form.Label>
        <Form.Control  
                    type="text"
                    name="description"
                    value={handleSubmit.values.description}
                    onChange={handleSubmit.handleChange} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default addNew;