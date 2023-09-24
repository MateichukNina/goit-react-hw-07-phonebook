import axios from 'axios';

const BASE_URL = 'https://6509f777f6553137159c4e33.mockapi.io'; 

export const fetchContacts = async () => {
  const response = await axios.get(`${BASE_URL}/contacts/contacts`);

  return response.data;
};

 export const addContact = async (contact) => {
  const response = await axios.post(`${BASE_URL}/contacts/contacts`, contact);
   return response.data;
 };


 export const deleteContact = async id => {
  const response = await axios.delete(`${BASE_URL}/contacts/contacts/${id}`, id);
  return response.data;
};