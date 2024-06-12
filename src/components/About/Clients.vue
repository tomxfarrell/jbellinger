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

      <div class="client-list">
        <ul>
          <li>Absolut Vodka</li>
          <li>Adidas</li>
          <li>Amstel Light</li>
          <li>Audi</li>
          <li>Banana Republic</li>
          <li>Budweiser</li>
          <li>Centex Homes</li>
          <li>Cynthia Rowley</li>
          <li>Cruzan Rum</li>
          <li>Don Julio</li>
          <li>Dos Equis</li>
        </ul>
        <ul>
          <li>Fernet Branca</li>
          <li>Fortune Brands</li>
          <li>Galderma</li>
          <li>Grand Marnier</li>
          <li>Graphite Bio</li>
          <li>G-Shock</li>
          <li>Harley-Davidson</li>
          <li>HBO</li>
          <li>Heineken</li>
          <li>Hennessy</li>
          <li>Hpnotiq</li>
        </ul>
        <ul>
          <li>Increlex</li>
          <li>Jeep</li>
          <li>Kmart</li>
          <li>K. Hovnanian</li>
          <li>Kowa</li>
          <li>Mayor Mike Bloomberg</li>
          <li>Microsoft</li>
          <li>Miraval Spa & Resort</li>
          <li>New Era</li>
          <li>Novartis</li>
          <li>Pantone</li>
        </ul>
        <ul>
          <li>Perrier</li>
          <li>Pfizer</li>
          <li>Plymouth Gin</li>
          <li>Samsung</li>
          <li>Sears</li>
          <li>Skyy Vodka</li>
          <li>Smirnoff Vodka</li>
          <li>Sony</li>
          <li>Stolichnaya Vodka</li>
          <li>Sunglass Hut</li>
          <li>The Ritz-Carlton</li>
        </ul>
        <ul>
          <li>Russian Standard Vodka</li>
          <li>The Macallan</li>
          <li>The Setai Group</li>
          <li>Target</li>
          <li>Tishman Speyer</li>
          <li>Verizon</li>
          <li>Versace</li>
          <li>Vevo</li>
          <li>Xiidra</li>
          <li>Zoo York</li>
        </ul>
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
      border-bottom: 1px solid rgba(112,112,112,.30);
      padding-bottom: 60px;
      div {
        display: flex;
        justify-content: center;
      }
    }
    .client-list {
      display: grid;
      grid-template-columns: repeat(5, auto);
      align-items: center;
      justify-content: space-between;
      padding-top: 60px;
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        li {
          font-size: 18px;
          line-height: 28px;
        }
      }
    }
  }
</style>