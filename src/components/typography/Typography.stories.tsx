import {Typography} from "./Typography";
import {Meta, StoryObj} from "@storybook/react";
import {TypographyVariant} from "./typography.enum";

const meta = {
    component: Typography,
    title: "lib-insta-leaders/Typography",
    tags: ['autodocs'],
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Large: Story = {
    args: {
        children: `Typography ${TypographyVariant.large} as p (default)`,
        variant: TypographyVariant.large,
    },
};

export const LargeAsSpan: Story = {
    args: {
        asChild: true,
        children: <span>{`Typography ${TypographyVariant.large} as span`}</span>,
        variant: TypographyVariant.large,
    },
};

export const LargeAsDiv: Story = {
    args: {
        asChild: true,
        children: <div>{`Typography ${TypographyVariant.large} as div`}</div>,
        variant: TypographyVariant.large,
    },
};

export const LargeAsH4: Story = {
    args: {
        asChild: true,
        children: <h4>{`Typography ${TypographyVariant.large} as h4`}</h4>,
        variant: TypographyVariant.large,
    },
};

export const H1: Story = {
    args: {
        children: `Typography ${TypographyVariant.h1} as p (default)`,
        variant: TypographyVariant.h1,
    },
};

export const H2: Story = {
    args: {
        children: `Typography ${TypographyVariant.h2} as p (default)`,
        variant: TypographyVariant.h2,
    },
}

export const H3: Story = {
    args: {
        children: `Typography ${TypographyVariant.h3} as p (default)`,
        variant: TypographyVariant.h3,
    },
}

export const regular_text_16: Story = {
    args: {
        children: `Typography ${TypographyVariant.regular_text_16} as p (default)`,
        variant: TypographyVariant.regular_text_16,
    },
}

export const bold_text_16: Story = {
    args: {
        children: `Typography ${TypographyVariant.bold_text_16} as p (default)`,
        variant: TypographyVariant.bold_text_16,
    },
}

export const regular_text_14: Story = {
    args: {
        children: `Typography ${TypographyVariant.regular_text_14} as p (default)`,
        variant: TypographyVariant.regular_text_14,
    },
}

export const medium_text_14: Story = {
    args: {
        children: `Typography ${TypographyVariant.medium_text_14} as p (default)`,
        variant: TypographyVariant.medium_text_14,
    },
}

export const bold_text_14: Story = {
    args: {
        children: `Typography ${TypographyVariant.bold_text_14} as p (default)`,
        variant: TypographyVariant.bold_text_14,
    },
}

export const small_text: Story = {
    args: {
        children: `Typography ${TypographyVariant.small_text} as p (default)`,
        variant: TypographyVariant.small_text,
    },
}

export const semibold_small_text: Story = {
    args: {
        children: `Typography ${TypographyVariant.semibold_small_text} as p (default)`,
        variant: TypographyVariant.semibold_small_text,
    },
}

export const regular_link: Story = {
    args: {
        asChild: true,
        children: (
            <a href={"#"} target={"_blank"} rel={"noopener noreferrer"}>
                {`go to google.com - Typography ${TypographyVariant.regular_link} as a`}
            </a>
        ),
        variant: TypographyVariant.regular_link,
    },
}

export const small_link: Story = {
    args: {
        asChild: true,
        children: (
            <a href={"#"} target={"_blank"} rel={"noopener noreferrer"}>
                {`go to google.com - Typography ${TypographyVariant.small_link} as a (default)`}
            </a>
        ),
        variant: TypographyVariant.small_link,
    },
}
