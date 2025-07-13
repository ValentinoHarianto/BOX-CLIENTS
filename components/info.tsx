'use client'

import { useEffect, useState } from "react";
import { Product } from "@/types";
import Currency from "./ui/currency";
import { Button } from "./ui/button";
import { MessageCircleIcon } from "lucide-react";
import Link from "next/link";

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    // dijalankan hanya di client
    const origin = window.location.origin;
    setUrl(`${origin}/product/${data.id}`);
  }, [data.id]);

  const telp = process.env.NEXT_PUBLIC_TELP;
  const pesan = `Halo saya tertarik dengan produk ${data.name} - ${data.price} dengan link ${url}`;
  const link = `https://wa.me/${telp}?text=${encodeURIComponent(pesan)}`;

  return (
    <div>
      <h1 className="font-bold text-3xl text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data?.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="mt-10 flex items-center gap-x-3">
        {url && (
          <Link href={link} target="_blank">
            <Button className="flex items-center gap-x-2">
              Chat Penjual
              <MessageCircleIcon size={20} />
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Info;
