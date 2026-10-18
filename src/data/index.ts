import suwarData from "./global/suwar.json";
import ahzabData from "./nafi-al-madani/ahzab.json";
import atmanData from "./nafi-al-madani/atman.json";

type IquranCursor = { surah: number; ayah: number };
type IRiwaya = "Nāfiʿ al-Madanī" | "Āṣim al-Kūfī" | "Abū ʿAmr al-Baṣrī";

type Irange = {
  start: IquranCursor;
  end: IquranCursor;
};

type Iathman = Record<`${number}`, Irange>;
type Iahzab = Record<`${number}`, Irange>;
type Isuwar = Record<`${number}`, { en: string; ar: string }>;

export const suwar = suwarData as Isuwar;
export const ahzab = ahzabData as Iahzab;
export const atman = atmanData as Iathman;

// export { suwar:suwarRaw as Isuwar, ahzab, atman };
export type { Iathman, Iahzab, Isuwar };
