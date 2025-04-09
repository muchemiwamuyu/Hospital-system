const Card = ({ 
    text = "CARD", 
    bgColor = "gray", 
    overlayColor = "black",
    width = "w-48", 
    height = "h-64" 
  }) => {
    return (
      <div
        className={`relative drop-shadow-xl overflow-hidden rounded-xl m-4 ${width} ${height}`}
        style={{ backgroundColor: bgColor }}
      >
        {/* Overlay */}
        <div
          className="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-xl inset-0.5"
          style={{ backgroundColor: overlayColor }}
        >
          <div className="absolute bg-white w-64 h-36 rounded ">
            <h2 className="text-2xl text-black text-center font-bold">Emergency Calls</h2>
            <div className="text-black space-x-2 space-y-2 m-2">
                <label className="text-red-700 font-bold">call:</label>
                <input type="text" readOnly value={911} className="border-2 border-black rounded text-center" />
                <label className="text-red-700 font-bold">call:</label>
                <input type="text" readOnly value={999} className="border-2 border-black rounded text-center" />
                <label className="text-red-700 font-bold">call:</label>
                <input type="text" readOnly value={"+254720100200"} className="border-2 border-black rounded text-center" />
            </div>
          </div>
        </div>
  
        {/* Blurred Effect */}
        <div className="absolute w-56 h-48 bg-white blur-[50px] -left-1/2 -top-1/2"></div>
      </div>
    );
  };
  
  export default Card;
  