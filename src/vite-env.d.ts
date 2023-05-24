/// <reference types="vite/client" />

declare module "reshake" {
    export const Shake: React.FunctionComponent<
        {
            children?: React.ReactNode;
            h?: number;
            v?: number;
            r?: number;
            dur?: number;
        }
    >;
}