import { Icon } from "./icons";
import { Button, ButtonProps } from "../ui/button/button";
import { cn } from "../utils";

export const PlayButton = (props: ButtonProps & { large?: boolean }) => {
  const { className, large = false, ...rest } = props;
  return (
    <Button
      variant="unStyled"
      className={cn(
        "bg- flex size-10 items-center justify-center rounded-full !bg-surface-overlayDark",
        className,
      )}
      {...rest}
    >
      <Icon
        size={large ? 40 : "medium"}
        name="play"
        iconClassName="text-content-inverse"
      />
    </Button>
  );
};
