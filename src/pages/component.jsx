import React, { useState } from 'react';
import ProductPage from './ProductPage'; // Adjust the import path according to your project structure

function component() {
  const addNewProductToPage = (data, selectedPage) => {
    // Logic to add the product data to the selected page
    console.log('Adding product to page:', selectedPage);
    console.log('Product data:', data);
  };

  return (
    <div>
      {/* Other content */}
      <ProductPage onAddNewProduct={addNewProductToPage} />
      {/* Other content */}
    </div>
  );
}

export default component;
