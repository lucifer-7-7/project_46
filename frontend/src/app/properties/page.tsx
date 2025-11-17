"use client";

import { useEffect, useState } from "react";
import { fetchWithAuth, API_BASE } from "@/lib/api";

type Property = {
  id: number;
  title: string;
  description: string;
  price: string;
  address: string;
  status: string;
  owner: { id: number; username: string } | null;
  created_at: string;
};

export default function PropertiesPage() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      setLoading(true);
      setError(null);
      try {
        const q = new URLSearchParams();
        q.set("page", String(page));
        if (search) q.set("search", search);
        const res = await fetch(`${API_BASE}/api/properties/?${q.toString()}`);
        if (!res.ok) throw new Error("Failed to load properties");
        const data = await res.json();
        if (!mounted) return;
        setProperties(data.results || data);
        setCount(data.count || (data.results ? data.results.length : 0));
      } catch (err: any) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    };
    load();
    return () => { mounted = false; };
  }, [page, search]);

  return (
    <div className="min-h-screen bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-black mb-6">Auction Properties</h1>
        <div className="mb-6 flex gap-4">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by title, address or description"
            className="flex-1 px-4 py-3 bg-black border-2 border-white/20 focus:border-[#00FF41] outline-none text-white"
          />
          <button onClick={() => setPage(1)} className="px-4 py-3 bg-[#00FF41] text-black font-bold">Search</button>
        </div>

        {loading && <div className="text-gray-400">Loading...</div>}
        {error && <div className="text-red-500">{error}</div>}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((p) => (
            <div key={p.id} className="p-6 border border-white/10 bg-black/60">
              <h2 className="text-2xl font-black mb-2">{p.title}</h2>
              <div className="text-sm text-gray-400 mb-3">{p.address}</div>
              <div className="text-lg font-black mb-3">₹ {p.price}</div>
              <p className="text-gray-300 mb-4">{p.description?.slice(0, 140)}</p>
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-400">{p.status}</div>
                <a href={`/properties/${p.id}`} className="text-[#00FF41] font-bold">View</a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between">
          <div className="text-gray-400">Total: {count}</div>
          <div className="flex gap-2">
            <button disabled={page <= 1} onClick={() => setPage((s) => Math.max(1, s - 1))} className="px-4 py-2 border">Prev</button>
            <div className="px-4 py-2 border">{page}</div>
            <button onClick={() => setPage((s) => s + 1)} className="px-4 py-2 border">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
