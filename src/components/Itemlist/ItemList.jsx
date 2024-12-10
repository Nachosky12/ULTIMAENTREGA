import { useEffect, useState } from "react"; //Importamos Hookreact useState
import { getProducts } from "../../data/asyncMock.";
import Loading from "../Loading/Loading"; //Importamos componete Loading

export default function ItemList(){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProducts().then((data) =>{
           setProducts(data)
           setLoading(false);
    });
    }, []);
    
    return(
        <>
            {
                loading? (
                    <Loading />
                ):(
                    <div className="container mx-auto flex flex-warp pb-[200px]">
                        {products.map((prod) =>(
                            <Item {...prod} key={prod.id}/>
                        ))} 
                    </div>
                )
            }
        </>
    )
}



