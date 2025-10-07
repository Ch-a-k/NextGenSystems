import Image from "next/image";

export default function ResponsiveImage(props) {
  return <Image sizes="(min-width: 1024px) 800px, 100vw" {...props} />;
}


