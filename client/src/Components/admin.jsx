import axios from "axios";
import { useEffect, useState } from "react";
import styles from "../Style/Admin.module.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import AddProductForm from "./AddProductForm";
import EditProductForm from "./EditProduct";

export default function Admin() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

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
  }, []);

  const handleEdit = async (productId, updatedData) => {
    try {
      const url = `http://localhost:5001/api/products/${productId}`;
      const response = await axios.put(url, updatedData);
      const updatedProduct = response.data;
      setProducts((prevProducts) => {
        const updatedProducts = prevProducts.map((product) => {
          if (product._id === updatedProduct._id) {
            return updatedProduct;
          }
          return product;
        });
        return updatedProducts;
      });
    } catch (error) {
      throw new Error("Failed to update product");
    }
  };

  const handleDelete = async (productId) => {
    try {
      const url = `http://localhost:5001/api/products/${productId}`;
      await axios.delete(url);
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product._id !== productId)
      );
    } catch (error) {
      throw new Error("Failed to delete product");
    }
  };

  const handleAddProduct = () => {
    window.location = "/addproduct";
  };

  const handleEditIconClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCancelEdit = () => {
    setSelectedProduct(null);
  };

  const handleUpdate = (updatedData) => {
    handleEdit(selectedProduct._id, updatedData);
    setSelectedProduct(null);
  };

  return (
    <div className={styles.adminContainer}>
      <div>
        <button className="addproductbutton2" onClick={handleAddProduct}>
          Add New Product
        </button>
      </div>
      <div className={styles.productsContainer}>
        {products.map((product) => (
          <div key={product._id} className={styles.productItem}>
            {selectedProduct && selectedProduct._id === product._id ? (
              <EditProductForm
                product={selectedProduct}
                onCancel={handleCancelEdit}
                onUpdate={handleUpdate}
              />
            ) : (
              <>
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
                    onClick={() => handleEditIconClick(product)}
                  />
                  <FaTrash
                    className={styles.deleteIcon}
                    onClick={() => handleDelete(product._id)}
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
