// src/constants/data.ts
import { Laptop, Wrench, Cog, ShieldAlert, Disc, Snowflake } from 'lucide-react';

export const SERVICES_LIST = [
  {
    id: '01',
    title: 'Diagnostyka Komputerowa',
    desc: 'Kasowanie błędów, adaptacje sterowników, pełen odczyt parametrów pracy silnika.',
    icon: Laptop,
  },
  {
    id: '02',
    title: 'Mechanika Pojazdowa',
    desc: 'Naprawy rozrządów, sprzęgieł, układów wydechowych i turbosprężarek.',
    icon: Wrench,
  },
  {
    id: '03',
    title: 'Remonty Silników',
    desc: 'Regeneracja głowic, wymiana pierścieni, panewek oraz kompleksowe odbudowy jednostek.',
    icon: Cog,
  },
  {
    id: '04',
    title: 'Zawieszenie & Układ Jezdny',
    desc: 'Wymiana wahaczy, amortyzatorów, sprężyn, sworzni oraz tulei.',
    icon: ShieldAlert,
  },
  {
    id: '05',
    title: 'Układy Hamulcowe',
    desc: 'Wymiana tarcz, klocków, płynu hamulcowego oraz regeneracja zacisków.',
    icon: Disc,
  },
  {
    id: '06',
    title: 'Serwis Klimatyzacji',
    desc: 'Napełnianie czynnikiem, próba szczelności azotem, ozonowanie i naprawa kompresorów.',
    icon: Snowflake,
  },
];

export const BRANDS = [
  'VOLKSWAGEN',
  'ŠKODA',
  'AUDI',
  'SEAT',
  'RENAULT',
  'DACIA',
  'CITROËN',
  'PEUGEOT',
];

export const COMPANY_INFO = {
  name: 'RENOMA CAR',
  address: 'ul. Szkolna 90, 62-064 Plewiska',
  phone: '509 664 358',
  phoneRaw: '+48509664358',
  email: 'serwis@renomacar.pl',
  hours: 'Pn - Pt: 08:00 – 17:00',
  saturday: 'Sobota: 09:00 – 14:00',
};