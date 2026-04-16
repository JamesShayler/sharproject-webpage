import { useEffect, useState, useCallback } from "react";

type ContributionDay = {
  date: string;
  count: number;
};

function calcGrid(count: number, vw: number, vh: number, gap: number) {
  let bestCols = 1;
  let bestSize = 0;

  for (let cols = 1; cols <= count; cols++) {
    const rows = Math.ceil(count / cols);
    const cellW = (vw - gap * (cols - 1)) / cols;
    const cellH = (vh - gap * (rows - 1)) / rows;
    const size = Math.min(cellW, cellH);
    if (size > bestSize) {
      bestSize = size;
      bestCols = cols;
    }
  }

  return bestCols;
}

export default function GitHubGrid() {
  const [data, setData] = useState<ContributionDay[]>([]);
  const [cols, setCols] = useState(53);

  const updateCols = useCallback((count: number) => {
    if (count === 0) return;
    const gap = 4;
    const c = calcGrid(count, window.innerWidth, window.innerHeight, gap);
    setCols(c);
  }, []);

  useEffect(() => {
    const year = new Date().getFullYear().toString();
    fetch("https://github-contributions-api.jogruber.de/v4/JamesShayler")
      .then(res => res.json())
      .then(res => {
        const filtered: ContributionDay[] = (res.contributions as ContributionDay[])
          .filter(day => day.date.startsWith(year))
          .sort((a, b) => a.date.localeCompare(b.date));
        setData(filtered);
        updateCols(filtered.length);
      });
  }, [updateCols]);

  useEffect(() => {
    const onResize = () => updateCols(data.length);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [data.length, updateCols]);

  const getColor = (count: number) => {
    if (count === 0) return "#161b22";
    if (count < 2) return "#0e4429";
    if (count < 5) return "#006d32";
    if (count < 10) return "#26a641";
    return "#39d353";
  };

  const gap = 4;
  const rows = Math.ceil(data.length / cols);

  // Pad data to fill the grid completely
  const totalCells = cols * rows;
  const padded = [
    ...data,
    ...Array(totalCells - data.length).fill({ date: "", count: 0 }),
  ];

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        gap: `${gap}px`,
        zIndex: -1,
      }}
    >
      {padded.map((day, i) => (
        <div
          key={i}
          style={{
            borderRadius: "4px",
            backgroundColor: getColor(day.count),
          }}
        />
      ))}
    </div>
  );
}