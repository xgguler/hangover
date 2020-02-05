import axios from 'axios';

import {
  FAN_ENGAGEMENT_API_AUTH_URL,
  FAN_ENGAGEMENT_API_REQUEST_TIMEOUT,
} from 'react-native-dotenv';

// fan engagement authentication api axios object
const fanEngagementAuthAPI = axios.create({
  baseURL: FAN_ENGAGEMENT_API_AUTH_URL,
  timeout: FAN_ENGAGEMENT_API_REQUEST_TIMEOUT,
});

export default fanEngagementAuthAPI;
