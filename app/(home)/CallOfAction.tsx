import Link from "next/link";

const CallOfAction = () => {
  return (
    <div className="flex justify-center items-center mt-6">
      <Link href={"/about"}>
        <button
          data-te-ripple-init
          data-te-ripple-color="light"
          className="bg-black text-white py-2.5 px-6 rounded-sm trasition duration-150 ease-in-out text-xs"
        >
          Learn More
        </button>
      </Link>
    </div>
  );
};

export default CallOfAction;
