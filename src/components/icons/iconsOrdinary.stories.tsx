import * as icons from './iconsOrdinary';

export default {
    title: 'Icons',
};

export const IconsOrdinary = () => {
    return <> {Object.keys(icons).map((iconKey) => {
        const IconComponent = icons[iconKey as keyof typeof icons];
        return (
            <div key={iconKey} style={{ display: 'flex', alignItems: 'center' }}>
                <IconComponent/>
                <p style={{marginLeft:"1rem"}}>{iconKey}</p>
            </div>
        );
    })}</>
}
