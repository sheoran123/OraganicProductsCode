import React from 'react';
import Header from './components/Header'
import ShowCase from './components/ShowCase'
import Products from './components/Products'
import Presenters from './components/Presenters'
import Aboutus from './components/Aboutus'
import Blogs from './components/Blogs'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Header></Header>
      <ShowCase></ShowCase>
      <Products></Products>
      <Presenters></Presenters>
      <Aboutus></Aboutus>
      <Blogs></Blogs>
      <Footer></Footer>
    </div>
  );
}

export default App;
