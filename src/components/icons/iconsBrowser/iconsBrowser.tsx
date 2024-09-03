import iconsSprite from './iconsSprite.svg'

export interface Props {
    iconId: IconId;
    width?: string;
    height?: string;
    viewBox?: string;
    fill?: string;
}

export type IconId = 'brave' | 'explorer' | 'firefox' | 'microsoft-edge' | 'opera' | 'safari' | 'uc-browser' | 'yandex'

export const IconBrowser = (props: Props) => {
    return (
        <svg width={props.width || "36"} height={props.height || "36"} viewBox={props.viewBox || "0 0 36 36"}
             fill={props.fill || "#ffffff"} xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </svg>
    );
};