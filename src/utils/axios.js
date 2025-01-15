import origin from "axios";
import {
  BASEURL,
  DATEFILTER,
  GETALLSUBYOJNA,
  GETALLTALUKA,
  GETCHARTDATA,
  GETFORMFIELDSWITHTALUKA,
  GETVISITRECORDS,
  ISVALIDUSER,
  LOGIN,
  TABLEINPUTVALUES,
  VISITRECORD,
} from "./api";

// Create a base axios instance
export const axios = origin.create({
  baseURL: BASEURL,
});

// Add a request interceptor to attach the token
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add a response interceptor to handle errors
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('accessToken');
      window.location.href = '/';
    }
    return Promise.reject(error);
  }
);

// Define API methods
export const userLogin = async (formValues) => {
  try {
    const res = await axios.post(`${LOGIN}`, formValues, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};


export const validUser = async (formValues) => {
  try {
    const res = await axios.post(`${ISVALIDUSER}`, formValues, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getAllTaluka = async () => {
  try {
    const res = await axios.get(`${GETALLTALUKA}`);
    return res;
  } catch (error) {
    throw error;
  }
};

export const getAllSubyojna = async () => {
    try {
      const res = await axios.get(`${GETALLSUBYOJNA}`);
      return res;
    } catch (error) {
      throw error;
    }
  };


  export const getFormFieldsWithTaluka = async (id, subyojnaId) => {
    try {
      const res = await axios.get(`${GETFORMFIELDSWITHTALUKA}/${id}/${subyojnaId}`);
      return res;
    } catch (error) {
      throw error;
    }
  };


  export const getFormFields = async (subyojnaId) => {
    try {
      const res = await axios.get(`${GETFORMFIELDSWITHTALUKA}/${subyojnaId}`);
      return res;
    } catch (error) {
      throw error;
    }
  };


  export const getVisitRecord = async (talukaId) => {
    try {
      const res = await axios.get(`${GETVISITRECORDS}/${talukaId}`);
      return res;
    } catch (error) {
      throw error;
    }
  };


  export const getChartData = async () => {
    try {
      const res = await axios.get(`${GETCHARTDATA}`);
      return res;
    } catch (error) {
      throw error;
    }
  };

  export const dateFilter = async (formValues) => {
    try {
      const res = await axios.post(`${DATEFILTER}`, formValues, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return res.data;
    } catch (error) {
      throw error;
    }
  };



  export const visitRecord = async (formValues) => {
    try {
      const res = await axios.post(`${VISITRECORD}`, formValues, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return res.data;
    } catch (error) {
      throw error;
    }
  };


  export const tableInputValues = async (formValues) => {
    try {
      const res = await axios.post(`${TABLEINPUTVALUES}`, formValues, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return res.data;
    } catch (error) {
      throw error;
    }
  };