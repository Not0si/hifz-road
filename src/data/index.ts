import suwarData from "./suwar.json";
import ahzabData from "./ahzab.json";
import atmanData from "./atman.json";
import pagesData from "./pages.json";

type IquranCursor = { surah: number; ayah: number };

type Irange = {
  start: IquranCursor;
  end: IquranCursor;
};

type Iathman = Record<`${number}`, Irange>;
type Iahzab = Record<`${number}`, Irange>;
type Ipages = Record<`${number}`, Irange>;
type Isuwar = Record<
  `${number}`,
  {
    name: { en: string; ar: string };
    ayahs: number;
    revelation: { en: string; ar: string };
  }
>;

export const suwar = suwarData as Isuwar;
export const ahzab = ahzabData as Iahzab;
export const atman = atmanData as Iathman;
export const pages = pagesData as Ipages;

export type { Iathman, Iahzab, Isuwar };
