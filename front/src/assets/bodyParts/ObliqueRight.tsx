import { IMuscleProps } from "@/interfaces/IMuscleProps";

function ObliqueRight({
  className = "",
  idPart,
  namePart,
  handleOnClick,
}: IMuscleProps) {
  return (
    <path
      className={className}
      onClick={() => handleOnClick(namePart, idPart)}
      d="M460.77 307.59C460.92 307.45 461.15 307.43 461.32 307.55L461.33 307.56C461.5 307.68 461.56 307.9 461.48 308.09C457.17 317.96 459.26 331.07 460.16 336.67L460.18 336.77C460.78 340.36 461.65 343.87 462.79 347.19C462.81 347.23 462.81 347.28 462.81 347.33V347.43C461.66 353.7 456.4 377.07 436.99 414.44C427.27 433.74 429.95 453.72 432.56 473.03V473.13C433.34 478.83 433.97 483.58 434.39 488.44C434.96 495.23 436.01 504.88 437.33 515.59C437.36 515.82 437.2 516.03 436.97 516.07C435.14 516.39 433.26 516.54 431.39 516.54C423.28 516.54 415.13 513.64 409.94 508.67C404.69 503.63 393.02 488.29 397.95 454.63C400.36 438.26 397.2 420.73 394.4 405.27L394.37 405.08C392.62 395.32 391.11 386.89 391.32 380.55C391.32 380.51 391.32 380.44 391.34 380.36C391.34 380.29 391.35 380.2 391.37 380.11C391.41 379.35 391.48 378.57 391.55 377.8C391.55 377.78 391.55 377.72 391.58 377.63C392.6 371.342 404.153 361.386 417.528 349.861L417.676 349.733C428.442 340.462 440.614 329.981 451.07 318.29L451.14 318.21C451.17 318.17 451.21 318.13 451.24 318.1C452.33 316.97 453.41 315.75 454.46 314.47C456.35 312.19 458.42 309.78 460.77 307.59Z"
      fill="currentColor"
    ></path>
  );
}

export default ObliqueRight;
