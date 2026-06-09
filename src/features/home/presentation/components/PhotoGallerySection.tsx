const PhotoGallerySection = () => {
  return (
    <section className="px-6 py-20">
      <h2 className="text-center text-3xl font-bold mb-8">
        Memories 📸
      </h2>

      <div className="space-y-4 max-w-md mx-auto">
        <div className="h-72 rounded-3xl bg-pink-200" />
        <div className="h-72 rounded-3xl bg-pink-300" />
      </div>
    </section>
  );
};

export default PhotoGallerySection;