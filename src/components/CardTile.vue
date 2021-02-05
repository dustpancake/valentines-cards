<template>
  <div>
    <b-card
    align="center"
    class="p-1"
    >
    <b-img fluid :src="imagepath"></b-img>
    <div id="cardtext">
      {{about}}
    </div>

    <b-button-group class="pt-3">
      <b-button class="valentine" variant="light">
        Card <b-icon icon="download" />
      </b-button>
      <b-button variant="light">
        Raw Image <b-icon icon="download" />
      </b-button>
    </b-button-group>
    </b-card>
  </div>
</template>

<script>
export default {
    name: "CardTile",
    props: {
      title: String,
      imagepath: String,
      about: String
    },

    methods: {
        onCardDownload() {

        },

        onRawDownload() {
            
        }
    }
}
</script>