# pangram-api x http shortcut

(1).  isValid(PangramAPI()); // Nama pintasan

(1.1). [Buka tautan ini: ```http-shortcuts://a9b5a3c2-182a-46b4-be02-13084d1d7ce9```
```sh

/*
		name: isValid(PangramAPI())
		version: v2
		description: Versi ini menyertakan variable bertipe object yang sebelumnya memakai array yang dapat digunakan bersama(modular), nilai default dari variabel sharedObject akan null setelah tidak digunakan.

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

executeShortcut("readFrom()");
//("PangramAPI()");

const result = isPangram(getVariable("output"))

shareText(result); showDialog(result);
```

(2). PangramAPI(); // Nama pintasan

(2.1). [Buka tautan ini] ```http-shortcuts://af252630-50ec-46ce-85f5-8f104cf5f248```

```sh

```

