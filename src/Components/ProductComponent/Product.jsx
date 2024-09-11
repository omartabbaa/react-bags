
// eslint-disable-next-line react/prop-types
function Product ({image, price, name, altText}) {



    return (
        <article>

            <img src={image} alt={altText}/>
            <p>{name}</p>
            <h4>{price}</h4>
        </article>

    )
}

export default Product;