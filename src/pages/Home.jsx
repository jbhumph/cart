import React from 'react';
import shoppingImage from '../assets/shopping1.jpg';

function Home() {
  return (
    <div className="page">
        <h1>Welcome to the Shopping Megastore!</h1>
        <div className='homeText'>This is your one stop shop for all things shopping!</div>
        <div className="homeBanner">
            <div>
                <img src={shoppingImage} alt="Shopping" style={{ width: '20em', height: 'auto', margin: '2em'}} />
            </div>
            <div className="homeBannerText">"Welcome to the Shopping Megastore, where your wildest consumer dreams come true! Why settle for what you need when you can have everything you want? Dive into a world of endless aisles, overflowing carts, and deals so good you'll wonder if we're joking (we're not). Remember, life is short—buy the shoes, the gadgets, the kitchen sink, and maybe even a second one for good measure. Overconsumption has never looked this good!"</div>
        </div>    
    </div>
  );
}
export default Home;