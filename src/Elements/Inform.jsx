import React from "react";

function Inform() {
    return(
        <section>
            <h3>Perfume</h3>
            <h1>
                Gabrielle Essence Eau
                De Parfum
            </h1>
            <p>
                A floral, solar and voluptuous
                interperation composed by Oliver
                Polge, Perfumer-Creator for the
                House of CHANEL
            </p>
            <div className="price">
                <h1>149.99</h1>
                <h2>169.99</h2>
            </div>
            <button>
                <img src="icon-cart.svg" />Add to Cart
            </button>
        </section>
    );
}

export default Inform;