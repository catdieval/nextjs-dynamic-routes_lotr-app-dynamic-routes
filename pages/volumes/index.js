import Link from "next/link";
import { introduction } from "../../lib/data";
import { volumes } from "../../lib/data";
import { useRouter } from "next/router";

export default function Volumes() {
  const router = useRouter();

  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
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
      <button
        onClick={() => {
          const randomVolume = getRandomElement(volumes);
          router.push("/volumes/" + randomVolume.slug);
        }}
      >
        Random volume
      </button>
    </>
  );
}
