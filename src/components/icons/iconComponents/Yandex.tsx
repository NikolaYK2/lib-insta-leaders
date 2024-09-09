import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgYandex = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 36 36" ref={ref} {...props}><g clipPath="url(#yandex_svg__a)"><path stroke="#fff" strokeWidth={2} d="M18 35c9.389 0 17-7.611 17-17S27.389 1 18 1 1 8.611 1 18s7.611 17 17 17Z" /><path fill="currentColor" d="m9.638 7.131-3.182 3.182 9.3 9.3V30.67h4.5V19.6l9.289-9.288-3.182-3.182L18 15.494z" /></g><defs><clipPath id="yandex_svg__a"><path fill="currentColor" d="M0 0h36v36H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgYandex);
export default ForwardRef;