import "../styles/CarouselStyle.css"
import atom from '../assets/atom.png';

function Carousel() {
    return (
        <>
            <section className="carousel-container">
                <h2 className="titre">Bienvenue sur la plateforme de gestion des CNI</h2>
                
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nesciunt inventore omnis fugiat veniam itaque laboriosam voluptas saepe ipsa. Eius cumque ducimus omnis illum est consequatur animi in aut odio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum aliquam quasi error tempora fugit asperiores.
                </p>    
                
                <div className="appel-action m-auto p-2 border border-warning rounded-1 bg-warning text-light" >
                    <a href="" className="">Effectuer une recherche</a>
                </div>
            </section>
        </>
    );
}
    
export default Carousel;