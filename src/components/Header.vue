<template>
    <b-container>

    <b-row align="center" class="pt-4">
      <b-col id="text" class="h2"> 
        <i>Dustpancake's Valentine's Emporium</i>
      </b-col>
    </b-row>

    <b-row align="center" class="pb-3">
      <b-col id="text"> 
        the virtual card and figurative flower shop
      </b-col>
    </b-row>

    <b-row align="center" dark>
      <b-col class="h4">
        <b-button-group>

          <b-button class="valentine" variant="light" @click="onInstagram">
            <b-icon icon="instagram"/>
          </b-button>

          <b-button variant="light" @click="onGithub">
            <b-icon icon="github"/>
          </b-button>

        </b-button-group>
      </b-col>
    </b-row>

    </b-container>
</template>

<script>
export default {
    name: "Header",

    methods : {
        onInstagram() {
            window.open("https://www.instagram.com/dustpancake", "_blank");
        },
        onGithub() {
            window.open("https://www.github.com/dustpancake", "_blank");
        }
    }
}
</script>