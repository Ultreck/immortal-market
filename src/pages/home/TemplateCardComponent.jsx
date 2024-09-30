import { ElementPropTypes } from "@/lib/prop-types";
import { Card, Image } from "@nextui-org/react";
import img from "../../assets/business.webp"


const TemplateCardComponent = ({data}) => {
  console.log(data);
  
  const cardHeights = [
    'h-[280px]',
    'h-52',
    'h-60',
    'h-64',
    'h-72',
    'h-80',
  ];

  const heightClass =
  data < 3 ? cardHeights[0] :
  data === 3 ? cardHeights[1] :
  cardHeights[Math.min(data - 2, cardHeights.length - 1)];

  return (
    <div className={`w-full h-full text-center md:text-start  ${data === 8 && "lg:-translate-y-20"}`}>
       <Card className={`rounded-lg ${heightClass} w-[220px] mx-auto  mb-2 cursor-pointer`}>
          <Image
            removeWrapper
            alt="Card background"
            className="h-full object-cotain rounded-none hover:scale-125"
            src={img}
          />
      </Card>
      <span className="mx-auto">Looking for desing templates</span>

        {/* <iframe
          src="https://v16-cc.capcut.com/ac5aab2c75cad4ab06e7dc1ded7f0d8e/67010686/video/tos/alisg/tos-alisg-ve-8fe9aq-sg/oQfm9uttu9DVXVTE0qFnRIjdB0BaEgBfaJQQqC/?a=348188&bti=NTo2NmY1NDM6&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=2394&bt=1197&cs=0&ds=3&ft=GAAO2Inz7ThiJn.rXq8Zmo&mime_type=video_mp4&qs=0&rc=ODQ4OmZnOTllODhpO2g1OUBpMzx4OXk5cm50czMzOGVkNEBgMWNjLWJeXzYxMS9fMjYxYSNucGZpMmRjZ15gLS1kYi1zcw%3D%3D&vvpl=1&l=021727601997362fdbddc5150000248c2424c7b60000032dc29ab&btag=e00088000"
          frameBorder="0"
          className="text bg-gray-50 w-full aspect-video"
        ></iframe> */}
    </div>
  );
};
TemplateCardComponent.propTypes = ElementPropTypes;
export default TemplateCardComponent;
