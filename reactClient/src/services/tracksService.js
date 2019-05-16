import axios from 'axios';
import { API_URL, API_KEY } from '../constants/urls'

export const tracksService = {
    getTracksList,
    getTrackListByAlbumId,
};

function getTracksList() {
    return axios({
        url: `${API_URL}tracks`,
        method:'get',
        headers: {
          'Api-Key': API_KEY
        }
      })
      .then(res => {
        return res.data;
      });
}

function getTrackListByAlbumId(album_id) {
    return axios({
        url:`${API_URL}tracks_by_album_id/?album_id=${album_id}`,
        method: 'get',
        headers: {
            'Api-Key': API_KEY
        }
     })
     .then(res => {
        return res.data;    
    });
}