import {ComponentPropsWithoutRef, ElementRef, forwardRef, ReactNode, MouseEvent} from "react";
import s from "./typography.module.scss";
import clsx from "clsx";
import {Slot} from "@radix-ui/react-slot";
import {TypographyVariant} from "./typography.enum.ts";

type Props = {
    asChild?: boolean;
    variant?: TypographyVariant;
} & ComponentPropsWithoutRef<"p">;

export const Typography = forwardRef<ElementRef<"p">, Props>(
    ({asChild, variant = "primary", className, ...props}, ref) => {
        const Component = asChild ? Slot : "p";

        return (
            <Component
                ref={ref}
                {...props}
                className={clsx(
                    className,
                    s.typography,
                    s[variant],
                )}
            />
        );
    },
);

Typography.displayName = "Typography";

