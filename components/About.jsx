export default function HackathonAboutSection() {
  return (
    <section className="text-gray-200 py-16">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading + intro */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-semibold text-white md:text-4xl">
            About the Hackathon
          </h2>
          <p className="text-sm text-gray-300 md:text-base">
            EPOCH 4.0 Hackathon challenges teams to analyze real problem
            statements and build working application prototypes in just 24
            hours. The focus is on creativity, usability, functionality, and a
            strong user experience.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Event Highlights */}
          <div className="rounded-xl border border-[#1f2628] bg-[#0d1112] p-6">
            <div className="mb-5 flex items-center gap-3">
              <img
                src="/icons/Lightbulb.svg"
                alt=""
                className="h-6 w-6 shrink-0"
              />
              <h3 className="text-lg font-medium text-white">
                Event Highlights
              </h3>
            </div>

            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <img src="/icons/$.svg" className="h-5 w-5 shrink-0" alt="" />
                <span className="text-sm">
                  Cash prizes:{" "}
                  <span className="font-semibold text-white">
                    ₹5,000 • ₹3,000 • ₹1,000
                  </span>
                </span>
              </li>

              <li className="flex items-center gap-3">
                <img
                  src="/icons/Group.svg"
                  className="h-5 w-5 shrink-0"
                  alt=""
                />
                <span className="text-sm">Free Registration</span>
              </li>

              <li className="flex items-center gap-3">
                <img
                  src="/icons/Gifts.svg"
                  className="h-5 w-5 shrink-0"
                  alt=""
                />
                <span className="text-sm">Goodies and exciting prizes</span>
              </li>

              <li className="flex items-center gap-3">
                <img
                  src="/icons/Task%20alt.svg"
                  className="h-5 w-5 shrink-0"
                  alt=""
                />
                <span className="text-sm">Certificates for participants</span>
              </li>
            </ul>
          </div>

          {/* What to Expect */}
          <div className="rounded-xl border border-[#1f2628] bg-[#0d1112] p-6">
            <div className="mb-5 flex items-center gap-3">
              <img
                src="/icons/Award%20star.svg"
                alt=""
                className="h-6 w-6 shrink-0"
              />
              <h3 className="text-lg font-medium text-white">What to Expect</h3>
            </div>

            <ul className="space-y-4">
              {[
                "Meals and refreshments throughout",
                "24 hours of non-stop coding and innovation",
                "Mentorship from industry experts",
                "Networking with like-minded developers",
              ].map((text) => (
                <li key={text} className="flex items-center gap-3">
                  <img
                    src="/icons/Task%20alt.svg"
                    className="h-5 w-5 shrink-0"
                    alt=""
                  />
                  <span className="text-sm">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
