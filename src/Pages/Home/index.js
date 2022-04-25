import Carrossel from "../../Components/Carrossel";
import { NavBar } from "../../Components/NavBar";
import Cards from "../../Components/Cards";
import "../../style.modules.css"

export function Home() {
    return ( 

        <>

        <nav>
            <NavBar />
        </nav>

        <div>
            <Carrossel />
        </div>

        <div>
            <Cards />
        </div>
        
        
        </>

     );
}

export default Home;