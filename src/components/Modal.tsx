import './Modal.css';

import type { ComponentChildren } from 'preact';
import type { Signal } from '@preact/signals';
import { lazy, Suspense } from 'preact/compat';
import ModalButton from '@/components/ModalButton';
const Message = lazy(async () => import('./Message'));
const Fallback = () => <p>Loading...</p>;

interface Props {
  children: ComponentChildren;
  isOpen: Signal<boolean>;
}

const Modal = ({ children, isOpen }: Props) => {
  // const dump = (event) => {
  //   if (event.key === "Escape") {
  //     event.target.setAttribute("aria-hidden", "true");
  //   }
  // };

  return (
    <div>
      <div
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
        aria-hidden={isOpen ? 'true' : 'false'}
        class={isOpen.value ? 'modal' : 'visually-hidden'}
      >
        <div class="container">
          <ModalButton isOpen={isOpen}>close Modal</ModalButton>
          <h3>isOpen {isOpen.value}</h3>

          <Suspense fallback={Fallback}>
            <Message>{children}</Message>
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Modal;
