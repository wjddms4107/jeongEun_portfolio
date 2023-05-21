import Link from "next/link";

interface IPinkBtnProps  {
  text: string;
  url?: string;
}

export default function PinkBtn({text, url}:IPinkBtnProps) {
  return (
      <span className="text-base text-white p-2 ml-4 bg-pink rounded-[4px] cursor-pointer hover:bg-deepPink"> 
        <Link href={url ? url : ""} target="_blank">
          {text}
        </Link>
      </span>
  )
}