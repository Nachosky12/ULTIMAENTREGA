import { Link } from "react-router-dom";
import ItemList from "../Itemlist/ItemList";

export default function Home() {
    const imgBanner = './banner.jpg';
    return (
        <div>
            <div
                className="h-[900px] w-[100vw] bg-cover bg-center"
                style={{ backgroundImage: `url(${imgBanner})` }}
            >
                <div className="container mx-auto max-w-[1170px] flex flex-col h-[700px] justify-center">
                    <h2 className="text-[#ffffff] font-bold text-[100px] leading-[80px] uppercase">
                        ¡Bienvenido!
                    </h2>
                    <h2 className="text-[#ffffff] font-bold text-[100px] leading-[80px] uppercase">¡Revisa Nuesto Catalogo!</h2>
                    <Link to="/" className="bg-[#2d3a4b] px-[50px] py-[5px] text-[18px] uppercase leading-[46px] flex w-[210px] text-center text-[#ffffff] mt-[30px]">¡Comprar Ahora!</Link>
                
                </div>
            </div>
            <div className="container mx-auto max-w-[1170px] my-[50px]">
                <ItemList/>
            </div>
        </div>
    );
}