// import {IconBrowser} from './iconsBrowser/iconsBrowser';
//
// export default {
//     title: 'Icons',
// };
//
// export const IconsBrowser = () => {
//     return <>
//         <div style={{display: 'flex', alignItems: 'center'}}>
//             <IconBrowser iconId={'brave'}/>
//             <p style={{marginLeft: "1rem"}}>Brave</p>
//         </div>
//         <div style={{display: 'flex', alignItems: 'center'}}>
//             <IconBrowser iconId={'explorer'}/>
//             <p style={{marginLeft: "1rem"}}>Explorer</p>
//         </div>
//         <div style={{display: 'flex', alignItems: 'center'}}>
//             <IconBrowser iconId={'firefox'}/>
//             <p style={{marginLeft: "1rem"}}>Firefox</p>
//         </div>
//         <div style={{display: 'flex', alignItems: 'center'}}>
//             <IconBrowser iconId={'microsoft-edge'}/>
//             <p style={{marginLeft: "1rem"}}>Microsoft Edge</p>
//         </div>
//         <div style={{display: 'flex', alignItems: 'center'}}>
//             <IconBrowser iconId={'opera'}/>
//             <p style={{marginLeft: "1rem"}}>Opera</p>
//         </div>
//         <div style={{display: 'flex', alignItems: 'center'}}>
//             <IconBrowser iconId={'safari'}/>
//             <p style={{marginLeft: "1rem"}}>Safari</p>
//         </div>
//         <div style={{display: 'flex', alignItems: 'center'}}>
//             <IconBrowser iconId={'uc-browser'}/>
//             <p style={{marginLeft: "1rem"}}>UC Browser</p>
//         </div>
//         <div style={{display: 'flex', alignItems: 'center'}}>
//             <IconBrowser iconId={'yandex'}/>
//             <p style={{marginLeft: "1rem"}}>Yandex</p>
//         </div>
//     </>
// }


import {IconBrowser} from './iconsBrowser/iconsBrowser';

import {Meta, StoryObj} from "@storybook/react";

const meta = {
    component: IconBrowser,
    title: "Icons/IconBrowser",
    tags: ['autodocs'],
    // argTypes: {
    //     disabled: {
    //         control: {type: 'boolean'},
    //     },
    //     fullWidth: {
    //         control: {type: 'boolean'},
    //     },
    // },
} satisfies Meta<typeof IconBrowser>;

export default meta;

type Story = StoryObj<typeof meta>;

export const brave: Story = {
    args: {
        iconId: "brave",
    },
};

export const explorer: Story = {
    args: {
        iconId: "explorer",
    },
};

export const firefox: Story = {
    args: {
        iconId: "firefox",
    },
};

export const microsoft_edge: Story = {
    args: {
        iconId: "microsoft-edge",
    },
};

export const opera: Story = {
    args: {
        iconId: "opera",
    },
};

export const safari: Story = {
    args: {
        iconId: "safari",
    },
};

export const UC_browser: Story = {
    args: {
        iconId: "uc-browser",
    },
};

export const yandex: Story = {
    args: {
        iconId: "yandex",
    },
};
