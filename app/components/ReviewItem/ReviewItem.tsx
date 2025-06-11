import Image from "next/image";
import "./ReviewItem.scss";

// types
import { ReviewItemProps } from "./types";

export default function ReviewItem({
  logoSrc,
  photoSrc,
  name,
  position,
  reviewText,
}: ReviewItemProps) {
  return (
    <article className="ReviewItem">
      <header>
        <Image
          src={logoSrc}
          alt="Logo"
          width={150}
          height={30}
          style={{ width: "auto", height: "auto" }}
        />
      </header>
      <main>
        <p>{reviewText}</p>
        <Image src="/“.svg" alt="Quote" width={24} height={24} />
      </main>
      <footer>
        <Image src={photoSrc} alt={name} width={48} height={48} />
        <div>
          <h2>{name}</h2>
          <p>{position}</p>
        </div>
      </footer>
    </article>
  );
}
