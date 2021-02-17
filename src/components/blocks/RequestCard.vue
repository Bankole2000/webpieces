<template>
  <v-card max-width="344" class="mx-auto">
    <v-list-item>
      <v-list-item-avatar color="primary">
        <v-icon color="white">mdi-puzzle</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline">
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <span v-bind="attrs" v-on="on">
                {{ webpieceRequest.title }}</span
              ></template
            >
            <span>{{ webpieceRequest.title }}</span></v-tooltip
          >
        </v-list-item-title>
        <v-list-item-subtitle class="font-weight-light"
          >Requested by
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <span
                v-bind="attrs"
                v-on="on"
                style="font-weight: bold"
                class="primary--text"
                >{{ webpieceRequest.username }}</span
              ></template
            >
            <span>{{ webpieceRequest.username }}</span></v-tooltip
          ></v-list-item-subtitle
        >
      </v-list-item-content>
      <v-list-item-action>
        <v-btn
          icon
          @click="$emit('deleteById', webpieceRequest)"
          class="error--text"
          :class="$vuetify.theme.dark ? 'glass-card' : 'morph'"
          ><v-icon>mdi-close</v-icon></v-btn
        >
      </v-list-item-action>
    </v-list-item>

    <v-img :src="webpieceRequest.imageUrl" height="194"></v-img>
    <v-card-subtitle class="pb-0 mb-3"
      >Requested -
      <span class="font-weight-bold">{{
        webpieceRequest.createdAt | dateMonth
      }}</span></v-card-subtitle
    >
    <v-card-text class="pb-2" style="margin-bottom: 160px;">
      {{ webpieceRequest.description }}
    </v-card-text>

    <v-card-actions
      style="padding: 10px 20px; position: absolute; width: 100%; bottom: 0; padding-top: 10px; display: flex; flex-direction: column; align-items: start; justify-content: space-between"
    >
      <div
        class="my-2"
        style="display: flex; align-items: center; justify-content: flex-start;"
      >
        <p class="caption mb-0 mr-2 ">
          Preferred Stack:
        </p>
        <div v-if="selectedTechnologies">
          <v-tooltip
            v-for="(technology, i) in selectedTechnologies"
            :key="i"
            top
          >
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-on="on" v-bind="attrs">{{
                techIcons[technology.toLowerCase()]
              }}</v-icon>
            </template>
            <span>{{ technology }}</span>
          </v-tooltip>
        </div>
        <p class="caption mb-0 mr-4 font-weight-bold" v-else>None Specified</p>
      </div>
      <div style="width: 100%; text-align: left;">
        <div style="display: flex; align-items: center;">
          <v-btn
            :disabled="!webpieceRequest.imageFullsizedUrl"
            :href="webpieceRequest.imageFullsizedUrl"
            target="_blank"
          >
            <v-icon left>mdi-image</v-icon>
            <span class="text-capitalize">{{
              webpieceRequest.imageFullsizedUrl ? "View Image" : "unavailable"
            }}</span>
            <v-icon right>mdi-open-in-new</v-icon>
          </v-btn>
          <!-- <v-btn
            :disabled="!webpieceRequest.websiteUrl"
            :href="webpieceRequest.websiteUrl"
          >
            <v-icon left>mdi-web</v-icon>
            <span class="text-capitalize">{{
              webpieceRequest.websiteUrl ? "View Site" : "Unavailable"
            }}</span>
            <v-icon right>mdi-open-in-new</v-icon>
          </v-btn> -->
        </div>
        <p class="mt-2 mb-0">
          Contact
          <span class="font-weight-bold">{{ webpieceRequest.username }}</span>
        </p>
      </div>
      <div
        style="display: flex; align-items: center; justify-content: space-between; width: 100%;"
      >
        <div style="display: flex;">
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-on="on"
                v-bind="attrs"
                color="secondary"
                class="mr-2"
                :class="$vuetify.theme.dark ? 'glass-card' : 'morph'"
                :href="`${userContactDetails.githubhandle}`"
                target="_blank"
                icon
                v-if="userContactDetails.githubhandle"
              >
                <v-icon>mdi-github</v-icon>
              </v-btn></template
            >
            <span>{{ webpieceRequest.username }}'s github</span></v-tooltip
          >
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="#0265ba"
                v-on="on"
                v-bind="attrs"
                class="mr-2"
                :class="$vuetify.theme.dark ? 'glass-card' : 'morph'"
                :href="`${userContactDetails.facebookhandle}`"
                target="_blank"
                icon
                v-if="userContactDetails.facebookhandle"
              >
                <v-icon>mdi-facebook</v-icon>
              </v-btn></template
            ><span>{{ webpieceRequest.username }}'s Facebook</span></v-tooltip
          >
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                v-on="on"
                :color="light.warning"
                class="mr-2"
                :class="$vuetify.theme.dark ? 'glass-card' : 'morph'"
                :href="`mailto:${userContactDetails.email}`"
                target="_blank"
                icon
                v-if="userContactDetails.email"
              >
                <v-icon>mdi-email</v-icon>
              </v-btn></template
            >
            <span>{{ webpieceRequest.username }}'s email</span></v-tooltip
          >
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                :color="light.info"
                v-bind="attrs"
                v-on="on"
                :href="
                  `https://twitter.com/${userContactDetails.twitterhandle}`
                "
                target="_blank"
                :class="$vuetify.theme.dark ? 'glass-card' : 'morph'"
                icon
                v-if="userContactDetails.twitterhandle"
              >
                <v-icon>mdi-twitter</v-icon>
              </v-btn>
            </template>
            <span>{{ webpieceRequest.username }}'s Twitter</span>
          </v-tooltip>
        </div>
        <!-- Upvote Modal -->
        <div>
          <v-dialog persistent v-model="dialog" width="500">
            <template v-slot:activator="{ on: dialog, attrs }">
              <v-tooltip top>
                <template v-slot:activator="{ on: tooltip }">
                  <v-btn
                    text
                    class="pa-0"
                    v-bind="attrs"
                    v-on="{ ...tooltip, ...dialog }"
                    ><v-icon left>mdi-arrow-up-bold</v-icon>
                    {{ requestUpvotes.length }}</v-btn
                  ></template
                >
                <span>Upvote</span></v-tooltip
              >
            </template>

            <v-card class="rounded-xl">
              <v-card-title class="headline secondary--text">
                <v-icon color="primary" size="32" class="mr-4"
                  >mdi-arrow-up-bold</v-icon
                >
                Upvote Request
                <v-spacer></v-spacer>
                <v-btn
                  :class="$vuetify.theme.dark ? 'morph-dark' : 'morph'"
                  icon
                  @click="dialog = false"
                  ><v-icon>mdi-close</v-icon></v-btn
                >
              </v-card-title>
              <div
                :class="$vuetify.theme.dark ? 'rainbow-dark' : 'rainbow'"
                style="width: 100%; height: 2px;"
              ></div>
              <v-card-text class="pa-4 px-6">
                <v-card-title class="pa-0 mb-4"
                  >Upvote&nbsp;
                  <span class="primary--text ml-1"
                    >{{ webpieceRequest.title }}?</span
                  ></v-card-title
                >
                <v-card-subtitle class="pa-0 mb-2"
                  >By
                  <span class="primary--text">
                    {{ webpieceRequest.username }}</span
                  ></v-card-subtitle
                >
                <p>
                  Thanks for wanting to upvote a webpiece request: This helps me
                  know what to focus on and get to important things more
                  quickly.
                </p>
                <v-text-field
                  prepend-inner-icon="mdi-email"
                  class="mb-2"
                  :success="isEmail(upvoteEmail)"
                  label="email"
                  hide-details
                  placeholder="anyemail@would.do"
                  v-model="upvoteEmail"
                ></v-text-field>
                <v-textarea
                  :success="isNotEmpty(upvoteReason)"
                  prepend-inner-icon="mdi-pen"
                  label="why"
                  placeholder="I'm upvoting this request because... (Any reason would do - e.g. I just think it's cool)"
                  v-model="upvoteReason"
                ></v-textarea>
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn color="primary" text @click="dialog = false">
                  Cancel
                </v-btn>
                <v-btn
                  color="primary"
                  :disabled="
                    !isEmail(upvoteEmail) ||
                      !isNotEmpty(upvoteReason) ||
                      updating
                  "
                  @click="toggleUpvotePost"
                  :loading="updating"
                >
                  <v-icon left>mdi-check-bold</v-icon> Upvote
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <!-- <v-btn text class="pa-0"><v-icon>mdi-arrow-down-bold</v-icon> 13</v-btn> -->
        </div>
      </div>
    </v-card-actions>
    <!-- Remove Upvote Dialog -->
    <v-dialog v-model="downvoteDialog" max-width="330">
      <v-card>
        <v-card-title class="headline" style="word-break: normal;"
          >You've already upvoted this request</v-card-title
        >

        <v-card-text>
          <p class="text-h5 font-weight-light">
            Do you want to remove your upvote instead?
          </p>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="downvoteDialog = false">
            Cancel
          </v-btn>

          <v-btn
            color="green darken-1"
            :loading="updating"
            :disabled="updating"
            @click="removeUpvote"
          >
            Remove Upvote
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>
<script>
import { isEmail, isNotEmpty } from "../../utils/validator";
import { mapActions } from "vuex";
export default {
  props: ["webpieceRequest"],
  data() {
    return {
      downvoteDialog: false,
      dialog: false,
      updating: false,
      upvoteEmail: "",
      upvoteReason: "",
      isNotEmpty,
      isEmail,
      light: {
        accent: "#9c27b0",
        primary: "#e91e63",
        error: "#FF0000",
        warning: "#FFB300",
        success: "#4CAF50",
        info: "#2196F3",
        purple: "#d500f9",
        green: "#00c853",
        blue: "#00b0ff",
        orange: "#ef6c00",
        red: "#ff0000"
      },
      techIcons: {
        html: "mdi-language-html5",
        css: "mdi-language-css3",
        javascript: "mdi-language-javascript",
        sass: "mdi-sass",
        bootstrap: "mdi-bootstrap",
        angular: "mdi-angular",
        vue: "mdi-vuejs",
        vuetify: "mdi-vuetify",
        react: "mdi-react",
        nodejs: "mdi-nodejs",
        mysql: "mdi-database-search",
        firebase: "mdi-firebase",
        php: "mdi-language-php",
        python: "mdi-language-python",
        typescript: "mdi-language-typescript"
      }
    };
  },
  computed: {
    userContactDetails() {
      return JSON.parse(this.webpieceRequest.userContactDetails);
    },
    selectedTechnologies() {
      if (this.webpieceRequest.selectedTechnologies) {
        return JSON.parse(this.webpieceRequest.selectedTechnologies);
      } else {
        return null;
      }
    },
    requestUpvotes() {
      const upvotes = this.webpieceRequest.upvotes;
      if (upvotes) {
        return upvotes;
      } else {
        return [];
      }
    }
  },
  methods: {
    ...mapActions(["showToast", "updateWebpieceRequest"]),
    deleteRequest(id) {
      console.log({ id });
      this.$emit;
    },
    toggleUpvotePost(e) {
      this.updating = true;

      let upvotes = this.webpieceRequest.upvotes;
      console.log({
        email: this.upvoteEmail,
        reason: this.upvoteReason,
        id: this.webpieceRequest.id,
        upvotes,
        isNotEmpty: isNotEmpty(this.upvoteReason)
      });
      if (isEmail(this.upvoteEmail) && isNotEmpty(this.upvoteReason)) {
        if (upvotes) {
          upvotes = this.webpieceRequest.upvotes;
          console.log({ upvotes });
          const alreadyUpvoted = upvotes.find(
            (upvote) => upvote.email == this.upvoteEmail
          );
          if (alreadyUpvoted) {
            this.downvoteDialog = true;
            this.updating = false;
          } else {
            upvotes.push({
              email: this.upvoteEmail,
              reason: this.upvoteReason
            });

            this.updateWebpieceRequest({
              id: this.webpieceRequest.id,
              upvotes
            }).then((data) => {
              console.log({ data });
              this.showToast({
                sclass: "success",
                message: `<span class="success--text font-weight-bold">Success: </span>Webpiece request Upvoted`
              });
              this.updating = false;
              this.downvoteDialog = false;
              this.upvoteEmail = "";
              this.upvoteReason = "";
              this.dialog = false;
            });
          }
        } else {
          upvotes = [];
          upvotes.push({ email: this.upvoteEmail, reason: this.upvoteReason });
          this.updateWebpieceRequest({
            id: this.webpieceRequest.id,
            upvotes
          }).then((data) => {
            console.log({ data });
            this.showToast({
              sclass: "success",
              message: `<span class="success--text font-weight-bold">Success: </span>Webpiece request Upvoted`
            });
            this.updating = false;
            this.downvoteDialog = false;
            this.upvoteEmail = "";
            this.upvoteReason = "";
            this.dialog = false;
          });
          // console.log({ id: this.webpieceRequest.id, upvotes });
        }
      } else {
        this.showToast({
          sclass: "error",
          message: `<span class="error--text font-weight-bold">Error: </span>Invalid Email / Reason`
        });
        this.updating = false;
      }
    },
    removeUpvote(e) {
      this.updating = true;
      // console.log({ e });
      const upvotes = this.webpieceRequest.upvotes;
      const upvoteIndex = upvotes
        .map((upvote) => upvote.email)
        .indexOf(this.upvoteEmail);
      console.log({ upvoteIndex });
      upvotes.splice(upvoteIndex, 1);
      this.updateWebpieceRequest({ id: this.webpieceRequest.id, upvotes }).then(
        (data) => {
          console.log({ data });
          this.showToast({
            sclass: "info",
            message: `<span class="info--text font-weight-bold">Info: </span>Upvote removed`
          });
          this.downvoteDialog = false;
          this.upvoteEmail = "";
          this.upvoteReason = "";
          this.dialog = false;
          this.updating = false;
        }
      );
    }
  },
  filters: {
    dateMonth: function(dateLike) {
      if (dateLike) {
        const date = new Date(dateLike).toLocaleString(["en-us"], {
          hour12: true,
          weekday: "long",
          year: "numeric",
          month: "short",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit"
        });
        return date;
      } else {
        return "";
      }
    }
  },
  mounted() {
    console.log(this.selectedTechnologies);
    if (this.selectedTechnologies) {
      this.selectedTechnologies.forEach((tech) => {
        console.log(tech.toLowerCase());
      });
    }
  }
};
</script>
