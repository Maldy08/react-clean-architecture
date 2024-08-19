
export interface Result<T> {
    messages:  any[];
    succeeded: boolean;
    data: T[] | T;
    exception: null;
    code:      number;
}