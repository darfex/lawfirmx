<template>
  <div>
    <b-container class="bv-example-row mt-5">
        <router-link to="/client/add" class="btn btn-info text-white mb-4">Profile New Client</router-link>
        <table class="table border">
          <thead>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>&nbsp;</th>
          </thead>
          <tbody v-for="client in clients" :key="client.id">
            <td>{{ client.firstName }}</td>
            <td>{{ client.lastName }}</td>
            <td>{{ client.email }}</td>
            <td><b-link class="btn btn-sm btn-info" @click="openPage(client.id)">Edit</b-link></td>
          </tbody>
        </table>
    </b-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        perPage: 10,
        currentPage: 1,
      }
    },
    created() {
        this.clients = this.fetchClients()
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
        },
        openPage(clientId) {
          this.$router.push(`/client/edit/${clientId}`)
        }
    },
  }
</script>