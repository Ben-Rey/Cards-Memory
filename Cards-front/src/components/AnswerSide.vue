<script setup lang="ts">
import { ref } from "vue";
import { LockClosedIcon } from "@heroicons/vue/solid";
import { LockOpenIcon } from "@heroicons/vue/solid";

const isActive = ref(false);
</script>

<template>
  <div class="relative w-full h-full">
    <div
      class="w-full h-full bg-base-content text-base-100 flex justify-center items-center transition transition-slowest ease duration-500 absolute top-0 left-0 z-10"
      :class="{ 'translate-y-full': isActive }"
    >
      <button
        class="btn btn-circle absolute z-20 flex-col transition-none -top-6"
        @click="isActive = !isActive"
      >
        <div class="h-1/2 flex justify-center items-center align-middle w-full">
          <LockOpenIcon class="h-3 w-3" />
        </div>
        <div class="h-1/2 flex justify-center items-center align-middle w-full">
          <LockClosedIcon class="h-3 w-3" />
        </div>
      </button>
      <h1 class="text-3xl font-bold text-center">Réponse</h1>
    </div>
    <div class="w-full h-full bg-white">
      <p class="text-black">La réponse</p>
    </div>
  </div>
  <!-- <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Documentation</template>

    Vue’s
    <a target="_blank" href="https://vuejs.org/">official documentation</a>
    provides you with all information you need to get started.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Tooling</template>

    This project is served and bundled with
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite</a>.
    The recommended IDE setup is
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a> +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>.
    If you need to test your components and web pages, check out
    <a href="https://www.cypress.io/" target="_blank">Cypress</a> and
    <a href="https://on.cypress.io/component" target="_blank"
      >Cypress Component Testing</a
    >.

    <br />

    More instructions are available in <code>README.md</code>.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Ecosystem</template>

    Get official tools and libraries for your project:
    <a target="_blank" href="https://pinia.vuejs.org/">Pinia</a>,
    <a target="_blank" href="https://router.vuejs.org/">Vue Router</a>,
    <a target="_blank" href="https://test-utils.vuejs.org/">Vue Test Utils</a>,
    and
    <a target="_blank" href="https://github.com/vuejs/devtools">Vue Dev Tools</a
    >. If you need more resources, we suggest paying
    <a target="_blank" href="https://github.com/vuejs/awesome-vue"
      >Awesome Vue</a
    >
    a visit.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Community</template>

    Got stuck? Ask your question on
    <a target="_blank" href="https://chat.vuejs.org">Vue Land</a>, our official
    Discord server, or
    <a target="_blank" href="https://stackoverflow.com/questions/tagged/vue.js"
      >StackOverflow</a
    >. You should also subscribe to
    <a target="_blank" href="https://news.vuejs.org">our mailing list</a> and
    follow the official
    <a target="_blank" href="https://twitter.com/vuejs">@vuejs</a>
    twitter account for latest news in the Vue world.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Support Vue</template>

    As an independent project, Vue relies on community backing for its
    sustainability. You can help us by
    <a target="_blank" href="https://vuejs.org/sponsor/">becoming a sponsor</a>.
  </WelcomeItem> -->
</template>
