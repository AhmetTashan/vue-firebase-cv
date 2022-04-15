<template>
    <div class="layer">
        <h3 class="layer-heading">Projects</h3>
        <div class="row">
            <div class="col-sm-12 col-md-3"></div>
            <div class="col-sm-12 col-md-9 my-3 text-aling-justify">
                {{ description }}
            </div>
        </div>
        <div
            class="row md-row-column-reverse"
            v-for="item in data"
            :key="item?.id">
            <div class="col-sm-12 col-md-3 my-3 text-aling-right">
                <h6>Kullanılan Teknolojiler</h6>
                <small>{{ item?.usedTechnologies }}</small>
            </div>
            <div class="col-sm-12 col-md-9 my-3 text-aling-justify">
                <div class="d-flex w-100 align-items-center">
                    <h5 class="mb-1">
                        {{ item?.name }}
                    </h5>
                    <small class="text-muted text-date">
                        {{ item?.date }}
                    </small>
                </div>
                <p class="mb-1">
                    {{ item?.description }}
                </p>
                <a
                    :href="'//'+item?.link"
                    :class="!item?.status ? 'disabled' : ''"
                    target="_blank"
                    class="text-muted tt-icon-group">
                    <div class="tt-icon-group-item">
                        <Icon :name="item?.status ? 'link' : 'unlink'"/>
                    </div>
                    <span class="tt-icon-group-text">
                            {{ item?.link }}
                        </span>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import {defineProps, toRefs} from "vue";
import Icon from "@/components/Icon";

const props = defineProps(["data"])
const {data} = toRefs(props)

let description = data.value?.description;
delete data.value?.description;


</script>

<style scoped>

</style>
