import Image from "next/image"
import Link from "next/link";
import { type Posts } from "@/type";
function Card({ item }: { item: Posts }) {

  return (

    <div className="max-w-full bg-white dark:bg-gray-800 hover:dark:bg-blue-700 hover:bg-red-300">
       <Link  href={`/read/${item.title.toLowerCase().trim().split(" ").join("-")}`}>
          <Image className="rounded-lg p-3" width={1000} height={329} src={item.image} alt=" demo image " />
        </Link>
      

      <div className="p-3">

        <div className="flex mb-3">

          <p className="text-sm text-gray-500 dark:text-gray-400"> Mar 10, 2023 </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mx-1"> , </p>
          <p className="text-sm text-gray-500 dark:text-gray-400"> 5 min read </p>

        </div>


        <Link className="text-lg " href={`/read/${item.title.toLowerCase().trim().split(" ").join("-")}`}>
          {item.title}
        </Link>

      </div>

    </div>

  )

}

export default Card
