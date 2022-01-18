import { useSandpackNavigation } from "@codesandbox/sandpack-react";
import { Button } from '@/components/Button'

export const Refresh = () => {
    const { refresh } = useSandpackNavigation();

    return (
        <Button type="button" onPress={() => refresh()}>
            Refresh Sandpack
        </Button>
    );
};
