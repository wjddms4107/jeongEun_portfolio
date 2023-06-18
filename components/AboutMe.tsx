import Link from "next/link";

interface IProps {
  about: string;
  me: string;
}

export default function AboutMe({ about, me }: IProps) {
  return (
    <div className="flex text-xl">
      <div className="flex">
        <div>{about}</div>
        <div className="text-purple text-[23px] mx-2">|</div>
      </div>
      {about === "블로그" || about === "깃허브" ? (
        <div>
          <Link href={me}>{me}</Link>
        </div>
      ) : (
        <div>{me}</div>
      )}
    </div>
  );
}
