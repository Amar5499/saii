
import firstPhoto from "../../../../assets/images/first.jpg";
const PhotoGallerySection = () => {
  return (
    <section className="bg-[#f8f5ee] px-6 py-12">
      <div className="mx-auto max-w-md">
              <div className="overflow-hidden rounded-3xl shadow-xl h-[600px]">
  <img
    src={firstPhoto}
    alt="Memory"
    className="h-full w-full object-cover object-[center_0%]"
  />
</div>

        <div className="mt-8 rounded-3xl bg-white p-8 shadow-lg">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-700">
            First Photo
          </p>

          <p className="mt-6 text-lg leading-9 text-stone-700">
        Ith lle mmal aadhyayit orumich edutha sanam aayond ivde vechatha tto ini last eduthem vekkum pakshe lle ith veche enthina n vecha
        ann mmak 2 aalkum oru ideayum illaynum mmal ingane aavum n athondanne ith aavatte innathe special mole.. Pakshe lle ingane oro photo nokumbo aan mmale kore photo poyi poye inik thonua
        sherik ethra mmale photos poyi poyi lle pakshe special ithan innathe enthayalum tto , Pne lle inik ee pravashyam njan ponnenn munp photo oke drop cheyyanam, mmak cable kuthi cheyya atahvumbo full orumich aavum
          </p>
          

          <p className="mt-4 text-lg leading-9 text-stone-700"> pne ith aaro paranja oru quote um kidakkate
          </p>
          <div className="mt-8 border-l-2 border-emerald-700/30 pl-4">
  <p className="italic text-stone-500 leading-8">
    "Some memories quietly become special without us even realizing it."
  </p>

  <p className="mt-2 text-sm text-stone-400">
    — Unknown
  </p>
</div>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallerySection;