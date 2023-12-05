import Axios from 'axios';
import myAPIKey from './config';

//------API Calls--------//

const APIkey = myAPIKey;
const mockPIUrl = `https://${APIkey}.mockapi.io/books`;

const getAllBooks = async () => {
  try {
    const request = Axios.get(`${mockPIUrl}`);
    const response = await request;
    return response.data;
  } catch (error) {
    alert('Error fetching books: ', error);
  }
};

const addBook = async (newBook) => {
  console.log(newBook);
  try {
    const request = Axios.post(`${mockPIUrl}`, newBook);
    const response = await request;
    return response.data;
  } catch (error) {
    alert('Error adding book: ', error);
  }
};

const deleteBook = async (id) => {
  console.log('We are entering delete API call');
  try {
    const request = Axios.delete(`${mockPIUrl}/${id}`);
    const response = await request;
    return response.data;
  } catch (error) {
    alert('Error deleting book: ', error);
  }
};

const apiModule = { getAllBooks, addBook, deleteBook };
export default apiModule;
