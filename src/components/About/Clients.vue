<template>
  <section class="clients">
    <div class="container">
      <div class="section-heading light mb-40">
        <p>Clients</p>
      </div>

      <div class="client-logos">
        <div><img src="../../assets/logo-absolut.svg"></div>
        <div><img src="../../assets/logo-audi.svg"></div>
        <div><img src="../../assets/logo-don-julio.svg"></div>
        <div><img src="../../assets/logo-g-shock.svg"></div>
        <div><img src="../../assets/logo-hbo.svg"></div>
        <div><img src="../../assets/logo-harley.svg"></div>
        <div><img src="../../assets/logo-jeep.svg"></div>
        <div><img src="../../assets/logo-khov.svg"></div>
        <div><img src="../../assets/logo-kowa.svg"></div>
        <div><img src="../../assets/logo-novartis.svg"></div>
        <div><img src="../../assets/logo-pfizer.svg"></div>
        <div><img src="../../assets/logo-pulte.svg"></div>
        <div><img src="../../assets/logo-samsung.svg"></div>
        <div><img src="../../assets/logo-tishman.svg"></div>
        <div><img src="../../assets/logo-versace.svg"></div>
      </div>

    </div>
  </section>
</template>

<style lang="scss" scoped>
  .clients {
    background-color: $white;
    padding: 110px 0;
    .container {
      max-width: 1057px;
      margin: 0 auto;
    }
    .client-logos {
      display: grid;
      grid-template-columns: repeat(5, auto);
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      div {
        display: flex;
        justify-content: center;
      }
    }
  }
</style>