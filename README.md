# pangram-api x http shortcut

(1).  isValid(PangramAPI()); // Nama pintasan

(1.1). [Buka tautan ini: ``````
```javascript

/*
	name: isValid(PangramAPI())
	version: v2
	description: Pintasan ini untuk memeriksa apakah parameter berupa kalimat pangram atau tidak
	what's new: Versi ini menyertakan variable bertipe object yang sebelumnya memakai array --
 yang dapat digunakan bersama(modular), nilai default dari variabel sharedObject akan null --
setelah tidak digunakan.

*/

// const sharedObject = ""; aku udah bikin di variabel global

setVariable("sharedObject", JSON.stringify({
  id: shortcut.id,
  name: shortcut.name,
  description: shortcut.description,
  hidden: shortcut.hidden,
  category: {
    id: shortcut.category.id,
    name: shortcut.category.name,
  }
}));

const sharedObject = JSON.parse(getVariable("sharedObject")); // Ambil isi variabel
const jsonText = JSON.stringify(sharedObject, null, 2);
//showDialog("Lanjut?");
/*
showWindow({
  title: 'informations',
  text: jsonText,
  fontSize: 24,
  monospace: true,
});
*/

alert(jsonText);
const recognizeArePangram = 'abcdefghijklmnopqrstuvwxyz'.split("");

const isPangram = (string) => {
    string = string.toLowerCase();   
    return recognizeArePangram.every(x => string.includes(x)) 
        ? "Got it, that correct!\n" + string
        : "It's not a Pangram sentence";
};
wait(1000 /* milliseconds */);

executeShortcut("PangramAPI()");
//("readFrom()");
//(";

const result = isPangram(getVariable("output"))

shareText(result); showDialog(result);
```

(2). PangramAPI(); // Nama pintasan

(2.1). [Buka tautan ini] 

```javascript
/*
	name: PangramAPI()
	version: v2
	description: Jangan jalankan melalui ini melalui isValid saja, karena saling terhubung
	what's new: Versi ini menyertakan variable bertipe object yang sebelumnya memakai array

*/


setShortcutHidden("PangramAPI()", true);

setVariable("sharedObject", JSON.stringify({
  id: shortcut.id,
  name: shortcut.name,
  description: "not available", //shortcut.description,
  hidden: shortcut.hidden,
  category: {
    id: shortcut.category.id,
    name: shortcut.category.name,
  }
}));

const sharedObject = JSON.parse(getVariable("sharedObject")); // Ambil isi variabel
const jsonText = JSON.stringify(sharedObject, null, 2);
//showDialog("Lanjut?");
/*
showWindow({
  title: 'informations',
  text: jsonText,
  fontSize: 24,
  monospace: true,
});
*/

alert(jsonText);
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

setVariable("sharedObject", null);

showWindow({
  title: 'informations',
  text: "",
  fontSize: 24,
  monospace: true,
});
abortAll();
```

# Author : 

Fitryani
