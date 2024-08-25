declare module '*.css' {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames
    export = classNames
}

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module "*.svg" {
    import React from "react";
    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}

declare const __PLATFORM__: 'mobile' | 'desktop'

type OnClick = React.MouseEvent<HTMLButtonElement | HTMLDivElement, MouseEvent>
type OnChange = React.ChangeEvent<HTMLInputElement>
type OnKeyDown = React.KeyboardEventHandler<HTMLElement>
type OnBlur = React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
