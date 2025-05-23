# pangram-api with http shortcut

(1).  isValid(PangramAPI()); // Nama pintasan

(1.1). [Buka tautan ini: ```http-shortcuts://a9b5a3c2-182a-46b4-be02-13084d1d7ce9```
```sh
showWindow({
  title: 'informations',
  text: [
    `id: ${shortcut.id}`,
    `name: ${shortcut.name}`,
    `desc: ${shortcut.description}`,
    `visible: ${shortcut.hidden}`,
    `scid: ${shortcut.category.id}`,
    `scname: ${shortcut.category.name}`
  ].join("\n"),
  fontSize: 24,
  monospace: true,
});

const recognizeArePangram = 'abcdefghijklmnopqrstuvwxyz'.split("");

const isPangram = (string) => {
    string = string.toLowerCase();   
    return recognizeArePangram.every(x => string.includes(x)) 
        ? "Got it, that correct!" + string
        : "It's not a Pangram sentence";
};

enqueueShortcut("PangramAPI()");
// executeShortcut("PangramAPI()");

const result = isPangram(getVariable("output"))
shareText(result);


```

(2). PangramAPI(); // Nama pintasan

(2.1). [Buka tautan ini] ```http-shortcuts://af252630-50ec-46ce-85f5-8f104cf5f248```

```sh
setShortcutHidden("PangramAPI()", true);
showWindow({
  title: 'informations',
  text: [
    "id: " + shortcut.id,
    "name: " + shortcut.name,
    "desc: " + shortcut.description,
    "visible: " + shortcut.hidden,
    "scid: " + shortcut.category.id,
    "scname: " + shortcut.category.name
  ].join("\n"),
  fontSize: 24,
  monospace: true,
});

const output = ""; /* Bikin manual di titik tiga => Variable => Tap + => Variable statis => Nama = output, Nilai = <kosongkan> / Nanti akan digenerate lewat ini */
const link = "https://pangram-api-u0a316s-projects.vercel.app/api/pangram"

const result = sendHttpRequest(
  link,
  {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  },
);

if (result.status == "success") {

const retrievedOutput = setVariable("output", result.response.body);
getVariable("output")

showToast('berhasil menyimpan variabel!'); 

} else if (result.status == "httpError") {
 
const retrievedOutput = setVariable("output", "Failed with status code " + result.response.statusCode);

getVariable("output")
showToast('berhasil menyimpan variabel!'); 


} else {
  const retrievedOutput = setVariable("output", "Failed with status network error " + result.networkError);

getVariable("output")
showToast('berhasil menyimpan variabel!'); 

}
```

