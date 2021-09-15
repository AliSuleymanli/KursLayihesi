type HTMLElementEventType<T extends HTMLElement> = Event & {
    target: T;
    currentTarget: T;
}

export type { HTMLElementEventType }