import React from 'react';

import MaxWidthLayout from '../layouts/MaxWidthLayout';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';


const HeroLayout = ({ headerRight, hero, main }) => (
    <>
        <div className="l-hero__hero">
            <MaxWidthLayout>
                <Header>
                    {headerRight}
                </Header>
                {hero}
            </MaxWidthLayout>
        </div>

        <main className="l-hero__content">
            <MaxWidthLayout>
                {main}
            </MaxWidthLayout>
        </main>

        <Footer />
    </>
);

export default HeroLayout;