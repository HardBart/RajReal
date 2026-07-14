import {
  ShieldCheck,
  Handshake,
  Clock,
  Users,
  FileWarning,
  Scale3D,
  Landmark,
  Globe2,
  Gavel,
  Home,
  Building2,
  HeartHandshake,
  ScrollText,
  Banknote,
  MapPin,
  type LucideIcon,
} from "lucide-react";
import type { StockPhoto } from "@/data/images";
import { STOCK_PHOTOS } from "@/data/images";

export type LandingIconItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type LandingContentBlockData = {
  eyebrow: string;
  title: string;
  description: string;
  points?: string[];
  image: keyof typeof STOCK_PHOTOS;
  reverse?: boolean;
  tint?: boolean;
};

export type LandingData = {
  slug: string;
  /** Wpisany do <title>; szablon layoutu dokleja „— RajReal" */
  metaTitle: string;
  metaDescription: string;
  breadcrumbLabel: string;
  /** Landing lokalizacyjny (miasto/region) — dokłada dane firmy w JSON-LD. */
  areaFocus?: "olsztyn" | "bialystok";
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    image: keyof typeof STOCK_PHOTOS;
    points: { icon: LucideIcon; label: string }[];
  };
  blocks: LandingContentBlockData[];
  iconGrid: {
    eyebrow: string;
    title: string;
    description?: string;
    items: LandingIconItem[];
  };
  cta: {
    title: string;
    description: string;
  };
};

const DEFAULT_HERO_POINTS = [
  { icon: ShieldCheck, label: "Transparentny proces" },
  { icon: Handshake, label: "Uczciwa wycena" },
  { icon: Clock, label: "Tempo dopasowane do Ciebie" },
];

export const LANDINGS: Record<string, LandingData> = {
  "skup-udzialow": {
    slug: "skup-udzialow",
    metaTitle: "Skup udziałów w nieruchomościach — Warmia, Mazury, Podlasie",
    metaDescription:
      "Wykupujemy udziały w mieszkaniach, domach i gruntach na terenie województw warmińsko-mazurskiego i podlaskiego. Transparentny proces, bez zgody pozostałych współwłaścicieli.",
    breadcrumbLabel: "Skup udziałów",
    hero: {
      eyebrow: "Skup udziałów · Warmia, Mazury, Podlasie",
      title:
        "Sprzedaj swój udział w nieruchomości bez zgody pozostałych współwłaścicieli",
      description:
        "Wykupujemy udziały w mieszkaniach, domach i gruntach niezależnie od tego, czy pozostali współwłaściciele są gotowi do współpracy. Jasne warunki, bez presji czasowej.",
      image: "buildingFacade",
      points: DEFAULT_HERO_POINTS,
    },
    blocks: [
      {
        eyebrow: "Dlaczego wykup udziału",
        title: "Współwłasność bywa źródłem wieloletnich sporów",
        description:
          "Jako współwłaściciel masz pełne prawo rozporządzać swoim udziałem samodzielnie — zgoda pozostałych współwłaścicieli nie jest do tego potrzebna. Analizujemy stan prawny nieruchomości i przedstawiamy warunki wykupu dopasowane do Twojej sytuacji.",
        points: [
          "Wykupujemy udział niezależnie od stanowiska pozostałych współwłaścicieli.",
          "Rozumiemy specyfikę zniesienia współwłasności i podziału majątku spadkowego.",
          "Obejmujemy również udziały obciążone sporem lub konfliktem rodzinnym.",
          "Nie wymagamy dokumentów na etapie pierwszego kontaktu.",
        ],
        image: "documentsOnDesk",
      },
      {
        eyebrow: "Jak to działa",
        title: "Bezpieczny proces, krok po kroku",
        description:
          "Po otrzymaniu zgłoszenia analizujemy stan prawny udziału — w tym sytuacje spadkowe i sporne — i przedstawiamy pisemną propozycję warunków. Transakcję finalizujemy u notariusza, zgodnie z obowiązującymi przepisami.",
        points: [
          "Bezpłatna, niezobowiązująca analiza sytuacji.",
          "Jasna propozycja warunków na piśmie.",
          "Finalizacja transakcji u notariusza.",
        ],
        image: "quietConversationAtTable",
        reverse: true,
      },
    ],
    iconGrid: {
      eyebrow: "Kiedy pomagamy",
      title: "Typowe sytuacje naszych klientów",
      items: [
        {
          icon: Users,
          title: "Współwłaściciele nie mogą dojść do porozumienia",
          description:
            "Gdy rozmowy o sprzedaży całości utknęły w martwym punkcie, wykup Twojego udziału pozwala zakończyć temat bez czekania na zgodę innych.",
        },
        {
          icon: FileWarning,
          title: "Odziedziczyłeś udział w nieruchomości",
          description:
            "Spadek dzielony między kilku spadkobierców często oznacza udziały, którymi trudno samodzielnie zarządzać na odległość.",
        },
        {
          icon: Scale3D,
          title: "Chcesz zakończyć współwłasność bez sądu",
          description:
            "Sądowe zniesienie współwłasności bywa długie i kosztowne. Wykup udziału to zwykle szybsza droga do zamknięcia sprawy.",
        },
      ],
    },
    cta: {
      title: "Porozmawiajmy o Twoim udziale w nieruchomości",
      description:
        "Pierwsza rozmowa i analiza sytuacji są bezpłatne i niezobowiązujące.",
    },
  },

  "skup-mieszkan": {
    slug: "skup-mieszkan",
    metaTitle: "Skup mieszkań — Warmia, Mazury, Podlasie",
    metaDescription:
      "Kupujemy mieszkania w województwie warmińsko-mazurskim i podlaskim — w każdym stanie technicznym i sytuacji prawnej. Spokojny, transparentny proces bez presji.",
    breadcrumbLabel: "Skup mieszkań",
    hero: {
      eyebrow: "Skup mieszkań · Warmia, Mazury, Podlasie",
      title: "Sprzedaj mieszkanie spokojnie, we własnym tempie",
      description:
        "Kupujemy mieszkania w blokach, kamienicach i nowym budownictwie — niezależnie od stanu technicznego czy sytuacji prawnej. Bez oglądania tłumu potencjalnych kupców i bez miesięcy oczekiwania.",
      image: "modernApartmentInterior",
      points: DEFAULT_HERO_POINTS,
    },
    blocks: [
      {
        eyebrow: "Dla kogo",
        title: "Kiedy sprzedaż mieszkania na wolnym rynku bywa trudna",
        description:
          "Nie każde mieszkanie łatwo sprzedać przez ogłoszenie. Zajmujemy się sytuacjami, w których standardowa sprzedaż się przeciąga lub jest utrudniona.",
        points: [
          "Mieszkanie wymaga remontu lub jest w trudnym stanie technicznym.",
          "Sytuacja rodzinna lub prawna komplikuje sprzedaż.",
          "Zależy Ci na przewidywalnym terminie zamknięcia sprawy.",
          "Mieszkasz daleko i nie chcesz prowadzić sprzedaży na odległość.",
        ],
        image: "documentsOnDesk",
      },
      {
        eyebrow: "Jak to działa",
        title: "Przejrzysty proces od zgłoszenia do aktu notarialnego",
        description:
          "Analizujemy sytuację mieszkania i przedstawiamy pisemną propozycję. Nie wymagamy dokumentów na etapie pierwszego kontaktu — wymienimy je bezpiecznie później.",
        points: [
          "Bezpłatna analiza i niezobowiązująca propozycja.",
          "Elastyczny termin finalizacji dopasowany do Ciebie.",
          "Transakcja u notariusza, zgodnie z prawem.",
        ],
        image: "keysHandover",
        reverse: true,
      },
    ],
    iconGrid: {
      eyebrow: "Co kupujemy",
      title: "Mieszkania w różnych sytuacjach",
      items: [
        {
          icon: Home,
          title: "Mieszkania do remontu",
          description:
            "Stan techniczny nie jest przeszkodą — kupujemy również lokale wymagające gruntownego remontu.",
        },
        {
          icon: ScrollText,
          title: "Mieszkania z sytuacją prawną",
          description:
            "Sprawy spadkowe, współwłasność czy inne kwestie formalne nie wykluczają transakcji.",
        },
        {
          icon: Globe2,
          title: "Sprzedaż na odległość",
          description:
            "Obsługujemy właścicieli mieszkających w innym mieście lub za granicą.",
        },
      ],
    },
    cta: {
      title: "Chcesz spokojnie sprzedać mieszkanie?",
      description:
        "Opisz sytuację — przygotujemy niezobowiązującą propozycję dopasowaną do Twoich potrzeb.",
    },
  },

  "skup-domow": {
    slug: "skup-domow",
    metaTitle: "Skup domów — Warmia, Mazury, Podlasie",
    metaDescription:
      "Kupujemy domy jednorodzinne w województwie warmińsko-mazurskim i podlaskim — niezależnie od stanu i wieku budynku. Transparentny proces, spokojne tempo.",
    breadcrumbLabel: "Skup domów",
    hero: {
      eyebrow: "Skup domów · Warmia, Mazury, Podlasie",
      title: "Sprzedaj dom bez remontów i bez pośpiechu",
      description:
        "Kupujemy domy jednorodzinne niezależnie od stanu technicznego i wieku budynku. Nie musisz nic naprawiać ani przygotowywać nieruchomości do sprzedaży.",
      image: "singleFamilyHouse",
      points: DEFAULT_HERO_POINTS,
    },
    blocks: [
      {
        eyebrow: "Dla kogo",
        title: "Dom, którego sprzedaż się przeciąga",
        description:
          "Domy bywają trudniejsze do sprzedania niż mieszkania — ze względu na stan, lokalizację lub sytuację prawną. Zajmujemy się właśnie takimi przypadkami.",
        points: [
          "Dom wymaga remontu lub modernizacji.",
          "Nieruchomość odziedziczona przez kilka osób.",
          "Zależy Ci na pewnym, przewidywalnym terminie sprzedaży.",
          "Nie chcesz zajmować się prezentacjami i negocjacjami.",
        ],
        image: "documentsOnDesk",
      },
      {
        eyebrow: "Jak to działa",
        title: "Spokojny proces oparty na jasnych zasadach",
        description:
          "Analizujemy sytuację domu i przedstawiamy pisemną propozycję warunków. Cały proces prowadzimy transparentnie, z finalizacją u notariusza.",
        points: [
          "Bezpłatna, niezobowiązująca analiza.",
          "Jasne warunki na piśmie.",
          "Elastyczny termin transakcji.",
        ],
        image: "quietConversationAtTable",
        reverse: true,
      },
    ],
    iconGrid: {
      eyebrow: "Co kupujemy",
      title: "Domy w różnym stanie i sytuacji",
      items: [
        {
          icon: Building2,
          title: "Domy do remontu",
          description:
            "Kupujemy również budynki wymagające napraw lub gruntownej modernizacji.",
        },
        {
          icon: HeartHandshake,
          title: "Domy ze spraw spadkowych",
          description:
            "Odziedziczone nieruchomości i współwłasność to sytuacje, które dobrze znamy.",
        },
        {
          icon: Globe2,
          title: "Sprzedaż na odległość",
          description:
            "Obsługujemy właścicieli, którzy nie mieszkają w pobliżu nieruchomości.",
        },
      ],
    },
    cta: {
      title: "Rozważasz sprzedaż domu?",
      description:
        "Opisz swoją sytuację — przedstawimy spokojną, niezobowiązującą propozycję.",
    },
  },

  "skup-spadkow": {
    slug: "skup-spadkow",
    metaTitle: "Skup nieruchomości spadkowych — Warmia, Mazury, Podlasie",
    metaDescription:
      "Kupujemy nieruchomości i udziały ze spraw spadkowych w województwie warmińsko-mazurskim i podlaskim. Pomagamy zakończyć temat odziedziczonej nieruchomości.",
    breadcrumbLabel: "Nieruchomości spadkowe",
    hero: {
      eyebrow: "Nieruchomości spadkowe · Warmia, Mazury, Podlasie",
      title: "Zakończ temat odziedziczonej nieruchomości",
      description:
        "Kupujemy nieruchomości i udziały pochodzące ze spraw spadkowych — również gdy postępowanie nie jest jeszcze zakończone, a spadkobierców jest kilku.",
      image: "documentsOnDesk",
      points: DEFAULT_HERO_POINTS,
    },
    blocks: [
      {
        eyebrow: "Dla spadkobierców",
        title: "Odziedziczona nieruchomość bywa źródłem napięć",
        description:
          "Kilku spadkobierców, różne oczekiwania, czasem konflikt — a do tego formalności. Pomagamy uporządkować sytuację i zakończyć ją w sposób jasny dla wszystkich stron.",
        points: [
          "Kupujemy całą nieruchomość lub Twój udział w spadku.",
          "Działamy również przed zakończeniem postępowania spadkowego.",
          "Rozumiemy dynamikę spraw rodzinnych i konfliktów.",
          "Nie wymagamy dokumentów przy pierwszym kontakcie.",
        ],
        image: "quietConversationAtTable",
      },
      {
        eyebrow: "Jak to działa",
        title: "Prowadzimy sprawę spokojnie i zgodnie z prawem",
        description:
          "Analizujemy stan prawny spadku i przedstawiamy pisemną propozycję. Finalizację przeprowadzamy u notariusza, dbając o poprawność formalną.",
        points: [
          "Bezpłatna analiza sytuacji spadkowej.",
          "Jasna propozycja warunków.",
          "Bezpieczna finalizacja u notariusza.",
        ],
        image: "keysHandover",
        reverse: true,
      },
    ],
    iconGrid: {
      eyebrow: "Typowe sytuacje",
      title: "Kiedy pomagamy w sprawach spadkowych",
      items: [
        {
          icon: ScrollText,
          title: "Postępowanie w toku",
          description:
            "Możemy zacząć rozmowy jeszcze przed formalnym zakończeniem sprawy spadkowej.",
        },
        {
          icon: Users,
          title: "Kilku spadkobierców",
          description:
            "Kupujemy Twój udział, nawet jeśli pozostali spadkobiercy mają inne plany.",
        },
        {
          icon: Globe2,
          title: "Spadkobierca za granicą",
          description:
            "Prowadzimy sprawy z osobami mieszkającymi poza Polską, na odległość.",
        },
      ],
    },
    cta: {
      title: "Odziedziczyłeś nieruchomość i chcesz zakończyć temat?",
      description:
        "Opisz sytuację — pomożemy uporządkować sprawę spokojnie i zgodnie z prawem.",
    },
  },

  "skup-zadluzonych": {
    slug: "skup-zadluzonych",
    metaTitle: "Skup zadłużonych nieruchomości — Warmia, Mazury, Podlasie",
    metaDescription:
      "Kupujemy zadłużone nieruchomości w województwie warmińsko-mazurskim i podlaskim. Zadłużenie nie wyklucza transakcji — analizujemy każdą sytuację indywidualnie.",
    breadcrumbLabel: "Nieruchomości zadłużone",
    hero: {
      eyebrow: "Nieruchomości zadłużone · Warmia, Mazury, Podlasie",
      title: "Zadłużenie nie musi blokować sprzedaży nieruchomości",
      description:
        "Kupujemy nieruchomości obciążone zaległościami, kredytem hipotecznym lub innymi zobowiązaniami. Analizujemy strukturę zadłużenia i proponujemy rozwiązanie.",
      image: "buildingFacade",
      points: DEFAULT_HERO_POINTS,
    },
    blocks: [
      {
        eyebrow: "Dla właścicieli",
        title: "Sprzedaż zadłużonej nieruchomości jest możliwa",
        description:
          "Zaległości czynszowe, kredyt hipoteczny czy inne obciążenia utrudniają sprzedaż na wolnym rynku — ale jej nie wykluczają. Sprawdzamy sytuację i szukamy realnego rozwiązania.",
        points: [
          "Analizujemy strukturę i wysokość zadłużenia.",
          "Proponujemy rozwiązanie uwzględniające istniejące obciążenia.",
          "Działamy transparentnie, bez ukrytych warunków.",
          "Nie wymagamy dokumentów przy pierwszym kontakcie.",
        ],
        image: "documentsOnDesk",
      },
      {
        eyebrow: "Jak to działa",
        title: "Uporządkowany proces mimo obciążeń",
        description:
          "Po analizie sytuacji przedstawiamy pisemną propozycję uwzględniającą zadłużenie. Finalizację prowadzimy u notariusza, dbając o poprawność rozliczeń.",
        points: [
          "Bezpłatna analiza sytuacji finansowej nieruchomości.",
          "Jasna propozycja z uwzględnieniem obciążeń.",
          "Bezpieczna finalizacja u notariusza.",
        ],
        image: "quietConversationAtTable",
        reverse: true,
      },
    ],
    iconGrid: {
      eyebrow: "Typowe sytuacje",
      title: "Jakie obciążenia analizujemy",
      items: [
        {
          icon: Banknote,
          title: "Zaległości czynszowe",
          description:
            "Narosłe zaległości wobec wspólnoty lub spółdzielni nie przekreślają transakcji.",
        },
        {
          icon: Landmark,
          title: "Kredyt hipoteczny",
          description:
            "Uwzględniamy hipotekę w strukturze transakcji i proponowanych warunkach.",
        },
        {
          icon: Gavel,
          title: "Inne obciążenia prawne",
          description:
            "Sprawdzamy również inne wpisy i zobowiązania obciążające nieruchomość.",
        },
      ],
    },
    cta: {
      title: "Masz zadłużoną nieruchomość i chcesz zamknąć temat?",
      description:
        "Opisz sytuację — przeanalizujemy obciążenia i przedstawimy realną propozycję.",
    },
  },

  "skup-wspolwlasnosci": {
    slug: "skup-wspolwlasnosci",
    metaTitle:
      "Skup współwłasności i zniesienie współwłasności — Warmia, Mazury, Podlasie",
    metaDescription:
      "Pomagamy zakończyć współwłasność nieruchomości w województwie warmińsko-mazurskim i podlaskim. Wykupujemy udziały również w sytuacjach spornych.",
    breadcrumbLabel: "Współwłasność",
    hero: {
      eyebrow: "Współwłasność · Warmia, Mazury, Podlasie",
      title: "Zakończ współwłasność, która ciągnie się latami",
      description:
        "Współwłasność bez porozumienia potrafi blokować decyzje przez lata. Wykupujemy udziały i pomagamy uporządkować sytuację — również gdy między współwłaścicielami jest konflikt.",
      image: "quietConversationAtTable",
      points: DEFAULT_HERO_POINTS,
    },
    blocks: [
      {
        eyebrow: "Dla współwłaścicieli",
        title: "Zniesienie współwłasności bez wieloletnich sporów",
        description:
          "Sądowe zniesienie współwłasności bywa długie i kosztowne. Wykup udziału to często szybsza i spokojniejsza droga do zakończenia sprawy.",
        points: [
          "Wykupujemy Twój udział bez zgody pozostałych współwłaścicieli.",
          "Działamy również w sytuacjach konfliktu i braku komunikacji.",
          "Rozumiemy przepisy o zniesieniu współwłasności.",
          "Nie wymagamy dokumentów na etapie pierwszego kontaktu.",
        ],
        image: "documentsOnDesk",
      },
      {
        eyebrow: "Jak to działa",
        title: "Jasny proces zamiast przeciągających się negocjacji",
        description:
          "Analizujemy strukturę współwłasności i przedstawiamy pisemną propozycję wykupu Twojego udziału. Finalizację prowadzimy u notariusza.",
        points: [
          "Bezpłatna analiza struktury współwłasności.",
          "Jasna propozycja wykupu udziału.",
          "Bezpieczna finalizacja u notariusza.",
        ],
        image: "keysHandover",
        reverse: true,
      },
    ],
    iconGrid: {
      eyebrow: "Typowe sytuacje",
      title: "Kiedy pomagamy przy współwłasności",
      items: [
        {
          icon: Users,
          title: "Konflikt między współwłaścicielami",
          description:
            "Wykup udziału pozwala wyjść ze współwłasności bez czekania na porozumienie stron.",
        },
        {
          icon: Scale3D,
          title: "Impas decyzyjny",
          description:
            "Gdy nie da się uzgodnić sprzedaży całości, kupujemy poszczególne udziały.",
        },
        {
          icon: HeartHandshake,
          title: "Współwłasność po spadku",
          description:
            "Porządkujemy sytuacje, w których nieruchomość odziedziczyło kilka osób.",
        },
      ],
    },
    cta: {
      title: "Chcesz wyjść ze współwłasności?",
      description:
        "Opisz sytuację — zaproponujemy wykup udziału i spokojne zakończenie sprawy.",
    },
  },

  "skup-nieruchomosci-olsztyn": {
    slug: "skup-nieruchomosci-olsztyn",
    metaTitle: "Skup nieruchomości Olsztyn — mieszkania, domy, udziały",
    metaDescription:
      "Skup nieruchomości w Olsztynie i na Warmii i Mazurach — mieszkania, domy, udziały, sprawy spadkowe i zadłużone. Transparentny proces, obsługa całego regionu.",
    breadcrumbLabel: "Skup nieruchomości Olsztyn",
    areaFocus: "olsztyn",
    hero: {
      eyebrow: "Olsztyn · Warmia i Mazury",
      title: "Skup nieruchomości w Olsztynie i okolicach",
      description:
        "Obsługujemy Olsztyn oraz całe województwo warmińsko-mazurskie. Kupujemy mieszkania, domy i udziały — również w sytuacjach spadkowych, spornych i zadłużonych.",
      image: "regionMap",
      points: DEFAULT_HERO_POINTS,
    },
    blocks: [
      {
        eyebrow: "Olsztyn i region",
        title: "Znamy warmińsko-mazurski rynek nieruchomości",
        description:
          "Obsługujemy całe województwo warmińsko-mazurskie — od Olsztyna po mniejsze miejscowości. Nieruchomość oglądamy na miejscu, a formalności prowadzimy korespondencyjnie lub u notariusza, bez konieczności dojazdu do biura.",
        points: [
          "Mieszkania, domy i udziały na terenie Warmii i Mazur.",
          "Sprawy spadkowe, współwłasność i nieruchomości zadłużone.",
          "Nieruchomość oglądamy na miejscu, u Ciebie.",
          "Obsługujemy również właścicieli mieszkających poza regionem.",
        ],
        image: "documentsOnDesk",
      },
      {
        eyebrow: "Jak to działa",
        title: "Prosty proces, bez wizyt w biurze",
        description:
          "Po zgłoszeniu analizujemy sytuację nieruchomości i przedstawiamy pisemną propozycję. Spotykamy się przy nieruchomości lub kontaktujemy zdalnie, a finalizację przeprowadzamy u notariusza w dogodnej lokalizacji.",
        points: [
          "Bezpłatna, niezobowiązująca analiza.",
          "Jasne warunki na piśmie.",
          "Finalizacja u notariusza.",
        ],
        image: "keysHandover",
        reverse: true,
      },
    ],
    iconGrid: {
      eyebrow: "Zakres",
      title: "Co kupujemy w Olsztynie i regionie",
      items: [
        {
          icon: Home,
          title: "Mieszkania i domy",
          description:
            "Nieruchomości mieszkalne w Olsztynie i na terenie całego województwa.",
        },
        {
          icon: Users,
          title: "Udziały i współwłasność",
          description:
            "Wykup udziałów oraz pomoc w wyjściu ze współwłasności.",
        },
        {
          icon: MapPin,
          title: "Obsługa całego regionu",
          description:
            "Warmia i Mazury — nie tylko Olsztyn, ale i mniejsze miejscowości.",
        },
      ],
    },
    cta: {
      title: "Masz nieruchomość w Olsztynie lub okolicach?",
      description:
        "Opisz swoją sytuację — przygotujemy niezobowiązującą propozycję i umówimy się na oględziny.",
    },
  },

  "skup-nieruchomosci-bialystok": {
    slug: "skup-nieruchomosci-bialystok",
    metaTitle: "Skup nieruchomości Białystok — mieszkania, domy, udziały",
    metaDescription:
      "Skup nieruchomości w Białymstoku i na Podlasiu — mieszkania, domy, udziały, sprawy spadkowe i zadłużone. Transparentny proces, obsługa całego regionu.",
    breadcrumbLabel: "Skup nieruchomości Białystok",
    areaFocus: "bialystok",
    hero: {
      eyebrow: "Białystok · Podlasie",
      title: "Skup nieruchomości w Białymstoku i okolicach",
      description:
        "Obsługujemy Białystok oraz całe województwo podlaskie. Kupujemy mieszkania, domy i udziały — również w sytuacjach spadkowych, spornych i zadłużonych.",
      image: "regionMap",
      points: DEFAULT_HERO_POINTS,
    },
    blocks: [
      {
        eyebrow: "Białystok i region",
        title: "Działamy na terenie całego Podlasia",
        description:
          "Obsługujemy województwo podlaskie w całości — od Białegostoku po mniejsze miejscowości. Do nieruchomości dojeżdżamy i oglądamy ją na miejscu, a formalności prowadzimy korespondencyjnie lub u notariusza, bez konieczności wizyty w biurze.",
        points: [
          "Mieszkania, domy i udziały na terenie Podlasia.",
          "Sprawy spadkowe, współwłasność i nieruchomości zadłużone.",
          "Dojeżdżamy na miejsce i oglądamy nieruchomość osobiście.",
          "Obsługujemy również właścicieli mieszkających poza regionem.",
        ],
        image: "documentsOnDesk",
      },
      {
        eyebrow: "Jak to działa",
        title: "Prosty proces, bez wizyt w biurze",
        description:
          "Po zgłoszeniu analizujemy sytuację nieruchomości i przedstawiamy pisemną propozycję. Spotykamy się przy nieruchomości lub kontaktujemy zdalnie, a finalizację przeprowadzamy u notariusza w dogodnej lokalizacji.",
        points: [
          "Bezpłatna, niezobowiązująca analiza.",
          "Jasne warunki na piśmie.",
          "Finalizacja u notariusza.",
        ],
        image: "keysHandover",
        reverse: true,
      },
    ],
    iconGrid: {
      eyebrow: "Zakres",
      title: "Co kupujemy w Białymstoku i regionie",
      items: [
        {
          icon: Home,
          title: "Mieszkania i domy",
          description:
            "Nieruchomości mieszkalne w Białymstoku i na terenie całego województwa.",
        },
        {
          icon: Users,
          title: "Udziały i współwłasność",
          description:
            "Wykup udziałów oraz pomoc w wyjściu ze współwłasności.",
        },
        {
          icon: MapPin,
          title: "Obsługa całego regionu",
          description:
            "Podlasie — nie tylko Białystok, ale i mniejsze miejscowości.",
        },
      ],
    },
    cta: {
      title: "Masz nieruchomość w Białymstoku lub okolicach?",
      description:
        "Opisz swoją sytuację — przygotujemy niezobowiązującą propozycję i umówimy się na oględziny.",
    },
  },
};

export const LANDING_SLUGS = Object.keys(LANDINGS);

// Zapewnia, że każdy obraz wskazuje na istniejący klucz w STOCK_PHOTOS.
export function resolveLandingPhoto(key: keyof typeof STOCK_PHOTOS): StockPhoto {
  return STOCK_PHOTOS[key];
}
