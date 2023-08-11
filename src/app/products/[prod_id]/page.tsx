"use client";
import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { StarIcon } from "@heroicons/react/20/solid";
import { Image as IImage } from "sanity";
import { urlForImage } from "../../../../sanity/lib/image";
import { getProductData } from "@/lib/getProductData";
import Quantity from "../../../../components/ui/quantity";
import AddtoCart from "../../../../components/ui/addtoCart";
import Heading from "../../../../components/ui/heading";

interface Iprod {
  _id: string;
  product_name: string;
  prod_desc: string;
  prod_price: number;
  prod_stock: number;
  cat_name: string;
  prod_image: IImage;
  prod_image_gallery: [
    {
      _key: string;
      asset: {
        _ref: string;
        _type: string;
      };
    }
  ];
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default async function Product({
  params,
}: {
  params: { prod_id: string };
}) {
  const [colors, setColors] = useState([
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ]);
  const [selectedColor, setSelectedColor] = useState(colors[0].name);
  const products: Iprod[] = await getProductData(params.prod_id as string);

  return (
    <>
      <div className="grid w-full grid-cols-1 items-center gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8 mt-6">
        <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
          <img
            src={urlForImage(products[0].prod_image).url()}
            alt="detail product image"
            className=" max-h-[500px] mx-auto h-auto lg:h-96 xl:h-96 object-cover object-center"
          />
        </div>
        <div className="sm:col-span-8 lg:col-span-7">
          <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
            {products[0].product_name}
          </h2>
          <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 mt-1">
            {products[0].cat_name}
          </span>
          <section aria-labelledby="information-heading" className="mt-2">
            <p className="text-xl font-semibold text-gray-900">
              Rs. {products[0].prod_price}
            </p>
            <hr className="text-gray-500 mt-2" />
            <div className="mt-2">
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        4 > rating ? "text-orange-400" : "text-gray-200",
                        "h-5 w-5 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <a
                  href="#"
                  className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  (11) reviews
                </a>
              </div>
            </div>
          </section>

          <section aria-labelledby="options-heading" className="mt-4">
            <form>
              <div>
                <h4 className="text-sm font-bold text-gray-900">
                  SELECT COLOR
                </h4>
                <RadioGroup
                  value={selectedColor}
                  onChange={setSelectedColor}
                  className="mt-2"
                >
                  <RadioGroup.Label className="sr-only">
                    Choose a color
                  </RadioGroup.Label>
                  <span className="flex items-center space-x-3">
                    {colors.map((color: any) => (
                      <RadioGroup.Option
                        key={color.name}
                        value={color}
                        className={({ active, checked }) =>
                          classNames(
                            color.selectedClass,
                            active && checked ? "ring ring-offset-1" : "",
                            !active && checked ? "ring-2" : "",
                            "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                          )
                        }
                      >
                        <RadioGroup.Label as="span" className="sr-only">
                          {color.name}
                        </RadioGroup.Label>
                        <span
                          aria-hidden="true"
                          className={classNames(
                            color.class,
                            "h-8 w-8 rounded-full border border-black border-opacity-10"
                          )}
                        />
                      </RadioGroup.Option>
                    ))}
                  </span>
                </RadioGroup>
              </div>
              <div className="mt-2">
                <Quantity product={products[0]} />
              </div>
              <hr className="text-gray-500 mt-5" />
              <div>
                <AddtoCart product={products[0]} />
              </div>
            </form>
          </section>
        </div>
      </div>
      <div className="mt-10 mb-10">
        <Heading overlay="Overview" head="Product Information" />
        <div className="flex lg:flex-row xl:flex-row flex-col py-5 gap-x-5">
          <div className="lg:flex-2 xl:flex-2 text-sm lg:text-lg xl:text-lg font-bold text-gray-600 tracking-wide">
            PRODUCT DETAILS
          </div>
          <div className="lg:flex-8 xl:flex-8 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>
    </>
  );
}
