import React, { useContext } from 'react';
import './css/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assests/Assets/dropdown_icon.png';

const ShopCategory = (props) => {

  const all_product = useContext(ShopContext);

  return (
    <div className='shop-catergory'>
      <img src={props.banner} alt="" />
      <div className="shopcatergory-indexsort">
        <p>
          <span>
            Showing 1-12
          </span>out of 36 Products
        </p>
        <div className="shopcategory-sort">
                Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ShopCategory;
