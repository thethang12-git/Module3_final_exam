"use client";
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <div style={{height: "100vh",display: "flex",justifyContent:'center'}}>
    <Card style={{ width: '20rem',height: '25rem',alignSelf:'center',justifySelf:'center'}}>
      <Card.Img variant="top" src="https://media.istockphoto.com/id/1361394182/vi/anh/h%C3%A0i-h%C6%B0%E1%BB%9Bc-ch%C3%A2n-dung-m%C3%A8o-ng%E1%BA%AFn-anh-tr%C3%B4ng-s%E1%BB%91c-ho%E1%BA%B7c-ng%E1%BA%A1c-nhi%C3%AAn.jpg?s=1024x1024&w=is&k=20&c=J5ofxU3toDtZnHPUXb5H4b5H3PAQXwQfvgTfCJ6q2vo=" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <button>
      <Link href="/test">Go to Test Page</Link>
    </button>
    </div>
  );
}

export default BasicExample;