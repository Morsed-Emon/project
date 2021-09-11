import React from 'react';

import data from './data';
function App() {
  return (
        <><nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><h1>ESTORE</h1></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarColor01">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link active" href="#"><h4>Home</h4>
                <span class="visually-hidden">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Sign in"><h4>Sign In</h4></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Cart"><h4>Cart</h4></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/About"><h4>About</h4></a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true"
                aria-expanded="false"><h6>Category</h6></a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Men</a>
                <a class="dropdown-item" href="#">Women</a>
                <a class="dropdown-item" href="#">Child</a>
              </div>
            </li>
          </ul>
          <form class="d-flex">
            <input class="form-control me-sm-2" type="text" placeholder="Search"></input>
          </form>
        </div>
      </div>
    </nav>
    <main id="main-container">
        <div>
          {
            data.products.map((product)=> 
            <ul  class="products">
            <li>
              <div key={products._id} class="product">
                <a href={`/product/${product._id}`}>
                  <img class="medium" src={products.image}></img>
                </a>
                <div class="product-name">
                  <a href={`/product/${products._id}`}><h1>{product.name}</h1></a>
                </div>
                <div class="product-rating">
                  <span>
                    <i class="fa fa-star"></i>
                  </span>
                  <span>
                    <i class="fa fa-star"></i>
                  </span>
                  <span>
                    <i class="fa fa-star"></i>
                  </span>
                  <span>
                    <i class="fa fa-star"></i>
                  </span>
                  <span>
                    <i class="fa fa-star"></i>
                  </span>
                </div>
                <div class="product-brand">
                  ${products.brand}
                </div>
                <div class="Product-price">
                  ${products.price}
                </div>
              </div>
            </li>
          </ul>  )
          }
         
         
         
         
         
         
         
         

         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         

         
         
         
         
         
         
         
         

         
        </div>
      </main>
      <footer>
        Developed By Morsed Emon
      </footer></>
        
    
    
  );
}

export default App;
