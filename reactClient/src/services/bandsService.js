import axios from 'axios';
import { API_URL, API_KEY } from '../constants/urls'

export const bandsService = {
    getBandList,
    getBand,
};

function getBandList() {
    return axios({
        url: `${API_URL}bands`,
        method: 'get',
        headers: {
          'Api-Key': API_KEY
        }
      })
      .then(res => {
        return res.data;
      });
}

function getBand(id) {
    return axios({
        url: `${API_URL}bands/${id}`,
        method: 'get',
        headers: {
            'Api-Key': API_KEY,
        }
     })
     .then(res => {
        return res.data
     });
}