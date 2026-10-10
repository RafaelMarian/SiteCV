import { createContext, useContext } from 'react';

export const LenisContext = createContext(null);

/** Access the Lenis instance (null when reduced motion / not ready). */
export const useLenis = () => useContext(LenisContext);
