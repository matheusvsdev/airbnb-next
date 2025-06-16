import Link from "next/link";

interface LinkButtonProps {
  icon: React.ReactNode;
  children: React.ReactNode;
  active: boolean;
}

export default function LinkButton(props: LinkButtonProps) {
  return (
    <>
      <Link className={`flex items-end gap-2 ${
        props.active ? "font-semibold opacity-100" : "opacity-70 hover:opacity-100"}`}
        href="/"
      >
        <span>{props.icon}</span>
        <span>{props.children}</span>
      </Link>
    </>
  );
}
