type Props = {
  children: string | JSX.Element;
};

export default function ListElement({ children }: Props): JSX.Element {
  return (
    <li className="cursor-pointer text-deepPurple py-2 px-3">{children}</li>
  );
}
