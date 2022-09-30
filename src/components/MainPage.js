import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./MainPage.css";
import axios from "axios";

const MainPage = () => {
  //let Product1=React.useState(); //초기값, 콜백함수(변경된 초기값)
  //let products=product1{0}; //초기값
  //let setproducts=product1{0}; //변경된 초기값

  let [products, setProducts] = React.useState([]);
  //컴포넌트가 랜더될떄 딱 한번 실행
  //useEffect(()=>{실행문},[])
  useEffect(() => {
    axios
      .get(
        "https://38296b07-33cb-460f-80bc-e30368fe0bd9.mock.pstmn.io/products"
      )
      .then((res) => {
        products = res.data.products;
        console.log(products);
        setProducts(products);

      })
      .catch((err) => {
        return console.log(err);
      });
  }, []);

  return (
    <>
      <div id="header">
        <div id="header-area">
          <img src="images/icons/logo.png" alt="logo" />
        </div>
      </div>
      <div id="body">
        <div id="banner">
          <img src="images/banners/banner1.png" alt="" />
        </div>
        <h2>Products</h2>
        <div id="product-list">
          {products.map((product, idx) => {
            console.log('map에서 반환된 product:',product);
            return (
              <div class="product-card" key={idx}>
                <Link className="product-link" to={`/product/${idx}`}>
                  <div>
                    <img
                      class="product-img"
                      src={product.imageUrl}
                      alt={product.name}
                    />
                  </div>
                  <div class="product-content">
                    <span class="product-name">{product.name}</span>
                    <span class="product-price">{product.price}원</span>
                    <div class="product-seller">
                      <img
                        class="product-avatar"
                        src="images/icons/avatar.png"
                        alt=""
                      />
                      <span>내추럴코어</span>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div id="footer">
        <a href="#">회사소개</a>
        <a href="#">이용약관</a>
        <a href="#">통신판매업:123-1234</a>
        <a href="#">사업자등록번호:456-4567</a>
        <a href="#">개인정보...</a>
      </div>
    </>
  );
};
export default MainPage;
