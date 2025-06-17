interface IconButtonProps {
  icon: React.ReactNode;
  children: React.ReactNode;
}

export default function IconButton(props: IconButtonProps) {
  return (
    <>
      <button className="rounded-xl border-2 flex items-center gap-2 px-4 py-2 cursor-pointer hover:border-red-500 hover:bg-red-500 hover:text-white">
        <span>{props.icon}</span>
        <span>{props.children}</span>
      </button>
    </>
  );
}
