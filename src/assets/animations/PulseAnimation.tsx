export const PulseAnimation = ({pulseColor}:{pulseColor:string}) => {
  return (
    <div>
      <div className="relative inline-flex">
        <div className={`w-4 h-4 ${pulseColor} rounded-full`}></div>
        <div className={`w-4 h-4 ${pulseColor} rounded-full absolute top-0 left-0 animate-ping`}></div>
        <div className={`w-4 h-4 ${pulseColor} rounded-full absolute top-0 left-0 animate-pulse`}></div>
      </div>
    </div>
  );
};
