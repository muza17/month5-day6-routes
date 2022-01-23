import useLang from "./../../Hook/useLang"

import Content from "./../../Localization/Content"
import "./home.css"



function Home(){

    const [lang, setlang] = useLang()

    return(
        <section>
            <h1>Home</h1>
            <div className="container">
                <div className="home-left">
                    <h1 className="home-heading">Get a custom-made video solution for your study problem</h1>
                    <p className="home-text">An expert tutor will record a step by step</p>
                    <p className="home-text">explanation for your request</p>
                    <button>Subscribe now</button>
                </div> 
            </div>

        </section>
    );
}
export default Home