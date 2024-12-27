import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './SectionCard.module.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import 'swiper/swiper-bundle.css';
import { Autoplay } from 'swiper/modules';



const SectionCard = () => {

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