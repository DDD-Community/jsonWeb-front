import React from 'react';
import ReactDOM from 'react-dom';

type PortalPropsType = {
  children: React.ReactNode;
};

const ModalPortal = ({ children }: PortalPropsType) => {
  const element = document.getElementById('modalRoot') as HTMLElement;
  return ReactDOM.createPortal(children, element);
};

export default ModalPortal;
