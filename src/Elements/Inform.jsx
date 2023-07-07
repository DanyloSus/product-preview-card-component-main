import React from "react";

function Inform() {
    function changeClass() {
        document.getElementById("butt").className = "on"
    }

    return(
        <section>
            <h3 className="animation" style={{animationDelay: "1s"}}>Perfume</h3>
            <h1 className="animation" style={{animationDelay: "1.25s"}}>
                Gabrielle Essence Eau
                De Parfum
            </h1>
            <p className="animation" style={{animationDelay: "1.5s"}}>
                A floral, solar and voluptuous
                interperation composed by Oliver
                Polge, Perfumer-Creator for the
                House of CHANEL
            </p>
            <div className="price animation" style={{animationDelay: "1.75s"}}>
                <h1>149.99</h1>
                <h2>169.99</h2>
            </div>
            <button id="butt" className="animation" style={{animationDelay: "2s"}} onClick={changeClass}>
                <img 
                    src="icon-cart.svg" 
                    alt="icon cart" 
                />Add to Cart
            </button>
        </section>
    );
}

export default Inform;