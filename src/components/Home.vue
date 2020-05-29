<template>
  <div class="home">
    <icon name="whatsapp" scale="6"></icon>
    <p class="leading">Send a WhatsApp message to a person without adding him/her to phone book.</p>
    <b-form @submit="onSubmit">
      <b-form-input
        id="phoneNumber"
        v-model="phoneNumber"
        type="tel"
        pattern="[0-9]*"
        inputmode="numeric"
        placeholder="Enter phone number"
        autofocus
      ></b-form-input>
      <br />
      <b-button :disabled="isDisabled" type="submit" variant="success">Send Message</b-button>
    </b-form>
  </div>
</template>

<script>
import 'vue-awesome/icons/whatsapp'
import Icon from 'vue-awesome/components/Icon'
import * as Url from '@/common/Url'

export default {
  name: 'home',
  components: {
    Icon
  },
  computed: {
    isDisabled () {
      return this.phoneNumber === ''
    }
  },
  data () {
    return {
      phoneNumber: '852'
    }
  },
  methods: {
    onSubmit (e) {
      e.preventDefault()
      // remove leading zero
      this.phoneNumber = this.phoneNumber.replace(/^0+/, '')
      window.location.href = Url.WHATSAPP_URL + this.phoneNumber
    }
  }
}
</script>

<style lang="scss" scoped>
$text: #495963;

div {
  &.home {
    max-width: 768px;
    padding: 50px 0;
    text-align: center;
    margin: 0 auto;
    color: $text;
    p {
      &.leading {
        padding: 20px 0;
      }
    }
  }
}
</style>
