import {useState} from 'react';


export default function useModalState(initialState = false) {
  const [isOpen, setIsOpen] = useState(initialState);
  return [isOpen, () => setIsOpen(true), () => setIsOpen(false)];
}