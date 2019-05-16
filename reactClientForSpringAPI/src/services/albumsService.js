import axios from 'axios';
import { API_URL } from '../constants/urls'

export const albumsService = {
    getAlbumList,
    getAlbum,
    getAlbumListByBandId,
};

function getAlbumList() {
    return axios({
        url:`${API_URL}albums`,
        method:'get',
      })
      .then(res => {
        return res.data;
      });
}

function getAlbum(id) {
    return axios({
        url:`${API_URL}albums/${id}`,
        method: 'get',
     })
     .then(res => {
        return res.data;
    });
}

function getAlbumListByBandId(band_id) {
    return axios({
        url: `${API_URL}bands/${band_id}/albums`,
        method: 'get',
     })
     .then(res => {
         return res.data;
     });
}