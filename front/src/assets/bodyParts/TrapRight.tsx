import { IMuscleProps } from "@/interfaces/IMuscleProps";

function TrapRight({
  className = "",
  idPart,
  namePart,
  handleOnClick,
}: IMuscleProps) {
  return (
    <path
      className={className}
      onClick={() => handleOnClick(namePart, idPart)}
      d="M395.89 217.17C395.84 217.17 395.75 217.15 395.75 217.15V217.14C384.68 213.38 379.06 209.6 379.06 199.34V178.65C379.06 178.48 379.16 178.32 379.32 178.25C379.48 178.18 379.66 178.21 379.79 178.33C382.83 181.15 388.48 186.15 392.19 188.01C395.081 189.475 402.834 192.729 409.776 195.641L410.13 195.79L412.34 196.72C412.95 196.977 413.555 197.233 414.15 197.484C417.946 199.085 421.335 200.515 422.96 201.25C425.92 202.61 430.04 205.78 433.67 208.64L433.91 208.83C434.02 208.918 434.128 209.002 434.233 209.084C434.367 209.188 434.497 209.289 434.62 209.39C434.75 209.51 434.81 209.71 434.75 209.88C434.69 210.06 434.52 210.17 434.34 210.17C433.89 210.16 433.451 210.16 433.001 210.16C415.031 210.16 399.12 215.95 396.05 217.14C396 217.17 395.94 217.17 395.89 217.17Z"
      fill="currentColor"
    ></path>
  );
}

export default TrapRight;