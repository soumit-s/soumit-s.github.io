import Image from "next/image";

const SiteLogo = () => (
  <div className="font-ojuju font-black text-2xl">
    <Image
      src="/assets/cattest_cropped.gif"
      width={100}
      height={100}
      alt="Soumit"
      unoptimized={true}
      className="w-10"
    />
  </div>
);

export default SiteLogo;
