import { Glob } from "bun";
const glob = new Glob("*");

for (const file of glob.scanSync("./Documentations")) {
    console.log(file);
}