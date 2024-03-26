<template>
  <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
    <h5 class="my-0 mr-md-auto font-weight-normal">
      <router-link class="p-2 text-dark" to="/student" style=" text-decoration: none;color:#1c7813;">Xem Các Sinh Viên
      </router-link>
      <router-link class="p-2 text-dark" to="/user" style=" text-decoration: none;color:#1c7813;">Xem Các Giảng Viên</router-link>
    </h5>

    <select class="form-select" aria-label="Default select example" style="width: 40rem;">
      <option selected>menu</option>
      <option value="1">CD22CT10</option>
      <option value="1">CD22CT11</option>
      <option value="2">CD22CT12</option>
      <option value="3">CD22CT13</option>
    </select>
    <a href="/" class="btn btn-outline-primary" routerlink="cart">Đăng Xuất</a>
  </div>
<h4 style="text-align:center" class="display-4">Các Giảng Viên</h4>
        <div class="container">
            <div class="card-deck mb-3">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Tên Giảng Viên</th>
                            <th scope="col">Email </th>
                            <th scope="col">Ngành</th>
                            <th scope="col">Môn</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr :key="index" v-for="(item, index) in admin">
                            <th scope="row">{{ item.id }}</th>
                            <router-link class="p-2 text-dark" to="/HomeGV" style=" color:#1c7813;"><td>{{ item.name }}</td></router-link>
                            <td>{{ item.email }}</td>
                            <td>{{ item.nganh }}</td>
                            <td>{{ item.mon }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
<h4 style="text-align:center" class="display-4">Các Sinh Viên</h4>
        <div class="container">
            <div class="card-deck mb-3">``
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">TÊN SINH VIÊN</th>
                            <th scope="col">MSSV </th>
                            <th scope="col">LỚP</th>
                            <th scope="col">KHOA</th>
                            <th scope="col">MÔN</th>
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
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

  <router-view />
</template>

<script>
export default {
    name: "StudentList",
    data() {
        return {
            student: [],
            admin:[]
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
            this.$request.get('http://localhost:3000/admin').then(res => {
                this.admin = res.data
            })

        },
    }

}
</script>