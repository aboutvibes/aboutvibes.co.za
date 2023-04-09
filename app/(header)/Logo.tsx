import Link from "next/link";
import companyLogo from "../../public/img/logo/dark_logo_transparent_cozxhf.webp";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image
        src={companyLogo}
        alt="Company Logo"
        width={140}
        height={140}
        className="md:text-sm"
      />
    </Link>
  );
};

export default Logo;
