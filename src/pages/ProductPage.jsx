import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './product.css';

 


const schema = yup.object().shape({
  title: yup.string().required('Title is required'),
  price: yup.string().typeError('Price must be a number').required('Price is required'),
  image: yup.mixed().required('Image is required'),
  description: yup.string().required('Description is required'),
});

const ProductPage = ({ onAddNewProduct }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const [selectedPage, setSelectedPage] = useState('computer'); // Default selected page is 'computer'





  const onSubmit = (data) => {
    console.log(data);
      reset();

  }; 

  return (
    <div className="product-form-container">
      <h1>Add a New Product</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" {...register('title')} />
          {errors.title && <p>{errors.title.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input type="text" id="price" {...register('price')} />
          {errors.price && <p>{errors.price.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input type="file" id="image" {...register('image')} />
          {errors.image && <p>{errors.image.message}</p>}
        </div>

        <button onClick={uploadImage}>Upload</button>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea id="description" {...register('description')} />
          {errors.description && <p>{errors.description.message}</p>}
        </div>

        {/* Select dropdown for choosing the page */}
        <div className="form-group">
          <label htmlFor="selectedPage">Select Page</label>
          <select
            id="selectedPage"
            {...register('selectedPage')}
            value={selectedPage}
            onChange={(e) => setSelectedPage(e.target.value)}
          >
            <option value="computer">Computer</option>
            <option value="homeappliances">homeappliances</option>
            <option value="networking">networking</option>
            <option value="tvs">tv</option>
            <option value="smartphones">smartphones</option>
            <option value="printers">printers</option>
            {/* Add more options for other pages as needed */}
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ProductPage;
