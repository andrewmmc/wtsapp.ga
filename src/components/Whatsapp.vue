<template>
  <div class="whatsapp">
    <icon name="whatsapp" scale="6"></icon>
    <p class="leading">Message +{{ this.$route.params.phoneNumber }}</p>
  </div>
</template>

<script>
  import 'vue-awesome/icons/whatsapp'
  import Icon from 'vue-awesome/components/Icon'
  import * as Url from '@/common/Url'

  export default {
    name: 'Whatsapp',
    components: {
      Icon
    },
    created () {
      this.redirect(this.$route.params.phoneNumber)
    },
    methods: {
      redirect (phoneNumber) {
        window.location.href = Url.WHATSAPP_URL + phoneNumber
      }
    }
  }
</script>

<style lang="scss" scoped>
  $text: #495963;

  div {
    &.whatsapp {
      max-width: 768px;
      padding: 50px 0;
      text-align: center;
      margin: 0 auto;
      color: $text;
    }
  }
</style>
