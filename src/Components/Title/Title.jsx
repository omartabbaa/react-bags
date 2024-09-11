// src/Components/TileComponent/Tile.jsx
function Tile({ image, title, text, altText }) {
    return (
        <section>
            {image ? (
                <img src={image} alt={altText} />
            ) : (
                <>
                    <h2>{title}</h2>
                    <p>{text}</p>
                </>
            )}
        </section>
    );
}

export default Tile;