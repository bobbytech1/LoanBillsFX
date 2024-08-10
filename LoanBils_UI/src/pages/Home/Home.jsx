import React, { useEffect } from 'react';
import Header from '../../components/Home/Header';
import Hero from '../../components/Home/Hero';
import Services from '../../components/Home/Services';
import Download from '../../components/Home/Download';
import WhyUs from '../../components/Home/WhyUs';


function Home() {
  useEffect(() => {
    const widgetContainer = document.querySelector('.tradingview-widget-container__widget');
    widgetContainer.innerHTML = ''; // Clear any existing content

    // Create and append script for the TradingView widget
    const script = document.createElement('script');
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      "symbols": [
        {
          "proName": "BITSTAMP:BTCUSD",
          "title": "Bitcoin"
        },
        {
          "proName": "BITSTAMP:ETHUSD",
          "title": "Ethereum"
        },
        {
          "description": "Solana",
          "proName": "BYBIT:SOLUSDT.P"
        },
        // Add other symbols as needed
      ],
      "showSymbolLogo": true,
      "isTransparent": true,
      "displayMode": "adaptive",
      "colorTheme": "dark",
      "locale": "en"
    });

    widgetContainer.appendChild(script);
  }, []);

  return (
    <div className='flex flex-col h-full'>
      <Header />
      <Hero />
      <div className="tradingview-widget-container__widget bg-black"></div>
      <Services />
      <Download />
      <WhyUs />
    </div>
  );
}

export default Home;

