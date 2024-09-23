import axios from 'axios';

import {Platform} from 'react-native';

const axiosInstance = axios.create({
  baseURL:
    Platform.OS === 'android'
      ? 'http://10.0.2.2:3030'
      : 'http://localhost:3030',

  withCredentials: true,
});

export default axiosInstance;

// 안드로이드에서는 localhost가 잘 동작하지 않으므로, 10.0.2.2를 사용
// Platform.OS를 이용해서 기기의 OS를 판단하여 baseURL을 바꾸기
