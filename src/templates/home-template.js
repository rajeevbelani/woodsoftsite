import React from 'react'
import Hero from 'components/wssite/home/Hero'
import Testimonials from 'components/wssite/home/Testimonials'
import HowWeWork from '../components/wssite/home/HowWeWork'
import OurProcess from 'components/wssite/home/OurProcess'
import WhatWeDo from 'components/wssite/home/WhatWeDo'


export default ({ hero, whatWeDo, howWeWork, testimonials, process  }) => {
    return (
    <div>
        <Hero data={hero} />
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
            <Testimonials data={testimonials} />
        </section>
      </div>
    )
}