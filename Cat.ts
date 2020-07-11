/*

#2 Deno Program

- We will learn about args
- We will learn about await
- We will run about security

on command line type: deno run --allow-read Cat.ts

*/

for (let i = 0; i < Deno.args.length; i++) {
  const fileName = Deno.args[i];

  const file = await Deno.open(fileName);
  await Deno.copy(file, Deno.stdout);

  file.close();
}
