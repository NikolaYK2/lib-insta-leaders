// import {Icon} from "../../icon/icon.tsx";
import s from "./styles.module.scss";
import {forwardRef} from "react";

export type IconProps = 'logOut'
    | 'profile'
    | 'play'
    | 'trash'
    | 'edit'

type AnchorProps = {
    type: 'a';
    route: string;
}
type ButtonProps = {
    type: 'button';
    callback: () => void;
}
type ItemProps = {
    title: string;
    icon: IconProps;
    disabled?: boolean;
}
type Props = (ItemProps & AnchorProps) | (ItemProps & ButtonProps);

export const DynamicMenuItem = forwardRef<HTMLAnchorElement | HTMLButtonElement, Props>((props, ref) => {
    const {type, icon, title} = props
    if (type === 'a') {
        return (
            <a href={props.route} className={s.link} ref={ref as React.Ref<HTMLAnchorElement>}>
                {/*<Icon iconId={icon}/>*/}
                x
                <span>{title}</span>
            </a>
        );
    } else {
        return (
            <button onClick={() => props.callback()} className={s.button} ref={ref as React.Ref<HTMLButtonElement>}>
                {/*<Icon iconId={icon}/>*/}
                x
                <span>{title}</span>
            </button>
        );
    }
});

