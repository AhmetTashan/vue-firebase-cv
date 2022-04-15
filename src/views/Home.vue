<template>

    <About :data="info?.info" v-if="info"/>
    <Description :data="{description: info?.description, image: info?.info?.image}" v-if="info"/>
    <Projects :data="info?.projects" v-if="info"/>
    <Aptitude :data="info?.aptitude" v-if="info"/>


    <div class="home">
    </div>
</template>

<script setup>

import {getCurrentInstance, ref} from "vue";
import About from "@/layers/Home/About";
import Description from "@/layers/Home/Description";
import Projects from "@/layers/Home/Projects";
import Aptitude from "@/layers/Home/Aptitude";

const _instance = getCurrentInstance();
const {$firebase} = _instance.appContext.app.config.globalProperties;
const info = ref(null);
$firebase("/", (data) => {
    info.value = data;
})


</script>
