import React from "react";
import { useEffect } from "react";
import "../styles/cart.css";

function Cart() {
  useEffect(() => {
    import("../Utils/Cart.js");
  }, []);
  return (
    <div>
      <Header title="SOYJOY" subtitle=" Your Cart" text="" />
      <section className="cart_product">
        <div className="cart_content_container container">
          <div className="cart_content_container_sub">
            <div className="cart_content_container_sub_head">
              <h2 className="productsHead">Products</h2>
              <div className="cart_contetn_container_sub_head_subber">
                <h3>Quantity</h3>
                <h3>Price</h3>
              </div>
            </div>
            <div className="cart_content">
              {/* Items will be rendered here */}
            </div>
          </div>

          <div className="order">
            <div className="order_summary">
              <div className="order_summary_header">
                <h3>Total Products</h3>
                <div className="total_price">$0</div>
              </div>
              <div className="order_summary_content_sub1">
                <h3>Shipping Fee</h3>
                <h3>Free</h3>
              </div>
              <div className="order_summary_content_sub1">
                <a href="#">Add coupon code</a>
              </div>
            </div>
            <div className="order_summary_content_total">
              <div className="order_summary_contetn_sub2">
                <h3>Total</h3>
                <div className="total_price_two">$0</div>
              </div>
            </div>
          </div>
          <Link className="check_out_btn">Check Out</Link>
        </div>
      </section>
    </div>
  );
}

export default Cart;
