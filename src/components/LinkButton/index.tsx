import Link from "next/link";

interface LinkButtonProps {
  icon: React.ReactNode;
  children: React.ReactNode;
  color?: string;
  active: boolean;
}

export default function LinkButton(props: LinkButtonProps) {
  return (
    <>
      <Link className={`flex items-end gap-2 ${
        props.active ? "font-semibold opacity-100" : "opacity-70 hover:opacity-100"
        } group`}
        href="/"
      >
        <span className="transition-transform duration-200 group-hover:scale-125" style={{ color: props.color }}>
          {props.icon}
        </span>
        <span>{props.children}</span>
      </Link>
    </>
  );
}
