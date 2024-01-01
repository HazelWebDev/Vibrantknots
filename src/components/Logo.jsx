import Image from "next/image";

export function Logo(props) {
  return (
    <Image
    alt="Logo"
    src="/images/VKLogo.png"
    width={75}  // Adjust width as needed
    height={75}  // Adjust height as needed
    {...props}
  />
  );
}