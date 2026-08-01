'use client';

import { createContext, useContext, useState } from 'react';

const BookingModalContext = createContext({
  isOpen: false,
  openModal: (initialData) => {},
  closeModal: () => {},
  modalData: {}
});

export function BookingModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const openModal = (data = {}) => {
    setModalData(data);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <BookingModalContext.Provider value={{ isOpen, openModal, closeModal, modalData }}>
      {children}
    </BookingModalContext.Provider>
  );
}

export function useBookingModal() {
  return useContext(BookingModalContext);
}
