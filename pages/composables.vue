<script setup lang="ts">
import { get } from '@vueuse/core';
const appConfig = useAppConfig()


const page = ref(1)
const { data: posts } = await useAsyncData(
  'posts',
  () => $fetch('/api/hello', {
    params: {
      page: page.value
    }
  }), {
    watch: [page]
  }
)


const counter = useCookie<number>('counter',{
    watch: true
  })
counter.value = counter.value || Math.round(Math.random() * 1000)
function getCookie(cname:string) {
      // var name = cname + "=";
      // var decodedCookie = decodeURIComponent(document.cookie);
      // var ca = decodedCookie.split(';');
      // for(var i = 0; i <ca.length; i++) {
      //   var c = ca[i];
      //   while (c.charAt(0) == ' ') {
      //     c = c.substring(1);
      //   }
      //   if (c.indexOf(name) == 0) {
      //     return c.substring(name.length, c.length);
      //   }
      // }
      return "";
    }


    const error = useError()
    const title = computed(() => get(error)?.message ?? '');
    const statusCode = computed(() => {
        const err = get(error);
         return err && 'statusCode' in err ? err.statusCode : -1;
    });

const handleError = () => clearError({ redirect: '/' });

</script>
<template>
  <div>
    <span class="text-3xl">Composables</span>
    <div class="relative mt-5 mb-5">
      <div class="absolute inset-0 flex items-center" aria-hidden="true">
        <div class="w-full border-t border-gray-300"></div>
      </div>
    </div>
    <div class="mx-auto grid gap-y-2 ">
      <span class="text-xl mt-5">useAppConfig</span>
      <span class="text-sm mt-5">Define configuration in app.config.ts file </span>
      <CodePreview :code="JSON.stringify(appConfig)" filename="test" language="ts" ></CodePreview>
    </div>
    <div class="mx-auto grid gap-y-2 ">
      <span class="text-xl mt-5">useAsyncData</span>
      <span class="text-sm mt-5">const { data: posts } = await useAsyncData(
          'posts',
          () => $fetch('/api/hello', {
            params: {
              page: page.value
            }
          }), {
            watch: [page]
          }
        ) </span>
      <div>
        <label>Page: </label>
        <input class="w-52 rounded-sm border border-gray-400 pl-2" v-model="page"/>
      </div>

      <CodePreview :code="JSON.stringify(posts)" filename="test" language="ts" ></CodePreview>
    </div>
    <div class="mx-auto grid gap-y-2 ">
      <span class="text-xl mt-5">useCookie</span>
      <div class="mx-0 grid gap-y-2 ">
          <h1>Counter: {{ counter || '-' }}</h1>
          <button class="rounded-lg bg-indigo-600 text-white w-52" @click="counter = 0">reset</button>
          <button class="rounded-lg bg-red-600 text-white w-52" @click="counter--">-</button>
          <button class="rounded-lg bg-green-600 text-white w-52" @click="counter++">+</button>
      </div>
      <CodePreview :code="getCookie('counter')" filename="test" language="ts" ></CodePreview>
    </div>
    <div class="mx-auto grid gap-y-2 ">
      <span class="text-xl mt-5">useError</span>
      
      <CodePreview :code="JSON.stringify({title,statusCode})" filename="test" language="ts" ></CodePreview>
    </div>
  </div>

</template>