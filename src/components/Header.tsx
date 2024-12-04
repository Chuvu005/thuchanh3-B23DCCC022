import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/productSlice';
import { v4 as uuidv4 } from 'uuid'; 
import '../styles/Header.css'

const ProductForm: React.FC = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState<number | ''>(''); 
  const [category, setCategory] = useState(''); 
  const dispatch = useDispatch();

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && price && category) {
      dispatch(
        addProduct({
          id: uuidv4(), 
          name,
          price: Number(price),
          category, 
        })
      );
      setName('');
      setPrice('');
      setCategory(''); 
    } else {
      alert('Vui lòng nhập đầy đủ thông tin');
    }
  };

  return (
    <form onSubmit={handleAddProduct}>
      <input
        type="text"
        placeholder="Tên hàng hóa"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Giá hàng hóa"
        value={price}
        onChange={(e) => setPrice(e.target.value ? Number(e.target.value) : '')}
      />
      <input
        type="text"
        placeholder="Danh mục"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button type="submit">Thêm hàng hóa</button>
    </form>
  );
};

export default ProductForm;
