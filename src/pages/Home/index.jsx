import React, {useState, useEffect, useContext} from "react"
import { AuthContext } from "../../contexts/Auth/auth"
import { getProducts } from "../../services/api";

export const Home = () => {
    const {authenticated, logout} = useContext(AuthContext);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        (async () => {
            const response = await getProducts();
            setProducts(response.data.data);
            setLoading(false);
        })();
    }, [])


    // useEffect(() => {
    //     const loadData = async () => {
    //         const response = await getProducts();

    //         console.log(response.data.data);
    //         setProducts(response.data.data);
    //         //setLoading(false);
    //     }
    //     loadData();
    // }, [])


    if(loading) {
        return <div className="loading">Carregando...</div>;
    }


    const handleLogout = () => {
        logout();
    }

    return(
        <div>
            <h1>Home page</h1>
            <p>{String(authenticated)}</p>
            <button onClick={handleLogout}>Logout</button>
            <ul>
                {
                    products.map((product) => (
                        <li key={product.id}>
                            {product.id} - {product.name}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}