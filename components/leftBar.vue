<template>
    <div class="top-0 w-auto bg-zinc-00 h-full p-0 rounded-2xl relative overflow-hidden shadow-2xl shadow-slate-950 ">
        <div id="title-menu" class="mt-5 text-center">
            <p class="text-3xl">
                <Icon name="ph:sketch-logo-thin" color="gray" class="mr-3 -ml-8" />ERP
            </p>
        </div>
        <hr
            class="my-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-black to-transparent opacity-25 dark:opacity-100" />
        <div class=" px-3 py-4 overflow-y-auto dark:bg-gray-800">
            <ul class="space-y-2 font-medium">
                <li>
                    <NuxtLink to="/">
                        <a href="#"
                            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <Icon name="ic:outline-house" color="gray" />
                            <span class="ml-3">Home</span>
                        </a>
                    </NuxtLink>

                </li>
            </ul>
        </div>
        <hr
            class="my-0 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-black to-transparent opacity-25 dark:opacity-100" />

        <div class="px-3 py-4 overflow-y-auto dark:bg-gray-800">

            <ul class="space-y-2 font-medium">
                <li v-for="item in menu" :key="item.name">
                    <span v-if="!item?.sub">
                        <NuxtLink :to="item.route">
                            <a href="#"
                                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <Icon :name="item.icon" color="gray" />
                                <span class="ml-3">{{ item.name }}</span>
                            </a>
                        </NuxtLink>

                    </span>
                    <span v-else>
                        <button type="button" @click="item.active = !item.active"
                            class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                            aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                            <Icon :name="item.icon" color="gray" />

                            <span class="flex-1 ml-3 text-left whitespace-nowrap">{{ item.name }}</span>
                            <Icon v-if="item.sub?.length != 0 && item?.sub" class="ml-3" name="ph:caret-down-bold"
                                color="black" size="18" />
                        </button>
                        <ul v-if="item.active" id="dropdown-example" class="py-2 space-y-2 ml-5">
                            <li v-for="subitem in item.sub" :key="subitem.name">
                                <NuxtLink :to="subitem.route">
                                    <a href="#"
                                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                        <Icon :name="subitem.icon" color="gray" />
                                        <span class="ml-3">{{ subitem.name }}</span>
                                    </a>
                                </NuxtLink>
                            </li>
                        </ul>
                    </span>
                </li>

            </ul>
        </div>
    </div>
</template>
<script setup>
var menu = ref([])
menu.value = [
    {
        'name': 'Configurations', 'icon': 'material-symbols:settings-outline', 'active': false, 'sub': [
            { 'name': 'Users', 'icon': 'ph:users-duotone', 'route': '/users' },
            { 'name': 'Roles', 'icon': 'ph:key-bold', 'route': '/roles' },
        ]
    },
    { 'name': 'Test', 'icon': 'material-symbols:folder-open-outline', 'route': '/test' },
    { 'name': 'Test2', 'icon': 'material-symbols:acute', 'route': '/test2' },
    { 'name': 'Login', 'icon': 'material-symbols:acute', 'route': '/login' },
]

</script>
