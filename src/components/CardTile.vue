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
      <b-button @click="onCardDownload" class="valentine" variant="light">
        Card <b-icon icon="download" />
      </b-button>
      <b-button @click="onPrintDownload" variant="light">
        Print <b-icon icon="download" />
      </b-button>
    </b-button-group>
    </b-card>
  </div>
</template>

<script>
import track from "@/plugins/tagger"

export default {
    name: "CardTile",
    props: {
      title: String,
      imagepath: String,
      about: String
    },

    methods: {
        onCardDownload() {
          // modified file extension inplace
          track(this, "card-"+this.imagepath) // just needs some sort of unique identifier
          window.location.href = "cards/card_" + this.imagepath.substr(0, this.imagepath.lastIndexOf(".")) + ".pdf";
          
        },

        onPrintDownload() {
          track(this, "print-"+this.imagepath)
          window.location.href ="prints/print_" + this.imagepath.substr(0, this.imagepath.lastIndexOf(".")) + ".pdf";
        }
    }
}
</script>