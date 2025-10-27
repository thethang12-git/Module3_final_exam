"use client";
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import React, { useEffect, useState } from "react";
import dataService from "@/src/service/data";
import { useParams } from "next/navigation";
import { Card } from 'react-bootstrap';
import { Height } from '@mui/icons-material';
import Link from 'next/link';

export default function ProductPage({ params }: { params: { id: string } }) {
  const [productId,setProductById] = useState<any>();
    const routeParams = useParams();
    const { id } = routeParams;
  useEffect(() => {
      dataService.getProductById(parseInt(id as string))
        .then((response) => {
          setProductById(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
  }, [id]);
  return (
    <div>
    {!productId && (
        <Button
          loading
          loadingPosition="start"
          startIcon={<SaveIcon />}
        >
        </Button>
    )}
{productId && (
    <Card style={{ width: '18rem',height:'auto' }}>
        <Card.Img variant="top" src={productId.image} />
        <Card.Body>
        <Card.Title>{productId.title}</Card.Title>
        <Card.Text>
            {productId.description}
        </Card.Text>
        < Button>
            <Link href="/">Trở về</Link>
        </Button>
        </Card.Body>
    </Card>
)}
    </div>
  );
}
function setProductById(data: any) {
    throw new Error("Function not implemented.");
}

