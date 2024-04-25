import type { Meta, StoryObj } from "@storybook/react";
import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";
import { fn } from "@storybook/test";
import { StandaloneCirclePlusBoldIcon } from "@deriv/quill-icons";
import { TYPE } from "../../../utils/notification-utils";
import NotificationBanner from ".";

const meta = {
    title: "Components/Notification/NotificationBanner",
    component: NotificationBanner,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
        viewport: {
            viewports: {
                ...MINIMAL_VIEWPORTS,
                desktop: {
                    name: "desktop",
                    styles: {
                        width: "100%",
                        height: "100%",
                    },
                },
            },
            defaultViewport: "desktop",
        },
    },
    args: {
        redirectTo: "https://www.example.com",
        message:
            "Notification: use redirectTo or onClick to redirect to a desired page.",
        onClick: fn(),
        onClose: fn(),
        title: "Title",
    },
    argTypes: {
        className: {
            control: { type: null },
            description: "Optional.",
            table: {
                type: { summary: "string | undefined" },
            },
        },
        icon: {
            table: {
                type: { summary: "ReactNode | undefined" },
            },
        },
        iconBackgroundColor: {
            control: { type: "color" },
            table: {
                type: { summary: "string | undefined" },
            },
        },
        isMobile: {
            control: { type: "boolean" },
            description: "Optional.",
            table: {
                type: { summary: "boolean | undefined" },
            },
        },
        message: {
            table: {
                type: { summary: "string | ReactNode | undefined" },
            },
        },
        redirectTo: {
            description:
                "Optional. Passed to href attribute of the anchor tag.",
        },
        title: {
            table: {
                type: { summary: "string | ReactNode | undefined" },
            },
        },
        type: {
            options: [TYPE.INFO, TYPE.ERROR, TYPE.SUCCESS, TYPE.WARNING],
            control: { type: "radio" },
            description: "Optional.",
            table: {
                type: {
                    summary:
                        "'info' | 'error' | 'success' | 'warning' | undefined",
                },
            },
        },
    },
} satisfies Meta<typeof NotificationBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NotificationBannerDesktop: Story = {
    render: (args) => (
        <div style={{ width: "360px" }}>
            <NotificationBanner {...args} />
        </div>
    ),
};

export const NotificationBannerMobile: Story = {
    args: {
        isMobile: true,
    },
    render: (args) => (
        <div style={{ width: "360px" }}>
            <NotificationBanner {...args} />
        </div>
    ),
};

export const NotificationBannerDesktopWithCustomIcon: Story = {
    render: (args) => (
        <div style={{ width: "360px" }}>
            <NotificationBanner
                {...args}
                icon={
                    <StandaloneCirclePlusBoldIcon
                        fill="rgba(0, 130, 42, 1)"
                        iconSize="sm"
                    />
                }
                type={TYPE.SUCCESS}
            />
        </div>
    ),
};
