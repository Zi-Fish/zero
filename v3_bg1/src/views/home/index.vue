<template >
    <div>
        <div class="shadow">
        </div>
        <div class="main">

            <div id="profile">
                <img src="@/assets/imgs/zhongli.jpg" alt="">
            </div>
            <h1>紫之鱼博客</h1>
            <hr>
            <h3>紫之鱼</h3>
            <h3>海天一色沙生潮，繁花化尘于早朝</h3>
            <hr>
            <h3>欢迎来到我的博客</h3>
            <nav>
                <ul>
                    <router-link to="/blog"><li>紫之鱼博客</li></router-link>
                    <router-link to=""><li>紫之鱼文章</li></router-link>
                    <router-link to=""><li>一些小东西</li></router-link>
                    <router-link to=""><li>互动板块</li></router-link>
                    <router-link to=""><li>原神板块</li></router-link>
                    <router-link to=""> <li>个人中心</li></router-link>

                </ul>
                <hr>
                <ul class="no1">
                    <li>1</li>
                    <li>2</li>
                </ul>
            </nav>
            <Footer></Footer>
        </div>
    </div>
</template>
<script setup>
</script>
<style lang="less" scoped>
@media screen and (max-width: 575px) {
    .shadow {
        background: url(@/assets/imgs/liyue.jpg) no-repeat;
        opacity: 0.3;
        background-attachment: fixed;
        background-size: cover;
        background-position: center center;
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 1;
    }
}

@media screen and (min-width:576px) {
    .shadow {
        background: url(@/assets/imgs/shenhe2.jpg) no-repeat;
        opacity: 0.3;
        background-attachment: fixed;
        background-size: cover;
        background-position: center center;
        position: absolute;
        // left: 0;
        // top: 0;
        width: 100%;
        min-height: 100%;
        overflow: auto;
        z-index: 1;
    }
}


.main {
    position: relative;
    // display: flex;
    top: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    color: black;
    z-index: 1000;

    h1,
    h3 {
        margin: 1rem;
    }

    #profile {
        width: 10rem;
        height: 10rem;
        border-radius: 50% 50%;
        border: 1px solid rgb(150, 63, 144);
        margin: 0 auto;

        img {
            border-radius: 50% 50%;
            width: 100%;
            height: 100%;
            overflow: hidden;
        }
    }

    hr {
        border: 1px solid violet;
        margin-top: 1.5rem;
        color: violet;
        width: 50%;
    }

    nav {
        display: flex;
        flex-wrap: wrap;
        width: 100%; 
        // align-self: center;

        ul {
            display: flex;
            width: 100%;
            flex-wrap: wrap;
            justify-content: center;

            li {
                border: 1px solid violet;
                border-radius: 2em;
                padding: 0.5rem;
                margin: 1.5rem;
                // align-self: center;
            }
        }

        ul[class="no1"] {
            li {
                padding: 0.5rem;
                margin: 1.5rem;
            }
        }

    }
}
</style>