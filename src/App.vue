<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="green-primary" sticky>
      <b-container>
        <b-navbar-brand :to="{name: 'Home'}">Add9u.com</b-navbar-brand>
      </b-container>
    </b-navbar>
    <main>
      <b-container>
        <router-view></router-view>
      </b-container>
    </main>
    <footer>
      <b-container>
        <b-link href="https://github.com/andrewmmc/add9u" target="_blank">Github</b-link>
        <b-link :to="{name: 'OpenSourceLicenses'}">Open Source Licenses</b-link>
        <b-link href="https://andrewmmc.com" target="_blank">(c) 2017 Andrew Mok</b-link>
      </b-container>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss">
  $primary: #71D465;
  $secondary: #868e96;

  h1, h2, h3, h4, h5 {
    font-weight: 300;
  }

  .green-primary {
    color: $primary !important;
    &:hover {
      color: darken($primary, 20%) !important;
    }
  }

  .bg-green-primary {
    background-color: $primary !important;
  }

  .btn-green-primary {
    color: #fff;
    background-color: $primary;
    border-color: $primary;
  }

  footer {
    text-align: center;
    font-size: 0.75rem;
    color: $secondary;
    padding-bottom: 20px;
    a {
      display: block;
      color: $secondary;
      padding: 2px 0;
      &:active, &:visited, &:hover {
        color: $secondary;
        text-decoration: none;
      }
    }
  }
</style>
