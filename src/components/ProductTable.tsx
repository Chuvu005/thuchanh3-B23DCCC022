import React from 'react';
import { useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { removeProduct } from '../redux/productSlice';
import { Product } from '../types/product';
import { Link } from 'react-router-dom';
import '../styles/ProductTable.css'; // Import file CSS của ProductTable

interface Props {
  products: Product[];
  searchTerm: string;  // Nhận prop searchTerm
}

const ProductRow: React.FC<{ product: Product }> = ({ product }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeProduct(product.id));
  };

  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>{product.category}</td>
      <td className="actions">
        <Link to={`/edit/${product.id}`} className="edit-button">
          Chỉnh sửa
        </Link>
        <button onClick={handleRemove} className="delete-button">
          Xóa
        </button>
      </td>
    </tr>
  );
};

const ProductTable: React.FC<Props> = ({ products, searchTerm }) => {
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <table className="product-table">
      <thead>
        <tr>
          <th>Tên</th>
          <th>Giá</th>
          <th>Danh mục</th>
          <th>Hành động</th>
        </tr>
      </thead>
      <tbody>
        {filteredProducts.map((product) => (
          <ProductRow key={product.id} product={product} />
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
