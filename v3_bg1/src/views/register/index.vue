<script setup>

</script>

<template>
    <div class="re">
        <form action="#" class="contact_form" method="post">
            <ul>
                <li class="usually">
                    <h2>用户注册</h2>
                </li>
                <li class="usually">
                    <span>账号：</span>
                    <input type="text" name="name" id="name" autocomplete="on" required
                        pattern="^[a-zA-Z0-9_-]{6,16}$">
                </li>

                <li class="usually">
                    <span>密码：</span>
                    <input type="password" name="password" id="password" autocomplete="off" required
                        pattern="^[a-zA-Z0-9_-]{6,16}$">
                </li>
                <li class="usually">
                    <span>确认密码：</span>
                    <input type="password" name="re_password" id="re_password" autocomplete="off" required
                        pattern="^[a-zA-Z0-9_-]{6,16}$">
                </li>
                <li><input class="submit" type="submit" value="立即注册" >
                    <input type="button" value="返回登录" formaction="/login">
                </li>

            </ul>
        </form>
    </div>
</template>

<style lang="less" scoped>
.contact_form {
    display: flex;
    width: 70%;
    margin: 0 auto;
    flex-wrap: wrap;

    *:focus {
        outline: none;
    }

    .contact_form ul {
        width: 100%;
        list-style-type: none;
        margin: 0 auto;
        padding: 0;


        .li {
            padding: 0.725rem;
            margin-top: 0.5rem;
            list-style-type: none;
            border-bottom: 1px solid #eee;

            span {
                width: 5rem;
                display: inline-block;
            }

            & :first-child,
            & :last-child {
                border-bottom: 1px solid #777;
            }

            .usually input {
                height: 20px;
                width: 220px;
                padding: 5px 8px;
                background: url(@/assets/imgs/qiu2.jpeg) no-repeat 30% center;
                box-shadow: 0 10px 15px #eee inset;
                border-radius: 2px;
                opacity: 0.2;
            }

            .usually input:focus {
                background: #fff;
            }

            input[type=submit],
            input[type=button] {
                margin: 2rem;
                background-color: #68b12f;
                border: 1px solid #509111;
                border-radius: 3px;
                color: white;
                padding: 6px 20px;
                text-align: center;
            }

            input[type=submit]:hover,
            input[type=button]:hover {
                opacity: 0.85;
                cursor: pointer;
            }

        }



    }


}
</style>