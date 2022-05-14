import RoundedButton from "components/atom/button/RoundedButton";
import Plus from "components/atom/icons/Plus";
import { Link } from "react-router-dom";
import { cls } from "util/utils";

type Props = {
  to: string;
};

export default function FloatingButton({ to }: Props): JSX.Element {
  return (
    <Link to={to}>
      <RoundedButton
        color="main"
        size="roundedLg"
        className={cls(
          "fixed z-30 bottom-12 right-12",
          "sm:bottom-16 sm:right-24"
        )}
      >
        <Plus />
      </RoundedButton>
    </Link>
  );
}
