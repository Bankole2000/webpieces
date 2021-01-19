<template>
  <!-- <div class="add-wepiece-form"> -->
  <v-row>
    <v-col cols="12" sm="6" offset-md="3" class="mb-0 pb-0">
      <v-text-field
        v-model="username"
        prepend-inner-icon="mdi-account"
        label="Your Name"
        placeholder="e.g. JohnDoe_69"
        hint="What should we call you?"
        solo
      ></v-text-field>
      <v-text-field
        prepend-inner-icon="mdi-puzzle"
        v-model="title"
        label="Webpiece Title"
        placeholder="e.g. Cool Animated slider"
        hint="What should we title this webpiece?"
        solo
      ></v-text-field>
      <v-textarea
        prepend-inner-icon="mdi-pen"
        auto-grow
        v-model="description"
        label="Webpiece Description"
        placeholder="e.g. It's a slider with a really cool random animation transition between each slide"
        hint="How would you best describe this webpiece?"
        solo
      ></v-textarea>
      <p>Any Visuals available?</p>
      <v-radio-group v-model="isImage" row>
        <v-radio label="Upload an Image/Screenshot" :value="true"></v-radio>
        <v-radio label="I have a URL to the image" :value="false"></v-radio>
      </v-radio-group>
      <v-scroll-y-transition mode="out-in">
        <div
          v-if="!isImage"
          class="title grey--text text--lighten-1 font-weight-light"
          style="align-self: center; justify-content: center; width: 100%;"
        >
          <v-text-field
            v-model="imageUrl"
            label="Image Url"
            append-icon="mdi-link"
            class="mt-1"
            required
            hint="e.g. https://site.com/path/to/image.jpg"
            outlined
          >
          </v-text-field>
        </div>
        <div
          v-else
          class="title grey--text text--lighten-1 font-weight-light"
          style="align-self: center; justify-content: center; width: 100%;"
        >
          <v-file-input
            label="Upload Image"
            solo
            v-model="uploadedImage"
            prepend-inner-icon="mdi-camera"
            accept="image/*"
            @change="onFilePicked($event)"
          ></v-file-input>
        </div>
      </v-scroll-y-transition>
    </v-col>
    <v-col cols="12" sm="6" offset-md="3" class="mt-0 pt-0">
      <div class="subheading" v-if="imageUrl">Image Preview</div>

      <!-- :gradient="`to top right, ${color.value}EE, ${color.value}00`" -->
      <v-img v-if="imageUrl" :src="imageUrl" class="mb-2" :aspect-ratio="466 / 350"></v-img>
      <v-select
        class="mt-4"
        v-model="selectedTechnologies"
        :items="technologies"
        attach
        solo
        chips
        label="Preferred Technologies"
        persistent-hint
        hint="Which tech would you like this to be built with? (select one or multiple)"
        multiple
      ></v-select>
      <div class="subheading mb-2">How can we contact you?</div>
      <v-text-field
        prepend-inner-icon="mdi-twitter"
        auto-grow
        v-model="twitterhandle"
        label="Twitter Handle"
        placeholder="@yourTwitterHandle"
        solo
      ></v-text-field>
      <v-text-field
        prepend-inner-icon="mdi-facebook"
        auto-grow
        v-model="facebookhandle"
        label="Facebook Url"
        hint="e.g. https://facebook.com/yourfacebooklink"
        placeholder="https://facebook.com/yourfacebooklink"
        solo
      ></v-text-field>
      <v-text-field
        prepend-inner-icon="mdi-github"
        auto-grow
        v-model="githubhandle"
        label="Github Url"
        hint="e.g. @yourgithubusername or https://github.com/yourgithubusername"
        placeholder="@yourgithubusername or https://github.com/yourgithubusername"
        solo
      ></v-text-field>
      <v-text-field
        prepend-inner-icon="mdi-email"
        auto-grow
        v-model="email"
        label="Your Favorite Email"
        hint="e.g. your@email.com"
        placeholder="yourfavorite@email.com"
        solo
      ></v-text-field>
    </v-col>
  </v-row>
  <!-- </div> -->
</template>

<script>
export default {
  data() {
    return {
      username: '',
      email: '',
      title: '',
      description: '',
      facebookhandle: '',
      twitterhandle: '',
      githubhandle: '',
      requestImage: '',
      requestUrl: '',
      isImage: true,
      imageUrl: null,
      uploadedImage: null,
      selectedTechnologies: '',
      technologies: [
        'Html',
        'CSS',
        'Sass',
        'Javascript',
        'JQuery',
        'ES6',
        'Vue',
        'Vuetify',
        'Angular',
        'Angular Material',
        'React',
        'Material UI',
      ],
    };
  },
  methods: {
    onFilePicked(file) {
      console.log(file);
      const fileReader = new FileReader();
      fileReader.addEventListener('load', () => {
        this.imageUrl = fileReader.result;
      });
      fileReader.readAsDataURL(file);
      this.uploadedImage = file;
    },
  },
};
</script>

<style></style>
