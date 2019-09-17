import axios from 'axios'

const API_URL = 'http://localhost:8080'

class GoodsDataService {

    retrieveAllGoods() {
        return axios.get(`${API_URL}/goods`);
    }

    retrieveGoods(id) {
        return axios.get(`${API_URL}/goods/${id}`);
    }

    deleteGoods(id) {
        return axios.delete(`${API_URL}/goods/${id}`);
    }

    updateGoods(goods) {
        return axios.put(`${API_URL}/goods/`, goods);
    }

    createGoods(goods) {
        return axios.post(`${API_URL}/goods/`, goods);
    }
}

export default new GoodsDataService()