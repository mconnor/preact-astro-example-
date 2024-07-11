
import { signal } from '@preact/signals';

export function createAppState() {
    const modalIsOpen = signal(false);
    const count = signal(0)

  
    return { count, modalIsOpen }
  }