import { productsData } from "@/src/constant/data";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";

type tProps = {
  params: { slug: string };
};

export default async function ProductPage({ params }: tProps) {
  const { slug } = await params;
  const product = productsData.find((item) => item.slug === slug);
  console.log();

  if (!product) {
    notFound();
  }

  return (
    <Suspense fallback={<ProductLoading />}>
      <main className=" min-h-[calc(100vh-100px)] bg-gray-50 py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto p-8">
          <div className="space-y-6 col-span-3">
            <h1 className="text-3xl  font-semibold text-eipp-primary">
              {product?.title}
            </h1>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {product?.description}
            </p>
            <section className="mt-8">
              <h2 className="text-xl font-semibold text-eipp-primary mb-5">
                Key Capabilities
              </h2>
              <ul className="space-y-4">
                {product?.list?.map((point: string, index: number) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition"
                  >
                    <span className="text-eipp-secondary font-bold text-xl mt-0.5">
                      •
                    </span>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </main>
    </Suspense>
  );
}

const ProductLoading = () => {
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto ">
        <div className="space-y-6">
          <div className="h-12 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-32 bg-gray-200 rounded animate-pulse"></div>
          <div className="space-y-4">
            <div className="h-8 bg-gray-200 rounded animate-pulse w-1/2"></div>
            {[1, 2, 3, 4, 5].map((item) => (
              <div
                key={item}
                className="h-20 bg-gray-200 rounded animate-pulse"
              ></div>
            ))}
          </div>
        </div>
        <div className="h-[520px] bg-gray-200 rounded-2xl animate-pulse"></div>
      </div>
    </main>
  );
};
