"use client";
import { Button } from "react-bootstrap";
import ProductList from "../components/body/Lists";
import Link from "next/link";
export default function MainApp() {
  return (
    <>
      <Link href="/addNew">
        <Button> Thêm sản phẩm  
        </Button>
      </Link>
      <ProductList />
    </>
  );
}
