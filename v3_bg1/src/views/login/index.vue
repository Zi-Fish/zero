<template>
    <div>
        <div class="log">
            <form action="">
                <h3>登录</h3>
                <label for="input">
                    <div>用户名:</div> <input type="text" name="login_name" autocomplete="on" required
                        pattern="^[a-zA-Z0-9_-]{6,16}$" placeholder="请输入6-16位用户名">
                </label><br />
                <label for="input">
                    <div>密 &nbsp; 码:</div><input type="password" name="login_pwd" autocomplete="on" required
                        pattern="^[a-zA-Z0-9_-]{6,16}$" placeholder="请输入6-16位密码" />
                </label><br />
                <input type="submit" name="user_login" id="user_login" value="登录">
                <router-link to="/register"> <input type="button" name="to_reg" id="to_reg" value="注册"></router-link>

            </form>
        </div>
    </div>
</template>
<script>

</script>
<style lang="less" scoped>
@color_font_1: linear-gradient(86deg, #3a4fde, #8b86eb, #c4c1f6, #f7ffff);

.log {
    position: relative;
    top: 5rem;
    // display: flex;
    width: 20rem;
    margin: 0 auto;

    h3 {
        width: 20rem;
        background-image: @color_font_1;
        margin: 0 auto;
    }

    form {
        width: 100%;

        label {
            margin-top: 1rem;
            width: 100%;

            div {
                position: relative;
                display: inline;
                width: 5rem;
                left: 0;
            }

            input {
                position: relative;
                width: 15rem;
                border: none;
                margin-left: 0.5rem;
            }
        }
        input[type=submit],input[type=button]{
            margin: 1rem;
            background: @color_font_1;
            border: none;
        }
    }

}
</style>