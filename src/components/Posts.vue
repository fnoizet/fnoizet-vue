<template>
    <div class="postWrapper" id="posts">
        <div class="itemsWrapper">
            <PostItem v-for="work in this.workToShow" :key="work.code" :datas="work" class="post" />
        </div>
    </div>
</template>
<script>
import PostItem from './PostItem.vue';

export default {
    name: "PostPage",
    inject: ["appDatas"],
    data: function() {
        return {
            work: {},
            breadcrumb: [
                {url:"/", text:"Accueil"}
            ]
        }
    },

    computed: {
        workToShow: function() {
            return this.appDatas.work.filter(el => el.display === true)
        }
    },

    components: {PostItem},
}
</script>
<style scoped>
.postWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100%;
    background-color: var(--primary);
}

.itemsWrapper {
    display: flex;
    flex-flow: row;
    flex-wrap: 4;
    justify-content: left;
    width : 1000px;
}
</style>