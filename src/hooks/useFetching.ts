import {useState} from "react";

export const useFetching = (
    callback: (id? : number) => Promise<void>
): [() => Promise<void>, boolean, string] => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const fetching = async (id? : number) => {
        try {
            setIsLoading(true);
            await callback(id);
        } catch (error: unknown) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError('Unknown error');
            }
        } finally {
            setIsLoading(false);
        }
    };

    return [fetching, isLoading, error];
};