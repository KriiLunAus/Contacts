
export const selectContacts = (state) => state.contacts;

export const selectItems = (state) => state.contacts.items;

export const selectModalIsOpen = (state) => state.contacts.modalIsOpen;

export const selectIdForDelete = (state) => state.contacts.dataForDelete.idForDelete;

export const selectNameForDelete = (state) => state.contacts.dataForDelete.nameForDelete;


