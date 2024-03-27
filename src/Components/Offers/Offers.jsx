import offers from '../../assets/offer.png'

const OfferCard = ({ imageSrc, description }) => {
    return (
      <div className="h-[246px] w-[315px] border border-solid border-gray-200 rounded-xl flex flex-col">
        <img src={offers} alt="Offer" />
        <p className=' pl-3 pt-3'>{description}</p>
      </div>
    );
  };
  
  const Offers = () => {
    const offerData = [
      {
        imageSrc: '../../assets/offer.png',
        description: 'Nhận ưu đãi BookingTour 300k khi mở thẻ tín dụng VIB',
      },
      // Add more offer data as needed
    ];
  
    return (
      <div className="mt-6 flex items-center justify-center">
        <div className="w-[1070px] h-[476px]">
          <div className="flex items-center justify-center">
            <p className="pt-10 text-4xl font-medium">Ưu đãi</p>
          </div>
          <div className="mt-8 flex justify-between">
            {offerData.map((offer, index) => (
              <OfferCard key={index} {...offer} />
            ))}
            {offerData.map((offer, index) => (
              <OfferCard key={index} {...offer} />
            ))}
            {offerData.map((offer, index) => (
              <OfferCard key={index} {...offer} />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Offers;
  