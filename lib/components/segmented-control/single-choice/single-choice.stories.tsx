import type { Meta } from "@storybook/react";
import { fn } from "@storybook/test";
import SegmentedControlSingleChoice from ".";
import { ComponentProps } from "react";

const meta = {
    title: "Components/SegmentedControl/SegmentedControlSingleChoice",
    component: SegmentedControlSingleChoice,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
    args: {
        onChange: fn(),
        selectedItemIndex: 0,
        size: "md",
    },
    argTypes: {
        className: {
            control: { type: null },
            description: "Optional.",
            table: {
                type: { summary: "string | undefined" },
            },
        },
        hasContainerWidth: {
            control: { type: null },
            description:
                "Optional. Makes the component inherit the full width of its container.",
            table: {
                type: { summary: "boolean | undefined" },
            },
        },
        onChange: {
            description:
                "Optional. You can use it to react to selection change.",
            control: { type: null },
        },
        options: {
            control: { type: null },
            description:
                "Required. The first element in `options` is selected by default. You can pass `selectedItemIndex` prop to make another element selected. `icon` accepts a component or a string, e.g. 'placeholder' value will load a placeholder icon from `@deriv/quill-icons`.",
        },
        selectedItemIndex: {
            options: [0, 1, 2, 3, 4],
            control: { type: "radio" },
            description:
                "Optional. Index of one of the elements in `options` array. You can use `selectedItemIndex` and `onChange` to control selection.",
        },
        size: {
            options: ["sm", "md", "lg"],
            control: { type: "radio" },
            description: "Optional.",
            table: {
                type: { summary: "string | undefined" },
            },
        },
    },
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof SegmentedControlSingleChoice>;

export default meta;

const optionWithIconAndLabel = {
    icon: "placeholder",
    label: "Label",
};

export const SingleChoiceGroupWithIconsOnly = (
    args: ComponentProps<typeof SegmentedControlSingleChoice>,
) => (
    <SegmentedControlSingleChoice
        {...args}
        options={new Array(5).fill({
            icon: "placeholder",
        })}
    />
);

export const SingleChoiceGroupWithLabelsOnly = (
    args: ComponentProps<typeof SegmentedControlSingleChoice>,
) => (
    <SegmentedControlSingleChoice
        {...args}
        options={new Array(5).fill({ label: "Label" })}
    />
);

export const SingleChoiceGroupWithIconsAndLabels = (
    args: ComponentProps<typeof SegmentedControlSingleChoice>,
) => (
    <SegmentedControlSingleChoice
        {...args}
        options={new Array(5).fill(optionWithIconAndLabel)}
    />
);

export const SingleChoiceGroupWithContainerWidth = (
    args: ComponentProps<typeof SegmentedControlSingleChoice>,
) => (
    <div style={{ width: "328px" }}>
        <SegmentedControlSingleChoice
            {...args}
            hasContainerWidth
            options={new Array(2).fill(optionWithIconAndLabel)}
        />
    </div>
);

export const SingleChoiceGroupWithOneDisabledOption = (
    args: ComponentProps<typeof SegmentedControlSingleChoice>,
) => (
    <SegmentedControlSingleChoice
        {...args}
        options={[
            { label: "Label" },
            { label: "Label", disabled: true },
            { label: "Label" },
        ]}
    />
);

export const SingleChoiceGroupWithUnequalContentLength = (
    args: ComponentProps<typeof SegmentedControlSingleChoice>,
) => (
    <SegmentedControlSingleChoice
        {...args}
        options={[{ label: "Label" }, { label: "Very Very Very Long Label" }]}
    />
);
