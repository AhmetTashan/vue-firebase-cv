<template>
    <img
        v-svg-inline.sprite
        v-if="svgFile?.length > 0"
        class="tt-icon"
        :src="svgFile"/>
    <!-- <span v-if="!svgFile" style="color: red">file named "{{name}}" not found</span> -->
</template>

<script setup>
import {defineProps, toRefs} from "vue";

const props = defineProps({name: {type: String, required: true}})
const {name} = toRefs(props)

let svgFile;

try {
    svgFile = require(`@/assets/svg/${name.value}.svg`);
} catch (e) {
    console.error(`sorry, file named "${name.value}.svg" not found`);
}
</script>
