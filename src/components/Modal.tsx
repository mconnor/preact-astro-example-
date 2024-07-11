import type { ComponentChildren } from "preact";
import type { Signal } from "@preact/signals";
import { lazy, Suspense } from "preact/compat";

const Message = lazy(async () => import("./Message"));
const Fallback = () => <p>Loading...</p>;

import "./Modal.css";

type Props = {
  children: ComponentChildren;
  isOpen: Signal<boolean>;
};

const Modal = ({ children, isOpen }: Props) => {
  return (
    <>
      <div class={isOpen ? "modal" : "visually-hidden"}>
        <div class="container">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
            distinctio, unde molestiae vero tempora officiis at? Consequatur
            quam omnis blanditiis culpa, quia accusamus, nostrum sunt modi
            laboriosam deserunt tempore error.
          </p>
          <button>close</button>
          <Suspense fallback={Fallback}>
            <Message>{children}</Message>
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default Modal;
