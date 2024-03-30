import { IMuscleProps } from "@/interfaces/IMuscleProps";

function ChestRight({
  className = "",
  idPart,
  namePart,
  handleOnClick,
}: IMuscleProps) {
  return (
    <path
      className={className}
      onClick={() => handleOnClick(namePart, idPart)}
      d="M372.63 332.76C372.54 332.74 372.44 332.69 372.44 332.69H372.42C362.8 328.48 354.41 322.23 347.51 314.13C341.26 306.77 337.82 297.23 337.82 287.27V237.61C337.81 237.61 337.77 232.46 342.02 227.28C346.71 221.57 354.54 218.15 365.29 217.13C380.986 215.63 389.895 218.259 394.676 219.669L394.68 219.67L394.95 219.75C395.15 219.82 395.35 219.88 395.54 219.93C395.58 219.93 395.63 219.95 395.69 219.97C395.7 219.97 395.79 220 395.79 220C395.83 220.01 395.87 220.02 395.92 220.04C395.94 220.05 396.03 220.08 396.05 220.08C396.16 220.12 396.26 220.15 396.37 220.18L396.51 220.23C396.547 220.241 396.582 220.253 396.616 220.265C396.677 220.287 396.737 220.307 396.8 220.32C400.85 221.72 408.53 224.66 414.88 228.7C425.617 235.498 429.988 241.297 436.595 250.063L436.6 250.07L437.03 250.64C439.98 254.53 443.32 258.93 447.88 264.29C452.95 270.24 463.4 282.49 476.75 291.54C478.37 292.64 480.32 293.67 482.55 294.61C482.74 294.69 482.85 294.89 482.81 295.09C482.78 295.3 482.6 295.45 482.4 295.45C467.48 295.9 459.09 304.62 452.39 312.76C451.52 313.84 450.6 314.86 449.5 316.06C449.5 316.07 449.48 316.09 449.48 316.09C449.47 316.1 449.455 316.112 449.44 316.125C449.425 316.137 449.41 316.15 449.4 316.16C449.34 316.2 449.3 316.23 449.25 316.3L449.03 316.55C448.98 316.603 448.931 316.657 448.882 316.71C448.784 316.817 448.687 316.923 448.58 317.03C448.59 317.04 448.51 317.12 448.44 317.19C435.13 330.8 417.05 338.17 398.85 338.17C391.6 338.17 384.32 337 377.32 334.58H377.28C377.276 334.576 377.271 334.574 377.266 334.572C377.257 334.57 377.246 334.57 377.24 334.57C375.57 333.88 373.9 333.24 372.63 332.76Z"
      fill="currentColor"
    ></path>
  );
}

export default ChestRight;
