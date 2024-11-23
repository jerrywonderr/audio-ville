import Link from "next/link";
import cn from "../utils/cn";

interface ISideBarTagProps {
  children: string;
  active?: boolean;
}

export const SideBarTag = ({ children, active = false }: ISideBarTagProps) => {
  return (
    <Link
      href={`/${children}`}
      className={cn(
        "flex-1 border-r-2 last:border-0 bg-fuchsia-200 border-fuchsia-100 capitalize px-2 py-4  sm:border-0 sm:rounded-md sm:py-3 sm:flex-[0] ",
        active
          ? "bg-fuchsia-500 border-b-2 dark:sm:bg-slate-500 text-white font-semibold cursor-default"
          : null
      )}
    >
      {children}
    </Link>
  );
};
