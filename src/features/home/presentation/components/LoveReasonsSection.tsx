const LoveReasonsSection = () => {
  const reasons = [
    'Your smile',
    'Your kindness',
    'The way you make every day better',
  ];

  return (
    <section className="px-6 py-20">
      <h2 className="text-center text-3xl font-bold mb-8">
        Things I Love About You ❤️
      </h2>

      <div className="space-y-4 max-w-md mx-auto">
        {reasons.map((reason) => (
          <div
            key={reason}
            className="bg-white rounded-2xl shadow p-6"
          >
            {reason}
          </div>
        ))}
      </div>
    </section>
  );
};

export default LoveReasonsSection;
