<template>
    <div class="produdct_form">
        <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <h3 class="display-5">Thông Tin Người Dùng</h3>
            <router-link to="/user" style="text-decoration: none;color:#1c7813;">Trở Về</router-link>
        </div>

        <div class="container">
            <form @submit.prevent="save()">
                <div class="form-group row">
                    <label for="inputPassword" class="col-sm-3 col-form-label">Tên Giảng Viên</label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control" v-model="admin.name"
                            v-bind:class="{ 'is-invalid': errors.name }" @blur="validate()" />
                        <div class="invalid-feedback" v-if="errors.name">{{ errors.name }}</div>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputPassword" class="col-sm-3 col-form-label">Email</label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control" v-model="admin.email"
                            v-bind:class="{ 'is-invalid': errors.email }" @blur="validate()" />
                        <div class="invalid-feedback" v-if="errors.email">{{ errors.email }}</div>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputPassword" class="col-sm-3 col-form-label">Ngành Đảm Nhiệm</label>
                    <div class="col-sm-9">
                        <div class="radio">
                                <input type="radio" name="payment" id="payment" v-model="admin.nganh"
                            v-bind:class="{ 'is-invalid': errors.nganh }" @blur="validate()" value="CNTT"> CNTT<br>
                                <input type="radio" name="payment" id="payment" v-model="admin.nganh"
                            v-bind:class="{ 'is-invalid': errors.nganh }" @blur="validate()" value="Thiết Kế Đồ Họa">Thiết Kế Đồ Họa<br>
                                <input type="radio" name="payment" id="payment" value="Marketing" v-model="admin.nganh"
                            v-bind:class="{ 'is-invalid': errors.nganh }" @blur="validate()" >Marketing<br>
                        <div class="invalid-feedback" v-if="errors.nganh">{{ errors.nganh }}</div>
                        </div>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputPassword" class="col-sm-3 col-form-label">Môn</label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control" v-model="admin.mon"
                            v-bind:class="{ 'is-invalid': errors.mon }" @blur="validate()" />
                        <div class="invalid-feedback" v-if="errors.mon">{{ errors.mon }}</div>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputPassword" class="col-sm-3 col-form-label"></label>
                    <div class="col-sm-9 text-left">
                        <router-link to="/User">
                            <button type="reset" class="btn btn-danger" @click="cancel()">HỦY</button>
                            &nbsp;
                        </router-link>
                        <button type="submit" class="btn btn-primary">LƯU</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    name: "adminList",
    data() {
        return {
            errors: {
                name: "",
                email: "",
                nganh: "",
                mon: ""
            },
            admin: {
                name: "",
                email: "",
                nganh: "",
                mon: ""
            }
        }
    },

    created() {
        let adminId = this.$route.params.id
        if (adminId) {
            this.getInforAdmin(adminId);
        }
    },
    methods: {
        validate() {
            let isValid = true;
            this.errors = {
                name: "",
                email: "",
                nganh: "",
                mon: ""
            };
            if (!this.admin.name) {
                this.errors.name = "Không Được Để Trống Tên";
                isValid = false;
            }
            if (!this.admin.email) {
                this.errors.email = "Không Được Để Trống Email";
            } 
            if (!this.admin.nganh) {
                this.errors.nganh = "Không Được Để Trống Ngành";
            } 
            if (!this.admin.mon) {
                this.errors.mon = "Không Được Để Trống Môn";
            } 
            return isValid;
        },
        isNumber(value) {
            return /^\d+$/.test(value);
        },
        save() {
            if (this.validate()) {
                if (this.admin.id) {
                    this.$request.put(`http://localhost:3000/admin/${this.admin.id}`, this.admin).then(res => {
                        if (res) {
                            this.$router.push({ name: 'user.form' }) // Thêm thành công chuyển trang 
                            return
                        } else {
                            alert("Thêm thất bại")
                        }
                    })
                    return;
                }
                this.$request.post('http://localhost:3000/admin', this.admin).then(res => {
                    if (res) {
                        this.$router.push({ name: 'user.form' }) // Thêm thành công chuyển trang 
                        return
                    } else {
                        alert("Thêm thất bại")
                    }
                })
            }
        },
        getInforAdmin(adminId) {
            this.$request.get(`http://localhost:3000/User/${adminId}`).then(res => {
                this.admin = res.data;
            })
        },
        cancel() {
            this.admin.name = '';
            this.admin.email = '';
            this.admin.nganh = '';
            this.admin.mon = '';

        }

    }
}
</script>