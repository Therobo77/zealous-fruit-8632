import React from "react";
import Items from "../Home/Items";
import Carousel from "react-elastic-carousel";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";

const makeupData = [
  {
    image_url:
      "https://cdn07.nnnow.com/web-images/large/styles/JY27S21V62P/1649999368078/1.jpg",
    image2_url:
      "https://cdn16.nnnow.com/web-images/thumbnail/styles/JY27S21V62P/1649999368063/2.jpg",
    brandname: "NATASHA DENONA",
    productDescription: "Eye Pods",
    price: 6500,
  },
  {
    image_url:
      "https://cdn17.nnnow.com/web-images/large/styles/2LJHP9ZCBV8/1645680487451/1.jpg",
    image2_url:
      "https://cdn15.nnnow.com/web-images/thumbnail/styles/2LJHP9ZCBV8/1645680487446/3.jpg",
    brandname: "NATASHA DENONA",
    productDescription: "Macro Tech Eye Crayon - Brown",
    price: 2350,
  },
  {
    image_url:
      "https://cdn18.nnnow.com/web-images/large/styles/9K63PXQWLFJ/1649998952391/1.jpg",
    image2_url:
      "https://cdn08.nnnow.com/web-images/thumbnail/styles/9K63PXQWLFJ/1649998952385/2.jpg",
    brandname: "NATASHA DENONA",
    productDescription: "I Need A Rose Lip Gloss - Daphne",
    price: 2600,
  },
  {
    image_url:
      "https://cdn16.nnnow.com/web-images/large/styles/LXIPKNCS9XP/1649999294883/1.jpg",
    image2_url:
      "https://cdn11.nnnow.com/web-images/large/styles/LXIPKNCS9XP/1649999294867/2.jpg",
    brandname: "NATASHA DENONA",
    productDescription: "I Need A Rose Lip Gloss - Daphne",
    price: 2600,
  },
  {
    image_url:
      "https://cdn08.nnnow.com/web-images/large/styles/CZLPWJPNK1M/1644913480935/1.jpg",
    image2_url:
      "https://cdn15.nnnow.com/web-images/large/styles/CZLPWJPNK1M/1644913480926/2.jpg",
    brandname: "SEPHORA COLLECTION",
    productDescription: "Recycled Plastic Sharpener",
    price: 400,
  },
  {
    image_url:
      "https://cdn03.nnnow.com/web-images/large/styles/DST8JG893JI/1645680474489/1.jpg",
    image2_url:
      "https://cdn19.nnnow.com/web-images/large/styles/DST8JG893JI/1645680474479/2.jpg",
    brandname: "NATASHA DENONA",
    productDescription: "Glam Face Palette - Dark",
    price: 5800,
  },
  {
    image_url:
      "https://cdn00.nnnow.com/web-images/large/styles/WX88ZXZP9J1/1646888841078/1.jpg",
    image2_url:
      "https://cdn06.nnnow.com/web-images/large/styles/WX88ZXZP9J1/1646888841074/3.jpg",
    brandname: "HUDA BEAUTY",
    productDescription: "Mini Nudies 5 Piece Kit",
    price: 53750,
  },
  {
    image_url:
      "https://cdn01.nnnow.com/web-images/large/styles/EDUVRFR9P45/1646888841513/1.jpg",
    image2_url:
      "https://cdn19.nnnow.com/web-images/large/styles/EDUVRFR9P45/1646888841511/3.jpg",
    brandname: "HUDA BEAUTY",
    productDescription: "GloWish Luminous Pressed Powder - 02 Fair Light",
    price: 2900,
  },
  {
    image_url:
      "https://cdn00.nnnow.com/web-images/large/styles/0IAKBM2KYZ6/1645680487478/1.jpg",
    image2_url:
      "https://cdn13.nnnow.com/web-images/large/styles/0IAKBM2KYZ6/1645680487469/2.jpg",
    brandname: "NATASHA DENONA",
    productDescription: "Mini Xenon Eyeshadow Palette",
    price: 2450,
  },
];
export default function Tools() {
  const breakpointes = [
    {
      width: 1,
      itemsToShow: 3,
    },
    {
      width: 550,
      itemsToShow: 4,
    },
    {
      width: 768,
      itemsToShow: 5,
    },
    {
      width: 1200,
      itemsToShow: 5,
    },
  ];
  return (
    <>
      <Navbar />

      <div style={{ width: "100%", marginTop: "20px" }}>
        <img
          src="https://logan.nnnow.com/content/dam/nnnow-project/27-sep-2021/Tools_BrushesDesktop.jpg"
          alt=""
          width="100%"
        />
      </div>
      <br />
      <br />
      <div style={{ display: "flex" ,width:"100%" }}>
        <div
          style={{
            paddingTop: "90px",
            width: "50%",
            fontSize: "25px",
            fontWeight: "700",
          }}
        >
          <li>BRUSHES</li>
          <li>TOOLS</li>
          <li> VEGAN</li>
        </div>
        <div>
          <img
            src="https://logan.nnnow.com/content/dam/nnnow-project/21-april-2020/makeup-tools&acc/15APR20_TOOLS_CB_STRIP1_DESK.jpg"
            alt=""
            width="100%"
          />
          <Carousel
            breakPoints={breakpointes}
            autoPlay={false}
            autoPlaySpeed={50000}
          >
            {makeupData.map((e, i) => (
              <Items e={e} />
            ))}
          </Carousel>
          <br />
          <img
            src="https://logan.nnnow.com/content/dam/nnnow-project/21-april-2020/makeup-tools&acc/15APR20_SC_CB_STRIP2_DESK.jpg"
            alt=""
            width="100%"
          />
          <Carousel
            breakPoints={breakpointes}
            autoPlay={false}
            autoPlaySpeed={50000}
          >
            {makeupData.map((e, i) => (
              <Items e={e} />
            ))}
          </Carousel>
          <br />
          <img
            src="https://logan.nnnow.com/content/dam/nnnow-project/21-april-2020/makeup-tools&acc/15APR20_SC_CB_STRIP3_DESK.jpg"
            alt=""
            width="100%"
          />
          <Carousel
            breakPoints={breakpointes}
            autoPlay={false}
            autoPlaySpeed={50000}
          >
            {makeupData.map((e, i) => (
              <Items e={e} />
            ))}
          </Carousel>
          <br />
          <img
            src="https://logan.nnnow.com/content/dam/nnnow-project/21-april-2020/makeup-tools&acc/15APR20_SC_CB_STRIP4_DESK.jpg"
            alt=""
            width="100%"
          />
          <Carousel
            breakPoints={breakpointes}
            autoPlay={false}
            autoPlaySpeed={50000}
          >
            {makeupData.map((e, i) => (
              <Items e={e} />
            ))}
          </Carousel>
          <br />
        </div>
      </div>
      <Footer />
    </>
  );
}
