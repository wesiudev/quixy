import Image from "next/image";
import moment from "moment";
import "moment/locale/pl";
import { FaBook } from "react-icons/fa";
import Link from "next/link";
import { polishToEnglish } from "@/app/utils/polishToEnglish";
export interface IComment {
  content: string;
  likes: number;
  creationTime: number;
  isAdmin: boolean;
}

export interface IPost {
  title: string;
  content: string;
  comments: IComment[];
  imageUrl: string;
  creationTime: number;
  readingTime: number;
  postId: string;
}

export const RecentPosts = ({ posts }: { posts: IPost[] }) => {
  return (
    <div>
      <h1 className="font-sans italic font-light p-3 text-black bg-rose-200 rounded-md w-max text-xs sm:text-lg">
        /{" "}
        <Link href="/" className="hover:underline hover:underline-offset-2">
          home
        </Link>{" "}
        /{" "}
        <Link
          href="/blog/"
          className="hover:underline hover:underline-offset-2"
        >
          blog
        </Link>{" "}
      </h1>
      <div className="w-full flex flex-col lg:flex-row mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {posts?.map((post: IPost, idx: number) => (
            <div
              key={idx}
              className="bg-rose-500 p-3 my-3 lg:my-0 rounded-md h-max group cursor-pointer"
            >
              <Link href={`/blog/${polishToEnglish(post.postId)}`}>
                <div className="relative overflow-hidden">
                  <div className="absolute right-3 bottom-3 font-pars text-3xl text-white text-opacity-40 z-50">
                    Piękniej
                  </div>

                  <Image
                    src={post.imageUrl}
                    alt=""
                    width={512}
                    height={512}
                    className="rounded-md scale-1 group-hover:rounded-xl group-hover:scale-110 group-hover:rotate-2 group-hover:translate-x-[5px] group-hover:translate-y-[5px] ease-in-out duration-500"
                  />
                </div>
                <div className="flex flex-row w-full justify-between text-white font-sans py-2">
                  <span>{moment(post.creationTime).format("DD.MM.YYYY")}</span>
                  <span className="flex flex-row items-center gap-1">
                    <FaBook />
                    {post.readingTime} min.
                  </span>
                </div>
                <div className="pt-3 flex flex-col">
                  <h1 className="text-white font-sans text-xl">{post.title}</h1>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="w-full lg:w-2/5 h-max rounded-md flex flex-col ml-6">
          <div className="overflow-hidden w-full relative">
            <Link
              href="/rezerwacje"
              className="absolute w-full h-full left-0 top-0 z-50"
            />
            <video
              className="rounded-xl w-full h-full"
              autoPlay
              muted
              loop
              src="/video.mp4"
            ></video>
          </div>
          <div className="flex flex-col mt-6 font-sans bg-rose-200 text-black p-3 rounded-lg">
            <h1>Witam na moim blogu</h1>
            <h2 className="mt-6">
              Na tym blogu znajdziesz wiele cennych porad dotyczących
              pielęgnacji paznokci, zarówno dłoni, jak i stóp. Udostępniam tu
              przystępne i krok po kroku tutoriale, które pomogą Ci stworzyć
              wyjątkowe i efektowne wzory na swoich paznokciach. Niezależnie od
              tego, czy jesteś początkująca, czy doświadczona w pielęgnacji
              paznokci, mam nadzieję, że znajdziesz tutaj coś dla siebie.
            </h2>
            <h2 className="mt-6">
              Pragnę, aby mój blog był miejscem inspirującym, dlatego będę na
              bieżąco dzielić się z Tobą najnowszymi trendami i nowościami z
              świata manicure i kosmetyków do paznokci. Będziesz miała szansę
              być na czasie z tym, co modne i co warto wypróbować, aby zawsze
              prezentować się olśniewająco.
            </h2>
            <h2 className="mt-6">
              Jestem przekonana, że zadbane paznokcie to ważny element każdej
              stylizacji, dlatego chcę Ci pomóc w ich pielęgnacji i zdobieniu.
              Wierzę, że każda kobieta może być artystką na własnych
              paznokciach, wystarczy tylko odrobina kreatywności i praktyki.
            </h2>
            <h2 className="mt-6">
              Zapraszam Cię do częstego odwiedzania mojego bloga, komentowania
              wpisów i zadawania pytań. Razem możemy stworzyć piękne i modnie
              wyglądające paznokcie, które dodadzą Ci pewności siebie i pozwolą
              poczuć się wyjątkowo.
            </h2>
            <h2 className="mt-6">
              Dziękuję, że jesteś ze mną i życzę Ci miłego czytania oraz
              inspirujących chwil na moim blogu!
            </h2>

            <h2 className="mt-6">Z serdecznymi pozdrowieniami, Ania</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
