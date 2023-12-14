
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import {  useGetAllproductsQuery } from "../features/productsApi";
import { addToCart } from "../features/cartSlice";

const Home = () => {
       const {data, error, isLoading} = useGetAllproductsQuery()
       const dispatch = useDispatch();
       const history = useHistory();

       const handleAddToCart = (product) => {
              dispatch(addToCart(product))
              history.push("/cart");
       }


       return <div className="home-container">
              {isLoading ? (
                     <p>Loading...</p> )
                     : error ? (
                     <p>An error occurred...</p>
                     ) : (
                     <>
                     <h2>Avid's Apparel collection</h2>
                     <div className="products">
                            {data?.map( product => <div key={product.id} className="product">
                                   <h3>{product.category}</h3>
                                   <img src={product.image} alt={product.name} />
                                   <h3>{product.title}</h3>
                                   <div className="details">
                                          {/* <span>{product.description}</span> */}
                                          <span className="price">
                                                 ${product.price}
                                          </span>
                                          <button onClick={() => handleAddToCart(product)}>Buy</button>
                                   </div>
                            </div>
                            )}
                     </div>
                     </>
                     )
                     }
       </div>
}

export default Home;