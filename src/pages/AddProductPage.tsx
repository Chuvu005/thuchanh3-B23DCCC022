import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/productSlice';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';
import '../styles/AddProductPage.css'; 

const AddProductPage: React.FC = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState<number | ''>(''); 
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const categories = ['Điện tử', 'Thời trang', 'Sức khỏe', 'Thực phẩm', 'Gia dụng']; // Danh sách danh mục

  const handleAddProduct = () => {
    if (name && price && category) {
      dispatch(
        addProduct({
          id: nanoid(),
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

  return (
    <div className="add-product-page">
      <h1>Thêm sản phẩm mới</h1>
      <div>
        <label>
          Tên sản phẩm:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Giá:
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value ? Number(e.target.value) : '')}
          />
        </label>
      </div>
      <div>
        <label>
          Danh mục:
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Chọn danh mục</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </label>
      </div>
      <button onClick={handleAddProduct}>Thêm sản phẩm</button>
    </div>
  );
};

export default AddProductPage;
