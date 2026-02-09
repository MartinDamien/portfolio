import Link from "next/link";
import { colors } from "@/app/lib/colors";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      style={{ color: colors.text.lightGray }}
      className="block py-2 pl-3 pr-4 sm:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </Link>
  );
};

export default NavLink;
