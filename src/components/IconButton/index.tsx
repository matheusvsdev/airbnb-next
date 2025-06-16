interface IconButtonProps {
  icon: React.ReactNode;
  children: React.ReactNode;
}

export default function IconButton(props: IconButtonProps) {
  return (
    <>
      <button className="rounded-xl border-2 flex items-center gap-2 px-4 py-2 hover:border-red-600 cursor-pointer">
        <span>{props.icon}</span>
        <span>{props.children}</span>
      </button>
    </>
  );
}
