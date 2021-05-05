import React from 'react';
import Navbar from '../navbar/Navbar';
import Button from '../Misc/Button';
import './Home.css';
import './Main.css';
import backgroundHome from '../../assets/images/backgroundHome.jpg';


const Home = () => {

    return (
        <div className="Home">
            <Navbar />
            <main className="Main" style={{ backgroundImage: `url(${backgroundHome})` }}>
                <div className="text" >
                    <h1>Ahorra tiempo durante tu semana de trabajo y olvidate de cocinar </h1>
                    <p>Pide un menu de comida en pocos pasos. Elige entre todos los platos de nuestra carta la combinación que te guste y te lo llevamos a casa</p>
                    <Button classButton="btn-outline-color" href="/menus" text="Hacer pedido" />

                </div>

            </main>

        </div>
    )
}


export default Home;