import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleCardClick = (page) => {
    navigate(page);
  };
  return (
    <div className="home">
      <div className="banner">
        <h1>Welcome to Digistic-Electronics</h1>
        <p>Discover the latest electronic devices</p>
        <button className="shop-now-button">Shop Now</button>
      </div>

      <div className="featured-products">
        <h2>Featured Products</h2>
        <div className='tv'>
          <h2>Refridgerators</h2>
        {/* <div className="card">
          <img src="./src/home/1 (1).jpg" alt="Product 1" />
          <h3>Refridgerator</h3>
          <p>Roch RFR-120S-I Single Door Refrigerator <br/>
KSh 18,399.</p>
          <button className="add-to-cart-button">Add to Cart</button>
        </div> */}
        <div className="card">
          <img src="./home/1 (2).jpg" alt="Product 2" />
          <h3>Refridgerator</h3>
          <p>
Roch RFR-150DT-I Top-Mounted Defrost Fridge <br/>
KSh 27,399</p>
          <button className="add-to-cart-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
        </div>
        <div className="card">
          <img src="./home/1 (3).jpg" alt="Product 2" />
          <h3>Refridgerator</h3>
          <p>
Ramtons RF/257- 2 Door Direct Cool Fridge <br/>
KSh 47,000</p>
          <button className="add-to-cart-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
        </div>
        <div className="card">
          <img src="./home/1 (4).jpg" alt="Product 2" />
          <h3>Refridgerator</h3>
          <p>VON VART-18DMY, Double Door Fridge, <br/>
KSh 32,699</p>
          <button className="add-to-cart-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
        </div>
      
        <button onClick={() => handleCardClick('/homeAppliances')}>click for more</button>
        </div>
        <div className='tv'>
          <h2>Tv's & Audios</h2>
        <div className="card">
          <img src="./tv/1 (1).jpg" alt="Product 2" />
          <h3>VISION</h3>
          <p>Vision Plus VP8832DF 32" HD Frameless Digital LED TV <br/>KSh 10,399</p>
          <button className="add-to-cart-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
        </div>
        {/* <div className="card">
          <img src="./src/assets/tv/1 (2).jpg" alt="Product 2" />
          <h3>TORNADO</h3>
          <p>Tornado 24" Digital LED TV Built-In Receiver<br/>
KSh 8,299</p>
          <button className="add-to-cart-button">Add to Cart</button>
        </div> */}
        <div className="card">
          <img src="./tv/1 (4).jpg" alt="Product 2" />
          <h3>VISION </h3>
          <p>Vision Plus VP8832SF - 32″ Frameless Smart Android TV <br/>
KSh 14,099</p>
          <button className="add-to-cart-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
        </div>
        <div className="card">
          <img src="./tv/1 (3).jpg" alt="Product 2" />
          <h3>VITRON</h3>
          <p>Vitron 4368FS 43" Full HD Smart Android TV <br/>
KSh 21,789</p>
          <button className="add-to-cart-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
        </div>
    
        <button onClick={() => handleCardClick('/tvs')}>click for more</button>
        </div>
        <div className='tv'>
          <h2>Computers</h2>
        {/* <div className="card">
          <img src=".\computers\1 (1).jpg" alt="Product 2" />
          <h3>ITEL</h3>
          <p>Itel Able 1 Notebook, 14", Intel Celeron, 1TB HDD, 4GB RAM<br/>
KSh 18,999</p>
          <button className="add-to-cart-button">Add to Cart</button>
        </div> */}
        <div className="card">
          <img src=".\computers\1 (2).jpg" alt="Product 2" />
          <h3>DELL</h3>
          <p>DELL  OptiPlex 790 SFF Intel Core I3 3.3GHz -4GB DDR3<br/>
KSh 17,999</p>
          <button className="add-to-cart-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
        </div>
        <div className="card">
          <img src=".\computers\1 (3).jpg" alt="Product 2" />
          <h3>HP</h3>
          <p>HP Compaq Pro 6200 SFF Intel Core I3 3.1GHz - 4GB Ram <br/>
KSh 16,999</p>
          <button className="add-to-cart-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
        </div>
        <div className="card">
          <img src=".\computers\1 (4).jpg" alt="Product 2" />
          <h3>DELL</h3>
          <p>DELL OptiPlex 790 SFF Intel Core I3 3.3GHz -8GB <br/>
KSh 19,999</p>
          <button className="add-to-cart-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
        </div>
       
        <button onClick={() => handleCardClick('/computer')}>click for more</button>
        </div>

        <div className='tv'>
          <h2>Networking Devices</h2>
        <div className="card">
          <img src=".\network\1 (5).jpg" alt="Product 2" />
          <h3>XIAOMI Mi</h3>
          <p>XIAOMI Mi 4C Wireless Router 2.4GHz 300Mbps<br/>
KSh 2,199</p>
          <button className="add-to-cart-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
        </div>
        <div className="card">
          <img src=".\network\1 (4).jpg" alt="Product 2" />
          <h3>tenda </h3>
          <p>tenda N300 300 Mbps Wireless WiFi Router<br/>
KSh 1,999</p>
          <button className="add-to-cart-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
        </div>
        <div className="card">
          <img src=".\network\1 (3).jpg" alt="Product 2" />
          <h3>TP Link </h3>
          <p>TP Link TL-WR840N 300Mbps 2.4GHz Wireless Router<br/>
KSh 2,500</p>
          <button className="add-to-cart-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
        </div>
        {/* <div className="card">
          <img src=".\src\network\1 (1).jpg" alt="Product 2" />
          <h3>USB WIFI</h3>
          <p>Generic 600Mbps USB WiFi Adapter Free Driver Wireless Network Card<br/>
KSh 1,059.</p>
          <button className="add-to-cart-button">Add to Cart</button>
        </div> */}
     
        <button onClick={() => handleCardClick('/networking')}>click for more</button>
        </div>
       
        <div className='tv'>
          <h2>Smartphones & tablets</h2>
        <div className="card">
          <img src=".\phone\1 (4).jpg" alt="Product 2" />
          <h3>GENERIC TABLET</h3>
          <p>Generic 10.1" Tablet 8GB RAM-128GB ROM 4G Full Netcom 5GWIFI <br/>
KSh 16,995
</p>
          <button className="add-to-cart-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
        </div>
        <div className="card">
          <img src=".\phone\1 (5).jpg" alt="Product 2" />
          <h3>Tecno Spark</h3>
          <p>Tecno Spark 10 Pro, 6.8", 128GB + 8GB, 50MP, Dual SIM, 5000mAh <br/>
KSh 23,399</p>
          <button className="add-to-cart-button">Add to Cart</button>
        </div>
        <div className="card">
          <img src=".\phone\1 (3).jpg" alt="Product 2" />
          <h3>Tecno Spark</h3>
          <p>Tecno Spark 10 Pro, 6.8", 256GB+8GB,(Dual SIM),5000mAh<br/>
KSh 23,199.</p>
          <button className="add-to-cart-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
        </div>
        {/* <div className="card">
          <img src=".\src\phone\1 (2).jpg" alt="Product 2" />
          <h3>XIAOMI</h3>
          <p>XIAOMI Redmi A1+, 6.52", 2GB+32GB, 8.0MP, 5000mAh, 4G <br/>
KSh 9,799</p>
          <button className="add-to-cart-button">Add to Cart</button>
        </div> */}
       
        <button onClick={() => handleCardClick('/smartphones')}>click for more</button>
        </div>
       
        <div className='tv'>
          <h2>Printers</h2>
        <div className="card">
          <img src=".\printers\1 (1).jpg" alt="Product 2" />
          <h3>Canon PIXMA</h3>
          <p>Canon PIXMA G2420 Printer Scanner Copier, Ink Tank-Black<br/>
KSh 22,559</p>
          <button className="add-to-cart-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
        </div>
        <div className="card">
          <img src=".\printers\1 (2).jpg" alt="Product 2" />
         <h3>Epson</h3>
          <p>Epson L3210 Ink Tank Printer - Print, Scan, Copy<br/>
KSh 29,450</p>
          <button className="add-to-cart-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
        </div>
        {/* <div className="card">
          <img src=".\src\printers\1 (3).jpg" alt="Product 2" />
          <h3>HP</h3>
          <p>HP Scan,Print,Photo Copy With DeskJet 2710 Wireless<br/>
KSh 12,000</p>
          <button className="add-to-cart-button">Add to Cart</button>
        </div> */}
        <div className="card">
          <img src=".\printers\1 (4).jpg" alt="Product 2" />
          <h3>Epson</h3>
          <p>Epson L3210 Ink Tank Printer - Print, Scan, Copy<br/>
KSh 29,450</p>
          <button className="add-to-cart-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
        </div>
       
        <button onClick={() => handleCardClick('/printers')}>click for more</button>
        </div>
       
      </div>
    </div>
  );
}

export default Home;
