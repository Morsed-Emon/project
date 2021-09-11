
import data from'../data.js';

const HomeScreen={
    render:() =>{

        const{products}=data;
        return `
        <ul class="products">
        ${products.map
            (product=>`
            <li>
            <div class="product">
            <a href="/#/product/${product._id}">
            <img src="${product.image}">
            </a>
            <div class="product-name">
                <a href="">Fit slim Shirt
                ${product.name}
                </a>
            </div>
            <div class="product-brand">
                Nike
                ${product.brand}
            </div>
            <div class="Product-price">
                500 Tk.
                ${product.price}
            </div>
        </div>
  
            </li>
            
            `

            
     )
    .join('\n')
    }
      ` ; 
        
    },
};

export default HomeScreen;