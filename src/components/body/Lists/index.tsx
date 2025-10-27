"use client";
import dataService from '@/src/service/data';
import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useRouter } from "next/navigation";


export default function ProductList() {
    const router = useRouter();
    const [product,setProduct]= React.useState([]);
    useEffect(() => {
        dataService.getAllProducts().then((response) => {
            setProduct(response.data);
        }).catch((error) => {
            console.error(error);
        });
    }, []);
    const handleDelete = (id: number) => {
        confirm("Bạn có chắc muốn xóa sản phẩm này không?????") && dataService.deleteProductById(id).then(() => {
            setProduct(product.filter((item:any) => item.id !== id));
        }).catch((error) => {
            console.error(error);
        });
    };
  return (
    <Table striped bordered hover variant="light">
      <thead>
        <tr>
          <th>STT</th>
          <th>
            Tên sản phẩm</th>
          <th> Giá </th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        <tr>
            
        </tr>
        {product.map((item:any, index:number) => (
            <tr key={item.id}>
                <td>{index + 1}</td>
                <td onClick={() => router.push(`/products/${item.id}`)}>
                    {item.title}
                </td>
                <td>{item.price}</td>
                <td>
                    <Button onClick={() => router.push(`/Modifier/${item.id}`)} variant="primary">Sửa</Button>
                    <Button onClick={() => handleDelete(item.id)} variant="danger">Xóa</Button>
                </td>
            </tr>
        ))}
        
      </tbody>
    </Table>
  );
}
