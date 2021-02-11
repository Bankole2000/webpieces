<template>
  <!-- <div class="add-wepiece-form"> -->
  <v-row>
    <v-col cols="12" sm="6" class="mb-0 pb-0">
      <p>Basic Webpiece Info</p>
      <v-text-field
        v-model.trim="username"
        prepend-inner-icon="mdi-account"
        label="Your Name"
        placeholder="e.g. JohnDoe_69"
        hint="What should we call you?"
        solo
      ></v-text-field>
      <v-text-field
        prepend-inner-icon="mdi-puzzle"
        v-model.trim="title"
        label="Webpiece Title"
        placeholder="e.g. Cool Animated slider"
        hint="What should we title this webpiece?"
        solo
      ></v-text-field>
      <v-textarea
        prepend-inner-icon="mdi-pen"
        auto-grow
        v-model.trim="description"
        label="Webpiece Description"
        placeholder="e.g. It's a slider with a really cool random animation transition between each slide"
        hint="How would you best describe this webpiece?"
        solo
      ></v-textarea>
      <div class="subheading" v-if="imageUrl">Image Preview</div>

      <v-expand-transition>
        <v-img
          v-show="imageUrl"
          :src="imageUrl"
          class="mb-2"
          :aspect-ratio="466 / 350"
        ></v-img>
      </v-expand-transition>
    </v-col>
    <v-col cols="12" md="6" class="mt-0">
      <p>Any Visuals available?</p>
      <v-radio-group v-model="isImage" row>
        <v-radio label="Upload Image/Screenshot" :value="true"></v-radio>
        <v-radio label="URL to the image" :value="false"></v-radio>
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
            label="Upload Image or gif"
            solo
            v-model="uploadedImage"
            prepend-inner-icon="mdi-camera"
            accept="image/*"
            @change="onFilePicked($event)"
          ></v-file-input>
        </div>
      </v-scroll-y-transition>

      <!-- :gradient="`to top right, ${color.value}EE, ${color.value}00`" -->

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
      <div class="subheading mb-2">
        How can we contact you? (please tick at least one. Multiple are also
        allowed)
      </div>
      <v-row class="pa-0">
        <v-checkbox label="twitter" v-model="hasTwitter" class="mx-2">
          <!-- <template v-slot:label>
            <p class="mb-0"><v-icon>mdi-twitter</v-icon> Twitter</p>
          </template> -->
        </v-checkbox>
        <v-checkbox label="facebook" v-model="hasFacebook" class="mx-2">
          <!-- <template v-slot:label>
            <p class="mb-0"><v-icon>mdi-facebook</v-icon> Facebook</p>
          </template> -->
        </v-checkbox>
        <v-checkbox label="github" v-model="hasGithub" class="mx-2">
          <!-- <template v-slot:label>
            <p class="mb-0"><v-icon>mdi-github</v-icon> Github</p>
          </template> -->
        </v-checkbox>
        <v-checkbox label="email" v-model="hasEmail" class="mx-2">
          <!-- <template v-slot:label>
            <p class="mb-0"><v-icon>mdi-email</v-icon> Email</p>
          </template> -->
        </v-checkbox>
      </v-row>

      <v-expand-transition>
        <v-text-field
          v-show="hasTwitter"
          prepend-inner-icon="mdi-twitter"
          auto-grow
          v-model="twitterhandle"
          label="Twitter Handle"
          placeholder="@yourTwitterHandle"
          solo
        ></v-text-field>
      </v-expand-transition>
      <v-expand-transition>
        <v-text-field
          v-show="hasFacebook"
          prepend-inner-icon="mdi-facebook"
          auto-grow
          v-model="facebookhandle"
          label="Facebook Url"
          hint="e.g. https://facebook.com/yourfacebooklink"
          placeholder="https://facebook.com/yourfacebooklink"
          solo
        ></v-text-field>
      </v-expand-transition>
      <v-expand-transition>
        <v-text-field
          v-show="hasGithub"
          prepend-inner-icon="mdi-github"
          auto-grow
          v-model="githubhandle"
          label="Github Url"
          hint="e.g. @yourgithubusername or https://github.com/yourgithubusername"
          placeholder="@yourgithubusername or https://github.com/yourgithubusername"
          solo
        ></v-text-field>
      </v-expand-transition>
      <v-expand-transition>
        <v-text-field
          v-show="hasEmail"
          prepend-inner-icon="mdi-email"
          auto-grow
          v-model="email"
          label="Your Favorite Email"
          hint="e.g. your@email.com"
          placeholder="yourfavorite@email.com"
          solo
        ></v-text-field>
      </v-expand-transition>
      <v-btn
        @click="submitWebpieceRequest($event)"
        :loading="sending"
        block
        large
        :class="$vuetify.theme.dark ? 'glass-card' : 'morph'"
        ><v-icon left>mdi-send</v-icon> Submit</v-btn
      >
      <v-alert prominent type="success" class="mt-4" :value="sent">
        <v-row align="center">
          <v-col class="grow"
            >Your webpiece request has been sent and added to the queue.</v-col
          >
          <v-col class="shrink">
            <v-btn
              @click="resetForm"
              :class="$vuetify.theme.dark ? 'glass-card' : 'morph'"
              ><v-icon left>mdi-restore</v-icon> Reset</v-btn
            >
          </v-col>
        </v-row>
      </v-alert>
    </v-col>
  </v-row>
  <!-- </div> -->
</template>

<script>
import { config, validators, allRegexes } from "../../utils/config";
import { mapActions } from "vuex";

function initialState() {
  return {
    sending: false,
    sent: false,
    username: "",
    hasTwitter: true,
    hasFacebook: false,
    hasEmail: false,
    hasGithub: false,
    email: "",
    title: "",
    description: "",
    facebookhandle: "",
    twitterhandle: "",
    githubhandle: "",
    requestImage: "",
    requestUrl: "",
    isImage: true,
    imageUrl: null,
    imagePath: null,
    imageFullsizedUrl: null,
    imageFullsizedPath: null,
    uploadedImage: null,
    selectedTechnologies: "",
    technologies: [
      "Html",
      "CSS",
      "Sass",
      "Javascript",
      "JQuery",
      "ES6",
      "Vue",
      "Vuetify",
      "Angular",
      "Angular Material",
      "React",
      "Material UI"
    ]
  };
}

export default {
  data() {
    return initialState();
  },
  methods: {
    ...mapActions([
      "postWebpieceRequest",
      "uploadWebpieceRequestImage",
      "showToast"
    ]),
    resetForm() {
      Object.assign(this.$data, initialState());
    },
    onFilePicked(file) {
      console.log(file);
      if (file) {
        const fileReader = new FileReader();
        fileReader.addEventListener("load", () => {
          this.imageUrl = fileReader.result;
        });
        fileReader.readAsDataURL(file);
        this.uploadedImage = file;
      } else {
        this.imageUrl = null;
        this.uploadedImage = null;
      }
    },
    submitWebpieceRequest(e) {
      this.sending = true;
      // Check basic Detials
      if (!this.username || !this.description || !this.title) {
        this.showToast({
          sclass: "error",
          message: `<span style="color: var(--error); font-weight: bold;">Error:</span> Invalid/Incomplete Fields`,
          timeout: 3000
        });
        this.sending = false;
        return false;
      }
      // check contact info
      if (
        !this.githubhandle &&
        !this.twitterhandle &&
        !this.facebookhandle &&
        !this.email
      ) {
        this.showToast({
          sclass: "error",
          message: `<span style="color: var(--error); font-weight: bold;">Error:</span> Please add some Contact Details`,
          timeout: 3000
        });
        this.sending = false;
        return false;
      }
      // if is not uploaded image
      if (!this.isImage) {
        if (!this.imageUrl) {
          // check for Image Url
          this.showToast({
            sclass: "error",
            message: `<span style="color: var(--error); font-weight: bold;">Error:</span> Please add an image Url`,
            timeout: 3000
          });
          this.sending = false;

          return false;
        }
        this.postWebpieceRequest(this.$data).then((response) => {
          if (response.success) {
            this.showToast({
              sclass: response.success ? "success" : "error",
              message: `<span style="color: var(--success); font-weight: bold;">Success:</span> ${response.message}`
            });
          } else {
            console.log({ response });
            this.showToast({
              sclass: "error",
              message: `<span style="color: var(--error); font-weight: bold;">Error:</span> Invalid field - <strong>${response.errors[0].fieldName}</strong>`,
              timeout: 3000
            });
          }
          this.sent = true;
          this.sending = false;
        });
      } else {
        if (!this.uploadedImage) {
          // check for Uploaded Image
          this.showToast({
            sclass: "error",
            message: `<span style="color: var(--error); font-weight: bold;">Error:</span> Please select/upload an image`,
            timeout: 3000
          });
          this.sending = false;

          return false;
        }

        this.uploadWebpieceRequestImage({
          uploadedImage: this.uploadedImage
        }).then((response) => {
          const {
            imageFullsizedUrl,
            imageUrl,
            imagePath,
            imageFullsizedPath
          } = response;
          this.imageFullsizedUrl = imageFullsizedUrl;
          this.imageFullsizedPath = imageFullsizedPath;
          this.imageUrl = imageUrl;
          this.imagePath = imagePath;
          this.postWebpieceRequest(this.$data).then((response) => {
            if (response.success) {
              this.showToast({
                sclass: response.success ? "success" : "error",
                message: `<span style="color: var(--success); font-weight: bold;">Success:</span> ${response.message}`
              });
            } else {
              console.log({ response });
              this.showToast({
                sclass: "error",
                message: `<span style="color: var(--error); font-weight: bold;">Error:</span> Invalid field - <strong>${response.errors[0].fieldName}</strong>`,
                timeout: 3000
              });
            }
            this.sending = false;
            this.sent = true;
          });
        });
      }
    }
  }
};
</script>

<style></style>
