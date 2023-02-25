<template>
    <div class="title-body rounded-b-[4px]">
        <!--TITLE & SUBTITLE--> 
        <h1 class="title pt-4 text-[3.5vw] text-center italic font-bold mb-2">
            <router-link to="/">Private Apartments Dragana</router-link>
        </h1>
        <h2 class="subtitle text-center text-[24px] text-[#daffc1] font-bold mb-5"> Croatia <b>•</b> Istra <b>•</b> Premantura </h2>

        <!--FLAGS--> 
        <h4 class="flex justify-center gap-4 mb-5">
            <img class="flag-active" src="src/assets/images/flags/gb.svg">
            <img class="flag" src="src/assets/images/flags/hr.svg">
            <img class="flag" src="src/assets/images/flags/it.svg">
            <img class="flag" src="src/assets/images/flags/ru.svg">
            <img class="flag" src="src/assets/images/flags/de.svg">
        </h4>
    </div>

    <!--MENU--> 
    <div class="flex sm:flex-col lg:flex-row justify-evenly gap-4 px-4 relative top-1 text-[1.2vw] mt-4">
        <router-link to="/" class="custom-btn bg-btnActive w-full border-x-2 border-t-2 rounded-t-[4px] text-center">HOME</router-link>
        <router-link to="/" class="custom-btn bg-btnNormal w-full border-x-2 border-t-2 rounded-t-[4px] text-center">APARTMENTS</router-link>
        <router-link to="/" class="custom-btn bg-btnNormal w-full border-x-2 border-t-2 rounded-t-[4px] text-center">CONTACT</router-link>
        <router-link to="/" class="custom-btn bg-btnNormal w-full border-x-2 border-t-2 rounded-t-[4px] text-center">FAQ</router-link>
        <router-link to="/" class="custom-btn bg-btnNormal w-full border-x-2 border-t-2 rounded-t-[4px] text-center">ABOUT US</router-link>
    </div>

</template>

<script>
    export default {
        name: "Menu"
    }
</script>

<style lang="scss" scoped>
.title-body {
    background-color: rgba(24, 154, 180, 0.50);
    border-left: solid 1px rgba(24, 154, 180, 0.75);
    border-right: solid 1px rgba(24, 154, 180, 0.75);
    border-bottom: solid 1px rgba(24, 154, 180, 0.75);
    .title {
        text-shadow: 2px 2px rgb(17, 46, 62);
    }
    .subtitle {
        text-shadow: 1px 1px rgb(17, 62, 50);
    }
}

.flag {
    transition: box-shadow 0.5s;
    width: 30px;
    box-shadow: 0 0 2px rgba(17, 46, 62,0.4),
                0 0 8px rgba(17, 46, 62, 0.8);
    &:hover {
        cursor: pointer;
        box-shadow: 0 0 2px rgba(256, 256, 256, 0.4),
                    0 0 8px rgba(256, 256, 256, 0.8);
        border: solid 1px rgba(256, 256, 256, 1);
    }
}
.flag-active {
    width: 30px;
    box-shadow: 0 0 2px rgba(218, 255, 193, 0.4),
                0 0 8px rgba(218, 255, 193, 0.8);
    border: solid 1px rgba(218, 255, 193, 0.5);
}

.custom-btn {
    transition: background-color 0.25s, margin-top 0.25s;
    border-color: rgb(17, 46, 62);
    background-color: rgba(24, 154, 180, 0.75);
    text-shadow: 1px 1px rgb(17, 46, 62);
    &:hover {
        transition: 0.5s;
        background-color: rgba(13, 104, 122, 0.85);
        margin-top: -8px;
        text-shadow: 2px 2px black;
        cursor: pointer;
    }
}
</style>