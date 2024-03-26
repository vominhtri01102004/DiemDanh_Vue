<template>
    <div class="produdct_form">
        <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <h3 class="display-5">Thêm Sinh Viên</h3>
            <router-link to="/student" style="text-decoration: none;color:#1c7813;">Trở Về</router-link>
        </div>

        <div class="container">
            <form @submit.prevent="save()">
                <div class="form-group row">
                    <label for="inputPassword" class="col-sm-3 col-form-label">TÊN</label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control" v-model="student.name"
                            v-bind:class="{ 'is-invalid': errors.name }" @blur="validate()" />
                        <div class="invalid-feedback" v-if="errors.name">{{ errors.name }}</div>
                    </div>

                </div>
                <div class="form-group row">
                    <label for="inputPassword" class="col-sm-3 col-form-label">LỚP</label>
                    <div class="col-sm-9">
                        <div class="radio" style="display:flex; ">
                                <input style="margin-left: 50px;" type="radio" name="lop" id="lop" v-model="student.lop"
                            v-bind:class="{ 'is-invalid': errors.lop }" @blur="validate()" value="CD22CT11">CD22CT11<br>
                                <input style="margin-left: 50px;"  type="radio" name="lop" id="lop" v-model="student.lop"
                            v-bind:class="{ 'is-invalid': errors.lop }" @blur="validate()" value="CD22CT12">CD22CT12<br>
                                <input style="margin-left: 50px;"  type="radio" name="lop" id="lop" value="CD22CT13" v-model="student.lop"
                            v-bind:class="{ 'is-invalid': errors.lop }" @blur="validate()" >CD22CT13<br>
                        </div>
                    </div>

                </div>
                <div class="form-group row">
                    <label for="inputPassword" class="col-sm-3 col-form-label">MSSV</label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control" v-model="student.mssv"
                            v-bind:class="{ 'is-invalid': errors.mssv }" @blur="validate()" />
                        <div class="invalid-feedback" v-if="errors.mssv">{{ errors.mssv }}</div>
                        <div class="invalid-feedback" v-if="errors.mssvmot">{{ errors.mssvmot }}</div>
                    </div>

                </div>
                <div class="form-group row">
                    <label for="inputPassword" class="col-sm-3 col-form-label">KHOA</label>
                    <div class="col-sm-9">
                        <div class="radio" style="display:flex;">
                                <input style="margin-left: 50px;" type="radio" name="khoa" id="khoa" v-model="student.khoa"
                            v-bind:class="{ 'is-invalid': errors.khoa }" @blur="validate()" value="CNTT">CNTT<br>
                                <input style="margin-left: 50px;" type="radio" name="khoa" id="khoa" v-model="student.khoa"
                            v-bind:class="{ 'is-invalid': errors.khoa }" @blur="validate()" value="Thiết kế Đồ Họa">Thiết kế Đồ Họa<br>
                                <input style="margin-left: 50px;" type="radio" name="khoa" id="khoa" value="Marketing" v-model="student.khoa"
                            v-bind:class="{ 'is-invalid': errors.khoa }" @blur="validate()" >Marketing<br>
                        </div>
                    </div>

                </div>
                <div class="form-group row">
                    <label for="inputPassword" class="col-sm-3 col-form-label">Môn</label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control" v-model="student.mon"
                            v-bind:class="{ 'is-invalid': errors.mon }" @blur="validate()" />
                        <div class="invalid-feedback" v-if="errors.mon">{{ errors.mon }}</div>
                    </div>

                </div>
                <div class="form-group row">
                    <label for="inputPassword" class="col-sm-3 col-form-label">ĐIỂM DANH</label>
                    <div class="col-sm-9">
                        <div class="radio" style="display:flex;">
                                <input style="margin-left: 50px;" type="radio" name="payment" id="payment" v-model="student.diem"
                            v-bind:class="{ 'is-invalid': errors.diem }" @blur="validate()" value="Vắng">  Vắng<br>
                                <input style="margin-left: 50px;" type="radio" name="payment" id="payment" v-model="student.diem"
                            v-bind:class="{ 'is-invalid': errors.diem }" @blur="validate()" value="Không vắng">  Không vắng<br>
                                <input style="margin-left: 50px;" type="radio" name="payment" id="payment" value="Có Phép" v-model="student.diem"
                            v-bind:class="{ 'is-invalid': errors.diem }" @blur="validate()" >   Có Phép<br>
                        </div>
                    </div>

                </div>

                <div class="form-group row">
                    <label for="inputPassword" class="col-sm-3 col-form-label"></label>
                    <div class="col-sm-9 text-left">
                        <router-link to="/Student">
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
    name: "StudentForm",
    data() {
        return {
            errors: {
                name: "",
                mssv: "",
                lop: "",
                khoa: "",
                mon: "",
                diem: ""
            },
            student: {
                name: "",
                mssv: "",
                lop: "",
                khoa: "",
                mon: "",
                diem: ""
            }
        }
    },

    created() {
        let studentId = this.$route.params.id
        if (studentId) {
            this.getInforStudent(studentId);
        }
    },
    methods: {
        validate() {
            let isValid = true;
            this.errors = {
                name: "",
                lop: "",
                mssv: "",
                khoa: "",
                mon: "",
                diem: ""
            };
            if (!this.student.name) {
                this.errors.name = "Không Được Để Trống Tên";
                isValid = false;
            }
            if (!this.student.mssv) {
                this.errors.mssv = "Không Được Để Trống Mã Số Sinh Viên";
                isValid = false;
            }
            if (isNaN(!this.student.mssv)) {
                this.errors.mssvmot = "Mã Số Sinh Viên Phải Là Só";
                isValid = false;
            }
            if (!this.student.mon) {
                this.errors.mon = "Không Được Để Trống Phần Môn";
                isValid = false;
            }
            if (!this.student.price) {
                this.errors.price = "student price is required";
            } else if (!this.isNumber(this.student.price)) {
                this.errors.price = "student price is Number"
                isValid = false;
            }
            // if (!this.student.description) {
            //     this.errors.description = "Description price is required";
            //     isValid = false;
            // }
            return isValid;
        },
        isNumber(value) {
            return /^\d+$/.test(value);
        },
        save() {
            if (this.validate()) {
                if (this.student.id) {
                    this.$request.put(`http://localhost:3000/student/${this.student.id}`, this.student).then(res => {
                        if (res) {
                            this.$router.push({ name: 'student.list' }) // Thêm thành công chuyển trang 
                            return
                        } else {
                            alert("Thêm thất bại")
                        }
                    })
                    return;
                }
                this.$request.post('http://localhost:3000/student', this.student).then(res => {
                    if (res) {
                        this.$router.push({ name: 'student.list' }) // Thêm thành công chuyển trang 
                        return
                    } else {
                        alert("Thêm thất bại")
                    }
                })
            }
        },
        getInforStudent(studentId) {
            this.$request.get(`http://localhost:3000/student/${studentId}`).then(res => {
                this.student = res.data;
            })
        },
        cancel() {
            this.student.name = '';
            this.student.lop = '';
            this.student.mssv = '';
            this.student.khoa = '';
            this.student.mon = '';
            this.student.diem = '';
        }

    }
}
</script>