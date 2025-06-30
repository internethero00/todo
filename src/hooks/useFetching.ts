import {useState} from "react";

export const useFetching = (
    callback: () => Promise<void>
): [() => Promise<void>, boolean, string] => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const fetching = async () => {
        try {
            setIsLoading(true);
            await callback();
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