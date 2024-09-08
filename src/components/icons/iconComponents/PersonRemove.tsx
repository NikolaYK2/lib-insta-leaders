import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgPersonRemove = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><g fill="currentColor" clipPath="url(#person-remove_svg__a)"><path d="M21 6h-4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2M10 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M16 21a1 1 0 0 0 1-1 7 7 0 1 0-14 0 1 1 0 0 0 1 1" /></g><defs><clipPath id="person-remove_svg__a"><path fill="currentColor" d="M0 0h24v24H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPersonRemove);
export default ForwardRef;