<template>
    <div class="layer">
        <h3 class="layer-heading">About Me</h3>
        <div class="description-layer row d-flex align-items-center">
            <div class="col-sm-12 col-md-3 d-flex justify-content-center">
                <picture class="avatar my-3">
                    <img :src="data?.image" alt="Avatar">
                </picture>
            </div>

            <div class="col-sm-12 col-md-9 my-3 text-aling-justify" v-html="data?.description"></div>
        </div>
    </div>
</template>

<script setup>
import {defineProps, toRefs} from "vue";

const props = defineProps(["data"]);
const {data} = toRefs(props);
</script>

