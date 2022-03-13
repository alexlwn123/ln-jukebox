import {CaretLeftIcon} from "@bitcoin-design/bitcoin-icons-react/filled";
import Link from "next/link";

export default function Nav(props) {
  return(
    <Link href={props.href ? props.href : '/'}>
      <div className="flex flex-row space-x-4 justify-start items-center w-full">
        <CaretLeftIcon className="text-white w-12 h-12" />
        <span className="text-white uppercase tracking-[0.65em]">{props.text}</span>
      </div>
    </Link>
  )
}