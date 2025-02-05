import JumbotronVersion1 from "@/components/jumbotrons/jumbotron-version-1";
import Navbar from "@/components/navbar";

export default function HomeHeader() {
  const jumbotronTitle = process.env.WEBSITE_TITLE || "";

  return (
    <header>
      <JumbotronVersion1
        title={jumbotronTitle}
        text="Добре дошли в нашия онлайн магазин за облекло! Тук ще намерите най-новите модни тенденции и качествени продукти на достъпни цени. Разгледайте нашата колекция и открийте перфектното облекло за всеки повод."
        imageUrl="/images/sea.webp"
        imageAlt={jumbotronTitle}
        buttonText="Избрани продукти"
        buttonUrl="/products?tab=featured"
        opacity="40"
      >
        <Navbar />
      </JumbotronVersion1>
    </header>
  );
}