import Link from "next/link";
//import { introduction } from "../../lib/data";
import { volumes } from "../../lib/data";
import { useRouter } from "next/router";

export default function Volumes() {
  const router = useRouter();
  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{volumes.introduction}</p>
      <ul>
        {volumes.map((volume) => {
          return (
            <>
              <li>
                <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
}
