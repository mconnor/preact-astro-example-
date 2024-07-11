import type { ComponentChildren } from 'preact';
import type { Signal } from '@preact/signals';

interface Props {
  children: ComponentChildren;
  isOpen: Signal<boolean>;
}

export default function ModalButton({ children, isOpen }: Props) {
  const onClick = () => {
    isOpen.value = !isOpen.value;
  };

  return (
    <>
      <button onClick={onClick}>{children}</button>
    </>
  );
}
