/**
 * An interface to describe common layout properties.
 */
export interface LayoutParams{

    /**
     * A property to be bound to css height modifier.
     */
    height: string;

    /**
     * A property to be bound to css width modifier.
     */
    width: string;

    /**
     * A property to be bound to css max-height modifier.
     */
    maxHeight: string;

    /**
     * A property to be bound to css max-width modifier.
     */
    maxWidth: string;

    /**
     * A property to be bound to css min-height modifier.
     */
    minHeight: string;

    /**
     * A property to be bound to css min-width modifier.
     */
    minWidth: string;

    /**
     * A property to be bound to css padding modifier.
     */
    padding: string;

    /**
     * A property to be bound to css margin modifier.
     */
    margin: string

    /**
     * A property to be bound to css overflow-x modifier.
     */
    overflowX: string;

    /**
     * A property to be bound to css overflow-y modifier.
     */
    overflowY: string;

}