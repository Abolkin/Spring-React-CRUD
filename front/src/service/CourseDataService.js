import axios from 'axios'

const API_URL = 'http://localhost:8080'

class CourseDataService {

    retrieveAllCourses() {
        //console.log('executed service')
        return axios.get(`${API_URL}/goods`);
    }

    retrieveCourse(id) {
        //console.log('executed service')
        return axios.get(`${API_URL}/goods/${id}`);
    }

    deleteCourse(id) {
        //console.log('executed service')
        return axios.delete(`${API_URL}/goods/${id}`);
    }

    updateCourse(id, goods) {
        //console.log('executed service')
        return axios.put(`${API_URL}/goods/${id}`, goods);
    }

    createCourse(goods) {
        //console.log('executed service')
        return axios.post(`${API_URL}/goods/`, goods);
    }
}

export default new CourseDataService()