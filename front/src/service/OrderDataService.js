import axios from 'axios'

const API_URL = 'http://localhost:8080'

class OrderDataService {

    retrieveAllOrders() {
        //console.log('executed service')
        return axios.get(`${API_URL}/orders`);
    }

    retrieveOrder(id) {
        //console.log('executed service')
        return axios.get(`${API_URL}/orders/${id}`);
    }

    deleteOrder(id) {
        //console.log('executed service')
        return axios.delete(`${API_URL}/orders/${id}`);
    }

    updateOrder(order) {
        //console.log('executed service')
        return axios.put(`${API_URL}/orders/`, order);
    }

    createOrder(order) {
        //console.log('executed service')
        return axios.post(`${API_URL}/orders/`, order);
    }
}

export default new OrderDataService()