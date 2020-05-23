import * as actionTypes from './actionTypes';
import axios from 'axios';

export function getData() {
  return async function(dispatch) {
    await axios({
      method: 'GET',
      url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/sets/Basic',
      headers: {
        'content-type': 'application/octet-stream',
        'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
        'x-rapidapi-key': '0240d0bf4emsha49602d35d3f22ap16b8fcjsnc44da77b8401',
        useQueryString: true,
      },
    })
      .then(data => dispatch(getDatas(data)))
      .then(data => dispatch(mechanics(data)))
      .catch(error => {
        console.log(error);
      });
  };
}

export function getDatas(data) {
  return {type: actionTypes.GET_DATA, payload: data.data};
}

export function mechanics(allData) {
  let mechanicsArray = [];
  allData.payload.map(data =>
    data.mechanics
      ? data.mechanics.map(item => mechanicsArray.push(item.name))
      : null,
  );
  mechanicsArray = mechanicsArray.filter((item, pos) => {
    return mechanicsArray.indexOf(item) === pos;
  });

  return {type: actionTypes.MECHANICS, payload: mechanicsArray};
}

export function selectedData(data) {
  return {type: actionTypes.SELECTED_DATA, payload: data};
}
