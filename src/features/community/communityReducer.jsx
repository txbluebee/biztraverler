import { createReducer } from '../../app/common/util/reducerUtil';

const initialState = {
  peopleData: [
    {
      id: 1,
      fullName: 'Chloe Parker',
      currentCity: 'Mexico',
      photoURL: 'https://randomuser.me/api/portraits/women/88.jpg',
      frequentTravelCities: ['Seattle', 'Portland'],
    },
    {
      id: 2,
      fullName: 'Lily Howard',
      currentCity: 'Mexico',
      photoURL: 'https://randomuser.me/api/portraits/women/7.jpg',
      frequentTravelCities: ['Seattle', 'Portland', 'Houston'],
    },
    {
      id: 3,
      fullName: 'Max Fan',
      currentCity: 'Mexico',
      photoURL: 'https://randomuser.me/api/portraits/women/80.jpg',
      frequentTravelCities: ['Dallas', 'Austin'],
    },
    {
      id: 4,
      fullName: 'Jeff Brown',
      currentCity: 'Seattle',
      photoURL: 'https://randomuser.me/api/portraits/men/1.jpg',
      frequentTravelCities: ['New York', 'Dallas', 'Mexico'],
    },
    {
      id: 5,
      fullName: 'Charlie Brown',
      currentCity: 'San Francisco',
      photoURL: 'https://randomuser.me/api/portraits/men/2.jpg',
      frequentTravelCities: ['New York', 'Dallas', 'Mexico'],
    },
    {
      id: 6,
      fullName: 'Brat Pitt',
      currentCity: 'San Francisco',
      photoURL: 'https://randomuser.me/api/portraits/men/5.jpg',
      frequentTravelCities: ['Detroit', 'Chicago', 'Mexico'],
    },
    {
      id: 7,
      fullName: 'Nike Evans',
      currentCity: 'San Francisco',
      photoURL: 'https://randomuser.me/api/portraits/men/10.jpg',
      frequentTravelCities: ['Detroit', 'Chicago', 'Mexico'],
    },
  ]
}


export default createReducer(initialState, {

})