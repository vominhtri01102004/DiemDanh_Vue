<template>
    <div class="container">
        <img class="logo" src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Logo_ITC.jpg" alt="">
        <h1 class="text-center">Đăng Nhập</h1>
        <form @submit.prevent="save()" style="width=50px;">
            <div class="register">
                <input type="text" v-model="user.name" placeholder="Nhập Tên">
                <input type="Email " v-model="user.email" placeholder="Nhập Email">
                <input type="Password " v-model="user.password" placeholder="Nhập Mật Khẩu">
                <button type="submit" style="margin-left:28px;">Đăng Nhập</button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "SignUp",
    data() {
        return {
            user: {
                name: "",
                email: "",
                password: ""
            }
        }
    },
    methods: {

        save() {
            // Lấy dữ liệu từ API
            this.$request.get("http://localhost:3000/users")
                .then(res => {
                    console.log(res.data);
                    console.log(this.user);

                    // Kiểm tra xem giá trị từ API có trùng với giá trị mới nhập từ this.user không
                    const isMatch = res.data.some(apiUser => {
                        return apiUser.name === this.user.name &&
                            apiUser.email === this.user.email &&
                            apiUser.password === this.user.password;
                    });

                    if (isMatch) {
                        alert("Đăng nhập thành công")
                        this.$router.push({ name: "home" })
                    } else {
                        alert("Đăng nhập thất bại")

                        // Hiển thị thông báo hoặc thực hiện các hành động phù hợp khi dữ liệu không khớp
                    }
                })
                .catch(error => {
                    console.error("Lỗi khi lấy dữ liệu từ máy chủ:", error);
                    // Xử lý lỗi nếu có
                });
        }



    }
} 
</script>

<style>
.container {
    margin-top: 20px;
}

.logo {
    position: relative;

    left: 47%;
    bottom: 10px;
    height: 100px;
}

.register input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid skyblue;
}

.register button {
    position: relative;
    left: 36.5%;
    width: 300px;
    height: 40px;
    color: #fff;
    cursor: pointer;
    border: 1px solid skyblue;
    background-color: skyblue;
}
</style>