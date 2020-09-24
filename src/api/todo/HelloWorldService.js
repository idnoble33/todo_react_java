import axios from 'axios';
class HelloWorldService {
   executeHelloWorldService() {
      return axios.get('http://localhost:8080/hello-world');
       //console.log('execute service')
   }

   executeHelloWorldBeanService() {
      return axios.get('http://localhost:8080/hello-world-bean');
       //console.log('execute service')
   }

   executeHelloWorldPathVariableService(name) {
      return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`);
       //console.log('execute service')
   }
}

export default new HelloWorldService()