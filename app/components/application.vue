<template lang="html">
  <div class="app">
    <header class="nav">
      <div class="container">
        <h2 class="nav__logo">Marvel</h2>
      </div>
    </header>
    <div class="section">
      <div class="container">
        <div class="content">
        <div class="side-bar">
          <img src="http://icons.veryicon.com/png/Flag/Flag%20Borderless/Spain.png" alt="" class="side-bar__img">
          <h3 class="side-bar__title">Spider-Girl</h3>
          <p class="side-bar__date">1981-1492</p>
          <h3 class="side-bar__creator">Creators</h3>
          <ul class="side-bar__list">
            <li class="side-bar__list-item">Machu Pichu</li>
          </ul>
        </div>
        <div class="main">
          <h2 class="main__heading">Characters</h2>
          <div class="grid">
            <!-- <div class="grid__item" v-for="character in characters"> -->
            <div class="grid__item">
              <img src="http://pngimages.net/sites/default/files/orange-button,-square-png-image-2869.png" alt="" class="grid__img">
              <p class="grid__name">Pikachu</p>
            </div>
            <div class="grid__item">
              <img src="http://pngimages.net/sites/default/files/orange-button,-square-png-image-2869.png" alt="" class="grid__img">
              <p class="grid__name">Pikachu</p>
            </div>
            <div class="grid__item">
              <img src="http://pngimages.net/sites/default/files/orange-button,-square-png-image-2869.png" alt="" class="grid__img">
              <p class="grid__name">Pikachu</p>
            </div>
            <div class="grid__item">
              <img src="http://pngimages.net/sites/default/files/orange-button,-square-png-image-2869.png" alt="" class="grid__img">
              <p class="grid__name">Pikachu</p>
            </div>
          </div>
          <h2 class="main__heading">Comics</h2>
          <div class="grid">
            <!-- <div class="grid__item" v-for="issue in comics"> -->
            <div class="grid__item">
              <img src="http://pngimages.net/sites/default/files/orange-button,-square-png-image-2869.png" alt="" class="grid__img">
              <p class="edition">#8</p>
              <p class="edition-date">Pika-boy #8</p>
              <p><button class="btn">Read More</button></p>
            </div>
            <div class="grid__item">
              <img src="http://pngimages.net/sites/default/files/orange-button,-square-png-image-2869.png" alt="" class="grid__img">
              <p class="edition">#8</p>
              <p class="edition-date">Pika-boy #8</p>
              <p><button class="btn">Read More</button></p>
            </div>
            <div class="grid__item">
              <img src="http://pngimages.net/sites/default/files/orange-button,-square-png-image-2869.png" alt="" class="grid__img">
              <p class="edition">#8</p>
              <p class="edition-date">Pika-boy #8</p>
              <p><button class="btn">Read More</button></p>
            </div>
            <div class="grid__item">
              <img src="http://pngimages.net/sites/default/files/orange-button,-square-png-image-2869.png" alt="" class="grid__img">
              <p class="edition">#8</p>
              <p class="edition-date">Pika-boy #8</p>
              <p><button class="btn">Read More</button></p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {

  },
};
</script>
