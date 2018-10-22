import React from 'react'
import Hero from 'components/wssite/home/Hero'
import Testimonials from 'components/wssite/home/Testimonials'
import HowWeWork from '../components/wssite/home/HowWeWork'
import OurProcess from 'components/wssite/home/OurProcess'
import WhatWeDo from 'components/wssite/home/WhatWeDo'


export default ({ hero, coverImage, whatWeDo, howWeWork, clients, process  }) => {
    console.log(`Home Hero ${coverImage}`)
    return (
    <div>
        <Hero data={hero} coverImage={coverImage} />
        <section id="services" class="section is-medium">
            <WhatWeDo data={whatWeDo} />
        </section>

        <section class="section section-feature-grey is-medium">
            <HowWeWork data={howWeWork} />
        </section>

        <section class="section is-medium huge-pb">
            <OurProcess data={process} />
        </section>

        <section id="card-testimonials" class="section section-feature-grey is-medium is-skewed-sm">
            <Testimonials data={clients} />
        </section>
      </div>
    )
}
