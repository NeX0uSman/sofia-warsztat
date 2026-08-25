// src/constants/data.ts
import { Laptop, Wrench, Cog, ShieldAlert, Disc, Snowflake, Settings, Cpu, Sliders, Droplet } from 'lucide-react';

export const SERVICES_LIST = [
  {
    title: 'Naprawa Silników',
    desc: 'Kapitalne i bieżące remonty jednostek napędowych, diagnostyka głowic oraz usuwanie poważnych usterek mechanicznych.',
    icon: Wrench,
  },
  {
    title: 'Wymiana Rozrządu',
    desc: 'Kompleksowa wymiana układów rozrządu (paski i łańcuchy) wraz z pompą wody oraz uszczelnieniem silnika.',
    icon: Settings,
  },
  {
    title: 'Skrzynie Automatyczne',
    desc: 'Pełen serwis, diagnostyka i naprawa skrzyń DSG, PowerShift oraz tradycyjnych automatycznych przekładni hydrokinetycznych (AT).',
    icon: Cpu,
  },
  {
    title: 'Turbosprężarki i Wtryski',
    desc: 'Professionalna regeneracja turbosprężarek oraz testowanie i czyszczenie wtryskiwaczy w silnikach Diesla.',
    icon: Sliders,
  },
  {
    title: 'Serwis Olejowy i Filtry',
    desc: 'Wymiana oleju silnikowego i przekładniowego oraz kompletny zestaw filtrów (oleju, powietrza, paliwa, kabinowego).',
    icon: Droplet,
  },
  {
    title: 'Układy Hamulcowe',
    desc: 'Wymiana tarcz, klocków, płynu hamulcowego oraz pełny serwis i regeneracja zacisków hamulcowych.',
    icon: Disc,
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
  address: 'ul. Stawna 6A, 62-064 Plewiska',
  phone: '534 762 922',
  phoneRaw: '+48534762922',
  email: 'serwis@europejczyk.pl',
  hours: 'Pn - Pt: 09:00 – 18:00',
  saturday: 'Sobota: 09:00 – 14:00',
};