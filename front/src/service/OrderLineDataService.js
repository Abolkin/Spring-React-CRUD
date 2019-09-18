import axios from 'axios'

const API_URL = 'http://localhost:8080'

class OrderLineDataService {

    retrieveAllOrderLines() {
        //console.log('executed service')
        return axios.get(`${API_URL}/orderlines`);
    }

    retrieveOrderLine(id) {
        //console.log('executed service')
        return axios.get(`${API_URL}/orderlines/${id}`);
    }

    deleteOrderLine(id) {
        //console.log('executed service')
        return axios.delete(`${API_URL}/orderlines/${id}`);
    }

    updateOrderLine(orderline) {
        //console.log('executed service')
        return axios.put(`${API_URL}/orderlines/`, orderline);
    }

    createOrderLine(orderline) {
        //console.log('executed service')
        return axios.post(`${API_URL}/orderlines/`, orderline);
    }
}

export default new OrderLineDataService()