import Link from "next/link";

interface IPinkBtnProps  {
  text: string;
  url?: string;
}

export default function PinkBtn({text,url}:IPinkBtnProps) {
  return (
    <Link href={url ? url : ""} target="_blank" >
      <span className="w-fit text-base text-white p-2 ml-4 bg-pink rounded-[4px] cursor-pointer hover:bg-deepPink">{text}</span>
    </Link>
    
  )
}