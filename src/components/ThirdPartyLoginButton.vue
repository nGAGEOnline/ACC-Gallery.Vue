<template>
	<button class="w-100 py-2 mb-2 btn rounded-3" :class="color" type="submit">
        <span class="bi bi-twitter" :class="icon"></span> {{ text }}
    </button>
</template>

<script>
export default {
	name: "ThirdPartyLoginButton",
    props: {
        text: String,
        color: String,
        icon: String,
    }
};
</script>

<style scoped>
.bi {
	padding-right: 10px;
}
</style>