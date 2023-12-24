import "./index.css";
import React from "react";
import Header from "./components/header";
import { Footer } from "./components/footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          img: "../../public/img/R6.jpeg",
          name: "Кровать TATRAN",
          description:
            "Основание из полированной нержавеющей стали, придает оригинальный парящий эффект.",
          price: "120.000",
          category: "beds",
        },
        {
          id: 2,
          img: "../../public/img/R4.jpeg",
          name: "Кресло VILORA",
          description:
            "Мягкое и уютное, аккуратное и стильное. Упругие подушки сиденья и приятная на ощупь ткань. ",
          price: "21.000",
          category: "chairs",
        },
        {
          id: 3,
          img: "../../public/img/R5.jpeg",
          name: "Стол MENU",
          description:
            "Европейский дуб - отличается особой прочностью и стабильностью.",
          price: "34.000",
          category: "tables",
        },
        {
          id: 4,
          img: "../../public/img/R2D2.jpeg",
          name: "Диван ASKESTA",
          description:
            "Благодаря защелкивающемуся механизму диван легко раскладывается в комфортную кровать",
          price: "68.000",
          category: "sofa",
        },
        {
          id: 5,
          img: "../../public/img/R1.jpeg",
          name: "Кресло LUNAR",
          description:
            "Прекрасно переносит солнечные лучи, перепады влажности и любые осадки",
          price: "40.000",
          category: "chairs",
        },
        {
          id: 6,
          img: "../../public/img/R3.jpeg",
          name: "Шкаф Nastan",
          description:
            "Мебель может быть оснащена разнообразными системами подсветки.",
          price: "80.000",
          category: "closets",
        },
        {
          id: 8,
          img: "../../public/img/carrera.jpeg",
          name: "Кровать с подъемным механизмом Carrera",
          description:
            "Решение для тех, кто предпочитает гармоничное сочетание минимализма и уюта. Кровать, изголовье и основание которой обиты тканью изысканного бежевого цвета, а невысокие ножки сделаны из светлого дерева.",
          price: "70.000",
          category: "beds",
        },
        {
          id: 9,
          img: "../../public/img/tableSantorini+chairs.jpeg",
          name: "Стол Santorini + 4 стула Renzo",
          description:
            "Комплект мебели, в который входит раскладной стол Santorini (Санторини) и 4 стула Renzo (Рэнцо), с первого взгляда поражает своим изысканным дизайном.",
          price: "250.000",
          category: "tables",
        },
        {
          id: 10,
          img: "../../public/img/lester.jpeg",
          name: "Диван Lester угловой, светло-серый",
          description:
            "Угловой диван Lester (Лестер) в светло-серой коже имеет регулируемые подголовники, которые можно установить в комфортное для сидящих положение.",
          price: "268.000",
          category: "sofa",
        },
        {
          id: 11,
          img: "../../public/img/rosy.jpeg",
          name: "Комплект мягкой мебели Rosy, бежевый/мята",
          description:
            "Комплект мягкой мебели Rosy (Рози) бежевого цвета. В комплекте представлено три предмета: трехместный диван, двухместный диван и кресло с подушками контрастного мятного оттенка.",
          price: "100.000",
          category: "sofa",
        },
        {
          id: 12,
          img: "../../public/img/savona.jpeg",
          name: "Диван-трансформер Savona",
          description:
            "Раскладной угловой диван-трансформер Savona (Савона) с обивкой светло-голубого цвета – отличное решение для гостиной, столовой и любой другой комнаты.",
          price: "100.000",
          category: "sofa",
        },
        {
          id: 13,
          img: "../../public/img/dresden.jpeg",
          name: "Стол письменный Dresden",
          description:
            "Угловой письменный стол Dresden (Дрезден) выполнен в лучших традициях современного стиля. Универсальная модель, которую можно собрать как с правым углом, так и с левым.",
          price: "52.000",
          category: "tables",
        },
        {
          id: 14,
          img: "../../public/img/boston.jpeg",
          name: "Кресло и оттоманка Boston",
          description:
            "Стильное кресло Boston (Бостон) с поворотным механизмом украсит современные интерьеры и лофт-пространства.",
          price: "67.000",
          category: "chairs",
        },
        {
          id: 15,
          img: "../../public/img/sandy.jpeg",
          name: "Кресло Sandy",
          description:
            "Кресло Sandy (Сэнди) понравится всем ценителям яркой комфортной мебели.Его обивка изготовлена из ткани кремового оттенка, элегантного и благородного, хорошо гармонирующего с другими цветами.",
          price: "40.000",
          category: "chairs",
        },
      ],
    };
  }
  render() {
    return (
      <div className="Wrapper">
        <Header />
        <Footer />
      </div>
    );
  }
}
export default App;
