import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './SectionCard.module.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import 'swiper/swiper-bundle.css';
import { Autoplay } from 'swiper/modules';
import { useLayoutEffect } from 'react';
import ScrollTrigger from 'gsap';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);


const SectionCard = () => {

  useLayoutEffect(() => {
    gsap.fromTo(
      `.${styles.organicText}`,
      {
        opacity: 0,
        y: 50,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: `.${styles.organicText}`,
          start: 'top 70%',
          end: 'bottom 10%',
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      `.${styles.vegetableSpan}`,
      {
        opacity: 0,
        scale: 0.8,
        x: -30,
      },
      {
        opacity: 1,
        scale: 1,
        x: 0,
        duration: 1.2,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: `.${styles.vegetableSpan}`,
          start: 'top 70%',
          end: 'bottom 10%',
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      `.${styles.organicParagraph}`,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: `.${styles.organicParagraph}`,
          start: 'top 70%',
          end: 'bottom 10%',
          scrub: true,
        },
      }
    );
  }, []);

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function fetchProducts() {
            try {
                setLoading(true)
                const response = await axios.get('/products.json')
                setProducts(response.data)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        fetchProducts()
    }, [])

    if(loading) {
      return (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      );
    }


    return (
      <section>
        <div className={styles.vegetableContainer}>
          <h2 className={styles.organicText}>
            organic <span className={styles.vegetableSpan}>vegetables</span>
          </h2>
          <p className={styles.organicParagraph}>
            Our organic vegetables are hand-picked from local farms and
            delivered straight to your doorstep, ensuring that you get the
            freshest and most nutritious produce possible.
          </p>
          <div className={styles.vegetableCardList}>
            <Swiper
              spaceBetween={0}
              speed={1000}
              centeredSlides={true}
              loop={true}
              modules={[Autoplay]}
              autoplay= {{
                delay: 1500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 8,
                },
                768: {
                  slidesPerView: 2,
                  slidesPerGroup: 1,
                  spaceBetween: 20,
                //   loopFillGroupWithBlank: true
                },
                1280: {
                  slidesPerGroup: 1,
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              touchEventsTarget="container"
            >
              {products.map((product) => (
                <SwiperSlide style={{ display: 'flex', justifyContent: 'center'}} key={product.id}>
                  <li  className={styles.vegetableCard}>
                    <h3>{product.name}</h3>
                    <p>{product.price}&nbsp;UAH</p>
                    <img src={product.image} alt={product.name} />
                  </li>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    );
}

export default SectionCard