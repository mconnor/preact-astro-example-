import type { ComponentChildren } from "preact";
import type { Signal } from "@preact/signals";
// import { lazy, Suspense } from "preact/compat";
// import './Counter.css';

// const Message = lazy(async () => import("./Message"));
// const Fallback = () => <p>Loading...</p>;

type Props = {
  children: ComponentChildren;
  isOpen: Signal<boolean>;
};

export default function ModalButton({ children, isOpen }: Props) {
  const onClick = () => (isOpen.value = !isOpen.value);

  return (
    <>
      <button onClick={onClick}>{children}</button>
    </>
  );
}
