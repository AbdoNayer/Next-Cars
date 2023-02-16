import Link from "next/link";
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export default  function ItemCar ({ data }) {
    
    const { t }              = useTranslation();

    return (
        <div className='item-car old-shadow my-3 overflow-hidden rounded-3' data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration={data.duration}> 
            <div className='img-car overflow-hidden'>
                <Image src={data.img[0]} quality={100} alt='logo' width='100' height='100' />
            </div>
            <div className="info-car p-3 text-center">
                <h5 className="second-color m-0">{data.nameCar}</h5>
                {/* <span className="d-block my-3 fw-bold">{data.price}</span> */}
                <Link href={{ pathname : `${`/details/${data.id}`}`, query: data }} 
                className="btn-button mt-3 mb-2 w-100 d-flex align-items-center justify-content-center bg-second">{t('details')}</Link>
            </div>
        </div>
    )

}