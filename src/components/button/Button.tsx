import {ComponentPropsWithoutRef, ElementRef, forwardRef, ReactNode, MouseEvent} from "react";
import s from "./button.module.scss";
import clsx from "clsx";
import {Slot, Slottable} from "@radix-ui/react-slot";

type Props = {
    asChild?: boolean;
    variant?: "primary" | "secondary" | "outline" | "text";
    fullWidth?: boolean;
} & ComponentPropsWithoutRef<"button">;

export const Button = forwardRef<ElementRef<"button">, Props>(
    ({asChild, onClick, variant = "primary", fullWidth, className, disabled, ...props}, ref) => {
        const Component = asChild ? Slot : "button";
        const handleDisabledClick = (ev: MouseEvent<HTMLButtonElement>) => {
            if (disabled) {
                ev.preventDefault()
            }
        }

        return (
            <Component
                disabled={disabled}
                onClick={asChild && disabled ? handleDisabledClick : onClick}
                ref={ref}
                {...props}
                className={clsx(
                    s.button,
                    disabled && s.disabledLink,
                    className,
                    fullWidth && s.fullWidth,
                    s[variant],
                )}
            />
        );
    },
);

Button.displayName = "Button";

