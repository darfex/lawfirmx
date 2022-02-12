<template>
  <div>
    <b-container class="bv-example-row mt-5">
        <router-link to="/client/add" class="btn btn-info text-white">Profile New Client</router-link>
        <b-table class="mt-5" striped hover :items="clients" :fields="fields">
          <b-link href="#foo"></b-link>
        </b-table>
    </b-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        clients: [],
        fields: ['firstName', 'lastName', 'email'],
        perPage: 10,
        currentPage: 1,
      }
    },
    created() {
        this.fetchClients()
    },
    methods: {
        async fetchClients() {
            await this.axios
                .get(`api/client`)
                .then(res => {
                    this.clients = res.data.data.clients
                })
                .catch(err => {

                })
        }
    },
  }
</script>
