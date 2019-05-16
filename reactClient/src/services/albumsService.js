import axios from 'axios';
import { API_URL, API_KEY } from '../constants/urls'

export const albumsService = {
    getAlbumList,
    getAlbum,
    getAlbumListByBandId,
};

function getAlbumList() {
    return axios({
        url:`${API_URL}albums`,
        method:'get',
        headers: {
          'Api-Key': API_KEY
        }
      })
      .then(res => {
        return res.data;
      });
}

function getAlbum(id) {
    return axios({
        url:`${API_URL}albums/${id}`,
        method: 'get',
        headers: {
            'Api-Key': API_KEY
        }
     })
     .then(res => {
        return res.data;
    });
}

function getAlbumListByBandId(band_id) {
    return axios({
        url: `${API_URL}albums_by_band_id/?band_id=${band_id}`,
        method: 'get',
        headers: {
            'Api-Key': API_KEY
        }
     })
     .then(res => {
         return res.data;
     });
}