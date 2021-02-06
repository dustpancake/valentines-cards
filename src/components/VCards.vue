<template>
  <div id="allcards">
    <b-container style="max-width: 1000px">
    <b-row class="p-4">
      <b-col class="pb-4" md="6" v-for="card in cards" :key="card.imagepath">
          <CardTile 
            :title="card.title"
            :imagepath="card.imagepath"
            :about="card.about"
          />
      </b-col>
    </b-row>
    </b-container>
  </div>
</template>

<script>
import CardTile from "@/components/CardTile"


export default {
    name: "VCards",
    components: {
        CardTile
    },

    // just hard code it again who cares
    data() {
      return {
        cards:[
          {
            imagepath: "corvids.png",
            title: "WILL YOU EAT THE RICH WITH ME",
            about: "Revolt together, stay together."
          },
          {
            imagepath: "appleofmyeye.png",
            title: "APPLE OF MY EYE",
            about: "The sweetest stare."
          },
          {
            imagepath: "siteicon.png",
            title: "APPLE OF MY EYE ALT",
            about: "My code generated prints for this text-less variant and they looked decent."
          },
          {
            imagepath: "jamesjoyce.png",
            title: "JAMES JOYCE",
            about: "My body was like a harp and their words and gestures were like fingers running upon the wires."
          },
          {
            imagepath: "wholelifetoo.png",
            title: "TAKE MY WHOLE LIFE TOO",
            about: "Only fools wouldn't."
          },
          {
            imagepath: "bemineforalltime.png",
            title: "BE MINE FOR ALL TIME",
            about: "Sinew and bones."
          }
        ]
      }
    }
}
</script>