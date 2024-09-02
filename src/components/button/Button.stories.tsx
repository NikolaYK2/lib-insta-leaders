import {Button} from "./Button";
import {Meta, StoryObj} from "@storybook/react";

const meta = {
    component: Button,
    title: "Components/Button",
    tags: ['autodocs'],
    argTypes: {
        disabled: {
            control: {type: 'boolean'},
        },
        fullWidth: {
            control: {type: 'boolean'},
        },
    },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: "Some Primary Button",
        variant: "primary",
    },
};


export const PrimaryAsLink: Story = {
    args: {
        disabled: true,
        asChild: true,
        children: (
            <a href="#" target="_blank" rel="noopener noreferrer"
               title={'new google.com page will be opened'}>
                Some Primary Button As Link
            </a>
        ),
        variant: "primary",
    },
};

export const Secondary: Story = {
    args: {
        children: "Some Secondary Button",
        variant: "secondary",
    },
};

export const SecondaryAsLink: Story = {
    args: {
        asChild: true,
        children: (
            <a href="#" target="_blank" rel="noopener noreferrer"
               title={'new google.com page will be opened'}>
                Some Secondary Button As Link
            </a>
        ),
        variant: "secondary",
    },
};

export const Outlined: Story = {
    args: {
        children: "Some Outlined Button",
        variant: 'outline',
    },
}

export const OutlineAsLink: Story = {
    args: {
        asChild: true,
        children: (
            <a href="#" target="_blank" rel="noopener noreferrer"
               title={'new google.com page will be opened'}>
                Some Outline Button As Link
            </a>
        ),
        variant: "outline",
    },
}

export const Text: Story = {
    args: {
        children: "Some Text Button",
        variant: 'text',
    },
}

export const TextAsLink: Story = {
    args: {
        asChild: true,
        children: (
            <a href="#" target="_blank" rel="noopener noreferrer"
               title={'new google.com page will be opened'}>
                Some Text Button As Link
            </a>
        ),
        variant: "text",
    },
}
