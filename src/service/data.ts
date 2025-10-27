import axios from "axios";

export default class dataService {
    static async getAllProducts() {
        return await axios.get("http://localhost:3000/products");
    }
    static async getProductById(id: number) {
        return await axios.get(`http://localhost:3000/products/${id}`);
    }
    static async addNewProduct(data: any) {
        return await axios.post("http://localhost:3000/products", data);
    }
    static async deleteProductById(id: number) {
        return await axios.delete(`http://localhost:3000/products/${id}`);
    }
    static async updateProductById(id: number, data: any) {
        return await axios.put(`http://localhost:3000/products/${id}`, data);
    }
}