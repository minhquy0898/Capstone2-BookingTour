import footer_image from '../../assets/footer_image.png'
import momo from '../../assets/momo.png'
import visa from '../../assets/visa.png'
import shopee from '../../assets/shoppe.png'
import jcb from '../../assets/jcb.png'
import zalo from '../../assets/zalo.png'
import vietel from '../../assets/viettel_money.png'
import pay247 from '../../assets/247.png'
import one_pay from '../../assets/onepay.png'
import smart_pay from '../../assets/smartpay.png'

const Footer = () => {
  return (
    <>
        <div className=" absolute w-full">
            <img src={footer_image} className=' h-[503px] w-full'></img>
        </div>
        <div className=' relative top-20 px-40 py-0'>
            <div className=' flex justify-between'>
                <div className=' flex flex-col  h-[228px] pl-44 pt-20'>
                    <h2 className=' text-4xl'>Thông tin liên hệ:</h2>
                    <p className=' pt-4'>Email:  minhquy0898240032@gmail.com</p>
                    <p className=' pt-4'>Số điện thoại: 0898240032</p>
                    <p className=' pt-4'>Địa chỉ:  254 Đ Nguyễn Văn Linh, Thạc Gián, Thanh Khê, Đà Nẵng, Việt Nam</p>
                    <p className=' pt-4'>Website: https://www.facebook.com/profile.php?id=100018949579212</p>
                </div>
                <div className=' w-[425px] h-[389px]'>
                    <div className=' flex flex-col'>
                        <div>
                            <p className=' text-4xl font-semibold'>Đối tác thanh toán</p>
                        </div>
                        <div className=' pt-4 flex items-center justify-between'>
                            <img src={momo}></img>
                            <img src={visa}></img>
                            <img src={shopee}></img>
                        </div>
                        <div className=' pt-4 flex items-center justify-between'>
                            <img src={jcb}></img>
                            <img src={zalo}></img>
                            <img src={vietel}></img>
                        </div>
                        <div className=' pt-4 flex items-center justify-between'>
                            <img src={pay247}></img>
                            <img src={one_pay}></img>
                            <img src={smart_pay}></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer