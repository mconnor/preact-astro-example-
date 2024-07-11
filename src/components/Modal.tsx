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
  return (
    <>
      <div class={isOpen.value ? 'modal' : 'visually-hidden'}>
        <div class="container">
          <ModalButton isOpen={isOpen}>close Modal</ModalButton>

          <Suspense fallback={Fallback}>
            <Message>{children}</Message>
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default Modal;
