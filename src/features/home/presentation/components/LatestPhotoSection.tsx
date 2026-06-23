
import latest from "../../../../assets/images/latest.jpg";
const LatestPhotoSection = () => {
  return (
    <section className="bg-[#f8f5ee] px-6 py-12">
      <div className="mx-auto max-w-md">
        <div className="overflow-hidden rounded-3xl shadow-xl h-[600px]">
  <img
    src={latest}
    alt="Memory"
    className="h-full w-full object-cover object-[center_0%]"
  />
</div>

        <div className="mt-8 rounded-3xl bg-white p-8 shadow-lg">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-700">
            Latest Photo
          </p>

          <p className="mt-6 text-lg leading-9 text-stone-700">
Ith lle ettom latest alla pakshe ee month aanalo apo ith vekka tto ivde
pakshe lle mmak thanne physically thanne n ethoru maata noke lle , kunjipiller aaynum aadhyam ipo itha oru thanthayum thallayum nikkn mole , kallyanam kayikan aayi
          </p>
          

 <div className="mt-8 border-l-2 border-emerald-700/30 pl-4"> <p className="italic text-stone-500 leading-8"> "And somehow, every new memory becomes my favourite." </p> </div>
        </div>
      </div>
    </section>
  );
};

export default LatestPhotoSection;