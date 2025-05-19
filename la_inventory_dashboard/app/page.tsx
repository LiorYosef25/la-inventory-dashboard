import { useState } from "react";

const inventoryData = [
  { sku: "DS-D2055LR-G", currentStock: 7, monthlyUsage: 0.125, monthsLeft: 56, endDate: "2029-12-23", reorderDate: "2029-09-23" },
  { sku: "DS-D2055LU-Y", currentStock: 11, monthlyUsage: 0.375, monthsLeft: 29.33, endDate: "2027-10-15", reorderDate: "2027-07-15" },
  { sku: "DS-D5ABKY2-S", currentStock: 13, monthlyUsage: 5.64, monthsLeft: 2.3, endDate: "2025-07-26", reorderDate: "2025-04-26" },
  { sku: "DS-D5AC9C5-8S2", currentStock: 6, monthlyUsage: 0.375, monthsLeft: 16, endDate: "2026-09-10", reorderDate: "2026-06-10" },
  { sku: "DS-D5B65RB/C", currentStock: 1, monthlyUsage: 0.2, monthsLeft: 5, endDate: "2025-08-23", reorderDate: "2025-05-23" }
];

export default function Page() {
  const [search, setSearch] = useState("");

  const filtered = inventoryData.filter((item) =>
    item.sku.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-4 max-w-5xl mx-auto">
      <input
        placeholder="חפש לפי מק"ט..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border rounded px-4 py-2 w-full"
      />

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">מק"ט</th>
            <th className="border px-4 py-2">יתרה נוכחית</th>
            <th className="border px-4 py-2">צריכה חודשית</th>
            <th className="border px-4 py-2">חודשים שנותרו</th>
            <th className="border px-4 py-2">תאריך סיום</th>
            <th className="border px-4 py-2">הזמנה מומלצת</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((item) => (
            <tr key={item.sku} className={item.monthsLeft < 3 ? "bg-red-100" : ""}>
              <td className="border px-4 py-2">{item.sku}</td>
              <td className="border px-4 py-2">{item.currentStock}</td>
              <td className="border px-4 py-2">{item.monthlyUsage.toFixed(2)}</td>
              <td className="border px-4 py-2">{item.monthsLeft.toFixed(1)}</td>
              <td className="border px-4 py-2">{item.endDate}</td>
              <td className="border px-4 py-2">{item.reorderDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}