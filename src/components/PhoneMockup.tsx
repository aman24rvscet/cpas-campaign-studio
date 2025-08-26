import campaignImage from "@/assets/campaign-image.jpg";

const PhoneMockup = () => {
  return (
    <div className="relative w-80 h-[640px] mx-auto">
      {/* Phone Frame */}
      <div className="absolute inset-0 bg-gray-900 rounded-[3rem] p-2 shadow-phone">
        <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden relative">
          {/* Screen Content */}
          <div className="w-full h-full bg-gray-100 relative">
            {/* Status Bar */}
            <div className="h-12 bg-white flex items-center justify-between px-6 pt-2">
              <div className="flex items-center space-x-1">
                <div className="w-1 h-1 bg-gray-800 rounded-full"></div>
                <div className="w-1 h-1 bg-gray-800 rounded-full"></div>
                <div className="w-1 h-1 bg-gray-800 rounded-full"></div>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-4 h-2 bg-gray-800 rounded-sm"></div>
                <div className="w-6 h-3 border border-gray-800 rounded-sm">
                  <div className="w-4 h-1.5 bg-gray-800 rounded-sm m-0.5"></div>
                </div>
              </div>
            </div>
            
            {/* Chat Header */}
            <div className="h-16 bg-teal flex items-center px-4 text-white">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-lg font-semibold">
                B
              </div>
              <div className="ml-3">
                <div className="font-semibold">Brand Store</div>
                <div className="text-xs opacity-90">online</div>
              </div>
            </div>
            
            {/* Chat Messages */}
            <div className="flex-1 p-4 space-y-4 bg-gray-50">
              {/* Incoming message */}
              <div className="flex">
                <div className="bg-white rounded-2xl px-4 py-3 max-w-xs shadow-soft">
                  <div className="w-32 h-3 bg-gray-300 rounded mb-2"></div>
                  <div className="w-24 h-3 bg-gray-300 rounded mb-2"></div>
                  <div className="w-28 h-3 bg-gray-300 rounded"></div>
                </div>
              </div>
              
              {/* Campaign Image */}
              <div className="flex">
                <div className="bg-white rounded-2xl p-2 shadow-soft">
                  <img 
                    src={campaignImage} 
                    alt="Campaign" 
                    className="w-48 h-32 object-cover rounded-xl"
                  />
                </div>
              </div>
              
              {/* RCS Rich Card */}
              <div className="flex">
                <div className="bg-white rounded-2xl p-3 max-w-xs shadow-soft border-l-4 border-teal">
                  <div className="w-28 h-3 bg-gradient-primary rounded mb-3"></div>
                  <div className="space-y-2">
                    <div className="w-full h-2 bg-gray-200 rounded"></div>
                    <div className="w-3/4 h-2 bg-gray-200 rounded"></div>
                  </div>
                  <div className="flex space-x-2 mt-3">
                    <div className="flex-1 h-8 bg-gradient-primary rounded-lg"></div>
                    <div className="flex-1 h-8 bg-gray-200 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Input Area */}
            <div className="h-16 bg-white border-t border-gray-200 flex items-center px-4">
              <div className="flex-1 h-10 bg-gray-100 rounded-full"></div>
              <div className="w-10 h-10 bg-teal rounded-full ml-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;