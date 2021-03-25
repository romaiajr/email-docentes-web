<template>
  <div id="rodapé">
    <div class="container" style="position: relative">
      <div class="row m-0 justify-content-center" style="padding-top: 8px">
        <h6>
          Desenvolvido por
          <a href="https://github.com/romaiajr" target="_blank" id="developer"
            >Roberto Maia</a
          >
          e
          <a
            href="https://github.com/SamueldaCostaAraujoNunes"
            target="_blank"
            id="developer"
            >Samuel Nunes</a
          >
        </h6>
      </div>
    </div>
  </div>
</template>
<style>
#rodapé {
  border-top: 1px solid #dee2e6 !important;
  width: 100%;
  margin-top: 24px;
  padding: 12px 0px;
  display: flex;
  align-items: center;
  text-align: center;
  background: var(--primary-dark-color);
  color: white;
  position: absolute;
  bottom: 0;
  left: 0;
}
#rodapé h6 {
  margin: 0 !important;
}
#developer {
  text-decoration: none;
  color: white;
}
#developer,
#developer:after,
#developer:before {
  transition: all 0.5s;
}
/* stroke */
#developer {
  position: relative;
}
#developer:after,
#developer:after {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 0%;
  content: ".";
  color: transparent;
  background: var(--warning-dark-color);
  height: 2px !important;
}
#developer:hover:after {
  width: 100%;
}

#developer {
  transition: all 1s;
}

#developer:after {
  text-align: left;
  content: ".";
  margin: 0;
  opacity: 0;
}
#developer:hover {
  z-index: 1;
}
#developer:hover:after {
  z-index: -10;
  animation: fill 1s forwards;
  opacity: 1;
}
</style>
