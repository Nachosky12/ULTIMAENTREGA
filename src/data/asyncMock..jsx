
export const products = [
   
    {
        id: 1,
        name: 'Poleras',
        price: 123,
        despcription: 'Polera unisex, confeccionada en algodón 100% premium, ideal para quienes buscan comodidad y estilo en su vestuario diario. Su corte moderno y relajado se adapta perfectamente a cualquier tipo de cuerpo, y su suave textura te brindará una sensación agradable durante todo el día.',
        stock: 63,
        img: 'https://tiendasup.cl/wp-content/uploads/2022/07/D_NQ_NP_813076-MLC48926374306_012022-W.jpg',
        category: 'poleras'
    },
    {
        id: 2,
        name: 'Zapatos',
        price: 234,
        despcription: 'Descubre nuestros elegantes zapatos casuales de cuero sintético, diseñados para brindarte estilo y confort en cada paso. Perfectos para el día a día, estos zapatos son ideales tanto para el trabajo como para ocasiones informales.',
        stock: 88,
        img: 'https://calzadoforte.com/wp-content/uploads/2016/09/01-jpg.webp',
        category: 'zapatos'
    },
    {
        id: 3,
        name: 'Pantalones',
        price: 345,
        despcription: 'Nuestros pantalones casuales de tela stretch, diseñados para ofrecerte comodidad y estilo en cualquier ocasión. Perfectos para un día de trabajo, un paseo o una salida con amigos, estos pantalones son una adición esencial a tu guardarropa.',
        stock: 67,
        img: 'https://siouxjeans.cl/dw/image/v2/BFRS_PRD/on/demandware.static/-/Sites-sioux-m-catalog/default/dw45c3a821/images/hi-res/2441199200006NE_1.jpg?sw=550&sh=756&sm=fit',
        category: 'pantalones'
    },
    {
        id: 4,
        name: 'Abrigos',
        price: 456,
        despcription: 'Descubre nuestro abrigo elegante de lana, una pieza clave para mantenerte abrigado y a la moda durante la temporada fría. Perfecto para combinar con tus looks formales o casuales, este abrigo es ideal para cualquier ocasión.',
        stock: 51,
        img: 'https://media.gq.com.mx/photos/5feb346e34f0ef41de7cf15b/4:3/w_2664,h_1998,c_limit/abrigo.jpg',
        category: 'abrigos'
    },
    {
        id: 5,
        name: 'Camisas',
        price: 567,
        despcription: 'Presentamos nuestra camisa clásica de algodón, un básico atemporal que combina elegancia y comodidad. Perfecta para el trabajo, reuniones o salidas informales, esta camisa es un must-have en cualquier guardarropa.',
        stock: 25,
        img: 'data:image/jpeg;base64,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',
        category: 'camisas'
    },
    {
        id: 6,
        name: 'Buzos',
        price: 678,
        despcription: 'Nuestro buzo deportivo de felpa, diseñado para brindarte comodidad y estilo en tus actividades diarias. Ideal para el gimnasio, paseos al aire libre o momentos de relajación en casa, este buzo es una opción versátil y acogedora.',
        stock: 94,
        img: 'https://sparta.cl/media/catalog/product/p/a/pantalon-buzo-hombre-new-balance-negro-lateral.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=550&width=600&canvas=600:550',
        category: 'buzos'

    },
    {
        id: 7,
        name: 'Accesorios',
        price: 789,
        despcription: 'Descubre nuestro elegante set de accesorios que incluye una bufanda y un gorro, perfectos para complementar tu look durante la temporada fría. Diseñados con atención al detalle, estos accesorios son ideales para mantenerte abrigado y a la moda.',
        stock: 71,
        img: 'https://almomento.mx/wp-content/uploads/2022/07/IMG_20220707_164913.jpg',
        category: 'accesorios'
    },
    {
        id: 8,
        name: 'Gorras',
        price: 890,
        despcription: 'Nuestra gorra ajustable de algodón, un accesorio esencial para cualquier outfit. Ideal para protegerte del sol y aportar un toque moderno a tu look diario, esta gorra combina estilo y funcionalidad.',
        stock: 50,
        img: 'https://leaked.cl/store/18826-medium_default/gorro-new-era-new-york-yankees-59fifty-azul-marino.jpg',
        category: 'gorras'
    },
    {
        id: 9,
        name: 'Chaquetas',
        price: 987,
        despcription: 'Presentamos nuestra chaqueta ligera de nylon, el compañero ideal para tus aventuras al aire libre y los días de clima cambiante. Con un diseño funcional y moderno, esta chaqueta es perfecta para cualquier ocasión, desde paseos casuales hasta actividades deportivas.',
        stock: 47,
        img: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCL/115562663_01/w=800,h=800,fit=pad',
        category: 'chaquetas'
    },
    {
        id: 10,
        name: 'Zapatillas',
        price: 876,
        despcription: 'Presentamos nuestras zapatillas deportivas de alto rendimiento, diseñadas para brindarte comodidad y soporte en cada paso. Perfectas para entrenamientos en el gimnasio, carreras al aire libre o un estilo casual diario, estas zapatillas son un must-have para los amantes de la actividad física.',
        stock: 39,
        img: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCL/115558312_01/w=800,h=800,fit=pad',
        category: 'zapatillas'
    },
    {
        id: 11,
        name: 'Bañadores',
        price: 765,
        despcription: 'Descubre nuestro bañador deportivo de secado rápido, diseñado para ofrecerte comodidad y estilo en la playa o la piscina. Perfecto para nadar, hacer surf o simplemente relajarte al sol, este bañador es un esencial para tu guardarropa de verano.',
        stock: 82,
        img: 'https://http2.mlstatic.com/D_NQ_NP_962816-CBT73936008815_012024-O.webp',
        category: 'bañadores'
    },
    {
        id: 12,
        name: 'Hoodies',
        price: 654,
        despcription: 'Presentamos nuestro hoodie de felpa con capucha, la prenda perfecta para mantenerte cálido y cómodo en cualquier ocasión. Ideal para días frescos, sesiones de entrenamiento o momentos de relax en casa, este hoodie combina estilo y funcionalidad.',
        stock: 86,
        img: 'https://urbandiekzo.cl/cdn/shop/products/image_c5e775c8-50d0-468b-991d-8feb7417525a_720x1080.jpg?v=1611111918',
        category: 'hoodies'
    },
];

//HACEMOS PROMESA PARA QUE NOS DE UN RESULTADO Y SETEAMOS UN TIMEOUT.
export const getProducts = () =>{
    return new Promise((res) =>{
        setTimeout(() =>{
            res(products)
        }, 3000);
    })
};

//ARROJAMOS UN PARAMETRO PARA QUE FILTRE UN PRODUCTO MEDIANTE UNA ID.
export const getProductById = (id) => {
    return new Promise((res) => {
        const productoFiltrado = products.find((product) => product.id === parseInt(id));
        setTimeout(() => {
            res(productoFiltrado);
        }, 3000);
    });
};

//FILTRAMOS PRODUCTOS PARA QUE COINCIDAN CON SU CATEGORIA
export const getProductByCategory = (category) => {
    return new Promise((res) => {
        const productosFiltrados = products.filter((product) => product.category === category);
        setTimeout(() => {
            res(productosFiltrados);
        }, 3000);
    });
};