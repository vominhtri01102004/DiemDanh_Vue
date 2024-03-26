<template>
    <div class="product_list">
        <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <h3 class="display-4">Quản Lý</h3>
            <p>
                <router-link to="/user/create" style="text-decoration:none;color:#1c7813;">Thêm Mới</router-link>
                <router-link style="margin-left:20px;    text-decoration: none;color:#1c7813;" to="/home">Home</router-link>
            </p>
        </div>

        <div class="container">
            <div class="card-deck mb-3 text-center">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col"> Tên</th>
                            <th scope="col">Email</th>
                            <th scope="col">Ngành Đảm Nhiệm</th>
                            <th scope="col">Môn</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr :key="index" v-for="(item, index) in admin">
                            <th scope="row">{{ item.id }}</th>
                            <td>{{ item.name }}</td>
                            <td>{{ item.email }}</td>
                            <td>{{ item.nganh }}</td>
                            <td>{{ item.mon }}</td>
                            <td>
                                <router-link :to="{ name: 'admin.edit', params: { id: item.id } }">
                                    <button class="btn btn-primary">Sửa</button>
                                </router-link>
                                <button class="btn btn-danger ml-2" @click="onDelete(item.id)">Xóa</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "adminList",
    data() {
        return {
            admin: []
        }
    },
    // created là hàm chạy đầu tiên của component này
    created() {
        this.getAll();
    },
    methods: {
        getAll() {
            this.$request.get('http://localhost:3000/admin').then(res => {
                this.admin = res.data
            })
        },
        onDelete(adminId) {
            this.$swal.fire({
                title: "Bạn Chắc Chứ?",
                text: "Không Thể Hoàn Tác Sau Khi Xóa",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Continue"
            }).then((result) => {
                if (result.isConfirmed) {
                    this.$request.delete(`http://localhost:3000/admin/${adminId}`).then(res => {
                        if (res.data) {
                            this.$swal.fire({
                                title: "Đã Xóa!",
                                text: "Hoàn Thành",
                                icon: "success",
                            });
                            this.getAll();
                        }
                    })
                }
            });
        }
    }

}
</script>