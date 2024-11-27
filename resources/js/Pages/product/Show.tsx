import React from "react";
import { Link, usePage } from "@inertiajs/react";

//
import { IconChevronLeft } from "justd-icons";
import AdminPanel from "../../Layouts/AdminPanel";

// models
import { Product } from "../../Models/Product";
import { formatRupiah } from "../../Tools/formatRupiah";

type PageProps = {
    product: Product;
};

export default function UMKMShowPage() {
    const { product } = usePage<PageProps>().props;
    console.log(product);

    return (
        <>
            <AdminPanel titlePage="PRODUK">
                <main className="px-20">
                    <div className="flex items-center mb-5 justify-between bg-white px-5 py-3 rounded-md shadow mt-10">
                        <div>
                            <h1 className="text-xl font-medium ">
                                Detail Produk
                            </h1>
                        </div>
                        <div>
                            <Link href="/products" className="btn btn-ghost">
                                <IconChevronLeft className="size-5" />
                                Kembali
                            </Link>
                        </div>
                    </div>
                    <section className="bg-white p-7 rounded-md shadow mt-10 mb-10">
                        <div className="">
                            <div className="grid grid-cols-3 gap-5 max-h-[400px]">
                                <img
                                    src={`http://127.0.0.1:8000/storage/${product.photo1}`}
                                    alt="Logo"
                                    className="rounded w-full h-full object-cover"
                                />
                                {product.photo2 && (
                                    <img
                                        src={`http://127.0.0.1:8000/storage/${product.photo2}`}
                                        alt="Logo"
                                        className="rounded w-full h-full object-cover"
                                    />
                                )}
                                {product.photo3 && (
                                    <img
                                        src={`http://127.0.0.1:8000/storage/${product.photo3}`}
                                        alt="Logo"
                                        className="rounded w-full h-full object-cover"
                                    />
                                )}
                            </div>
                            <div>
                                <h3 className="text-3xl font-semibold mt-2">
                                    {product.name}{" "}
                                </h3>
                                <p className="text-primary text-xl">
                                    {formatRupiah(product.price)}
                                </p>
                            </div>
                        </div>
                        <div className="mt-5">
                            <p>{product.description}</p>
                        </div>
                        <div className="mt-5">
                            {(product.shopee_link ||
                                product.tokopedia_link) && (
                                <div className="mt-10">
                                    <p className="text-primary font-medium mb-3">
                                        Sosmed
                                    </p>
                                    <ul className="flex gap-8">
                                        {product.shopee_link && (
                                            <li>
                                                <a
                                                    href={product.shopee_link}
                                                    target="_blank"
                                                    className="flex flex-col items-center"
                                                >
                                                    <img
                                                        src="/sosmedIcons/shopee.svg"
                                                        alt="shopee"
                                                        className="w-[40px] h-[40px]"
                                                    />
                                                    Shopee
                                                </a>
                                            </li>
                                        )}
                                        {product.tokopedia_link && (
                                            <li>
                                                <a
                                                    href={
                                                        product.tokopedia_link
                                                    }
                                                    target="_blank"
                                                    className="flex flex-col items-center"
                                                >
                                                    <img
                                                        src="/sosmedIcons/tokopedia.png"
                                                        alt="tokopedia"
                                                        className="w-[40px] h-[40px]"
                                                    />
                                                    Tokopedia{" "}
                                                </a>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </section>
                </main>
            </AdminPanel>
        </>
    );
}
