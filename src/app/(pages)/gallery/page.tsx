'use client'

import FloatingNavbar from '@/components/ui/FloatingNavbar'
import Footer from '@/components/ui/Footer'
import PageHero from '@/components/ui/PageHero'
import Image from 'next/image'
import { useRef } from 'react'

const images = [
    // gallery
    '/gallery/20260721_124733.jpg',
    '/gallery/20260721_124816.jpg',
    '/gallery/20260721_125134.jpg',
    '/gallery/20260721_125248.jpg',
    '/gallery/20260721_125705.jpg',
    '/gallery/20260721_125909.jpg',
    '/gallery/20260721_130141.jpg',
    '/gallery/20260721_130329.jpg',
    '/gallery/20260721_130554.jpg',
    '/gallery/20260721_130627.jpg',
    '/gallery/20260721_130631.jpg',
    '/gallery/20260721_130716.jpg',
    '/gallery/20260721_130830.jpg',
    '/gallery/20260721_131037.jpg',
    '/gallery/20260721_131516.jpg',
    '/gallery/20260721_131638.jpg',
    '/gallery/20260721_131920.jpg',
    '/gallery/20260721_132255.jpg',

    // Grama Shakti
    '/gallery/grama_shakti_1.jpg',
    '/gallery/grama_shakti_2.jpg',
    '/gallery/grama_shakti_3.jpg',
    '/gallery/grama_shakti_4.jpg',
    '/gallery/grama_shakti_5.jpg',
    '/gallery/grama_shakti_6.jpg',
    '/gallery/grama_shakti_7.jpg',
    '/gallery/grama_shakti_8.jpg',
    '/gallery/grama_shakti_9.jpg',
    '/gallery/grama_shakti_10.jpg',
    '/gallery/grama_shakti_11.jpg',
    '/gallery/grama_shakti_12.jpg',
    '/gallery/Mat_donation1.jpeg',
    '/gallery/Mat_donation2.jpeg',
    '/gallery/Mat_donation3.jpeg',
    '/gallery/Mat_donation4.jpeg',


    // Gudivada
    '/ourwork/gudivada1.jpg',
    '/ourwork/gudivada2.jpg',

    // Kolakaluru
    '/ourwork/kolakaluru.jpg',
    '/ourwork/kolakaluru2.jpg',
    '/ourwork/kolakaluru3.jpg',
    '/ourwork/kolakaluru4.jpg',
    '/ourwork/kolakaluru5.jpg',
    '/ourwork/kolakaluru6.jpg',

    // Munnangi
    '/ourwork/munnangi1.jpg',
    '/ourwork/munnangi2.jpg',
    '/ourwork/munnangi3.jpg',


    // Tailoring & Skill Development
    '/ourwork/tailor1.jpg',
    '/ourwork/tailor2.jpg',

    // Digital Udaan
    '/ourwork/digital_udaan.jpg',
    '/ourwork/digital_udaan2.jpg',

    // Livelihood
    '/ourwork/plates1.jpg',
    '/ourwork/plates2.jpg',
    '/ourwork/plates3.jpg',

    // Education
    //   '/ourwork/education.jpg',

    // Climate
    '/ourwork/climate.jpeg',

    // Food Distribution
    '/ourwork/food1.png',
    '/ourwork/food2.png',
    '/ourwork/food3.png',
    '/ourwork/food4.png',

    // Healthcare
    '/ourwork/health.png',
]

const videos = [
    'https://pub-dbfec4489394492fb244b93720ae6c64.r2.dev/Leaf_Plates.mp4',    
    'https://pub-dbfec4489394492fb244b93720ae6c64.r2.dev/Skill_Development_Opening.mp4',
    'https://pub-dbfec4489394492fb244b93720ae6c64.r2.dev/Leaf_Plates_2.mp4',
    'https://pub-dbfec4489394492fb244b93720ae6c64.r2.dev/NEW%20machine%20reel%20%20kazeepet.mp4',
    'https://pub-dbfec4489394492fb244b93720ae6c64.r2.dev/HAND%20KAZEEPET%20MACHINE%20REEL.mp4',
]

export default function GalleryPage() {
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

    return (
        <div className="w-full bg-white">
            <FloatingNavbar />

            <PageHero
                eyebrow="Our Moments"
                title="Community"
                titleAccent="Gallery"
                subtitle="A glimpse into HAND's initiatives, community engagement, livelihood programs, Climate Change, and impact across rural India."
                backgroundImage="/gallery/hero.JPG"
            />

            <section
                className="section-pad"
                style={{ background: 'var(--clr-cream)' }}
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-10">

                    <div className="text-center mb-14">
                        <h2
                            className="text-4xl lg:text-5xl font-700 mb-5"
                            style={{ color: 'var(--clr-earth)' }}
                        >
                            Capturing Our Journey
                        </h2>

                        <p
                            className="max-w-3xl mx-auto text-lg leading-8"
                            style={{ color: 'var(--clr-text)' }}
                        >
                            Every photograph tells a story of empowerment,
                            sustainability, and hope. Explore the people,
                            places and projects shaping a better future.
                        </p>
                    </div>

                    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className={`group relative mb-6 break-inside-avoid overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${index % 5 === 0
                                    ? "aspect-[4/5]"
                                    : index % 3 === 0
                                        ? "aspect-[4/6]"
                                        : "aspect-[4/3]"
                                    }`}
                            >
                                <Image
                                    src={image}
                                    alt={`Gallery ${index + 1}`}
                                    fill
                                    className="object-cover transition-all duration-700 group-hover:scale-110"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Image Number */}
                                {/* <div className="absolute bottom-5 left-5 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                                    <span className="text-white text-lg font-semibold">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                </div> */}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Portrait Videos */}
            <div className="mt-24 mb-15">
                <div className="text-center mb-14">
                    <h2
                        className="text-4xl lg:text-5xl font-700 mb-5"
                        style={{ color: 'var(--clr-earth)' }}
                    >
                        Stories in Motion
                    </h2>

                    <p
                        className="max-w-3xl mx-auto text-lg leading-8"
                        style={{ color: 'var(--clr-text)' }}
                    >
                        Experience our work through the voices, moments, and stories
                        captured from communities across our initiatives.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {videos.map((video, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-3xl bg-black shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                        >
                            <video
                                ref={(el) => {
                                    videoRefs.current[index] = el
                                }}
                                src={video}
                                controls
                                playsInline
                                preload="metadata"
                                onPlay={() => {
                                    videoRefs.current.forEach((videoEl, i) => {
                                        if (i !== index && videoEl) {
                                            videoEl.pause()
                                        }
                                    })
                                }}
                                className="w-full aspect-[9/16] object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    )
}