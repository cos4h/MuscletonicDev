import { IMuscleProps } from "@/interfaces/IMuscleProps";

function ArmLeftButtom({
  className = "",
  idPart,
  namePart,
  handleOnClick,
}: IMuscleProps) {
  return (
    <path
      className={className}
      onClick={() => handleOnClick(namePart, idPart)}
      d="M135.05 418.55C141.32 418.55 148.19 416.1 154.92 411.47V411.46C155.1 411.34 155.33 411.37 155.48 411.52C155.63 411.67 155.65 411.91 155.52 412.08C151.51 417.52 146.59 424.21 144.16 427.73C139.457 435.289 136.843 440.787 134.543 445.625L134.46 445.8L134.457 445.806C130.428 454.264 126.627 462.244 113.47 478.7C101.33 493.83 93.04 500.16 84.26 506.86L84.199 506.906C77.9179 511.692 71.4135 516.648 63.23 525.21C63.21 525.23 63.19 525.25 63.16 525.27C61.56 527.38 58.6 531.44 56.45 535.48C56.4 535.57 56.33 535.64 56.23 535.68C53.2 536.91 50.19 537.52 47.41 537.52C44.92 537.52 42.61 537.03 40.63 536.04C35.84 533.67 32.13 527.92 30.95 521.04C30.94 520.95 30.95 520.86 30.99 520.78C31.81 519.04 32.73 517.24 33.72 515.43C37.33 507.63 41.56 497.2 46.32 485.38L46.43 485.1C57.43 457.87 71.12 423.99 84.49 407.9C92.4 398.38 98.13 392.38 102.32 388L102.5 387.81C108.4 381.64 111.64 378.25 114.13 372.23C114.229 371.995 114.327 371.761 114.425 371.528C114.593 371.127 114.759 370.728 114.93 370.33L115.04 370.08C115.13 369.87 115.36 369.77 115.58 369.84C115.8 369.91 115.92 370.14 115.87 370.36C108.45 400.78 117.14 412.23 125.73 416.48C128.51 417.85 131.64 418.55 135.05 418.55Z"
      fill="currentColor"
    ></path>
  );
}

export default ArmLeftButtom;
