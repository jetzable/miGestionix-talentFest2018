
import Vue from "vue";
import Vuex from "vuex";


Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    signinUser: ({ commit }, payload) => {
      console.log(payload);
    },
    getList: ({ commit }) => {
      Axios.get("https://api-test.gestionix.com/api/v3/clients/table", {
        headers: {
          Company: 17,
          Authorization:
            "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjFCRTVGOTQ2MTI0NTMyMkYxOTE4RTZERDVBREIzOTI4REFBMjg1RDciLCJ0eXAiOiJKV1QiLCJ4NXQiOiJHLVg1UmhKRk1pOFpHT2JkV3RzNUtOcWloZGMifQ.eyJuYmYiOjE1NDM4ODEyNzAsImV4cCI6MTU0MzkyMTI3MCwiaXNzIjoiaHR0cHM6Ly9nZXN0aW9uaXgtaWRlbnRpdHlzZXJ2aWNlLW9hdXRoMi1hcGktdGVzdC5henVyZXdlYnNpdGVzLm5ldCIsImF1ZCI6WyJodHRwczovL2dlc3Rpb25peC1pZGVudGl0eXNlcnZpY2Utb2F1dGgyLWFwaS10ZXN0LmF6dXJld2Vic2l0ZXMubmV0L3Jlc291cmNlcyIsImdlc3Rpb25peF9hcGkiXSwiY2xpZW50X2lkIjoiR2VzdGlvbml4LUFwaSIsInN1YiI6IjZkYzc1NTRkLTU0ZmYtNGRkMC04Njg0LTQ3NTRlNjdiN2IyOSIsImF1dGhfdGltZSI6MTU0Mzg4MTI3MCwiaWRwIjoibG9jYWwiLCJuYW1lIjpbIkFsZnJlZG8iLCJBbGZyZWRvIiwiQWxmcmVkbyIsIkFsZnJlZG8iLCJBbGZyZWRvIiwiQWxmcmVkbyIsIkFsZnJlZG8iLCJBbGZyZWRvIiwiQWxmcmVkbyIsIkFsZnJlZG8iLCJBbGZyZWRvIiwiQWxmcmVkbyIsIkFsZnJlZG8iLCJBbGZyZWRvIiwiQWxmcmVkbyIsIkFsZnJlZG8iLCJBbGZyZWRvIiwiQWxmcmVkbyIsIkFsZnJlZG8iLCJBbGZyZWRvIiwiQWxmcmVkbyIsImF4ZWwiLCJheGVsIiwia2xrbGtsaWtsa2wiLCJwcm92ZWVkb3IiXSwiZW1haWwiOlsiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIl0sInNjb3BlIjpbImdlc3Rpb25peF9hcGkiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHdkIl19.HLVMy9GsyHzt6VlgFs6Ra0G9XXj_oteimafStW0Gum3NMSuKFXeBCLtUqf0uwf8-SOwb4twCk4WHpet2CPrRY3rB4ZgXjHrOR2MLe4i96bDM_HFuXgvweOiy4Fimq2v6ndi4RC27qoBovWNH6bmcWUBrIZMQxbKp_N5sTibU5Er8rr9snJVKPX4xd59fJOWpSDmvruWp3ybKEiGI14lMMRL1zWlVkNoHcdUUsV6tiIPLJPdBBNFdSTi41GDyuCEfKd5Le8GBWO4puUNWBx3BfjQ7YLSAUObT6jCfu2tZcGgK7BMhbKyp_L2IZnw7ucfskVur-UNpXvJgZlncZG19V-RzplyEP2Y4fQsXnijclqskAVE5rnDww7MWSHlaImL-r_u2-tWu8sqWJm9zYHTOL9BdTU_Jg-6hiAo0olH8Jn_Mp0Nuq2-CJrkaSwZ5RV2KYi_7stsYIncgGJrWNT8_sjQrGcufpTcLKo4nrmOmNmoR8s1abxGph8EQbar_m_CD6xqQhMwhbaGRAYKJsoaFXeHK9yfivFAK3IDqOoYCsFRktMgYEd6oF_5KYQZtjnoOeB1NjVIyiWov5JxS9oKjnAI5GP_ntFNb7I3tRq_cdgNquoXDBZjk_s4lmV8Dul6fN7JpTYNwIdH48o7tAKcMpFqS7q-fOmYWRWTQa_d6KhA"
        }
      })
        .then(resp => console.log(resp.data))
        .catch(err => console.log(err));
    }
  }
});

