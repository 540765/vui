<script lang="ts">
export default {
	name: "vbutton",
};
</script>
<script setup lang="ts">
import { ref } from "vue";

const vbutton = ref<HTMLButtonElement>();
</script>
<template>
	<button ref="vbutton"><slot /></button>
</template>
