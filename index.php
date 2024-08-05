<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="style.css">
    <link rel="icon" href="/favicon.ico" type="image/x-icon">
    



    <title>REGISTRO E INICIO DE SESION </title>
<body>
   <div class="container-form register">
    <div class="information">
        <div class="info-childs">
            <h2>BIENVENIDOS</h2>
            <p>Para unirte a nuetsra comunidad por favor inicia sesion con tus datos</p>
            <input type="button" value="INICIAR SESION" id="sign-in">
        </div>
    </div>
    <div class="form-information"> 
        <div class="form-information-childs">
            <h2>Crear una cuenta</h2>
            <div class="icons">
                <button><i class='bx bxl-google-plus'></i></button>
                <i class='bx bxl-facebook-square'></i>
            </div>
            <p> o usa tu email para registrate</p>
            <form action="php/register_db.php" method="POST"class="form form-register" novalidate>
                <div>
                    <label >
                        <i class='bx bx-user'></i>
                        <input type="text" placeholder="Nombre Usuario" name="userName">
                    </label>
                </div>
                <div>
                    <label>
                        <i class='bx bxs-envelope'></i>
                        <input type="email" placeholder="Correo electronico" name="userEmail">
                    </label>
                </div>
                <div>
                    <label>
                        <i class='bx bxs-lock-alt'></i>
                        <input type="password" placeholder="Contraseña" name="userPassword">
                    </label>
                </div>


                <input type="submit" value="Registrarse">
                <div class="alerta-error ">Todos los campos son obligatorios</div>
                <div class="alerta-exito">Te registrarte correctamente</div>
            </form>
        </div>

    </div>
</div>



<div class="container-form login hide">
    <div class="information">
        <div class="info-childs">
            <h2>BIENVENIDO NUEVAMENTE</h2>
            <p>Para unirte a nuestra comunidad por favor inicia sesion con tus datos</p>
            <input type="button" value="REGISTRARSE" id="sign-up">

        </div>
    </div>
    <div class="form-information">
        <div class="form-information-childs">
            <h2>INICIAR SESION </h2>
            <div class="icons">
                <i class='bx bxl-google-plus'></i>
                <i class='bx bxl-facebook-square'></i>
            </div>
            <p> o iniciar sesion con una cuenta</p>
            <form class="form form-login" novalidate>
                <div>
                    <label>
                        <i class='bx bxs-envelope'></i>
                        <input type="email" placeholder="Correo electronico" name="userEmail">
                    </label>
                </div>
                <div>
                    <label>
                        <i class='bx bxs-lock-alt'></i>
                        <input type="password" placeholder="Contraseña" name="userPassword">
                    </label>
                </div>


                <input type="submit" value="Iniciar sesion">
                <div class="alerta-error ">Todos los campos son obligatorios</div>
                <div class="alerta-exito">Iniciaste sesion correctamente</div>
            </form>
        </div>

    </div>
</div>
<script src="js/script.js"></script>
<script src="js/register.js" type="module"></script>
<script src="js/login_modulo.js" type="module"></script>
    
</body>
</html>