// import { createSelector } from "@reduxjs/toolkit";


export const selectContacts = state => state.contacts.items;
export const selectFilters = state => state.filter;

// export const selectVisibleContacts = createSelector(
//   [selectContacts, selectFilters],
//   (contacts, filters) => {
//     const selectContacts = contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filters.toLowerCase())
//     );
//     console.log(selectContacts)
//     return selectContacts;
//   }
// );


