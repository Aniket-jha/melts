"use client";

import { useState } from 'react';

import Data from "@data/sections/promo-video.json";

import ModalVideo from 'react-modal-video'
import 'react-modal-video/css/modal-video.css'

const PromoVideoSection = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
        {/* video */}
        <section className="sb-video">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="sb-mb-90">
                            <span className="sb-suptitle sb-mb-15" dangerouslySetInnerHTML={{__html : Data.subtitle}} />
                            <h2 className="sb-mb-30" dangerouslySetInnerHTML={{__html : Data.title}} />
                            <p className="sb-text sb-mb-30" dangerouslySetInnerHTML={{__html : Data.description}} />
                            
                            {/* button */}
                         
                            {/* button end */}
                        </div>
                    </div>
                    <div className="col-lg-6 align-self-center">
                        <div className="sb-illustration-7 sb-mb-90">
                            <div className="sb-interior-frame">
                                <img src={Data.image.url} alt={Data.image.alt} className="sb-interior" />
                               
                            </div>
                            
                            <div className="sb-cirkle-1"></div>
                            <div className="sb-cirkle-2"></div>
                            <div className="sb-cirkle-3"></div>
                            <div className="sb-cirkle-4"></div>
                        </div>
                    </div>
                </div>
            </div>

            
        </section>
        {/* video end */}
    </>
  );
};

export default PromoVideoSection;