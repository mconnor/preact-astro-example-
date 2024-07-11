import type { ComponentChildren } from 'preact';
import type { Signal } from '@preact/signals';
import { lazy, Suspense } from 'preact/compat';
import ModalButton from '@/components/ModalButton';
const Message = lazy(async () => import('./Message'));
const Fallback = () => <p>Loading...</p>;

import './Modal.css';

type Props = {
  children: ComponentChildren;
  isOpen: Signal<boolean>;
};

const Modal = ({ children, isOpen }: Props) => {
  return (
    <>
      <div class={isOpen.valueOf() ? 'modal' : 'visually-hidden'}>
        <div class="container">
          <ModalButton isOpen={isOpen}>x</ModalButton>

          <Suspense fallback={Fallback}>
            <Message>{children}</Message>
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default Modal;
