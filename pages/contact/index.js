import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from "react-redux";
import { Input } from '../../components';
import API from '../../api.json';
import Link from "next/link";

export default function Contact() {


  const { t }                             = useTranslation();
  
  const [name, setName]                   = useState('');
  const [mobile, setMobile]               = useState('');
  const [email, setEmail]                 = useState('');

  const [loadData, setLoadData]           = useState(false);
  const langVal                           = useSelector((state) => state.langCars.langCars);

  const handleSubmit = e => {

    e.preventDefault();

    setLoadData(true);

  }

    return (
      <div className={'min-page'}>
        <div className='container text-center w-full py-5'>

            <div className='row'>

                <div className='col-md-6 col-xs-12'>
                    <div className='map-site'>
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin" width="100%" height="100%" aria-hidden="false"></iframe>
                    </div>
                </div>

                <div className='col-md-6 col-xs-12'>
                  
                  <div className='form-auth w-full px-3'>

                    <form onSubmit={handleSubmit} className='my-5'>

                        <div className='my-4'>
                          <Input 
                            data={{ name :  t('username'), title : "name" }}
                            setVal={(val)=> { setName(val) }}
                          />
                        </div>

                        <div className='my-4'>
                          <Input 
                            data={{ name :  t('email'), title : "email" }}
                            setVal={(val)=> { setEmail(val) }}
                          />
                        </div>
                        
                        <div className='my-4'>
                          <Input 
                            data={{ name :  t('mobile'), title : "mobile" }}
                            setVal={(val)=> { setMobile(val) }}
                          />
                        </div>

                        <div className='flex items-center justify-center my-5'>
                            <button className='btn-button btn-default mt-6 w-40' type="submit">
                              { loadData ? <div class="spinner-border spinner-border-sm" role="status"><span class="visually-hidden">Loading...</span></div> : t('sent') }
                            </button>
                        </div>

                    </form>

                    <div className='d-flex align-items-center justify-content-center social my-5'>
                        {
                          API.social.map((item) => (
                              <Link target="_blank" key={item.id} href={item.link} style={{ backgroundColor : item.color, color : item.icon === 'icon-snapchat' ? '#000' : '#fff' }} className={`d-flex align-items-center justify-content-center mx-2`}>
                                <span className={item.icon} />
                              </Link>
                          ))
                        }
                    </div>

                  </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
  