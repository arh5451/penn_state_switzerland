class Header extends HTMLElement {
    constructor() {
      super();
    }
  
      connectedCallback() {
      this.innerHTML = `
      <!-- ======= Header ======= -->
      <header id="header" class="header fixed-top d-flex align-items-center">
        <div class="container-fluid d-flex align-items-center justify-content-between">
    
          <a href="index.html" class="logo d-flex align-items-center me-auto me-xl-0">
            <!-- Uncomment the line below if you also wish to use an image logo -->
            <img src="assets/img/apple-touch-ico.png" alt="">
            <!-- <h1>Append</h1> -->
            <!-- <span>.</span> -->
          </a>
    
          <!-- Nav Menu -->
          <nav id="navmenu" class="navmenu">
            <ul>
              <li><a href="index.html#hero" class="active">Home</a></li>
              <li><a href="index.html#about">About</a></li>
              <li><a href="index.html#events">Events</a></li>
              <li><a href="index.html#photos">Photos</a></li>
              <li><a href="index.html#team">Team</a></li>
              <li><a href="blog.html">Blog</a></li>
              <li><a href="index.html#contact">Contact</a></li>
            </ul>
    
            <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav><!-- End Nav Menu -->
    
          <a class="btn-getstarted" href="index.html#about">Get Started</a>
    
        </div>
      </header><!-- End Header -->
      `;
    }
  }
  
  customElements.define('header-component', Header);
  