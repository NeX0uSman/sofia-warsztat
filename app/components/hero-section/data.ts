export type SystemKey = "engine" | "brakes" | "ac" | "obd";

export interface SystemDetail {
  key: SystemKey;
  tabNumber: string;
  tabTitle: string;
  tabSubtitle: string;
  pinLabel: string;
  top: string;
  left: string;
  badge: string;
  time: string;
  title: string;
  desc: string;
  price: string;
  selectOption: string;
}

export const SYSTEMS_DATA: Record<SystemKey, SystemDetail> = {
  engine: {
    key: "engine",
    tabNumber: "01. Silnik",
    tabTitle: "Olej i rozrząd",
    tabSubtitle: "Olej i rozrząd",
    pinLabel: "Komora silnika",
    top: "53%",
    left: "18%",
    badge: "Przegląd okresowy",
    time: "Czas: ok. 1.5 godz.",
    title: "Wymiana oleju, filtrów i kontrola rozrządu",
    desc: "Sprawdzamy szczelność silnika, poziom płynów i wysyłamy Ci zdjęcia zużytych części.",
    price: "220 zł",
    selectOption: "Wymiana oleju, filtrów i kontrola rozrządu",
  },
  brakes: {
    key: "brakes",
    tabNumber: "02. Podwozie",
    tabTitle: "Hamulce i koła",
    tabSubtitle: "Hamulce i koła",
    pinLabel: "Hamulce i zawieszenie",
    top: "68%",
    left: "24.5%",
    badge: "Bezpieczeństwo jazdy",
    time: "Czas: 1.5–2 godz.",
    title: "Wymiana klocków, tarcz oraz kontrola zawieszenia",
    desc: "Dobieramy sprawdzone części (ATE, Brembo, TRW) i sprawdzamy luzy na szarpakach.",
    price: "190 zł",
    selectOption: "Serwis hamulców lub zawieszenia",
  },
  ac: {
    key: "ac",
    tabNumber: "03. Klimatyzacja",
    tabTitle: "Nawiew i czynnik",
    tabSubtitle: "Nawiew i czynnik",
    pinLabel: "Układ klimatyzacji",
    top: "49%",
    left: "34%",
    badge: "Komfort w kabinie",
    time: "Czas: ok. 60 min",
    title: "Serwis klimatyzacji, ozonowanie i filtr kabinowy",
    desc: "Uzupełnienie czynnika, test szczelności azotem oraz usunięcie nieprzyjemnych zapachów.",
    price: "180 zł",
    selectOption: "Przegląd i odgrzybianie klimatyzacji",
  },
  obd: {
    key: "obd",
    tabNumber: "04. Elektronika",
    tabTitle: "Diagnostyka OBD",
    tabSubtitle: "Diagnostyka OBD",
    pinLabel: "Złącze OBD-II / ECU",
    top: "58%",
    left: "45%",
    badge: "Diagnostyka komputerowa",
    time: "Czas: ok. 45 min",
    title: "Odczyt błędów i sprawdzenie parametrów na żywo",
    desc: "Tłumaczymy co dokładnie oznacza kontrolka na desce i podajemy konkretny koszt naprawy.",
    price: "150 zł",
    selectOption: "Diagnostyka komputerowa i sprawdzenie błędów",
  },
};

export const ORDERED_KEYS: SystemKey[] = ["engine", "brakes", "ac", "obd"];
