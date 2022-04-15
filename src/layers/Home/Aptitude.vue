<template>
    <div class="layer">
        <h3 class="layer-heading">Aptitudes</h3>

        <div
            class="row"
            v-for="items in data"
            :key="items">
            <div class="col-sm-12 col-md-3 my-3 text-aling-right sm-text-aling-center">
                <strong>{{ items.name }}</strong>
            </div>

            <div class="col-sm-12 col-md-9 my-3 text-aling-justify sm-text-aling-center">
                <ul>
                    <template
                        v-for="(item,key) in items"
                        :key="item">
                        <li v-if="key!='name'">
                            {{ item }}
                        </li>
                    </template>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import {defineProps, toRefs} from "vue";

const props = defineProps(["data"]);
const {data} = toRefs(props);
</script>

<style scoped>

</style>
