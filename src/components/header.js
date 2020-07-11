import React from 'react';


const Header = () => {
    return (
        <div className="container-sm">
        <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://images.pexels.com/photos/209969/pexels-photo-209969.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h5>Core</h5>
              <p>El concepto de CORE o núcleo y su trabajo o fortalecimiento se han puesto de moda en muchas líneas de fisioterapia y preparación física tanto como prevención de lesiones musculares, tendinosas y articulares como por su efecto en la mejora del rendimiento y los resultados deportivos.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://images.pexels.com/photos/2294403/pexels-photo-2294403.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h5>HIIT</h5>
              <p>on las siglas de High Intensity Interval Training, o en castellano, entrenamiento con intervalos de alta intensidad. Este tipo de sesiones combina movimientos de moderada o baja intensidad con intervalos de alta intensidad, para llevar nuestra frecuencia cardiaca al máximo y para después, volver a bajarla.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://images.pexels.com/photos/2628210/pexels-photo-2628210.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h5>Cardio Martial Arts</h5>
              <p>El Cardio Martial Arts, Cardio kickboxing, el CKB o el Aero Kick Boxing, es un método de entrenamiento que combina juegos de simulación de todo tipo de artes marciales y deportes de contacto (como el Karate, el Taekwondo, el Boxeo, el Kick Boxing, o cualquier otro arte marcial)</p>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
   </div>
    )
};

export default Header;