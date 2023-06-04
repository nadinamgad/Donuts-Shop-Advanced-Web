import axios from "axios";
import { useEffect, useState } from "react";
import styles from "../Style/Admin.module.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import AddProductForm from "./AddProductForm";


export default function Admin() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/products");
        setProducts(response.data);
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    };

    fetchData();
  },);

  const handleEdit = async (productId, updatedData) => {
    // try {
    //   const url = `http://localhost:5001/api/products/${productId}`;
    //   const response = await axios.put(url, updatedData);
    //   return response.data;
    // } catch (error) {
    //   throw new Error("Failed to update donut");
    // }
    setSelectedProduct(product);
  };
  
  const handleDelete = async (productId) => {
    try {
      const url = `http://localhost:5001/api/products/${productId}`;
      const response = await axios.delete(url);
      return response.data;
    } catch (error) {
      throw new Error("Failed to delete donut");
    }

  };

  const handleAddProduct = () => {
    window.location = '/addproduct';
  };


  return (
    <div className={styles.adminContainer}>
        <div>
      <h1>Admin Page</h1>

      <button onClick={handleAddProduct}>Add New Product</button>

        </div>
      <div className={styles.productsContainer}>
        {products.map((product) => (
          <div key={product._id} className={styles.productItem}>
            <h2>{product.name}</h2>
            <p>{product.category}</p>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <img
              src={product.image}
              alt={product.name}
              className={styles.productImage}
            />
            <div className={styles.iconsContainer}>
              <FaEdit
                className={styles.editIcon}
                onClick={() => handleEdit(product._id)}
              />
              <FaTrash
                className={styles.deleteIcon}
                onClick={() => handleDelete(product._id)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
