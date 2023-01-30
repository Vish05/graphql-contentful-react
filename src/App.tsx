import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainNavigation from './shared/components/Navigation/MainNavigation';
import MainHeader from './shared/components/Header/MainHeader';
import Footer from './shared/components/Footer/Footer';
import ProductList from './products/pages/ProductList';
import ProductDetail from './products/pages/ProductDetail';
import ProductCategory from './products/pages/ProductCategory';
import Aboutus from './about/Aboutus';


function App() {
  return (

    <BrowserRouter>
      <MainNavigation />
      <MainHeader />
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <Routes>
            <Route path='/' element={<ProductCategory />} />
            <Route path='/aboutus' element={<Aboutus />} />
            <Route path='/shop/products/:id/' element={<ProductDetail />} />
            <Route path='/shop' element={<ProductList />} />
          </Routes>
        </div>
      </section>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
