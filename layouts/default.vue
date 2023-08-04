<script lang="ts" setup></script>

<template>
    <div class="flex flex-row bg-[#f4f6f8]">
        <div class="w-64 p-3 mb-5">
            <LeftBar></LeftBar>
        </div>
        <div class="overflow-y-auto h-screen w-screen grow">
            <Header></Header>
            <slot />
        </div>
        <!-- <NuxtWelcome /> -->

    </div>
</template>

<style scoped></style>