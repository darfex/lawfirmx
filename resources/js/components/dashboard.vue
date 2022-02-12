<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="flex flex-col mx-16">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Firstname</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lastname</th>
                <th scope="col" class="px-x py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>

                <th scope="col" class="relative px-6 py-3">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="client in clients" :key="client.id">
                <td class="px-6 py-4 whitespace-nowrap w-1/3">
                  <div class="text-sm font-medium text-gray-900">
                  {{ client.firstname }}
                  </div>
                </td>
               <td class="px-6 py-4 whitespace-nowrap w-1/3">
                  <div class="text-sm font-medium text-gray-900">
                  {{ client.lastname }}
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap w-1/3">
                  <div class="text-sm font-medium text-gray-900">
                  {{ client.email }}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {ref, onMounted} from 'vue';
  import axios from 'axios';

  export default {
    setup() {
      const clients = ref([]);

      const getClient = async() =>{
        let res = await axios.get('api/client');
        clients.value = res.data;
      }

      onMounted(getClient());

      console.log(clients);

      return {
        clients,
      }
    }
  }
  // export default{
  //   created(){
  //     this.loadData();
  //   },
  //   methods: {
  //     loadData() {
  //       let url = this.url + '/api/client/8';
  //       axios.get(url).then(response => {
  //         this.clients = response.data  
  //       });
  //     },
  //     mounted() {
  //       console.log('Mounted');
  //     },
  //     data(){
  //       return {
  //         url:document.head.querySelector('meta[name="url"]').content,
  //         contacts: []
  //       }
  //     }
  //   }
  // }
</script>