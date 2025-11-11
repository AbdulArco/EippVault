import { solutionsData } from "@/src/constant/data";
import { notFound } from "next/navigation";
import { Suspense } from "react";

type tProps = {
  params: { slug: string };
};

export default async function SolutionPage({ params }: tProps) {
  const { slug } = await params;
  const solution = solutionsData.find((item) => item.slug === slug);
  if (!solution) {
    notFound();
  }

  return (
    <Suspense fallback={<div>loading</div>}>
      <main className="min-h-[calc(100vh-70px)] bg-gray-50 px-6 md:px-20 py-16">
        <div className="max-w-6xl mx-auto p-8">
          <h1 className="text-3xl  font-semibold text-primary-dark mb-6">
            {solution?.title}
          </h1>

          <p className="text-gray-700 leading-relaxed mb-10 text-md">
            {solution?.disc}
          </p>

          <section>
            <h2 className="text-xl font-semibold text-primary-dark mb-5">
              Key Benefits
            </h2>
            <ul className="space-y-3">
              {solution?.list.map((point: string, index: number) => (
                <li
                  key={index}
                  className="flex items-start gap-3 bg-gray-200 border border-gray-100 rounded-lg p-3 hover:shadow transition"
                >
                  <span className="text-primary font-bold text-xl mt-0.5">
                    •
                  </span>
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </Suspense>
  );
}
