import { createSelector } from "@reduxjs/toolkit";


export const selectContacts = state => state.contacts.items;
export const selectFilters = state => state.filter;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilters],
  (contacts, filters) => {
    console.log()
    return contacts.filter(contact => contact.name.toLowerCase().includes(filters.toLowerCase()));
  })

// export const selectVisibleContacts = createSelector(
//   [selectContacts, selectFilters], (contacts, filters) => {
//     return contacts.filter(({ name }) =>
//       name.toLowerCase().includes(filters.toLowerCase())
//     );
//   })