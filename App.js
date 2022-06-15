import React, {useEffect} from 'react';
import axios from 'axios';
import MyStack from './src/tab/Stack';


export default function App(props) {

  useEffect(() => {
    axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';
  }, []);

  return (
    <MyStack/>
  );
};



