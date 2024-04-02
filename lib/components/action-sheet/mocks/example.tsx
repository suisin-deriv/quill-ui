/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentProps, useState } from "react";
import {
    StandaloneXmarkRegularIcon,
    LabelPairedBarsSmBoldIcon,
} from "@deriv/quill-icons";
import ActionSheet from "..";
import { ActionSheetContextType } from "../root";
import { Text } from "../../Typography";
import "./mock.scss";

type ExampleProps = ActionSheetContextType &
    ComponentProps<typeof ActionSheet.Root> &
    ComponentProps<typeof ActionSheet.Footer> &
    ComponentProps<typeof ActionSheet.Header>;

export const ActionSheetExampleFour = ({
    primaryAction,
    secondaryAction,
    alignment,
    ...props
}: ExampleProps) => {
    return (
        <>
            <ActionSheet.Root {...props}>
                <ActionSheet.Trigger>Click Here</ActionSheet.Trigger>
                <ActionSheet.Portal>
                    <ActionSheet.Close aria-label="close">
                        <StandaloneXmarkRegularIcon />
                    </ActionSheet.Close>
                    <ActionSheet.Header className="action-sheet--header">
                        Testing
                    </ActionSheet.Header>
                    <ActionSheet.Content className="flex flex-col gap-500 py-800">
                        <p>
                            Bottom sheet is a surface fixed at the bottom of the
                            screen which includes content related to the
                            previous screen.
                        </p>
                        <p>
                            Bottom sheet is a surface fixed at the bottom of the
                            screen which includes content related to the
                            previous screen.
                        </p>
                        <p>
                            Bottom sheet is a surface fixed at the bottom of the
                            screen which includes content related to the
                            previous screen.
                        </p>
                        <p>
                            Bottom sheet is a surface fixed at the bottom of the
                            screen which includes content related to the
                            previous screen.
                        </p>
                    </ActionSheet.Content>
                    <ActionSheet.Footer
                        primaryAction={primaryAction}
                        secondaryAction={secondaryAction}
                        alignment={alignment}
                    />
                </ActionSheet.Portal>
            </ActionSheet.Root>
        </>
    );
};

export const ActionSheetExample = ({
    primaryAction,
    secondaryAction,
    alignment,
    description,
    title,
    closeIcon,
    icon,
    ...props
}: ExampleProps) => {
    const [open, setOpen] = useState<boolean>();
    const openHandler = () => {
        setOpen(true);
    };
    return (
        <>
            <ActionSheet.Root {...props} isOpen={open} onOpen={openHandler}>
                <ActionSheet.Trigger>Click Here</ActionSheet.Trigger>
                <ActionSheet.Portal>
                    <ActionSheet.Header
                        title={title}
                        description={description}
                        closeIcon={closeIcon}
                        icon={icon}
                    />
                    <ActionSheet.Content className="mock-action-sheet--content">
                        <Text size="sm">
                            Bottom sheet is a surface fixed at the bottom of the
                            screen which includes content related to the
                            previous screen.
                        </Text>
                        <Text size="sm">
                            Bottom sheet is a surface fixed at the bottom of the
                            screen which includes content related to the
                            previous screen.
                        </Text>
                        <Text size="sm">
                            Bottom sheet is a surface fixed at the bottom of the
                            screen which includes content related to the
                            previous screen.
                        </Text>
                    </ActionSheet.Content>
                    <ActionSheet.Footer
                        primaryAction={primaryAction}
                        secondaryAction={secondaryAction}
                        alignment={alignment}
                    />
                </ActionSheet.Portal>
            </ActionSheet.Root>
        </>
    );
};

export const ActionSheetExampleWithIconTrigger = ({
    primaryAction,
    secondaryAction,
    alignment,
    description,
    title,
    closeIcon,
    icon,
    ...props
}: ExampleProps) => {
    return (
        <>
            <ActionSheet.Root {...props}>
                <ActionSheet.Trigger
                    iconComponent={LabelPairedBarsSmBoldIcon}
                    iconClassName="fill-solid-red-500"
                    iconSize="sm"
                />
                <ActionSheet.Portal>
                    <ActionSheet.Header
                        title={title}
                        description={description}
                        closeIcon={closeIcon}
                        icon={icon}
                    />
                    <ActionSheet.Content className="mock-action-sheet--content">
                        <Text size="sm">
                            Bottom sheet is a surface fixed at the bottom of the
                            screen which includes content related to the
                            previous screen.
                        </Text>
                        <Text size="sm">
                            Bottom sheet is a surface fixed at the bottom of the
                            screen which includes content related to the
                            previous screen.
                        </Text>
                        <Text size="sm">
                            Bottom sheet is a surface fixed at the bottom of the
                            screen which includes content related to the
                            previous screen.
                        </Text>
                    </ActionSheet.Content>
                    <ActionSheet.Footer
                        primaryAction={primaryAction}
                        secondaryAction={secondaryAction}
                        alignment={alignment}
                    />
                </ActionSheet.Portal>
            </ActionSheet.Root>
        </>
    );
};

export default ActionSheetExample;
