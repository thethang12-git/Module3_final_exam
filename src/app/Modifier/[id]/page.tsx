"use client";
import dataService from '@/src/service/data';
import { useFormik } from 'formik';
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Modifier() {
    const router = useRouter();
    const [productId,setProductById] = useState<any>();
        const params = useParams();
        const { id } = params;
      useEffect(() => {
          dataService.getProductById(parseInt(id as string))
            .then((response) => {
              setProductById(response.data);
            })
            .catch((error) => {
              console.error(error);
            });
      }, [id]);
    const handleSubmit = useFormik({
        enableReinitialize: true,
        initialValues: {
            title: productId?.title || '',
            price: productId?.price || '',
            description: productId?.description || '',
        },
        onSubmit: values => {
          console.log(values);
            dataService.updateProductById(parseInt(id as string), values).then((response) => {
                router.push('/');
            });
        },
    });
  return (
    productId && (
    <Form onSubmit={handleSubmit.handleSubmit}>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Tên</Form.Label>
        <Form.Control  
                    type="text"
                    name="title"
                    value={params.title}
                    onChange={handleSubmit.handleChange} />
        </Form.Group>
      <Form.Group className="mb-3" controlId="price">
        <Form.Label></Form.Label>
        <Form.Control  
                    type="number"
                    name="price"
                    value={params.price}
                    onChange={handleSubmit.handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="description">
        <Form.Label>Mô tả</Form.Label>
        <Form.Control  
                    type="text"
                    name="description"
                    value={params.description}
                    onChange={handleSubmit.handleChange} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form> )
  );
}

export default Modifier;

