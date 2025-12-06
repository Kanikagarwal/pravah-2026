import { useState, useEffect } from 'react';

export const useLoader = (steps = 7, interval = 300) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const stepIncrement = 100 / steps;
        const intervalId = setInterval(() => {
            setProgress((prev) => {
                const nextValue = prev + stepIncrement;
                if (nextValue >= 100) {
                    clearInterval(intervalId);
                    return 100;
                }
                return nextValue;
            });
        }, interval);

        return () => clearInterval(intervalId);
    }, [steps, interval]);

    return progress;
};
