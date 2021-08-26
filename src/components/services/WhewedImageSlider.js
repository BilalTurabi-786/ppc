import React from "react";
import { Carousel } from "react-bootstrap";
import "font-awesome/css/font-awesome.min.css";

export default function WhewedImageSlider() {
  //     const [value, setValue] = useState(0);

  //         const onChange = value => {
  //         setValue(value);
  //   }
  return (
    <>
      <section
        className="testimonial-section ptb-100"
        style={{
          backgroundImage: "url(img/testimonial-bg.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "center cover",
        }}
      >

                    <Carousel className="ml-5">
                      <Carousel.Item> 
                        
                        <img
                            src="img/3.jpg"
                            alt="client"
                            width="1250"
                            height="700"
                            
                          />
                        
                      </Carousel.Item>
                      <Carousel.Item>
                      <img
                        src="img/4.jpg"
                        alt="client"
                        width="1250"
                         height="700"
                      />
                       
                      </Carousel.Item>
                      <Carousel.Item>
                      <img
                          src="img/5.jpg"
                          alt="client"
                          width="1250"
                          height="700"
                        />
                       
                      </Carousel.Item>

                      <Carousel.Item>
                      <img
                          src="img/2.jpg"
                          alt="client"
                          width="1250"
                          height="700"
                        />
                       
                      </Carousel.Item>
                      <Carousel.Item>
                      <img
                          src="img/6.jpg"
                          alt="client"
                          width="1250"
                          height="700"
                        />
                       
                      </Carousel.Item>
                      <Carousel.Item>
                      <img
                          src="img/8.jpg"
                          alt="client"
                          width="1250"
                          height="700"
                        />
                       
                      </Carousel.Item>

                    </Carousel>


        
      </section>
    </>
  );
}
