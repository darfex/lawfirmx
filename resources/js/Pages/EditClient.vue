<template>
  <div>
    <b-container class="bv-example-row mt-5">
        <router-link to="/" class="btn btn-info text-white">All Clients</router-link>
        <b-form class="mt-5" @submit="onSubmit">
            <b-row>
                <b-col sm="10">
                    <b-row>
                        <b-col>
                            <b-form-group label="First Name:">
                                <b-form-input
                                v-model="client.firstName"
                                type="text"
                                placeholder="Enter First Name"
                                required
                                ></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col>
                            <b-form-group label="Last Name:">
                                <b-form-input
                                v-model="client.lastName"
                                type="text"
                                placeholder="Enter Last name"
                                required
                                ></b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-row>

                    <b-row class="mt-3">
                        <b-form-group label="E-mail Address:">
                            <b-form-input
                            v-model="client.email"
                            type="email"
                            placeholder="Enter email"
                            required
                            ></b-form-input>
                        </b-form-group>
                    </b-row>

                    <b-row class="mt-3">
                        <b-form-group label="Primary Legal Counsel:">
                            <b-form-input
                            v-model="client.primaryLegalCounsel"
                            type="text"
                            placeholder="Enter Primary Legal Counsel"
                            required
                            ></b-form-input>
                        </b-form-group>
                    </b-row>
                </b-col>
                <b-col>
                    <div>
                        <b-img v-if="imgUrl" :src="imgUrl" v-bind="imgProps" thumbnail fluid></b-img>
                    </div>
                </b-col>
            </b-row>

            <b-row class="mt-3">
                <b-col>
                    <b-form-group label="Date of Birth:">
                        <b-form-datepicker v-model="client.dateOfBirth" placeholder="Choose a date" class="mb-2"></b-form-datepicker>
                    </b-form-group>
                </b-col>
                <b-col>
                    <b-form-group label="Profile Image:">
                        <b-form-file
                        v-model="client.profileImage"
                        :state="Boolean(client.profileImage)"
                        @change="onFileChange"
                        placeholder="Select profile image"
                        ></b-form-file>
                    </b-form-group>
                </b-col>
            </b-row>

            <b-row class="mt-3">
                <b-form-group label="Case Details:">
                    <b-form-textarea
                    id="textarea"
                    v-model="client.caseDetails"
                    placeholder="Enter case details..."
                    rows="7"
                    ></b-form-textarea>
                </b-form-group>
            </b-row>

            <b-button class="mt-3 text-white" type="submit" variant="info">Update Profile</b-button>
        </b-form>
    </b-container>
  </div>
</template>

<script>
    export default {
        name: 'add-client',
        data() {
        return {
            client: {},
            imgProps: {width: 180, height: 130, class: 'mt-3'},
            imgUrl: null
        }
        },
        created() {
            this.fetchClient()
        },
        methods: {
            onSubmit(event) {
                event.preventDefault()
                this.axios
                    .put(`/api/client/${this.$route.params.id}`, this.client)
                    .then((response) => {
                        if (response.data.status) {
                            this.makeToast("Success", response.data.message, 'success')
                        } else {
                            this.makeToast("Success", response.data.message, 'danger')
                        }
                        // this.$router.push({name: 'home'});
                    })
                    .catch((err) => {
                        if (err.response && err.response.status == 422) {

                        }
                    });
            },
            fetchClient() {
                this.axios
                    .get(`/api/client/${this.$route.params.id}`)
                    .then((response) => {
                        this.client = response.data.data.client
                    })
                    .catch((err) => {
                        console.error(err)
                    });
            },
            onFileChange(e) {
                const file = e.target.files[0];
                this.imgUrl = URL.createObjectURL(file);
            },
            makeToast(title, content, variant) {
                this.$bvToast.toast(content, {
                title: title,
                variant: variant,
                solid: true
                })
            }
        }
    }
</script>
