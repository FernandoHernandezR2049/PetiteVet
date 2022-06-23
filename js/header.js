export const header = `
<a
  class="navbar-brand"
  href="./../index.html"
  style="font-family: 'Lobster'; color: #d93073; font-size: 2rem"
  ><img
    src="./../assets/logo.png"
    alt="Petite Vet Logo"
    width="50px"
    height="33px"
  />
  Petite Vet</a
>
<button
  class="navbar-toggler"
  type="button"
  data-toggle="collapse"
  data-target="#navbarSupportedContent"
  aria-controls="navbarSupportedContent"
  aria-expanded="false"
  aria-label="Toggle navigation"
>
  <span class="navbar-toggler-icon" style="color: #d93073"></span>
</button>

<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav ml-auto mr-auto">
    <li class="nav-item">
      <a class="nav-link" href="./../index.html">Home </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="./pages/catalogue.html">Catálogo</a>
    </li>
    <li class="nav-item">
      <a class="nav-link active" href="./pages/services.html"
        >Servicios <span class="sr-only">(current)</span></a
      >
    </li>
    <li class="nav-item">
      <a class="nav-link" href="./pages/contact.html">Contacto</a>
    </li>
    <li class="nav-item dropdown">
      <a
        class="nav-link dropdown-toggle"
        href="#"
        id="navbarDropdownMenuLink"
        role="button"
        data-toggle="dropdown"
        aria-expanded="false"
      >
        Sobre nosotros
      </a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <a class="dropdown-item" href="./pages/aboutUs.html"
          >Equipo desarrollador (Vet Devs)</a
        >
        <a class="dropdown-item" href="./pages/about_petite_vet.html"
          >Veterinaria Petit Vet</a
        >
      </div>
    </li>
  </ul>
  <ul class="navbar-nav my-2 my-lg-0">
    <li class="nav-item my-2 my-lg-0">
      <a class="nav-link" href="./pages/shopping_cart.html"
        ><img
          class="my-icon"
          src="./../assets/cart2.svg"
          alt=""
          srcset=""
      /></a>
    </li>
    <li class="nav-item">
      <a class="btn btn-pink" href="./access.html">Acceso</a>
    </li>
  </ul>
</div>
`;
