import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { editProduct } from '../redux/productSlice';
import { useParams, useNavigate } from 'react-router-dom';
import { Product } from '../types/product';
import '../styles/EditProductPage.css';

const EditProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = useSelector((state: RootState) =>
    state.products.products.find((p) => p.id === id)
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  
  const [name, setName] = useState('');
  const [price, setPrice] = useState<number | ''>('');
  const [category, setCategory] = useState('');
  
  
  const categories = ['Điện tử', 'Thời trang', 'Nhà cửa', 'Sách', 'Thực phẩm'];

  
  useEffect(() => {
    if (product) {
      setName(product.name);
      setPrice(product.price);
      setCategory(product.category);
    }
  }, [product]);

  
  const handleSubmit = () => {
    if (name && price && category) {
      dispatch(
        editProduct({
          id: id!, 
          name,
          price: Number(price),
          category,
        })
      );
      navigate('/');
    } else {
      alert('Vui lòng nhập đầy đủ thông tin');
    }
  };

  if (!product) {
    return <div className="error-message">Không tìm thấy sản phẩm</div>;
  }

  return (
    <div className="edit-product-page">
      <h1>Chỉnh sửa sản phẩm</h1>
      <div className="input-group">
        <label htmlFor="name">Tên sản phẩm:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Tên sản phẩm"
        />
      </div>
      <div className="input-group">
        <label htmlFor="price">Giá sản phẩm:</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value ? Number(e.target.value) : '')}
          placeholder="Giá sản phẩm"
        />
      </div>
      <div className="input-group">
        <label htmlFor="category">Danh mục:</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Chọn danh mục</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      <button className="submit-button" onClick={handleSubmit}>Cập nhật</button>
    </div>
  );
};

export default EditProductPage;
