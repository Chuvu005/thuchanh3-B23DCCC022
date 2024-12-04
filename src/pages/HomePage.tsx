import React, { useState } from 'react';
import ProductTable from '../components/ProductTable';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import '../styles/HomePage.css';

const HomePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const products = useSelector((state: RootState) => state.products.products);

  return (
    <div className="home-page">
      <h1>Bảng Thông Tin</h1>

      <div className="search-bar">
        <label htmlFor="search">Tìm kiếm sản phẩm:</label>
        <input
          type="text"
          id="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Nhập tên sản phẩm"
        />
      </div>

      <Link to="/add">
        <button className="add-product-button">Thêm Hàng Hóa</button>
      </Link>

      <ProductTable products={products} searchTerm={searchTerm} />
    </div>
  );
};

export default HomePage;
