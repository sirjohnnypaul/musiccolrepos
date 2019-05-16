import axios from 'axios';
import { API_URL } from '../constants/urls'

export const bandsService = {
    getBandList,
    getBand,
};

function getBandList() {
    return axios({
        url: `${API_URL}bands`,
        method: 'get',
      })
      .then(res => {
        return res.data;
      });
}

function getBand(id) {
    return axios({
        url: `${API_URL}bands/${id}`,
        method: 'get',
     })
     .then(res => {
        return res.data
     });
}