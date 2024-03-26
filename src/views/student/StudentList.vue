<template>
    <div class="student_list">
        <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <h3 class="display-4">Quản Lý Sinh Viên</h3>
            <router-link to="/student/create" style="    text-decoration: none;margin-right:50px;color:#1c7813;">Thêm Mới</router-link>
            <router-link style="margin-left:20px;    text-decoration: none;color:#1c7813;" to="/home">Home</router-link>
        </div>

        <div class="container">
            <div class="card-deck mb-3">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">TÊN SINH VIÊN</th>
                            <th scope="col">MSSV </th>
                            <th scope="col">LỚP</th>
                            <th scope="col">KHOA</th>
                            <th scope="col">Môn</th>
                            <th scope="col">ĐIỂM DANH</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr :key="index" v-for="(item, index) in student">
                            <th scope="row">{{ item.id }}</th>
                            <td>{{ item.name }}</td>
                            <td>{{ item.mssv }}</td>
                            <td>{{ item.lop }}</td>
                            <td>{{ item.khoa }}</td>
                            <td>{{ item.mon }}</td>
                            <td>{{ item.diem }}</td>
                            <td>
                                <router-link :to="{ name: 'student.edit', params: { id: item.id } }">
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
    name: "StudentList",
    data() {
        return {
            student: []
        }
    },
    // created là hàm chạy đầu tiên của component này
    created() {
        this.getAll();
    },
    methods: {
        getAll() {
            this.$request.get('http://localhost:3000/student').then(res => {
                this.student = res.data
            })
        },
        onDelete(studentId) {
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
                    this.$request.delete(`http://localhost:3000/student/${studentId}`).then(res => {
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