<template>
  <!-- <div class="youtube-modal"> -->
  <v-dialog scrollable v-model="dialog" width="500">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        color="#9c27b0"
        :class="$vuetify.theme.dark ? 'morph-dark' : 'morph'"
        class="ma-2"
        icon
        large
        v-bind="attrs"
        v-on="on"
      >
        <v-icon size="32">mdi-discord</v-icon>
      </v-btn>
    </template>

    <v-card class="rounded-xl">
      <v-card-title class="headline">
        <v-icon color="#9c27b0" class="mr-4">mdi-discord</v-icon> Discord
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

      <v-card-text class="pt-4 d-flex flex-column justify-center align-center">
        <p class="text-h6 font-weight-light" v-if="!$vuetify.theme.dark">
          🙏 Thanks for your interest in the discord server
        </p>
        <p class="text-h6 font-weight-light" v-if="$vuetify.theme.dark">
          👊 Cool peeps join cool discord servers
        </p>
        <!-- :onButtonClick="method" cardWidth="px or %"  showButton="boolean"-->
        <link-prevue v-if="link" :url="link">
          <template slot="loading">
            <!-- set your custom loading -->
            <v-progress-linear
              color="primary"
              indeterminate
              rounded
              height="6"
            ></v-progress-linear>
          </template>
          <template slot-scope="props">
            <v-card class="mx-auto" max-width="344">
              <v-img :src="props.img" height="200px" :alt="props.title"></v-img>
              <div
                :class="$vuetify.theme.dark ? 'rainbow-dark' : 'rainbow'"
                style="width: 100%; height: 2px;"
              ></div>

              <v-card-title>
                {{ props.title }}
              </v-card-title>

              <v-card-subtitle>
                {{ props.description }}
              </v-card-subtitle>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  block
                  :href="props.url"
                  target="_blank"
                  :class="$vuetify.theme.dark ? 'glass-card' : 'morph'"
                >
                  <v-icon left>mdi-open-in-new</v-icon> Go
                </v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </link-prevue>
        <v-card v-else class="glass-card pa-4" style="width: 100%;">
          <p class="mb-2">
            Status:
            <span
              :class="$vuetify.theme.dark ? 'warning--text' : 'primary--text'"
              >Still setting things up</span
            >
          </p>
          <v-progress-linear
            color="primary"
            indeterminate
            rounded
            height="6"
          ></v-progress-linear>
          <p
            class="mt-3 mb-0"
            style="cursor: pointer;"
            @click="moreDetails = !moreDetails"
          >
            {{ moreDetails ? "Less" : "More" }} Details
            <v-icon
              >mdi-{{ moreDetails ? "chevron-up" : "chevron-down" }}</v-icon
            >
          </p>
          <v-expand-transition>
            <div v-show="moreDetails">
              <p class="mt-2 mb-0">
                Sadly, the discord server isn't quite ready yet,
                <span v-if="$vuetify.breakpoint.mdAndUp"
                  >but I'm working on it tirelessly, trust me.</span
                >
                <br />
                <br />
                {{
                  $vuetify.breakpoint.mdAndUp
                    ? "If you'd like to be notified when it's up, just fill "
                    : "Fill in "
                }}your details below, and you'll get an invite right in your
                inbox once the server is ready.
              </p>
              <div v-if="!sent">
                <v-text-field
                  label="Your name"
                  placeholder="JohnDoe99"
                  v-model.trim="name"
                  :success="isNotEmpty(name)"
                  hide-details
                  class="mt-2"
                ></v-text-field>
                <v-text-field
                  label="Your email"
                  placeholder="your@email.com"
                  v-model.trim="email"
                  :success="isEmail(email)"
                  class="mt-2"
                  hide-details
                ></v-text-field>
                <v-btn
                  class="mt-2 text-capitalize"
                  :disabled="!validData || sending"
                  @click="sendData()"
                  :class="$vuetify.theme.dark ? 'glass-card' : 'morph'"
                  block
                  ><v-icon :color="!validData ? 'warning' : 'success'" left>{{
                    !validData ? "mdi-alert" : "mdi-check"
                  }}</v-icon
                  >{{ !validData ? "Invalid name / email" : "Keep me Updated" }}
                </v-btn>
              </div>

              <v-alert
                v-else
                transition="scroll-y-reverse-transition"
                class="mt-4"
                prominent
                text
                type="success"
              >
                <v-row align="center">
                  <v-col class="grow"
                    >Your Request has been Sent. Thanks. I'll be sure to keep
                    you updated.</v-col
                  >
                  <v-col class="shrink">
                    <v-btn @click="resetForm" icon
                      ><v-icon>mdi-restore</v-icon></v-btn
                    >
                  </v-col>
                </v-row>
              </v-alert>

              <v-overlay :absolute="true" :value="sending">
                <v-progress-circular
                  :size="70"
                  :width="7"
                  color="primary"
                  indeterminate
                ></v-progress-circular>
              </v-overlay></div
          ></v-expand-transition>
        </v-card>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          class="rounded-lg error--text"
          :class="$vuetify.theme.dark ? 'glass-card' : 'morph'"
          @click="dialog = false"
        >
          <v-icon left>mdi-close</v-icon> Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  <!-- </div> -->
</template>

<script>
import LinkPrevue from "link-prevue";
import { isEmail, isNotEmpty } from "../../utils/validator";
import { mapActions } from "vuex";
export default {
  name: "DiscordModal",
  components: {
    LinkPrevue
  },
  data() {
    return {
      moreDetails: false,
      isDark: null,
      color: null,
      sending: false,
      sent: false,
      dialog: false,
      // link: "https://discord.gg/rzx6Ruc"
      link: null,
      type: "discord",
      name: "",
      email: "",
      isNotEmpty,
      isEmail
    };
  },
  computed: {
    validData() {
      return isNotEmpty(this.name) && isEmail(this.email);
    }
  },
  methods: {
    ...mapActions(["postUpdateRequest", "showToast"]),
    resetForm() {
      this.sent = !this.sent;
      this.name = "";
      this.email = "";
    },
    sendData() {
      if (isNotEmpty(this.name) && isEmail(this.email)) {
        this.sending = true;
        this.isDark = this.$vuetify.theme.dark;
        this.color = this.isDark
          ? this.$vuetify.theme.themes.dark.primary
          : this.$vuetify.theme.themes.light.primary;
        this.postUpdateRequest(this.$data).then((result) => {
          console.log({ result });
          if (result.success) {
            this.showToast({
              sclass: "success",
              message: `<span class="success--text" style="font-weight: bold; ">Success: </span>👍 Cool, I'll keep you updated`,
              timeout: 3000
            });
          } else {
            this.showToast({
              sclass: "primary",
              message: `<span class="primary--text" style="font-weight: bold;">info: </span>✌ ${result.message}`,
              timeout: 3000
            });
          }
          this.sending = false;
          this.sent = true;
        });
      } else {
        this.showToast({
          sclass: "error",
          message: `<span style="font-weight: bold; color: var(--error);">Error: <span>Incomplete Information`
        });
      }
    }
  },
  mounted() {
    // console.log({
    //   isNotEmpty: isNotEmpty(" "),
    //   isEmail: isEmail("techybanky@gmail.com")
    // });
  }
};
</script>

<style scoped>
.morph {
  box-shadow: 5px 5px 5px #dadada, -5px -5px 5px #ffffff !important;
}

.glass-card {
  transition: all 0.3s;
  border-top: 1px solid #ffffff88;
  border-left: 1px solid #ffffff88;
  backdrop-filter: blur(3px);
  /* border-radius: 15px; */
  box-shadow: 3px 3px 4.5px rgba(0, 0, 0, 0.5);
  background: #25252510 !important;
}

.glass-card[disabled] {
  box-shadow: none;
  border: none;
}

.glass-panel {
  transition: all 0.3s;
  border-top: 1px solid #ffffff88;
  border-left: 1px solid #ffffff88;
  backdrop-filter: blur(3px);
  /* border-radius: 15px; */
  box-shadow: 3px 3px 4.5px rgba(0, 0, 0, 0.5);
  background: #25252510 !important;
}

.morph:hover {
  box-shadow: inset 5px 5px 5px #dadada, inset -5px -5px 5px #ffffff !important;
}

.morph-dark {
  box-shadow: 3px 3px 3px #000000, -3px -3px 3px #252525 !important;
}

.morph-dark:hover {
  box-shadow: inset 3px 5px 5px #000000, inset -3px -5px 5px #252525 !important;
}

.rainbow {
  background-image: linear-gradient(
    to right,
    #101010 0%,
    #101010 14.2857%,
    #ff0000 1%,
    #ff0000 28.5714%,
    #ffb300 2%,
    #ffb300 42.8571%,
    #4caf50 3%,
    #4caf50 57.1429%,
    #2196f3 4%,
    #2196f3 71.4286%,
    #e91e63 5%,
    #e91e63 85.7143%,
    #9c27b0 6%,
    #9c27b0 100%
  );
}

.rainbow-dark {
  background-image: linear-gradient(
    to right,
    #efefef 0%,
    #efefef 14.2857%,
    #ff0000 1%,
    #ff0000 28.5714%,
    #ffb300 2%,
    #ffb300 42.8571%,
    #4caf50 3%,
    #4caf50 57.1429%,
    #2196f3 4%,
    #2196f3 71.4286%,
    #e91e63 5%,
    #e91e63 85.7143%,
    #9c27b0 6%,
    #9c27b0 100%
  );
}
</style>
