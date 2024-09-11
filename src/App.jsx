import './App.css';
import Button from "./Components/ButtonComponent/Button.jsx";
import Product from "./Components/ProductComponent/Product.jsx";
import bag1 from './assets/bag_1.png';
import bag2 from './assets/bag_2.png';
import bag3 from './assets/bag_3.png';
import Title from "./Components/Title/Title.jsx";
import brandImage from './assets/brand.png';
import storyImage from './assets/our_story.png';

function App() {
    const ButtonNames = [
        { name: "to the collection" },
        { name: "shop all bags" },
        { name: "pre-orders" }
    ];

    const products = [
        {
            imgSrc: bag1,
            altText: "The Handy Bag",
            name: "the handy bag",
            price: "€400"
        },
        {
            imgSrc: bag2,
            altText: "The Handy Bag",
            name: "the handy bag",
            price: "€250"
        },
        {
            imgSrc: bag3,
            altText: "The Handy Bag",
            name: "the handy bag",
            price: "€300"
        },
        {
            imgSrc: bag3,
            altText: "The Handy Bag",
            name: "the handy bag",
            price: "€150"
        }
    ];



    const footerText = [
        {
            title: "THE BRAND",
            text: "Lorem ipsum odor amet, consectetuer adipiscing elit. Phasellus bibendum parturient inceptos id odio purus. Elit vivamus amet augue venenatis sollicitudin facilisi congue. Eros dictum suscipit non magnis pharetra nascetur pellentesque nec. Tortor velit blandit scelerisque sociosqu sed tellus magnis erat. Dolor turpis mattis senectus vulputate suscipit torquent platea id. Curabitur purus et, fames interdum commodo natoque hendrerit. Magnis purus egestas vestibulum magnis erat lobortis. Adipiscing orci senectus hac eros malesuada ex pretium. Porttitor erat proin ultrices ante maximus ridiculus lectus malesuada."
        },
        {
            title: "OUR STORY",
            text: "Lorem ipsum odor amet, consectetuer adipiscing elit. Phasellus bibendum parturient inceptos id odio purus. Elit vivamus amet augue venenatis sollicitudin facilisi congue. Eros dictum suscipit non magnis pharetra nascetur pellentesque nec. Tortor velit blandit scelerisque sociosqu sed tellus magnis erat. Dolor turpis mattis senectus vulputate suscipit torquent platea id. Curabitur purus et, fames interdum commodo natoque hendrerit. Magnis purus egestas vestibulum magnis erat lobortis. Adipiscing orci senectus hac eros malesuada ex pretium. Porttitor erat proin ultrices ante maximus ridiculus lectus malesuada."
        }
    ];

    return (
        <>
            <h1>Handbags & Purses</h1>
            <div>
                {ButtonNames.map((button, index) => (
                    <Button key={index}>{button.name}</Button>
                ))}
            </div>

            <main>
                {products.map((product, index) => (
                    <Product
                        image={product.imgSrc}
                        name={product.name}
                        price={product.price}
                        altText={product.altText}
                        key={index}
                    />
                ))}
            </main>

            <footer>

                <Title image={brandImage} altText="Brand Image"/>

                <Title title={footerText[0].title} text={footerText[0].text}/>

                <Title image={storyImage} altText="Story Image"/>

                <Title title={footerText[1].title} text={footerText[1].text}/>
            </footer>


        </>
    );
}

export default App;

