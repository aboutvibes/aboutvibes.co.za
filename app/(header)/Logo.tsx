import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <img
        src="https://res.cloudinary.com/ddovp5ssb/image/upload/v1679957532/AB%20Photos/Logo/dark_logo_transparent_cozxhf_v5j29s.webp"
        alt="Company Logo"
        width={140}
        height={140}
        className="md:text-sm"
      />
    </Link>
  );
};

export default Logo;
