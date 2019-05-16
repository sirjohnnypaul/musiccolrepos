import axios from 'axios';
import { API_URL } from '../constants/urls'

export const tracksService = {
    getTracksList,
};

function getTracksList() {
    return axios({
        url: `${API_URL}tracks`,
        method:'get',
      })
      .then(res => {
        return res.data;
      });
}