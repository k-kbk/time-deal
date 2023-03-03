import ReactDom from 'react-dom';

interface ModalPortalProps {
  children: React.ReactNode;
}

export default function ModalPortal({ children }: ModalPortalProps) {
  const modalRoot = document.getElementById('modal-root');
  return ReactDom.createPortal(children, modalRoot!);
}
