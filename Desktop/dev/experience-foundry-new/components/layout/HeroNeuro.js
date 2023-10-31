/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from 'next/image';

const HeroNeuro = () => {
    return (
        <>
            <section className="section-box">
                <div className="banner-neuro neuro-main gradient-bg">
                    <div className="clouds-container">
                        <Image src="/assets/imgs/page/neuro/cloudneuro.png" alt="Clouds" layout="fill" objectFit="cover" />
                    </div>
                    <div className="container">
                        <div className="ml-50">
                            <div className="image-overlay">
                                <Image src="/assets/imgs/page/neuro/brainbulb.svg" alt="Brain lIghtbulb" width={500} height={500} />
                                <Image src="/assets/imgs/page/neuro/neuroemote.svg" alt="NeuroEmote Logo" width={500} height={500} />
                            </div>

                            <div className="mt-50 text-center mb-200">
                                <Link href="#second-section" legacyBehavior>
                                    <a className="btn icon-arrow-down color-gray-900 ml-20 btn-mb mb-15"></a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-sm-6 col-12" id="second-section">
                                <h2 className="text-heading-2 mb-50">What is it?</h2>
                            </div>

                            <div className="col-lg-6 col-sm-6 col-12">
                                <p className="mb-20">Our EEG Classification Framework uses advanced signal processing and pattern-matching 
                                    software to analyze electroencephalogram (EEG) data. Classifying the brain's 
                                    neuro-electrical signals allows us to repeatedly measure how the brain responds to 
                                    various stimuli, such as products, user interfaces, or stories.</p>
                                 <p>Until recently, bulky equipment and primitive neuro- processing software 
                                    kept EEG analysis within the confines of academic or clinical laboratories. 
                                    NeuroEmote combines portable and user-friendly EEG brain activity monitoring 
                                    with advanced software, delivering insights on emotional response collected 
                                    in your product's natural environment.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroNeuro;
