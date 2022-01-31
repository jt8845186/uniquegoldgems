import { getProduct } from "../api";
import { parseRequestUrl } from "../utils";
import Rating from "./components/Rating"

const ProductScreen = {
    after_render: () => {
        const request = parseRequestUrl();
        document.getElementById('addToCartButton').addEventListener('click', () => {
            document.location.hash = `/cart/${request.id}`;
        });
    },
    render: async () => {  
        const request = parseRequestUrl();
        const product = await getProduct(request.id);
        return `
        <div class="product-screen-container">
            <div class="breadcrumb">
                <div> Home </div>
                <div> > </div>
                <div> Shop </div>
                <div> > </div>
                <div> ${product.name} </div>
            </div>
            <div class="product-details-container">
                <div class="product-image-container"> 
                    <div class="product-image"> 
                        <img src="${product.image}" />
                    </div>
                </div>
                <div class="product-details">
                    <h1>${product.name}</h1>
                    <h4 class="price">$${product.price}</h4>
                    <h4>${product.brand}
                    </h4>
                    <h5 class="product-rating">
                        ${Rating.render({value: product.rating,
                        text: `${product.numReviews} reviews`,
                        })}
                    </h5>
                    <div class="add-to-cart-container">
                        <div class="quantity-numbers">
                            <select name="quantity">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                            </select>   
                            <span class="stock-count"> ${product.countInStock > 0 ?
                                 `<span class="success">${product.countInStock} In Stock</span>` :
                                 `<span class="error">${product.countInStock} Unavailable</span>`}</span> 
                        </div>
                        <div class="quantity-button">
                            <button id="addToCartButton" class="btn">Add to Cart</button>
                        </div>
                        <div class="sku">
                            <h5>SKU: 67967967967</h5>
                        </div>
                        <div class="category">
                            <h5>CATEGORY: ${product.category}</h5>
                        </div>
                        <div class="category">
                            <h5>TAGS: ${product.category}</h5>
                        </div>
                    </div>
                </div>
                <div class="product-description">
                    <div class="description-accordion">
                        <details>
                            <summary>Description</summary>
                            <p></p>
                        </details>
                        <details>
                            <summary>Additional Information</summary>
                            <p></p>
                        </details>
                        <details>
                            <summary>Reviews</summary>
                            <p></p>
                        </details>
                    </div>
                </div>
                <div class="feature-div product-featured-div">
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
            </div>
        </div>`;      
    },
};
export default ProductScreen;