import React, { useEffect, useState } from 'react';
import './Clients.css';
import useFetchPartners from '@/app/hooks/more/useRecentPartners';
import { Partner } from '@/app/utils/interfaces';
import { DNA } from 'react-loader-spinner';

const Clients = () => {
    const [limit, setLimit] = useState(12);
    const [offset, setOffset] = useState(0);
    const [allPartner, setAllPartner] = useState<Partner[]>([]);
    const { loading, error, partners } = useFetchPartners(limit, offset);
    const [activeTab, setActiveTab] = useState<'companies' | 'journals'>('companies');
    const [isMobileView, setIsMobileView] = useState<number>(12);
    const [contentCount, setContentCount] = useState<number>(12)

    const handleResize = () => {
        if (window.innerWidth < 1000) {
            setIsMobileView(4);
            setContentCount(4)
        } else {
            setIsMobileView(12);
        }
    };

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize); // Cleanup listener on unmount
    }, []);

    const journalImages: string[] = [
        "/images/JournalsNew/13.png",
        '/images/JournalsNew/1.png',
        '/images/JournalsNew/2.1.png',
        '/images/JournalsNew/3.avif',
        '/images/JournalsNew/4.png',
        '/images/JournalsNew/5.png',
        "/images/JournalsNew/6.png",
        "/images/JournalsNew/7.png",
        "/images/JournalsNew/8.png",
        "/images/JournalsNew/9.png",
        "/images/JournalsNew/10.png",
        "/images/JournalsNew/11.jpeg",
    ];

    useEffect(() => {
        if (activeTab === 'companies') {
            setAllPartner(prev => [...prev, ...partners]);
        }
    }, [partners, activeTab]);

    const renderLogos = (type: 'companies' | 'journals') => {
        return (
            <div className="logo-grid">
                {loading && type === 'companies' && !allPartner.length && (
                    <DNA
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="dna-loading"
                        wrapperStyle={{}}
                        wrapperClass="dna-wrapper"
                    />
                )}
                {type === 'companies' && allPartner.length ? (
                    allPartner.map((item, index) => {
                        if (index < isMobileView) {
                            return (
                                <div key={index} className="logo-item">
                                    <img src={item.logo_link} alt="Company logo" />
                                </div>
                            );
                        }
                        return null;
                    })
                ) : type === 'journals' ? (
                    journalImages.map((imagePath, index) => {
                        if (index < isMobileView) {
                            return (
                                <div key={index} className="logo-item">
                                    <img src={imagePath} alt={`Journal ${index + 1}`} />
                                </div>
                            )
                        }
                    })
                ) : null}
            </div>
        );
    };

    return (
        <>
            <div className="companies-journals-container">
                <div className="tabs clients-tab">
                    <button
                        className={activeTab === 'companies' ? 'active' : ''}
                        onClick={() => setActiveTab('companies')} style={{marginTop:'10px'}}
                    >
                        Our Global Partners
                    </button>
                    <button
                        className={activeTab === 'journals' ? 'active' : ''}
                        onClick={() => setActiveTab('journals')} style={{marginTop:'10px' , border:'1px solid #342e5b'}}
                    >
                        High Impact Publications
                    </button>
                </div>

                <div className="content">
                    {activeTab === 'companies'
                        ? renderLogos('companies')
                        : renderLogos('journals')}
                </div>
            </div>
        </>
    );
};

export default Clients;
