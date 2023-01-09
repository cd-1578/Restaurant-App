import axios from 'axios';

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer _zLAowEqPbx6SI50Nv1qTbabAxujVmNdZPkquTEdej1ES6xXsbqyeNhzfNBhkAcjN7gnqbSZrwIRIEfJGJmGkHobAbn2vliSIwjlZ4oWXFo1rg4f3NDzRazkGo9yY3Yx'
    }
})
