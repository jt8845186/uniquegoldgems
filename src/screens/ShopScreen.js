import {apiUrl} from "../config"

const ShopScreen = {
    render: async() => {
    
        const response = await fetch(apiUrl, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(!response || !response.ok) {
            return `<div>Error fetching data</div>`;
        }
        const products = await response.json();

        return `
        <div class="shop-screen-container">

            <div class="categories-div">
                <div class="cat cat-1">
                    <div>BRACELETS</div>
                </div>
                <div class="cat cat-2">
                    <div>RINGS</div>
                </div>
                <div class="cat cat-3">
                    <div>EARRINGS</div>
                </div>
                <div class="cat cat-4">
                    <div>NECKLACES</div>
                </div>
                <div class="cat cat-5">
                    <div>SETS</div>
                </div>
                <div class="cat cat-6">
                    <div>OTHER</div>
                </div>
            </div>
            <div class="result-notice">
                <h5>Showing 1-16 of 43 results</h5>
            </div>
            <ul class="products">
            ${products.map( product => `
            <li>
                <div class="product">
                    <a href="/#/product/${product._id}">
                        <img src="${product.image}" alt="${product.name}" />
                    </a>
                    <div class="product-name">
                        <a href="/#/product/1">
                        ${product.name}
                        </a>
                    </div>
                    <div class="product-brand"> 
                        ${product.brand}
                    </div>
                    <div class="product-price">
                        $${product.price}
                    </div>
                </div>
            </li>
            ` 
            )
            .join('\n')}
        
        
            </ul>
            <div class="pagination">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
            </div>
            <div class="feature-div">
                <div class="col">
                    <img src="https://img.icons8.com/material-outlined/24/000000/successful-delivery.png"/>
                    <div class="feature-txt">Free delivery</div>
                </div>
                <div class="col">
                    <img src="https://img.icons8.com/windows/32/000000/coins.png"/>
                    <div class="feature-txt">Money back guarantee</div>
                </div>
                <div class="col">
                    <img src="https://img.icons8.com/material-outlined/24/000000/chat--v1.png"/>
                    <div class="feature-txt">24/7 support</div>
                </div>
                <div class="col">
                    <img src="https://img.icons8.com/windows/32/000000/warranty-card.png"/>
                    <div class="feature-txt">High quality</div>
                </div>
            </div>
        </div>`;      
    },
};
export default ShopScreen;