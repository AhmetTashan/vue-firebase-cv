<template>
    <header class="row mt-5 about">
        <div class="col-sm-12 col-md-6 d-flex flex-column py-3">
            <h1>{{ data?.name }} {{ data?.surname }}</h1>
            <small class="fs-4">{{ data?.jobTitle }}</small>
        </div>
        <div class="col-sm-12 col-md-6 social-media py-3">
            <ul>
                <li v-for="(link,iconName) in data?.socialMedia" :key="iconName">
                    <a :href="link" target="_blank" :title="iconName">
                        <Icon :name="iconName" width="150"/>
                    </a>
                </li>
            </ul>
            <div class="pt-3">
                <span>Mail: </span> <strong>{{ data?.email }}</strong>
            </div>
        </div>
    </header>
</template>

<script setup>
import {defineProps, toRefs} from "vue";
import Icon from "@/components/Icon";

const props = defineProps(["data"])
const {data} = toRefs(props)
</script>

<style lang="scss" scoped>
h1{
    line-height: .4;
}
</style>
