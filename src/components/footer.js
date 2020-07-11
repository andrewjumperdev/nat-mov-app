import React from 'react'

const Footer = () => {
    return (
        <div class="jumbotron text-center">
            <div class="row">
                <div class="col">
                    <h1>Natural Movement</h1>
                    <p>
                        Nuestro objetivo es conseguir un planeta más en forma.
                         Esto no significa lograr que las personas entrenen. 
                         Significa ayudarlas a enamorarse del fitness para que ellas mismas deseen entrenar.
                    </p>
                </div>
                <div class="col">
                    <h1>Programas</h1>
                    <ul className="nav d-flex flex-column">
                        <li className="nav-item">HIIT</li>
                        <li className="nav-item">CMA</li>
                        <li className="nav-item">Meditacion</li>
                        <li className="nav-item">Yoga</li>
                        <li className="nav-item">Acrobacia</li>
                    </ul>
                </div>
                <div class="col d-flex flex-column">
                    <h1>Siguenos</h1>
                    <a href="/"><i class="fab fa-facebook"></i> Facebook</a>
                    <a href="/"><i class="fab fa-instagram"></i> Instagram</a>
                    <a href="/"><i class="fab fa-youtube"></i> Youtube</a>
                </div>
            </div>
        </div>
    )
};

export default Footer;
