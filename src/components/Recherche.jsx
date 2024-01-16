import "../styles/RechercheStyle.css"

function Recherche () {
    return (
        <div className="recherche-container">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic error exercitationem fugit mollitia placeat? Iste reprehenderit asperiores est eum iure, veniam quos quaerat corporis suscipit libero placeat accusamus fuga consequuntur?
            </p>
            <div className="bar-recherche">
                <input type="text" name="recherche" placeholder="Recherche" id="recherche" />
                <div className="inputs-date">
                    <input type="date" name="date_de" id="date_de" />
                    <input type="date" name="date_a" id="date_a" />
                    <button type="submit" className="btn-recherche">
                        <i className="fa-solid fa-search"></i>
                    </button>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Recherche