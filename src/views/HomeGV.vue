<template>
<tbody style="text-align:center">
<tr :key="index" v-for="(item, index) in admin">
<h4 style="margin-left:590px;" class="display-4">Giảng Viên {{ item.name }}</h4>  
</tr>
</tbody>
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
                            <router-link class="p-2 text-dark" to="/home" style=" color:#1c7813;"><td>{{ item.name }}</td></router-link>
                            <td>{{ item.email }}</td>
                            <td>{{ item.nganh }}</td>
                            <td>{{ item.mon }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
<h6 style="margin-left:100px;" >Danh Sách Sinh Viên</h6>
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
                            <td>{{ item.diem }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <h4 style="float:right;">
      <router-link class="p-2 text-dark" to="/student" style=" text-decoration: none;color:#1c7813;">Chỉnh Sửa danh Sách Sinh Viên</router-link>
      </h4>
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