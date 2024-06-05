import { atomWithStorage } from "jotai/utils";

const counterAtom = atomWithStorage("counter", 0);

export { counterAtom };
