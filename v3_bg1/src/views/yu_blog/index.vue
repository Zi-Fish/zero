<script setup>

</script>

<template>
    <div>
        <nav class="nav1">
            <div></div>
            <ul>
                <li>博客</li>
                <li>文章</li>
                <li>资源</li>
                <li>互动</li>
                <li>原神</li>
                <li>个人</li>
            </ul>
        </nav>
        <div class="content">

        </div>
    </div>
</template>

<style lang='less' scoped>
.nav1 {
    display: flex;
    width: 100%;
    position: fixed;
    flex-wrap: wrap;
    

    ul {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        justify-content: center;

        li {
            width: 4rem;
            border: 1px solid violet;
            border-radius: 2em;
            padding: 0.25rem;
            margin: 1.5rem;

        }
    }
}
.content{
    height: 1000px;
}
</style>